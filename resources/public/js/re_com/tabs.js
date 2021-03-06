// Compiled by ClojureScript 0.0-3208 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16771){
var map__16772 = p__16771;
var map__16772__$1 = ((cljs.core.seq_QMARK_.call(null,map__16772))?cljs.core.apply.call(null,cljs.core.hash_map,map__16772):map__16772);
var args = map__16772__$1;
var style = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16772__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__16769_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16769_SHARP_));
});})(current,tabs__$1,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16769#","p1__16769#",1165324505,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16769#","p1__16769#",1165324505,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__5087__auto__ = ((function (current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__16773(s__16774){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__16774__$1 = s__16774;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16774__$1);
if(temp__4126__auto__){
var s__16774__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16774__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__16774__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__16776 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__16775 = (0);
while(true){
if((i__16775 < size__5086__auto__)){
var t = cljs.core._nth.call(null,c__5085__auto__,i__16775);
cljs.core.chunk_append.call(null,b__16776,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16775,id,label,selected_QMARK_,t,c__5085__auto__,size__5086__auto__,b__16776,s__16774__$2,temp__4126__auto__,current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16775,id,label,selected_QMARK_,t,c__5085__auto__,size__5086__auto__,b__16776,s__16774__$2,temp__4126__auto__,current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__16777 = (i__16775 + (1));
i__16775 = G__16777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16776),re_com$tabs$iter__16773.call(null,cljs.core.chunk_rest.call(null,s__16774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16776),null);
}
} else {
var t = cljs.core.first.call(null,s__16774__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16774__$2,temp__4126__auto__,current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16774__$2,temp__4126__auto__,current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__16773.call(null,cljs.core.rest.call(null,s__16774__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__16772,map__16772__$1,args,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__5087__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq16770){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16770));
});
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16780){
var map__16781 = p__16780;
var map__16781__$1 = ((cljs.core.seq_QMARK_.call(null,map__16781))?cljs.core.apply.call(null,cljs.core.hash_map,map__16781):map__16781);
var vertical_QMARK_ = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__16778_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16778_SHARP_));
});})(current,tabs__$1,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16778#","p1__16778#",1719673103,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16778#","p1__16778#",1719673103,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__5087__auto__ = ((function (current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__16782(s__16783){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__16783__$1 = s__16783;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16783__$1);
if(temp__4126__auto__){
var s__16783__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16783__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__16783__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__16785 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__16784 = (0);
while(true){
if((i__16784 < size__5086__auto__)){
var t = cljs.core._nth.call(null,c__5085__auto__,i__16784);
cljs.core.chunk_append.call(null,b__16785,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16784,id,label,selected_QMARK_,t,c__5085__auto__,size__5086__auto__,b__16785,s__16783__$2,temp__4126__auto__,current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16784,id,label,selected_QMARK_,t,c__5085__auto__,size__5086__auto__,b__16785,s__16783__$2,temp__4126__auto__,current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})());

var G__16786 = (i__16784 + (1));
i__16784 = G__16786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16785),re_com$tabs$iter__16782.call(null,cljs.core.chunk_rest.call(null,s__16783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16785),null);
}
} else {
var t = cljs.core.first.call(null,s__16783__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16783__$2,temp__4126__auto__,current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16783__$2,temp__4126__auto__,current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})(),re_com$tabs$iter__16782.call(null,cljs.core.rest.call(null,s__16783__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__16781,map__16781__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__5087__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq16779){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16779));
});
re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16788){
var map__16789 = p__16788;
var map__16789__$1 = ((cljs.core.seq_QMARK_.call(null,map__16789))?cljs.core.apply.call(null,cljs.core.hash_map,map__16789):map__16789);
var args = map__16789__$1;
var style = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq16787){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16787));
});
re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16791){
var map__16792 = p__16791;
var map__16792__$1 = ((cljs.core.seq_QMARK_.call(null,map__16792))?cljs.core.apply.call(null,cljs.core.hash_map,map__16792):map__16792);
var args = map__16792__$1;
var style = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16792__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq16790){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16790));
});
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16795){
var map__16796 = p__16795;
var map__16796__$1 = ((cljs.core.seq_QMARK_.call(null,map__16796))?cljs.core.apply.call(null,cljs.core.hash_map,map__16796):map__16796);
var vertical_QMARK_ = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__16793_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__16793_SHARP_));
});})(current,tabs__$1,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16793#","p1__16793#",2132497217,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__16793#","p1__16793#",2132497217,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__5087__auto__ = ((function (current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__16797(s__16798){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__16798__$1 = s__16798;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16798__$1);
if(temp__4126__auto__){
var s__16798__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16798__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__16798__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__16800 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__16799 = (0);
while(true){
if((i__16799 < size__5086__auto__)){
var t = cljs.core._nth.call(null,c__5085__auto__,i__16799);
cljs.core.chunk_append.call(null,b__16800,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__16799,id,label,selected_QMARK_,t,c__5085__auto__,size__5086__auto__,b__16800,s__16798__$2,temp__4126__auto__,current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__16799,id,label,selected_QMARK_,t,c__5085__auto__,size__5086__auto__,b__16800,s__16798__$2,temp__4126__auto__,current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__16801 = (i__16799 + (1));
i__16799 = G__16801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16800),re_com$tabs$iter__16797.call(null,cljs.core.chunk_rest.call(null,s__16798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16800),null);
}
} else {
var t = cljs.core.first.call(null,s__16798__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__16798__$2,temp__4126__auto__,current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__16798__$2,temp__4126__auto__,current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__16797.call(null,cljs.core.rest.call(null,s__16798__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__16796,map__16796__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__5087__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq16794){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16794));
});
re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16803){
var map__16804 = p__16803;
var map__16804__$1 = ((cljs.core.seq_QMARK_.call(null,map__16804))?cljs.core.apply.call(null,cljs.core.hash_map,map__16804):map__16804);
var args = map__16804__$1;
var label_fn = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16804__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq16802){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16802));
});
re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16806){
var map__16807 = p__16806;
var map__16807__$1 = ((cljs.core.seq_QMARK_.call(null,map__16807))?cljs.core.apply.call(null,cljs.core.hash_map,map__16807):map__16807);
var args = map__16807__$1;
var label_fn = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq16805){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16805));
});

//# sourceMappingURL=tabs.js.map?rel=1440777373164