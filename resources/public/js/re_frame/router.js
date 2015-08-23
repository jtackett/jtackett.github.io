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
return (function (state_12509){
var state_val_12510 = (state_12509[(1)]);
if((state_val_12510 === (7))){
var inst_12494 = (state_12509[(2)]);
var state_12509__$1 = (function (){var statearr_12511 = state_12509;
(statearr_12511[(7)] = inst_12494);

return statearr_12511;
})();
var statearr_12512_12532 = state_12509__$1;
(statearr_12512_12532[(2)] = null);

(statearr_12512_12532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (1))){
var state_12509__$1 = state_12509;
var statearr_12513_12533 = state_12509__$1;
(statearr_12513_12533[(2)] = null);

(statearr_12513_12533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (4))){
var inst_12481 = (state_12509[(8)]);
var inst_12481__$1 = (state_12509[(2)]);
var inst_12482 = cljs.core.meta.call(null,inst_12481__$1);
var inst_12483 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_12482);
var state_12509__$1 = (function (){var statearr_12514 = state_12509;
(statearr_12514[(8)] = inst_12481__$1);

return statearr_12514;
})();
if(cljs.core.truth_(inst_12483)){
var statearr_12515_12534 = state_12509__$1;
(statearr_12515_12534[(1)] = (5));

} else {
var statearr_12516_12535 = state_12509__$1;
(statearr_12516_12535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (6))){
var inst_12490 = cljs.core.async.timeout.call(null,(0));
var state_12509__$1 = state_12509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12509__$1,(9),inst_12490);
} else {
if((state_val_12510 === (3))){
var inst_12507 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12509__$1,inst_12507);
} else {
if((state_val_12510 === (12))){
var inst_12481 = (state_12509[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12509,(11),Object,null,(10));
var inst_12502 = re_frame.handlers.handle.call(null,inst_12481);
var state_12509__$1 = state_12509;
var statearr_12517_12536 = state_12509__$1;
(statearr_12517_12536[(2)] = inst_12502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12509__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (2))){
var state_12509__$1 = state_12509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12509__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_12510 === (11))){
var inst_12495 = (state_12509[(2)]);
var inst_12496 = re_frame.router.purge_chan.call(null);
var inst_12497 = re_frame$router$router_loop.call(null);
var inst_12498 = (function(){throw inst_12495})();
var state_12509__$1 = (function (){var statearr_12518 = state_12509;
(statearr_12518[(9)] = inst_12496);

(statearr_12518[(10)] = inst_12497);

return statearr_12518;
})();
var statearr_12519_12537 = state_12509__$1;
(statearr_12519_12537[(2)] = inst_12498);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12509__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (9))){
var inst_12492 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12520_12538 = state_12509__$1;
(statearr_12520_12538[(2)] = inst_12492);

(statearr_12520_12538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (5))){
var inst_12485 = reagent.core.flush.call(null);
var inst_12486 = cljs.core.async.timeout.call(null,(20));
var state_12509__$1 = (function (){var statearr_12521 = state_12509;
(statearr_12521[(11)] = inst_12485);

return statearr_12521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12509__$1,(8),inst_12486);
} else {
if((state_val_12510 === (10))){
var inst_12504 = (state_12509[(2)]);
var state_12509__$1 = (function (){var statearr_12522 = state_12509;
(statearr_12522[(12)] = inst_12504);

return statearr_12522;
})();
var statearr_12523_12539 = state_12509__$1;
(statearr_12523_12539[(2)] = null);

(statearr_12523_12539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12510 === (8))){
var inst_12488 = (state_12509[(2)]);
var state_12509__$1 = state_12509;
var statearr_12524_12540 = state_12509__$1;
(statearr_12524_12540[(2)] = inst_12488);

(statearr_12524_12540[(1)] = (7));


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
var statearr_12528 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12528[(0)] = re_frame$router$router_loop_$_state_machine__6855__auto__);

(statearr_12528[(1)] = (1));

return statearr_12528;
});
var re_frame$router$router_loop_$_state_machine__6855__auto____1 = (function (state_12509){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12529){if((e12529 instanceof Object)){
var ex__6858__auto__ = e12529;
var statearr_12530_12541 = state_12509;
(statearr_12530_12541[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12542 = state_12509;
state_12509 = G__12542;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__6855__auto__ = function(state_12509){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__6855__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__6855__auto____1.call(this,state_12509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__6855__auto____0;
re_frame$router$router_loop_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__6855__auto____1;
return re_frame$router$router_loop_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_12531 = f__6917__auto__.call(null);
(statearr_12531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_12531;
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

//# sourceMappingURL=router.js.map?rel=1440296858704