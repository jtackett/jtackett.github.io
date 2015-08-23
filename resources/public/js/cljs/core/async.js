// Compiled by ClojureScript 0.0-3208 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t12548 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12548 = (function (f,fn_handler,meta12549){
this.f = f;
this.fn_handler = fn_handler;
this.meta12549 = meta12549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12548.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12550){
var self__ = this;
var _12550__$1 = this;
return self__.meta12549;
});

cljs.core.async.t12548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12550,meta12549__$1){
var self__ = this;
var _12550__$1 = this;
return (new cljs.core.async.t12548(self__.f,self__.fn_handler,meta12549__$1));
});

cljs.core.async.t12548.cljs$lang$type = true;

cljs.core.async.t12548.cljs$lang$ctorStr = "cljs.core.async/t12548";

cljs.core.async.t12548.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12548");
});

cljs.core.async.__GT_t12548 = (function cljs$core$async$fn_handler_$___GT_t12548(f__$1,fn_handler__$1,meta12549){
return (new cljs.core.async.t12548(f__$1,fn_handler__$1,meta12549));
});

}

return (new cljs.core.async.t12548(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__12552 = buff;
if(G__12552){
var bit__5007__auto__ = null;
if(cljs.core.truth_((function (){var or__4333__auto__ = bit__5007__auto__;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return G__12552.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12552.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12552);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12552);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__12554 = arguments.length;
switch (G__12554) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__12557 = arguments.length;
switch (G__12557) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12559 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12559);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12559,ret){
return (function (){
return fn1.call(null,val_12559);
});})(val_12559,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__12561 = arguments.length;
switch (G__12561) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5218__auto___12563 = n;
var x_12564 = (0);
while(true){
if((x_12564 < n__5218__auto___12563)){
(a[x_12564] = (0));

var G__12565 = (x_12564 + (1));
x_12564 = G__12565;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12566 = (i + (1));
i = G__12566;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12570 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12570 = (function (flag,alt_flag,meta12571){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12571 = meta12571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12570.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12572){
var self__ = this;
var _12572__$1 = this;
return self__.meta12571;
});})(flag))
;

cljs.core.async.t12570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12572,meta12571__$1){
var self__ = this;
var _12572__$1 = this;
return (new cljs.core.async.t12570(self__.flag,self__.alt_flag,meta12571__$1));
});})(flag))
;

cljs.core.async.t12570.cljs$lang$type = true;

cljs.core.async.t12570.cljs$lang$ctorStr = "cljs.core.async/t12570";

cljs.core.async.t12570.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12570");
});})(flag))
;

cljs.core.async.__GT_t12570 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12570(flag__$1,alt_flag__$1,meta12571){
return (new cljs.core.async.t12570(flag__$1,alt_flag__$1,meta12571));
});})(flag))
;

}

return (new cljs.core.async.t12570(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12576 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12576 = (function (cb,flag,alt_handler,meta12577){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12577 = meta12577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12576.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12578){
var self__ = this;
var _12578__$1 = this;
return self__.meta12577;
});

cljs.core.async.t12576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12578,meta12577__$1){
var self__ = this;
var _12578__$1 = this;
return (new cljs.core.async.t12576(self__.cb,self__.flag,self__.alt_handler,meta12577__$1));
});

cljs.core.async.t12576.cljs$lang$type = true;

cljs.core.async.t12576.cljs$lang$ctorStr = "cljs.core.async/t12576";

cljs.core.async.t12576.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12576");
});

cljs.core.async.__GT_t12576 = (function cljs$core$async$alt_handler_$___GT_t12576(cb__$1,flag__$1,alt_handler__$1,meta12577){
return (new cljs.core.async.t12576(cb__$1,flag__$1,alt_handler__$1,meta12577));
});

}

