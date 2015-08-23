(ns stock-analysis.utils)

(defn zip-csv
  "Given a csv file, uses zipmap
  to zip the headers to each value"
  [csv]
  (let [split-csv (clojure.string/split csv #"\n")
        headers (map (comp keyword
                           #(clojure.string/replace % #"\s+" "-"))
                     (clojure.string/split (first split-csv) #","))
        rows (map #(clojure.string/split % #",")
                  (rest split-csv))
        zipped-csv (mapv #(zipmap headers %) rows)]
    zipped-csv))

