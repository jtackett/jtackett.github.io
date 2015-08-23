// Compiled by ClojureScript 0.0-3208 {}
goog.provide('stock_analysis.utils');
goog.require('cljs.core');
/**
 * Given a csv file, uses zipmap
 * to zip the headers to each value
 */
stock_analysis.utils.zip_csv = (function stock_analysis$utils$zip_csv(csv){
var split_csv = clojure.string.split.call(null,csv,/\n/);
var headers = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,((function (split_csv){
return (function (p1__9280_SHARP_){
return clojure.string.replace.call(null,p1__9280_SHARP_,/\s+/,"-");
});})(split_csv))
),clojure.string.split.call(null,cljs.core.first.call(null,split_csv),/,/));
var rows = cljs.core.map.call(null,((function (split_csv,headers){
return (function (p1__9281_SHARP_){
return clojure.string.split.call(null,p1__9281_SHARP_,/,/);
});})(split_csv,headers))
,cljs.core.rest.call(null,split_csv));
var zipped_csv = cljs.core.mapv.call(null,((function (split_csv,headers,rows){
return (function (p1__9282_SHARP_){
return cljs.core.zipmap.call(null,headers,p1__9282_SHARP_);
});})(split_csv,headers,rows))
,rows);
return zipped_csv;
});

//# sourceMappingURL=utils.js.map?rel=1440344454299