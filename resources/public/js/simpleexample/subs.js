// Compiled by ClojureScript 0.0-3208 {}
goog.provide('simpleexample.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,_){
return simpleexample.subs.reaction.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return simpleexample.subs.reaction.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754),(function (db,_){
return simpleexample.subs.reaction.call(null,new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"procedure-info","procedure-info",2070271359),(function (db,_){
return simpleexample.subs.reaction.call(null,(function (){var pro_code = new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var pro_info = cljs.core.first.call(null,cljs.core.filter.call(null,((function (pro_code){
return (function (x){
return cljs.core._EQ_.call(null,pro_code,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(x));
});})(pro_code))
,new cljs.core.Keyword(null,"procedure-db","procedure-db",1118820003).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
var pro_info_display = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pro_info)),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(pro_info))].join('');
if((pro_info == null)){
return "The code you entered does not exist";
} else {
return pro_info_display;
}
})());
}));

//# sourceMappingURL=subs.js.map?rel=1440296854995