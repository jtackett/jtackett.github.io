(ns simpleexample.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
            [cljs.reader :refer [read-string]]
            [re-com.core :refer [button
                                 info-button
                                 input-text
                                 input-textarea
                                 datepicker-dropdown
                                 v-box
                                 hyperlink
                                 h-box
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

;; -- Utils -------------------------------------------------------------

(defn decimal?
  [d]
  (> (count(clojure.string/split d ".")) 1))

(defn string->currency
  [s]
  (let [split (clojure.string/split s ".")
        left (first split)
        right (clojure.string/join (take 2 (second split)))]
    (if  (decimal? s)
      (str left "." right)
      s)))

(defn avoid-nil [s]
  (if s (str s) ""))

;; ----------------------------------------------------------------------------

(def initial-state
  ;; This loads the initial state of the db upon app load
  {:procedure-code "D"  ;; This read string is the cljs.reader version ***see ns requires
   :procedure-info ""
   :nav-panel :investment-calculator
   :search-term ""
   :username ""
   :password ""
   :check-login "not checking"
   :purchase-discount 70
   :down-payment-percent 20
   :monthly-rent-percent 1.5
   :expense-percent 50})

;; -- Event Handlers ----------------------------------------------------------

(register-handler                 ;; setup initial state
 :initialize                     ;; usage:  (submit [:initialize])
 (fn
   [db _]
   (merge db initial-state)))    ;; what it returns becomes the new state

(register-handler
 :nav-panel                     ;; usage:  (submit [:time-color 34562])
 (path [:nav-panel])            ;; this is middleware
 (fn
   [nav-panel [_ value]]        ;; path middleware adjusts the first parameter
   value))


;; -- logout

(register-handler
 :logout                    ;; usage:  (submit [:time-color 34562])
 (fn
   []
   (doall (dispatch [:username ""]))
   (doall (dispatch [:password ""]))
   (dispatch [:check-login "failed"])))



;; -- Subscription Handlers ---------------------------------------------------
;; ----------------------------------------------------------------------------

;; -- General subs
(register-sub
 :nav-panel
 (fn
   [db _]
   (reaction (:nav-panel @db))))

;; -- Login -------------------------------------------------------------


(register-sub
 :username
 (fn
   [db _]
   (reaction (:username @db))))

(register-sub
 :password
 (fn
   [db _]
   (reaction (:password @db))))

(register-sub
 :check-login
 (fn
   [db _]
   (reaction
    (let [username (:username @db)
          password (:password @db)]

      (if (some true?
                (map (fn [x] (and (= username
                                     (:username x))
                                  (= password
                                     (:password x))))
                     users))
        "success"
        "failed")))))

;;  -- login ----------------------------------------------------------------------------

(register-handler
 :username                   ;; usage:  (submit [:time-color 34562])
 (path [:username])            ;; this is middleware
 (fn
   [username [_ value]]        ;; path middleware adjusts the first parameter
   value))

(register-handler
 :password                   ;; usage:  (submit [:time-color 34562])
 (path [:password])            ;; this is middleware
 (fn
   [password [_ value]]        ;; path middleware adjusts the first parameter
   value))

(register-handler
 :check-login                   ;; usage:  (submit [:time-color 34562])
 (path [:check-login])            ;; this is middleware
 (fn
   [check-login [db value]]        ;; path middleware adjusts the first parameter
   (dispatch [:nav-panel "check login"])
   value))


;; -- code lookup ----------------------------------------------------------------------------

(defn make-handler [k]
  (register-handler
   (keyword k)
   (path [(keyword k)])
   (fn
     [k [_ value]]
     value)))

(make-handler "property-value")
(make-handler "purchase-price")
(make-handler "down-payment")
(make-handler "repair-costs")
(make-handler "interest-rate")
(make-handler "mortgage-term-years")
(make-handler "purchase-discount")
(make-handler "down-payment-percent")
(make-handler "monthly-rent-percent")
(make-handler "expense-percent")


;; -- code lookup subs -------------------------------------------------------------

(defn make-sub [k]
  (register-sub
   (keyword k)
   (fn
     [db _]
     (reaction ((keyword k) @db)))))

(make-sub "property-value")
(make-sub "purchase-price")
(make-sub "repair-costs")
(make-sub "down-payment")
(make-sub "interest-rate")
(make-sub "mortgage-term-years")
(make-sub "purchase-discount")
(make-sub "down-payment-percent")
(make-sub "monthly-rent-percent")
(make-sub "expense-percent")

(register-sub
 :suggested-purchase-price
 (fn
   [db _]
   (let [property-value (subscribe [:property-value])
         repair-costs  (subscribe [:repair-costs])
         purchase-discount (subscribe [:purchase-discount])]

     (reaction (-
                (*
                 (+ (js/parseInt @property-value)
                    (js/parseInt @repair-costs))
                 (/ (js/parseFloat @purchase-discount) 100))
                (js/parseInt @repair-costs))))))

(register-sub
 :suggested-down-payment
 (fn
   [db _]
   (let [purchase-price (subscribe [:purchase-price])
         down-payment-percent (subscribe [:down-payment-percent])]
     (reaction (* (/ (js/parseFloat @down-payment-percent) 100)
                  (js/parseInt @purchase-price))))))

(register-sub
 :monthly-rent
 (fn
   [db _]
   (let [purchase-price (subscribe [:purchase-price])
         repair-costs  (subscribe [:repair-costs])
         monthly-rent-percent (subscribe [:monthly-rent-percent])]
     (reaction (+
                (* (/ (js/parseFloat @monthly-rent-percent) 100)
                   (js/parseInt @purchase-price))
                (js/parseInt @repair-costs))))))

(register-sub
 :expenses
 (fn
   [db _]
   (let [monthly-rent (subscribe [:monthly-rent])
         expense-percent (subscribe [:expense-percent])]
     (reaction (* (/ (js/parseFloat @expense-percent) 100)
                  (js/parseInt @monthly-rent))))))

;(Monthly Payment) = (Loan Amount)[c(1 + c)n]/[(1 + c)n - 1]
; js/Math.pow
(register-sub
 :monthly-mortgage
 (fn
   [db _]
   (let [purchase-price (subscribe [:purchase-price])
         down-payment (subscribe [:down-payment])
         loan-amount (reaction (- (js/parseInt @purchase-price)
                                  (js/parseInt @down-payment)))
         interest-rate (subscribe [:interest-rate])
         monthly-int-rate (reaction (/ (/ (js/parseFloat @interest-rate) 100) 12))
         payment-term-years (subscribe [:mortgage-term-years])
         payment-term-months (reaction (* 12 @payment-term-years))]

     (reaction (* @loan-amount (/
                                (* @monthly-int-rate (js/Math.pow (+ 1 @monthly-int-rate) @payment-term-months))
                                (- (js/Math.pow (+ 1 @monthly-int-rate) @payment-term-months) 1)))))))

(register-sub
 :cashflow
 (fn
   [db _]
   (let [monthly-rent (subscribe [:monthly-rent])
         monthly-expenses (subscribe [:expenses])
         monthly-mortgage (subscribe [:monthly-mortgage])]
     (reaction (- (js/parseInt @monthly-rent)
                  (+ (js/parseInt @monthly-expenses)
                     (js/parseInt @monthly-mortgage)))))))

;; -- View Components ---------------------------------------------------------

;; -- Code Lookup Panel -------------------------------------------------------------

(defn simple-input
  [t sym message sub k]
  [h-box
   :gap "1"
   :children [

              [h-box
               :children [[title
                           :label (str t)
                           :style {:font-size "300%"}]
                          [info-button :info message]]]
              [h-box
               :children [[title
                           :label sym
                           :style {:font-size "300%"}]
                          [:input {:type "text"
                                   :value @sub
                                   :on-change #(dispatch
                                                [k (-> % .-target .-value)])
                                   :style {:font-size "300%"
                                           :width "70%"
                                           :height "70%"
                                           :border "solid"
                                           :border-radius "10px"}}]]]]])

(defn simple-display
  [t sym message sub k]
  [h-box
   :gap "1"
   :children [[h-box
               :children [[title
                           :label (str t)
                           :style {:font-size "300%"}]
                          [info-button
                           :info message]]]
              [h-box
               :style {:margin-right "10%"}
               :children [[title
                           :label (str sym" "(string->currency (str @sub)))
                           :style {:font-size "300%"}]]]]])

(defn input-with-suggestion
  [t sym message sub k suggestion-sub]
  [v-box
   :children
   [(simple-input t sym message sub k)
    (when @suggestion-sub
      [v-box
       :gap "5px"
       :children
       [[h-box
         :children
         [[title
           :label (str t " suggestions: ")
           :style {:font-size "250%"}]
          [title
           :label (when (not (= "NaN" (pr-str @suggestion-sub)))
                    (string->currency (str @suggestion-sub)))
           :style {:font-size "250%"}]]]]])]])



(defn property-data-input
  []
  (let [;; input & suggestions
        property-value (subscribe [:property-value])

        purchase-price (subscribe [:purchase-price])
        suggested-purchase-price (subscribe [:suggested-purchase-price])

        repair-costs (subscribe [:repair-costs])

        down-payment (subscribe [:down-payment])
        suggested-down-payment (subscribe [:suggested-down-payment])

        interest-rate (subscribe [:interest-rate])

        mortgage-term-years (subscribe [:mortgage-term-years])

        ;;output
        monthly-rent (subscribe [:monthly-rent])
        expenses (subscribe [:expenses])
        monthly-mortgage (subscribe [:monthly-mortgage])
        cashflow (subscribe [:cashflow])]
    (fn
      []
      [v-box
       :style {:margin-left "5%"}
       :children
       [[:br]
        [title
         :label "Property "
         :underline? true
         :style {:font-size "400%"
                 :margin-top "0px"}]

        [box
         :style {:max-width "10px"}
                           :child
                           [md-icon-button
                            :md-icon-name "zmdi-delete"]]

        (simple-input "Property Value "
                      "$"
                      "This is the value of the property not necessarily the purchase price.
                      There are many ways to figure out the properties value.
                      One way is to look at comparable properties or properties that are similar
                      and in the same area."
                      property-value
                      :property-value)

        (simple-input "Repair Costs "
                      "$"
                      "This is the amount you intend to pay for repairs to the property"
                      repair-costs
                      :repair-costs)

        (input-with-suggestion "Purchase Price "
                               "$"
                               "This is the amount you actually pay for the property."
                               purchase-price
                               :purchase-price
                               suggested-purchase-price)

        [title
         :label "Mortgage "
         :underline? true
         :style {:font-size "400%"}]
        (input-with-suggestion "Down Payment "
                               "$"
                               "This is the amount you intend to pay upfront for the property.
                               This amount will be subtracted from the purchase price to calculate
                               your total loan amount."
                               down-payment
                               :down-payment
                               suggested-down-payment)

        (simple-input "Interest Rate "
                      "%"
                      "This is the amount of interest that the bank will require when paying back the loan"
                      interest-rate
                      :interest-rate)

        (simple-input "Term "
                      ""
                      "The number of years over which you will pay back the loan amount"
                      mortgage-term-years
                      :mortgage-term-years)

        [title
         :label "Calculated Predictions "
         :underline? true
         :style {:font-size "400%"}]
        (simple-display "Monthly Rent "
                        "$"
                        "This is the monthly rent you should be striving to charge for the apartment.
                        This is assuming that the repairs included above have already been made
                        prior to renting the apartment."
                        monthly-rent
                        :monthly-rent)

        (simple-display "Monthly Expenses "
                        "$"
                        "The 50% of expenses includes all expenses, including  repairs, vacancies,
                        utilities, taxes, insurance, management, turnover costs,
                        and the occasional big ticket repairs. NOT including mortgage payments."
                        expenses
                        :expenses)

        (simple-display "Monthly Mortgage "
                        "$"
                        "This is based on a 15 year mortgage at a 5% intereset rate"
                        monthly-mortgage
                        :monthly-mortgage)

        [title
         :label ""
         :underline? true]

        (simple-display "Cashflow "
                        "$"
                        "This is what it's all about"
                        cashflow
                        :cashflow)

        (when (not (= "NaN" (pr-str @cashflow)))
          (if (> @cashflow 0)
            [title
             :label "Passed"
             :style {:color "#A7FF89"
                     :font-size "500%"
                     :text-shadow "0px 0px 3px #777"
                     :padding-left "35%"}]
            [title
             :label "Failed"
             :style {:color "#FF6666"
                     :font-size "500%"
                     :text-shadow "0px 0px 3px #777"
                     :padding-left "35%"}]))]])))

(defn rules-of-thumb-input
  []
  (let [purchase-discount (subscribe [:purchase-discount])
        down-payment-percent (subscribe [:down-payment-percent])
        monthly-rent-percent (subscribe [:monthly-rent-percent])
        expense-percent (subscribe [:expense-percent])]
    (fn []
      [v-box
       :style {:margin-left "5%"}
       :children
       [[title
         :label "Rules"
         :underline? true
         :style {:font-size "400%"}]
        (simple-input "Purchase Discount "
                      "%"
                      "This is the percent of the property value you plan to pay for the property.
                      For example if the property value is 100,000 and you want to pay 70,000
                      then you would put 70% here. This is a way of making sure you get a good deal
                      when buying a property. It is no different then when you only pay 70% of the
                      purchase price on those new shoes."
                      purchase-discount
                      :purchase-discount)

        (simple-input "Down Payment "
                      "%"
                      "This is the percentage of the purchase price / loan amount you want to try to pay \"down\"
                      or in other words pay upfront."
                      down-payment-percent
                      :down-payment-percent)

        (simple-input "Monthly Rent "
                      "%"
                      "This is the percentage of the purchase price that will be charged monthly for rent."
                      monthly-rent-percent
                      :monthly-rent-percent)

        (simple-input "Monthly Expenses "
                      "%"
                      "This is the percentage of the monthly rent that you will reserve for expenses.
                      This includes: repairs, vacancies, utilities, taxes, insurance, management,
                      turnover costs, and the occasional \"big ticket\" repairs"
                      expense-percent
                      :expense-percent)]])))

;; -- General Components ---------------------------------------------------------

(defn greeting
  [message]
  [:div
   [:div.center.banner
    [title
     :label "REI Pocket Calculator"
     :style {:font-size "600%"
             :margin-left "10%"
             :margin-bottom "0px"
             :color "whitesmoke"}]]
   [:br]])

(defn footer-navigation
  []
  (let []
    [h-box
     :style {:position "fixed"
             :bottom 0}
     :max-width "100%"
     :min-width "100%"
     :height "10%"
     :children [[:button.trim.nav
                 {:on-click
                  #(dispatch
                    [:nav-panel :investment-calculator])}
                 "Investment Calculator"]
                [:button.trim.nav
                 {:on-click
                  #(dispatch
                    [:nav-panel :rules-of-thumb])}
                 "Rules of Thumb"]]]))

