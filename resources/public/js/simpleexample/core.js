// Compiled by ClojureScript 0.0-3208 {}
goog.provide('simpleexample.core');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('cljs.reader');
goog.require('re_frame.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
simpleexample.core.decimal_QMARK_ = (function simpleexample$core$decimal_QMARK_(d){
return (cljs.core.count.call(null,clojure.string.split.call(null,d,".")) > (1));
});
simpleexample.core.string__GT_currency = (function simpleexample$core$string__GT_currency(s){
var split = clojure.string.split.call(null,s,".");
var left = cljs.core.first.call(null,split);
var right = clojure.string.join.call(null,cljs.core.take.call(null,(2),cljs.core.second.call(null,split)));
if(cljs.core.truth_(simpleexample.core.decimal_QMARK_.call(null,s))){
return [cljs.core.str(left),cljs.core.str("."),cljs.core.str(right)].join('');
} else {
return s;
}
});
simpleexample.core.avoid_nil = (function simpleexample$core$avoid_nil(s){
if(cljs.core.truth_(s)){
return [cljs.core.str(s)].join('');
} else {
return "";
}
});
simpleexample.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"expense-percent","expense-percent",420255277),new cljs.core.Keyword(null,"down-payment-percent","down-payment-percent",-1511054638),new cljs.core.Keyword(null,"purchase-discount","purchase-discount",1066994870),new cljs.core.Keyword(null,"check-login","check-login",-1362423274),new cljs.core.Keyword(null,"procedure-code","procedure-code",1372253754),new cljs.core.Keyword(null,"procedure-info","procedure-info",2070271359),new cljs.core.Keyword(null,"monthly-rent-percent","monthly-rent-percent",-1804898849)],[new cljs.core.Keyword(null,"investment-calculator","investment-calculator",421949679),"","","",(50),(20),(70),"not checking","D","",1.5]);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,simpleexample.core.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null)),(function (nav_panel,p__10296){
var vec__10297 = p__10296;
var _ = cljs.core.nth.call(null,vec__10297,(0),null);
var value = cljs.core.nth.call(null,vec__10297,(1),null);
return value;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),(function (){
cljs.core.doall.call(null,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410),""], null)));

cljs.core.doall.call(null,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),""], null)));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-login","check-login",-1362423274),"failed"], null));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"username","username",1605666410),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"password","password",417022471),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"check-login","check-login",-1362423274),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,((function (username,password){
return (function (x){
return (cljs.core._EQ_.call(null,username,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x))) && (cljs.core._EQ_.call(null,password,new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(x)));
});})(username,password))
,cljs.core.PersistentVector.EMPTY)))){
return "success";
} else {
return "failed";
}
}));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"username","username",1605666410),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410)], null)),(function (username,p__10298){
var vec__10299 = p__10298;
var _ = cljs.core.nth.call(null,vec__10299,(0),null);
var value = cljs.core.nth.call(null,vec__10299,(1),null);
return value;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"password","password",417022471),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null)),(function (password,p__10300){
var vec__10301 = p__10300;
var _ = cljs.core.nth.call(null,vec__10301,(0),null);
var value = cljs.core.nth.call(null,vec__10301,(1),null);
return value;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"check-login","check-login",-1362423274),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-login","check-login",-1362423274)], null)),(function (check_login,p__10302){
var vec__10303 = p__10302;
var db = cljs.core.nth.call(null,vec__10303,(0),null);
var value = cljs.core.nth.call(null,vec__10303,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),"check login"], null));