return (new cljs.core.async.t12576(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12579_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12579_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12580_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4333__auto__ = wport;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12581 = (i + (1));
i = G__12581;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4333__auto__ = ret;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4321__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4321__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12584){
var map__12585 = p__12584;
var map__12585__$1 = ((cljs.core.seq_QMARK_.call(null,map__12585))?cljs.core.apply.call(null,cljs.core.hash_map,map__12585):map__12585);
var opts = map__12585__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12582){
var G__12583 = cljs.core.first.call(null,seq12582);
var seq12582__$1 = cljs.core.next.call(null,seq12582);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12583,seq12582__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__12587 = arguments.length;
switch (G__12587) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6916__auto___12636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___12636){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___12636){
return (function (state_12611){
var state_val_12612 = (state_12611[(1)]);
if((state_val_12612 === (7))){
var inst_12607 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
var statearr_12613_12637 = state_12611__$1;
(statearr_12613_12637[(2)] = inst_12607);

(statearr_12613_12637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (1))){
var state_12611__$1 = state_12611;
var statearr_12614_12638 = state_12611__$1;
(statearr_12614_12638[(2)] = null);

(statearr_12614_12638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (4))){
var inst_12590 = (state_12611[(7)]);
var inst_12590__$1 = (state_12611[(2)]);
var inst_12591 = (inst_12590__$1 == null);
var state_12611__$1 = (function (){var statearr_12615 = state_12611;
(statearr_12615[(7)] = inst_12590__$1);

return statearr_12615;
})();
if(cljs.core.truth_(inst_12591)){
var statearr_12616_12639 = state_12611__$1;
(statearr_12616_12639[(1)] = (5));

} else {
var statearr_12617_12640 = state_12611__$1;
(statearr_12617_12640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (13))){
var state_12611__$1 = state_12611;
var statearr_12618_12641 = state_12611__$1;
(statearr_12618_12641[(2)] = null);

(statearr_12618_12641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (6))){
var inst_12590 = (state_12611[(7)]);
var state_12611__$1 = state_12611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12611__$1,(11),to,inst_12590);
} else {
if((state_val_12612 === (3))){
var inst_12609 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12611__$1,inst_12609);
} else {
if((state_val_12612 === (12))){
var state_12611__$1 = state_12611;
var statearr_12619_12642 = state_12611__$1;
(statearr_12619_12642[(2)] = null);

(statearr_12619_12642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (2))){
var state_12611__$1 = state_12611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12611__$1,(4),from);
} else {
if((state_val_12612 === (11))){
var inst_12600 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
if(cljs.core.truth_(inst_12600)){
var statearr_12620_12643 = state_12611__$1;
(statearr_12620_12643[(1)] = (12));

} else {
var statearr_12621_12644 = state_12611__$1;
(statearr_12621_12644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (9))){
var state_12611__$1 = state_12611;
var statearr_12622_12645 = state_12611__$1;
(statearr_12622_12645[(2)] = null);

(statearr_12622_12645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (5))){
var state_12611__$1 = state_12611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12623_12646 = state_12611__$1;
(statearr_12623_12646[(1)] = (8));

} else {
var statearr_12624_12647 = state_12611__$1;
(statearr_12624_12647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (14))){
var inst_12605 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
var statearr_12625_12648 = state_12611__$1;
(statearr_12625_12648[(2)] = inst_12605);

(statearr_12625_12648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (10))){
var inst_12597 = (state_12611[(2)]);
var state_12611__$1 = state_12611;
var statearr_12626_12649 = state_12611__$1;
(statearr_12626_12649[(2)] = inst_12597);

(statearr_12626_12649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12612 === (8))){
var inst_12594 = cljs.core.async.close_BANG_.call(null,to);
var state_12611__$1 = state_12611;
var statearr_12627_12650 = state_12611__$1;
(statearr_12627_12650[(2)] = inst_12594);

(statearr_12627_12650[(1)] = (10));


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
});})(c__6916__auto___12636))
;
return ((function (switch__6854__auto__,c__6916__auto___12636){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_12631 = [null,null,null,null,null,null,null,null];
(statearr_12631[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_12631[(1)] = (1));

return statearr_12631;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_12611){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12632){if((e12632 instanceof Object)){
var ex__6858__auto__ = e12632;
var statearr_12633_12651 = state_12611;
(statearr_12633_12651[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12652 = state_12611;
state_12611 = G__12652;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_12611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_12611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___12636))
})();
var state__6918__auto__ = (function (){var statearr_12634 = f__6917__auto__.call(null);
(statearr_12634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___12636);

return statearr_12634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___12636))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12836){
var vec__12837 = p__12836;
var v = cljs.core.nth.call(null,vec__12837,(0),null);
var p = cljs.core.nth.call(null,vec__12837,(1),null);
var job = vec__12837;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6916__auto___13019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13019,res,vec__12837,v,p,job,jobs,results){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13019,res,vec__12837,v,p,job,jobs,results){
return (function (state_12842){
var state_val_12843 = (state_12842[(1)]);
if((state_val_12843 === (2))){
var inst_12839 = (state_12842[(2)]);
var inst_12840 = cljs.core.async.close_BANG_.call(null,res);
var state_12842__$1 = (function (){var statearr_12844 = state_12842;
(statearr_12844[(7)] = inst_12839);

return statearr_12844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12842__$1,inst_12840);
} else {
if((state_val_12843 === (1))){
var state_12842__$1 = state_12842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12842__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6916__auto___13019,res,vec__12837,v,p,job,jobs,results))
;
return ((function (switch__6854__auto__,c__6916__auto___13019,res,vec__12837,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12848 = [null,null,null,null,null,null,null,null];
(statearr_12848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12848[(1)] = (1));

return statearr_12848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12842){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12849){if((e12849 instanceof Object)){
var ex__6858__auto__ = e12849;
var statearr_12850_13020 = state_12842;
(statearr_12850_13020[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13021 = state_12842;
state_12842 = G__13021;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13019,res,vec__12837,v,p,job,jobs,results))
})();
var state__6918__auto__ = (function (){var statearr_12851 = f__6917__auto__.call(null);
(statearr_12851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13019);

return statearr_12851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13019,res,vec__12837,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12852){
var vec__12853 = p__12852;
var v = cljs.core.nth.call(null,vec__12853,(0),null);
var p = cljs.core.nth.call(null,vec__12853,(1),null);
var job = vec__12853;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5218__auto___13022 = n;
var __13023 = (0);
while(true){
if((__13023 < n__5218__auto___13022)){
var G__12854_13024 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12854_13024) {
case "async":
var c__6916__auto___13026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13023,c__6916__auto___13026,G__12854_13024,n__5218__auto___13022,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (__13023,c__6916__auto___13026,G__12854_13024,n__5218__auto___13022,jobs,results,process,async){
return (function (state_12867){
var state_val_12868 = (state_12867[(1)]);
if((state_val_12868 === (7))){
var inst_12863 = (state_12867[(2)]);
var state_12867__$1 = state_12867;
var statearr_12869_13027 = state_12867__$1;
(statearr_12869_13027[(2)] = inst_12863);

(statearr_12869_13027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12868 === (6))){
var state_12867__$1 = state_12867;
var statearr_12870_13028 = state_12867__$1;
(statearr_12870_13028[(2)] = null);

(statearr_12870_13028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12868 === (5))){
var state_12867__$1 = state_12867;
var statearr_12871_13029 = state_12867__$1;
(statearr_12871_13029[(2)] = null);

(statearr_12871_13029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12868 === (4))){
var inst_12857 = (state_12867[(2)]);
var inst_12858 = async.call(null,inst_12857);
var state_12867__$1 = state_12867;
if(cljs.core.truth_(inst_12858)){
var statearr_12872_13030 = state_12867__$1;
(statearr_12872_13030[(1)] = (5));

} else {
var statearr_12873_13031 = state_12867__$1;
(statearr_12873_13031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12868 === (3))){
var inst_12865 = (state_12867[(2)]);
var state_12867__$1 = state_12867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12867__$1,inst_12865);
} else {
if((state_val_12868 === (2))){
var state_12867__$1 = state_12867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12867__$1,(4),jobs);
} else {
if((state_val_12868 === (1))){
var state_12867__$1 = state_12867;
var statearr_12874_13032 = state_12867__$1;
(statearr_12874_13032[(2)] = null);

(statearr_12874_13032[(1)] = (2));


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
});})(__13023,c__6916__auto___13026,G__12854_13024,n__5218__auto___13022,jobs,results,process,async))
;
return ((function (__13023,switch__6854__auto__,c__6916__auto___13026,G__12854_13024,n__5218__auto___13022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12878 = [null,null,null,null,null,null,null];
(statearr_12878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12878[(1)] = (1));

return statearr_12878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12867){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12879){if((e12879 instanceof Object)){
var ex__6858__auto__ = e12879;
var statearr_12880_13033 = state_12867;
(statearr_12880_13033[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13034 = state_12867;
state_12867 = G__13034;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(__13023,switch__6854__auto__,c__6916__auto___13026,G__12854_13024,n__5218__auto___13022,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_12881 = f__6917__auto__.call(null);
(statearr_12881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13026);

return statearr_12881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(__13023,c__6916__auto___13026,G__12854_13024,n__5218__auto___13022,jobs,results,process,async))
);


break;
case "compute":
var c__6916__auto___13035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13023,c__6916__auto___13035,G__12854_13024,n__5218__auto___13022,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (__13023,c__6916__auto___13035,G__12854_13024,n__5218__auto___13022,jobs,results,process,async){
return (function (state_12894){
var state_val_12895 = (state_12894[(1)]);
if((state_val_12895 === (7))){
var inst_12890 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
var statearr_12896_13036 = state_12894__$1;
(statearr_12896_13036[(2)] = inst_12890);

(statearr_12896_13036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (6))){
var state_12894__$1 = state_12894;
var statearr_12897_13037 = state_12894__$1;
(statearr_12897_13037[(2)] = null);

(statearr_12897_13037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (5))){
var state_12894__$1 = state_12894;
var statearr_12898_13038 = state_12894__$1;
(statearr_12898_13038[(2)] = null);

(statearr_12898_13038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (4))){
var inst_12884 = (state_12894[(2)]);
var inst_12885 = process.call(null,inst_12884);
var state_12894__$1 = state_12894;
if(cljs.core.truth_(inst_12885)){
var statearr_12899_13039 = state_12894__$1;
(statearr_12899_13039[(1)] = (5));

} else {
var statearr_12900_13040 = state_12894__$1;
(statearr_12900_13040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12895 === (3))){
var inst_12892 = (state_12894[(2)]);
var state_12894__$1 = state_12894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12894__$1,inst_12892);
} else {
if((state_val_12895 === (2))){
var state_12894__$1 = state_12894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12894__$1,(4),jobs);
} else {
if((state_val_12895 === (1))){
var state_12894__$1 = state_12894;
var statearr_12901_13041 = state_12894__$1;
(statearr_12901_13041[(2)] = null);

(statearr_12901_13041[(1)] = (2));


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
});})(__13023,c__6916__auto___13035,G__12854_13024,n__5218__auto___13022,jobs,results,process,async))
;
return ((function (__13023,switch__6854__auto__,c__6916__auto___13035,G__12854_13024,n__5218__auto___13022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12905 = [null,null,null,null,null,null,null];
(statearr_12905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12905[(1)] = (1));

return statearr_12905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12894){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12906){if((e12906 instanceof Object)){
var ex__6858__auto__ = e12906;
var statearr_12907_13042 = state_12894;
(statearr_12907_13042[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13043 = state_12894;
state_12894 = G__13043;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(__13023,switch__6854__auto__,c__6916__auto___13035,G__12854_13024,n__5218__auto___13022,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_12908 = f__6917__auto__.call(null);
(statearr_12908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13035);

return statearr_12908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(__13023,c__6916__auto___13035,G__12854_13024,n__5218__auto___13022,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13044 = (__13023 + (1));
__13023 = G__13044;
continue;
} else {
}
break;
}

var c__6916__auto___13045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13045,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13045,jobs,results,process,async){
return (function (state_12930){
var state_val_12931 = (state_12930[(1)]);
if((state_val_12931 === (9))){
var inst_12923 = (state_12930[(2)]);
var state_12930__$1 = (function (){var statearr_12932 = state_12930;
(statearr_12932[(7)] = inst_12923);

return statearr_12932;
})();
var statearr_12933_13046 = state_12930__$1;
(statearr_12933_13046[(2)] = null);

(statearr_12933_13046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (8))){
var inst_12916 = (state_12930[(8)]);
var inst_12921 = (state_12930[(2)]);
var state_12930__$1 = (function (){var statearr_12934 = state_12930;
(statearr_12934[(9)] = inst_12921);

return statearr_12934;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12930__$1,(9),results,inst_12916);
} else {
if((state_val_12931 === (7))){
var inst_12926 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
var statearr_12935_13047 = state_12930__$1;
(statearr_12935_13047[(2)] = inst_12926);

(statearr_12935_13047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (6))){
var inst_12911 = (state_12930[(10)]);
var inst_12916 = (state_12930[(8)]);
var inst_12916__$1 = cljs.core.async.chan.call(null,(1));
var inst_12917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12918 = [inst_12911,inst_12916__$1];
var inst_12919 = (new cljs.core.PersistentVector(null,2,(5),inst_12917,inst_12918,null));
var state_12930__$1 = (function (){var statearr_12936 = state_12930;
(statearr_12936[(8)] = inst_12916__$1);

return statearr_12936;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12930__$1,(8),jobs,inst_12919);
} else {
if((state_val_12931 === (5))){
var inst_12914 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12930__$1 = state_12930;
var statearr_12937_13048 = state_12930__$1;
(statearr_12937_13048[(2)] = inst_12914);

(statearr_12937_13048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (4))){
var inst_12911 = (state_12930[(10)]);
var inst_12911__$1 = (state_12930[(2)]);
var inst_12912 = (inst_12911__$1 == null);
var state_12930__$1 = (function (){var statearr_12938 = state_12930;
(statearr_12938[(10)] = inst_12911__$1);

return statearr_12938;
})();
if(cljs.core.truth_(inst_12912)){
var statearr_12939_13049 = state_12930__$1;
(statearr_12939_13049[(1)] = (5));

} else {
var statearr_12940_13050 = state_12930__$1;
(statearr_12940_13050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12931 === (3))){
var inst_12928 = (state_12930[(2)]);
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12930__$1,inst_12928);
} else {
if((state_val_12931 === (2))){
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12930__$1,(4),from);
} else {
if((state_val_12931 === (1))){
var state_12930__$1 = state_12930;
var statearr_12941_13051 = state_12930__$1;
(statearr_12941_13051[(2)] = null);

(statearr_12941_13051[(1)] = (2));


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
});})(c__6916__auto___13045,jobs,results,process,async))
;
return ((function (switch__6854__auto__,c__6916__auto___13045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12945[(1)] = (1));

return statearr_12945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12930){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12946){if((e12946 instanceof Object)){
var ex__6858__auto__ = e12946;
var statearr_12947_13052 = state_12930;
(statearr_12947_13052[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13053 = state_12930;
state_12930 = G__13053;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13045,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_12948 = f__6917__auto__.call(null);
(statearr_12948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13045);

return statearr_12948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13045,jobs,results,process,async))
);


var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,jobs,results,process,async){
return (function (state_12986){
var state_val_12987 = (state_12986[(1)]);
if((state_val_12987 === (7))){
var inst_12982 = (state_12986[(2)]);
var state_12986__$1 = state_12986;
var statearr_12988_13054 = state_12986__$1;
(statearr_12988_13054[(2)] = inst_12982);

(statearr_12988_13054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (20))){
var state_12986__$1 = state_12986;
var statearr_12989_13055 = state_12986__$1;
(statearr_12989_13055[(2)] = null);

(statearr_12989_13055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (1))){
var state_12986__$1 = state_12986;
var statearr_12990_13056 = state_12986__$1;
(statearr_12990_13056[(2)] = null);

(statearr_12990_13056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (4))){
var inst_12951 = (state_12986[(7)]);
var inst_12951__$1 = (state_12986[(2)]);
var inst_12952 = (inst_12951__$1 == null);
var state_12986__$1 = (function (){var statearr_12991 = state_12986;
(statearr_12991[(7)] = inst_12951__$1);

return statearr_12991;
})();
if(cljs.core.truth_(inst_12952)){
var statearr_12992_13057 = state_12986__$1;
(statearr_12992_13057[(1)] = (5));

} else {
var statearr_12993_13058 = state_12986__$1;
(statearr_12993_13058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (15))){
var inst_12964 = (state_12986[(8)]);
var state_12986__$1 = state_12986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12986__$1,(18),to,inst_12964);
} else {
if((state_val_12987 === (21))){
var inst_12977 = (state_12986[(2)]);
var state_12986__$1 = state_12986;
var statearr_12994_13059 = state_12986__$1;
(statearr_12994_13059[(2)] = inst_12977);

(statearr_12994_13059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (13))){
var inst_12979 = (state_12986[(2)]);
var state_12986__$1 = (function (){var statearr_12995 = state_12986;
(statearr_12995[(9)] = inst_12979);

return statearr_12995;
})();
var statearr_12996_13060 = state_12986__$1;
(statearr_12996_13060[(2)] = null);

(statearr_12996_13060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (6))){
var inst_12951 = (state_12986[(7)]);
var state_12986__$1 = state_12986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12986__$1,(11),inst_12951);
} else {
if((state_val_12987 === (17))){
var inst_12972 = (state_12986[(2)]);
var state_12986__$1 = state_12986;
if(cljs.core.truth_(inst_12972)){
var statearr_12997_13061 = state_12986__$1;
(statearr_12997_13061[(1)] = (19));

} else {
var statearr_12998_13062 = state_12986__$1;
(statearr_12998_13062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (3))){
var inst_12984 = (state_12986[(2)]);
var state_12986__$1 = state_12986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12986__$1,inst_12984);
} else {
if((state_val_12987 === (12))){
var inst_12961 = (state_12986[(10)]);
var state_12986__$1 = state_12986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12986__$1,(14),inst_12961);
} else {
if((state_val_12987 === (2))){
var state_12986__$1 = state_12986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12986__$1,(4),results);
} else {
if((state_val_12987 === (19))){
var state_12986__$1 = state_12986;
var statearr_12999_13063 = state_12986__$1;
(statearr_12999_13063[(2)] = null);

(statearr_12999_13063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (11))){
var inst_12961 = (state_12986[(2)]);
var state_12986__$1 = (function (){var statearr_13000 = state_12986;
(statearr_13000[(10)] = inst_12961);

return statearr_13000;
})();
var statearr_13001_13064 = state_12986__$1;
(statearr_13001_13064[(2)] = null);

(statearr_13001_13064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (9))){
var state_12986__$1 = state_12986;
var statearr_13002_13065 = state_12986__$1;
(statearr_13002_13065[(2)] = null);

(statearr_13002_13065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (5))){
var state_12986__$1 = state_12986;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13003_13066 = state_12986__$1;
(statearr_13003_13066[(1)] = (8));

} else {
var statearr_13004_13067 = state_12986__$1;
(statearr_13004_13067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (14))){
var inst_12966 = (state_12986[(11)]);
var inst_12964 = (state_12986[(8)]);
var inst_12964__$1 = (state_12986[(2)]);
var inst_12965 = (inst_12964__$1 == null);
var inst_12966__$1 = cljs.core.not.call(null,inst_12965);
var state_12986__$1 = (function (){var statearr_13005 = state_12986;
(statearr_13005[(11)] = inst_12966__$1);

(statearr_13005[(8)] = inst_12964__$1);

return statearr_13005;
})();
if(inst_12966__$1){
var statearr_13006_13068 = state_12986__$1;
(statearr_13006_13068[(1)] = (15));

} else {
var statearr_13007_13069 = state_12986__$1;
(statearr_13007_13069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (16))){
var inst_12966 = (state_12986[(11)]);
var state_12986__$1 = state_12986;
var statearr_13008_13070 = state_12986__$1;
(statearr_13008_13070[(2)] = inst_12966);

(statearr_13008_13070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (10))){
var inst_12958 = (state_12986[(2)]);
var state_12986__$1 = state_12986;
var statearr_13009_13071 = state_12986__$1;
(statearr_13009_13071[(2)] = inst_12958);

(statearr_13009_13071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (18))){
var inst_12969 = (state_12986[(2)]);
var state_12986__$1 = state_12986;
var statearr_13010_13072 = state_12986__$1;
(statearr_13010_13072[(2)] = inst_12969);

(statearr_13010_13072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12987 === (8))){
var inst_12955 = cljs.core.async.close_BANG_.call(null,to);
var state_12986__$1 = state_12986;
var statearr_13011_13073 = state_12986__$1;
(statearr_13011_13073[(2)] = inst_12955);

(statearr_13011_13073[(1)] = (10));


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
});})(c__6916__auto__,jobs,results,process,async))
;
return ((function (switch__6854__auto__,c__6916__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_13015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_13015[(1)] = (1));

return statearr_13015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12986){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13016){if((e13016 instanceof Object)){
var ex__6858__auto__ = e13016;
var statearr_13017_13074 = state_12986;
(statearr_13017_13074[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13075 = state_12986;
state_12986 = G__13075;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_13018 = f__6917__auto__.call(null);
(statearr_13018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_13018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,jobs,results,process,async))
);

return c__6916__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__13077 = arguments.length;
switch (G__13077) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__13080 = arguments.length;
switch (G__13080) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__13083 = arguments.length;
switch (G__13083) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6916__auto___13135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13135,tc,fc){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13135,tc,fc){
return (function (state_13109){
var state_val_13110 = (state_13109[(1)]);
if((state_val_13110 === (7))){
var inst_13105 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13111_13136 = state_13109__$1;
(statearr_13111_13136[(2)] = inst_13105);

(statearr_13111_13136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (1))){
var state_13109__$1 = state_13109;
var statearr_13112_13137 = state_13109__$1;
(statearr_13112_13137[(2)] = null);

(statearr_13112_13137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (4))){
var inst_13086 = (state_13109[(7)]);
var inst_13086__$1 = (state_13109[(2)]);
var inst_13087 = (inst_13086__$1 == null);
var state_13109__$1 = (function (){var statearr_13113 = state_13109;
(statearr_13113[(7)] = inst_13086__$1);

return statearr_13113;
})();
if(cljs.core.truth_(inst_13087)){
var statearr_13114_13138 = state_13109__$1;
(statearr_13114_13138[(1)] = (5));

} else {
var statearr_13115_13139 = state_13109__$1;
(statearr_13115_13139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (13))){
var state_13109__$1 = state_13109;
var statearr_13116_13140 = state_13109__$1;
(statearr_13116_13140[(2)] = null);

(statearr_13116_13140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (6))){
var inst_13086 = (state_13109[(7)]);
var inst_13092 = p.call(null,inst_13086);
var state_13109__$1 = state_13109;
if(cljs.core.truth_(inst_13092)){
var statearr_13117_13141 = state_13109__$1;
(statearr_13117_13141[(1)] = (9));

} else {
var statearr_13118_13142 = state_13109__$1;
(statearr_13118_13142[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (3))){
var inst_13107 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13109__$1,inst_13107);
} else {
if((state_val_13110 === (12))){
var state_13109__$1 = state_13109;
var statearr_13119_13143 = state_13109__$1;
(statearr_13119_13143[(2)] = null);

(statearr_13119_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (2))){
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13109__$1,(4),ch);
} else {
if((state_val_13110 === (11))){
var inst_13086 = (state_13109[(7)]);
var inst_13096 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13109__$1,(8),inst_13096,inst_13086);
} else {
if((state_val_13110 === (9))){
var state_13109__$1 = state_13109;
var statearr_13120_13144 = state_13109__$1;
(statearr_13120_13144[(2)] = tc);

(statearr_13120_13144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (5))){
var inst_13089 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13090 = cljs.core.async.close_BANG_.call(null,fc);
var state_13109__$1 = (function (){var statearr_13121 = state_13109;
(statearr_13121[(8)] = inst_13089);

return statearr_13121;
})();
var statearr_13122_13145 = state_13109__$1;
(statearr_13122_13145[(2)] = inst_13090);

(statearr_13122_13145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (14))){
var inst_13103 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
var statearr_13123_13146 = state_13109__$1;
(statearr_13123_13146[(2)] = inst_13103);

(statearr_13123_13146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (10))){
var state_13109__$1 = state_13109;
var statearr_13124_13147 = state_13109__$1;
(statearr_13124_13147[(2)] = fc);

(statearr_13124_13147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13110 === (8))){
var inst_13098 = (state_13109[(2)]);
var state_13109__$1 = state_13109;
if(cljs.core.truth_(inst_13098)){
var statearr_13125_13148 = state_13109__$1;
(statearr_13125_13148[(1)] = (12));

} else {
var statearr_13126_13149 = state_13109__$1;
(statearr_13126_13149[(1)] = (13));

}

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
});})(c__6916__auto___13135,tc,fc))
;
return ((function (switch__6854__auto__,c__6916__auto___13135,tc,fc){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_13130 = [null,null,null,null,null,null,null,null,null];
(statearr_13130[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_13130[(1)] = (1));

return statearr_13130;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_13109){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13131){if((e13131 instanceof Object)){
var ex__6858__auto__ = e13131;
var statearr_13132_13150 = state_13109;
(statearr_13132_13150[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13151 = state_13109;
state_13109 = G__13151;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_13109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_13109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13135,tc,fc))
})();
var state__6918__auto__ = (function (){var statearr_13133 = f__6917__auto__.call(null);
(statearr_13133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13135);

return statearr_13133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13135,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_13198){
var state_val_13199 = (state_13198[(1)]);
if((state_val_13199 === (7))){
var inst_13194 = (state_13198[(2)]);
var state_13198__$1 = state_13198;
var statearr_13200_13216 = state_13198__$1;
(statearr_13200_13216[(2)] = inst_13194);

(statearr_13200_13216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (6))){
var inst_13184 = (state_13198[(7)]);
var inst_13187 = (state_13198[(8)]);
var inst_13191 = f.call(null,inst_13184,inst_13187);
var inst_13184__$1 = inst_13191;
var state_13198__$1 = (function (){var statearr_13201 = state_13198;
(statearr_13201[(7)] = inst_13184__$1);

return statearr_13201;
})();
var statearr_13202_13217 = state_13198__$1;
(statearr_13202_13217[(2)] = null);

(statearr_13202_13217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (5))){
var inst_13184 = (state_13198[(7)]);
var state_13198__$1 = state_13198;
var statearr_13203_13218 = state_13198__$1;
(statearr_13203_13218[(2)] = inst_13184);

(statearr_13203_13218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (4))){
var inst_13187 = (state_13198[(8)]);
var inst_13187__$1 = (state_13198[(2)]);
var inst_13188 = (inst_13187__$1 == null);
var state_13198__$1 = (function (){var statearr_13204 = state_13198;
(statearr_13204[(8)] = inst_13187__$1);

return statearr_13204;
})();
if(cljs.core.truth_(inst_13188)){
var statearr_13205_13219 = state_13198__$1;
(statearr_13205_13219[(1)] = (5));

} else {
var statearr_13206_13220 = state_13198__$1;
(statearr_13206_13220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (3))){
var inst_13196 = (state_13198[(2)]);
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13198__$1,inst_13196);
} else {
if((state_val_13199 === (2))){
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13198__$1,(4),ch);
} else {
if((state_val_13199 === (1))){
var inst_13184 = init;
var state_13198__$1 = (function (){var statearr_13207 = state_13198;
(statearr_13207[(7)] = inst_13184);

return statearr_13207;
})();
var statearr_13208_13221 = state_13198__$1;
(statearr_13208_13221[(2)] = null);

(statearr_13208_13221[(1)] = (2));


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
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6855__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6855__auto____0 = (function (){
var statearr_13212 = [null,null,null,null,null,null,null,null,null];
(statearr_13212[(0)] = cljs$core$async$reduce_$_state_machine__6855__auto__);

(statearr_13212[(1)] = (1));

return statearr_13212;
});
var cljs$core$async$reduce_$_state_machine__6855__auto____1 = (function (state_13198){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13213){if((e13213 instanceof Object)){
var ex__6858__auto__ = e13213;
var statearr_13214_13222 = state_13198;
(statearr_13214_13222[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13223 = state_13198;
state_13198 = G__13223;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6855__auto__ = function(state_13198){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6855__auto____1.call(this,state_13198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6855__auto____0;
cljs$core$async$reduce_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6855__auto____1;
return cljs$core$async$reduce_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_13215 = f__6917__auto__.call(null);
(statearr_13215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_13215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__13225 = arguments.length;
switch (G__13225) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_13250){
var state_val_13251 = (state_13250[(1)]);
if((state_val_13251 === (7))){
var inst_13232 = (state_13250[(2)]);
var state_13250__$1 = state_13250;
var statearr_13252_13276 = state_13250__$1;
(statearr_13252_13276[(2)] = inst_13232);

(statearr_13252_13276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (1))){
var inst_13226 = cljs.core.seq.call(null,coll);
var inst_13227 = inst_13226;
var state_13250__$1 = (function (){var statearr_13253 = state_13250;
(statearr_13253[(7)] = inst_13227);

return statearr_13253;
})();
var statearr_13254_13277 = state_13250__$1;
(statearr_13254_13277[(2)] = null);

(statearr_13254_13277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (4))){
var inst_13227 = (state_13250[(7)]);
var inst_13230 = cljs.core.first.call(null,inst_13227);
var state_13250__$1 = state_13250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13250__$1,(7),ch,inst_13230);
} else {
if((state_val_13251 === (13))){
var inst_13244 = (state_13250[(2)]);
var state_13250__$1 = state_13250;
var statearr_13255_13278 = state_13250__$1;
(statearr_13255_13278[(2)] = inst_13244);

(statearr_13255_13278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (6))){
var inst_13235 = (state_13250[(2)]);
var state_13250__$1 = state_13250;
if(cljs.core.truth_(inst_13235)){
var statearr_13256_13279 = state_13250__$1;
(statearr_13256_13279[(1)] = (8));

} else {
var statearr_13257_13280 = state_13250__$1;
(statearr_13257_13280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (3))){
var inst_13248 = (state_13250[(2)]);
var state_13250__$1 = state_13250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13250__$1,inst_13248);
} else {
if((state_val_13251 === (12))){
var state_13250__$1 = state_13250;
var statearr_13258_13281 = state_13250__$1;
(statearr_13258_13281[(2)] = null);

(statearr_13258_13281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (2))){
var inst_13227 = (state_13250[(7)]);
var state_13250__$1 = state_13250;
if(cljs.core.truth_(inst_13227)){
var statearr_13259_13282 = state_13250__$1;
(statearr_13259_13282[(1)] = (4));

} else {
var statearr_13260_13283 = state_13250__$1;
(statearr_13260_13283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (11))){
var inst_13241 = cljs.core.async.close_BANG_.call(null,ch);
var state_13250__$1 = state_13250;
var statearr_13261_13284 = state_13250__$1;
(statearr_13261_13284[(2)] = inst_13241);

(statearr_13261_13284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (9))){
var state_13250__$1 = state_13250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13262_13285 = state_13250__$1;
(statearr_13262_13285[(1)] = (11));

} else {
var statearr_13263_13286 = state_13250__$1;
(statearr_13263_13286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (5))){
var inst_13227 = (state_13250[(7)]);
var state_13250__$1 = state_13250;
var statearr_13264_13287 = state_13250__$1;
(statearr_13264_13287[(2)] = inst_13227);

(statearr_13264_13287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (10))){
var inst_13246 = (state_13250[(2)]);
var state_13250__$1 = state_13250;
var statearr_13265_13288 = state_13250__$1;
(statearr_13265_13288[(2)] = inst_13246);

(statearr_13265_13288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13251 === (8))){
var inst_13227 = (state_13250[(7)]);
var inst_13237 = cljs.core.next.call(null,inst_13227);
var inst_13227__$1 = inst_13237;
var state_13250__$1 = (function (){var statearr_13266 = state_13250;
(statearr_13266[(7)] = inst_13227__$1);

return statearr_13266;
})();
var statearr_13267_13289 = state_13250__$1;
(statearr_13267_13289[(2)] = null);

(statearr_13267_13289[(1)] = (2));


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
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_13271 = [null,null,null,null,null,null,null,null];
(statearr_13271[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_13271[(1)] = (1));

return statearr_13271;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_13250){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13272){if((e13272 instanceof Object)){
var ex__6858__auto__ = e13272;
var statearr_13273_13290 = state_13250;
(statearr_13273_13290[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13291 = state_13250;
state_13250 = G__13291;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_13250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_13250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_13274 = f__6917__auto__.call(null);
(statearr_13274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_13274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj13293 = {};
return obj13293;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4321__auto__ = _;
if(and__4321__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4321__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4969__auto__ = (((_ == null))?null:_);
return (function (){var or__4333__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj13295 = {};
return obj13295;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t13517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13517 = (function (cs,ch,mult,meta13518){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13518 = meta13518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13517.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13517.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13517.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13517.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13517.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13519){
var self__ = this;
var _13519__$1 = this;
return self__.meta13518;
});})(cs))
;

cljs.core.async.t13517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13519,meta13518__$1){
var self__ = this;
var _13519__$1 = this;
return (new cljs.core.async.t13517(self__.cs,self__.ch,self__.mult,meta13518__$1));
});})(cs))
;

cljs.core.async.t13517.cljs$lang$type = true;

cljs.core.async.t13517.cljs$lang$ctorStr = "cljs.core.async/t13517";

cljs.core.async.t13517.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t13517");
});})(cs))
;

cljs.core.async.__GT_t13517 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13517(cs__$1,ch__$1,mult__$1,meta13518){
return (new cljs.core.async.t13517(cs__$1,ch__$1,mult__$1,meta13518));
});})(cs))
;

}

return (new cljs.core.async.t13517(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6916__auto___13738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13738,cs,m,dchan,dctr,done){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13738,cs,m,dchan,dctr,done){
return (function (state_13650){
var state_val_13651 = (state_13650[(1)]);
if((state_val_13651 === (7))){
var inst_13646 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13652_13739 = state_13650__$1;
(statearr_13652_13739[(2)] = inst_13646);

(statearr_13652_13739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (20))){
var inst_13551 = (state_13650[(7)]);
var inst_13561 = cljs.core.first.call(null,inst_13551);
var inst_13562 = cljs.core.nth.call(null,inst_13561,(0),null);
var inst_13563 = cljs.core.nth.call(null,inst_13561,(1),null);
var state_13650__$1 = (function (){var statearr_13653 = state_13650;
(statearr_13653[(8)] = inst_13562);

return statearr_13653;
})();
if(cljs.core.truth_(inst_13563)){
var statearr_13654_13740 = state_13650__$1;
(statearr_13654_13740[(1)] = (22));

} else {
var statearr_13655_13741 = state_13650__$1;
(statearr_13655_13741[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (27))){
var inst_13522 = (state_13650[(9)]);
var inst_13593 = (state_13650[(10)]);
var inst_13591 = (state_13650[(11)]);
var inst_13598 = (state_13650[(12)]);
var inst_13598__$1 = cljs.core._nth.call(null,inst_13591,inst_13593);
var inst_13599 = cljs.core.async.put_BANG_.call(null,inst_13598__$1,inst_13522,done);
var state_13650__$1 = (function (){var statearr_13656 = state_13650;
(statearr_13656[(12)] = inst_13598__$1);

return statearr_13656;
})();
if(cljs.core.truth_(inst_13599)){
var statearr_13657_13742 = state_13650__$1;
(statearr_13657_13742[(1)] = (30));

} else {
var statearr_13658_13743 = state_13650__$1;
(statearr_13658_13743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (1))){
var state_13650__$1 = state_13650;
var statearr_13659_13744 = state_13650__$1;
(statearr_13659_13744[(2)] = null);

(statearr_13659_13744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (24))){
var inst_13551 = (state_13650[(7)]);
var inst_13568 = (state_13650[(2)]);
var inst_13569 = cljs.core.next.call(null,inst_13551);
var inst_13531 = inst_13569;
var inst_13532 = null;
var inst_13533 = (0);
var inst_13534 = (0);
var state_13650__$1 = (function (){var statearr_13660 = state_13650;
(statearr_13660[(13)] = inst_13531);

(statearr_13660[(14)] = inst_13532);

(statearr_13660[(15)] = inst_13534);

(statearr_13660[(16)] = inst_13533);

(statearr_13660[(17)] = inst_13568);

return statearr_13660;
})();
var statearr_13661_13745 = state_13650__$1;
(statearr_13661_13745[(2)] = null);

(statearr_13661_13745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (39))){
var state_13650__$1 = state_13650;
var statearr_13665_13746 = state_13650__$1;
(statearr_13665_13746[(2)] = null);

(statearr_13665_13746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (4))){
var inst_13522 = (state_13650[(9)]);
var inst_13522__$1 = (state_13650[(2)]);
var inst_13523 = (inst_13522__$1 == null);
var state_13650__$1 = (function (){var statearr_13666 = state_13650;
(statearr_13666[(9)] = inst_13522__$1);

return statearr_13666;
})();
if(cljs.core.truth_(inst_13523)){
var statearr_13667_13747 = state_13650__$1;
(statearr_13667_13747[(1)] = (5));

} else {
var statearr_13668_13748 = state_13650__$1;
(statearr_13668_13748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (15))){
var inst_13531 = (state_13650[(13)]);
var inst_13532 = (state_13650[(14)]);
var inst_13534 = (state_13650[(15)]);
var inst_13533 = (state_13650[(16)]);
var inst_13547 = (state_13650[(2)]);
var inst_13548 = (inst_13534 + (1));
var tmp13662 = inst_13531;
var tmp13663 = inst_13532;
var tmp13664 = inst_13533;
var inst_13531__$1 = tmp13662;
var inst_13532__$1 = tmp13663;
var inst_13533__$1 = tmp13664;
var inst_13534__$1 = inst_13548;
var state_13650__$1 = (function (){var statearr_13669 = state_13650;
(statearr_13669[(13)] = inst_13531__$1);

(statearr_13669[(14)] = inst_13532__$1);

(statearr_13669[(15)] = inst_13534__$1);

(statearr_13669[(18)] = inst_13547);

(statearr_13669[(16)] = inst_13533__$1);

return statearr_13669;
})();
var statearr_13670_13749 = state_13650__$1;
(statearr_13670_13749[(2)] = null);

(statearr_13670_13749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (21))){
var inst_13572 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13674_13750 = state_13650__$1;
(statearr_13674_13750[(2)] = inst_13572);

(statearr_13674_13750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (31))){
var inst_13598 = (state_13650[(12)]);
var inst_13602 = done.call(null,null);
var inst_13603 = cljs.core.async.untap_STAR_.call(null,m,inst_13598);
var state_13650__$1 = (function (){var statearr_13675 = state_13650;
(statearr_13675[(19)] = inst_13602);

return statearr_13675;
})();
var statearr_13676_13751 = state_13650__$1;
(statearr_13676_13751[(2)] = inst_13603);

(statearr_13676_13751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (32))){
var inst_13593 = (state_13650[(10)]);
var inst_13592 = (state_13650[(20)]);
var inst_13590 = (state_13650[(21)]);
var inst_13591 = (state_13650[(11)]);
var inst_13605 = (state_13650[(2)]);
var inst_13606 = (inst_13593 + (1));
var tmp13671 = inst_13592;
var tmp13672 = inst_13590;
var tmp13673 = inst_13591;
var inst_13590__$1 = tmp13672;
var inst_13591__$1 = tmp13673;
var inst_13592__$1 = tmp13671;
var inst_13593__$1 = inst_13606;
var state_13650__$1 = (function (){var statearr_13677 = state_13650;
(statearr_13677[(10)] = inst_13593__$1);

(statearr_13677[(22)] = inst_13605);

(statearr_13677[(20)] = inst_13592__$1);

(statearr_13677[(21)] = inst_13590__$1);

(statearr_13677[(11)] = inst_13591__$1);

return statearr_13677;
})();
var statearr_13678_13752 = state_13650__$1;
(statearr_13678_13752[(2)] = null);

(statearr_13678_13752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (40))){
var inst_13618 = (state_13650[(23)]);
var inst_13622 = done.call(null,null);
var inst_13623 = cljs.core.async.untap_STAR_.call(null,m,inst_13618);
var state_13650__$1 = (function (){var statearr_13679 = state_13650;
(statearr_13679[(24)] = inst_13622);

return statearr_13679;
})();
var statearr_13680_13753 = state_13650__$1;
(statearr_13680_13753[(2)] = inst_13623);

(statearr_13680_13753[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (33))){
var inst_13609 = (state_13650[(25)]);
var inst_13611 = cljs.core.chunked_seq_QMARK_.call(null,inst_13609);
var state_13650__$1 = state_13650;
if(inst_13611){
var statearr_13681_13754 = state_13650__$1;
(statearr_13681_13754[(1)] = (36));

} else {
var statearr_13682_13755 = state_13650__$1;
(statearr_13682_13755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (13))){
var inst_13541 = (state_13650[(26)]);
var inst_13544 = cljs.core.async.close_BANG_.call(null,inst_13541);
var state_13650__$1 = state_13650;
var statearr_13683_13756 = state_13650__$1;
(statearr_13683_13756[(2)] = inst_13544);

(statearr_13683_13756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (22))){
var inst_13562 = (state_13650[(8)]);
var inst_13565 = cljs.core.async.close_BANG_.call(null,inst_13562);
var state_13650__$1 = state_13650;
var statearr_13684_13757 = state_13650__$1;
(statearr_13684_13757[(2)] = inst_13565);

(statearr_13684_13757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (36))){
var inst_13609 = (state_13650[(25)]);
var inst_13613 = cljs.core.chunk_first.call(null,inst_13609);
var inst_13614 = cljs.core.chunk_rest.call(null,inst_13609);
var inst_13615 = cljs.core.count.call(null,inst_13613);
var inst_13590 = inst_13614;
var inst_13591 = inst_13613;
var inst_13592 = inst_13615;
var inst_13593 = (0);
var state_13650__$1 = (function (){var statearr_13685 = state_13650;
(statearr_13685[(10)] = inst_13593);

(statearr_13685[(20)] = inst_13592);

(statearr_13685[(21)] = inst_13590);

(statearr_13685[(11)] = inst_13591);

return statearr_13685;
})();
var statearr_13686_13758 = state_13650__$1;
(statearr_13686_13758[(2)] = null);

(statearr_13686_13758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (41))){
var inst_13609 = (state_13650[(25)]);
var inst_13625 = (state_13650[(2)]);
var inst_13626 = cljs.core.next.call(null,inst_13609);
var inst_13590 = inst_13626;
var inst_13591 = null;
var inst_13592 = (0);
var inst_13593 = (0);
var state_13650__$1 = (function (){var statearr_13687 = state_13650;
(statearr_13687[(10)] = inst_13593);

(statearr_13687[(27)] = inst_13625);

(statearr_13687[(20)] = inst_13592);

(statearr_13687[(21)] = inst_13590);

(statearr_13687[(11)] = inst_13591);

return statearr_13687;
})();
var statearr_13688_13759 = state_13650__$1;
(statearr_13688_13759[(2)] = null);

(statearr_13688_13759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (43))){
var state_13650__$1 = state_13650;
var statearr_13689_13760 = state_13650__$1;
(statearr_13689_13760[(2)] = null);

(statearr_13689_13760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (29))){
var inst_13634 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13690_13761 = state_13650__$1;
(statearr_13690_13761[(2)] = inst_13634);

(statearr_13690_13761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (44))){
var inst_13643 = (state_13650[(2)]);
var state_13650__$1 = (function (){var statearr_13691 = state_13650;
(statearr_13691[(28)] = inst_13643);

return statearr_13691;
})();
var statearr_13692_13762 = state_13650__$1;
(statearr_13692_13762[(2)] = null);

(statearr_13692_13762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (6))){
var inst_13582 = (state_13650[(29)]);
var inst_13581 = cljs.core.deref.call(null,cs);
var inst_13582__$1 = cljs.core.keys.call(null,inst_13581);
var inst_13583 = cljs.core.count.call(null,inst_13582__$1);
var inst_13584 = cljs.core.reset_BANG_.call(null,dctr,inst_13583);
var inst_13589 = cljs.core.seq.call(null,inst_13582__$1);
var inst_13590 = inst_13589;
var inst_13591 = null;
var inst_13592 = (0);
var inst_13593 = (0);
var state_13650__$1 = (function (){var statearr_13693 = state_13650;
(statearr_13693[(30)] = inst_13584);

(statearr_13693[(29)] = inst_13582__$1);

(statearr_13693[(10)] = inst_13593);

(statearr_13693[(20)] = inst_13592);

(statearr_13693[(21)] = inst_13590);

(statearr_13693[(11)] = inst_13591);

return statearr_13693;
})();
var statearr_13694_13763 = state_13650__$1;
(statearr_13694_13763[(2)] = null);

(statearr_13694_13763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (28))){
var inst_13609 = (state_13650[(25)]);
var inst_13590 = (state_13650[(21)]);
var inst_13609__$1 = cljs.core.seq.call(null,inst_13590);
var state_13650__$1 = (function (){var statearr_13695 = state_13650;
(statearr_13695[(25)] = inst_13609__$1);

return statearr_13695;
})();
if(inst_13609__$1){
var statearr_13696_13764 = state_13650__$1;
(statearr_13696_13764[(1)] = (33));

} else {
var statearr_13697_13765 = state_13650__$1;
(statearr_13697_13765[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (25))){
var inst_13593 = (state_13650[(10)]);
var inst_13592 = (state_13650[(20)]);
var inst_13595 = (inst_13593 < inst_13592);
var inst_13596 = inst_13595;
var state_13650__$1 = state_13650;
if(cljs.core.truth_(inst_13596)){
var statearr_13698_13766 = state_13650__$1;
(statearr_13698_13766[(1)] = (27));

} else {
var statearr_13699_13767 = state_13650__$1;
(statearr_13699_13767[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (34))){
var state_13650__$1 = state_13650;
var statearr_13700_13768 = state_13650__$1;
(statearr_13700_13768[(2)] = null);

(statearr_13700_13768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (17))){
var state_13650__$1 = state_13650;
var statearr_13701_13769 = state_13650__$1;
(statearr_13701_13769[(2)] = null);

(statearr_13701_13769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (3))){
var inst_13648 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13650__$1,inst_13648);
} else {
if((state_val_13651 === (12))){
var inst_13577 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13702_13770 = state_13650__$1;
(statearr_13702_13770[(2)] = inst_13577);

(statearr_13702_13770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (2))){
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13650__$1,(4),ch);
} else {
if((state_val_13651 === (23))){
var state_13650__$1 = state_13650;
var statearr_13703_13771 = state_13650__$1;
(statearr_13703_13771[(2)] = null);

(statearr_13703_13771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (35))){
var inst_13632 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13704_13772 = state_13650__$1;
(statearr_13704_13772[(2)] = inst_13632);

(statearr_13704_13772[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (19))){
var inst_13551 = (state_13650[(7)]);
var inst_13555 = cljs.core.chunk_first.call(null,inst_13551);
var inst_13556 = cljs.core.chunk_rest.call(null,inst_13551);
var inst_13557 = cljs.core.count.call(null,inst_13555);
var inst_13531 = inst_13556;
var inst_13532 = inst_13555;
var inst_13533 = inst_13557;
var inst_13534 = (0);
var state_13650__$1 = (function (){var statearr_13705 = state_13650;
(statearr_13705[(13)] = inst_13531);

(statearr_13705[(14)] = inst_13532);

(statearr_13705[(15)] = inst_13534);

(statearr_13705[(16)] = inst_13533);

return statearr_13705;
})();
var statearr_13706_13773 = state_13650__$1;
(statearr_13706_13773[(2)] = null);

(statearr_13706_13773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (11))){
var inst_13531 = (state_13650[(13)]);
var inst_13551 = (state_13650[(7)]);
var inst_13551__$1 = cljs.core.seq.call(null,inst_13531);
var state_13650__$1 = (function (){var statearr_13707 = state_13650;
(statearr_13707[(7)] = inst_13551__$1);

return statearr_13707;
})();
if(inst_13551__$1){
var statearr_13708_13774 = state_13650__$1;
(statearr_13708_13774[(1)] = (16));

} else {
var statearr_13709_13775 = state_13650__$1;
(statearr_13709_13775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (9))){
var inst_13579 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13710_13776 = state_13650__$1;
(statearr_13710_13776[(2)] = inst_13579);

(statearr_13710_13776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (5))){
var inst_13529 = cljs.core.deref.call(null,cs);
var inst_13530 = cljs.core.seq.call(null,inst_13529);
var inst_13531 = inst_13530;
var inst_13532 = null;
var inst_13533 = (0);
var inst_13534 = (0);
var state_13650__$1 = (function (){var statearr_13711 = state_13650;
(statearr_13711[(13)] = inst_13531);

(statearr_13711[(14)] = inst_13532);

(statearr_13711[(15)] = inst_13534);

(statearr_13711[(16)] = inst_13533);

return statearr_13711;
})();
var statearr_13712_13777 = state_13650__$1;
(statearr_13712_13777[(2)] = null);

(statearr_13712_13777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (14))){
var state_13650__$1 = state_13650;
var statearr_13713_13778 = state_13650__$1;
(statearr_13713_13778[(2)] = null);

(statearr_13713_13778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (45))){
var inst_13640 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13714_13779 = state_13650__$1;
(statearr_13714_13779[(2)] = inst_13640);

(statearr_13714_13779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (26))){
var inst_13582 = (state_13650[(29)]);
var inst_13636 = (state_13650[(2)]);
var inst_13637 = cljs.core.seq.call(null,inst_13582);
var state_13650__$1 = (function (){var statearr_13715 = state_13650;
(statearr_13715[(31)] = inst_13636);

return statearr_13715;
})();
if(inst_13637){
var statearr_13716_13780 = state_13650__$1;
(statearr_13716_13780[(1)] = (42));

} else {
var statearr_13717_13781 = state_13650__$1;
(statearr_13717_13781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (16))){
var inst_13551 = (state_13650[(7)]);
var inst_13553 = cljs.core.chunked_seq_QMARK_.call(null,inst_13551);
var state_13650__$1 = state_13650;
if(inst_13553){
var statearr_13718_13782 = state_13650__$1;
(statearr_13718_13782[(1)] = (19));

} else {
var statearr_13719_13783 = state_13650__$1;
(statearr_13719_13783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (38))){
var inst_13629 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13720_13784 = state_13650__$1;
(statearr_13720_13784[(2)] = inst_13629);

(statearr_13720_13784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (30))){
var state_13650__$1 = state_13650;
var statearr_13721_13785 = state_13650__$1;
(statearr_13721_13785[(2)] = null);

(statearr_13721_13785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (10))){
var inst_13532 = (state_13650[(14)]);
var inst_13534 = (state_13650[(15)]);
var inst_13540 = cljs.core._nth.call(null,inst_13532,inst_13534);
var inst_13541 = cljs.core.nth.call(null,inst_13540,(0),null);
var inst_13542 = cljs.core.nth.call(null,inst_13540,(1),null);
var state_13650__$1 = (function (){var statearr_13722 = state_13650;
(statearr_13722[(26)] = inst_13541);

return statearr_13722;
})();
if(cljs.core.truth_(inst_13542)){
var statearr_13723_13786 = state_13650__$1;
(statearr_13723_13786[(1)] = (13));

} else {
var statearr_13724_13787 = state_13650__$1;
(statearr_13724_13787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (18))){
var inst_13575 = (state_13650[(2)]);
var state_13650__$1 = state_13650;
var statearr_13725_13788 = state_13650__$1;
(statearr_13725_13788[(2)] = inst_13575);

(statearr_13725_13788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (42))){
var state_13650__$1 = state_13650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13650__$1,(45),dchan);
} else {
if((state_val_13651 === (37))){
var inst_13522 = (state_13650[(9)]);
var inst_13609 = (state_13650[(25)]);
var inst_13618 = (state_13650[(23)]);
var inst_13618__$1 = cljs.core.first.call(null,inst_13609);
var inst_13619 = cljs.core.async.put_BANG_.call(null,inst_13618__$1,inst_13522,done);
var state_13650__$1 = (function (){var statearr_13726 = state_13650;
(statearr_13726[(23)] = inst_13618__$1);

return statearr_13726;
})();
if(cljs.core.truth_(inst_13619)){
var statearr_13727_13789 = state_13650__$1;
(statearr_13727_13789[(1)] = (39));

} else {
var statearr_13728_13790 = state_13650__$1;
(statearr_13728_13790[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13651 === (8))){
var inst_13534 = (state_13650[(15)]);
var inst_13533 = (state_13650[(16)]);
var inst_13536 = (inst_13534 < inst_13533);
var inst_13537 = inst_13536;
var state_13650__$1 = state_13650;
if(cljs.core.truth_(inst_13537)){
var statearr_13729_13791 = state_13650__$1;
(statearr_13729_13791[(1)] = (10));

} else {
var statearr_13730_13792 = state_13650__$1;
(statearr_13730_13792[(1)] = (11));

}

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
});})(c__6916__auto___13738,cs,m,dchan,dctr,done))
;
return ((function (switch__6854__auto__,c__6916__auto___13738,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6855__auto__ = null;
var cljs$core$async$mult_$_state_machine__6855__auto____0 = (function (){
var statearr_13734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13734[(0)] = cljs$core$async$mult_$_state_machine__6855__auto__);

(statearr_13734[(1)] = (1));

return statearr_13734;
});
var cljs$core$async$mult_$_state_machine__6855__auto____1 = (function (state_13650){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13735){if((e13735 instanceof Object)){
var ex__6858__auto__ = e13735;
var statearr_13736_13793 = state_13650;
(statearr_13736_13793[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13794 = state_13650;
state_13650 = G__13794;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6855__auto__ = function(state_13650){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6855__auto____1.call(this,state_13650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6855__auto____0;
cljs$core$async$mult_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6855__auto____1;
return cljs$core$async$mult_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13738,cs,m,dchan,dctr,done))
})();
var state__6918__auto__ = (function (){var statearr_13737 = f__6917__auto__.call(null);
(statearr_13737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13738);

return statearr_13737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13738,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__13796 = arguments.length;
switch (G__13796) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj13799 = {};
return obj13799;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4321__auto__ = m;
if(and__4321__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4969__auto__ = (((m == null))?null:m);
return (function (){var or__4333__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5373__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5373__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13804){
var map__13805 = p__13804;
var map__13805__$1 = ((cljs.core.seq_QMARK_.call(null,map__13805))?cljs.core.apply.call(null,cljs.core.hash_map,map__13805):map__13805);
var opts = map__13805__$1;
var statearr_13806_13809 = state;
(statearr_13806_13809[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13805,map__13805__$1,opts){
return (function (val){
var statearr_13807_13810 = state;
(statearr_13807_13810[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13805,map__13805__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13808_13811 = state;
(statearr_13808_13811[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13800){
var G__13801 = cljs.core.first.call(null,seq13800);
var seq13800__$1 = cljs.core.next.call(null,seq13800);
var G__13802 = cljs.core.first.call(null,seq13800__$1);
var seq13800__$2 = cljs.core.next.call(null,seq13800__$1);
var G__13803 = cljs.core.first.call(null,seq13800__$2);
var seq13800__$3 = cljs.core.next.call(null,seq13800__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13801,G__13802,G__13803,seq13800__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t13931 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13931 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13932){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13932 = meta13932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13931.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13931.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13933){
var self__ = this;
var _13933__$1 = this;
return self__.meta13932;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13933,meta13932__$1){
var self__ = this;
var _13933__$1 = this;
return (new cljs.core.async.t13931(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13932__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13931.cljs$lang$type = true;

cljs.core.async.t13931.cljs$lang$ctorStr = "cljs.core.async/t13931";

cljs.core.async.t13931.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t13931");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13931 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t13931(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13932){
return (new cljs.core.async.t13931(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13932));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13931(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6916__auto___14050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14050,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14050,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14003){
var state_val_14004 = (state_14003[(1)]);
if((state_val_14004 === (7))){
var inst_13947 = (state_14003[(7)]);
var inst_13952 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13947);
var state_14003__$1 = state_14003;
var statearr_14005_14051 = state_14003__$1;
(statearr_14005_14051[(2)] = inst_13952);

(statearr_14005_14051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (20))){
var inst_13962 = (state_14003[(8)]);
var state_14003__$1 = state_14003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14003__$1,(23),out,inst_13962);
} else {
if((state_val_14004 === (1))){
var inst_13937 = (state_14003[(9)]);
var inst_13937__$1 = calc_state.call(null);
var inst_13938 = cljs.core.seq_QMARK_.call(null,inst_13937__$1);
var state_14003__$1 = (function (){var statearr_14006 = state_14003;
(statearr_14006[(9)] = inst_13937__$1);

return statearr_14006;
})();
if(inst_13938){
var statearr_14007_14052 = state_14003__$1;
(statearr_14007_14052[(1)] = (2));

} else {
var statearr_14008_14053 = state_14003__$1;
(statearr_14008_14053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (24))){
var inst_13955 = (state_14003[(10)]);
var inst_13947 = inst_13955;
var state_14003__$1 = (function (){var statearr_14009 = state_14003;
(statearr_14009[(7)] = inst_13947);

return statearr_14009;
})();
var statearr_14010_14054 = state_14003__$1;
(statearr_14010_14054[(2)] = null);

(statearr_14010_14054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (4))){
var inst_13937 = (state_14003[(9)]);
var inst_13943 = (state_14003[(2)]);
var inst_13944 = cljs.core.get.call(null,inst_13943,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13945 = cljs.core.get.call(null,inst_13943,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13946 = cljs.core.get.call(null,inst_13943,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13947 = inst_13937;
var state_14003__$1 = (function (){var statearr_14011 = state_14003;
(statearr_14011[(7)] = inst_13947);

(statearr_14011[(11)] = inst_13946);

(statearr_14011[(12)] = inst_13944);

(statearr_14011[(13)] = inst_13945);

return statearr_14011;
})();
var statearr_14012_14055 = state_14003__$1;
(statearr_14012_14055[(2)] = null);

(statearr_14012_14055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (15))){
var state_14003__$1 = state_14003;
var statearr_14013_14056 = state_14003__$1;
(statearr_14013_14056[(2)] = null);

(statearr_14013_14056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (21))){
var inst_13955 = (state_14003[(10)]);
var inst_13947 = inst_13955;
var state_14003__$1 = (function (){var statearr_14014 = state_14003;
(statearr_14014[(7)] = inst_13947);

return statearr_14014;
})();
var statearr_14015_14057 = state_14003__$1;
(statearr_14015_14057[(2)] = null);

(statearr_14015_14057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (13))){
var inst_13999 = (state_14003[(2)]);
var state_14003__$1 = state_14003;
var statearr_14016_14058 = state_14003__$1;
(statearr_14016_14058[(2)] = inst_13999);

(statearr_14016_14058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (22))){
var inst_13997 = (state_14003[(2)]);
var state_14003__$1 = state_14003;
var statearr_14017_14059 = state_14003__$1;
(statearr_14017_14059[(2)] = inst_13997);

(statearr_14017_14059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (6))){
var inst_14001 = (state_14003[(2)]);
var state_14003__$1 = state_14003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14003__$1,inst_14001);
} else {
if((state_val_14004 === (25))){
var state_14003__$1 = state_14003;
var statearr_14018_14060 = state_14003__$1;
(statearr_14018_14060[(2)] = null);

(statearr_14018_14060[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (17))){
var inst_13977 = (state_14003[(14)]);
var state_14003__$1 = state_14003;
var statearr_14019_14061 = state_14003__$1;
(statearr_14019_14061[(2)] = inst_13977);

(statearr_14019_14061[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (3))){
var inst_13937 = (state_14003[(9)]);
var state_14003__$1 = state_14003;
var statearr_14020_14062 = state_14003__$1;
(statearr_14020_14062[(2)] = inst_13937);

(statearr_14020_14062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (12))){
var inst_13977 = (state_14003[(14)]);
var inst_13958 = (state_14003[(15)]);
var inst_13963 = (state_14003[(16)]);
var inst_13977__$1 = inst_13958.call(null,inst_13963);
var state_14003__$1 = (function (){var statearr_14021 = state_14003;
(statearr_14021[(14)] = inst_13977__$1);

return statearr_14021;
})();
if(cljs.core.truth_(inst_13977__$1)){
var statearr_14022_14063 = state_14003__$1;
(statearr_14022_14063[(1)] = (17));

} else {
var statearr_14023_14064 = state_14003__$1;
(statearr_14023_14064[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (2))){
var inst_13937 = (state_14003[(9)]);
var inst_13940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13937);
var state_14003__$1 = state_14003;
var statearr_14024_14065 = state_14003__$1;
(statearr_14024_14065[(2)] = inst_13940);

(statearr_14024_14065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (23))){
var inst_13988 = (state_14003[(2)]);
var state_14003__$1 = state_14003;
if(cljs.core.truth_(inst_13988)){
var statearr_14025_14066 = state_14003__$1;
(statearr_14025_14066[(1)] = (24));

} else {
var statearr_14026_14067 = state_14003__$1;
(statearr_14026_14067[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (19))){
var inst_13985 = (state_14003[(2)]);
var state_14003__$1 = state_14003;
if(cljs.core.truth_(inst_13985)){
var statearr_14027_14068 = state_14003__$1;
(statearr_14027_14068[(1)] = (20));

} else {
var statearr_14028_14069 = state_14003__$1;
(statearr_14028_14069[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (11))){
var inst_13962 = (state_14003[(8)]);
var inst_13968 = (inst_13962 == null);
var state_14003__$1 = state_14003;
if(cljs.core.truth_(inst_13968)){
var statearr_14029_14070 = state_14003__$1;
(statearr_14029_14070[(1)] = (14));

} else {
var statearr_14030_14071 = state_14003__$1;
(statearr_14030_14071[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (9))){
var inst_13955 = (state_14003[(10)]);
var inst_13955__$1 = (state_14003[(2)]);
var inst_13956 = cljs.core.get.call(null,inst_13955__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13957 = cljs.core.get.call(null,inst_13955__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13958 = cljs.core.get.call(null,inst_13955__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14003__$1 = (function (){var statearr_14031 = state_14003;
(statearr_14031[(10)] = inst_13955__$1);

(statearr_14031[(17)] = inst_13957);

(statearr_14031[(15)] = inst_13958);

return statearr_14031;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14003__$1,(10),inst_13956);
} else {
if((state_val_14004 === (5))){
var inst_13947 = (state_14003[(7)]);
var inst_13950 = cljs.core.seq_QMARK_.call(null,inst_13947);
var state_14003__$1 = state_14003;
if(inst_13950){
var statearr_14032_14072 = state_14003__$1;
(statearr_14032_14072[(1)] = (7));

} else {
var statearr_14033_14073 = state_14003__$1;
(statearr_14033_14073[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (14))){
var inst_13963 = (state_14003[(16)]);
var inst_13970 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13963);
var state_14003__$1 = state_14003;
var statearr_14034_14074 = state_14003__$1;
(statearr_14034_14074[(2)] = inst_13970);

(statearr_14034_14074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (26))){
var inst_13993 = (state_14003[(2)]);
var state_14003__$1 = state_14003;
var statearr_14035_14075 = state_14003__$1;
(statearr_14035_14075[(2)] = inst_13993);

(statearr_14035_14075[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (16))){
var inst_13973 = (state_14003[(2)]);
var inst_13974 = calc_state.call(null);
var inst_13947 = inst_13974;
var state_14003__$1 = (function (){var statearr_14036 = state_14003;
(statearr_14036[(7)] = inst_13947);

(statearr_14036[(18)] = inst_13973);

return statearr_14036;
})();
var statearr_14037_14076 = state_14003__$1;
(statearr_14037_14076[(2)] = null);

(statearr_14037_14076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (10))){
var inst_13963 = (state_14003[(16)]);
var inst_13962 = (state_14003[(8)]);
var inst_13961 = (state_14003[(2)]);
var inst_13962__$1 = cljs.core.nth.call(null,inst_13961,(0),null);
var inst_13963__$1 = cljs.core.nth.call(null,inst_13961,(1),null);
var inst_13964 = (inst_13962__$1 == null);
var inst_13965 = cljs.core._EQ_.call(null,inst_13963__$1,change);
var inst_13966 = (inst_13964) || (inst_13965);
var state_14003__$1 = (function (){var statearr_14038 = state_14003;
(statearr_14038[(16)] = inst_13963__$1);

(statearr_14038[(8)] = inst_13962__$1);

return statearr_14038;
})();
if(cljs.core.truth_(inst_13966)){
var statearr_14039_14077 = state_14003__$1;
(statearr_14039_14077[(1)] = (11));

} else {
var statearr_14040_14078 = state_14003__$1;
(statearr_14040_14078[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (18))){
var inst_13957 = (state_14003[(17)]);
var inst_13958 = (state_14003[(15)]);
var inst_13963 = (state_14003[(16)]);
var inst_13980 = cljs.core.empty_QMARK_.call(null,inst_13958);
var inst_13981 = inst_13957.call(null,inst_13963);
var inst_13982 = cljs.core.not.call(null,inst_13981);
var inst_13983 = (inst_13980) && (inst_13982);
var state_14003__$1 = state_14003;
var statearr_14041_14079 = state_14003__$1;
(statearr_14041_14079[(2)] = inst_13983);

(statearr_14041_14079[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14004 === (8))){
var inst_13947 = (state_14003[(7)]);
var state_14003__$1 = state_14003;
var statearr_14042_14080 = state_14003__$1;
(statearr_14042_14080[(2)] = inst_13947);

(statearr_14042_14080[(1)] = (9));


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
});})(c__6916__auto___14050,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6854__auto__,c__6916__auto___14050,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6855__auto__ = null;
var cljs$core$async$mix_$_state_machine__6855__auto____0 = (function (){
var statearr_14046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14046[(0)] = cljs$core$async$mix_$_state_machine__6855__auto__);

(statearr_14046[(1)] = (1));

return statearr_14046;
});
var cljs$core$async$mix_$_state_machine__6855__auto____1 = (function (state_14003){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14047){if((e14047 instanceof Object)){
var ex__6858__auto__ = e14047;
var statearr_14048_14081 = state_14003;
(statearr_14048_14081[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14082 = state_14003;
state_14003 = G__14082;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6855__auto__ = function(state_14003){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6855__auto____1.call(this,state_14003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6855__auto____0;
cljs$core$async$mix_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6855__auto____1;
return cljs$core$async$mix_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14050,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6918__auto__ = (function (){var statearr_14049 = f__6917__auto__.call(null);
(statearr_14049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14050);

return statearr_14049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14050,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj14084 = {};
return obj14084;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4321__auto__ = p;
if(and__4321__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4321__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4969__auto__ = (((p == null))?null:p);
return (function (){var or__4333__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4321__auto__ = p;
if(and__4321__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4321__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4969__auto__ = (((p == null))?null:p);
return (function (){var or__4333__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__14086 = arguments.length;
switch (G__14086) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4321__auto__ = p;
if(and__4321__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4321__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4969__auto__ = (((p == null))?null:p);
return (function (){var or__4333__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4321__auto__ = p;
if(and__4321__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4321__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4969__auto__ = (((p == null))?null:p);
return (function (){var or__4333__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4969__auto__)]);
if(or__4333__auto__){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4333__auto____$1){
return or__4333__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__14090 = arguments.length;
switch (G__14090) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4333__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4333__auto__,mults){
return (function (p1__14088_SHARP_){
if(cljs.core.truth_(p1__14088_SHARP_.call(null,topic))){
return p1__14088_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14088_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4333__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14091 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14091 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14092){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14092 = meta14092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14091.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14091.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14091.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14091.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14091.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14091.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14093){
var self__ = this;
var _14093__$1 = this;
return self__.meta14092;
});})(mults,ensure_mult))
;

cljs.core.async.t14091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14093,meta14092__$1){
var self__ = this;
var _14093__$1 = this;
return (new cljs.core.async.t14091(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14092__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14091.cljs$lang$type = true;

cljs.core.async.t14091.cljs$lang$ctorStr = "cljs.core.async/t14091";

cljs.core.async.t14091.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14091");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14091 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14091(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14092){
return (new cljs.core.async.t14091(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14092));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14091(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6916__auto___14214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14214,mults,ensure_mult,p){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14214,mults,ensure_mult,p){
return (function (state_14165){
var state_val_14166 = (state_14165[(1)]);
if((state_val_14166 === (7))){
var inst_14161 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14167_14215 = state_14165__$1;
(statearr_14167_14215[(2)] = inst_14161);

(statearr_14167_14215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (20))){
var state_14165__$1 = state_14165;
var statearr_14168_14216 = state_14165__$1;
(statearr_14168_14216[(2)] = null);

(statearr_14168_14216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (1))){
var state_14165__$1 = state_14165;
var statearr_14169_14217 = state_14165__$1;
(statearr_14169_14217[(2)] = null);

(statearr_14169_14217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (24))){
var inst_14144 = (state_14165[(7)]);
var inst_14153 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14144);
var state_14165__$1 = state_14165;
var statearr_14170_14218 = state_14165__$1;
(statearr_14170_14218[(2)] = inst_14153);

(statearr_14170_14218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (4))){
var inst_14096 = (state_14165[(8)]);
var inst_14096__$1 = (state_14165[(2)]);
var inst_14097 = (inst_14096__$1 == null);
var state_14165__$1 = (function (){var statearr_14171 = state_14165;
(statearr_14171[(8)] = inst_14096__$1);

return statearr_14171;
})();
if(cljs.core.truth_(inst_14097)){
var statearr_14172_14219 = state_14165__$1;
(statearr_14172_14219[(1)] = (5));

} else {
var statearr_14173_14220 = state_14165__$1;
(statearr_14173_14220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (15))){
var inst_14138 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14174_14221 = state_14165__$1;
(statearr_14174_14221[(2)] = inst_14138);

(statearr_14174_14221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (21))){
var inst_14158 = (state_14165[(2)]);
var state_14165__$1 = (function (){var statearr_14175 = state_14165;
(statearr_14175[(9)] = inst_14158);

return statearr_14175;
})();
var statearr_14176_14222 = state_14165__$1;
(statearr_14176_14222[(2)] = null);

(statearr_14176_14222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (13))){
var inst_14120 = (state_14165[(10)]);
var inst_14122 = cljs.core.chunked_seq_QMARK_.call(null,inst_14120);
var state_14165__$1 = state_14165;
if(inst_14122){
var statearr_14177_14223 = state_14165__$1;
(statearr_14177_14223[(1)] = (16));

} else {
var statearr_14178_14224 = state_14165__$1;
(statearr_14178_14224[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (22))){
var inst_14150 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
if(cljs.core.truth_(inst_14150)){
var statearr_14179_14225 = state_14165__$1;
(statearr_14179_14225[(1)] = (23));

} else {
var statearr_14180_14226 = state_14165__$1;
(statearr_14180_14226[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (6))){
var inst_14144 = (state_14165[(7)]);
var inst_14096 = (state_14165[(8)]);
var inst_14146 = (state_14165[(11)]);
var inst_14144__$1 = topic_fn.call(null,inst_14096);
var inst_14145 = cljs.core.deref.call(null,mults);
var inst_14146__$1 = cljs.core.get.call(null,inst_14145,inst_14144__$1);
var state_14165__$1 = (function (){var statearr_14181 = state_14165;
(statearr_14181[(7)] = inst_14144__$1);

(statearr_14181[(11)] = inst_14146__$1);

return statearr_14181;
})();
if(cljs.core.truth_(inst_14146__$1)){
var statearr_14182_14227 = state_14165__$1;
(statearr_14182_14227[(1)] = (19));

} else {
var statearr_14183_14228 = state_14165__$1;
(statearr_14183_14228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (25))){
var inst_14155 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14184_14229 = state_14165__$1;
(statearr_14184_14229[(2)] = inst_14155);

(statearr_14184_14229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (17))){
var inst_14120 = (state_14165[(10)]);
var inst_14129 = cljs.core.first.call(null,inst_14120);
var inst_14130 = cljs.core.async.muxch_STAR_.call(null,inst_14129);
var inst_14131 = cljs.core.async.close_BANG_.call(null,inst_14130);
var inst_14132 = cljs.core.next.call(null,inst_14120);
var inst_14106 = inst_14132;
var inst_14107 = null;
var inst_14108 = (0);
var inst_14109 = (0);
var state_14165__$1 = (function (){var statearr_14185 = state_14165;
(statearr_14185[(12)] = inst_14107);

(statearr_14185[(13)] = inst_14109);

(statearr_14185[(14)] = inst_14106);

(statearr_14185[(15)] = inst_14131);

(statearr_14185[(16)] = inst_14108);

return statearr_14185;
})();
var statearr_14186_14230 = state_14165__$1;
(statearr_14186_14230[(2)] = null);

(statearr_14186_14230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (3))){
var inst_14163 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14165__$1,inst_14163);
} else {
if((state_val_14166 === (12))){
var inst_14140 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14187_14231 = state_14165__$1;
(statearr_14187_14231[(2)] = inst_14140);

(statearr_14187_14231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (2))){
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14165__$1,(4),ch);
} else {
if((state_val_14166 === (23))){
var state_14165__$1 = state_14165;
var statearr_14188_14232 = state_14165__$1;
(statearr_14188_14232[(2)] = null);

(statearr_14188_14232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (19))){
var inst_14096 = (state_14165[(8)]);
var inst_14146 = (state_14165[(11)]);
var inst_14148 = cljs.core.async.muxch_STAR_.call(null,inst_14146);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14165__$1,(22),inst_14148,inst_14096);
} else {
if((state_val_14166 === (11))){
var inst_14106 = (state_14165[(14)]);
var inst_14120 = (state_14165[(10)]);
var inst_14120__$1 = cljs.core.seq.call(null,inst_14106);
var state_14165__$1 = (function (){var statearr_14189 = state_14165;
(statearr_14189[(10)] = inst_14120__$1);

return statearr_14189;
})();
if(inst_14120__$1){
var statearr_14190_14233 = state_14165__$1;
(statearr_14190_14233[(1)] = (13));

} else {
var statearr_14191_14234 = state_14165__$1;
(statearr_14191_14234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (9))){
var inst_14142 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14192_14235 = state_14165__$1;
(statearr_14192_14235[(2)] = inst_14142);

(statearr_14192_14235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (5))){
var inst_14103 = cljs.core.deref.call(null,mults);
var inst_14104 = cljs.core.vals.call(null,inst_14103);
var inst_14105 = cljs.core.seq.call(null,inst_14104);
var inst_14106 = inst_14105;
var inst_14107 = null;
var inst_14108 = (0);
var inst_14109 = (0);
var state_14165__$1 = (function (){var statearr_14193 = state_14165;
(statearr_14193[(12)] = inst_14107);

(statearr_14193[(13)] = inst_14109);

(statearr_14193[(14)] = inst_14106);

(statearr_14193[(16)] = inst_14108);

return statearr_14193;
})();
var statearr_14194_14236 = state_14165__$1;
(statearr_14194_14236[(2)] = null);

(statearr_14194_14236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (14))){
var state_14165__$1 = state_14165;
var statearr_14198_14237 = state_14165__$1;
(statearr_14198_14237[(2)] = null);

(statearr_14198_14237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (16))){
var inst_14120 = (state_14165[(10)]);
var inst_14124 = cljs.core.chunk_first.call(null,inst_14120);
var inst_14125 = cljs.core.chunk_rest.call(null,inst_14120);
var inst_14126 = cljs.core.count.call(null,inst_14124);
var inst_14106 = inst_14125;
var inst_14107 = inst_14124;
var inst_14108 = inst_14126;
var inst_14109 = (0);
var state_14165__$1 = (function (){var statearr_14199 = state_14165;
(statearr_14199[(12)] = inst_14107);

(statearr_14199[(13)] = inst_14109);

(statearr_14199[(14)] = inst_14106);

(statearr_14199[(16)] = inst_14108);

return statearr_14199;
})();
var statearr_14200_14238 = state_14165__$1;
(statearr_14200_14238[(2)] = null);

(statearr_14200_14238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (10))){
var inst_14107 = (state_14165[(12)]);
var inst_14109 = (state_14165[(13)]);
var inst_14106 = (state_14165[(14)]);
var inst_14108 = (state_14165[(16)]);
var inst_14114 = cljs.core._nth.call(null,inst_14107,inst_14109);
var inst_14115 = cljs.core.async.muxch_STAR_.call(null,inst_14114);
var inst_14116 = cljs.core.async.close_BANG_.call(null,inst_14115);
var inst_14117 = (inst_14109 + (1));
var tmp14195 = inst_14107;
var tmp14196 = inst_14106;
var tmp14197 = inst_14108;
var inst_14106__$1 = tmp14196;
var inst_14107__$1 = tmp14195;
var inst_14108__$1 = tmp14197;
var inst_14109__$1 = inst_14117;
var state_14165__$1 = (function (){var statearr_14201 = state_14165;
(statearr_14201[(12)] = inst_14107__$1);

(statearr_14201[(13)] = inst_14109__$1);

(statearr_14201[(14)] = inst_14106__$1);

(statearr_14201[(17)] = inst_14116);

(statearr_14201[(16)] = inst_14108__$1);

return statearr_14201;
})();
var statearr_14202_14239 = state_14165__$1;
(statearr_14202_14239[(2)] = null);

(statearr_14202_14239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (18))){
var inst_14135 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14203_14240 = state_14165__$1;
(statearr_14203_14240[(2)] = inst_14135);

(statearr_14203_14240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (8))){
var inst_14109 = (state_14165[(13)]);
var inst_14108 = (state_14165[(16)]);
var inst_14111 = (inst_14109 < inst_14108);
var inst_14112 = inst_14111;
var state_14165__$1 = state_14165;
if(cljs.core.truth_(inst_14112)){
var statearr_14204_14241 = state_14165__$1;
(statearr_14204_14241[(1)] = (10));

} else {
var statearr_14205_14242 = state_14165__$1;
(statearr_14205_14242[(1)] = (11));

}

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
});})(c__6916__auto___14214,mults,ensure_mult,p))
;
return ((function (switch__6854__auto__,c__6916__auto___14214,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14209[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14209[(1)] = (1));

return statearr_14209;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14165){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14210){if((e14210 instanceof Object)){
var ex__6858__auto__ = e14210;
var statearr_14211_14243 = state_14165;
(statearr_14211_14243[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14244 = state_14165;
state_14165 = G__14244;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14214,mults,ensure_mult,p))
})();
var state__6918__auto__ = (function (){var statearr_14212 = f__6917__auto__.call(null);
(statearr_14212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14214);

return statearr_14212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14214,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__14246 = arguments.length;
switch (G__14246) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__14249 = arguments.length;
switch (G__14249) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__14252 = arguments.length;
switch (G__14252) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6916__auto___14322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14291){
var state_val_14292 = (state_14291[(1)]);
if((state_val_14292 === (7))){
var state_14291__$1 = state_14291;
var statearr_14293_14323 = state_14291__$1;
(statearr_14293_14323[(2)] = null);

(statearr_14293_14323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (1))){
var state_14291__$1 = state_14291;
var statearr_14294_14324 = state_14291__$1;
(statearr_14294_14324[(2)] = null);

(statearr_14294_14324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (4))){
var inst_14255 = (state_14291[(7)]);
var inst_14257 = (inst_14255 < cnt);
var state_14291__$1 = state_14291;
if(cljs.core.truth_(inst_14257)){
var statearr_14295_14325 = state_14291__$1;
(statearr_14295_14325[(1)] = (6));

} else {
var statearr_14296_14326 = state_14291__$1;
(statearr_14296_14326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (15))){
var inst_14287 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14297_14327 = state_14291__$1;
(statearr_14297_14327[(2)] = inst_14287);

(statearr_14297_14327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (13))){
var inst_14280 = cljs.core.async.close_BANG_.call(null,out);
var state_14291__$1 = state_14291;
var statearr_14298_14328 = state_14291__$1;
(statearr_14298_14328[(2)] = inst_14280);

(statearr_14298_14328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (6))){
var state_14291__$1 = state_14291;
var statearr_14299_14329 = state_14291__$1;
(statearr_14299_14329[(2)] = null);

(statearr_14299_14329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (3))){
var inst_14289 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14291__$1,inst_14289);
} else {
if((state_val_14292 === (12))){
var inst_14277 = (state_14291[(8)]);
var inst_14277__$1 = (state_14291[(2)]);
var inst_14278 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14277__$1);
var state_14291__$1 = (function (){var statearr_14300 = state_14291;
(statearr_14300[(8)] = inst_14277__$1);

return statearr_14300;
})();
if(cljs.core.truth_(inst_14278)){
var statearr_14301_14330 = state_14291__$1;
(statearr_14301_14330[(1)] = (13));

} else {
var statearr_14302_14331 = state_14291__$1;
(statearr_14302_14331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (2))){
var inst_14254 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14255 = (0);
var state_14291__$1 = (function (){var statearr_14303 = state_14291;
(statearr_14303[(7)] = inst_14255);

(statearr_14303[(9)] = inst_14254);

return statearr_14303;
})();
var statearr_14304_14332 = state_14291__$1;
(statearr_14304_14332[(2)] = null);

(statearr_14304_14332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (11))){
var inst_14255 = (state_14291[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14291,(10),Object,null,(9));
var inst_14264 = chs__$1.call(null,inst_14255);
var inst_14265 = done.call(null,inst_14255);
var inst_14266 = cljs.core.async.take_BANG_.call(null,inst_14264,inst_14265);
var state_14291__$1 = state_14291;
var statearr_14305_14333 = state_14291__$1;
(statearr_14305_14333[(2)] = inst_14266);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (9))){
var inst_14255 = (state_14291[(7)]);
var inst_14268 = (state_14291[(2)]);
var inst_14269 = (inst_14255 + (1));
var inst_14255__$1 = inst_14269;
var state_14291__$1 = (function (){var statearr_14306 = state_14291;
(statearr_14306[(7)] = inst_14255__$1);

(statearr_14306[(10)] = inst_14268);

return statearr_14306;
})();
var statearr_14307_14334 = state_14291__$1;
(statearr_14307_14334[(2)] = null);

(statearr_14307_14334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (5))){
var inst_14275 = (state_14291[(2)]);
var state_14291__$1 = (function (){var statearr_14308 = state_14291;
(statearr_14308[(11)] = inst_14275);

return statearr_14308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14291__$1,(12),dchan);
} else {
if((state_val_14292 === (14))){
var inst_14277 = (state_14291[(8)]);
var inst_14282 = cljs.core.apply.call(null,f,inst_14277);
var state_14291__$1 = state_14291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14291__$1,(16),out,inst_14282);
} else {
if((state_val_14292 === (16))){
var inst_14284 = (state_14291[(2)]);
var state_14291__$1 = (function (){var statearr_14309 = state_14291;
(statearr_14309[(12)] = inst_14284);

return statearr_14309;
})();
var statearr_14310_14335 = state_14291__$1;
(statearr_14310_14335[(2)] = null);

(statearr_14310_14335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (10))){
var inst_14259 = (state_14291[(2)]);
var inst_14260 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14291__$1 = (function (){var statearr_14311 = state_14291;
(statearr_14311[(13)] = inst_14259);

return statearr_14311;
})();
var statearr_14312_14336 = state_14291__$1;
(statearr_14312_14336[(2)] = inst_14260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14292 === (8))){
var inst_14273 = (state_14291[(2)]);
var state_14291__$1 = state_14291;
var statearr_14313_14337 = state_14291__$1;
(statearr_14313_14337[(2)] = inst_14273);

(statearr_14313_14337[(1)] = (5));


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
});})(c__6916__auto___14322,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6854__auto__,c__6916__auto___14322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14317[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14317[(1)] = (1));

return statearr_14317;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14291){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14318){if((e14318 instanceof Object)){
var ex__6858__auto__ = e14318;
var statearr_14319_14338 = state_14291;
(statearr_14319_14338[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14339 = state_14291;
state_14291 = G__14339;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14322,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6918__auto__ = (function (){var statearr_14320 = f__6917__auto__.call(null);
(statearr_14320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14322);

return statearr_14320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14322,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__14342 = arguments.length;
switch (G__14342) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6916__auto___14397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14397,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14397,out){
return (function (state_14372){
var state_val_14373 = (state_14372[(1)]);
if((state_val_14373 === (7))){
var inst_14352 = (state_14372[(7)]);
var inst_14351 = (state_14372[(8)]);
var inst_14351__$1 = (state_14372[(2)]);
var inst_14352__$1 = cljs.core.nth.call(null,inst_14351__$1,(0),null);
var inst_14353 = cljs.core.nth.call(null,inst_14351__$1,(1),null);
var inst_14354 = (inst_14352__$1 == null);
var state_14372__$1 = (function (){var statearr_14374 = state_14372;
(statearr_14374[(7)] = inst_14352__$1);

(statearr_14374[(8)] = inst_14351__$1);

(statearr_14374[(9)] = inst_14353);

return statearr_14374;
})();
if(cljs.core.truth_(inst_14354)){
var statearr_14375_14398 = state_14372__$1;
(statearr_14375_14398[(1)] = (8));

} else {
var statearr_14376_14399 = state_14372__$1;
(statearr_14376_14399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (1))){
var inst_14343 = cljs.core.vec.call(null,chs);
var inst_14344 = inst_14343;
var state_14372__$1 = (function (){var statearr_14377 = state_14372;
(statearr_14377[(10)] = inst_14344);

return statearr_14377;
})();
var statearr_14378_14400 = state_14372__$1;
(statearr_14378_14400[(2)] = null);

(statearr_14378_14400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (4))){
var inst_14344 = (state_14372[(10)]);
var state_14372__$1 = state_14372;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14372__$1,(7),inst_14344);
} else {
if((state_val_14373 === (6))){
var inst_14368 = (state_14372[(2)]);
var state_14372__$1 = state_14372;
var statearr_14379_14401 = state_14372__$1;
(statearr_14379_14401[(2)] = inst_14368);

(statearr_14379_14401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (3))){
var inst_14370 = (state_14372[(2)]);
var state_14372__$1 = state_14372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14372__$1,inst_14370);
} else {
if((state_val_14373 === (2))){
var inst_14344 = (state_14372[(10)]);
var inst_14346 = cljs.core.count.call(null,inst_14344);
var inst_14347 = (inst_14346 > (0));
var state_14372__$1 = state_14372;
if(cljs.core.truth_(inst_14347)){
var statearr_14381_14402 = state_14372__$1;
(statearr_14381_14402[(1)] = (4));

} else {
var statearr_14382_14403 = state_14372__$1;
(statearr_14382_14403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (11))){
var inst_14344 = (state_14372[(10)]);
var inst_14361 = (state_14372[(2)]);
var tmp14380 = inst_14344;
var inst_14344__$1 = tmp14380;
var state_14372__$1 = (function (){var statearr_14383 = state_14372;
(statearr_14383[(10)] = inst_14344__$1);

(statearr_14383[(11)] = inst_14361);

return statearr_14383;
})();
var statearr_14384_14404 = state_14372__$1;
(statearr_14384_14404[(2)] = null);

(statearr_14384_14404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (9))){
var inst_14352 = (state_14372[(7)]);
var state_14372__$1 = state_14372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14372__$1,(11),out,inst_14352);
} else {
if((state_val_14373 === (5))){
var inst_14366 = cljs.core.async.close_BANG_.call(null,out);
var state_14372__$1 = state_14372;
var statearr_14385_14405 = state_14372__$1;
(statearr_14385_14405[(2)] = inst_14366);

(statearr_14385_14405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (10))){
var inst_14364 = (state_14372[(2)]);
var state_14372__$1 = state_14372;
var statearr_14386_14406 = state_14372__$1;
(statearr_14386_14406[(2)] = inst_14364);

(statearr_14386_14406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14373 === (8))){
var inst_14352 = (state_14372[(7)]);
var inst_14351 = (state_14372[(8)]);
var inst_14353 = (state_14372[(9)]);
var inst_14344 = (state_14372[(10)]);
var inst_14356 = (function (){var c = inst_14353;
var v = inst_14352;
var vec__14349 = inst_14351;
var cs = inst_14344;
return ((function (c,v,vec__14349,cs,inst_14352,inst_14351,inst_14353,inst_14344,state_val_14373,c__6916__auto___14397,out){
return (function (p1__14340_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14340_SHARP_);
});
;})(c,v,vec__14349,cs,inst_14352,inst_14351,inst_14353,inst_14344,state_val_14373,c__6916__auto___14397,out))
})();
var inst_14357 = cljs.core.filterv.call(null,inst_14356,inst_14344);
var inst_14344__$1 = inst_14357;
var state_14372__$1 = (function (){var statearr_14387 = state_14372;
(statearr_14387[(10)] = inst_14344__$1);

return statearr_14387;
})();
var statearr_14388_14407 = state_14372__$1;
(statearr_14388_14407[(2)] = null);

(statearr_14388_14407[(1)] = (2));


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
});})(c__6916__auto___14397,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14397,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14392 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14392[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14392[(1)] = (1));

return statearr_14392;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14372){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14393){if((e14393 instanceof Object)){
var ex__6858__auto__ = e14393;
var statearr_14394_14408 = state_14372;
(statearr_14394_14408[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14409 = state_14372;
state_14372 = G__14409;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14397,out))
})();
var state__6918__auto__ = (function (){var statearr_14395 = f__6917__auto__.call(null);
(statearr_14395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14397);

return statearr_14395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14397,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__14411 = arguments.length;
switch (G__14411) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6916__auto___14459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14459,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14459,out){
return (function (state_14435){
var state_val_14436 = (state_14435[(1)]);
if((state_val_14436 === (7))){
var inst_14417 = (state_14435[(7)]);
var inst_14417__$1 = (state_14435[(2)]);
var inst_14418 = (inst_14417__$1 == null);
var inst_14419 = cljs.core.not.call(null,inst_14418);
var state_14435__$1 = (function (){var statearr_14437 = state_14435;
(statearr_14437[(7)] = inst_14417__$1);

return statearr_14437;
})();
if(inst_14419){
var statearr_14438_14460 = state_14435__$1;
(statearr_14438_14460[(1)] = (8));

} else {
var statearr_14439_14461 = state_14435__$1;
(statearr_14439_14461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (1))){
var inst_14412 = (0);
var state_14435__$1 = (function (){var statearr_14440 = state_14435;
(statearr_14440[(8)] = inst_14412);

return statearr_14440;
})();
var statearr_14441_14462 = state_14435__$1;
(statearr_14441_14462[(2)] = null);

(statearr_14441_14462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (4))){
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14435__$1,(7),ch);
} else {
if((state_val_14436 === (6))){
var inst_14430 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14442_14463 = state_14435__$1;
(statearr_14442_14463[(2)] = inst_14430);

(statearr_14442_14463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (3))){
var inst_14432 = (state_14435[(2)]);
var inst_14433 = cljs.core.async.close_BANG_.call(null,out);
var state_14435__$1 = (function (){var statearr_14443 = state_14435;
(statearr_14443[(9)] = inst_14432);

return statearr_14443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14435__$1,inst_14433);
} else {
if((state_val_14436 === (2))){
var inst_14412 = (state_14435[(8)]);
var inst_14414 = (inst_14412 < n);
var state_14435__$1 = state_14435;
if(cljs.core.truth_(inst_14414)){
var statearr_14444_14464 = state_14435__$1;
(statearr_14444_14464[(1)] = (4));

} else {
var statearr_14445_14465 = state_14435__$1;
(statearr_14445_14465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (11))){
var inst_14412 = (state_14435[(8)]);
var inst_14422 = (state_14435[(2)]);
var inst_14423 = (inst_14412 + (1));
var inst_14412__$1 = inst_14423;
var state_14435__$1 = (function (){var statearr_14446 = state_14435;
(statearr_14446[(10)] = inst_14422);

(statearr_14446[(8)] = inst_14412__$1);

return statearr_14446;
})();
var statearr_14447_14466 = state_14435__$1;
(statearr_14447_14466[(2)] = null);

(statearr_14447_14466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (9))){
var state_14435__$1 = state_14435;
var statearr_14448_14467 = state_14435__$1;
(statearr_14448_14467[(2)] = null);

(statearr_14448_14467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (5))){
var state_14435__$1 = state_14435;
var statearr_14449_14468 = state_14435__$1;
(statearr_14449_14468[(2)] = null);

(statearr_14449_14468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (10))){
var inst_14427 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
var statearr_14450_14469 = state_14435__$1;
(statearr_14450_14469[(2)] = inst_14427);

(statearr_14450_14469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (8))){
var inst_14417 = (state_14435[(7)]);
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14435__$1,(11),out,inst_14417);
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
});})(c__6916__auto___14459,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14459,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14454[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14454[(1)] = (1));

return statearr_14454;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14435){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14455){if((e14455 instanceof Object)){
var ex__6858__auto__ = e14455;
var statearr_14456_14470 = state_14435;
(statearr_14456_14470[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14471 = state_14435;
state_14435 = G__14471;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14459,out))
})();
var state__6918__auto__ = (function (){var statearr_14457 = f__6917__auto__.call(null);
(statearr_14457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14459);

return statearr_14457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14459,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14479 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14479 = (function (ch,f,map_LT_,meta14480){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14480 = meta14480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14482 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14482 = (function (fn1,_,meta14480,map_LT_,f,ch,meta14483){
this.fn1 = fn1;
this._ = _;
this.meta14480 = meta14480;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14483 = meta14483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14482.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14472_SHARP_){
return f1.call(null,(((p1__14472_SHARP_ == null))?null:self__.f.call(null,p1__14472_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14484){
var self__ = this;
var _14484__$1 = this;
return self__.meta14483;
});})(___$1))
;

cljs.core.async.t14482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14484,meta14483__$1){
var self__ = this;
var _14484__$1 = this;
return (new cljs.core.async.t14482(self__.fn1,self__._,self__.meta14480,self__.map_LT_,self__.f,self__.ch,meta14483__$1));
});})(___$1))
;

cljs.core.async.t14482.cljs$lang$type = true;

cljs.core.async.t14482.cljs$lang$ctorStr = "cljs.core.async/t14482";

cljs.core.async.t14482.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14482");
});})(___$1))
;

cljs.core.async.__GT_t14482 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14482(fn1__$1,___$2,meta14480__$1,map_LT___$1,f__$1,ch__$1,meta14483){
return (new cljs.core.async.t14482(fn1__$1,___$2,meta14480__$1,map_LT___$1,f__$1,ch__$1,meta14483));
});})(___$1))
;

}

return (new cljs.core.async.t14482(fn1,___$1,self__.meta14480,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4321__auto__ = ret;
if(cljs.core.truth_(and__4321__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4321__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14481){
var self__ = this;
var _14481__$1 = this;
return self__.meta14480;
});

cljs.core.async.t14479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14481,meta14480__$1){
var self__ = this;
var _14481__$1 = this;
return (new cljs.core.async.t14479(self__.ch,self__.f,self__.map_LT_,meta14480__$1));
});

cljs.core.async.t14479.cljs$lang$type = true;

cljs.core.async.t14479.cljs$lang$ctorStr = "cljs.core.async/t14479";

cljs.core.async.t14479.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14479");
});

cljs.core.async.__GT_t14479 = (function cljs$core$async$map_LT__$___GT_t14479(ch__$1,f__$1,map_LT___$1,meta14480){
return (new cljs.core.async.t14479(ch__$1,f__$1,map_LT___$1,meta14480));
});

}

return (new cljs.core.async.t14479(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14488 = (function (ch,f,map_GT_,meta14489){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14489 = meta14489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14490){
var self__ = this;
var _14490__$1 = this;
return self__.meta14489;
});

cljs.core.async.t14488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14490,meta14489__$1){
var self__ = this;
var _14490__$1 = this;
return (new cljs.core.async.t14488(self__.ch,self__.f,self__.map_GT_,meta14489__$1));
});

cljs.core.async.t14488.cljs$lang$type = true;

cljs.core.async.t14488.cljs$lang$ctorStr = "cljs.core.async/t14488";

cljs.core.async.t14488.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14488");
});

cljs.core.async.__GT_t14488 = (function cljs$core$async$map_GT__$___GT_t14488(ch__$1,f__$1,map_GT___$1,meta14489){
return (new cljs.core.async.t14488(ch__$1,f__$1,map_GT___$1,meta14489));
});

}

return (new cljs.core.async.t14488(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14494 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14494 = (function (ch,p,filter_GT_,meta14495){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14495 = meta14495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14494.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14496){
var self__ = this;
var _14496__$1 = this;
return self__.meta14495;
});

cljs.core.async.t14494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14496,meta14495__$1){
var self__ = this;
var _14496__$1 = this;
return (new cljs.core.async.t14494(self__.ch,self__.p,self__.filter_GT_,meta14495__$1));
});

cljs.core.async.t14494.cljs$lang$type = true;

cljs.core.async.t14494.cljs$lang$ctorStr = "cljs.core.async/t14494";

cljs.core.async.t14494.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14494");
});

cljs.core.async.__GT_t14494 = (function cljs$core$async$filter_GT__$___GT_t14494(ch__$1,p__$1,filter_GT___$1,meta14495){
return (new cljs.core.async.t14494(ch__$1,p__$1,filter_GT___$1,meta14495));
});

}

return (new cljs.core.async.t14494(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__14498 = arguments.length;
switch (G__14498) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6916__auto___14541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14541,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14541,out){
return (function (state_14519){
var state_val_14520 = (state_14519[(1)]);
if((state_val_14520 === (7))){
var inst_14515 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14521_14542 = state_14519__$1;
(statearr_14521_14542[(2)] = inst_14515);

(statearr_14521_14542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (1))){
var state_14519__$1 = state_14519;
var statearr_14522_14543 = state_14519__$1;
(statearr_14522_14543[(2)] = null);

(statearr_14522_14543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (4))){
var inst_14501 = (state_14519[(7)]);
var inst_14501__$1 = (state_14519[(2)]);
var inst_14502 = (inst_14501__$1 == null);
var state_14519__$1 = (function (){var statearr_14523 = state_14519;
(statearr_14523[(7)] = inst_14501__$1);

return statearr_14523;
})();
if(cljs.core.truth_(inst_14502)){
var statearr_14524_14544 = state_14519__$1;
(statearr_14524_14544[(1)] = (5));

} else {
var statearr_14525_14545 = state_14519__$1;
(statearr_14525_14545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (6))){
var inst_14501 = (state_14519[(7)]);
var inst_14506 = p.call(null,inst_14501);
var state_14519__$1 = state_14519;
if(cljs.core.truth_(inst_14506)){
var statearr_14526_14546 = state_14519__$1;
(statearr_14526_14546[(1)] = (8));

} else {
var statearr_14527_14547 = state_14519__$1;
(statearr_14527_14547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (3))){
var inst_14517 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14519__$1,inst_14517);
} else {
if((state_val_14520 === (2))){
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14519__$1,(4),ch);
} else {
if((state_val_14520 === (11))){
var inst_14509 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14528_14548 = state_14519__$1;
(statearr_14528_14548[(2)] = inst_14509);

(statearr_14528_14548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (9))){
var state_14519__$1 = state_14519;
var statearr_14529_14549 = state_14519__$1;
(statearr_14529_14549[(2)] = null);

(statearr_14529_14549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (5))){
var inst_14504 = cljs.core.async.close_BANG_.call(null,out);
var state_14519__$1 = state_14519;
var statearr_14530_14550 = state_14519__$1;
(statearr_14530_14550[(2)] = inst_14504);

(statearr_14530_14550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (10))){
var inst_14512 = (state_14519[(2)]);
var state_14519__$1 = (function (){var statearr_14531 = state_14519;
(statearr_14531[(8)] = inst_14512);

return statearr_14531;
})();
var statearr_14532_14551 = state_14519__$1;
(statearr_14532_14551[(2)] = null);

(statearr_14532_14551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (8))){
var inst_14501 = (state_14519[(7)]);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14519__$1,(11),out,inst_14501);
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
});})(c__6916__auto___14541,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14541,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14536 = [null,null,null,null,null,null,null,null,null];
(statearr_14536[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14536[(1)] = (1));

return statearr_14536;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14519){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14537){if((e14537 instanceof Object)){
var ex__6858__auto__ = e14537;
var statearr_14538_14552 = state_14519;
(statearr_14538_14552[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14553 = state_14519;
state_14519 = G__14553;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14541,out))
})();
var state__6918__auto__ = (function (){var statearr_14539 = f__6917__auto__.call(null);
(statearr_14539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14541);

return statearr_14539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14541,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__14555 = arguments.length;
switch (G__14555) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_14722){
var state_val_14723 = (state_14722[(1)]);
if((state_val_14723 === (7))){
var inst_14718 = (state_14722[(2)]);
var state_14722__$1 = state_14722;
var statearr_14724_14765 = state_14722__$1;
(statearr_14724_14765[(2)] = inst_14718);

(statearr_14724_14765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (20))){
var inst_14688 = (state_14722[(7)]);
var inst_14699 = (state_14722[(2)]);
var inst_14700 = cljs.core.next.call(null,inst_14688);
var inst_14674 = inst_14700;
var inst_14675 = null;
var inst_14676 = (0);
var inst_14677 = (0);
var state_14722__$1 = (function (){var statearr_14725 = state_14722;
(statearr_14725[(8)] = inst_14699);

(statearr_14725[(9)] = inst_14674);

(statearr_14725[(10)] = inst_14675);

(statearr_14725[(11)] = inst_14677);

(statearr_14725[(12)] = inst_14676);

return statearr_14725;
})();
var statearr_14726_14766 = state_14722__$1;
(statearr_14726_14766[(2)] = null);

(statearr_14726_14766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (1))){
var state_14722__$1 = state_14722;
var statearr_14727_14767 = state_14722__$1;
(statearr_14727_14767[(2)] = null);

(statearr_14727_14767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (4))){
var inst_14663 = (state_14722[(13)]);
var inst_14663__$1 = (state_14722[(2)]);
var inst_14664 = (inst_14663__$1 == null);
var state_14722__$1 = (function (){var statearr_14728 = state_14722;
(statearr_14728[(13)] = inst_14663__$1);

return statearr_14728;
})();
if(cljs.core.truth_(inst_14664)){
var statearr_14729_14768 = state_14722__$1;
(statearr_14729_14768[(1)] = (5));

} else {
var statearr_14730_14769 = state_14722__$1;
(statearr_14730_14769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (15))){
var state_14722__$1 = state_14722;
var statearr_14734_14770 = state_14722__$1;
(statearr_14734_14770[(2)] = null);

(statearr_14734_14770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (21))){
var state_14722__$1 = state_14722;
var statearr_14735_14771 = state_14722__$1;
(statearr_14735_14771[(2)] = null);

(statearr_14735_14771[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (13))){
var inst_14674 = (state_14722[(9)]);
var inst_14675 = (state_14722[(10)]);
var inst_14677 = (state_14722[(11)]);
var inst_14676 = (state_14722[(12)]);
var inst_14684 = (state_14722[(2)]);
var inst_14685 = (inst_14677 + (1));
var tmp14731 = inst_14674;
var tmp14732 = inst_14675;
var tmp14733 = inst_14676;
var inst_14674__$1 = tmp14731;
var inst_14675__$1 = tmp14732;
var inst_14676__$1 = tmp14733;
var inst_14677__$1 = inst_14685;
var state_14722__$1 = (function (){var statearr_14736 = state_14722;
(statearr_14736[(9)] = inst_14674__$1);

(statearr_14736[(10)] = inst_14675__$1);

(statearr_14736[(14)] = inst_14684);

(statearr_14736[(11)] = inst_14677__$1);

(statearr_14736[(12)] = inst_14676__$1);

return statearr_14736;
})();
var statearr_14737_14772 = state_14722__$1;
(statearr_14737_14772[(2)] = null);

(statearr_14737_14772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (22))){
var state_14722__$1 = state_14722;
var statearr_14738_14773 = state_14722__$1;
(statearr_14738_14773[(2)] = null);

(statearr_14738_14773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (6))){
var inst_14663 = (state_14722[(13)]);
var inst_14672 = f.call(null,inst_14663);
var inst_14673 = cljs.core.seq.call(null,inst_14672);
var inst_14674 = inst_14673;
var inst_14675 = null;
var inst_14676 = (0);
var inst_14677 = (0);
var state_14722__$1 = (function (){var statearr_14739 = state_14722;
(statearr_14739[(9)] = inst_14674);

(statearr_14739[(10)] = inst_14675);

(statearr_14739[(11)] = inst_14677);

(statearr_14739[(12)] = inst_14676);

return statearr_14739;
})();
var statearr_14740_14774 = state_14722__$1;
(statearr_14740_14774[(2)] = null);

(statearr_14740_14774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (17))){
var inst_14688 = (state_14722[(7)]);
var inst_14692 = cljs.core.chunk_first.call(null,inst_14688);
var inst_14693 = cljs.core.chunk_rest.call(null,inst_14688);
var inst_14694 = cljs.core.count.call(null,inst_14692);
var inst_14674 = inst_14693;
var inst_14675 = inst_14692;
var inst_14676 = inst_14694;
var inst_14677 = (0);
var state_14722__$1 = (function (){var statearr_14741 = state_14722;
(statearr_14741[(9)] = inst_14674);

(statearr_14741[(10)] = inst_14675);

(statearr_14741[(11)] = inst_14677);

(statearr_14741[(12)] = inst_14676);

return statearr_14741;
})();
var statearr_14742_14775 = state_14722__$1;
(statearr_14742_14775[(2)] = null);

(statearr_14742_14775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (3))){
var inst_14720 = (state_14722[(2)]);
var state_14722__$1 = state_14722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14722__$1,inst_14720);
} else {
if((state_val_14723 === (12))){
var inst_14708 = (state_14722[(2)]);
var state_14722__$1 = state_14722;
var statearr_14743_14776 = state_14722__$1;
(statearr_14743_14776[(2)] = inst_14708);

(statearr_14743_14776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (2))){
var state_14722__$1 = state_14722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14722__$1,(4),in$);
} else {
if((state_val_14723 === (23))){
var inst_14716 = (state_14722[(2)]);
var state_14722__$1 = state_14722;
var statearr_14744_14777 = state_14722__$1;
(statearr_14744_14777[(2)] = inst_14716);

(statearr_14744_14777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (19))){
var inst_14703 = (state_14722[(2)]);
var state_14722__$1 = state_14722;
var statearr_14745_14778 = state_14722__$1;
(statearr_14745_14778[(2)] = inst_14703);

(statearr_14745_14778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (11))){
var inst_14688 = (state_14722[(7)]);
var inst_14674 = (state_14722[(9)]);
var inst_14688__$1 = cljs.core.seq.call(null,inst_14674);
var state_14722__$1 = (function (){var statearr_14746 = state_14722;
(statearr_14746[(7)] = inst_14688__$1);

return statearr_14746;
})();
if(inst_14688__$1){
var statearr_14747_14779 = state_14722__$1;
(statearr_14747_14779[(1)] = (14));

} else {
var statearr_14748_14780 = state_14722__$1;
(statearr_14748_14780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (9))){
var inst_14710 = (state_14722[(2)]);
var inst_14711 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14722__$1 = (function (){var statearr_14749 = state_14722;
(statearr_14749[(15)] = inst_14710);

return statearr_14749;
})();
if(cljs.core.truth_(inst_14711)){
var statearr_14750_14781 = state_14722__$1;
(statearr_14750_14781[(1)] = (21));

} else {
var statearr_14751_14782 = state_14722__$1;
(statearr_14751_14782[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (5))){
var inst_14666 = cljs.core.async.close_BANG_.call(null,out);
var state_14722__$1 = state_14722;
var statearr_14752_14783 = state_14722__$1;
(statearr_14752_14783[(2)] = inst_14666);

(statearr_14752_14783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (14))){
var inst_14688 = (state_14722[(7)]);
var inst_14690 = cljs.core.chunked_seq_QMARK_.call(null,inst_14688);
var state_14722__$1 = state_14722;
if(inst_14690){
var statearr_14753_14784 = state_14722__$1;
(statearr_14753_14784[(1)] = (17));

} else {
var statearr_14754_14785 = state_14722__$1;
(statearr_14754_14785[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (16))){
var inst_14706 = (state_14722[(2)]);
var state_14722__$1 = state_14722;
var statearr_14755_14786 = state_14722__$1;
(statearr_14755_14786[(2)] = inst_14706);

(statearr_14755_14786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14723 === (10))){
var inst_14675 = (state_14722[(10)]);
var inst_14677 = (state_14722[(11)]);
var inst_14682 = cljs.core._nth.call(null,inst_14675,inst_14677);
var state_14722__$1 = state_14722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14722__$1,(13),out,inst_14682);
} else {
if((state_val_14723 === (18))){
var inst_14688 = (state_14722[(7)]);
var inst_14697 = cljs.core.first.call(null,inst_14688);
var state_14722__$1 = state_14722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14722__$1,(20),out,inst_14697);
} else {
if((state_val_14723 === (8))){
var inst_14677 = (state_14722[(11)]);
var inst_14676 = (state_14722[(12)]);
var inst_14679 = (inst_14677 < inst_14676);
var inst_14680 = inst_14679;
var state_14722__$1 = state_14722;
if(cljs.core.truth_(inst_14680)){
var statearr_14756_14787 = state_14722__$1;
(statearr_14756_14787[(1)] = (10));

} else {
var statearr_14757_14788 = state_14722__$1;
(statearr_14757_14788[(1)] = (11));

}

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
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_14761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14761[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__);

(statearr_14761[(1)] = (1));

return statearr_14761;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____1 = (function (state_14722){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14762){if((e14762 instanceof Object)){
var ex__6858__auto__ = e14762;
var statearr_14763_14789 = state_14722;
(statearr_14763_14789[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14790 = state_14722;
state_14722 = G__14790;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__ = function(state_14722){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____1.call(this,state_14722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_14764 = f__6917__auto__.call(null);
(statearr_14764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_14764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__14792 = arguments.length;
switch (G__14792) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__14795 = arguments.length;
switch (G__14795) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__14798 = arguments.length;
switch (G__14798) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6916__auto___14848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14848,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14848,out){
return (function (state_14822){
var state_val_14823 = (state_14822[(1)]);
if((state_val_14823 === (7))){
var inst_14817 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14824_14849 = state_14822__$1;
(statearr_14824_14849[(2)] = inst_14817);

(statearr_14824_14849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (1))){
var inst_14799 = null;
var state_14822__$1 = (function (){var statearr_14825 = state_14822;
(statearr_14825[(7)] = inst_14799);

return statearr_14825;
})();
var statearr_14826_14850 = state_14822__$1;
(statearr_14826_14850[(2)] = null);

(statearr_14826_14850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (4))){
var inst_14802 = (state_14822[(8)]);
var inst_14802__$1 = (state_14822[(2)]);
var inst_14803 = (inst_14802__$1 == null);
var inst_14804 = cljs.core.not.call(null,inst_14803);
var state_14822__$1 = (function (){var statearr_14827 = state_14822;
(statearr_14827[(8)] = inst_14802__$1);

return statearr_14827;
})();
if(inst_14804){
var statearr_14828_14851 = state_14822__$1;
(statearr_14828_14851[(1)] = (5));

} else {
var statearr_14829_14852 = state_14822__$1;
(statearr_14829_14852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (6))){
var state_14822__$1 = state_14822;
var statearr_14830_14853 = state_14822__$1;
(statearr_14830_14853[(2)] = null);

(statearr_14830_14853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (3))){
var inst_14819 = (state_14822[(2)]);
var inst_14820 = cljs.core.async.close_BANG_.call(null,out);
var state_14822__$1 = (function (){var statearr_14831 = state_14822;
(statearr_14831[(9)] = inst_14819);

return statearr_14831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14822__$1,inst_14820);
} else {
if((state_val_14823 === (2))){
var state_14822__$1 = state_14822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14822__$1,(4),ch);
} else {
if((state_val_14823 === (11))){
var inst_14802 = (state_14822[(8)]);
var inst_14811 = (state_14822[(2)]);
var inst_14799 = inst_14802;
var state_14822__$1 = (function (){var statearr_14832 = state_14822;
(statearr_14832[(7)] = inst_14799);

(statearr_14832[(10)] = inst_14811);

return statearr_14832;
})();
var statearr_14833_14854 = state_14822__$1;
(statearr_14833_14854[(2)] = null);

(statearr_14833_14854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (9))){
var inst_14802 = (state_14822[(8)]);
var state_14822__$1 = state_14822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14822__$1,(11),out,inst_14802);
} else {
if((state_val_14823 === (5))){
var inst_14799 = (state_14822[(7)]);
var inst_14802 = (state_14822[(8)]);
var inst_14806 = cljs.core._EQ_.call(null,inst_14802,inst_14799);
var state_14822__$1 = state_14822;
if(inst_14806){
var statearr_14835_14855 = state_14822__$1;
(statearr_14835_14855[(1)] = (8));

} else {
var statearr_14836_14856 = state_14822__$1;
(statearr_14836_14856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (10))){
var inst_14814 = (state_14822[(2)]);
var state_14822__$1 = state_14822;
var statearr_14837_14857 = state_14822__$1;
(statearr_14837_14857[(2)] = inst_14814);

(statearr_14837_14857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14823 === (8))){
var inst_14799 = (state_14822[(7)]);
var tmp14834 = inst_14799;
var inst_14799__$1 = tmp14834;
var state_14822__$1 = (function (){var statearr_14838 = state_14822;
(statearr_14838[(7)] = inst_14799__$1);

return statearr_14838;
})();
var statearr_14839_14858 = state_14822__$1;
(statearr_14839_14858[(2)] = null);

(statearr_14839_14858[(1)] = (2));


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
});})(c__6916__auto___14848,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14848,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14843[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14843[(1)] = (1));

return statearr_14843;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14822){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14844){if((e14844 instanceof Object)){
var ex__6858__auto__ = e14844;
var statearr_14845_14859 = state_14822;
(statearr_14845_14859[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14860 = state_14822;
state_14822 = G__14860;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14848,out))
})();
var state__6918__auto__ = (function (){var statearr_14846 = f__6917__auto__.call(null);
(statearr_14846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14848);

return statearr_14846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14848,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__14862 = arguments.length;
switch (G__14862) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6916__auto___14931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14931,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14931,out){
return (function (state_14900){
var state_val_14901 = (state_14900[(1)]);
if((state_val_14901 === (7))){
var inst_14896 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14902_14932 = state_14900__$1;
(statearr_14902_14932[(2)] = inst_14896);

(statearr_14902_14932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (1))){
var inst_14863 = (new Array(n));
var inst_14864 = inst_14863;
var inst_14865 = (0);
var state_14900__$1 = (function (){var statearr_14903 = state_14900;
(statearr_14903[(7)] = inst_14864);

(statearr_14903[(8)] = inst_14865);

return statearr_14903;
})();
var statearr_14904_14933 = state_14900__$1;
(statearr_14904_14933[(2)] = null);

(statearr_14904_14933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (4))){
var inst_14868 = (state_14900[(9)]);
var inst_14868__$1 = (state_14900[(2)]);
var inst_14869 = (inst_14868__$1 == null);
var inst_14870 = cljs.core.not.call(null,inst_14869);
var state_14900__$1 = (function (){var statearr_14905 = state_14900;
(statearr_14905[(9)] = inst_14868__$1);

return statearr_14905;
})();
if(inst_14870){
var statearr_14906_14934 = state_14900__$1;
(statearr_14906_14934[(1)] = (5));

} else {
var statearr_14907_14935 = state_14900__$1;
(statearr_14907_14935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (15))){
var inst_14890 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14908_14936 = state_14900__$1;
(statearr_14908_14936[(2)] = inst_14890);

(statearr_14908_14936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (13))){
var state_14900__$1 = state_14900;
var statearr_14909_14937 = state_14900__$1;
(statearr_14909_14937[(2)] = null);

(statearr_14909_14937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (6))){
var inst_14865 = (state_14900[(8)]);
var inst_14886 = (inst_14865 > (0));
var state_14900__$1 = state_14900;
if(cljs.core.truth_(inst_14886)){
var statearr_14910_14938 = state_14900__$1;
(statearr_14910_14938[(1)] = (12));

} else {
var statearr_14911_14939 = state_14900__$1;
(statearr_14911_14939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (3))){
var inst_14898 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14900__$1,inst_14898);
} else {
if((state_val_14901 === (12))){
var inst_14864 = (state_14900[(7)]);
var inst_14888 = cljs.core.vec.call(null,inst_14864);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14900__$1,(15),out,inst_14888);
} else {
if((state_val_14901 === (2))){
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14900__$1,(4),ch);
} else {
if((state_val_14901 === (11))){
var inst_14880 = (state_14900[(2)]);
var inst_14881 = (new Array(n));
var inst_14864 = inst_14881;
var inst_14865 = (0);
var state_14900__$1 = (function (){var statearr_14912 = state_14900;
(statearr_14912[(7)] = inst_14864);

(statearr_14912[(8)] = inst_14865);

(statearr_14912[(10)] = inst_14880);

return statearr_14912;
})();
var statearr_14913_14940 = state_14900__$1;
(statearr_14913_14940[(2)] = null);

(statearr_14913_14940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (9))){
var inst_14864 = (state_14900[(7)]);
var inst_14878 = cljs.core.vec.call(null,inst_14864);
var state_14900__$1 = state_14900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14900__$1,(11),out,inst_14878);
} else {
if((state_val_14901 === (5))){
var inst_14864 = (state_14900[(7)]);
var inst_14868 = (state_14900[(9)]);
var inst_14865 = (state_14900[(8)]);
var inst_14873 = (state_14900[(11)]);
var inst_14872 = (inst_14864[inst_14865] = inst_14868);
var inst_14873__$1 = (inst_14865 + (1));
var inst_14874 = (inst_14873__$1 < n);
var state_14900__$1 = (function (){var statearr_14914 = state_14900;
(statearr_14914[(12)] = inst_14872);

(statearr_14914[(11)] = inst_14873__$1);

return statearr_14914;
})();
if(cljs.core.truth_(inst_14874)){
var statearr_14915_14941 = state_14900__$1;
(statearr_14915_14941[(1)] = (8));

} else {
var statearr_14916_14942 = state_14900__$1;
(statearr_14916_14942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (14))){
var inst_14893 = (state_14900[(2)]);
var inst_14894 = cljs.core.async.close_BANG_.call(null,out);
var state_14900__$1 = (function (){var statearr_14918 = state_14900;
(statearr_14918[(13)] = inst_14893);

return statearr_14918;
})();
var statearr_14919_14943 = state_14900__$1;
(statearr_14919_14943[(2)] = inst_14894);

(statearr_14919_14943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (10))){
var inst_14884 = (state_14900[(2)]);
var state_14900__$1 = state_14900;
var statearr_14920_14944 = state_14900__$1;
(statearr_14920_14944[(2)] = inst_14884);

(statearr_14920_14944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14901 === (8))){
var inst_14864 = (state_14900[(7)]);
var inst_14873 = (state_14900[(11)]);
var tmp14917 = inst_14864;
var inst_14864__$1 = tmp14917;
var inst_14865 = inst_14873;
var state_14900__$1 = (function (){var statearr_14921 = state_14900;
(statearr_14921[(7)] = inst_14864__$1);

(statearr_14921[(8)] = inst_14865);

return statearr_14921;
})();
var statearr_14922_14945 = state_14900__$1;
(statearr_14922_14945[(2)] = null);

(statearr_14922_14945[(1)] = (2));


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
});})(c__6916__auto___14931,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14931,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14926[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14926[(1)] = (1));

return statearr_14926;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14900){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14927){if((e14927 instanceof Object)){
var ex__6858__auto__ = e14927;
var statearr_14928_14946 = state_14900;
(statearr_14928_14946[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14947 = state_14900;
state_14900 = G__14947;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14931,out))
})();
var state__6918__auto__ = (function (){var statearr_14929 = f__6917__auto__.call(null);
(statearr_14929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14931);

return statearr_14929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14931,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__14949 = arguments.length;
switch (G__14949) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6916__auto___15022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___15022,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___15022,out){
return (function (state_14991){
var state_val_14992 = (state_14991[(1)]);
if((state_val_14992 === (7))){
var inst_14987 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14993_15023 = state_14991__$1;
(statearr_14993_15023[(2)] = inst_14987);

(statearr_14993_15023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (1))){
var inst_14950 = [];
var inst_14951 = inst_14950;
var inst_14952 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14991__$1 = (function (){var statearr_14994 = state_14991;
(statearr_14994[(7)] = inst_14951);

(statearr_14994[(8)] = inst_14952);

return statearr_14994;
})();
var statearr_14995_15024 = state_14991__$1;
(statearr_14995_15024[(2)] = null);

(statearr_14995_15024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (4))){
var inst_14955 = (state_14991[(9)]);
var inst_14955__$1 = (state_14991[(2)]);
var inst_14956 = (inst_14955__$1 == null);
var inst_14957 = cljs.core.not.call(null,inst_14956);
var state_14991__$1 = (function (){var statearr_14996 = state_14991;
(statearr_14996[(9)] = inst_14955__$1);

return statearr_14996;
})();
if(inst_14957){
var statearr_14997_15025 = state_14991__$1;
(statearr_14997_15025[(1)] = (5));

} else {
var statearr_14998_15026 = state_14991__$1;
(statearr_14998_15026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (15))){
var inst_14981 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14999_15027 = state_14991__$1;
(statearr_14999_15027[(2)] = inst_14981);

(statearr_14999_15027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (13))){
var state_14991__$1 = state_14991;
var statearr_15000_15028 = state_14991__$1;
(statearr_15000_15028[(2)] = null);

(statearr_15000_15028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (6))){
var inst_14951 = (state_14991[(7)]);
var inst_14976 = inst_14951.length;
var inst_14977 = (inst_14976 > (0));
var state_14991__$1 = state_14991;
if(cljs.core.truth_(inst_14977)){
var statearr_15001_15029 = state_14991__$1;
(statearr_15001_15029[(1)] = (12));

} else {
var statearr_15002_15030 = state_14991__$1;
(statearr_15002_15030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (3))){
var inst_14989 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14991__$1,inst_14989);
} else {
if((state_val_14992 === (12))){
var inst_14951 = (state_14991[(7)]);
var inst_14979 = cljs.core.vec.call(null,inst_14951);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14991__$1,(15),out,inst_14979);
} else {
if((state_val_14992 === (2))){
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14991__$1,(4),ch);
} else {
if((state_val_14992 === (11))){
var inst_14955 = (state_14991[(9)]);
var inst_14959 = (state_14991[(10)]);
var inst_14969 = (state_14991[(2)]);
var inst_14970 = [];
var inst_14971 = inst_14970.push(inst_14955);
var inst_14951 = inst_14970;
var inst_14952 = inst_14959;
var state_14991__$1 = (function (){var statearr_15003 = state_14991;
(statearr_15003[(7)] = inst_14951);

(statearr_15003[(11)] = inst_14969);

(statearr_15003[(12)] = inst_14971);

(statearr_15003[(8)] = inst_14952);

return statearr_15003;
})();
var statearr_15004_15031 = state_14991__$1;
(statearr_15004_15031[(2)] = null);

(statearr_15004_15031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (9))){
var inst_14951 = (state_14991[(7)]);
var inst_14967 = cljs.core.vec.call(null,inst_14951);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14991__$1,(11),out,inst_14967);
} else {
if((state_val_14992 === (5))){
var inst_14955 = (state_14991[(9)]);
var inst_14952 = (state_14991[(8)]);
var inst_14959 = (state_14991[(10)]);
var inst_14959__$1 = f.call(null,inst_14955);
var inst_14960 = cljs.core._EQ_.call(null,inst_14959__$1,inst_14952);
var inst_14961 = cljs.core.keyword_identical_QMARK_.call(null,inst_14952,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14962 = (inst_14960) || (inst_14961);
var state_14991__$1 = (function (){var statearr_15005 = state_14991;
(statearr_15005[(10)] = inst_14959__$1);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14962)){
var statearr_15006_15032 = state_14991__$1;
(statearr_15006_15032[(1)] = (8));

} else {
var statearr_15007_15033 = state_14991__$1;
(statearr_15007_15033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (14))){
var inst_14984 = (state_14991[(2)]);
var inst_14985 = cljs.core.async.close_BANG_.call(null,out);
var state_14991__$1 = (function (){var statearr_15009 = state_14991;
(statearr_15009[(13)] = inst_14984);

return statearr_15009;
})();
var statearr_15010_15034 = state_14991__$1;
(statearr_15010_15034[(2)] = inst_14985);

(statearr_15010_15034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (10))){
var inst_14974 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_15011_15035 = state_14991__$1;
(statearr_15011_15035[(2)] = inst_14974);

(statearr_15011_15035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (8))){
var inst_14951 = (state_14991[(7)]);
var inst_14955 = (state_14991[(9)]);
var inst_14959 = (state_14991[(10)]);
var inst_14964 = inst_14951.push(inst_14955);
var tmp15008 = inst_14951;
var inst_14951__$1 = tmp15008;
var inst_14952 = inst_14959;
var state_14991__$1 = (function (){var statearr_15012 = state_14991;
(statearr_15012[(7)] = inst_14951__$1);

(statearr_15012[(14)] = inst_14964);

(statearr_15012[(8)] = inst_14952);

return statearr_15012;
})();
var statearr_15013_15036 = state_14991__$1;
(statearr_15013_15036[(2)] = null);

(statearr_15013_15036[(1)] = (2));


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
});})(c__6916__auto___15022,out))
;
return ((function (switch__6854__auto__,c__6916__auto___15022,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_15017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15017[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_15017[(1)] = (1));

return statearr_15017;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14991){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e15018){if((e15018 instanceof Object)){
var ex__6858__auto__ = e15018;
var statearr_15019_15037 = state_14991;
(statearr_15019_15037[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15038 = state_14991;
state_14991 = G__15038;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___15022,out))
})();
var state__6918__auto__ = (function (){var statearr_15020 = f__6917__auto__.call(null);
(statearr_15020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___15022);

return statearr_15020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___15022,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440297547767