(ns simpleexample.dev
  (:require [simpleexample.ticTacToe :as example]
            [figwheel.client :as fw]))

#_(fw/start {:on-jsload example/run
             :websocket-url "ws://localhost:7001/figwheel-ws"})

(defn -main
  []
  (example/run))