return value;
}));
simpleexample.core.make_handler = (function simpleexample$core$make_handler(k){
return re_frame.core.register_handler.call(null,cljs.core.keyword.call(null,k),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k)], null)),(function (k__$1,p__10306){
var vec__10307 = p__10306;
var _ = cljs.core.nth.call(null,vec__10307,(0),null);
var value = cljs.core.nth.call(null,vec__10307,(1),null);
return value;
}));
});
simpleexample.core.make_handler.call(null,"property-value");
simpleexample.core.make_handler.call(null,"purchase-price");
simpleexample.core.make_handler.call(null,"down-payment");
simpleexample.core.make_handler.call(null,"repair-costs");
simpleexample.core.make_handler.call(null,"interest-rate");
simpleexample.core.make_handler.call(null,"mortgage-term-years");
simpleexample.core.make_handler.call(null,"purchase-discount");
simpleexample.core.make_handler.call(null,"down-payment-percent");
simpleexample.core.make_handler.call(null,"monthly-rent-percent");
simpleexample.core.make_handler.call(null,"expense-percent");
simpleexample.core.make_sub = (function simpleexample$core$make_sub(k){
return re_frame.core.register_sub.call(null,cljs.core.keyword.call(null,k),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.keyword.call(null,k).call(null,cljs.core.deref.call(null,db));
}));
}));
});
simpleexample.core.make_sub.call(null,"property-value");
simpleexample.core.make_sub.call(null,"purchase-price");
simpleexample.core.make_sub.call(null,"repair-costs");
simpleexample.core.make_sub.call(null,"down-payment");
simpleexample.core.make_sub.call(null,"interest-rate");
simpleexample.core.make_sub.call(null,"mortgage-term-years");
simpleexample.core.make_sub.call(null,"purchase-discount");
simpleexample.core.make_sub.call(null,"down-payment-percent");
simpleexample.core.make_sub.call(null,"monthly-rent-percent");
simpleexample.core.make_sub.call(null,"expense-percent");
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"suggested-purchase-price","suggested-purchase-price",907315427),(function (db,_){
var property_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property-value","property-value",1516163307)], null));
var repair_costs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repair-costs","repair-costs",859317581)], null));
var purchase_discount = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchase-discount","purchase-discount",1066994870)], null));
return reagent.ratom.make_reaction.call(null,((function (property_value,repair_costs,purchase_discount){
return (function (){
return (((parseInt(cljs.core.deref.call(null,property_value)) + parseInt(cljs.core.deref.call(null,repair_costs))) * (parseFloat(cljs.core.deref.call(null,purchase_discount)) / (100))) - parseInt(cljs.core.deref.call(null,repair_costs)));
});})(property_value,repair_costs,purchase_discount))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"suggested-down-payment","suggested-down-payment",-84815166),(function (db,_){
var purchase_price = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729)], null));
var down_payment_percent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-payment-percent","down-payment-percent",-1511054638)], null));
return reagent.ratom.make_reaction.call(null,((function (purchase_price,down_payment_percent){
return (function (){
return ((parseFloat(cljs.core.deref.call(null,down_payment_percent)) / (100)) * parseInt(cljs.core.deref.call(null,purchase_price)));
});})(purchase_price,down_payment_percent))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"monthly-rent","monthly-rent",146089847),(function (db,_){
var purchase_price = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729)], null));
var repair_costs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repair-costs","repair-costs",859317581)], null));
var monthly_rent_percent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-rent-percent","monthly-rent-percent",-1804898849)], null));
return reagent.ratom.make_reaction.call(null,((function (purchase_price,repair_costs,monthly_rent_percent){
return (function (){
return (((parseFloat(cljs.core.deref.call(null,monthly_rent_percent)) / (100)) * parseInt(cljs.core.deref.call(null,purchase_price))) + parseInt(cljs.core.deref.call(null,repair_costs)));
});})(purchase_price,repair_costs,monthly_rent_percent))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"expenses","expenses",-63975799),(function (db,_){
var monthly_rent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-rent","monthly-rent",146089847)], null));
var expense_percent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expense-percent","expense-percent",420255277)], null));
return reagent.ratom.make_reaction.call(null,((function (monthly_rent,expense_percent){
return (function (){
return ((parseFloat(cljs.core.deref.call(null,expense_percent)) / (100)) * parseInt(cljs.core.deref.call(null,monthly_rent)));
});})(monthly_rent,expense_percent))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"monthly-mortgage","monthly-mortgage",-260365497),(function (db,_){
var purchase_price = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729)], null));
var down_payment = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-payment","down-payment",1003953810)], null));
var loan_amount = reagent.ratom.make_reaction.call(null,((function (purchase_price,down_payment){
return (function (){
return (parseInt(cljs.core.deref.call(null,purchase_price)) - parseInt(cljs.core.deref.call(null,down_payment)));
});})(purchase_price,down_payment))
);
var interest_rate = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224)], null));
var monthly_int_rate = reagent.ratom.make_reaction.call(null,((function (purchase_price,down_payment,loan_amount,interest_rate){
return (function (){
return ((parseFloat(cljs.core.deref.call(null,interest_rate)) / (100)) / (12));
});})(purchase_price,down_payment,loan_amount,interest_rate))
);
var payment_term_years = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mortgage-term-years","mortgage-term-years",388178776)], null));
var payment_term_months = reagent.ratom.make_reaction.call(null,((function (purchase_price,down_payment,loan_amount,interest_rate,monthly_int_rate,payment_term_years){
return (function (){
return ((12) * cljs.core.deref.call(null,payment_term_years));
});})(purchase_price,down_payment,loan_amount,interest_rate,monthly_int_rate,payment_term_years))
);
return reagent.ratom.make_reaction.call(null,((function (purchase_price,down_payment,loan_amount,interest_rate,monthly_int_rate,payment_term_years,payment_term_months){
return (function (){
return (cljs.core.deref.call(null,loan_amount) * ((cljs.core.deref.call(null,monthly_int_rate) * Math.pow(((1) + cljs.core.deref.call(null,monthly_int_rate)),cljs.core.deref.call(null,payment_term_months))) / (Math.pow(((1) + cljs.core.deref.call(null,monthly_int_rate)),cljs.core.deref.call(null,payment_term_months)) - (1))));
});})(purchase_price,down_payment,loan_amount,interest_rate,monthly_int_rate,payment_term_years,payment_term_months))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"cashflow","cashflow",-1456648342),(function (db,_){
var monthly_rent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-rent","monthly-rent",146089847)], null));
var monthly_expenses = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expenses","expenses",-63975799)], null));
var monthly_mortgage = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-mortgage","monthly-mortgage",-260365497)], null));
return reagent.ratom.make_reaction.call(null,((function (monthly_rent,monthly_expenses,monthly_mortgage){
return (function (){
return (parseInt(cljs.core.deref.call(null,monthly_rent)) - (parseInt(cljs.core.deref.call(null,monthly_expenses)) + parseInt(cljs.core.deref.call(null,monthly_mortgage))));
});})(monthly_rent,monthly_expenses,monthly_mortgage))
);
}));
simpleexample.core.simple_input = (function simpleexample$core$simple_input(){
var argseq__5373__auto__ = ((((5) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0))):null);
return simpleexample.core.simple_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5373__auto__);
});