;; -- Login -------------------------------------------------------------

(defn login-form
  []
  (let [username (subscribe [:username])
        password (subscribe [:password])]
    [:div.login
     [:br]
     [:br]
     [:br]

     [:h1 "LOGIN"]
     [:input {:type "text"
              :value @username
              :on-change #(dispatch
                           [:username (-> % .-target .-value)])}]
     [:br]
     [:input {:type "password"
              :value @password
              :on-change #(dispatch
                           [:password (-> % .-target .-value)])}]
     [:br]
     [:button.small
      {:on-click
       #(dispatch
         [:check-login "checking"])}
      "Login"]]))

(defn check-login-page
  []
  (let [check-status @(subscribe [:check-login])
        username @(subscribe [:username])
        password @(subscribe [:password])]
    (fn check-login-page-render
      []
      [:div
       [:h1 "Logging In"]]

      (when (not (or (= check-status "not checking")
                     (= check-status "checking")))
        (if (= check-status "success")
          (if (and (= "test" username)
                   (= "test" password))
            ;; == Checks to see if this is a test user ===
            (doall (dispatch [:nav-panel "code lookup"]))
            (dispatch [:nav-panel "code lookup"]))
          (dispatch [:nav-panel "login"]))))))

(defn contact-us
  []
  (fn contact-us-render
    []
    [v-box
     :children [[:h4.footer "Contact us at codental.website@gmail.com"]]]))

