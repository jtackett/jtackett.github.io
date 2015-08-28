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
var seq__17824_17836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17825_17837 = null;
var count__17826_17838 = (0);
var i__17827_17839 = (0);
while(true){
if((i__17827_17839 < count__17826_17838)){
var f_17840 = cljs.core._nth.call(null,chunk__17825_17837,i__17827_17839);
cljs.core.println.call(null,"  ",f_17840);

var G__17841 = seq__17824_17836;
var G__17842 = chunk__17825_17837;
var G__17843 = count__17826_17838;
var G__17844 = (i__17827_17839 + (1));
seq__17824_17836 = G__17841;
chunk__17825_17837 = G__17842;
count__17826_17838 = G__17843;
i__17827_17839 = G__17844;
continue;
} else {
var temp__4126__auto___17845 = cljs.core.seq.call(null,seq__17824_17836);
if(temp__4126__auto___17845){
var seq__17824_17846__$1 = temp__4126__auto___17845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17824_17846__$1)){
var c__5118__auto___17847 = cljs.core.chunk_first.call(null,seq__17824_17846__$1);
var G__17848 = cljs.core.chunk_rest.call(null,seq__17824_17846__$1);
var G__17849 = c__5118__auto___17847;
var G__17850 = cljs.core.count.call(null,c__5118__auto___17847);
var G__17851 = (0);
seq__17824_17836 = G__17848;
chunk__17825_17837 = G__17849;
count__17826_17838 = G__17850;
i__17827_17839 = G__17851;
continue;
} else {
var f_17852 = cljs.core.first.call(null,seq__17824_17846__$1);
cljs.core.println.call(null,"  ",f_17852);

var G__17853 = cljs.core.next.call(null,seq__17824_17846__$1);
var G__17854 = null;
var G__17855 = (0);
var G__17856 = (0);
seq__17824_17836 = G__17853;
chunk__17825_17837 = G__17854;
count__17826_17838 = G__17855;
i__17827_17839 = G__17856;
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
var seq__17828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17829 = null;
var count__17830 = (0);
var i__17831 = (0);
while(true){
if((i__17831 < count__17830)){
var vec__17832 = cljs.core._nth.call(null,chunk__17829,i__17831);
var name = cljs.core.nth.call(null,vec__17832,(0),null);
var map__17833 = cljs.core.nth.call(null,vec__17832,(1),null);
var map__17833__$1 = ((cljs.core.seq_QMARK_.call(null,map__17833))?cljs.core.apply.call(null,cljs.core.hash_map,map__17833):map__17833);
var arglists = cljs.core.get.call(null,map__17833__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17857 = seq__17828;
var G__17858 = chunk__17829;
var G__17859 = count__17830;
var G__17860 = (i__17831 + (1));
seq__17828 = G__17857;
chunk__17829 = G__17858;
count__17830 = G__17859;
i__17831 = G__17860;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17828);
if(temp__4126__auto__){
var seq__17828__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17828__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__17828__$1);
var G__17861 = cljs.core.chunk_rest.call(null,seq__17828__$1);
var G__17862 = c__5118__auto__;
var G__17863 = cljs.core.count.call(null,c__5118__auto__);
var G__17864 = (0);
seq__17828 = G__17861;
chunk__17829 = G__17862;
count__17830 = G__17863;
i__17831 = G__17864;
continue;
} else {
var vec__17834 = cljs.core.first.call(null,seq__17828__$1);
var name = cljs.core.nth.call(null,vec__17834,(0),null);
var map__17835 = cljs.core.nth.call(null,vec__17834,(1),null);
var map__17835__$1 = ((cljs.core.seq_QMARK_.call(null,map__17835))?cljs.core.apply.call(null,cljs.core.hash_map,map__17835):map__17835);
var arglists = cljs.core.get.call(null,map__17835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__17835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17865 = cljs.core.next.call(null,seq__17828__$1);
var G__17866 = null;
var G__17867 = (0);
var G__17868 = (0);
seq__17828 = G__17865;
chunk__17829 = G__17866;
count__17830 = G__17867;
i__17831 = G__17868;
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

//# sourceMappingURL=repl.js.map?rel=1440777374057