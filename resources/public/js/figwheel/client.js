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
var G__16105__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16106__i = 0, G__16106__a = new Array(arguments.length -  0);
while (G__16106__i < G__16106__a.length) {G__16106__a[G__16106__i] = arguments[G__16106__i + 0]; ++G__16106__i;}
  args = new cljs.core.IndexedSeq(G__16106__a,0);
} 
return G__16105__delegate.call(this,args);};
G__16105.cljs$lang$maxFixedArity = 0;
G__16105.cljs$lang$applyTo = (function (arglist__16107){
var args = cljs.core.seq(arglist__16107);
return G__16105__delegate(args);
});
G__16105.cljs$core$IFn$_invoke$arity$variadic = G__16105__delegate;
return G__16105;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__16108){
var map__16110 = p__16108;
var map__16110__$1 = ((cljs.core.seq_QMARK_.call(null,map__16110))?cljs.core.apply.call(null,cljs.core.hash_map,map__16110):map__16110);
var class$ = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__6916__auto___16239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___16239,ch){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___16239,ch){
return (function (state_16213){
var state_val_16214 = (state_16213[(1)]);
if((state_val_16214 === (7))){
var inst_16209 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16215_16240 = state_16213__$1;
(statearr_16215_16240[(2)] = inst_16209);

(statearr_16215_16240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (1))){
var state_16213__$1 = state_16213;
var statearr_16216_16241 = state_16213__$1;
(statearr_16216_16241[(2)] = null);

(statearr_16216_16241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (4))){
var inst_16177 = (state_16213[(7)]);
var inst_16177__$1 = (state_16213[(2)]);
var state_16213__$1 = (function (){var statearr_16217 = state_16213;
(statearr_16217[(7)] = inst_16177__$1);

return statearr_16217;
})();
if(cljs.core.truth_(inst_16177__$1)){
var statearr_16218_16242 = state_16213__$1;
(statearr_16218_16242[(1)] = (5));

} else {
var statearr_16219_16243 = state_16213__$1;
(statearr_16219_16243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (13))){
var state_16213__$1 = state_16213;
var statearr_16220_16244 = state_16213__$1;
(statearr_16220_16244[(2)] = null);

(statearr_16220_16244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (6))){
var state_16213__$1 = state_16213;
var statearr_16221_16245 = state_16213__$1;
(statearr_16221_16245[(2)] = null);

(statearr_16221_16245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (3))){
var inst_16211 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16213__$1,inst_16211);
} else {
if((state_val_16214 === (12))){
var inst_16184 = (state_16213[(8)]);
var inst_16197 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_16184);
var inst_16198 = cljs.core.first.call(null,inst_16197);
var inst_16199 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_16198);
var inst_16200 = console.warn("Figwheel: Not loading code with warnings - ",inst_16199);
var state_16213__$1 = state_16213;
var statearr_16222_16246 = state_16213__$1;
(statearr_16222_16246[(2)] = inst_16200);

(statearr_16222_16246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (2))){
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16213__$1,(4),ch);
} else {
if((state_val_16214 === (11))){
var inst_16193 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16223_16247 = state_16213__$1;
(statearr_16223_16247[(2)] = inst_16193);

(statearr_16223_16247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (9))){
var inst_16183 = (state_16213[(9)]);
var inst_16195 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_16183,opts);
var state_16213__$1 = state_16213;
if(cljs.core.truth_(inst_16195)){
var statearr_16224_16248 = state_16213__$1;
(statearr_16224_16248[(1)] = (12));

} else {
var statearr_16225_16249 = state_16213__$1;
(statearr_16225_16249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (5))){
var inst_16177 = (state_16213[(7)]);
var inst_16183 = (state_16213[(9)]);
var inst_16179 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_16180 = (new cljs.core.PersistentArrayMap(null,2,inst_16179,null));
var inst_16181 = (new cljs.core.PersistentHashSet(null,inst_16180,null));
var inst_16182 = figwheel.client.focus_msgs.call(null,inst_16181,inst_16177);
var inst_16183__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_16182);
var inst_16184 = cljs.core.first.call(null,inst_16182);
var inst_16185 = figwheel.client.reload_file_state_QMARK_.call(null,inst_16183__$1,opts);
var state_16213__$1 = (function (){var statearr_16226 = state_16213;
(statearr_16226[(9)] = inst_16183__$1);

(statearr_16226[(8)] = inst_16184);

return statearr_16226;
})();
if(cljs.core.truth_(inst_16185)){
var statearr_16227_16250 = state_16213__$1;
(statearr_16227_16250[(1)] = (8));

} else {
var statearr_16228_16251 = state_16213__$1;
(statearr_16228_16251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (14))){
var inst_16203 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16229_16252 = state_16213__$1;
(statearr_16229_16252[(2)] = inst_16203);

(statearr_16229_16252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (10))){
var inst_16205 = (state_16213[(2)]);
var state_16213__$1 = (function (){var statearr_16230 = state_16213;
(statearr_16230[(10)] = inst_16205);

return statearr_16230;
})();
var statearr_16231_16253 = state_16213__$1;
(statearr_16231_16253[(2)] = null);

(statearr_16231_16253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (8))){
var inst_16184 = (state_16213[(8)]);
var inst_16187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16188 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_16184);
var inst_16189 = cljs.core.async.timeout.call(null,(1000));
var inst_16190 = [inst_16188,inst_16189];
var inst_16191 = (new cljs.core.PersistentVector(null,2,(5),inst_16187,inst_16190,null));
var state_16213__$1 = state_16213;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16213__$1,(11),inst_16191);
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
});})(c__6916__auto___16239,ch))
;
return ((function (switch__6854__auto__,c__6916__auto___16239,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____0 = (function (){
var statearr_16235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16235[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__);

(statearr_16235[(1)] = (1));

return statearr_16235;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____1 = (function (state_16213){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16236){if((e16236 instanceof Object)){
var ex__6858__auto__ = e16236;
var statearr_16237_16254 = state_16213;
(statearr_16237_16254[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16255 = state_16213;
state_16213 = G__16255;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__ = function(state_16213){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____1.call(this,state_16213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___16239,ch))
})();
var state__6918__auto__ = (function (){var statearr_16238 = f__6917__auto__.call(null);
(statearr_16238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___16239);

return statearr_16238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___16239,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__16256_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__16256_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_16265 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__16258_SHARP_,p2__16257_SHARP_){
return [cljs.core.str(p2__16257_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_16265){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_16263 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_16264 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_16263,_STAR_print_newline_STAR_16264,base_path_16265){
return (function() { 
var G__16266__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16267__i = 0, G__16267__a = new Array(arguments.length -  0);
while (G__16267__i < G__16267__a.length) {G__16267__a[G__16267__i] = arguments[G__16267__i + 0]; ++G__16267__i;}
  args = new cljs.core.IndexedSeq(G__16267__a,0);
} 
return G__16266__delegate.call(this,args);};
G__16266.cljs$lang$maxFixedArity = 0;
G__16266.cljs$lang$applyTo = (function (arglist__16268){
var args = cljs.core.seq(arglist__16268);
return G__16266__delegate(args);
});
G__16266.cljs$core$IFn$_invoke$arity$variadic = G__16266__delegate;
return G__16266;
})()
;})(_STAR_print_fn_STAR_16263,_STAR_print_newline_STAR_16264,base_path_16265))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16264;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16263;
}}catch (e16262){if((e16262 instanceof Error)){
var e = e16262;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_16265], null));
} else {
var e = e16262;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_16265))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__16269){
var map__16274 = p__16269;
var map__16274__$1 = ((cljs.core.seq_QMARK_.call(null,map__16274))?cljs.core.apply.call(null,cljs.core.hash_map,map__16274):map__16274);
var opts = map__16274__$1;
var build_id = cljs.core.get.call(null,map__16274__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__16274,map__16274__$1,opts,build_id){
return (function (p__16275){
var vec__16276 = p__16275;
var map__16277 = cljs.core.nth.call(null,vec__16276,(0),null);
var map__16277__$1 = ((cljs.core.seq_QMARK_.call(null,map__16277))?cljs.core.apply.call(null,cljs.core.hash_map,map__16277):map__16277);
var msg = map__16277__$1;
var msg_name = cljs.core.get.call(null,map__16277__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__16276,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__16276,map__16277,map__16277__$1,msg,msg_name,_,map__16274,map__16274__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__16276,map__16277,map__16277__$1,msg,msg_name,_,map__16274,map__16274__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__16274,map__16274__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__16281){
var vec__16282 = p__16281;
var map__16283 = cljs.core.nth.call(null,vec__16282,(0),null);
var map__16283__$1 = ((cljs.core.seq_QMARK_.call(null,map__16283))?cljs.core.apply.call(null,cljs.core.hash_map,map__16283):map__16283);
var msg = map__16283__$1;
var msg_name = cljs.core.get.call(null,map__16283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__16282,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__16284){
var map__16292 = p__16284;
var map__16292__$1 = ((cljs.core.seq_QMARK_.call(null,map__16292))?cljs.core.apply.call(null,cljs.core.hash_map,map__16292):map__16292);
var on_compile_fail = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__16292,map__16292__$1,on_compile_fail,on_compile_warning){
return (function (p__16293){
var vec__16294 = p__16293;
var map__16295 = cljs.core.nth.call(null,vec__16294,(0),null);
var map__16295__$1 = ((cljs.core.seq_QMARK_.call(null,map__16295))?cljs.core.apply.call(null,cljs.core.hash_map,map__16295):map__16295);
var msg = map__16295__$1;
var msg_name = cljs.core.get.call(null,map__16295__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__16294,(1));
var pred__16296 = cljs.core._EQ_;
var expr__16297 = msg_name;
if(cljs.core.truth_(pred__16296.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__16297))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__16296.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16297))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__16292,map__16292__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,msg_hist,msg_names,msg){
return (function (state_16494){
var state_val_16495 = (state_16494[(1)]);
if((state_val_16495 === (7))){
var inst_16430 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16496_16537 = state_16494__$1;
(statearr_16496_16537[(2)] = inst_16430);

(statearr_16496_16537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (20))){
var inst_16456 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16456)){
var statearr_16497_16538 = state_16494__$1;
(statearr_16497_16538[(1)] = (22));

} else {
var statearr_16498_16539 = state_16494__$1;
(statearr_16498_16539[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (27))){
var inst_16468 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16469 = figwheel.client.heads_up.display_warning.call(null,inst_16468);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(30),inst_16469);
} else {
if((state_val_16495 === (1))){
var inst_16418 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16418)){
var statearr_16499_16540 = state_16494__$1;
(statearr_16499_16540[(1)] = (2));

} else {
var statearr_16500_16541 = state_16494__$1;
(statearr_16500_16541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (24))){
var inst_16484 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16501_16542 = state_16494__$1;
(statearr_16501_16542[(2)] = inst_16484);

(statearr_16501_16542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (4))){
var inst_16492 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16494__$1,inst_16492);
} else {
if((state_val_16495 === (15))){
var inst_16445 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16446 = figwheel.client.format_messages.call(null,inst_16445);
var inst_16447 = figwheel.client.heads_up.display_error.call(null,inst_16446);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(18),inst_16447);
} else {
if((state_val_16495 === (21))){
var inst_16486 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16502_16543 = state_16494__$1;
(statearr_16502_16543[(2)] = inst_16486);

(statearr_16502_16543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (31))){
var inst_16475 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(34),inst_16475);
} else {
if((state_val_16495 === (32))){
var state_16494__$1 = state_16494;
var statearr_16503_16544 = state_16494__$1;
(statearr_16503_16544[(2)] = null);

(statearr_16503_16544[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (33))){
var inst_16480 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16504_16545 = state_16494__$1;
(statearr_16504_16545[(2)] = inst_16480);

(statearr_16504_16545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (13))){
var inst_16436 = (state_16494[(2)]);
var inst_16437 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16438 = figwheel.client.format_messages.call(null,inst_16437);
var inst_16439 = figwheel.client.heads_up.display_error.call(null,inst_16438);
var state_16494__$1 = (function (){var statearr_16505 = state_16494;
(statearr_16505[(7)] = inst_16436);

return statearr_16505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(14),inst_16439);
} else {
if((state_val_16495 === (22))){
var inst_16458 = figwheel.client.heads_up.clear.call(null);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(25),inst_16458);
} else {
if((state_val_16495 === (29))){
var inst_16482 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16506_16546 = state_16494__$1;
(statearr_16506_16546[(2)] = inst_16482);

(statearr_16506_16546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (6))){
var inst_16426 = figwheel.client.heads_up.clear.call(null);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(9),inst_16426);
} else {
if((state_val_16495 === (28))){
var inst_16473 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16473)){
var statearr_16507_16547 = state_16494__$1;
(statearr_16507_16547[(1)] = (31));

} else {
var statearr_16508_16548 = state_16494__$1;
(statearr_16508_16548[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (25))){
var inst_16460 = (state_16494[(2)]);
var inst_16461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16462 = figwheel.client.heads_up.display_warning.call(null,inst_16461);
var state_16494__$1 = (function (){var statearr_16509 = state_16494;
(statearr_16509[(8)] = inst_16460);

return statearr_16509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(26),inst_16462);
} else {
if((state_val_16495 === (34))){
var inst_16477 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16510_16549 = state_16494__$1;
(statearr_16510_16549[(2)] = inst_16477);

(statearr_16510_16549[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (17))){
var inst_16488 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16511_16550 = state_16494__$1;
(statearr_16511_16550[(2)] = inst_16488);

(statearr_16511_16550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (3))){
var inst_16432 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16432)){
var statearr_16512_16551 = state_16494__$1;
(statearr_16512_16551[(1)] = (10));

} else {
var statearr_16513_16552 = state_16494__$1;
(statearr_16513_16552[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (12))){
var inst_16490 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16514_16553 = state_16494__$1;
(statearr_16514_16553[(2)] = inst_16490);

(statearr_16514_16553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (2))){
var inst_16420 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16420)){
var statearr_16515_16554 = state_16494__$1;
(statearr_16515_16554[(1)] = (5));

} else {
var statearr_16516_16555 = state_16494__$1;
(statearr_16516_16555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (23))){
var inst_16466 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16466)){
var statearr_16517_16556 = state_16494__$1;
(statearr_16517_16556[(1)] = (27));

} else {
var statearr_16518_16557 = state_16494__$1;
(statearr_16518_16557[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (19))){
var inst_16453 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16454 = figwheel.client.heads_up.append_message.call(null,inst_16453);
var state_16494__$1 = state_16494;
var statearr_16519_16558 = state_16494__$1;
(statearr_16519_16558[(2)] = inst_16454);

(statearr_16519_16558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (11))){
var inst_16443 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16443)){
var statearr_16520_16559 = state_16494__$1;
(statearr_16520_16559[(1)] = (15));

} else {
var statearr_16521_16560 = state_16494__$1;
(statearr_16521_16560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (9))){
var inst_16428 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16522_16561 = state_16494__$1;
(statearr_16522_16561[(2)] = inst_16428);

(statearr_16522_16561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (5))){
var inst_16422 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(8),inst_16422);
} else {
if((state_val_16495 === (14))){
var inst_16441 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16523_16562 = state_16494__$1;
(statearr_16523_16562[(2)] = inst_16441);

(statearr_16523_16562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (26))){
var inst_16464 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16524_16563 = state_16494__$1;
(statearr_16524_16563[(2)] = inst_16464);

(statearr_16524_16563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (16))){
var inst_16451 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16451)){
var statearr_16525_16564 = state_16494__$1;
(statearr_16525_16564[(1)] = (19));

} else {
var statearr_16526_16565 = state_16494__$1;
(statearr_16526_16565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (30))){
var inst_16471 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16527_16566 = state_16494__$1;
(statearr_16527_16566[(2)] = inst_16471);

(statearr_16527_16566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (10))){
var inst_16434 = figwheel.client.heads_up.clear.call(null);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(13),inst_16434);
} else {
if((state_val_16495 === (18))){
var inst_16449 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16528_16567 = state_16494__$1;
(statearr_16528_16567[(2)] = inst_16449);

(statearr_16528_16567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (8))){
var inst_16424 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16529_16568 = state_16494__$1;
(statearr_16529_16568[(2)] = inst_16424);

(statearr_16529_16568[(1)] = (7));


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
});})(c__6916__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6854__auto__,c__6916__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____0 = (function (){
var statearr_16533 = [null,null,null,null,null,null,null,null,null];
(statearr_16533[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__);

(statearr_16533[(1)] = (1));

return statearr_16533;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____1 = (function (state_16494){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16534){if((e16534 instanceof Object)){
var ex__6858__auto__ = e16534;
var statearr_16535_16569 = state_16494;
(statearr_16535_16569[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16570 = state_16494;
state_16494 = G__16570;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__ = function(state_16494){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____1.call(this,state_16494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,msg_hist,msg_names,msg))
})();
var state__6918__auto__ = (function (){var statearr_16536 = f__6917__auto__.call(null);
(statearr_16536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,msg_hist,msg_names,msg))
);

return c__6916__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6916__auto___16633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___16633,ch){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___16633,ch){
return (function (state_16616){
var state_val_16617 = (state_16616[(1)]);
if((state_val_16617 === (8))){
var inst_16608 = (state_16616[(2)]);
var state_16616__$1 = (function (){var statearr_16618 = state_16616;
(statearr_16618[(7)] = inst_16608);

return statearr_16618;
})();
var statearr_16619_16634 = state_16616__$1;
(statearr_16619_16634[(2)] = null);

(statearr_16619_16634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (7))){
var inst_16612 = (state_16616[(2)]);
var state_16616__$1 = state_16616;
var statearr_16620_16635 = state_16616__$1;
(statearr_16620_16635[(2)] = inst_16612);

(statearr_16620_16635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (6))){
var state_16616__$1 = state_16616;
var statearr_16621_16636 = state_16616__$1;
(statearr_16621_16636[(2)] = null);

(statearr_16621_16636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (5))){
var inst_16604 = (state_16616[(8)]);
var inst_16606 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_16604);
var state_16616__$1 = state_16616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16616__$1,(8),inst_16606);
} else {
if((state_val_16617 === (4))){
var inst_16604 = (state_16616[(8)]);
var inst_16604__$1 = (state_16616[(2)]);
var state_16616__$1 = (function (){var statearr_16622 = state_16616;
(statearr_16622[(8)] = inst_16604__$1);

return statearr_16622;
})();
if(cljs.core.truth_(inst_16604__$1)){
var statearr_16623_16637 = state_16616__$1;
(statearr_16623_16637[(1)] = (5));

} else {
var statearr_16624_16638 = state_16616__$1;
(statearr_16624_16638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16617 === (3))){
var inst_16614 = (state_16616[(2)]);
var state_16616__$1 = state_16616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16616__$1,inst_16614);
} else {
if((state_val_16617 === (2))){
var state_16616__$1 = state_16616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16616__$1,(4),ch);
} else {
if((state_val_16617 === (1))){
var state_16616__$1 = state_16616;
var statearr_16625_16639 = state_16616__$1;
(statearr_16625_16639[(2)] = null);

(statearr_16625_16639[(1)] = (2));


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
});})(c__6916__auto___16633,ch))
;
return ((function (switch__6854__auto__,c__6916__auto___16633,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6855__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6855__auto____0 = (function (){
var statearr_16629 = [null,null,null,null,null,null,null,null,null];
(statearr_16629[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6855__auto__);

(statearr_16629[(1)] = (1));

return statearr_16629;
});
var figwheel$client$heads_up_plugin_$_state_machine__6855__auto____1 = (function (state_16616){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16630){if((e16630 instanceof Object)){
var ex__6858__auto__ = e16630;
var statearr_16631_16640 = state_16616;
(statearr_16631_16640[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16641 = state_16616;
state_16616 = G__16641;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6855__auto__ = function(state_16616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6855__auto____1.call(this,state_16616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6855__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6855__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___16633,ch))
})();
var state__6918__auto__ = (function (){var statearr_16632 = f__6917__auto__.call(null);
(statearr_16632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___16633);

return statearr_16632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___16633,ch))
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
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_16662){
var state_val_16663 = (state_16662[(1)]);
if((state_val_16663 === (2))){
var inst_16659 = (state_16662[(2)]);
var inst_16660 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_16662__$1 = (function (){var statearr_16664 = state_16662;
(statearr_16664[(7)] = inst_16659);

return statearr_16664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16662__$1,inst_16660);
} else {
if((state_val_16663 === (1))){
var inst_16657 = cljs.core.async.timeout.call(null,(3000));
var state_16662__$1 = state_16662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16662__$1,(2),inst_16657);
} else {
return null;
}
}
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____0 = (function (){
var statearr_16668 = [null,null,null,null,null,null,null,null];
(statearr_16668[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__);

(statearr_16668[(1)] = (1));

return statearr_16668;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____1 = (function (state_16662){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16669){if((e16669 instanceof Object)){
var ex__6858__auto__ = e16669;
var statearr_16670_16672 = state_16662;
(statearr_16670_16672[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16673 = state_16662;
state_16662 = G__16673;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__ = function(state_16662){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____1.call(this,state_16662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16671 = f__6917__auto__.call(null);
(statearr_16671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16677 = {"detail":url};
return obj16677;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__16678){
var map__16684 = p__16678;
var map__16684__$1 = ((cljs.core.seq_QMARK_.call(null,map__16684))?cljs.core.apply.call(null,cljs.core.hash_map,map__16684):map__16684);
var ed = map__16684__$1;
var exception_data = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__16685_16689 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__16686_16690 = null;
var count__16687_16691 = (0);
var i__16688_16692 = (0);
while(true){
if((i__16688_16692 < count__16687_16691)){
var msg_16693 = cljs.core._nth.call(null,chunk__16686_16690,i__16688_16692);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_16693);

var G__16694 = seq__16685_16689;
var G__16695 = chunk__16686_16690;
var G__16696 = count__16687_16691;
var G__16697 = (i__16688_16692 + (1));
seq__16685_16689 = G__16694;
chunk__16686_16690 = G__16695;
count__16687_16691 = G__16696;
i__16688_16692 = G__16697;
continue;
} else {
var temp__4126__auto___16698 = cljs.core.seq.call(null,seq__16685_16689);
if(temp__4126__auto___16698){
var seq__16685_16699__$1 = temp__4126__auto___16698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16685_16699__$1)){
var c__5118__auto___16700 = cljs.core.chunk_first.call(null,seq__16685_16699__$1);
var G__16701 = cljs.core.chunk_rest.call(null,seq__16685_16699__$1);
var G__16702 = c__5118__auto___16700;
var G__16703 = cljs.core.count.call(null,c__5118__auto___16700);
var G__16704 = (0);
seq__16685_16689 = G__16701;
chunk__16686_16690 = G__16702;
count__16687_16691 = G__16703;
i__16688_16692 = G__16704;
continue;
} else {
var msg_16705 = cljs.core.first.call(null,seq__16685_16699__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_16705);

var G__16706 = cljs.core.next.call(null,seq__16685_16699__$1);
var G__16707 = null;
var G__16708 = (0);
var G__16709 = (0);
seq__16685_16689 = G__16706;
chunk__16686_16690 = G__16707;
count__16687_16691 = G__16708;
i__16688_16692 = G__16709;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__16710){
var map__16712 = p__16710;
var map__16712__$1 = ((cljs.core.seq_QMARK_.call(null,map__16712))?cljs.core.apply.call(null,cljs.core.hash_map,map__16712):map__16712);
var w = map__16712__$1;
var message = cljs.core.get.call(null,map__16712__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__16719 = cljs.core.seq.call(null,plugins);
var chunk__16720 = null;
var count__16721 = (0);
var i__16722 = (0);
while(true){
if((i__16722 < count__16721)){
var vec__16723 = cljs.core._nth.call(null,chunk__16720,i__16722);
var k = cljs.core.nth.call(null,vec__16723,(0),null);
var plugin = cljs.core.nth.call(null,vec__16723,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16719,chunk__16720,count__16721,i__16722,pl_16725,vec__16723,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_16725.call(null,msg_hist);
});})(seq__16719,chunk__16720,count__16721,i__16722,pl_16725,vec__16723,k,plugin))
);
} else {
}

var G__16726 = seq__16719;
var G__16727 = chunk__16720;
var G__16728 = count__16721;
var G__16729 = (i__16722 + (1));
seq__16719 = G__16726;
chunk__16720 = G__16727;
count__16721 = G__16728;
i__16722 = G__16729;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16719);
if(temp__4126__auto__){
var seq__16719__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16719__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__16719__$1);
var G__16730 = cljs.core.chunk_rest.call(null,seq__16719__$1);
var G__16731 = c__5118__auto__;
var G__16732 = cljs.core.count.call(null,c__5118__auto__);
var G__16733 = (0);
seq__16719 = G__16730;
chunk__16720 = G__16731;
count__16721 = G__16732;
i__16722 = G__16733;
continue;
} else {
var vec__16724 = cljs.core.first.call(null,seq__16719__$1);
var k = cljs.core.nth.call(null,vec__16724,(0),null);
var plugin = cljs.core.nth.call(null,vec__16724,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16719,chunk__16720,count__16721,i__16722,pl_16734,vec__16724,k,plugin,seq__16719__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_16734.call(null,msg_hist);
});})(seq__16719,chunk__16720,count__16721,i__16722,pl_16734,vec__16724,k,plugin,seq__16719__$1,temp__4126__auto__))
);
} else {
}

var G__16735 = cljs.core.next.call(null,seq__16719__$1);
var G__16736 = null;
var G__16737 = (0);
var G__16738 = (0);
seq__16719 = G__16735;
chunk__16720 = G__16736;
count__16721 = G__16737;
i__16722 = G__16738;
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
var G__16740 = arguments.length;
switch (G__16740) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__16743){
var map__16744 = p__16743;
var map__16744__$1 = ((cljs.core.seq_QMARK_.call(null,map__16744))?cljs.core.apply.call(null,cljs.core.hash_map,map__16744):map__16744);
var opts = map__16744__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq16742){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16742));
});

//# sourceMappingURL=client.js.map?rel=1440343115783