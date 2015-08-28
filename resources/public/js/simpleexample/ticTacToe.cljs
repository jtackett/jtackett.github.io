(ns simpleexample.ticTacToe
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
            [cljs.reader :refer [read-string]]
            [cljs-http.client :as http]
            [re-com.core :refer [button
                                 info-button
                                 input-text
                                 input-textarea
                                 datepicker-dropdown
                                 v-box
                                 hyperlink
                                 h-box
                                 gap
                                 throbber
                                 checkbox
                                 input-time
                                 title
                                 label
                                 box
                                 horizontal-pill-tabs
                                 horizontal-bar-tabs
                                 scroller
                                 progress-bar
                                 md-icon-button]]))

(enable-console-print!)

;; -- Utils -------------------------------------------------------------------

(defn avoid-nil [s]
  (if s (str s) ""))

(defn make-new-board
  "A method to make a new board for the beginning of games"
  []
  (mapv #(identity {:position %})
        (range 1 10)))

(defn split-board-rows
  "A simple helepr method to split the board into rows.
  This method could be inline, but it is more readable if
  I give it a good name in larger functions"
  [board]
  (partition 3 board))

;; ----------------------------------------------------------------------------

(def initial-state
  ;; This loads the initial state of the db upon app load
  {:game-board (make-new-board)
   :whos-turn "X"
   :nav-panel :current-game
   :old-games []
   :undo-position nil
   :ai? false
   :x-wins 0
   :o-wins 0})

;; -- Event Handlers ----------------------------------------------------------

(register-handler                 ;; setup initial state
 :initialize                     ;; usage:  (submit [:initialize])
 (fn
   [db _]
   (merge db initial-state)))    ;; what it returns becomes the new state

(register-handler
 :nav-panel
 (path [:nav-panel])            ;; this is middleware
 (fn
   [nav-panel [_ value]]        ;; path middleware adjusts the first parameter
   value))

;; -- Subscription Handlers ---------------------------------------------------
;; ----------------------------------------------------------------------------

;; -- General subs
(register-sub
 :nav-panel
 (fn
   [db _]
   (reaction (:nav-panel @db))))

;; -- code lookup -------------------------------------------------------------

(defn make-handler
  "Helper function to register a simple handler
  that doesn't require calcualtions"
  [k]
  (register-handler
   (keyword k)
   (path [(keyword k)])
   (fn
     [k [_ value]]
     value)))

(make-handler "undo-position")
(make-handler "ai")


(register-handler
 :undo
 (path [:game-board])            ;; this is middleware
 (fn
   [game-board [db value]]
   (let [undo-position (subscribe [:undo-position])]

     (mapv #(if (= @undo-position (:position %))
              (if (:symbol %) ;;Make sure there is a symbol to dissoc
                (do
                  (dispatch [:switch-player]) ;;Switches the player back
                  (dissoc % :symbol)))
              %)
           game-board))))

(register-handler
 :switch-player
 (path [:whos-turn])            ;; this is middleware
 (fn
   [whos-turn [db value]]
   (let [players-turn (subscribe [:whos-turn])]
     (if (= @players-turn "X")
       "O"
       "X"))))

(register-handler
 :x-wins
 (path [:x-wins])            ;; this is middleware
 (fn
   [x-wins [db value]]
   (let [x-wins (subscribe [:x-wins])]
     (inc @x-wins))))

(register-handler
 :o-wins
 (path [:o-wins])            ;; this is middleware
 (fn
   [o-wins [db value]]
   (let [o-wins (subscribe [:o-wins])]
     (inc @o-wins))))


(register-handler
 :save
 (path [:old-games])            ;; this is middleware
 (fn
   [old-games [db game]]
   (let [old-games (subscribe [:old-games])]
     (conj @old-games game))))

;; Board checking
;; =================================================================================
(defn- check-horizontal [board]
  (let [winner (for [x [0 3 6]]
                 (let [f (get board x)]
                   (if (and (= f (get board (+ x 1)))
                            (= f (get board (+ x 2))))
                     f "")))]
    (remove empty? winner)))

