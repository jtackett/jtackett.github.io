// Compiled by ClojureScript 0.0-3208 {}
goog.provide('simpleexample.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
simpleexample.handlers.initial_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timer","timer",-1266967739),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f34",new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754),"D",new cljs.core.Keyword(null,"procedure-info","procedure-info",2070271359),"",new cljs.core.Keyword(null,"procedure-db","procedure-db",1118820003),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1586293142),"D0120",new cljs.core.Keyword(null,"name","name",1843675177),"Periodic Oral Evaluation - Established Patient",new cljs.core.Keyword(null,"description","description",-1428560544),"An evaluation performed on a patient of record to determine any changes in the patient's dental and medical health status\n                   since a previous comprehensive or periodic evaluation.",new cljs.core.Keyword(null,"related","related",-369904499),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D0180","D0150","D0145"], null),new cljs.core.Keyword(null,"higher-paid","higher-paid",-1930301566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D0145","D0150"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1586293142),"D0140",new cljs.core.Keyword(null,"name","name",1843675177),"Limited Oral Evaluation - Problem Focused",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"related","related",-369904499),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D9110","D0220","D0230","D0272","D0273","D0274","D0460"], null),new cljs.core.Keyword(null,"higher-paid","higher-paid",-1930301566),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1586293142),"D0145",new cljs.core.Keyword(null,"name","name",1843675177),"Oral Evaluation for a patient under three years of age and counseling with primary caregiver",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"related","related",-369904499),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D0120","D1120","D1208","D1206","D0150"], null),new cljs.core.Keyword(null,"higher-paid","higher-paid",-1930301566),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1586293142),"D0150",new cljs.core.Keyword(null,"name","name",1843675177),"comprehensive oral evaluation - new or etablished patient",new cljs.core.Keyword(null,"description","description",-1428560544),"This applies to new patients; established patients who have had a significant change in health conditions or\n                   other unusual circumstances, by report, or established patients who have been absent from active treatment for three or more years.",new cljs.core.Keyword(null,"related","related",-369904499),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D0180","D9310","D4355"], null),new cljs.core.Keyword(null,"higher-paid","higher-paid",-1930301566),cljs.core.PersistentVector.EMPTY], null)], null)], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,simpleexample.handlers.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)),(function (time_color,p__9287){
var vec__9288 = p__9287;
var _ = cljs.core.nth.call(null,vec__9288,(0),null);
var value = cljs.core.nth.call(null,vec__9288,(1),null);
return value;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__9289){
var vec__9290 = p__9289;
var _ = cljs.core.nth.call(null,vec__9290,(0),null);
var value = cljs.core.nth.call(null,vec__9290,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"timer","timer",-1266967739),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754)], null)),(function (procedure_code,p__9291){
var vec__9292 = p__9291;
var _ = cljs.core.nth.call(null,vec__9292,(0),null);
var value = cljs.core.nth.call(null,vec__9292,(1),null);
return value;
}));

//# sourceMappingURL=handlers.js.map?rel=1440296855018