simpleexample.core.simple_input.cljs$core$IFn$_invoke$arity$variadic = (function (t,sym,message,sub,k,suggestion_sub){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(t)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,new cljs.core.Keyword(null,"info","info",-317069002),message,new cljs.core.Keyword(null,"width","width",-384071477),"10em"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),sym,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,sub),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10308_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__10308_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px"], null),(cljs.core.truth_(suggestion_sub)?(cljs.core.truth_(cljs.core.deref.call(null,sub))?(((function (){var pred__10315 = cljs.core._EQ_;
var expr__10316 = t;
if(cljs.core.truth_(pred__10315.call(null,"Purchase Price ",expr__10316))){
return (cljs.core.deref.call(null,sub) < cljs.core.deref.call(null,cljs.core.first.call(null,suggestion_sub)));
} else {
if(cljs.core.truth_(pred__10315.call(null,"Down Payment ",expr__10316))){
return (cljs.core.deref.call(null,sub) > cljs.core.deref.call(null,cljs.core.first.call(null,suggestion_sub)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10316)].join('')));
}
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#A7FF89",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 0px 2px 1px #A7FF89"], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#FF9999",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 0px 2px 1px #FF9999"], null)):null):(cljs.core.truth_(cljs.core.deref.call(null,sub))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#A7FF89",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 0px 2px 1px #A7FF89"], null):null)))], null)], null)], null)], null)], null)], null);
});

simpleexample.core.simple_input.cljs$lang$maxFixedArity = (5);

