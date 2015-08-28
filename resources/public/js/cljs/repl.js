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
var seq__17820_17832 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17821_17833 = null;
var count__17822_17834 = (0);
var i__17823_17835 = (0);
while(true){
if((i__17823_17835 < count__17822_17834)){
var f_17836 = cljs.core._nth.call(null,chunk__17821_17833,i__17823_17835);
cljs.core.println.call(null,"  ",f_17836);

var G__17837 = seq__17820_17832;
var G__17838 = chunk__17821_17833;
var G__17839 = count__17822_17834;
var G__17840 = (i__17823_17835 + (1));
seq__17820_17832 = G__17837;
chunk__17821_17833 = G__17838;
count__17822_17834 = G__17839;
i__17823_17835 = G__17840;
continue;
} else {
var temp__4126__auto___17841 = cljs.core.seq.call(null,seq__17820_17832);
if(temp__4126__auto___17841){
var seq__17820_17842__$1 = temp__4126__auto___17841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17820_17842__$1)){
var c__5118__auto___17843 = cljs.core.chunk_first.call(null,seq__17820_17842__$1);
var G__17844 = cljs.core.chunk_rest.call(null,seq__17820_17842__$1);
var G__17845 = c__5118__auto___17843;
var G__17846 = cljs.core.count.call(null,c__5118__auto___17843);
var G__17847 = (0);
seq__17820_17832 = G__17844;
chunk__17821_17833 = G__17845;
count__17822_17834 = G__17846;
i__17823_17835 = G__17847;
continue;
} else {
var f_17848 = cljs.core.first.call(null,seq__17820_17842__$1);
cljs.core.println.call(null,"  ",f_17848);

var G__17849 = cljs.core.next.call(null,seq__17820_17842__$1);
var G__17850 = null;
var G__17851 = (0);
var G__17852 = (0);
seq__17820_17832 = G__17849;
chunk__17821_17833 = G__17850;
count__17822_17834 = G__17851;
i__17823_17835 = G__17852;
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
var seq__17824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17825 = null;
var count__17826 = (0);
var i__17827 = (0);
while(true){
if((i__17827 < count__17826)){
var vec__17828 = cljs.core._nth.call(null,chunk__17825,i__17827);
var name = cljs.core.nth.call(null,vec__17828,(0),null);
var map__17829 = cljs.core.nth.call(null,vec__17828,(1),null);
var map__17829__$1 = ((cljs.core.seq_QMARK_.call(null,map__17829))?cljs.core.apply.call(null,cljs.core.hash_map,map__17829):map__17829);
var arglists = cljs.core.get.call(null,map__17829__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17829__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17853 = seq__17824;
var G__17854 = chunk__17825;
var G__17855 = count__17826;
var G__17856 = (i__17827 + (1));
seq__17824 = G__17853;
chunk__17825 = G__17854;
count__17826 = G__17855;
i__17827 = G__17856;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17824);
if(temp__4126__auto__){
var seq__17824__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17824__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__17824__$1);
var G__17857 = cljs.core.chunk_rest.call(null,seq__17824__$1);
var G__17858 = c__5118__auto__;
var G__17859 = cljs.core.count.call(null,c__5118__auto__);
var G__17860 = (0);
seq__17824 = G__17857;
chunk__17825 = G__17858;
count__17826 = G__17859;
i__17827 = G__17860;
continue;
} else {
var vec__17830 = cljs.core.first.call(null,seq__17824__$1);
var name = cljs.core.nth.call(null,vec__17830,(0),null);
var map__17831 = cljs.core.nth.call(null,vec__17830,(1),null);
var map__17831__$1 = ((cljs.core.seq_QMARK_.call(null,map__17831))?cljs.core.apply.call(null,cljs.core.hash_map,map__17831):map__17831);
var arglists = cljs.core.get.call(null,map__17831__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17831__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17861 = cljs.core.next.call(null,seq__17824__$1);
var G__17862 = null;
var G__17863 = (0);
var G__17864 = (0);
seq__17824 = G__17861;
chunk__17825 = G__17862;
count__17826 = G__17863;
i__17827 = G__17864;
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

//# sourceMappingURL=repl.js.map?rel=1440775512382