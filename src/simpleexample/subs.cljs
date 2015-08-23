(ns simpleexample.subs
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]))


;; -- Subscription Handlers ---------------------------------------------------


(register-sub
 :timer
 (fn
   [db _]                       ;; db is the app-db atom
   (reaction (:timer @db))))    ;; wrap the computation in a reaction


(register-sub
 :time-color
 (fn
   [db _]
   (reaction (:time-color @db))))

(register-sub
 :procedure-code
 (fn
   [db _]
   (reaction (:procedure-code @db))))

(register-sub
 :procedure-info
 (fn
   [db _]
   (reaction
    (let [pro-code (:procedure-code @db)
          pro-info (first (filter (fn [x] (= pro-code (:code x))) (:procedure-db @db)))
          pro-info-display (str (:name pro-info)
                                (:description pro-info))]
      (if (nil? pro-info)
        "The code you entered does not exist"
        pro-info-display)))))

