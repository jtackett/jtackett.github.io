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
var G__16929__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16930__i = 0, G__16930__a = new Array(arguments.length -  0);
while (G__16930__i < G__16930__a.length) {G__16930__a[G__16930__i] = arguments[G__16930__i + 0]; ++G__16930__i;}
  args = new cljs.core.IndexedSeq(G__16930__a,0);
} 
return G__16929__delegate.call(this,args);};
G__16929.cljs$lang$maxFixedArity = 0;
G__16929.cljs$lang$applyTo = (function (arglist__16931){
var args = cljs.core.seq(arglist__16931);
return G__16929__delegate(args);
});
G__16929.cljs$core$IFn$_invoke$arity$variadic = G__16929__delegate;
return G__16929;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__16932){
var map__16934 = p__16932;
var map__16934__$1 = ((cljs.core.seq_QMARK_.call(null,map__16934))?cljs.core.apply.call(null,cljs.core.hash_map,map__16934):map__16934);
var class$ = cljs.core.get.call(null,map__16934__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16934__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__7699__auto___17063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___17063,ch){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___17063,ch){
return (function (state_17037){
var state_val_17038 = (state_17037[(1)]);
if((state_val_17038 === (7))){
var inst_17033 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17039_17064 = state_17037__$1;
(statearr_17039_17064[(2)] = inst_17033);

(statearr_17039_17064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (1))){
var state_17037__$1 = state_17037;
var statearr_17040_17065 = state_17037__$1;
(statearr_17040_17065[(2)] = null);

(statearr_17040_17065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (4))){
var inst_17001 = (state_17037[(7)]);
var inst_17001__$1 = (state_17037[(2)]);
var state_17037__$1 = (function (){var statearr_17041 = state_17037;
(statearr_17041[(7)] = inst_17001__$1);

return statearr_17041;
})();
if(cljs.core.truth_(inst_17001__$1)){
var statearr_17042_17066 = state_17037__$1;
(statearr_17042_17066[(1)] = (5));

} else {
var statearr_17043_17067 = state_17037__$1;
(statearr_17043_17067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (13))){
var state_17037__$1 = state_17037;
var statearr_17044_17068 = state_17037__$1;
(statearr_17044_17068[(2)] = null);

(statearr_17044_17068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (6))){
var state_17037__$1 = state_17037;
var statearr_17045_17069 = state_17037__$1;
(statearr_17045_17069[(2)] = null);

(statearr_17045_17069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (3))){
var inst_17035 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17037__$1,inst_17035);
} else {
if((state_val_17038 === (12))){
var inst_17008 = (state_17037[(8)]);
var inst_17021 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17008);
var inst_17022 = cljs.core.first.call(null,inst_17021);
var inst_17023 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17022);
var inst_17024 = console.warn("Figwheel: Not loading code with warnings - ",inst_17023);
var state_17037__$1 = state_17037;
var statearr_17046_17070 = state_17037__$1;
(statearr_17046_17070[(2)] = inst_17024);

(statearr_17046_17070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (2))){
var state_17037__$1 = state_17037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17037__$1,(4),ch);
} else {
if((state_val_17038 === (11))){
var inst_17017 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17047_17071 = state_17037__$1;
(statearr_17047_17071[(2)] = inst_17017);

(statearr_17047_17071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (9))){
var inst_17007 = (state_17037[(9)]);
var inst_17019 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17007,opts);
var state_17037__$1 = state_17037;
if(cljs.core.truth_(inst_17019)){
var statearr_17048_17072 = state_17037__$1;
(statearr_17048_17072[(1)] = (12));

} else {
var statearr_17049_17073 = state_17037__$1;
(statearr_17049_17073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (5))){
var inst_17007 = (state_17037[(9)]);
var inst_17001 = (state_17037[(7)]);
var inst_17003 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17004 = (new cljs.core.PersistentArrayMap(null,2,inst_17003,null));
var inst_17005 = (new cljs.core.PersistentHashSet(null,inst_17004,null));
var inst_17006 = figwheel.client.focus_msgs.call(null,inst_17005,inst_17001);
var inst_17007__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17006);
var inst_17008 = cljs.core.first.call(null,inst_17006);
var inst_17009 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17007__$1,opts);
var state_17037__$1 = (function (){var statearr_17050 = state_17037;
(statearr_17050[(9)] = inst_17007__$1);

(statearr_17050[(8)] = inst_17008);

return statearr_17050;
})();
if(cljs.core.truth_(inst_17009)){
var statearr_17051_17074 = state_17037__$1;
(statearr_17051_17074[(1)] = (8));

} else {
var statearr_17052_17075 = state_17037__$1;
(statearr_17052_17075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (14))){
var inst_17027 = (state_17037[(2)]);
var state_17037__$1 = state_17037;
var statearr_17053_17076 = state_17037__$1;
(statearr_17053_17076[(2)] = inst_17027);

(statearr_17053_17076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (10))){
var inst_17029 = (state_17037[(2)]);
var state_17037__$1 = (function (){var statearr_17054 = state_17037;
(statearr_17054[(10)] = inst_17029);

return statearr_17054;
})();
var statearr_17055_17077 = state_17037__$1;
(statearr_17055_17077[(2)] = null);

(statearr_17055_17077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17038 === (8))){
var inst_17008 = (state_17037[(8)]);
var inst_17011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17012 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17008);
var inst_17013 = cljs.core.async.timeout.call(null,(1000));
var inst_17014 = [inst_17012,inst_17013];
var inst_17015 = (new cljs.core.PersistentVector(null,2,(5),inst_17011,inst_17014,null));
var state_17037__$1 = state_17037;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17037__$1,(11),inst_17015);
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
});})(c__7699__auto___17063,ch))
;
return ((function (switch__7637__auto__,c__7699__auto___17063,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____0 = (function (){
var statearr_17059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17059[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__);

(statearr_17059[(1)] = (1));

return statearr_17059;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____1 = (function (state_17037){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17060){if((e17060 instanceof Object)){
var ex__7641__auto__ = e17060;
var statearr_17061_17078 = state_17037;
(statearr_17061_17078[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17079 = state_17037;
state_17037 = G__17079;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__ = function(state_17037){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____1.call(this,state_17037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7638__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___17063,ch))
})();
var state__7701__auto__ = (function (){var statearr_17062 = f__7700__auto__.call(null);
(statearr_17062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17063);

return statearr_17062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___17063,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__17080_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17080_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_17089 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17082_SHARP_,p2__17081_SHARP_){
return [cljs.core.str(p2__17081_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_17089){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_17087 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_17088 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17087,_STAR_print_newline_STAR_17088,base_path_17089){
return (function() { 
var G__17090__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17091__i = 0, G__17091__a = new Array(arguments.length -  0);
while (G__17091__i < G__17091__a.length) {G__17091__a[G__17091__i] = arguments[G__17091__i + 0]; ++G__17091__i;}
  args = new cljs.core.IndexedSeq(G__17091__a,0);
} 
return G__17090__delegate.call(this,args);};
G__17090.cljs$lang$maxFixedArity = 0;
G__17090.cljs$lang$applyTo = (function (arglist__17092){
var args = cljs.core.seq(arglist__17092);
return G__17090__delegate(args);
});
G__17090.cljs$core$IFn$_invoke$arity$variadic = G__17090__delegate;
return G__17090;
})()
;})(_STAR_print_fn_STAR_17087,_STAR_print_newline_STAR_17088,base_path_17089))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17088;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17087;
}}catch (e17086){if((e17086 instanceof Error)){
var e = e17086;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_17089], null));
} else {
var e = e17086;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_17089))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__17093){
var map__17098 = p__17093;
var map__17098__$1 = ((cljs.core.seq_QMARK_.call(null,map__17098))?cljs.core.apply.call(null,cljs.core.hash_map,map__17098):map__17098);
var opts = map__17098__$1;
var build_id = cljs.core.get.call(null,map__17098__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17098,map__17098__$1,opts,build_id){
return (function (p__17099){
var vec__17100 = p__17099;
var map__17101 = cljs.core.nth.call(null,vec__17100,(0),null);
var map__17101__$1 = ((cljs.core.seq_QMARK_.call(null,map__17101))?cljs.core.apply.call(null,cljs.core.hash_map,map__17101):map__17101);
var msg = map__17101__$1;
var msg_name = cljs.core.get.call(null,map__17101__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17100,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__17100,map__17101,map__17101__$1,msg,msg_name,_,map__17098,map__17098__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17100,map__17101,map__17101__$1,msg,msg_name,_,map__17098,map__17098__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17098,map__17098__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__17105){
var vec__17106 = p__17105;
var map__17107 = cljs.core.nth.call(null,vec__17106,(0),null);
var map__17107__$1 = ((cljs.core.seq_QMARK_.call(null,map__17107))?cljs.core.apply.call(null,cljs.core.hash_map,map__17107):map__17107);
var msg = map__17107__$1;
var msg_name = cljs.core.get.call(null,map__17107__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17106,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__17108){
var map__17116 = p__17108;
var map__17116__$1 = ((cljs.core.seq_QMARK_.call(null,map__17116))?cljs.core.apply.call(null,cljs.core.hash_map,map__17116):map__17116);
var on_compile_fail = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__17116,map__17116__$1,on_compile_fail,on_compile_warning){
return (function (p__17117){
var vec__17118 = p__17117;
var map__17119 = cljs.core.nth.call(null,vec__17118,(0),null);
var map__17119__$1 = ((cljs.core.seq_QMARK_.call(null,map__17119))?cljs.core.apply.call(null,cljs.core.hash_map,map__17119):map__17119);
var msg = map__17119__$1;
var msg_name = cljs.core.get.call(null,map__17119__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17118,(1));
var pred__17120 = cljs.core._EQ_;
var expr__17121 = msg_name;
if(cljs.core.truth_(pred__17120.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17121))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17120.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17121))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17116,map__17116__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,msg_hist,msg_names,msg){
return (function (state_17318){
var state_val_17319 = (state_17318[(1)]);
if((state_val_17319 === (7))){
var inst_17254 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17320_17361 = state_17318__$1;
(statearr_17320_17361[(2)] = inst_17254);

(statearr_17320_17361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (20))){
var inst_17280 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17280)){
var statearr_17321_17362 = state_17318__$1;
(statearr_17321_17362[(1)] = (22));

} else {
var statearr_17322_17363 = state_17318__$1;
(statearr_17322_17363[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (27))){
var inst_17292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17293 = figwheel.client.heads_up.display_warning.call(null,inst_17292);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(30),inst_17293);
} else {
if((state_val_17319 === (1))){
var inst_17242 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17242)){
var statearr_17323_17364 = state_17318__$1;
(statearr_17323_17364[(1)] = (2));

} else {
var statearr_17324_17365 = state_17318__$1;
(statearr_17324_17365[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (24))){
var inst_17308 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17325_17366 = state_17318__$1;
(statearr_17325_17366[(2)] = inst_17308);

(statearr_17325_17366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (4))){
var inst_17316 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17318__$1,inst_17316);
} else {
if((state_val_17319 === (15))){
var inst_17269 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17270 = figwheel.client.format_messages.call(null,inst_17269);
var inst_17271 = figwheel.client.heads_up.display_error.call(null,inst_17270);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(18),inst_17271);
} else {
if((state_val_17319 === (21))){
var inst_17310 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17326_17367 = state_17318__$1;
(statearr_17326_17367[(2)] = inst_17310);

(statearr_17326_17367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (31))){
var inst_17299 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(34),inst_17299);
} else {
if((state_val_17319 === (32))){
var state_17318__$1 = state_17318;
var statearr_17327_17368 = state_17318__$1;
(statearr_17327_17368[(2)] = null);

(statearr_17327_17368[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (33))){
var inst_17304 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17328_17369 = state_17318__$1;
(statearr_17328_17369[(2)] = inst_17304);

(statearr_17328_17369[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (13))){
var inst_17260 = (state_17318[(2)]);
var inst_17261 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17262 = figwheel.client.format_messages.call(null,inst_17261);
var inst_17263 = figwheel.client.heads_up.display_error.call(null,inst_17262);
var state_17318__$1 = (function (){var statearr_17329 = state_17318;
(statearr_17329[(7)] = inst_17260);

return statearr_17329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(14),inst_17263);
} else {
if((state_val_17319 === (22))){
var inst_17282 = figwheel.client.heads_up.clear.call(null);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(25),inst_17282);
} else {
if((state_val_17319 === (29))){
var inst_17306 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17330_17370 = state_17318__$1;
(statearr_17330_17370[(2)] = inst_17306);

(statearr_17330_17370[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (6))){
var inst_17250 = figwheel.client.heads_up.clear.call(null);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(9),inst_17250);
} else {
if((state_val_17319 === (28))){
var inst_17297 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17297)){
var statearr_17331_17371 = state_17318__$1;
(statearr_17331_17371[(1)] = (31));

} else {
var statearr_17332_17372 = state_17318__$1;
(statearr_17332_17372[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (25))){
var inst_17284 = (state_17318[(2)]);
var inst_17285 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17286 = figwheel.client.heads_up.display_warning.call(null,inst_17285);
var state_17318__$1 = (function (){var statearr_17333 = state_17318;
(statearr_17333[(8)] = inst_17284);

return statearr_17333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(26),inst_17286);
} else {
if((state_val_17319 === (34))){
var inst_17301 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17334_17373 = state_17318__$1;
(statearr_17334_17373[(2)] = inst_17301);

(statearr_17334_17373[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (17))){
var inst_17312 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17335_17374 = state_17318__$1;
(statearr_17335_17374[(2)] = inst_17312);

(statearr_17335_17374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (3))){
var inst_17256 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17256)){
var statearr_17336_17375 = state_17318__$1;
(statearr_17336_17375[(1)] = (10));

} else {
var statearr_17337_17376 = state_17318__$1;
(statearr_17337_17376[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (12))){
var inst_17314 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17338_17377 = state_17318__$1;
(statearr_17338_17377[(2)] = inst_17314);

(statearr_17338_17377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (2))){
var inst_17244 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17244)){
var statearr_17339_17378 = state_17318__$1;
(statearr_17339_17378[(1)] = (5));

} else {
var statearr_17340_17379 = state_17318__$1;
(statearr_17340_17379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (23))){
var inst_17290 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17290)){
var statearr_17341_17380 = state_17318__$1;
(statearr_17341_17380[(1)] = (27));

} else {
var statearr_17342_17381 = state_17318__$1;
(statearr_17342_17381[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (19))){
var inst_17277 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17278 = figwheel.client.heads_up.append_message.call(null,inst_17277);
var state_17318__$1 = state_17318;
var statearr_17343_17382 = state_17318__$1;
(statearr_17343_17382[(2)] = inst_17278);

(statearr_17343_17382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (11))){
var inst_17267 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17267)){
var statearr_17344_17383 = state_17318__$1;
(statearr_17344_17383[(1)] = (15));

} else {
var statearr_17345_17384 = state_17318__$1;
(statearr_17345_17384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (9))){
var inst_17252 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17346_17385 = state_17318__$1;
(statearr_17346_17385[(2)] = inst_17252);

(statearr_17346_17385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (5))){
var inst_17246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(8),inst_17246);
} else {
if((state_val_17319 === (14))){
var inst_17265 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17347_17386 = state_17318__$1;
(statearr_17347_17386[(2)] = inst_17265);

(statearr_17347_17386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (26))){
var inst_17288 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17348_17387 = state_17318__$1;
(statearr_17348_17387[(2)] = inst_17288);

(statearr_17348_17387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (16))){
var inst_17275 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17318__$1 = state_17318;
if(cljs.core.truth_(inst_17275)){
var statearr_17349_17388 = state_17318__$1;
(statearr_17349_17388[(1)] = (19));

} else {
var statearr_17350_17389 = state_17318__$1;
(statearr_17350_17389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (30))){
var inst_17295 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17351_17390 = state_17318__$1;
(statearr_17351_17390[(2)] = inst_17295);

(statearr_17351_17390[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (10))){
var inst_17258 = figwheel.client.heads_up.clear.call(null);
var state_17318__$1 = state_17318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17318__$1,(13),inst_17258);
} else {
if((state_val_17319 === (18))){
var inst_17273 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17352_17391 = state_17318__$1;
(statearr_17352_17391[(2)] = inst_17273);

(statearr_17352_17391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17319 === (8))){
var inst_17248 = (state_17318[(2)]);
var state_17318__$1 = state_17318;
var statearr_17353_17392 = state_17318__$1;
(statearr_17353_17392[(2)] = inst_17248);

(statearr_17353_17392[(1)] = (7));


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
var statearr_17357 = [null,null,null,null,null,null,null,null,null];
(statearr_17357[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__);

(statearr_17357[(1)] = (1));

return statearr_17357;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____1 = (function (state_17318){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17358){if((e17358 instanceof Object)){
var ex__7641__auto__ = e17358;
var statearr_17359_17393 = state_17318;
(statearr_17359_17393[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17394 = state_17318;
state_17318 = G__17394;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__ = function(state_17318){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____1.call(this,state_17318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,msg_hist,msg_names,msg))
})();
var state__7701__auto__ = (function (){var statearr_17360 = f__7700__auto__.call(null);
(statearr_17360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,msg_hist,msg_names,msg))
);

return c__7699__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7699__auto___17457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___17457,ch){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___17457,ch){
return (function (state_17440){
var state_val_17441 = (state_17440[(1)]);
if((state_val_17441 === (8))){
var inst_17432 = (state_17440[(2)]);
var state_17440__$1 = (function (){var statearr_17442 = state_17440;
(statearr_17442[(7)] = inst_17432);

return statearr_17442;
})();
var statearr_17443_17458 = state_17440__$1;
(statearr_17443_17458[(2)] = null);

(statearr_17443_17458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (7))){
var inst_17436 = (state_17440[(2)]);
var state_17440__$1 = state_17440;
var statearr_17444_17459 = state_17440__$1;
(statearr_17444_17459[(2)] = inst_17436);

(statearr_17444_17459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (6))){
var state_17440__$1 = state_17440;
var statearr_17445_17460 = state_17440__$1;
(statearr_17445_17460[(2)] = null);

(statearr_17445_17460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (5))){
var inst_17428 = (state_17440[(8)]);
var inst_17430 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_17428);
var state_17440__$1 = state_17440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17440__$1,(8),inst_17430);
} else {
if((state_val_17441 === (4))){
var inst_17428 = (state_17440[(8)]);
var inst_17428__$1 = (state_17440[(2)]);
var state_17440__$1 = (function (){var statearr_17446 = state_17440;
(statearr_17446[(8)] = inst_17428__$1);

return statearr_17446;
})();
if(cljs.core.truth_(inst_17428__$1)){
var statearr_17447_17461 = state_17440__$1;
(statearr_17447_17461[(1)] = (5));

} else {
var statearr_17448_17462 = state_17440__$1;
(statearr_17448_17462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (3))){
var inst_17438 = (state_17440[(2)]);
var state_17440__$1 = state_17440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17440__$1,inst_17438);
} else {
if((state_val_17441 === (2))){
var state_17440__$1 = state_17440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17440__$1,(4),ch);
} else {
if((state_val_17441 === (1))){
var state_17440__$1 = state_17440;
var statearr_17449_17463 = state_17440__$1;
(statearr_17449_17463[(2)] = null);

(statearr_17449_17463[(1)] = (2));


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
});})(c__7699__auto___17457,ch))
;
return ((function (switch__7637__auto__,c__7699__auto___17457,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7638__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7638__auto____0 = (function (){
var statearr_17453 = [null,null,null,null,null,null,null,null,null];
(statearr_17453[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7638__auto__);

(statearr_17453[(1)] = (1));

return statearr_17453;
});
var figwheel$client$heads_up_plugin_$_state_machine__7638__auto____1 = (function (state_17440){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17454){if((e17454 instanceof Object)){
var ex__7641__auto__ = e17454;
var statearr_17455_17464 = state_17440;
(statearr_17455_17464[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17465 = state_17440;
state_17440 = G__17465;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7638__auto__ = function(state_17440){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7638__auto____1.call(this,state_17440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7638__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7638__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___17457,ch))
})();
var state__7701__auto__ = (function (){var statearr_17456 = f__7700__auto__.call(null);
(statearr_17456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17457);

return statearr_17456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___17457,ch))
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
return (function (state_17486){
var state_val_17487 = (state_17486[(1)]);
if((state_val_17487 === (2))){
var inst_17483 = (state_17486[(2)]);
var inst_17484 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17486__$1 = (function (){var statearr_17488 = state_17486;
(statearr_17488[(7)] = inst_17483);

return statearr_17488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17486__$1,inst_17484);
} else {
if((state_val_17487 === (1))){
var inst_17481 = cljs.core.async.timeout.call(null,(3000));
var state_17486__$1 = state_17486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17486__$1,(2),inst_17481);
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
var statearr_17492 = [null,null,null,null,null,null,null,null];
(statearr_17492[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__);

(statearr_17492[(1)] = (1));

return statearr_17492;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____1 = (function (state_17486){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17493){if((e17493 instanceof Object)){
var ex__7641__auto__ = e17493;
var statearr_17494_17496 = state_17486;
(statearr_17494_17496[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17497 = state_17486;
state_17486 = G__17497;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__ = function(state_17486){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____1.call(this,state_17486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7638__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17495 = f__7700__auto__.call(null);
(statearr_17495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17495;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17501 = {"detail":url};
return obj17501;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__17502){
var map__17508 = p__17502;
var map__17508__$1 = ((cljs.core.seq_QMARK_.call(null,map__17508))?cljs.core.apply.call(null,cljs.core.hash_map,map__17508):map__17508);
var ed = map__17508__$1;
var exception_data = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__17509_17513 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17510_17514 = null;
var count__17511_17515 = (0);
var i__17512_17516 = (0);
while(true){
if((i__17512_17516 < count__17511_17515)){
var msg_17517 = cljs.core._nth.call(null,chunk__17510_17514,i__17512_17516);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17517);

var G__17518 = seq__17509_17513;
var G__17519 = chunk__17510_17514;
var G__17520 = count__17511_17515;
var G__17521 = (i__17512_17516 + (1));
seq__17509_17513 = G__17518;
chunk__17510_17514 = G__17519;
count__17511_17515 = G__17520;
i__17512_17516 = G__17521;
continue;
} else {
var temp__4126__auto___17522 = cljs.core.seq.call(null,seq__17509_17513);
if(temp__4126__auto___17522){
var seq__17509_17523__$1 = temp__4126__auto___17522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17509_17523__$1)){
var c__5118__auto___17524 = cljs.core.chunk_first.call(null,seq__17509_17523__$1);
var G__17525 = cljs.core.chunk_rest.call(null,seq__17509_17523__$1);
var G__17526 = c__5118__auto___17524;
var G__17527 = cljs.core.count.call(null,c__5118__auto___17524);
var G__17528 = (0);
seq__17509_17513 = G__17525;
chunk__17510_17514 = G__17526;
count__17511_17515 = G__17527;
i__17512_17516 = G__17528;
continue;
} else {
var msg_17529 = cljs.core.first.call(null,seq__17509_17523__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17529);

var G__17530 = cljs.core.next.call(null,seq__17509_17523__$1);
var G__17531 = null;
var G__17532 = (0);
var G__17533 = (0);
seq__17509_17513 = G__17530;
chunk__17510_17514 = G__17531;
count__17511_17515 = G__17532;
i__17512_17516 = G__17533;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__17534){
var map__17536 = p__17534;
var map__17536__$1 = ((cljs.core.seq_QMARK_.call(null,map__17536))?cljs.core.apply.call(null,cljs.core.hash_map,map__17536):map__17536);
var w = map__17536__$1;
var message = cljs.core.get.call(null,map__17536__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__17543 = cljs.core.seq.call(null,plugins);
var chunk__17544 = null;
var count__17545 = (0);
var i__17546 = (0);
while(true){
if((i__17546 < count__17545)){
var vec__17547 = cljs.core._nth.call(null,chunk__17544,i__17546);
var k = cljs.core.nth.call(null,vec__17547,(0),null);
var plugin = cljs.core.nth.call(null,vec__17547,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17549 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17543,chunk__17544,count__17545,i__17546,pl_17549,vec__17547,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_17549.call(null,msg_hist);
});})(seq__17543,chunk__17544,count__17545,i__17546,pl_17549,vec__17547,k,plugin))
);
} else {
}

var G__17550 = seq__17543;
var G__17551 = chunk__17544;
var G__17552 = count__17545;
var G__17553 = (i__17546 + (1));
seq__17543 = G__17550;
chunk__17544 = G__17551;
count__17545 = G__17552;
i__17546 = G__17553;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17543);
if(temp__4126__auto__){
var seq__17543__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17543__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__17543__$1);
var G__17554 = cljs.core.chunk_rest.call(null,seq__17543__$1);
var G__17555 = c__5118__auto__;
var G__17556 = cljs.core.count.call(null,c__5118__auto__);
var G__17557 = (0);
seq__17543 = G__17554;
chunk__17544 = G__17555;
count__17545 = G__17556;
i__17546 = G__17557;
continue;
} else {
var vec__17548 = cljs.core.first.call(null,seq__17543__$1);
var k = cljs.core.nth.call(null,vec__17548,(0),null);
var plugin = cljs.core.nth.call(null,vec__17548,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17558 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17543,chunk__17544,count__17545,i__17546,pl_17558,vec__17548,k,plugin,seq__17543__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_17558.call(null,msg_hist);
});})(seq__17543,chunk__17544,count__17545,i__17546,pl_17558,vec__17548,k,plugin,seq__17543__$1,temp__4126__auto__))
);
} else {
}

var G__17559 = cljs.core.next.call(null,seq__17543__$1);
var G__17560 = null;
var G__17561 = (0);
var G__17562 = (0);
seq__17543 = G__17559;
chunk__17544 = G__17560;
count__17545 = G__17561;
i__17546 = G__17562;
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
var G__17564 = arguments.length;
switch (G__17564) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__17567){
var map__17568 = p__17567;
var map__17568__$1 = ((cljs.core.seq_QMARK_.call(null,map__17568))?cljs.core.apply.call(null,cljs.core.hash_map,map__17568):map__17568);
var opts = map__17568__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq17566){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17566));
});

//# sourceMappingURL=client.js.map?rel=1440777373820