(defn- check-vertical [board]
  (let [winner (for [x [0 1 2]]
                 (let [f (get board x)]
                   (if (and (= f (get board (+ x 3)))
                            (= f (get board (+ x 6))))
                     f "")))]
    (remove empty? winner)))

(defn- check-diaganal [board]
  (let [center (get board 4)]
    (cond
     (and (= center (get board 0)) (= center (get board 8)))
     [center]

     (and (= center (get board 2)) (= center (get board 6)))
     [center]

     :default nil)))

(defn check-winner
  "A set of methods which require the board as a vector of
  player symbols or nils"
  [board]
  (first (concat (check-horizontal board)
                 (check-vertical board)
                 (check-diaganal board))))

(defn board-full?
  "Checks to see if the board is full given a vector of maps
  which is the standard representation for the board in this application"
  [board]
  (if (some nil? (mapv :symbol board))
    false
    (do (js/alert "The Game is a DRAW!!! Please lower your weapons")
      true)))

;; And this is as far as I made it...
(defn next-ai-move [board]
  (let [rows (split-board-rows board)]

    ))

(defn check-board
  "Check to see if the board is full, or if there is winner
  Returns the old board for things to continue or a fresh board"
  [board]
  ;; Checks if board is full
  (if (board-full? board)
    (do
      (dispatch [:save board]) ;; Async side effect
      (make-new-board))
    ;; Check for a winner
    (if-let [winner (check-winner (mapv :symbol board))]
      (do
        (dispatch [:save board]) ;; Async side effect
        (if (= "X" winner)
          (dispatch [:x-wins])
          (dispatch [:o-wins]))
        (js/alert (str "The WINNER is....." winner "!!!"))
        (make-new-board))
      board)))

;; ====================================================================================

(defn complete-move
  "Handles the logic for completing a move and switching players"
  [board-position players-turn game-board]
  (mapv #(if (= board-position (:position %))
           (if (nil? (:symbol %))
             ;; If the spot is open
             (do
               (dispatch [:switch-player])
               (dispatch [:undo-position (:position %)])
               (assoc % :symbol @players-turn))

             ;; If the spot isn't open...and they click anyway
             (do
               (js/alert "You can't go there!")
               %))
           (do
             (dispatch [:switch-player])
             %))
        game-board))

(register-handler
 :move
 (path [:game-board])            ;; this is middleware
 (fn
   [game-board [db board-position]]
   (let [players-turn (subscribe [:whos-turn])
         new-board (complete-move board-position players-turn game-board)]
     (check-board new-board))))


;; -- code lookup subs -------------------------------------------------------------

(defn make-sub [k]
  (register-sub
   (keyword k)
   (fn
     [db _]
     (reaction ((keyword k) @db)))))

(make-sub "game-board")
(make-sub "whos-turn")
(make-sub "old-games")
(make-sub "undo-position")
(make-sub "ai")
(make-sub "o-wins")
(make-sub "x-wins")

(register-sub
 :progress
 (fn
   [db _]
   (let [game-board (subscribe [:game-board])
         move-value (* 100 (/ 1 9))
         current-progress (reaction (* move-value (count (filter :symbol @game-board))))]
     (reaction @current-progress))))

;; -- View Components ---------------------------------------------------------

;; -- Code Lookup Panel -------------------------------------------------------------

(defn cell-button
  "Creates the button for the board"
  [cell-contents & old?]
  [:button.trim.nav
   (merge
    {:on-click
     (if (ffirst old?)
       #(js/alert "This is an old board. Please go back to the current game to play")
       #(do
          (dispatch [:move (:position cell-contents)])))}

    ;; Handles button on board changing color
    (condp = (:symbol cell-contents)

      "X"
      {:style {:background-color "#373737"
               :color "#FFF"
               :height "100px"}}

      "O"
      {:style {:background-color "#373737"
               :color "#FFF"
               :height "100px"}}

      {}))
   (or (:symbol cell-contents) "open")])

