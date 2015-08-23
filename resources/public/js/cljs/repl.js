// Compiled by ClojureScript 0.0-3208 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17000_17012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17001_17013 = null;
var count__17002_17014 = (0);
var i__17003_17015 = (0);
while(true){
if((i__17003_17015 < count__17002_17014)){
var f_17016 = cljs.core._nth.call(null,chunk__17001_17013,i__17003_17015);
cljs.core.println.call(null,"  ",f_17016);

var G__17017 = seq__17000_17012;
var G__17018 = chunk__17001_17013;
var G__17019 = count__17002_17014;
var G__17020 = (i__17003_17015 + (1));
seq__17000_17012 = G__17017;
chunk__17001_17013 = G__17018;
count__17002_17014 = G__17019;
i__17003_17015 = G__17020;
continue;
} else {
var temp__4126__auto___17021 = cljs.core.seq.call(null,seq__17000_17012);
if(temp__4126__auto___17021){
var seq__17000_17022__$1 = temp__4126__auto___17021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17000_17022__$1)){
var c__5118__auto___17023 = cljs.core.chunk_first.call(null,seq__17000_17022__$1);
var G__17024 = cljs.core.chunk_rest.call(null,seq__17000_17022__$1);
var G__17025 = c__5118__auto___17023;
var G__17026 = cljs.core.count.call(null,c__5118__auto___17023);
var G__17027 = (0);
seq__17000_17012 = G__17024;
chunk__17001_17013 = G__17025;
count__17002_17014 = G__17026;
i__17003_17015 = G__17027;
continue;
} else {
var f_17028 = cljs.core.first.call(null,seq__17000_17022__$1);
cljs.core.println.call(null,"  ",f_17028);

var G__17029 = cljs.core.next.call(null,seq__17000_17022__$1);
var G__17030 = null;
var G__17031 = (0);
var G__17032 = (0);
seq__17000_17012 = G__17029;
chunk__17001_17013 = G__17030;
count__17002_17014 = G__17031;
i__17003_17015 = G__17032;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4333__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17004 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17005 = null;
var count__17006 = (0);
var i__17007 = (0);
while(true){
if((i__17007 < count__17006)){
var vec__17008 = cljs.core._nth.call(null,chunk__17005,i__17007);
var name = cljs.core.nth.call(null,vec__17008,(0),null);
var map__17009 = cljs.core.nth.call(null,vec__17008,(1),null);
var map__17009__$1 = ((cljs.core.seq_QMARK_.call(null,map__17009))?cljs.core.apply.call(null,cljs.core.hash_map,map__17009):map__17009);
var arglists = cljs.core.get.call(null,map__17009__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17009__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17033 = seq__17004;
var G__17034 = chunk__17005;
var G__17035 = count__17006;
var G__17036 = (i__17007 + (1));
seq__17004 = G__17033;
chunk__17005 = G__17034;
count__17006 = G__17035;
i__17007 = G__17036;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17004);
if(temp__4126__auto__){
var seq__17004__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17004__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__17004__$1);
var G__17037 = cljs.core.chunk_rest.call(null,seq__17004__$1);
var G__17038 = c__5118__auto__;
var G__17039 = cljs.core.count.call(null,c__5118__auto__);
var G__17040 = (0);
seq__17004 = G__17037;
chunk__17005 = G__17038;
count__17006 = G__17039;
i__17007 = G__17040;
continue;
} else {
var vec__17010 = cljs.core.first.call(null,seq__17004__$1);
var name = cljs.core.nth.call(null,vec__17010,(0),null);
var map__17011 = cljs.core.nth.call(null,vec__17010,(1),null);
var map__17011__$1 = ((cljs.core.seq_QMARK_.call(null,map__17011))?cljs.core.apply.call(null,cljs.core.hash_map,map__17011):map__17011);
var arglists = cljs.core.get.call(null,map__17011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17041 = cljs.core.next.call(null,seq__17004__$1);
var G__17042 = null;
var G__17043 = (0);
var G__17044 = (0);
seq__17004 = G__17041;
chunk__17005 = G__17042;
count__17006 = G__17043;
i__17007 = G__17044;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440344163931