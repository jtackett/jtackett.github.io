(ns simpleexample.views
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]))


;; -- View Components ---------------------------------------------------------

(defn greeting
  [message]
  [:h1 message])


(defn clock
  []
  (let [time-color (subscribe [:time-color])
        timer (subscribe [:timer])]

    (fn clock-render
      []
      (let [time-str (-> @timer
                         .toTimeString
                         (clojure.string/split " ")
                         first)
            style {:style {:color @time-color}}]
        [:div.example-clock style time-str]))))


(defn color-input
  []
  (let [time-color (subscribe [:time-color])]

    (fn color-input-render
      []
      [:div.color-input
       "Color: "
       [:input {:type "text"
                :value @time-color
                :on-change #(dispatch
                             [:time-color (-> % .-target .-value)])}]])))

(defn procedure-code-input
  []
  (let [procedure-code (subscribe [:procedure-code])]

    (fn procedure-code-input-render
      []
      [:div.color-input
       "Procedure Code: "
       [:input {:type "text"
                :value @procedure-code
                :on-change #(dispatch
                             [:procedure-code (-> % .-target .-value)])}]])))

(defn procedure-info
  []
  (let [procedure-info (subscribe [:procedure-info])
        _ (prn @procedure-info)]

    (fn procedure-info-render
      []
      [:div [:h1 @procedure-info]]
      )))



(defn simple-example
  []
  [:div
   [greeting "Welcome to Dental Insurance Procedure Code Library"]
   [clock]
   [color-input]
   [procedure-code-input]
   [procedure-info]])
