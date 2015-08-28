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
return (function (state_12847){
var state_val_12848 = (state_12847[(1)]);
if((state_val_12848 === (7))){
var inst_12832 = (state_12847[(2)]);
var state_12847__$1 = (function (){var statearr_12849 = state_12847;
(statearr_12849[(7)] = inst_12832);

return statearr_12849;
})();
var statearr_12850_12870 = state_12847__$1;
(statearr_12850_12870[(2)] = null);

(statearr_12850_12870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (1))){
var state_12847__$1 = state_12847;
var statearr_12851_12871 = state_12847__$1;
(statearr_12851_12871[(2)] = null);

(statearr_12851_12871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (4))){
var inst_12819 = (state_12847[(8)]);
var inst_12819__$1 = (state_12847[(2)]);
var inst_12820 = cljs.core.meta.call(null,inst_12819__$1);
var inst_12821 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_12820);
var state_12847__$1 = (function (){var statearr_12852 = state_12847;
(statearr_12852[(8)] = inst_12819__$1);

return statearr_12852;
})();
if(cljs.core.truth_(inst_12821)){
var statearr_12853_12872 = state_12847__$1;
(statearr_12853_12872[(1)] = (5));

} else {
var statearr_12854_12873 = state_12847__$1;
(statearr_12854_12873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (6))){
var inst_12828 = cljs.core.async.timeout.call(null,(0));
var state_12847__$1 = state_12847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12847__$1,(9),inst_12828);
} else {
if((state_val_12848 === (3))){
var inst_12845 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12847__$1,inst_12845);
} else {
if((state_val_12848 === (12))){
var inst_12819 = (state_12847[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12847,(11),Object,null,(10));
var inst_12840 = re_frame.handlers.handle.call(null,inst_12819);
var state_12847__$1 = state_12847;
var statearr_12855_12874 = state_12847__$1;
(statearr_12855_12874[(2)] = inst_12840);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12847__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (2))){
var state_12847__$1 = state_12847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12847__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_12848 === (11))){
var inst_12833 = (state_12847[(2)]);
var inst_12834 = re_frame.router.purge_chan.call(null);
var inst_12835 = re_frame$router$router_loop.call(null);
var inst_12836 = (function(){throw inst_12833})();
var state_12847__$1 = (function (){var statearr_12856 = state_12847;
(statearr_12856[(9)] = inst_12834);

(statearr_12856[(10)] = inst_12835);

return statearr_12856;
})();
var statearr_12857_12875 = state_12847__$1;
(statearr_12857_12875[(2)] = inst_12836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12847__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (9))){
var inst_12830 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
var statearr_12858_12876 = state_12847__$1;
(statearr_12858_12876[(2)] = inst_12830);

(statearr_12858_12876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (5))){
var inst_12823 = reagent.core.flush.call(null);
var inst_12824 = cljs.core.async.timeout.call(null,(20));
var state_12847__$1 = (function (){var statearr_12859 = state_12847;
(statearr_12859[(11)] = inst_12823);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12847__$1,(8),inst_12824);
} else {
if((state_val_12848 === (10))){
var inst_12842 = (state_12847[(2)]);
var state_12847__$1 = (function (){var statearr_12860 = state_12847;
(statearr_12860[(12)] = inst_12842);

return statearr_12860;
})();
var statearr_12861_12877 = state_12847__$1;
(statearr_12861_12877[(2)] = null);

(statearr_12861_12877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (8))){
var inst_12826 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
var statearr_12862_12878 = state_12847__$1;
(statearr_12862_12878[(2)] = inst_12826);

(statearr_12862_12878[(1)] = (7));


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
var statearr_12866 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12866[(0)] = re_frame$router$router_loop_$_state_machine__7638__auto__);

(statearr_12866[(1)] = (1));

return statearr_12866;
});
var re_frame$router$router_loop_$_state_machine__7638__auto____1 = (function (state_12847){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_12847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e12867){if((e12867 instanceof Object)){
var ex__7641__auto__ = e12867;
var statearr_12868_12879 = state_12847;
(statearr_12868_12879[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12880 = state_12847;
state_12847 = G__12880;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__7638__auto__ = function(state_12847){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__7638__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__7638__auto____1.call(this,state_12847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__7638__auto____0;
re_frame$router$router_loop_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__7638__auto____1;
return re_frame$router$router_loop_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_12869 = f__7700__auto__.call(null);
(statearr_12869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_12869;
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

//# sourceMappingURL=router.js.map?rel=1440777368507