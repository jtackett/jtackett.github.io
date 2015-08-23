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
var G__16096__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16097__i = 0, G__16097__a = new Array(arguments.length -  0);
while (G__16097__i < G__16097__a.length) {G__16097__a[G__16097__i] = arguments[G__16097__i + 0]; ++G__16097__i;}
  args = new cljs.core.IndexedSeq(G__16097__a,0);
} 
return G__16096__delegate.call(this,args);};
G__16096.cljs$lang$maxFixedArity = 0;
G__16096.cljs$lang$applyTo = (function (arglist__16098){
var args = cljs.core.seq(arglist__16098);
return G__16096__delegate(args);
});
G__16096.cljs$core$IFn$_invoke$arity$variadic = G__16096__delegate;
return G__16096;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__16099){
var map__16101 = p__16099;
var map__16101__$1 = ((cljs.core.seq_QMARK_.call(null,map__16101))?cljs.core.apply.call(null,cljs.core.hash_map,map__16101):map__16101);
var class$ = cljs.core.get.call(null,map__16101__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16101__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__6916__auto___16230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___16230,ch){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___16230,ch){
return (function (state_16204){
var state_val_16205 = (state_16204[(1)]);
if((state_val_16205 === (7))){
var inst_16200 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16206_16231 = state_16204__$1;
(statearr_16206_16231[(2)] = inst_16200);

(statearr_16206_16231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (1))){
var state_16204__$1 = state_16204;
var statearr_16207_16232 = state_16204__$1;
(statearr_16207_16232[(2)] = null);

(statearr_16207_16232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (4))){
var inst_16168 = (state_16204[(7)]);
var inst_16168__$1 = (state_16204[(2)]);
var state_16204__$1 = (function (){var statearr_16208 = state_16204;
(statearr_16208[(7)] = inst_16168__$1);

return statearr_16208;
})();
if(cljs.core.truth_(inst_16168__$1)){
var statearr_16209_16233 = state_16204__$1;
(statearr_16209_16233[(1)] = (5));

} else {
var statearr_16210_16234 = state_16204__$1;
(statearr_16210_16234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (13))){
var state_16204__$1 = state_16204;
var statearr_16211_16235 = state_16204__$1;
(statearr_16211_16235[(2)] = null);

(statearr_16211_16235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (6))){
var state_16204__$1 = state_16204;
var statearr_16212_16236 = state_16204__$1;
(statearr_16212_16236[(2)] = null);

(statearr_16212_16236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (3))){
var inst_16202 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16204__$1,inst_16202);
} else {
if((state_val_16205 === (12))){
var inst_16175 = (state_16204[(8)]);
var inst_16188 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_16175);
var inst_16189 = cljs.core.first.call(null,inst_16188);
var inst_16190 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_16189);
var inst_16191 = console.warn("Figwheel: Not loading code with warnings - ",inst_16190);
var state_16204__$1 = state_16204;
var statearr_16213_16237 = state_16204__$1;
(statearr_16213_16237[(2)] = inst_16191);

(statearr_16213_16237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (2))){
var state_16204__$1 = state_16204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16204__$1,(4),ch);
} else {
if((state_val_16205 === (11))){
var inst_16184 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16214_16238 = state_16204__$1;
(statearr_16214_16238[(2)] = inst_16184);

(statearr_16214_16238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (9))){
var inst_16174 = (state_16204[(9)]);
var inst_16186 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_16174,opts);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16186)){
var statearr_16215_16239 = state_16204__$1;
(statearr_16215_16239[(1)] = (12));

} else {
var statearr_16216_16240 = state_16204__$1;
(statearr_16216_16240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (5))){
var inst_16168 = (state_16204[(7)]);
var inst_16174 = (state_16204[(9)]);
var inst_16170 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_16171 = (new cljs.core.PersistentArrayMap(null,2,inst_16170,null));
var inst_16172 = (new cljs.core.PersistentHashSet(null,inst_16171,null));
var inst_16173 = figwheel.client.focus_msgs.call(null,inst_16172,inst_16168);
var inst_16174__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_16173);
var inst_16175 = cljs.core.first.call(null,inst_16173);
var inst_16176 = figwheel.client.reload_file_state_QMARK_.call(null,inst_16174__$1,opts);
var state_16204__$1 = (function (){var statearr_16217 = state_16204;
(statearr_16217[(8)] = inst_16175);

(statearr_16217[(9)] = inst_16174__$1);

return statearr_16217;
})();
if(cljs.core.truth_(inst_16176)){
var statearr_16218_16241 = state_16204__$1;
(statearr_16218_16241[(1)] = (8));

} else {
var statearr_16219_16242 = state_16204__$1;
(statearr_16219_16242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (14))){
var inst_16194 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16220_16243 = state_16204__$1;
(statearr_16220_16243[(2)] = inst_16194);

(statearr_16220_16243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (10))){
var inst_16196 = (state_16204[(2)]);
var state_16204__$1 = (function (){var statearr_16221 = state_16204;
(statearr_16221[(10)] = inst_16196);

return statearr_16221;
})();
var statearr_16222_16244 = state_16204__$1;
(statearr_16222_16244[(2)] = null);

(statearr_16222_16244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (8))){
var inst_16175 = (state_16204[(8)]);
var inst_16178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16179 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_16175);
var inst_16180 = cljs.core.async.timeout.call(null,(1000));
var inst_16181 = [inst_16179,inst_16180];
var inst_16182 = (new cljs.core.PersistentVector(null,2,(5),inst_16178,inst_16181,null));
var state_16204__$1 = state_16204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16204__$1,(11),inst_16182);
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
});})(c__6916__auto___16230,ch))
;
return ((function (switch__6854__auto__,c__6916__auto___16230,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____0 = (function (){
var statearr_16226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16226[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__);

(statearr_16226[(1)] = (1));

return statearr_16226;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____1 = (function (state_16204){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16227){if((e16227 instanceof Object)){
var ex__6858__auto__ = e16227;
var statearr_16228_16245 = state_16204;
(statearr_16228_16245[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16246 = state_16204;
state_16204 = G__16246;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__ = function(state_16204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____1.call(this,state_16204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6855__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___16230,ch))
})();
var state__6918__auto__ = (function (){var statearr_16229 = f__6917__auto__.call(null);
(statearr_16229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___16230);

return statearr_16229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___16230,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__16247_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__16247_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_16256 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__16249_SHARP_,p2__16248_SHARP_){
return [cljs.core.str(p2__16248_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_16256){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_16254 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_16255 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_16254,_STAR_print_newline_STAR_16255,base_path_16256){
return (function() { 
var G__16257__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16258__i = 0, G__16258__a = new Array(arguments.length -  0);
while (G__16258__i < G__16258__a.length) {G__16258__a[G__16258__i] = arguments[G__16258__i + 0]; ++G__16258__i;}
  args = new cljs.core.IndexedSeq(G__16258__a,0);
} 
return G__16257__delegate.call(this,args);};
G__16257.cljs$lang$maxFixedArity = 0;
G__16257.cljs$lang$applyTo = (function (arglist__16259){
var args = cljs.core.seq(arglist__16259);
return G__16257__delegate(args);
});
G__16257.cljs$core$IFn$_invoke$arity$variadic = G__16257__delegate;
return G__16257;
})()
;})(_STAR_print_fn_STAR_16254,_STAR_print_newline_STAR_16255,base_path_16256))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16255;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16254;
}}catch (e16253){if((e16253 instanceof Error)){
var e = e16253;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_16256], null));
} else {
var e = e16253;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_16256))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__16260){
var map__16265 = p__16260;
var map__16265__$1 = ((cljs.core.seq_QMARK_.call(null,map__16265))?cljs.core.apply.call(null,cljs.core.hash_map,map__16265):map__16265);
var opts = map__16265__$1;
var build_id = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__16265,map__16265__$1,opts,build_id){
return (function (p__16266){
var vec__16267 = p__16266;
var map__16268 = cljs.core.nth.call(null,vec__16267,(0),null);
var map__16268__$1 = ((cljs.core.seq_QMARK_.call(null,map__16268))?cljs.core.apply.call(null,cljs.core.hash_map,map__16268):map__16268);
var msg = map__16268__$1;
var msg_name = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__16267,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__16267,map__16268,map__16268__$1,msg,msg_name,_,map__16265,map__16265__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__16267,map__16268,map__16268__$1,msg,msg_name,_,map__16265,map__16265__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__16265,map__16265__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__16272){
var vec__16273 = p__16272;
var map__16274 = cljs.core.nth.call(null,vec__16273,(0),null);
var map__16274__$1 = ((cljs.core.seq_QMARK_.call(null,map__16274))?cljs.core.apply.call(null,cljs.core.hash_map,map__16274):map__16274);
var msg = map__16274__$1;
var msg_name = cljs.core.get.call(null,map__16274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__16273,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__16275){
var map__16283 = p__16275;
var map__16283__$1 = ((cljs.core.seq_QMARK_.call(null,map__16283))?cljs.core.apply.call(null,cljs.core.hash_map,map__16283):map__16283);
var on_compile_fail = cljs.core.get.call(null,map__16283__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__16283__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__16283,map__16283__$1,on_compile_fail,on_compile_warning){
return (function (p__16284){
var vec__16285 = p__16284;
var map__16286 = cljs.core.nth.call(null,vec__16285,(0),null);
var map__16286__$1 = ((cljs.core.seq_QMARK_.call(null,map__16286))?cljs.core.apply.call(null,cljs.core.hash_map,map__16286):map__16286);
var msg = map__16286__$1;
var msg_name = cljs.core.get.call(null,map__16286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__16285,(1));
var pred__16287 = cljs.core._EQ_;
var expr__16288 = msg_name;
if(cljs.core.truth_(pred__16287.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__16288))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__16287.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16288))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__16283,map__16283__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,msg_hist,msg_names,msg){
return (function (state_16485){
var state_val_16486 = (state_16485[(1)]);
if((state_val_16486 === (7))){
var inst_16421 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16487_16528 = state_16485__$1;
(statearr_16487_16528[(2)] = inst_16421);

(statearr_16487_16528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (20))){
var inst_16447 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16447)){
var statearr_16488_16529 = state_16485__$1;
(statearr_16488_16529[(1)] = (22));

} else {
var statearr_16489_16530 = state_16485__$1;
(statearr_16489_16530[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (27))){
var inst_16459 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16460 = figwheel.client.heads_up.display_warning.call(null,inst_16459);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(30),inst_16460);
} else {
if((state_val_16486 === (1))){
var inst_16409 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16409)){
var statearr_16490_16531 = state_16485__$1;
(statearr_16490_16531[(1)] = (2));

} else {
var statearr_16491_16532 = state_16485__$1;
(statearr_16491_16532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (24))){
var inst_16475 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16492_16533 = state_16485__$1;
(statearr_16492_16533[(2)] = inst_16475);

(statearr_16492_16533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (4))){
var inst_16483 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16485__$1,inst_16483);
} else {
if((state_val_16486 === (15))){
var inst_16436 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16437 = figwheel.client.format_messages.call(null,inst_16436);
var inst_16438 = figwheel.client.heads_up.display_error.call(null,inst_16437);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(18),inst_16438);
} else {
if((state_val_16486 === (21))){
var inst_16477 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16493_16534 = state_16485__$1;
(statearr_16493_16534[(2)] = inst_16477);

(statearr_16493_16534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (31))){
var inst_16466 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(34),inst_16466);
} else {
if((state_val_16486 === (32))){
var state_16485__$1 = state_16485;
var statearr_16494_16535 = state_16485__$1;
(statearr_16494_16535[(2)] = null);

(statearr_16494_16535[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (33))){
var inst_16471 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16495_16536 = state_16485__$1;
(statearr_16495_16536[(2)] = inst_16471);

(statearr_16495_16536[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (13))){
var inst_16427 = (state_16485[(2)]);
var inst_16428 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16429 = figwheel.client.format_messages.call(null,inst_16428);
var inst_16430 = figwheel.client.heads_up.display_error.call(null,inst_16429);
var state_16485__$1 = (function (){var statearr_16496 = state_16485;
(statearr_16496[(7)] = inst_16427);

return statearr_16496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(14),inst_16430);
} else {
if((state_val_16486 === (22))){
var inst_16449 = figwheel.client.heads_up.clear.call(null);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(25),inst_16449);
} else {
if((state_val_16486 === (29))){
var inst_16473 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16497_16537 = state_16485__$1;
(statearr_16497_16537[(2)] = inst_16473);

(statearr_16497_16537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (6))){
var inst_16417 = figwheel.client.heads_up.clear.call(null);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(9),inst_16417);
} else {
if((state_val_16486 === (28))){
var inst_16464 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16464)){
var statearr_16498_16538 = state_16485__$1;
(statearr_16498_16538[(1)] = (31));

} else {
var statearr_16499_16539 = state_16485__$1;
(statearr_16499_16539[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (25))){
var inst_16451 = (state_16485[(2)]);
var inst_16452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16453 = figwheel.client.heads_up.display_warning.call(null,inst_16452);
var state_16485__$1 = (function (){var statearr_16500 = state_16485;
(statearr_16500[(8)] = inst_16451);

return statearr_16500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(26),inst_16453);
} else {
if((state_val_16486 === (34))){
var inst_16468 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16501_16540 = state_16485__$1;
(statearr_16501_16540[(2)] = inst_16468);

(statearr_16501_16540[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (17))){
var inst_16479 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16502_16541 = state_16485__$1;
(statearr_16502_16541[(2)] = inst_16479);

(statearr_16502_16541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (3))){
var inst_16423 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16423)){
var statearr_16503_16542 = state_16485__$1;
(statearr_16503_16542[(1)] = (10));

} else {
var statearr_16504_16543 = state_16485__$1;
(statearr_16504_16543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (12))){
var inst_16481 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16505_16544 = state_16485__$1;
(statearr_16505_16544[(2)] = inst_16481);

(statearr_16505_16544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (2))){
var inst_16411 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16411)){
var statearr_16506_16545 = state_16485__$1;
(statearr_16506_16545[(1)] = (5));

} else {
var statearr_16507_16546 = state_16485__$1;
(statearr_16507_16546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (23))){
var inst_16457 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16457)){
var statearr_16508_16547 = state_16485__$1;
(statearr_16508_16547[(1)] = (27));

} else {
var statearr_16509_16548 = state_16485__$1;
(statearr_16509_16548[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (19))){
var inst_16444 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_16445 = figwheel.client.heads_up.append_message.call(null,inst_16444);
var state_16485__$1 = state_16485;
var statearr_16510_16549 = state_16485__$1;
(statearr_16510_16549[(2)] = inst_16445);

(statearr_16510_16549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (11))){
var inst_16434 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16434)){
var statearr_16511_16550 = state_16485__$1;
(statearr_16511_16550[(1)] = (15));

} else {
var statearr_16512_16551 = state_16485__$1;
(statearr_16512_16551[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (9))){
var inst_16419 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16513_16552 = state_16485__$1;
(statearr_16513_16552[(2)] = inst_16419);

(statearr_16513_16552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (5))){
var inst_16413 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(8),inst_16413);
} else {
if((state_val_16486 === (14))){
var inst_16432 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16514_16553 = state_16485__$1;
(statearr_16514_16553[(2)] = inst_16432);

(statearr_16514_16553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (26))){
var inst_16455 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16515_16554 = state_16485__$1;
(statearr_16515_16554[(2)] = inst_16455);

(statearr_16515_16554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (16))){
var inst_16442 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_16485__$1 = state_16485;
if(cljs.core.truth_(inst_16442)){
var statearr_16516_16555 = state_16485__$1;
(statearr_16516_16555[(1)] = (19));

} else {
var statearr_16517_16556 = state_16485__$1;
(statearr_16517_16556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (30))){
var inst_16462 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16518_16557 = state_16485__$1;
(statearr_16518_16557[(2)] = inst_16462);

(statearr_16518_16557[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (10))){
var inst_16425 = figwheel.client.heads_up.clear.call(null);
var state_16485__$1 = state_16485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16485__$1,(13),inst_16425);
} else {
if((state_val_16486 === (18))){
var inst_16440 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16519_16558 = state_16485__$1;
(statearr_16519_16558[(2)] = inst_16440);

(statearr_16519_16558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16486 === (8))){
var inst_16415 = (state_16485[(2)]);
var state_16485__$1 = state_16485;
var statearr_16520_16559 = state_16485__$1;
(statearr_16520_16559[(2)] = inst_16415);

(statearr_16520_16559[(1)] = (7));


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
var statearr_16524 = [null,null,null,null,null,null,null,null,null];
(statearr_16524[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__);

(statearr_16524[(1)] = (1));

return statearr_16524;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____1 = (function (state_16485){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16525){if((e16525 instanceof Object)){
var ex__6858__auto__ = e16525;
var statearr_16526_16560 = state_16485;
(statearr_16526_16560[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16561 = state_16485;
state_16485 = G__16561;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__ = function(state_16485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____1.call(this,state_16485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,msg_hist,msg_names,msg))
})();
var state__6918__auto__ = (function (){var statearr_16527 = f__6917__auto__.call(null);
(statearr_16527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,msg_hist,msg_names,msg))
);

return c__6916__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6916__auto___16624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___16624,ch){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___16624,ch){
return (function (state_16607){
var state_val_16608 = (state_16607[(1)]);
if((state_val_16608 === (8))){
var inst_16599 = (state_16607[(2)]);
var state_16607__$1 = (function (){var statearr_16609 = state_16607;
(statearr_16609[(7)] = inst_16599);

return statearr_16609;
})();
var statearr_16610_16625 = state_16607__$1;
(statearr_16610_16625[(2)] = null);

(statearr_16610_16625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (7))){
var inst_16603 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
var statearr_16611_16626 = state_16607__$1;
(statearr_16611_16626[(2)] = inst_16603);

(statearr_16611_16626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (6))){
var state_16607__$1 = state_16607;
var statearr_16612_16627 = state_16607__$1;
(statearr_16612_16627[(2)] = null);

(statearr_16612_16627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (5))){
var inst_16595 = (state_16607[(8)]);
var inst_16597 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_16595);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16607__$1,(8),inst_16597);
} else {
if((state_val_16608 === (4))){
var inst_16595 = (state_16607[(8)]);
var inst_16595__$1 = (state_16607[(2)]);
var state_16607__$1 = (function (){var statearr_16613 = state_16607;
(statearr_16613[(8)] = inst_16595__$1);

return statearr_16613;
})();
if(cljs.core.truth_(inst_16595__$1)){
var statearr_16614_16628 = state_16607__$1;
(statearr_16614_16628[(1)] = (5));

} else {
var statearr_16615_16629 = state_16607__$1;
(statearr_16615_16629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (3))){
var inst_16605 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16607__$1,inst_16605);
} else {
if((state_val_16608 === (2))){
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16607__$1,(4),ch);
} else {
if((state_val_16608 === (1))){
var state_16607__$1 = state_16607;
var statearr_16616_16630 = state_16607__$1;
(statearr_16616_16630[(2)] = null);

(statearr_16616_16630[(1)] = (2));


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
});})(c__6916__auto___16624,ch))
;
return ((function (switch__6854__auto__,c__6916__auto___16624,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6855__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6855__auto____0 = (function (){
var statearr_16620 = [null,null,null,null,null,null,null,null,null];
(statearr_16620[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6855__auto__);

(statearr_16620[(1)] = (1));

return statearr_16620;
});
var figwheel$client$heads_up_plugin_$_state_machine__6855__auto____1 = (function (state_16607){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16621){if((e16621 instanceof Object)){
var ex__6858__auto__ = e16621;
var statearr_16622_16631 = state_16607;
(statearr_16622_16631[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16632 = state_16607;
state_16607 = G__16632;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6855__auto__ = function(state_16607){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6855__auto____1.call(this,state_16607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6855__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6855__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___16624,ch))
})();
var state__6918__auto__ = (function (){var statearr_16623 = f__6917__auto__.call(null);
(statearr_16623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___16624);

return statearr_16623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___16624,ch))
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
return (function (state_16653){
var state_val_16654 = (state_16653[(1)]);
if((state_val_16654 === (2))){
var inst_16650 = (state_16653[(2)]);
var inst_16651 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_16653__$1 = (function (){var statearr_16655 = state_16653;
(statearr_16655[(7)] = inst_16650);

return statearr_16655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16653__$1,inst_16651);
} else {
if((state_val_16654 === (1))){
var inst_16648 = cljs.core.async.timeout.call(null,(3000));
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16653__$1,(2),inst_16648);
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
var statearr_16659 = [null,null,null,null,null,null,null,null];
(statearr_16659[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__);

(statearr_16659[(1)] = (1));

return statearr_16659;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____1 = (function (state_16653){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16660){if((e16660 instanceof Object)){
var ex__6858__auto__ = e16660;
var statearr_16661_16663 = state_16653;
(statearr_16661_16663[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16664 = state_16653;
state_16653 = G__16664;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__ = function(state_16653){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____1.call(this,state_16653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6855__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16662 = f__6917__auto__.call(null);
(statearr_16662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16662;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16668 = {"detail":url};
return obj16668;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__16669){
var map__16675 = p__16669;
var map__16675__$1 = ((cljs.core.seq_QMARK_.call(null,map__16675))?cljs.core.apply.call(null,cljs.core.hash_map,map__16675):map__16675);
var ed = map__16675__$1;
var exception_data = cljs.core.get.call(null,map__16675__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__16675__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__16676_16680 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__16677_16681 = null;
var count__16678_16682 = (0);
var i__16679_16683 = (0);
while(true){
if((i__16679_16683 < count__16678_16682)){
var msg_16684 = cljs.core._nth.call(null,chunk__16677_16681,i__16679_16683);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_16684);

var G__16685 = seq__16676_16680;
var G__16686 = chunk__16677_16681;
var G__16687 = count__16678_16682;
var G__16688 = (i__16679_16683 + (1));
seq__16676_16680 = G__16685;
chunk__16677_16681 = G__16686;
count__16678_16682 = G__16687;
i__16679_16683 = G__16688;
continue;
} else {
var temp__4126__auto___16689 = cljs.core.seq.call(null,seq__16676_16680);
if(temp__4126__auto___16689){
var seq__16676_16690__$1 = temp__4126__auto___16689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16676_16690__$1)){
var c__5118__auto___16691 = cljs.core.chunk_first.call(null,seq__16676_16690__$1);
var G__16692 = cljs.core.chunk_rest.call(null,seq__16676_16690__$1);
var G__16693 = c__5118__auto___16691;
var G__16694 = cljs.core.count.call(null,c__5118__auto___16691);
var G__16695 = (0);
seq__16676_16680 = G__16692;
chunk__16677_16681 = G__16693;
count__16678_16682 = G__16694;
i__16679_16683 = G__16695;
continue;
} else {
var msg_16696 = cljs.core.first.call(null,seq__16676_16690__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_16696);

var G__16697 = cljs.core.next.call(null,seq__16676_16690__$1);
var G__16698 = null;
var G__16699 = (0);
var G__16700 = (0);
seq__16676_16680 = G__16697;
chunk__16677_16681 = G__16698;
count__16678_16682 = G__16699;
i__16679_16683 = G__16700;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__16701){
var map__16703 = p__16701;
var map__16703__$1 = ((cljs.core.seq_QMARK_.call(null,map__16703))?cljs.core.apply.call(null,cljs.core.hash_map,map__16703):map__16703);
var w = map__16703__$1;
var message = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__16710 = cljs.core.seq.call(null,plugins);
var chunk__16711 = null;
var count__16712 = (0);
var i__16713 = (0);
while(true){
if((i__16713 < count__16712)){
var vec__16714 = cljs.core._nth.call(null,chunk__16711,i__16713);
var k = cljs.core.nth.call(null,vec__16714,(0),null);
var plugin = cljs.core.nth.call(null,vec__16714,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16716 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16710,chunk__16711,count__16712,i__16713,pl_16716,vec__16714,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_16716.call(null,msg_hist);
});})(seq__16710,chunk__16711,count__16712,i__16713,pl_16716,vec__16714,k,plugin))
);
} else {
}

var G__16717 = seq__16710;
var G__16718 = chunk__16711;
var G__16719 = count__16712;
var G__16720 = (i__16713 + (1));
seq__16710 = G__16717;
chunk__16711 = G__16718;
count__16712 = G__16719;
i__16713 = G__16720;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16710);
if(temp__4126__auto__){
var seq__16710__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16710__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__16710__$1);
var G__16721 = cljs.core.chunk_rest.call(null,seq__16710__$1);
var G__16722 = c__5118__auto__;
var G__16723 = cljs.core.count.call(null,c__5118__auto__);
var G__16724 = (0);
seq__16710 = G__16721;
chunk__16711 = G__16722;
count__16712 = G__16723;
i__16713 = G__16724;
continue;
} else {
var vec__16715 = cljs.core.first.call(null,seq__16710__$1);
var k = cljs.core.nth.call(null,vec__16715,(0),null);
var plugin = cljs.core.nth.call(null,vec__16715,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16710,chunk__16711,count__16712,i__16713,pl_16725,vec__16715,k,plugin,seq__16710__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_16725.call(null,msg_hist);
});})(seq__16710,chunk__16711,count__16712,i__16713,pl_16725,vec__16715,k,plugin,seq__16710__$1,temp__4126__auto__))
);
} else {
}

var G__16726 = cljs.core.next.call(null,seq__16710__$1);
var G__16727 = null;
var G__16728 = (0);
var G__16729 = (0);
seq__16710 = G__16726;
chunk__16711 = G__16727;
count__16712 = G__16728;
i__16713 = G__16729;
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
var G__16731 = arguments.length;
switch (G__16731) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__16734){
var map__16735 = p__16734;
var map__16735__$1 = ((cljs.core.seq_QMARK_.call(null,map__16735))?cljs.core.apply.call(null,cljs.core.hash_map,map__16735):map__16735);
var opts = map__16735__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq16733){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16733));
});

//# sourceMappingURL=client.js.map?rel=1440296863200