(defn investment-calculator
  []
  [v-box
   :children[[greeting]
             [property-data-input]
             [:br]
             [:br]
             [:br]


             [footer-navigation]]])

(defn rules-of-thumb
  []
  [v-box
   :children[[greeting]
             [rules-of-thumb-input]
             [footer-navigation]]])

(defn login
  []
  [:div
   [greeting]
   [login-form]
   [contact-us]])

(defn check-login
  []
  [:div
   [check-login-page]])

(defn simple-example
  "This is the framework for the app.
  The condp along with the nav-panel key in the @db
  provide a nice navigation/routing framework
  while building within a singlepage application"
  []
  [v-box
   :children
   [(let [nav-panel  (subscribe [:nav-panel])]
      (when (not (nil? @nav-panel))
        (condp = @nav-panel

          :investment-calculator
          [:div
           [investment-calculator]]

          :rules-of-thumb
          [:div
           [rules-of-thumb]]

          "login"
          [:div
           [login]]

          "check login"
          [:div
           [check-login]]

          [:div
           [login]])))]])



;; -- Entry Point -------------------------------------------------------------


(defn ^:export run
  []
  (dispatch-sync [:initialize])
  (reagent/render [simple-example]
                  (js/document.getElementById "app")))



;; Procedure DB

;; ======================================================================================
;; ======================================================================================



