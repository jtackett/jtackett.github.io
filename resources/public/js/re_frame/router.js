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
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_12843){
var state_val_12844 = (state_12843[(1)]);
if((state_val_12844 === (7))){
var inst_12828 = (state_12843[(2)]);
var state_12843__$1 = (function (){var statearr_12845 = state_12843;
(statearr_12845[(7)] = inst_12828);

return statearr_12845;
})();
var statearr_12846_12866 = state_12843__$1;
(statearr_12846_12866[(2)] = null);

(statearr_12846_12866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (1))){
var state_12843__$1 = state_12843;
var statearr_12847_12867 = state_12843__$1;
(statearr_12847_12867[(2)] = null);

(statearr_12847_12867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (4))){
var inst_12815 = (state_12843[(8)]);
var inst_12815__$1 = (state_12843[(2)]);
var inst_12816 = cljs.core.meta.call(null,inst_12815__$1);
var inst_12817 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_12816);
var state_12843__$1 = (function (){var statearr_12848 = state_12843;
(statearr_12848[(8)] = inst_12815__$1);

return statearr_12848;
})();
if(cljs.core.truth_(inst_12817)){
var statearr_12849_12868 = state_12843__$1;
(statearr_12849_12868[(1)] = (5));

} else {
var statearr_12850_12869 = state_12843__$1;
(statearr_12850_12869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (6))){
var inst_12824 = cljs.core.async.timeout.call(null,(0));
var state_12843__$1 = state_12843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12843__$1,(9),inst_12824);
} else {
if((state_val_12844 === (3))){
var inst_12841 = (state_12843[(2)]);
var state_12843__$1 = state_12843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12843__$1,inst_12841);
} else {
if((state_val_12844 === (12))){
var inst_12815 = (state_12843[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12843,(11),Object,null,(10));
var inst_12836 = re_frame.handlers.handle.call(null,inst_12815);
var state_12843__$1 = state_12843;
var statearr_12851_12870 = state_12843__$1;
(statearr_12851_12870[(2)] = inst_12836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12843__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (2))){
var state_12843__$1 = state_12843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12843__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_12844 === (11))){
var inst_12829 = (state_12843[(2)]);
var inst_12830 = re_frame.router.purge_chan.call(null);
var inst_12831 = re_frame$router$router_loop.call(null);
var inst_12832 = (function(){throw inst_12829})();
var state_12843__$1 = (function (){var statearr_12852 = state_12843;
(statearr_12852[(9)] = inst_12831);

(statearr_12852[(10)] = inst_12830);

return statearr_12852;
})();
var statearr_12853_12871 = state_12843__$1;
(statearr_12853_12871[(2)] = inst_12832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12843__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (9))){
var inst_12826 = (state_12843[(2)]);
var state_12843__$1 = state_12843;
var statearr_12854_12872 = state_12843__$1;
(statearr_12854_12872[(2)] = inst_12826);

(statearr_12854_12872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (5))){
var inst_12819 = reagent.core.flush.call(null);
var inst_12820 = cljs.core.async.timeout.call(null,(20));
var state_12843__$1 = (function (){var statearr_12855 = state_12843;
(statearr_12855[(11)] = inst_12819);

return statearr_12855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12843__$1,(8),inst_12820);
} else {
if((state_val_12844 === (10))){
var inst_12838 = (state_12843[(2)]);
var state_12843__$1 = (function (){var statearr_12856 = state_12843;
(statearr_12856[(12)] = inst_12838);

return statearr_12856;
})();
var statearr_12857_12873 = state_12843__$1;
(statearr_12857_12873[(2)] = null);

(statearr_12857_12873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12844 === (8))){
var inst_12822 = (state_12843[(2)]);
var state_12843__$1 = state_12843;
var statearr_12858_12874 = state_12843__$1;
(statearr_12858_12874[(2)] = inst_12822);

(statearr_12858_12874[(1)] = (7));


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
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__7638__auto__ = null;
var re_frame$router$router_loop_$_state_machine__7638__auto____0 = (function (){
var statearr_12862 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12862[(0)] = re_frame$router$router_loop_$_state_machine__7638__auto__);

(statearr_12862[(1)] = (1));

return statearr_12862;
});
var re_frame$router$router_loop_$_state_machine__7638__auto____1 = (function (state_12843){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_12843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e12863){if((e12863 instanceof Object)){
var ex__7641__auto__ = e12863;
var statearr_12864_12875 = state_12843;
(statearr_12864_12875[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12876 = state_12843;
state_12843 = G__12876;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__7638__auto__ = function(state_12843){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__7638__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__7638__auto____1.call(this,state_12843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__7638__auto____0;
re_frame$router$router_loop_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__7638__auto____1;
return re_frame$router$router_loop_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_12865 = f__7700__auto__.call(null);
(statearr_12865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_12865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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

//# sourceMappingURL=router.js.map?rel=1440775507008