(defproject simple-re-frame "0.4.0"
  :dependencies [
                 ;; Re-frame / Reagent
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3208"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [figwheel "0.2.6"]

                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 [cljs-http "0.1.35"]

                 [re-com "0.5.4"]

                 ]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.2.6"]]

  :min-lein-version "2.0.0"

  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:cljsbuild
                   {:builds {:client {:source-paths ["devsrc"]
                                      :compiler     {:main simpleexample.dev
                                                     :asset-path "js"
                                                     :optimizations :none
                                                     :source-map true
                                                     :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :main simpleexample.dev

  :figwheel {:repl false
             :server-port 7001}

  :jvm-opts ["-Xmx1g" "-server"]

  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}})
