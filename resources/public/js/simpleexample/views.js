// Compiled by ClojureScript 0.0-3208 {}
goog.provide('simpleexample.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
simpleexample.views.greeting = (function simpleexample$views$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
simpleexample.views.clock = (function simpleexample$views$clock(){
var time_color = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null));
var timer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null));
return ((function (time_color,timer){
return (function simpleexample$views$clock_$_clock_render(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,timer).toTimeString()," "));
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,time_color)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),style,time_str], null);
});
;})(time_color,timer))
});
simpleexample.views.color_input = (function simpleexample$views$color_input(){
var time_color = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null));
return ((function (time_color){
return (function simpleexample$views$color_input_$_color_input_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (time_color){
return (function (p1__9276_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551),p1__9276_SHARP_.target.value], null));
});})(time_color))
], null)], null)], null);
});
;})(time_color))
});
simpleexample.views.procedure_code_input = (function simpleexample$views$procedure_code_input(){
var procedure_code = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754)], null));
return ((function (procedure_code){
return (function simpleexample$views$procedure_code_input_$_procedure_code_input_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Procedure Code: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,procedure_code),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (procedure_code){
return (function (p1__9277_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754),p1__9277_SHARP_.target.value], null));
});})(procedure_code))
], null)], null)], null);
});
;})(procedure_code))
});
simpleexample.views.procedure_info = (function simpleexample$views$procedure_info(){
var procedure_info__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"procedure-info","procedure-info",2070271359)], null));
var _ = cljs.core.prn.call(null,cljs.core.deref.call(null,procedure_info__$1));
return ((function (procedure_info__$1,_){
return (function simpleexample$views$procedure_info_$_procedure_info_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,procedure_info__$1)], null)], null);
});
;})(procedure_info__$1,_))
});
simpleexample.views.simple_example = (function simpleexample$views$simple_example(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.views.greeting,"Welcome to Dental Insurance Procedure Code Library"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.views.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.views.color_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.views.procedure_code_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.views.procedure_info], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1440339743755