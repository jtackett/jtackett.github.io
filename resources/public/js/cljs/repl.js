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
var seq__16991_17003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16992_17004 = null;
var count__16993_17005 = (0);
var i__16994_17006 = (0);
while(true){
if((i__16994_17006 < count__16993_17005)){
var f_17007 = cljs.core._nth.call(null,chunk__16992_17004,i__16994_17006);
cljs.core.println.call(null,"  ",f_17007);

var G__17008 = seq__16991_17003;
var G__17009 = chunk__16992_17004;
var G__17010 = count__16993_17005;
var G__17011 = (i__16994_17006 + (1));
seq__16991_17003 = G__17008;
chunk__16992_17004 = G__17009;
count__16993_17005 = G__17010;
i__16994_17006 = G__17011;
continue;
} else {
var temp__4126__auto___17012 = cljs.core.seq.call(null,seq__16991_17003);
if(temp__4126__auto___17012){
var seq__16991_17013__$1 = temp__4126__auto___17012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16991_17013__$1)){
var c__5118__auto___17014 = cljs.core.chunk_first.call(null,seq__16991_17013__$1);
var G__17015 = cljs.core.chunk_rest.call(null,seq__16991_17013__$1);
var G__17016 = c__5118__auto___17014;
var G__17017 = cljs.core.count.call(null,c__5118__auto___17014);
var G__17018 = (0);
seq__16991_17003 = G__17015;
chunk__16992_17004 = G__17016;
count__16993_17005 = G__17017;
i__16994_17006 = G__17018;
continue;
} else {
var f_17019 = cljs.core.first.call(null,seq__16991_17013__$1);
cljs.core.println.call(null,"  ",f_17019);

var G__17020 = cljs.core.next.call(null,seq__16991_17013__$1);
var G__17021 = null;
var G__17022 = (0);
var G__17023 = (0);
seq__16991_17003 = G__17020;
chunk__16992_17004 = G__17021;
count__16993_17005 = G__17022;
i__16994_17006 = G__17023;
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
var seq__16995 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16996 = null;
var count__16997 = (0);
var i__16998 = (0);
while(true){
if((i__16998 < count__16997)){
var vec__16999 = cljs.core._nth.call(null,chunk__16996,i__16998);
var name = cljs.core.nth.call(null,vec__16999,(0),null);
var map__17000 = cljs.core.nth.call(null,vec__16999,(1),null);
var map__17000__$1 = ((cljs.core.seq_QMARK_.call(null,map__17000))?cljs.core.apply.call(null,cljs.core.hash_map,map__17000):map__17000);
var arglists = cljs.core.get.call(null,map__17000__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17000__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17024 = seq__16995;
var G__17025 = chunk__16996;
var G__17026 = count__16997;
var G__17027 = (i__16998 + (1));
seq__16995 = G__17024;
chunk__16996 = G__17025;
count__16997 = G__17026;
i__16998 = G__17027;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16995);
if(temp__4126__auto__){
var seq__16995__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16995__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__16995__$1);
var G__17028 = cljs.core.chunk_rest.call(null,seq__16995__$1);
var G__17029 = c__5118__auto__;
var G__17030 = cljs.core.count.call(null,c__5118__auto__);
var G__17031 = (0);
seq__16995 = G__17028;
chunk__16996 = G__17029;
count__16997 = G__17030;
i__16998 = G__17031;
continue;
} else {
var vec__17001 = cljs.core.first.call(null,seq__16995__$1);
var name = cljs.core.nth.call(null,vec__17001,(0),null);
var map__17002 = cljs.core.nth.call(null,vec__17001,(1),null);
var map__17002__$1 = ((cljs.core.seq_QMARK_.call(null,map__17002))?cljs.core.apply.call(null,cljs.core.hash_map,map__17002):map__17002);
var arglists = cljs.core.get.call(null,map__17002__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17002__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17032 = cljs.core.next.call(null,seq__16995__$1);
var G__17033 = null;
var G__17034 = (0);
var G__17035 = (0);
seq__16995 = G__17032;
chunk__16996 = G__17033;
count__16997 = G__17034;
i__16998 = G__17035;
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

//# sourceMappingURL=repl.js.map?rel=1440296649196