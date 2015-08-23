// Compiled by ClojureScript 0.0-3208 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_12518){
var state_val_12519 = (state_12518[(1)]);
if((state_val_12519 === (7))){
var inst_12503 = (state_12518[(2)]);
var state_12518__$1 = (function (){var statearr_12520 = state_12518;
(statearr_12520[(7)] = inst_12503);

return statearr_12520;
})();
var statearr_12521_12541 = state_12518__$1;
(statearr_12521_12541[(2)] = null);

(statearr_12521_12541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (1))){
var state_12518__$1 = state_12518;
var statearr_12522_12542 = state_12518__$1;
(statearr_12522_12542[(2)] = null);

(statearr_12522_12542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (4))){
var inst_12490 = (state_12518[(8)]);
var inst_12490__$1 = (state_12518[(2)]);
var inst_12491 = cljs.core.meta.call(null,inst_12490__$1);
var inst_12492 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_12491);
var state_12518__$1 = (function (){var statearr_12523 = state_12518;
(statearr_12523[(8)] = inst_12490__$1);

return statearr_12523;
})();
if(cljs.core.truth_(inst_12492)){
var statearr_12524_12543 = state_12518__$1;
(statearr_12524_12543[(1)] = (5));

} else {
var statearr_12525_12544 = state_12518__$1;
(statearr_12525_12544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (6))){
var inst_12499 = cljs.core.async.timeout.call(null,(0));
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12518__$1,(9),inst_12499);
} else {
if((state_val_12519 === (3))){
var inst_12516 = (state_12518[(2)]);
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12518__$1,inst_12516);
} else {
if((state_val_12519 === (12))){
var inst_12490 = (state_12518[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12518,(11),Object,null,(10));
var inst_12511 = re_frame.handlers.handle.call(null,inst_12490);
var state_12518__$1 = state_12518;
var statearr_12526_12545 = state_12518__$1;
(statearr_12526_12545[(2)] = inst_12511);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (2))){
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12518__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_12519 === (11))){
var inst_12504 = (state_12518[(2)]);
var inst_12505 = re_frame.router.purge_chan.call(null);
var inst_12506 = re_frame$router$router_loop.call(null);
var inst_12507 = (function(){throw inst_12504})();
var state_12518__$1 = (function (){var statearr_12527 = state_12518;
(statearr_12527[(9)] = inst_12506);

(statearr_12527[(10)] = inst_12505);

return statearr_12527;
})();
var statearr_12528_12546 = state_12518__$1;
(statearr_12528_12546[(2)] = inst_12507);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (9))){
var inst_12501 = (state_12518[(2)]);
var state_12518__$1 = state_12518;
var statearr_12529_12547 = state_12518__$1;
(statearr_12529_12547[(2)] = inst_12501);

(statearr_12529_12547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (5))){
var inst_12494 = reagent.core.flush.call(null);
var inst_12495 = cljs.core.async.timeout.call(null,(20));
var state_12518__$1 = (function (){var statearr_12530 = state_12518;
(statearr_12530[(11)] = inst_12494);

return statearr_12530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12518__$1,(8),inst_12495);
} else {
if((state_val_12519 === (10))){
var inst_12513 = (state_12518[(2)]);
var state_12518__$1 = (function (){var statearr_12531 = state_12518;
(statearr_12531[(12)] = inst_12513);

return statearr_12531;
})();
var statearr_12532_12548 = state_12518__$1;
(statearr_12532_12548[(2)] = null);

(statearr_12532_12548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12519 === (8))){
var inst_12497 = (state_12518[(2)]);
var state_12518__$1 = state_12518;
var statearr_12533_12549 = state_12518__$1;
(statearr_12533_12549[(2)] = inst_12497);

(statearr_12533_12549[(1)] = (7));


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
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__6855__auto__ = null;
var re_frame$router$router_loop_$_state_machine__6855__auto____0 = (function (){
var statearr_12537 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12537[(0)] = re_frame$router$router_loop_$_state_machine__6855__auto__);

(statearr_12537[(1)] = (1));

return statearr_12537;
});
var re_frame$router$router_loop_$_state_machine__6855__auto____1 = (function (state_12518){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12538){if((e12538 instanceof Object)){
var ex__6858__auto__ = e12538;
var statearr_12539_12550 = state_12518;
(statearr_12539_12550[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12551 = state_12518;
state_12518 = G__12551;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__6855__auto__ = function(state_12518){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__6855__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__6855__auto____1.call(this,state_12518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__6855__auto____0;
re_frame$router$router_loop_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__6855__auto____1;
return re_frame$router$router_loop_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_12540 = f__6917__auto__.call(null);
(statearr_12540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_12540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1440344458492