// Compiled by ClojureScript 0.0-3208 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16925__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16926__i = 0, G__16926__a = new Array(arguments.length -  0);
while (G__16926__i < G__16926__a.length) {G__16926__a[G__16926__i] = arguments[G__16926__i + 0]; ++G__16926__i;}
  args = new cljs.core.IndexedSeq(G__16926__a,0);
} 
return G__16925__delegate.call(this,args);};
G__16925.cljs$lang$maxFixedArity = 0;
G__16925.cljs$lang$applyTo = (function (arglist__16927){
var args = cljs.core.seq(arglist__16927);
return G__16925__delegate(args);
});
G__16925.cljs$core$IFn$_invoke$arity$variadic = G__16925__delegate;
return G__16925;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__16928){
var map__16930 = p__16928;
var map__16930__$1 = ((cljs.core.seq_QMARK_.call(null,map__16930))?cljs.core.apply.call(null,cljs.core.hash_map,map__16930):map__16930);
var class$ = cljs.core.get.call(null,map__16930__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16930__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4333__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4321__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4321__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4321__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__7699__auto___17059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___17059,ch){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___17059,ch){
return (function (state_17033){
var state_val_17034 = (state_17033[(1)]);
if((state_val_17034 === (7))){
var inst_17029 = (state_17033[(2)]);
var state_17033__$1 = state_17033;
var statearr_17035_17060 = state_17033__$1;
(statearr_17035_17060[(2)] = inst_17029);

(statearr_17035_17060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (1))){
var state_17033__$1 = state_17033;
var statearr_17036_17061 = state_17033__$1;
(statearr_17036_17061[(2)] = null);

(statearr_17036_17061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (4))){
var inst_16997 = (state_17033[(7)]);
var inst_16997__$1 = (state_17033[(2)]);
var state_17033__$1 = (function (){var statearr_17037 = state_17033;
(statearr_17037[(7)] = inst_16997__$1);

return statearr_17037;
})();
if(cljs.core.truth_(inst_16997__$1)){
var statearr_17038_17062 = state_17033__$1;
(statearr_17038_17062[(1)] = (5));

} else {
var statearr_17039_17063 = state_17033__$1;
(statearr_17039_17063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (13))){
var state_17033__$1 = state_17033;
var statearr_17040_17064 = state_17033__$1;
(statearr_17040_17064[(2)] = null);

(statearr_17040_17064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (6))){
var state_17033__$1 = state_17033;
var statearr_17041_17065 = state_17033__$1;
(statearr_17041_17065[(2)] = null);

(statearr_17041_17065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (3))){
var inst_17031 = (state_17033[(2)]);
var state_17033__$1 = state_17033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17033__$1,inst_17031);
} else {
if((state_val_17034 === (12))){
var inst_17004 = (state_17033[(8)]);
var inst_17017 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17004);
var inst_17018 = cljs.core.first.call(null,inst_17017);
var inst_17019 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17018);
var inst_17020 = console.warn("Figwheel: Not loading code with warnings - ",inst_17019);
var state_17033__$1 = state_17033;
var statearr_17042_17066 = state_17033__$1;
(statearr_17042_17066[(2)] = inst_17020);

(statearr_17042_17066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (2))){
var state_17033__$1 = state_17033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17033__$1,(4),ch);
} else {
if((state_val_17034 === (11))){
var inst_17013 = (state_17033[(2)]);
var state_17033__$1 = state_17033;
var statearr_17043_17067 = state_17033__$1;
(statearr_17043_17067[(2)] = inst_17013);

(statearr_17043_17067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (9))){
var inst_17003 = (state_17033[(9)]);
var inst_17015 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17003,opts);
var state_17033__$1 = state_17033;
if(cljs.core.truth_(inst_17015)){
var statearr_17044_17068 = state_17033__$1;
(statearr_17044_17068[(1)] = (12));

} else {
var statearr_17045_17069 = state_17033__$1;
(statearr_17045_17069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (5))){
var inst_17003 = (state_17033[(9)]);
var inst_16997 = (state_17033[(7)]);
var inst_16999 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17000 = (new cljs.core.PersistentArrayMap(null,2,inst_16999,null));
var inst_17001 = (new cljs.core.PersistentHashSet(null,inst_17000,null));
var inst_17002 = figwheel.client.focus_msgs.call(null,inst_17001,inst_16997);
var inst_17003__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17002);
var inst_17004 = cljs.core.first.call(null,inst_17002);
var inst_17005 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17003__$1,opts);
var state_17033__$1 = (function (){var statearr_17046 = state_17033;
(statearr_17046[(9)] = inst_17003__$1);

(statearr_17046[(8)] = inst_17004);

return statearr_17046;
})();
if(cljs.core.truth_(inst_17005)){
var statearr_17047_17070 = state_17033__$1;
(statearr_17047_17070[(1)] = (8));

} else {
var statearr_17048_17071 = state_17033__$1;
(statearr_17048_17071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (14))){
var inst_17023 = (state_17033[(2)]);
var state_17033__$1 = state_17033;
var statearr_17049_17072 = state_17033__$1;
(statearr_17049_17072[(2)] = inst_17023);

(statearr_17049_17072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (10))){
var inst_17025 = (state_17033[(2)]);
var state_17033__$1 = (function (){var statearr_17050 = state_17033;
(statearr_17050[(10)] = inst_17025);

return statearr_17050;
})();
var statearr_17051_17073 = state_17033__$1;
(statearr_17051_17073[(2)] = null);

(statearr_17051_17073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17034 === (8))){
var inst_17004 = (state_17033[(8)]);
var inst_17007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17008 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17004);
var inst_17009 = cljs.core.async.timeout.call(null,(1000));
var inst_17010 = [inst_17008,inst_17009];
var inst_17011 = (new cljs.core.PersistentVector(null,2,(5),inst_17007,inst_17010,null));
var state_17033__$1 = state_17033;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17033__$1,(11),inst_17011);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7699__auto___17059,ch))
;
return ((function (switch__7637__auto__,c__7699__auto___17059,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____0 = (function (){
var statearr_17055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17055[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__);

(statearr_17055[(1)] = (1));

return statearr_17055;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____1 = (function (state_17033){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17056){if((e17056 instanceof Object)){
var ex__7641__auto__ = e17056;
var statearr_17057_17074 = state_17033;
(statearr_17057_17074[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17075 = state_17033;
state_17033 = G__17075;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__ = function(state_17033){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____1.call(this,state_17033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___17059,ch))
})();
var state__7701__auto__ = (function (){var statearr_17058 = f__7700__auto__.call(null);
(statearr_17058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17059);

return statearr_17058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___17059,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__17076_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17076_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_17085 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17078_SHARP_,p2__17077_SHARP_){
return [cljs.core.str(p2__17077_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_17085){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_17083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_17084 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17083,_STAR_print_newline_STAR_17084,base_path_17085){
return (function() { 
var G__17086__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17087__i = 0, G__17087__a = new Array(arguments.length -  0);
while (G__17087__i < G__17087__a.length) {G__17087__a[G__17087__i] = arguments[G__17087__i + 0]; ++G__17087__i;}
  args = new cljs.core.IndexedSeq(G__17087__a,0);
} 
return G__17086__delegate.call(this,args);};
G__17086.cljs$lang$maxFixedArity = 0;
G__17086.cljs$lang$applyTo = (function (arglist__17088){
var args = cljs.core.seq(arglist__17088);
return G__17086__delegate(args);
});
G__17086.cljs$core$IFn$_invoke$arity$variadic = G__17086__delegate;
return G__17086;
})()
;})(_STAR_print_fn_STAR_17083,_STAR_print_newline_STAR_17084,base_path_17085))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17084;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17083;
}}catch (e17082){if((e17082 instanceof Error)){
var e = e17082;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_17085], null));
} else {
var e = e17082;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_17085))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__17089){
var map__17094 = p__17089;
var map__17094__$1 = ((cljs.core.seq_QMARK_.call(null,map__17094))?cljs.core.apply.call(null,cljs.core.hash_map,map__17094):map__17094);
var opts = map__17094__$1;
var build_id = cljs.core.get.call(null,map__17094__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17094,map__17094__$1,opts,build_id){
return (function (p__17095){
var vec__17096 = p__17095;
var map__17097 = cljs.core.nth.call(null,vec__17096,(0),null);
var map__17097__$1 = ((cljs.core.seq_QMARK_.call(null,map__17097))?cljs.core.apply.call(null,cljs.core.hash_map,map__17097):map__17097);
var msg = map__17097__$1;
var msg_name = cljs.core.get.call(null,map__17097__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17096,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__17096,map__17097,map__17097__$1,msg,msg_name,_,map__17094,map__17094__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17096,map__17097,map__17097__$1,msg,msg_name,_,map__17094,map__17094__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17094,map__17094__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__17101){
var vec__17102 = p__17101;
var map__17103 = cljs.core.nth.call(null,vec__17102,(0),null);
var map__17103__$1 = ((cljs.core.seq_QMARK_.call(null,map__17103))?cljs.core.apply.call(null,cljs.core.hash_map,map__17103):map__17103);
var msg = map__17103__$1;
var msg_name = cljs.core.get.call(null,map__17103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17102,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__17104){
var map__17112 = p__17104;
var map__17112__$1 = ((cljs.core.seq_QMARK_.call(null,map__17112))?cljs.core.apply.call(null,cljs.core.hash_map,map__17112):map__17112);
var on_compile_fail = cljs.core.get.call(null,map__17112__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__17112__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__17112,map__17112__$1,on_compile_fail,on_compile_warning){
return (function (p__17113){
var vec__17114 = p__17113;
var map__17115 = cljs.core.nth.call(null,vec__17114,(0),null);
var map__17115__$1 = ((cljs.core.seq_QMARK_.call(null,map__17115))?cljs.core.apply.call(null,cljs.core.hash_map,map__17115):map__17115);
var msg = map__17115__$1;
var msg_name = cljs.core.get.call(null,map__17115__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17114,(1));
var pred__17116 = cljs.core._EQ_;
var expr__17117 = msg_name;
if(cljs.core.truth_(pred__17116.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17117))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17116.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17117))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17112,map__17112__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,msg_hist,msg_names,msg){
return (function (state_17314){
var state_val_17315 = (state_17314[(1)]);
if((state_val_17315 === (7))){
var inst_17250 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17316_17357 = state_17314__$1;
(statearr_17316_17357[(2)] = inst_17250);

(statearr_17316_17357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (20))){
var inst_17276 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17276)){
var statearr_17317_17358 = state_17314__$1;
(statearr_17317_17358[(1)] = (22));

} else {
var statearr_17318_17359 = state_17314__$1;
(statearr_17318_17359[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (27))){
var inst_17288 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17289 = figwheel.client.heads_up.display_warning.call(null,inst_17288);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(30),inst_17289);
} else {
if((state_val_17315 === (1))){
var inst_17238 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17238)){
var statearr_17319_17360 = state_17314__$1;
(statearr_17319_17360[(1)] = (2));

} else {
var statearr_17320_17361 = state_17314__$1;
(statearr_17320_17361[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (24))){
var inst_17304 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17321_17362 = state_17314__$1;
(statearr_17321_17362[(2)] = inst_17304);

(statearr_17321_17362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (4))){
var inst_17312 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17314__$1,inst_17312);
} else {
if((state_val_17315 === (15))){
var inst_17265 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17266 = figwheel.client.format_messages.call(null,inst_17265);
var inst_17267 = figwheel.client.heads_up.display_error.call(null,inst_17266);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(18),inst_17267);
} else {
if((state_val_17315 === (21))){
var inst_17306 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17322_17363 = state_17314__$1;
(statearr_17322_17363[(2)] = inst_17306);

(statearr_17322_17363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (31))){
var inst_17295 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(34),inst_17295);
} else {
if((state_val_17315 === (32))){
var state_17314__$1 = state_17314;
var statearr_17323_17364 = state_17314__$1;
(statearr_17323_17364[(2)] = null);

(statearr_17323_17364[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (33))){
var inst_17300 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17324_17365 = state_17314__$1;
(statearr_17324_17365[(2)] = inst_17300);

(statearr_17324_17365[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (13))){
var inst_17256 = (state_17314[(2)]);
var inst_17257 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17258 = figwheel.client.format_messages.call(null,inst_17257);
var inst_17259 = figwheel.client.heads_up.display_error.call(null,inst_17258);
var state_17314__$1 = (function (){var statearr_17325 = state_17314;
(statearr_17325[(7)] = inst_17256);

return statearr_17325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(14),inst_17259);
} else {
if((state_val_17315 === (22))){
var inst_17278 = figwheel.client.heads_up.clear.call(null);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(25),inst_17278);
} else {
if((state_val_17315 === (29))){
var inst_17302 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17326_17366 = state_17314__$1;
(statearr_17326_17366[(2)] = inst_17302);

(statearr_17326_17366[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (6))){
var inst_17246 = figwheel.client.heads_up.clear.call(null);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(9),inst_17246);
} else {
if((state_val_17315 === (28))){
var inst_17293 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17293)){
var statearr_17327_17367 = state_17314__$1;
(statearr_17327_17367[(1)] = (31));

} else {
var statearr_17328_17368 = state_17314__$1;
(statearr_17328_17368[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (25))){
var inst_17280 = (state_17314[(2)]);
var inst_17281 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17282 = figwheel.client.heads_up.display_warning.call(null,inst_17281);
var state_17314__$1 = (function (){var statearr_17329 = state_17314;
(statearr_17329[(8)] = inst_17280);

return statearr_17329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(26),inst_17282);
} else {
if((state_val_17315 === (34))){
var inst_17297 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17330_17369 = state_17314__$1;
(statearr_17330_17369[(2)] = inst_17297);

(statearr_17330_17369[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (17))){
var inst_17308 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17331_17370 = state_17314__$1;
(statearr_17331_17370[(2)] = inst_17308);

(statearr_17331_17370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (3))){
var inst_17252 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17252)){
var statearr_17332_17371 = state_17314__$1;
(statearr_17332_17371[(1)] = (10));

} else {
var statearr_17333_17372 = state_17314__$1;
(statearr_17333_17372[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (12))){
var inst_17310 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17334_17373 = state_17314__$1;
(statearr_17334_17373[(2)] = inst_17310);

(statearr_17334_17373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (2))){
var inst_17240 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17240)){
var statearr_17335_17374 = state_17314__$1;
(statearr_17335_17374[(1)] = (5));

} else {
var statearr_17336_17375 = state_17314__$1;
(statearr_17336_17375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (23))){
var inst_17286 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17286)){
var statearr_17337_17376 = state_17314__$1;
(statearr_17337_17376[(1)] = (27));

} else {
var statearr_17338_17377 = state_17314__$1;
(statearr_17338_17377[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (19))){
var inst_17273 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17274 = figwheel.client.heads_up.append_message.call(null,inst_17273);
var state_17314__$1 = state_17314;
var statearr_17339_17378 = state_17314__$1;
(statearr_17339_17378[(2)] = inst_17274);

(statearr_17339_17378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (11))){
var inst_17263 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17263)){
var statearr_17340_17379 = state_17314__$1;
(statearr_17340_17379[(1)] = (15));

} else {
var statearr_17341_17380 = state_17314__$1;
(statearr_17341_17380[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (9))){
var inst_17248 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17342_17381 = state_17314__$1;
(statearr_17342_17381[(2)] = inst_17248);

(statearr_17342_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (5))){
var inst_17242 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(8),inst_17242);
} else {
if((state_val_17315 === (14))){
var inst_17261 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17343_17382 = state_17314__$1;
(statearr_17343_17382[(2)] = inst_17261);

(statearr_17343_17382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (26))){
var inst_17284 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17344_17383 = state_17314__$1;
(statearr_17344_17383[(2)] = inst_17284);

(statearr_17344_17383[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (16))){
var inst_17271 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17314__$1 = state_17314;
if(cljs.core.truth_(inst_17271)){
var statearr_17345_17384 = state_17314__$1;
(statearr_17345_17384[(1)] = (19));

} else {
var statearr_17346_17385 = state_17314__$1;
(statearr_17346_17385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (30))){
var inst_17291 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17347_17386 = state_17314__$1;
(statearr_17347_17386[(2)] = inst_17291);

(statearr_17347_17386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (10))){
var inst_17254 = figwheel.client.heads_up.clear.call(null);
var state_17314__$1 = state_17314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(13),inst_17254);
} else {
if((state_val_17315 === (18))){
var inst_17269 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17348_17387 = state_17314__$1;
(statearr_17348_17387[(2)] = inst_17269);

(statearr_17348_17387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17315 === (8))){
var inst_17244 = (state_17314[(2)]);
var state_17314__$1 = state_17314;
var statearr_17349_17388 = state_17314__$1;
(statearr_17349_17388[(2)] = inst_17244);

(statearr_17349_17388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7699__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7637__auto__,c__7699__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____0 = (function (){
var statearr_17353 = [null,null,null,null,null,null,null,null,null];
(statearr_17353[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__);

(statearr_17353[(1)] = (1));

return statearr_17353;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____1 = (function (state_17314){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17354){if((e17354 instanceof Object)){
var ex__7641__auto__ = e17354;
var statearr_17355_17389 = state_17314;
(statearr_17355_17389[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17390 = state_17314;
state_17314 = G__17390;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__ = function(state_17314){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____1.call(this,state_17314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,msg_hist,msg_names,msg))
})();
var state__7701__auto__ = (function (){var statearr_17356 = f__7700__auto__.call(null);
(statearr_17356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,msg_hist,msg_names,msg))
);

return c__7699__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7699__auto___17453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___17453,ch){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___17453,ch){
return (function (state_17436){
var state_val_17437 = (state_17436[(1)]);
if((state_val_17437 === (8))){
var inst_17428 = (state_17436[(2)]);
var state_17436__$1 = (function (){var statearr_17438 = state_17436;
(statearr_17438[(7)] = inst_17428);

return statearr_17438;
})();
var statearr_17439_17454 = state_17436__$1;
(statearr_17439_17454[(2)] = null);

(statearr_17439_17454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (7))){
var inst_17432 = (state_17436[(2)]);
var state_17436__$1 = state_17436;
var statearr_17440_17455 = state_17436__$1;
(statearr_17440_17455[(2)] = inst_17432);

(statearr_17440_17455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (6))){
var state_17436__$1 = state_17436;
var statearr_17441_17456 = state_17436__$1;
(statearr_17441_17456[(2)] = null);

(statearr_17441_17456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (5))){
var inst_17424 = (state_17436[(8)]);
var inst_17426 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_17424);
var state_17436__$1 = state_17436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17436__$1,(8),inst_17426);
} else {
if((state_val_17437 === (4))){
var inst_17424 = (state_17436[(8)]);
var inst_17424__$1 = (state_17436[(2)]);
var state_17436__$1 = (function (){var statearr_17442 = state_17436;
(statearr_17442[(8)] = inst_17424__$1);

return statearr_17442;
})();
if(cljs.core.truth_(inst_17424__$1)){
var statearr_17443_17457 = state_17436__$1;
(statearr_17443_17457[(1)] = (5));

} else {
var statearr_17444_17458 = state_17436__$1;
(statearr_17444_17458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (3))){
var inst_17434 = (state_17436[(2)]);
var state_17436__$1 = state_17436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17436__$1,inst_17434);
} else {
if((state_val_17437 === (2))){
var state_17436__$1 = state_17436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17436__$1,(4),ch);
} else {
if((state_val_17437 === (1))){
var state_17436__$1 = state_17436;
var statearr_17445_17459 = state_17436__$1;
(statearr_17445_17459[(2)] = null);

(statearr_17445_17459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__7699__auto___17453,ch))
;
return ((function (switch__7637__auto__,c__7699__auto___17453,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7638__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7638__auto____0 = (function (){
var statearr_17449 = [null,null,null,null,null,null,null,null,null];
(statearr_17449[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7638__auto__);

(statearr_17449[(1)] = (1));

return statearr_17449;
});
var figwheel$client$heads_up_plugin_$_state_machine__7638__auto____1 = (function (state_17436){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17450){if((e17450 instanceof Object)){
var ex__7641__auto__ = e17450;
var statearr_17451_17460 = state_17436;
(statearr_17451_17460[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17461 = state_17436;
state_17436 = G__17461;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7638__auto__ = function(state_17436){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7638__auto____1.call(this,state_17436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7638__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7638__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___17453,ch))
})();
var state__7701__auto__ = (function (){var statearr_17452 = f__7700__auto__.call(null);
(statearr_17452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17453);

return statearr_17452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___17453,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_17482){
var state_val_17483 = (state_17482[(1)]);
if((state_val_17483 === (2))){
var inst_17479 = (state_17482[(2)]);
var inst_17480 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17482__$1 = (function (){var statearr_17484 = state_17482;
(statearr_17484[(7)] = inst_17479);

return statearr_17484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17482__$1,inst_17480);
} else {
if((state_val_17483 === (1))){
var inst_17477 = cljs.core.async.timeout.call(null,(3000));
var state_17482__$1 = state_17482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17482__$1,(2),inst_17477);
} else {
return null;
}
}
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____0 = (function (){
var statearr_17488 = [null,null,null,null,null,null,null,null];
(statearr_17488[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__);

(statearr_17488[(1)] = (1));

return statearr_17488;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____1 = (function (state_17482){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17489){if((e17489 instanceof Object)){
var ex__7641__auto__ = e17489;
var statearr_17490_17492 = state_17482;
(statearr_17490_17492[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17493 = state_17482;
state_17482 = G__17493;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__ = function(state_17482){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____1.call(this,state_17482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17491 = f__7700__auto__.call(null);
(statearr_17491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4321__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4321__auto__)){
return ("CustomEvent" in window);
} else {
return and__4321__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17497 = {"detail":url};
return obj17497;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__17498){
var map__17504 = p__17498;
var map__17504__$1 = ((cljs.core.seq_QMARK_.call(null,map__17504))?cljs.core.apply.call(null,cljs.core.hash_map,map__17504):map__17504);
var ed = map__17504__$1;
var exception_data = cljs.core.get.call(null,map__17504__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__17504__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__17505_17509 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17506_17510 = null;
var count__17507_17511 = (0);
var i__17508_17512 = (0);
while(true){
if((i__17508_17512 < count__17507_17511)){
var msg_17513 = cljs.core._nth.call(null,chunk__17506_17510,i__17508_17512);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17513);

var G__17514 = seq__17505_17509;
var G__17515 = chunk__17506_17510;
var G__17516 = count__17507_17511;
var G__17517 = (i__17508_17512 + (1));
seq__17505_17509 = G__17514;
chunk__17506_17510 = G__17515;
count__17507_17511 = G__17516;
i__17508_17512 = G__17517;
continue;
} else {
var temp__4126__auto___17518 = cljs.core.seq.call(null,seq__17505_17509);
if(temp__4126__auto___17518){
var seq__17505_17519__$1 = temp__4126__auto___17518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17505_17519__$1)){
var c__5118__auto___17520 = cljs.core.chunk_first.call(null,seq__17505_17519__$1);
var G__17521 = cljs.core.chunk_rest.call(null,seq__17505_17519__$1);
var G__17522 = c__5118__auto___17520;
var G__17523 = cljs.core.count.call(null,c__5118__auto___17520);
var G__17524 = (0);
seq__17505_17509 = G__17521;
chunk__17506_17510 = G__17522;
count__17507_17511 = G__17523;
i__17508_17512 = G__17524;
continue;
} else {
var msg_17525 = cljs.core.first.call(null,seq__17505_17519__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17525);

var G__17526 = cljs.core.next.call(null,seq__17505_17519__$1);
var G__17527 = null;
var G__17528 = (0);
var G__17529 = (0);
seq__17505_17509 = G__17526;
chunk__17506_17510 = G__17527;
count__17507_17511 = G__17528;
i__17508_17512 = G__17529;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__17530){
var map__17532 = p__17530;
var map__17532__$1 = ((cljs.core.seq_QMARK_.call(null,map__17532))?cljs.core.apply.call(null,cljs.core.hash_map,map__17532):map__17532);
var w = map__17532__$1;
var message = cljs.core.get.call(null,map__17532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4321__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4321__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4321__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__17539 = cljs.core.seq.call(null,plugins);
var chunk__17540 = null;
var count__17541 = (0);
var i__17542 = (0);
while(true){
if((i__17542 < count__17541)){
var vec__17543 = cljs.core._nth.call(null,chunk__17540,i__17542);
var k = cljs.core.nth.call(null,vec__17543,(0),null);
var plugin = cljs.core.nth.call(null,vec__17543,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17545 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17539,chunk__17540,count__17541,i__17542,pl_17545,vec__17543,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_17545.call(null,msg_hist);
});})(seq__17539,chunk__17540,count__17541,i__17542,pl_17545,vec__17543,k,plugin))
);
} else {
}

var G__17546 = seq__17539;
var G__17547 = chunk__17540;
var G__17548 = count__17541;
var G__17549 = (i__17542 + (1));
seq__17539 = G__17546;
chunk__17540 = G__17547;
count__17541 = G__17548;
i__17542 = G__17549;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17539);
if(temp__4126__auto__){
var seq__17539__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17539__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__17539__$1);
var G__17550 = cljs.core.chunk_rest.call(null,seq__17539__$1);
var G__17551 = c__5118__auto__;
var G__17552 = cljs.core.count.call(null,c__5118__auto__);
var G__17553 = (0);
seq__17539 = G__17550;
chunk__17540 = G__17551;
count__17541 = G__17552;
i__17542 = G__17553;
continue;
} else {
var vec__17544 = cljs.core.first.call(null,seq__17539__$1);
var k = cljs.core.nth.call(null,vec__17544,(0),null);
var plugin = cljs.core.nth.call(null,vec__17544,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17554 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17539,chunk__17540,count__17541,i__17542,pl_17554,vec__17544,k,plugin,seq__17539__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_17554.call(null,msg_hist);
});})(seq__17539,chunk__17540,count__17541,i__17542,pl_17554,vec__17544,k,plugin,seq__17539__$1,temp__4126__auto__))
);
} else {
}

var G__17555 = cljs.core.next.call(null,seq__17539__$1);
var G__17556 = null;
var G__17557 = (0);
var G__17558 = (0);
seq__17539 = G__17555;
chunk__17540 = G__17556;
count__17541 = G__17557;
i__17542 = G__17558;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__17560 = arguments.length;
switch (G__17560) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5373__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5373__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__17563){
var map__17564 = p__17563;
var map__17564__$1 = ((cljs.core.seq_QMARK_.call(null,map__17564))?cljs.core.apply.call(null,cljs.core.hash_map,map__17564):map__17564);
var opts = map__17564__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq17562){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17562));
});

//# sourceMappingURL=client.js.map?rel=1440774552383