simpleexample.core.simple_input.cljs$lang$applyTo = (function (seq10309){
var G__10310 = cljs.core.first.call(null,seq10309);
var seq10309__$1 = cljs.core.next.call(null,seq10309);
var G__10311 = cljs.core.first.call(null,seq10309__$1);
var seq10309__$2 = cljs.core.next.call(null,seq10309__$1);
var G__10312 = cljs.core.first.call(null,seq10309__$2);
var seq10309__$3 = cljs.core.next.call(null,seq10309__$2);
var G__10313 = cljs.core.first.call(null,seq10309__$3);
var seq10309__$4 = cljs.core.next.call(null,seq10309__$3);
var G__10314 = cljs.core.first.call(null,seq10309__$4);
var seq10309__$5 = cljs.core.next.call(null,seq10309__$4);
return simpleexample.core.simple_input.cljs$core$IFn$_invoke$arity$variadic(G__10310,G__10311,G__10312,G__10313,G__10314,seq10309__$5);
});
simpleexample.core.simple_display = (function simpleexample$core$simple_display(t,sym,message,sub,k){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(t)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,new cljs.core.Keyword(null,"info","info",-317069002),message,new cljs.core.Keyword(null,"width","width",-384071477),"10em"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(sym),cljs.core.str(" "),cljs.core.str(simpleexample.core.string__GT_currency.call(null,[cljs.core.str(cljs.core.deref.call(null,sub))].join('')))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null)], null)], null)], null)], null);
});
simpleexample.core.input_with_suggestion = (function simpleexample$core$input_with_suggestion(t,sym,message,sub,k,suggestion_sub){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,suggestion_sub))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(t),cljs.core.str(" suggestions: ")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),((!(cljs.core._EQ_.call(null,"NaN",cljs.core.pr_str.call(null,cljs.core.deref.call(null,suggestion_sub)))))?simpleexample.core.string__GT_currency.call(null,[cljs.core.str(cljs.core.deref.call(null,suggestion_sub))].join('')):null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null)], null)], null)], null)], null):null),simpleexample.core.simple_input.call(null,t,sym,message,sub,k,suggestion_sub)], null)], null);
});
simpleexample.core.property_data_input = (function simpleexample$core$property_data_input(){
var property_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property-value","property-value",1516163307)], null));
var purchase_price = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729)], null));
var suggested_purchase_price = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-purchase-price","suggested-purchase-price",907315427)], null));
var repair_costs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repair-costs","repair-costs",859317581)], null));
var down_payment = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-payment","down-payment",1003953810)], null));
var suggested_down_payment = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-down-payment","suggested-down-payment",-84815166)], null));
var interest_rate = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224)], null));
var mortgage_term_years = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mortgage-term-years","mortgage-term-years",388178776)], null));
var monthly_rent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-rent","monthly-rent",146089847)], null));
var expenses = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expenses","expenses",-63975799)], null));
var monthly_mortgage = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-mortgage","monthly-mortgage",-260365497)], null));
var cashflow = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cashflow","cashflow",-1456648342)], null));
return ((function (property_value,purchase_price,suggested_purchase_price,repair_costs,down_payment,suggested_down_payment,interest_rate,mortgage_term_years,monthly_rent,expenses,monthly_mortgage,cashflow){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Property ",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null)], null),simpleexample.core.simple_input.call(null,"Property Value ","$","This is the value of the property not necessarily the purchase price.\n                      There are many ways to figure out the properties value.\n                      One way is to look at comparable properties or properties that are similar\n                      and in the same area.",property_value,new cljs.core.Keyword(null,"property-value","property-value",1516163307)),simpleexample.core.simple_input.call(null,"Repair Costs ","$","This is the amount you intend to pay for repairs to the property",repair_costs,new cljs.core.Keyword(null,"repair-costs","repair-costs",859317581)),simpleexample.core.input_with_suggestion.call(null,"Purchase Price ","$","This is the amount you actually pay for the property.",purchase_price,new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),suggested_purchase_price),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Mortgage ",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%"], null)], null),simpleexample.core.input_with_suggestion.call(null,"Down Payment ","$","This is the amount you intend to pay upfront for the property.\n                               This amount will be subtracted from the purchase price to calculate\n                               your total loan amount.",down_payment,new cljs.core.Keyword(null,"down-payment","down-payment",1003953810),suggested_down_payment),simpleexample.core.simple_input.call(null,"Interest Rate ","%","This is the amount of interest that the bank will require when paying back the loan",interest_rate,new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224)),simpleexample.core.simple_input.call(null,"Term ","","The number of years over which you will pay back the loan amount",mortgage_term_years,new cljs.core.Keyword(null,"mortgage-term-years","mortgage-term-years",388178776)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Calculated Predictions ",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%"], null)], null),simpleexample.core.simple_display.call(null,"Monthly Rent ","$","This is the monthly rent you should be striving to charge for the apartment.\n                        This is assuming that the repairs included above have already been made\n                        prior to renting the apartment.",monthly_rent,new cljs.core.Keyword(null,"monthly-rent","monthly-rent",146089847)),simpleexample.core.simple_display.call(null,"Monthly Expenses ","$","The 50% of expenses includes all expenses, including  repairs, vacancies,\n                        utilities, taxes, insurance, management, turnover costs,\n                        and the occasional big ticket repairs. NOT including mortgage payments.",expenses,new cljs.core.Keyword(null,"expenses","expenses",-63975799)),simpleexample.core.simple_display.call(null,"Monthly Mortgage ","$","This is based on a 15 year mortgage at a 5% intereset rate",monthly_mortgage,new cljs.core.Keyword(null,"monthly-mortgage","monthly-mortgage",-260365497)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true], null),simpleexample.core.simple_display.call(null,"Cashflow ","$","This is what it's all about",cashflow,new cljs.core.Keyword(null,"cashflow","cashflow",-1456648342)),((!(cljs.core._EQ_.call(null,"NaN",cljs.core.pr_str.call(null,cljs.core.deref.call(null,cashflow)))))?(((cljs.core.deref.call(null,cashflow) > (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Passed",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#A7FF89",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0px 0px 3px #777",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"35%"], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Failed",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#FF6666",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0px 0px 3px #777",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"35%"], null)], null)):null)], null)], null);
});
;})(property_value,purchase_price,suggested_purchase_price,repair_costs,down_payment,suggested_down_payment,interest_rate,mortgage_term_years,monthly_rent,expenses,monthly_mortgage,cashflow))
});
simpleexample.core.rules_of_thumb_input = (function simpleexample$core$rules_of_thumb_input(){
var purchase_discount = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchase-discount","purchase-discount",1066994870)], null));
var down_payment_percent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-payment-percent","down-payment-percent",-1511054638)], null));
var monthly_rent_percent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-rent-percent","monthly-rent-percent",-1804898849)], null));
var expense_percent = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expense-percent","expense-percent",420255277)], null));
return ((function (purchase_discount,down_payment_percent,monthly_rent_percent,expense_percent){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Rules",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null)], null),simpleexample.core.simple_input.call(null,"Purchase Discount ","%","This is the percent of the property value you plan to pay for the property.\n                      For example if the property value is 100,000 and you want to pay 70,000\n                      then you would put 70% here. This is a way of making sure you get a good deal\n                      when buying a property. It is no different then when you only pay 70% of the\n                      purchase price on those new shoes.",purchase_discount,new cljs.core.Keyword(null,"purchase-discount","purchase-discount",1066994870)),simpleexample.core.simple_input.call(null,"Down Payment ","%","This is the percentage of the purchase price / loan amount you want to try to pay \"down\"\n                      or in other words pay upfront.",down_payment_percent,new cljs.core.Keyword(null,"down-payment-percent","down-payment-percent",-1511054638)),simpleexample.core.simple_input.call(null,"Monthly Rent ","%","This is the percentage of the purchase price that will be charged monthly for rent.",monthly_rent_percent,new cljs.core.Keyword(null,"monthly-rent-percent","monthly-rent-percent",-1804898849)),simpleexample.core.simple_input.call(null,"Monthly Expenses ","%","This is the percentage of the monthly rent that you will reserve for expenses.\n                      This includes: repairs, vacancies, utilities, taxes, insurance, management,\n                      turnover costs, and the occasional \"big ticket\" repairs",expense_percent,new cljs.core.Keyword(null,"expense-percent","expense-percent",420255277))], null)], null);
});
;})(purchase_discount,down_payment_percent,monthly_rent_percent,expense_percent))
});
simpleexample.core.greeting = (function simpleexample$core$greeting(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center.banner","div.center.banner",-305110978),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"REI Pocket Calculator",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"15%",new cljs.core.Keyword(null,"color","color",1011675173),"whitesmoke",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"\"Times New Roman\", Georgia, Serif"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
simpleexample.core.footer_navigation = (function simpleexample$core$footer_navigation(){
var nav_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"10%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.trim.nav","button.trim.nav",764982581),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav_panel){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),new cljs.core.Keyword(null,"investment-calculator","investment-calculator",421949679)], null));
});})(nav_panel))
], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,nav_panel),new cljs.core.Keyword(null,"investment-calculator","investment-calculator",421949679)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#373737",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF"], null)], null):null)),"Investment Calculator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.trim.nav","button.trim.nav",764982581),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav_panel){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),new cljs.core.Keyword(null,"rules-of-thumb","rules-of-thumb",748009545)], null));
});})(nav_panel))
], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,nav_panel),new cljs.core.Keyword(null,"rules-of-thumb","rules-of-thumb",748009545)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#373737",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF"], null)], null):null)),"Rules of Thumb"], null)], null)], null);
});
simpleexample.core.login_form = (function simpleexample$core$login_form(){
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410)], null));
var password = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login","div.login",1729923461),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"LOGIN"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,password){
return (function (p1__10318_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410),p1__10318_SHARP_.target.value], null));
});})(username,password))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,password){
return (function (p1__10319_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),p1__10319_SHARP_.target.value], null));
});})(username,password))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.small","button.small",-1573974800),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (username,password){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-login","check-login",-1362423274),"checking"], null));
});})(username,password))
], null),"Login"], null)], null);
});
simpleexample.core.check_login_page = (function simpleexample$core$check_login_page(){
var check_status = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-login","check-login",-1362423274)], null)));
var username = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410)], null)));
var password = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null)));
return ((function (check_status,username,password){
return (function simpleexample$core$check_login_page_$_check_login_page_render(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Logging In"], null)], null);

if(!((cljs.core._EQ_.call(null,check_status,"not checking")) || (cljs.core._EQ_.call(null,check_status,"checking")))){
if(cljs.core._EQ_.call(null,check_status,"success")){
if((cljs.core._EQ_.call(null,"test",username)) && (cljs.core._EQ_.call(null,"test",password))){
return cljs.core.doall.call(null,re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),"code lookup"], null)));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),"code lookup"], null));
}
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),"login"], null));
}
} else {
return null;
}
});
;})(check_status,username,password))
});
simpleexample.core.contact_us = (function simpleexample$core$contact_us(){
return (function simpleexample$core$contact_us_$_contact_us_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.footer","h4.footer",-1054066791),"Contact us at codental.website@gmail.com"], null)], null)], null);
});
});
simpleexample.core.investment_calculator = (function simpleexample$core$investment_calculator(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.greeting], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.property_data_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.footer_navigation], null)], null)], null);
});
simpleexample.core.rules_of_thumb = (function simpleexample$core$rules_of_thumb(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.greeting], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.rules_of_thumb_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.footer_navigation], null)], null)], null);
});
simpleexample.core.login = (function simpleexample$core$login(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.greeting], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.login_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.contact_us], null)], null);
});
simpleexample.core.check_login = (function simpleexample$core$check_login(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.check_login_page], null)], null);
});
/**
 * This is the framework for the app.
 * The condp along with the nav-panel key in the @db
 * provide a nice navigation/routing framework
 * while building within a singlepage application
 */
simpleexample.core.simple_example = (function simpleexample$core$simple_example(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var nav_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null));
if(!((cljs.core.deref.call(null,nav_panel) == null))){
var pred__10323 = cljs.core._EQ_;
var expr__10324 = cljs.core.deref.call(null,nav_panel);
if(cljs.core.truth_(pred__10323.call(null,new cljs.core.Keyword(null,"investment-calculator","investment-calculator",421949679),expr__10324))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.investment_calculator], null)], null);
} else {
if(cljs.core.truth_(pred__10323.call(null,new cljs.core.Keyword(null,"rules-of-thumb","rules-of-thumb",748009545),expr__10324))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.rules_of_thumb], null)], null);
} else {
if(cljs.core.truth_(pred__10323.call(null,"login",expr__10324))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.login], null)], null);
} else {
if(cljs.core.truth_(pred__10323.call(null,"check login",expr__10324))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.check_login], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.login], null)], null);
}
}
}
}
} else {
return null;
}
})()], null)], null);
});
simpleexample.core.run = (function simpleexample$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('simpleexample.core.run', simpleexample.core.run);

//# sourceMappingURL=core.js.map?rel=1440777365703