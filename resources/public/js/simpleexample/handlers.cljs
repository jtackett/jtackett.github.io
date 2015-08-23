(ns simpleexample.handlers
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]))

(def initial-state
  ;; This loads the initial state of the db upon app load
  {:timer (js/Date.)
   :time-color "#f34"
   :procedure-code "D"  ;; This read string is the cljs.reader version ***see ns requires
   :procedure-info ""
   :procedure-db [{:code "D0120"
                   :name "Periodic Oral Evaluation - Established Patient"
                   :description "An evaluation performed on a patient of record to determine any changes in the patient's dental and medical health status
                   since a previous comprehensive or periodic evaluation."
                   :related ["D0180"
                             "D0150"
                             "D0145"]
                   :higher-paid ["D0145"
                                 "D0150"]}

                  {:code "D0140"
                   :name "Limited Oral Evaluation - Problem Focused"
                   :description ""
                   :related ["D9110"
                             "D0220"
                             "D0230"
                             "D0272"
                             "D0273"
                             "D0274"
                             "D0460"]
                   :higher-paid []}

                  {:code "D0145"
                   :name "Oral Evaluation for a patient under three years of age and counseling with primary caregiver"
                   :description ""
                   :related ["D0120"
                             "D1120"
                             "D1208"
                             "D1206"
                             "D0150"]
                   :higher-paid []}

                  {:code "D0150"
                   :name "comprehensive oral evaluation - new or etablished patient"
                   :description "This applies to new patients; established patients who have had a significant change in health conditions or
                   other unusual circumstances, by report, or established patients who have been absent from active treatment for three or more years."
                   :related ["D0180"
                             "D9310"
                             "D4355"]
                   :higher-paid []}]})


;; -- Event Handlers ----------------------------------------------------------


(register-handler                 ;; setup initial state
 :initialize                     ;; usage:  (submit [:initialize])
 (fn
   [db _]
   (merge db initial-state)))    ;; what it returns becomes the new state


(register-handler
 :time-color                     ;; usage:  (submit [:time-color 34562])
 (path [:time-color])            ;; this is middleware
 (fn
   [time-color [_ value]]        ;; path middleware adjusts the first parameter
   value))

(register-handler
 :timer
 (fn
   ;; the first item in the second argument is :timer the second is the
   ;; new value
   [db [_ value]]
   (assoc db :timer value)))    ;; return the new version of db


(register-handler
 :procedure-code                     ;; usage:  (submit [:time-color 34562])
 (path [:procedure-code])            ;; this is middleware
 (fn
   [procedure-code [_ value]]        ;; path middleware adjusts the first parameter
   value))