(defn undo-button []
  [:button.trim.nav
   {:on-click #(dispatch [:undo])}
   "UNDO Last Move"])

(defn display-board
  [board & old?]
  [v-box
   :children
   [[v-box
     :children
     (mapv (fn [row]
             [h-box
              :children
              [(for [cell row]
                 ^{:key (:position cell)}
                 (cell-button cell old?))]])
           (split-board-rows board))]
    (when-not old?
      (undo-button))]])


(defn current-game
  []
  (let [board (subscribe [:game-board])
        current-player (subscribe [:whos-turn])
        ai? (subscribe [:ai])
        progress (subscribe [:progress])]
    (fn []
      [v-box
       :style
       {:margin-left "5%"
        :margin-right "20%"}
       :children
       [[title
         :label "Tic Tac Toe "
         :underline? true
         :style {:font-size "150%"}]
        [h-box
         :gap "1"
         :children
         [[title
           :label (str "Whoever is " @current-player "'s ... You're up!")
           :level :level1]

          [progress-bar
           :model progress
           :width "200px"
           :style {:margin-top "20%"}]]]
        (display-board @board)
        [checkbox
         :label "Play the computer? (Not working yet)"
         :model ai?
         :on-change #(dispatch [:ai (not @ai?)])]]])))

(defn old-game
  []
  (let [old-games (subscribe [:old-games])
        x-wins (subscribe [:x-wins])
        o-wins (subscribe [:o-wins])]
    (fn []
      [v-box
       :style
       {:margin-left "5%"
        :margin-right "20%"
        :margin-bottom "30%"}
       :children
       [[title
         :label "Old Games"
         :underline? true
         :style {:font-size "150%"}]
        [title
         :label (str "X's have won: " @x-wins "  and O's have won " @o-wins "... "
                     (when (> (+ @x-wins @o-wins) 0)
                       (cond
                        (> @x-wins @o-wins)
                        "Great Job X's"

                        (< @x-wins @o-wins)
                        "Great Job O's"

                        (= @x-wins @o-wins)
                        "May the best man/woman win!")))
         :level :level2]
        [v-box
         :gap "20px"
         :max-width "70%"
         :children
         (mapv display-board (reverse @old-games) (repeat true))]]])))

;; -- General Components ---------------------------------------------------------

(defn greeting
  [message]
  [:div
   [title
    :label "Disco Melee "
    :underline? true
    :style {:font-size "150%"
            :margin-top "10px"
            :margin-left "10px"}]])

(defn footer-navigation
  []
  (let [nav-panel (subscribe [:nav-panel])]
    [h-box
     :style {:position "fixed"
             :bottom 0}
     :max-width "100%"
     :min-width "100%"
     :height "10%"
     :children [[:button.trim.nav
                 (merge
                  {:on-click
                   #(dispatch
                     [:nav-panel :current-game])}
                  (when (= @nav-panel :current-game)
                    {:style {:background-color "#373737"
                             :color "#FFF"}}))
                 "Current Game"]
                [:button.trim.nav
                 (merge
                  {:on-click
                   #(dispatch
                     [:nav-panel :old-games])}
                  (when (= @nav-panel :old-games)
                    {:style {:background-color "#373737"
                             :color "#FFF"}}))
                 "Old Games"]]]))

(defn game []
  [:div
   [greeting]
   [current-game]
   [footer-navigation]])

(defn game-history []
  [:div
   [greeting]
   [old-game]
   [footer-navigation]])


(defn simple-example
  "This is the framework for the app.
  The condp along with the nav-panel key in the @db
  provide a nice navigation/routing framework
  while building within a singlepage application"
  []
  [v-box
   :width "100%"
   :children
   [(let [nav-panel  (subscribe [:nav-panel])]
      (when (not (nil? @nav-panel))
        (condp = @nav-panel

          :current-game
          [game]

          :old-games
          [game-history]

          [game])))]])



;; -- Entry Point -------------------------------------------------------------


(defn ^:export run
  []
  (dispatch-sync [:initialize])
  (r/render [simple-example]
            (js/document.getElementById "app")))



;; Procedure DB

;; ======================================================================================
;; ======================================================================================



