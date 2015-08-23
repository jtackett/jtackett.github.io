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
if(typeof cljs.core.async.t12557 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12557 = (function (f,fn_handler,meta12558){
this.f = f;
this.fn_handler = fn_handler;
this.meta12558 = meta12558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12557.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12559){
var self__ = this;
var _12559__$1 = this;
return self__.meta12558;
});

cljs.core.async.t12557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12559,meta12558__$1){
var self__ = this;
var _12559__$1 = this;
return (new cljs.core.async.t12557(self__.f,self__.fn_handler,meta12558__$1));
});

cljs.core.async.t12557.cljs$lang$type = true;

cljs.core.async.t12557.cljs$lang$ctorStr = "cljs.core.async/t12557";

cljs.core.async.t12557.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12557");
});

cljs.core.async.__GT_t12557 = (function cljs$core$async$fn_handler_$___GT_t12557(f__$1,fn_handler__$1,meta12558){
return (new cljs.core.async.t12557(f__$1,fn_handler__$1,meta12558));
});

}

return (new cljs.core.async.t12557(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12561 = buff;
if(G__12561){
var bit__5007__auto__ = null;
if(cljs.core.truth_((function (){var or__4333__auto__ = bit__5007__auto__;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return G__12561.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12561.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12561);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12561);
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
var G__12563 = arguments.length;
switch (G__12563) {
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
var G__12566 = arguments.length;
switch (G__12566) {
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
var val_12568 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12568);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12568,ret){
return (function (){
return fn1.call(null,val_12568);
});})(val_12568,ret))
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
var G__12570 = arguments.length;
switch (G__12570) {
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
var n__5218__auto___12572 = n;
var x_12573 = (0);
while(true){
if((x_12573 < n__5218__auto___12572)){
(a[x_12573] = (0));

var G__12574 = (x_12573 + (1));
x_12573 = G__12574;
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

var G__12575 = (i + (1));
i = G__12575;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12579 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12579 = (function (flag,alt_flag,meta12580){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12580 = meta12580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12579.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12581){
var self__ = this;
var _12581__$1 = this;
return self__.meta12580;
});})(flag))
;

cljs.core.async.t12579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12581,meta12580__$1){
var self__ = this;
var _12581__$1 = this;
return (new cljs.core.async.t12579(self__.flag,self__.alt_flag,meta12580__$1));
});})(flag))
;

cljs.core.async.t12579.cljs$lang$type = true;

cljs.core.async.t12579.cljs$lang$ctorStr = "cljs.core.async/t12579";

cljs.core.async.t12579.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12579");
});})(flag))
;

cljs.core.async.__GT_t12579 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12579(flag__$1,alt_flag__$1,meta12580){
return (new cljs.core.async.t12579(flag__$1,alt_flag__$1,meta12580));
});})(flag))
;

}

return (new cljs.core.async.t12579(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12585 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12585 = (function (cb,flag,alt_handler,meta12586){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12586 = meta12586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12587){
var self__ = this;
var _12587__$1 = this;
return self__.meta12586;
});

cljs.core.async.t12585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12587,meta12586__$1){
var self__ = this;
var _12587__$1 = this;
return (new cljs.core.async.t12585(self__.cb,self__.flag,self__.alt_handler,meta12586__$1));
});

cljs.core.async.t12585.cljs$lang$type = true;

cljs.core.async.t12585.cljs$lang$ctorStr = "cljs.core.async/t12585";

cljs.core.async.t12585.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12585");
});

cljs.core.async.__GT_t12585 = (function cljs$core$async$alt_handler_$___GT_t12585(cb__$1,flag__$1,alt_handler__$1,meta12586){
return (new cljs.core.async.t12585(cb__$1,flag__$1,alt_handler__$1,meta12586));
});

}

return (new cljs.core.async.t12585(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12588_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12589_SHARP_,port], null));
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
var G__12590 = (i + (1));
i = G__12590;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12593){
var map__12594 = p__12593;
var map__12594__$1 = ((cljs.core.seq_QMARK_.call(null,map__12594))?cljs.core.apply.call(null,cljs.core.hash_map,map__12594):map__12594);
var opts = map__12594__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12591){
var G__12592 = cljs.core.first.call(null,seq12591);
var seq12591__$1 = cljs.core.next.call(null,seq12591);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12592,seq12591__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__12596 = arguments.length;
switch (G__12596) {
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
var c__6916__auto___12645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___12645){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___12645){
return (function (state_12620){
var state_val_12621 = (state_12620[(1)]);
if((state_val_12621 === (7))){
var inst_12616 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
var statearr_12622_12646 = state_12620__$1;
(statearr_12622_12646[(2)] = inst_12616);

(statearr_12622_12646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (1))){
var state_12620__$1 = state_12620;
var statearr_12623_12647 = state_12620__$1;
(statearr_12623_12647[(2)] = null);

(statearr_12623_12647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (4))){
var inst_12599 = (state_12620[(7)]);
var inst_12599__$1 = (state_12620[(2)]);
var inst_12600 = (inst_12599__$1 == null);
var state_12620__$1 = (function (){var statearr_12624 = state_12620;
(statearr_12624[(7)] = inst_12599__$1);

return statearr_12624;
})();
if(cljs.core.truth_(inst_12600)){
var statearr_12625_12648 = state_12620__$1;
(statearr_12625_12648[(1)] = (5));

} else {
var statearr_12626_12649 = state_12620__$1;
(statearr_12626_12649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (13))){
var state_12620__$1 = state_12620;
var statearr_12627_12650 = state_12620__$1;
(statearr_12627_12650[(2)] = null);

(statearr_12627_12650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (6))){
var inst_12599 = (state_12620[(7)]);
var state_12620__$1 = state_12620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12620__$1,(11),to,inst_12599);
} else {
if((state_val_12621 === (3))){
var inst_12618 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12620__$1,inst_12618);
} else {
if((state_val_12621 === (12))){
var state_12620__$1 = state_12620;
var statearr_12628_12651 = state_12620__$1;
(statearr_12628_12651[(2)] = null);

(statearr_12628_12651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (2))){
var state_12620__$1 = state_12620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(4),from);
} else {
if((state_val_12621 === (11))){
var inst_12609 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
if(cljs.core.truth_(inst_12609)){
var statearr_12629_12652 = state_12620__$1;
(statearr_12629_12652[(1)] = (12));

} else {
var statearr_12630_12653 = state_12620__$1;
(statearr_12630_12653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (9))){
var state_12620__$1 = state_12620;
var statearr_12631_12654 = state_12620__$1;
(statearr_12631_12654[(2)] = null);

(statearr_12631_12654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (5))){
var state_12620__$1 = state_12620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12632_12655 = state_12620__$1;
(statearr_12632_12655[(1)] = (8));

} else {
var statearr_12633_12656 = state_12620__$1;
(statearr_12633_12656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (14))){
var inst_12614 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
var statearr_12634_12657 = state_12620__$1;
(statearr_12634_12657[(2)] = inst_12614);

(statearr_12634_12657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (10))){
var inst_12606 = (state_12620[(2)]);
var state_12620__$1 = state_12620;
var statearr_12635_12658 = state_12620__$1;
(statearr_12635_12658[(2)] = inst_12606);

(statearr_12635_12658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12621 === (8))){
var inst_12603 = cljs.core.async.close_BANG_.call(null,to);
var state_12620__$1 = state_12620;
var statearr_12636_12659 = state_12620__$1;
(statearr_12636_12659[(2)] = inst_12603);

(statearr_12636_12659[(1)] = (10));


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
});})(c__6916__auto___12645))
;
return ((function (switch__6854__auto__,c__6916__auto___12645){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_12640 = [null,null,null,null,null,null,null,null];
(statearr_12640[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_12640[(1)] = (1));

return statearr_12640;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_12620){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12641){if((e12641 instanceof Object)){
var ex__6858__auto__ = e12641;
var statearr_12642_12660 = state_12620;
(statearr_12642_12660[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12661 = state_12620;
state_12620 = G__12661;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_12620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_12620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___12645))
})();
var state__6918__auto__ = (function (){var statearr_12643 = f__6917__auto__.call(null);
(statearr_12643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___12645);

return statearr_12643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___12645))
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
return (function (p__12845){
var vec__12846 = p__12845;
var v = cljs.core.nth.call(null,vec__12846,(0),null);
var p = cljs.core.nth.call(null,vec__12846,(1),null);
var job = vec__12846;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6916__auto___13028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13028,res,vec__12846,v,p,job,jobs,results){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13028,res,vec__12846,v,p,job,jobs,results){
return (function (state_12851){
var state_val_12852 = (state_12851[(1)]);
if((state_val_12852 === (2))){
var inst_12848 = (state_12851[(2)]);
var inst_12849 = cljs.core.async.close_BANG_.call(null,res);
var state_12851__$1 = (function (){var statearr_12853 = state_12851;
(statearr_12853[(7)] = inst_12848);

return statearr_12853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12851__$1,inst_12849);
} else {
if((state_val_12852 === (1))){
var state_12851__$1 = state_12851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12851__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6916__auto___13028,res,vec__12846,v,p,job,jobs,results))
;
return ((function (switch__6854__auto__,c__6916__auto___13028,res,vec__12846,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12857 = [null,null,null,null,null,null,null,null];
(statearr_12857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12857[(1)] = (1));

return statearr_12857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12851){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12858){if((e12858 instanceof Object)){
var ex__6858__auto__ = e12858;
var statearr_12859_13029 = state_12851;
(statearr_12859_13029[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13030 = state_12851;
state_12851 = G__13030;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13028,res,vec__12846,v,p,job,jobs,results))
})();
var state__6918__auto__ = (function (){var statearr_12860 = f__6917__auto__.call(null);
(statearr_12860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13028);

return statearr_12860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13028,res,vec__12846,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12861){
var vec__12862 = p__12861;
var v = cljs.core.nth.call(null,vec__12862,(0),null);
var p = cljs.core.nth.call(null,vec__12862,(1),null);
var job = vec__12862;
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
var n__5218__auto___13031 = n;
var __13032 = (0);
while(true){
if((__13032 < n__5218__auto___13031)){
var G__12863_13033 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12863_13033) {
case "async":
var c__6916__auto___13035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13032,c__6916__auto___13035,G__12863_13033,n__5218__auto___13031,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (__13032,c__6916__auto___13035,G__12863_13033,n__5218__auto___13031,jobs,results,process,async){
return (function (state_12876){
var state_val_12877 = (state_12876[(1)]);
if((state_val_12877 === (7))){
var inst_12872 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12878_13036 = state_12876__$1;
(statearr_12878_13036[(2)] = inst_12872);

(statearr_12878_13036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (6))){
var state_12876__$1 = state_12876;
var statearr_12879_13037 = state_12876__$1;
(statearr_12879_13037[(2)] = null);

(statearr_12879_13037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (5))){
var state_12876__$1 = state_12876;
var statearr_12880_13038 = state_12876__$1;
(statearr_12880_13038[(2)] = null);

(statearr_12880_13038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (4))){
var inst_12866 = (state_12876[(2)]);
var inst_12867 = async.call(null,inst_12866);
var state_12876__$1 = state_12876;
if(cljs.core.truth_(inst_12867)){
var statearr_12881_13039 = state_12876__$1;
(statearr_12881_13039[(1)] = (5));

} else {
var statearr_12882_13040 = state_12876__$1;
(statearr_12882_13040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (3))){
var inst_12874 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12876__$1,inst_12874);
} else {
if((state_val_12877 === (2))){
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12876__$1,(4),jobs);
} else {
if((state_val_12877 === (1))){
var state_12876__$1 = state_12876;
var statearr_12883_13041 = state_12876__$1;
(statearr_12883_13041[(2)] = null);

(statearr_12883_13041[(1)] = (2));


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
});})(__13032,c__6916__auto___13035,G__12863_13033,n__5218__auto___13031,jobs,results,process,async))
;
return ((function (__13032,switch__6854__auto__,c__6916__auto___13035,G__12863_13033,n__5218__auto___13031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12887 = [null,null,null,null,null,null,null];
(statearr_12887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12887[(1)] = (1));

return statearr_12887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12876){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12888){if((e12888 instanceof Object)){
var ex__6858__auto__ = e12888;
var statearr_12889_13042 = state_12876;
(statearr_12889_13042[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13043 = state_12876;
state_12876 = G__13043;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(__13032,switch__6854__auto__,c__6916__auto___13035,G__12863_13033,n__5218__auto___13031,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_12890 = f__6917__auto__.call(null);
(statearr_12890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13035);

return statearr_12890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(__13032,c__6916__auto___13035,G__12863_13033,n__5218__auto___13031,jobs,results,process,async))
);


break;
case "compute":
var c__6916__auto___13044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13032,c__6916__auto___13044,G__12863_13033,n__5218__auto___13031,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (__13032,c__6916__auto___13044,G__12863_13033,n__5218__auto___13031,jobs,results,process,async){
return (function (state_12903){
var state_val_12904 = (state_12903[(1)]);
if((state_val_12904 === (7))){
var inst_12899 = (state_12903[(2)]);
var state_12903__$1 = state_12903;
var statearr_12905_13045 = state_12903__$1;
(statearr_12905_13045[(2)] = inst_12899);

(statearr_12905_13045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (6))){
var state_12903__$1 = state_12903;
var statearr_12906_13046 = state_12903__$1;
(statearr_12906_13046[(2)] = null);

(statearr_12906_13046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (5))){
var state_12903__$1 = state_12903;
var statearr_12907_13047 = state_12903__$1;
(statearr_12907_13047[(2)] = null);

(statearr_12907_13047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (4))){
var inst_12893 = (state_12903[(2)]);
var inst_12894 = process.call(null,inst_12893);
var state_12903__$1 = state_12903;
if(cljs.core.truth_(inst_12894)){
var statearr_12908_13048 = state_12903__$1;
(statearr_12908_13048[(1)] = (5));

} else {
var statearr_12909_13049 = state_12903__$1;
(statearr_12909_13049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12904 === (3))){
var inst_12901 = (state_12903[(2)]);
var state_12903__$1 = state_12903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12903__$1,inst_12901);
} else {
if((state_val_12904 === (2))){
var state_12903__$1 = state_12903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12903__$1,(4),jobs);
} else {
if((state_val_12904 === (1))){
var state_12903__$1 = state_12903;
var statearr_12910_13050 = state_12903__$1;
(statearr_12910_13050[(2)] = null);

(statearr_12910_13050[(1)] = (2));


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
});})(__13032,c__6916__auto___13044,G__12863_13033,n__5218__auto___13031,jobs,results,process,async))
;
return ((function (__13032,switch__6854__auto__,c__6916__auto___13044,G__12863_13033,n__5218__auto___13031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12914 = [null,null,null,null,null,null,null];
(statearr_12914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12914[(1)] = (1));

return statearr_12914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12903){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12915){if((e12915 instanceof Object)){
var ex__6858__auto__ = e12915;
var statearr_12916_13051 = state_12903;
(statearr_12916_13051[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13052 = state_12903;
state_12903 = G__13052;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(__13032,switch__6854__auto__,c__6916__auto___13044,G__12863_13033,n__5218__auto___13031,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_12917 = f__6917__auto__.call(null);
(statearr_12917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13044);

return statearr_12917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(__13032,c__6916__auto___13044,G__12863_13033,n__5218__auto___13031,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13053 = (__13032 + (1));
__13032 = G__13053;
continue;
} else {
}
break;
}

var c__6916__auto___13054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13054,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13054,jobs,results,process,async){
return (function (state_12939){
var state_val_12940 = (state_12939[(1)]);
if((state_val_12940 === (9))){
var inst_12932 = (state_12939[(2)]);
var state_12939__$1 = (function (){var statearr_12941 = state_12939;
(statearr_12941[(7)] = inst_12932);

return statearr_12941;
})();
var statearr_12942_13055 = state_12939__$1;
(statearr_12942_13055[(2)] = null);

(statearr_12942_13055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (8))){
var inst_12925 = (state_12939[(8)]);
var inst_12930 = (state_12939[(2)]);
var state_12939__$1 = (function (){var statearr_12943 = state_12939;
(statearr_12943[(9)] = inst_12930);

return statearr_12943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12939__$1,(9),results,inst_12925);
} else {
if((state_val_12940 === (7))){
var inst_12935 = (state_12939[(2)]);
var state_12939__$1 = state_12939;
var statearr_12944_13056 = state_12939__$1;
(statearr_12944_13056[(2)] = inst_12935);

(statearr_12944_13056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (6))){
var inst_12925 = (state_12939[(8)]);
var inst_12920 = (state_12939[(10)]);
var inst_12925__$1 = cljs.core.async.chan.call(null,(1));
var inst_12926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12927 = [inst_12920,inst_12925__$1];
var inst_12928 = (new cljs.core.PersistentVector(null,2,(5),inst_12926,inst_12927,null));
var state_12939__$1 = (function (){var statearr_12945 = state_12939;
(statearr_12945[(8)] = inst_12925__$1);

return statearr_12945;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12939__$1,(8),jobs,inst_12928);
} else {
if((state_val_12940 === (5))){
var inst_12923 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12939__$1 = state_12939;
var statearr_12946_13057 = state_12939__$1;
(statearr_12946_13057[(2)] = inst_12923);

(statearr_12946_13057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (4))){
var inst_12920 = (state_12939[(10)]);
var inst_12920__$1 = (state_12939[(2)]);
var inst_12921 = (inst_12920__$1 == null);
var state_12939__$1 = (function (){var statearr_12947 = state_12939;
(statearr_12947[(10)] = inst_12920__$1);

return statearr_12947;
})();
if(cljs.core.truth_(inst_12921)){
var statearr_12948_13058 = state_12939__$1;
(statearr_12948_13058[(1)] = (5));

} else {
var statearr_12949_13059 = state_12939__$1;
(statearr_12949_13059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (3))){
var inst_12937 = (state_12939[(2)]);
var state_12939__$1 = state_12939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12939__$1,inst_12937);
} else {
if((state_val_12940 === (2))){
var state_12939__$1 = state_12939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12939__$1,(4),from);
} else {
if((state_val_12940 === (1))){
var state_12939__$1 = state_12939;
var statearr_12950_13060 = state_12939__$1;
(statearr_12950_13060[(2)] = null);

(statearr_12950_13060[(1)] = (2));


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
});})(c__6916__auto___13054,jobs,results,process,async))
;
return ((function (switch__6854__auto__,c__6916__auto___13054,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0 = (function (){
var statearr_12954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_12954[(1)] = (1));

return statearr_12954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12939){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e12955){if((e12955 instanceof Object)){
var ex__6858__auto__ = e12955;
var statearr_12956_13061 = state_12939;
(statearr_12956_13061[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13062 = state_12939;
state_12939 = G__13062;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13054,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_12957 = f__6917__auto__.call(null);
(statearr_12957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13054);

return statearr_12957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13054,jobs,results,process,async))
);


var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,jobs,results,process,async){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,jobs,results,process,async){
return (function (state_12995){
var state_val_12996 = (state_12995[(1)]);
if((state_val_12996 === (7))){
var inst_12991 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_12997_13063 = state_12995__$1;
(statearr_12997_13063[(2)] = inst_12991);

(statearr_12997_13063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (20))){
var state_12995__$1 = state_12995;
var statearr_12998_13064 = state_12995__$1;
(statearr_12998_13064[(2)] = null);

(statearr_12998_13064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (1))){
var state_12995__$1 = state_12995;
var statearr_12999_13065 = state_12995__$1;
(statearr_12999_13065[(2)] = null);

(statearr_12999_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (4))){
var inst_12960 = (state_12995[(7)]);
var inst_12960__$1 = (state_12995[(2)]);
var inst_12961 = (inst_12960__$1 == null);
var state_12995__$1 = (function (){var statearr_13000 = state_12995;
(statearr_13000[(7)] = inst_12960__$1);

return statearr_13000;
})();
if(cljs.core.truth_(inst_12961)){
var statearr_13001_13066 = state_12995__$1;
(statearr_13001_13066[(1)] = (5));

} else {
var statearr_13002_13067 = state_12995__$1;
(statearr_13002_13067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (15))){
var inst_12973 = (state_12995[(8)]);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12995__$1,(18),to,inst_12973);
} else {
if((state_val_12996 === (21))){
var inst_12986 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13003_13068 = state_12995__$1;
(statearr_13003_13068[(2)] = inst_12986);

(statearr_13003_13068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (13))){
var inst_12988 = (state_12995[(2)]);
var state_12995__$1 = (function (){var statearr_13004 = state_12995;
(statearr_13004[(9)] = inst_12988);

return statearr_13004;
})();
var statearr_13005_13069 = state_12995__$1;
(statearr_13005_13069[(2)] = null);

(statearr_13005_13069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (6))){
var inst_12960 = (state_12995[(7)]);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12995__$1,(11),inst_12960);
} else {
if((state_val_12996 === (17))){
var inst_12981 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
if(cljs.core.truth_(inst_12981)){
var statearr_13006_13070 = state_12995__$1;
(statearr_13006_13070[(1)] = (19));

} else {
var statearr_13007_13071 = state_12995__$1;
(statearr_13007_13071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (3))){
var inst_12993 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12995__$1,inst_12993);
} else {
if((state_val_12996 === (12))){
var inst_12970 = (state_12995[(10)]);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12995__$1,(14),inst_12970);
} else {
if((state_val_12996 === (2))){
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12995__$1,(4),results);
} else {
if((state_val_12996 === (19))){
var state_12995__$1 = state_12995;
var statearr_13008_13072 = state_12995__$1;
(statearr_13008_13072[(2)] = null);

(statearr_13008_13072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (11))){
var inst_12970 = (state_12995[(2)]);
var state_12995__$1 = (function (){var statearr_13009 = state_12995;
(statearr_13009[(10)] = inst_12970);

return statearr_13009;
})();
var statearr_13010_13073 = state_12995__$1;
(statearr_13010_13073[(2)] = null);

(statearr_13010_13073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (9))){
var state_12995__$1 = state_12995;
var statearr_13011_13074 = state_12995__$1;
(statearr_13011_13074[(2)] = null);

(statearr_13011_13074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (5))){
var state_12995__$1 = state_12995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13012_13075 = state_12995__$1;
(statearr_13012_13075[(1)] = (8));

} else {
var statearr_13013_13076 = state_12995__$1;
(statearr_13013_13076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (14))){
var inst_12975 = (state_12995[(11)]);
var inst_12973 = (state_12995[(8)]);
var inst_12973__$1 = (state_12995[(2)]);
var inst_12974 = (inst_12973__$1 == null);
var inst_12975__$1 = cljs.core.not.call(null,inst_12974);
var state_12995__$1 = (function (){var statearr_13014 = state_12995;
(statearr_13014[(11)] = inst_12975__$1);

(statearr_13014[(8)] = inst_12973__$1);

return statearr_13014;
})();
if(inst_12975__$1){
var statearr_13015_13077 = state_12995__$1;
(statearr_13015_13077[(1)] = (15));

} else {
var statearr_13016_13078 = state_12995__$1;
(statearr_13016_13078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (16))){
var inst_12975 = (state_12995[(11)]);
var state_12995__$1 = state_12995;
var statearr_13017_13079 = state_12995__$1;
(statearr_13017_13079[(2)] = inst_12975);

(statearr_13017_13079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (10))){
var inst_12967 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13018_13080 = state_12995__$1;
(statearr_13018_13080[(2)] = inst_12967);

(statearr_13018_13080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (18))){
var inst_12978 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13019_13081 = state_12995__$1;
(statearr_13019_13081[(2)] = inst_12978);

(statearr_13019_13081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (8))){
var inst_12964 = cljs.core.async.close_BANG_.call(null,to);
var state_12995__$1 = state_12995;
var statearr_13020_13082 = state_12995__$1;
(statearr_13020_13082[(2)] = inst_12964);

(statearr_13020_13082[(1)] = (10));


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
var statearr_13024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__);

(statearr_13024[(1)] = (1));

return statearr_13024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1 = (function (state_12995){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_12995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13025){if((e13025 instanceof Object)){
var ex__6858__auto__ = e13025;
var statearr_13026_13083 = state_12995;
(statearr_13026_13083[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13084 = state_12995;
state_12995 = G__13084;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__ = function(state_12995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1.call(this,state_12995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,jobs,results,process,async))
})();
var state__6918__auto__ = (function (){var statearr_13027 = f__6917__auto__.call(null);
(statearr_13027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_13027;
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
var G__13086 = arguments.length;
switch (G__13086) {
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
var G__13089 = arguments.length;
switch (G__13089) {
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
var G__13092 = arguments.length;
switch (G__13092) {
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
var c__6916__auto___13144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13144,tc,fc){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13144,tc,fc){
return (function (state_13118){
var state_val_13119 = (state_13118[(1)]);
if((state_val_13119 === (7))){
var inst_13114 = (state_13118[(2)]);
var state_13118__$1 = state_13118;
var statearr_13120_13145 = state_13118__$1;
(statearr_13120_13145[(2)] = inst_13114);

(statearr_13120_13145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (1))){
var state_13118__$1 = state_13118;
var statearr_13121_13146 = state_13118__$1;
(statearr_13121_13146[(2)] = null);

(statearr_13121_13146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (4))){
var inst_13095 = (state_13118[(7)]);
var inst_13095__$1 = (state_13118[(2)]);
var inst_13096 = (inst_13095__$1 == null);
var state_13118__$1 = (function (){var statearr_13122 = state_13118;
(statearr_13122[(7)] = inst_13095__$1);

return statearr_13122;
})();
if(cljs.core.truth_(inst_13096)){
var statearr_13123_13147 = state_13118__$1;
(statearr_13123_13147[(1)] = (5));

} else {
var statearr_13124_13148 = state_13118__$1;
(statearr_13124_13148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (13))){
var state_13118__$1 = state_13118;
var statearr_13125_13149 = state_13118__$1;
(statearr_13125_13149[(2)] = null);

(statearr_13125_13149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (6))){
var inst_13095 = (state_13118[(7)]);
var inst_13101 = p.call(null,inst_13095);
var state_13118__$1 = state_13118;
if(cljs.core.truth_(inst_13101)){
var statearr_13126_13150 = state_13118__$1;
(statearr_13126_13150[(1)] = (9));

} else {
var statearr_13127_13151 = state_13118__$1;
(statearr_13127_13151[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (3))){
var inst_13116 = (state_13118[(2)]);
var state_13118__$1 = state_13118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13118__$1,inst_13116);
} else {
if((state_val_13119 === (12))){
var state_13118__$1 = state_13118;
var statearr_13128_13152 = state_13118__$1;
(statearr_13128_13152[(2)] = null);

(statearr_13128_13152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (2))){
var state_13118__$1 = state_13118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13118__$1,(4),ch);
} else {
if((state_val_13119 === (11))){
var inst_13095 = (state_13118[(7)]);
var inst_13105 = (state_13118[(2)]);
var state_13118__$1 = state_13118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13118__$1,(8),inst_13105,inst_13095);
} else {
if((state_val_13119 === (9))){
var state_13118__$1 = state_13118;
var statearr_13129_13153 = state_13118__$1;
(statearr_13129_13153[(2)] = tc);

(statearr_13129_13153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (5))){
var inst_13098 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13099 = cljs.core.async.close_BANG_.call(null,fc);
var state_13118__$1 = (function (){var statearr_13130 = state_13118;
(statearr_13130[(8)] = inst_13098);

return statearr_13130;
})();
var statearr_13131_13154 = state_13118__$1;
(statearr_13131_13154[(2)] = inst_13099);

(statearr_13131_13154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (14))){
var inst_13112 = (state_13118[(2)]);
var state_13118__$1 = state_13118;
var statearr_13132_13155 = state_13118__$1;
(statearr_13132_13155[(2)] = inst_13112);

(statearr_13132_13155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (10))){
var state_13118__$1 = state_13118;
var statearr_13133_13156 = state_13118__$1;
(statearr_13133_13156[(2)] = fc);

(statearr_13133_13156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (8))){
var inst_13107 = (state_13118[(2)]);
var state_13118__$1 = state_13118;
if(cljs.core.truth_(inst_13107)){
var statearr_13134_13157 = state_13118__$1;
(statearr_13134_13157[(1)] = (12));

} else {
var statearr_13135_13158 = state_13118__$1;
(statearr_13135_13158[(1)] = (13));

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
});})(c__6916__auto___13144,tc,fc))
;
return ((function (switch__6854__auto__,c__6916__auto___13144,tc,fc){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_13139 = [null,null,null,null,null,null,null,null,null];
(statearr_13139[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_13139[(1)] = (1));

return statearr_13139;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_13118){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13140){if((e13140 instanceof Object)){
var ex__6858__auto__ = e13140;
var statearr_13141_13159 = state_13118;
(statearr_13141_13159[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13160 = state_13118;
state_13118 = G__13160;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_13118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_13118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13144,tc,fc))
})();
var state__6918__auto__ = (function (){var statearr_13142 = f__6917__auto__.call(null);
(statearr_13142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13144);

return statearr_13142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13144,tc,fc))
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
return (function (state_13207){
var state_val_13208 = (state_13207[(1)]);
if((state_val_13208 === (7))){
var inst_13203 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
var statearr_13209_13225 = state_13207__$1;
(statearr_13209_13225[(2)] = inst_13203);

(statearr_13209_13225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (6))){
var inst_13196 = (state_13207[(7)]);
var inst_13193 = (state_13207[(8)]);
var inst_13200 = f.call(null,inst_13193,inst_13196);
var inst_13193__$1 = inst_13200;
var state_13207__$1 = (function (){var statearr_13210 = state_13207;
(statearr_13210[(8)] = inst_13193__$1);

return statearr_13210;
})();
var statearr_13211_13226 = state_13207__$1;
(statearr_13211_13226[(2)] = null);

(statearr_13211_13226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (5))){
var inst_13193 = (state_13207[(8)]);
var state_13207__$1 = state_13207;
var statearr_13212_13227 = state_13207__$1;
(statearr_13212_13227[(2)] = inst_13193);

(statearr_13212_13227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (4))){
var inst_13196 = (state_13207[(7)]);
var inst_13196__$1 = (state_13207[(2)]);
var inst_13197 = (inst_13196__$1 == null);
var state_13207__$1 = (function (){var statearr_13213 = state_13207;
(statearr_13213[(7)] = inst_13196__$1);

return statearr_13213;
})();
if(cljs.core.truth_(inst_13197)){
var statearr_13214_13228 = state_13207__$1;
(statearr_13214_13228[(1)] = (5));

} else {
var statearr_13215_13229 = state_13207__$1;
(statearr_13215_13229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13208 === (3))){
var inst_13205 = (state_13207[(2)]);
var state_13207__$1 = state_13207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13207__$1,inst_13205);
} else {
if((state_val_13208 === (2))){
var state_13207__$1 = state_13207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13207__$1,(4),ch);
} else {
if((state_val_13208 === (1))){
var inst_13193 = init;
var state_13207__$1 = (function (){var statearr_13216 = state_13207;
(statearr_13216[(8)] = inst_13193);

return statearr_13216;
})();
var statearr_13217_13230 = state_13207__$1;
(statearr_13217_13230[(2)] = null);

(statearr_13217_13230[(1)] = (2));


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
var statearr_13221 = [null,null,null,null,null,null,null,null,null];
(statearr_13221[(0)] = cljs$core$async$reduce_$_state_machine__6855__auto__);

(statearr_13221[(1)] = (1));

return statearr_13221;
});
var cljs$core$async$reduce_$_state_machine__6855__auto____1 = (function (state_13207){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13222){if((e13222 instanceof Object)){
var ex__6858__auto__ = e13222;
var statearr_13223_13231 = state_13207;
(statearr_13223_13231[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13232 = state_13207;
state_13207 = G__13232;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6855__auto__ = function(state_13207){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6855__auto____1.call(this,state_13207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6855__auto____0;
cljs$core$async$reduce_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6855__auto____1;
return cljs$core$async$reduce_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_13224 = f__6917__auto__.call(null);
(statearr_13224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_13224;
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
var G__13234 = arguments.length;
switch (G__13234) {
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
return (function (state_13259){
var state_val_13260 = (state_13259[(1)]);
if((state_val_13260 === (7))){
var inst_13241 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13261_13285 = state_13259__$1;
(statearr_13261_13285[(2)] = inst_13241);

(statearr_13261_13285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (1))){
var inst_13235 = cljs.core.seq.call(null,coll);
var inst_13236 = inst_13235;
var state_13259__$1 = (function (){var statearr_13262 = state_13259;
(statearr_13262[(7)] = inst_13236);

return statearr_13262;
})();
var statearr_13263_13286 = state_13259__$1;
(statearr_13263_13286[(2)] = null);

(statearr_13263_13286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (4))){
var inst_13236 = (state_13259[(7)]);
var inst_13239 = cljs.core.first.call(null,inst_13236);
var state_13259__$1 = state_13259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13259__$1,(7),ch,inst_13239);
} else {
if((state_val_13260 === (13))){
var inst_13253 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13264_13287 = state_13259__$1;
(statearr_13264_13287[(2)] = inst_13253);

(statearr_13264_13287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (6))){
var inst_13244 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13244)){
var statearr_13265_13288 = state_13259__$1;
(statearr_13265_13288[(1)] = (8));

} else {
var statearr_13266_13289 = state_13259__$1;
(statearr_13266_13289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (3))){
var inst_13257 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13259__$1,inst_13257);
} else {
if((state_val_13260 === (12))){
var state_13259__$1 = state_13259;
var statearr_13267_13290 = state_13259__$1;
(statearr_13267_13290[(2)] = null);

(statearr_13267_13290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (2))){
var inst_13236 = (state_13259[(7)]);
var state_13259__$1 = state_13259;
if(cljs.core.truth_(inst_13236)){
var statearr_13268_13291 = state_13259__$1;
(statearr_13268_13291[(1)] = (4));

} else {
var statearr_13269_13292 = state_13259__$1;
(statearr_13269_13292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (11))){
var inst_13250 = cljs.core.async.close_BANG_.call(null,ch);
var state_13259__$1 = state_13259;
var statearr_13270_13293 = state_13259__$1;
(statearr_13270_13293[(2)] = inst_13250);

(statearr_13270_13293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (9))){
var state_13259__$1 = state_13259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13271_13294 = state_13259__$1;
(statearr_13271_13294[(1)] = (11));

} else {
var statearr_13272_13295 = state_13259__$1;
(statearr_13272_13295[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (5))){
var inst_13236 = (state_13259[(7)]);
var state_13259__$1 = state_13259;
var statearr_13273_13296 = state_13259__$1;
(statearr_13273_13296[(2)] = inst_13236);

(statearr_13273_13296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (10))){
var inst_13255 = (state_13259[(2)]);
var state_13259__$1 = state_13259;
var statearr_13274_13297 = state_13259__$1;
(statearr_13274_13297[(2)] = inst_13255);

(statearr_13274_13297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13260 === (8))){
var inst_13236 = (state_13259[(7)]);
var inst_13246 = cljs.core.next.call(null,inst_13236);
var inst_13236__$1 = inst_13246;
var state_13259__$1 = (function (){var statearr_13275 = state_13259;
(statearr_13275[(7)] = inst_13236__$1);

return statearr_13275;
})();
var statearr_13276_13298 = state_13259__$1;
(statearr_13276_13298[(2)] = null);

(statearr_13276_13298[(1)] = (2));


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
var statearr_13280 = [null,null,null,null,null,null,null,null];
(statearr_13280[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_13280[(1)] = (1));

return statearr_13280;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_13259){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13281){if((e13281 instanceof Object)){
var ex__6858__auto__ = e13281;
var statearr_13282_13299 = state_13259;
(statearr_13282_13299[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13300 = state_13259;
state_13259 = G__13300;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_13259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_13259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_13283 = f__6917__auto__.call(null);
(statearr_13283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_13283;
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

cljs.core.async.Mux = (function (){var obj13302 = {};
return obj13302;
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


cljs.core.async.Mult = (function (){var obj13304 = {};
return obj13304;
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
if(typeof cljs.core.async.t13526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13526 = (function (cs,ch,mult,meta13527){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13527 = meta13527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13526.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13526.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13526.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13526.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13526.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13528){
var self__ = this;
var _13528__$1 = this;
return self__.meta13527;
});})(cs))
;

cljs.core.async.t13526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13528,meta13527__$1){
var self__ = this;
var _13528__$1 = this;
return (new cljs.core.async.t13526(self__.cs,self__.ch,self__.mult,meta13527__$1));
});})(cs))
;

cljs.core.async.t13526.cljs$lang$type = true;

cljs.core.async.t13526.cljs$lang$ctorStr = "cljs.core.async/t13526";

cljs.core.async.t13526.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t13526");
});})(cs))
;

cljs.core.async.__GT_t13526 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13526(cs__$1,ch__$1,mult__$1,meta13527){
return (new cljs.core.async.t13526(cs__$1,ch__$1,mult__$1,meta13527));
});})(cs))
;

}

return (new cljs.core.async.t13526(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6916__auto___13747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___13747,cs,m,dchan,dctr,done){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___13747,cs,m,dchan,dctr,done){
return (function (state_13659){
var state_val_13660 = (state_13659[(1)]);
if((state_val_13660 === (7))){
var inst_13655 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13661_13748 = state_13659__$1;
(statearr_13661_13748[(2)] = inst_13655);

(statearr_13661_13748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (20))){
var inst_13560 = (state_13659[(7)]);
var inst_13570 = cljs.core.first.call(null,inst_13560);
var inst_13571 = cljs.core.nth.call(null,inst_13570,(0),null);
var inst_13572 = cljs.core.nth.call(null,inst_13570,(1),null);
var state_13659__$1 = (function (){var statearr_13662 = state_13659;
(statearr_13662[(8)] = inst_13571);

return statearr_13662;
})();
if(cljs.core.truth_(inst_13572)){
var statearr_13663_13749 = state_13659__$1;
(statearr_13663_13749[(1)] = (22));

} else {
var statearr_13664_13750 = state_13659__$1;
(statearr_13664_13750[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (27))){
var inst_13531 = (state_13659[(9)]);
var inst_13602 = (state_13659[(10)]);
var inst_13607 = (state_13659[(11)]);
var inst_13600 = (state_13659[(12)]);
var inst_13607__$1 = cljs.core._nth.call(null,inst_13600,inst_13602);
var inst_13608 = cljs.core.async.put_BANG_.call(null,inst_13607__$1,inst_13531,done);
var state_13659__$1 = (function (){var statearr_13665 = state_13659;
(statearr_13665[(11)] = inst_13607__$1);

return statearr_13665;
})();
if(cljs.core.truth_(inst_13608)){
var statearr_13666_13751 = state_13659__$1;
(statearr_13666_13751[(1)] = (30));

} else {
var statearr_13667_13752 = state_13659__$1;
(statearr_13667_13752[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (1))){
var state_13659__$1 = state_13659;
var statearr_13668_13753 = state_13659__$1;
(statearr_13668_13753[(2)] = null);

(statearr_13668_13753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (24))){
var inst_13560 = (state_13659[(7)]);
var inst_13577 = (state_13659[(2)]);
var inst_13578 = cljs.core.next.call(null,inst_13560);
var inst_13540 = inst_13578;
var inst_13541 = null;
var inst_13542 = (0);
var inst_13543 = (0);
var state_13659__$1 = (function (){var statearr_13669 = state_13659;
(statearr_13669[(13)] = inst_13577);

(statearr_13669[(14)] = inst_13543);

(statearr_13669[(15)] = inst_13542);

(statearr_13669[(16)] = inst_13540);

(statearr_13669[(17)] = inst_13541);

return statearr_13669;
})();
var statearr_13670_13754 = state_13659__$1;
(statearr_13670_13754[(2)] = null);

(statearr_13670_13754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (39))){
var state_13659__$1 = state_13659;
var statearr_13674_13755 = state_13659__$1;
(statearr_13674_13755[(2)] = null);

(statearr_13674_13755[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (4))){
var inst_13531 = (state_13659[(9)]);
var inst_13531__$1 = (state_13659[(2)]);
var inst_13532 = (inst_13531__$1 == null);
var state_13659__$1 = (function (){var statearr_13675 = state_13659;
(statearr_13675[(9)] = inst_13531__$1);

return statearr_13675;
})();
if(cljs.core.truth_(inst_13532)){
var statearr_13676_13756 = state_13659__$1;
(statearr_13676_13756[(1)] = (5));

} else {
var statearr_13677_13757 = state_13659__$1;
(statearr_13677_13757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (15))){
var inst_13543 = (state_13659[(14)]);
var inst_13542 = (state_13659[(15)]);
var inst_13540 = (state_13659[(16)]);
var inst_13541 = (state_13659[(17)]);
var inst_13556 = (state_13659[(2)]);
var inst_13557 = (inst_13543 + (1));
var tmp13671 = inst_13542;
var tmp13672 = inst_13540;
var tmp13673 = inst_13541;
var inst_13540__$1 = tmp13672;
var inst_13541__$1 = tmp13673;
var inst_13542__$1 = tmp13671;
var inst_13543__$1 = inst_13557;
var state_13659__$1 = (function (){var statearr_13678 = state_13659;
(statearr_13678[(14)] = inst_13543__$1);

(statearr_13678[(15)] = inst_13542__$1);

(statearr_13678[(16)] = inst_13540__$1);

(statearr_13678[(17)] = inst_13541__$1);

(statearr_13678[(18)] = inst_13556);

return statearr_13678;
})();
var statearr_13679_13758 = state_13659__$1;
(statearr_13679_13758[(2)] = null);

(statearr_13679_13758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (21))){
var inst_13581 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13683_13759 = state_13659__$1;
(statearr_13683_13759[(2)] = inst_13581);

(statearr_13683_13759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (31))){
var inst_13607 = (state_13659[(11)]);
var inst_13611 = done.call(null,null);
var inst_13612 = cljs.core.async.untap_STAR_.call(null,m,inst_13607);
var state_13659__$1 = (function (){var statearr_13684 = state_13659;
(statearr_13684[(19)] = inst_13611);

return statearr_13684;
})();
var statearr_13685_13760 = state_13659__$1;
(statearr_13685_13760[(2)] = inst_13612);

(statearr_13685_13760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (32))){
var inst_13602 = (state_13659[(10)]);
var inst_13599 = (state_13659[(20)]);
var inst_13601 = (state_13659[(21)]);
var inst_13600 = (state_13659[(12)]);
var inst_13614 = (state_13659[(2)]);
var inst_13615 = (inst_13602 + (1));
var tmp13680 = inst_13599;
var tmp13681 = inst_13601;
var tmp13682 = inst_13600;
var inst_13599__$1 = tmp13680;
var inst_13600__$1 = tmp13682;
var inst_13601__$1 = tmp13681;
var inst_13602__$1 = inst_13615;
var state_13659__$1 = (function (){var statearr_13686 = state_13659;
(statearr_13686[(10)] = inst_13602__$1);

(statearr_13686[(22)] = inst_13614);

(statearr_13686[(20)] = inst_13599__$1);

(statearr_13686[(21)] = inst_13601__$1);

(statearr_13686[(12)] = inst_13600__$1);

return statearr_13686;
})();
var statearr_13687_13761 = state_13659__$1;
(statearr_13687_13761[(2)] = null);

(statearr_13687_13761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (40))){
var inst_13627 = (state_13659[(23)]);
var inst_13631 = done.call(null,null);
var inst_13632 = cljs.core.async.untap_STAR_.call(null,m,inst_13627);
var state_13659__$1 = (function (){var statearr_13688 = state_13659;
(statearr_13688[(24)] = inst_13631);

return statearr_13688;
})();
var statearr_13689_13762 = state_13659__$1;
(statearr_13689_13762[(2)] = inst_13632);

(statearr_13689_13762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (33))){
var inst_13618 = (state_13659[(25)]);
var inst_13620 = cljs.core.chunked_seq_QMARK_.call(null,inst_13618);
var state_13659__$1 = state_13659;
if(inst_13620){
var statearr_13690_13763 = state_13659__$1;
(statearr_13690_13763[(1)] = (36));

} else {
var statearr_13691_13764 = state_13659__$1;
(statearr_13691_13764[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (13))){
var inst_13550 = (state_13659[(26)]);
var inst_13553 = cljs.core.async.close_BANG_.call(null,inst_13550);
var state_13659__$1 = state_13659;
var statearr_13692_13765 = state_13659__$1;
(statearr_13692_13765[(2)] = inst_13553);

(statearr_13692_13765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (22))){
var inst_13571 = (state_13659[(8)]);
var inst_13574 = cljs.core.async.close_BANG_.call(null,inst_13571);
var state_13659__$1 = state_13659;
var statearr_13693_13766 = state_13659__$1;
(statearr_13693_13766[(2)] = inst_13574);

(statearr_13693_13766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (36))){
var inst_13618 = (state_13659[(25)]);
var inst_13622 = cljs.core.chunk_first.call(null,inst_13618);
var inst_13623 = cljs.core.chunk_rest.call(null,inst_13618);
var inst_13624 = cljs.core.count.call(null,inst_13622);
var inst_13599 = inst_13623;
var inst_13600 = inst_13622;
var inst_13601 = inst_13624;
var inst_13602 = (0);
var state_13659__$1 = (function (){var statearr_13694 = state_13659;
(statearr_13694[(10)] = inst_13602);

(statearr_13694[(20)] = inst_13599);

(statearr_13694[(21)] = inst_13601);

(statearr_13694[(12)] = inst_13600);

return statearr_13694;
})();
var statearr_13695_13767 = state_13659__$1;
(statearr_13695_13767[(2)] = null);

(statearr_13695_13767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (41))){
var inst_13618 = (state_13659[(25)]);
var inst_13634 = (state_13659[(2)]);
var inst_13635 = cljs.core.next.call(null,inst_13618);
var inst_13599 = inst_13635;
var inst_13600 = null;
var inst_13601 = (0);
var inst_13602 = (0);
var state_13659__$1 = (function (){var statearr_13696 = state_13659;
(statearr_13696[(10)] = inst_13602);

(statearr_13696[(27)] = inst_13634);

(statearr_13696[(20)] = inst_13599);

(statearr_13696[(21)] = inst_13601);

(statearr_13696[(12)] = inst_13600);

return statearr_13696;
})();
var statearr_13697_13768 = state_13659__$1;
(statearr_13697_13768[(2)] = null);

(statearr_13697_13768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (43))){
var state_13659__$1 = state_13659;
var statearr_13698_13769 = state_13659__$1;
(statearr_13698_13769[(2)] = null);

(statearr_13698_13769[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (29))){
var inst_13643 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13699_13770 = state_13659__$1;
(statearr_13699_13770[(2)] = inst_13643);

(statearr_13699_13770[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (44))){
var inst_13652 = (state_13659[(2)]);
var state_13659__$1 = (function (){var statearr_13700 = state_13659;
(statearr_13700[(28)] = inst_13652);

return statearr_13700;
})();
var statearr_13701_13771 = state_13659__$1;
(statearr_13701_13771[(2)] = null);

(statearr_13701_13771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (6))){
var inst_13591 = (state_13659[(29)]);
var inst_13590 = cljs.core.deref.call(null,cs);
var inst_13591__$1 = cljs.core.keys.call(null,inst_13590);
var inst_13592 = cljs.core.count.call(null,inst_13591__$1);
var inst_13593 = cljs.core.reset_BANG_.call(null,dctr,inst_13592);
var inst_13598 = cljs.core.seq.call(null,inst_13591__$1);
var inst_13599 = inst_13598;
var inst_13600 = null;
var inst_13601 = (0);
var inst_13602 = (0);
var state_13659__$1 = (function (){var statearr_13702 = state_13659;
(statearr_13702[(30)] = inst_13593);

(statearr_13702[(10)] = inst_13602);

(statearr_13702[(20)] = inst_13599);

(statearr_13702[(21)] = inst_13601);

(statearr_13702[(12)] = inst_13600);

(statearr_13702[(29)] = inst_13591__$1);

return statearr_13702;
})();
var statearr_13703_13772 = state_13659__$1;
(statearr_13703_13772[(2)] = null);

(statearr_13703_13772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (28))){
var inst_13599 = (state_13659[(20)]);
var inst_13618 = (state_13659[(25)]);
var inst_13618__$1 = cljs.core.seq.call(null,inst_13599);
var state_13659__$1 = (function (){var statearr_13704 = state_13659;
(statearr_13704[(25)] = inst_13618__$1);

return statearr_13704;
})();
if(inst_13618__$1){
var statearr_13705_13773 = state_13659__$1;
(statearr_13705_13773[(1)] = (33));

} else {
var statearr_13706_13774 = state_13659__$1;
(statearr_13706_13774[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (25))){
var inst_13602 = (state_13659[(10)]);
var inst_13601 = (state_13659[(21)]);
var inst_13604 = (inst_13602 < inst_13601);
var inst_13605 = inst_13604;
var state_13659__$1 = state_13659;
if(cljs.core.truth_(inst_13605)){
var statearr_13707_13775 = state_13659__$1;
(statearr_13707_13775[(1)] = (27));

} else {
var statearr_13708_13776 = state_13659__$1;
(statearr_13708_13776[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (34))){
var state_13659__$1 = state_13659;
var statearr_13709_13777 = state_13659__$1;
(statearr_13709_13777[(2)] = null);

(statearr_13709_13777[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (17))){
var state_13659__$1 = state_13659;
var statearr_13710_13778 = state_13659__$1;
(statearr_13710_13778[(2)] = null);

(statearr_13710_13778[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (3))){
var inst_13657 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13659__$1,inst_13657);
} else {
if((state_val_13660 === (12))){
var inst_13586 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13711_13779 = state_13659__$1;
(statearr_13711_13779[(2)] = inst_13586);

(statearr_13711_13779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (2))){
var state_13659__$1 = state_13659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13659__$1,(4),ch);
} else {
if((state_val_13660 === (23))){
var state_13659__$1 = state_13659;
var statearr_13712_13780 = state_13659__$1;
(statearr_13712_13780[(2)] = null);

(statearr_13712_13780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (35))){
var inst_13641 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13713_13781 = state_13659__$1;
(statearr_13713_13781[(2)] = inst_13641);

(statearr_13713_13781[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (19))){
var inst_13560 = (state_13659[(7)]);
var inst_13564 = cljs.core.chunk_first.call(null,inst_13560);
var inst_13565 = cljs.core.chunk_rest.call(null,inst_13560);
var inst_13566 = cljs.core.count.call(null,inst_13564);
var inst_13540 = inst_13565;
var inst_13541 = inst_13564;
var inst_13542 = inst_13566;
var inst_13543 = (0);
var state_13659__$1 = (function (){var statearr_13714 = state_13659;
(statearr_13714[(14)] = inst_13543);

(statearr_13714[(15)] = inst_13542);

(statearr_13714[(16)] = inst_13540);

(statearr_13714[(17)] = inst_13541);

return statearr_13714;
})();
var statearr_13715_13782 = state_13659__$1;
(statearr_13715_13782[(2)] = null);

(statearr_13715_13782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (11))){
var inst_13540 = (state_13659[(16)]);
var inst_13560 = (state_13659[(7)]);
var inst_13560__$1 = cljs.core.seq.call(null,inst_13540);
var state_13659__$1 = (function (){var statearr_13716 = state_13659;
(statearr_13716[(7)] = inst_13560__$1);

return statearr_13716;
})();
if(inst_13560__$1){
var statearr_13717_13783 = state_13659__$1;
(statearr_13717_13783[(1)] = (16));

} else {
var statearr_13718_13784 = state_13659__$1;
(statearr_13718_13784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (9))){
var inst_13588 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13719_13785 = state_13659__$1;
(statearr_13719_13785[(2)] = inst_13588);

(statearr_13719_13785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (5))){
var inst_13538 = cljs.core.deref.call(null,cs);
var inst_13539 = cljs.core.seq.call(null,inst_13538);
var inst_13540 = inst_13539;
var inst_13541 = null;
var inst_13542 = (0);
var inst_13543 = (0);
var state_13659__$1 = (function (){var statearr_13720 = state_13659;
(statearr_13720[(14)] = inst_13543);

(statearr_13720[(15)] = inst_13542);

(statearr_13720[(16)] = inst_13540);

(statearr_13720[(17)] = inst_13541);

return statearr_13720;
})();
var statearr_13721_13786 = state_13659__$1;
(statearr_13721_13786[(2)] = null);

(statearr_13721_13786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (14))){
var state_13659__$1 = state_13659;
var statearr_13722_13787 = state_13659__$1;
(statearr_13722_13787[(2)] = null);

(statearr_13722_13787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (45))){
var inst_13649 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13723_13788 = state_13659__$1;
(statearr_13723_13788[(2)] = inst_13649);

(statearr_13723_13788[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (26))){
var inst_13591 = (state_13659[(29)]);
var inst_13645 = (state_13659[(2)]);
var inst_13646 = cljs.core.seq.call(null,inst_13591);
var state_13659__$1 = (function (){var statearr_13724 = state_13659;
(statearr_13724[(31)] = inst_13645);

return statearr_13724;
})();
if(inst_13646){
var statearr_13725_13789 = state_13659__$1;
(statearr_13725_13789[(1)] = (42));

} else {
var statearr_13726_13790 = state_13659__$1;
(statearr_13726_13790[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (16))){
var inst_13560 = (state_13659[(7)]);
var inst_13562 = cljs.core.chunked_seq_QMARK_.call(null,inst_13560);
var state_13659__$1 = state_13659;
if(inst_13562){
var statearr_13727_13791 = state_13659__$1;
(statearr_13727_13791[(1)] = (19));

} else {
var statearr_13728_13792 = state_13659__$1;
(statearr_13728_13792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (38))){
var inst_13638 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13729_13793 = state_13659__$1;
(statearr_13729_13793[(2)] = inst_13638);

(statearr_13729_13793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (30))){
var state_13659__$1 = state_13659;
var statearr_13730_13794 = state_13659__$1;
(statearr_13730_13794[(2)] = null);

(statearr_13730_13794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (10))){
var inst_13543 = (state_13659[(14)]);
var inst_13541 = (state_13659[(17)]);
var inst_13549 = cljs.core._nth.call(null,inst_13541,inst_13543);
var inst_13550 = cljs.core.nth.call(null,inst_13549,(0),null);
var inst_13551 = cljs.core.nth.call(null,inst_13549,(1),null);
var state_13659__$1 = (function (){var statearr_13731 = state_13659;
(statearr_13731[(26)] = inst_13550);

return statearr_13731;
})();
if(cljs.core.truth_(inst_13551)){
var statearr_13732_13795 = state_13659__$1;
(statearr_13732_13795[(1)] = (13));

} else {
var statearr_13733_13796 = state_13659__$1;
(statearr_13733_13796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (18))){
var inst_13584 = (state_13659[(2)]);
var state_13659__$1 = state_13659;
var statearr_13734_13797 = state_13659__$1;
(statearr_13734_13797[(2)] = inst_13584);

(statearr_13734_13797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (42))){
var state_13659__$1 = state_13659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13659__$1,(45),dchan);
} else {
if((state_val_13660 === (37))){
var inst_13531 = (state_13659[(9)]);
var inst_13618 = (state_13659[(25)]);
var inst_13627 = (state_13659[(23)]);
var inst_13627__$1 = cljs.core.first.call(null,inst_13618);
var inst_13628 = cljs.core.async.put_BANG_.call(null,inst_13627__$1,inst_13531,done);
var state_13659__$1 = (function (){var statearr_13735 = state_13659;
(statearr_13735[(23)] = inst_13627__$1);

return statearr_13735;
})();
if(cljs.core.truth_(inst_13628)){
var statearr_13736_13798 = state_13659__$1;
(statearr_13736_13798[(1)] = (39));

} else {
var statearr_13737_13799 = state_13659__$1;
(statearr_13737_13799[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13660 === (8))){
var inst_13543 = (state_13659[(14)]);
var inst_13542 = (state_13659[(15)]);
var inst_13545 = (inst_13543 < inst_13542);
var inst_13546 = inst_13545;
var state_13659__$1 = state_13659;
if(cljs.core.truth_(inst_13546)){
var statearr_13738_13800 = state_13659__$1;
(statearr_13738_13800[(1)] = (10));

} else {
var statearr_13739_13801 = state_13659__$1;
(statearr_13739_13801[(1)] = (11));

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
});})(c__6916__auto___13747,cs,m,dchan,dctr,done))
;
return ((function (switch__6854__auto__,c__6916__auto___13747,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6855__auto__ = null;
var cljs$core$async$mult_$_state_machine__6855__auto____0 = (function (){
var statearr_13743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13743[(0)] = cljs$core$async$mult_$_state_machine__6855__auto__);

(statearr_13743[(1)] = (1));

return statearr_13743;
});
var cljs$core$async$mult_$_state_machine__6855__auto____1 = (function (state_13659){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_13659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e13744){if((e13744 instanceof Object)){
var ex__6858__auto__ = e13744;
var statearr_13745_13802 = state_13659;
(statearr_13745_13802[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13803 = state_13659;
state_13659 = G__13803;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6855__auto__ = function(state_13659){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6855__auto____1.call(this,state_13659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6855__auto____0;
cljs$core$async$mult_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6855__auto____1;
return cljs$core$async$mult_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___13747,cs,m,dchan,dctr,done))
})();
var state__6918__auto__ = (function (){var statearr_13746 = f__6917__auto__.call(null);
(statearr_13746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___13747);

return statearr_13746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___13747,cs,m,dchan,dctr,done))
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
var G__13805 = arguments.length;
switch (G__13805) {
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

cljs.core.async.Mix = (function (){var obj13808 = {};
return obj13808;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13813){
var map__13814 = p__13813;
var map__13814__$1 = ((cljs.core.seq_QMARK_.call(null,map__13814))?cljs.core.apply.call(null,cljs.core.hash_map,map__13814):map__13814);
var opts = map__13814__$1;
var statearr_13815_13818 = state;
(statearr_13815_13818[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13814,map__13814__$1,opts){
return (function (val){
var statearr_13816_13819 = state;
(statearr_13816_13819[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13814,map__13814__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13817_13820 = state;
(statearr_13817_13820[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13809){
var G__13810 = cljs.core.first.call(null,seq13809);
var seq13809__$1 = cljs.core.next.call(null,seq13809);
var G__13811 = cljs.core.first.call(null,seq13809__$1);
var seq13809__$2 = cljs.core.next.call(null,seq13809__$1);
var G__13812 = cljs.core.first.call(null,seq13809__$2);
var seq13809__$3 = cljs.core.next.call(null,seq13809__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13810,G__13811,G__13812,seq13809__$3);
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
if(typeof cljs.core.async.t13940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13940 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13941){
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
this.meta13941 = meta13941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13940.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13940.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13940.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13942){
var self__ = this;
var _13942__$1 = this;
return self__.meta13941;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13942,meta13941__$1){
var self__ = this;
var _13942__$1 = this;
return (new cljs.core.async.t13940(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13941__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13940.cljs$lang$type = true;

cljs.core.async.t13940.cljs$lang$ctorStr = "cljs.core.async/t13940";

cljs.core.async.t13940.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t13940");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13940 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t13940(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13941){
return (new cljs.core.async.t13940(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13941));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13940(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6916__auto___14059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14012){
var state_val_14013 = (state_14012[(1)]);
if((state_val_14013 === (7))){
var inst_13956 = (state_14012[(7)]);
var inst_13961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13956);
var state_14012__$1 = state_14012;
var statearr_14014_14060 = state_14012__$1;
(statearr_14014_14060[(2)] = inst_13961);

(statearr_14014_14060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (20))){
var inst_13971 = (state_14012[(8)]);
var state_14012__$1 = state_14012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14012__$1,(23),out,inst_13971);
} else {
if((state_val_14013 === (1))){
var inst_13946 = (state_14012[(9)]);
var inst_13946__$1 = calc_state.call(null);
var inst_13947 = cljs.core.seq_QMARK_.call(null,inst_13946__$1);
var state_14012__$1 = (function (){var statearr_14015 = state_14012;
(statearr_14015[(9)] = inst_13946__$1);

return statearr_14015;
})();
if(inst_13947){
var statearr_14016_14061 = state_14012__$1;
(statearr_14016_14061[(1)] = (2));

} else {
var statearr_14017_14062 = state_14012__$1;
(statearr_14017_14062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (24))){
var inst_13964 = (state_14012[(10)]);
var inst_13956 = inst_13964;
var state_14012__$1 = (function (){var statearr_14018 = state_14012;
(statearr_14018[(7)] = inst_13956);

return statearr_14018;
})();
var statearr_14019_14063 = state_14012__$1;
(statearr_14019_14063[(2)] = null);

(statearr_14019_14063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (4))){
var inst_13946 = (state_14012[(9)]);
var inst_13952 = (state_14012[(2)]);
var inst_13953 = cljs.core.get.call(null,inst_13952,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13954 = cljs.core.get.call(null,inst_13952,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13955 = cljs.core.get.call(null,inst_13952,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13956 = inst_13946;
var state_14012__$1 = (function (){var statearr_14020 = state_14012;
(statearr_14020[(11)] = inst_13953);

(statearr_14020[(12)] = inst_13955);

(statearr_14020[(13)] = inst_13954);

(statearr_14020[(7)] = inst_13956);

return statearr_14020;
})();
var statearr_14021_14064 = state_14012__$1;
(statearr_14021_14064[(2)] = null);

(statearr_14021_14064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (15))){
var state_14012__$1 = state_14012;
var statearr_14022_14065 = state_14012__$1;
(statearr_14022_14065[(2)] = null);

(statearr_14022_14065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (21))){
var inst_13964 = (state_14012[(10)]);
var inst_13956 = inst_13964;
var state_14012__$1 = (function (){var statearr_14023 = state_14012;
(statearr_14023[(7)] = inst_13956);

return statearr_14023;
})();
var statearr_14024_14066 = state_14012__$1;
(statearr_14024_14066[(2)] = null);

(statearr_14024_14066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (13))){
var inst_14008 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14025_14067 = state_14012__$1;
(statearr_14025_14067[(2)] = inst_14008);

(statearr_14025_14067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (22))){
var inst_14006 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14026_14068 = state_14012__$1;
(statearr_14026_14068[(2)] = inst_14006);

(statearr_14026_14068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (6))){
var inst_14010 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14012__$1,inst_14010);
} else {
if((state_val_14013 === (25))){
var state_14012__$1 = state_14012;
var statearr_14027_14069 = state_14012__$1;
(statearr_14027_14069[(2)] = null);

(statearr_14027_14069[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (17))){
var inst_13986 = (state_14012[(14)]);
var state_14012__$1 = state_14012;
var statearr_14028_14070 = state_14012__$1;
(statearr_14028_14070[(2)] = inst_13986);

(statearr_14028_14070[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (3))){
var inst_13946 = (state_14012[(9)]);
var state_14012__$1 = state_14012;
var statearr_14029_14071 = state_14012__$1;
(statearr_14029_14071[(2)] = inst_13946);

(statearr_14029_14071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (12))){
var inst_13986 = (state_14012[(14)]);
var inst_13967 = (state_14012[(15)]);
var inst_13972 = (state_14012[(16)]);
var inst_13986__$1 = inst_13967.call(null,inst_13972);
var state_14012__$1 = (function (){var statearr_14030 = state_14012;
(statearr_14030[(14)] = inst_13986__$1);

return statearr_14030;
})();
if(cljs.core.truth_(inst_13986__$1)){
var statearr_14031_14072 = state_14012__$1;
(statearr_14031_14072[(1)] = (17));

} else {
var statearr_14032_14073 = state_14012__$1;
(statearr_14032_14073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (2))){
var inst_13946 = (state_14012[(9)]);
var inst_13949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13946);
var state_14012__$1 = state_14012;
var statearr_14033_14074 = state_14012__$1;
(statearr_14033_14074[(2)] = inst_13949);

(statearr_14033_14074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (23))){
var inst_13997 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
if(cljs.core.truth_(inst_13997)){
var statearr_14034_14075 = state_14012__$1;
(statearr_14034_14075[(1)] = (24));

} else {
var statearr_14035_14076 = state_14012__$1;
(statearr_14035_14076[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (19))){
var inst_13994 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
if(cljs.core.truth_(inst_13994)){
var statearr_14036_14077 = state_14012__$1;
(statearr_14036_14077[(1)] = (20));

} else {
var statearr_14037_14078 = state_14012__$1;
(statearr_14037_14078[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (11))){
var inst_13971 = (state_14012[(8)]);
var inst_13977 = (inst_13971 == null);
var state_14012__$1 = state_14012;
if(cljs.core.truth_(inst_13977)){
var statearr_14038_14079 = state_14012__$1;
(statearr_14038_14079[(1)] = (14));

} else {
var statearr_14039_14080 = state_14012__$1;
(statearr_14039_14080[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (9))){
var inst_13964 = (state_14012[(10)]);
var inst_13964__$1 = (state_14012[(2)]);
var inst_13965 = cljs.core.get.call(null,inst_13964__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13966 = cljs.core.get.call(null,inst_13964__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13967 = cljs.core.get.call(null,inst_13964__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14012__$1 = (function (){var statearr_14040 = state_14012;
(statearr_14040[(17)] = inst_13966);

(statearr_14040[(15)] = inst_13967);

(statearr_14040[(10)] = inst_13964__$1);

return statearr_14040;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14012__$1,(10),inst_13965);
} else {
if((state_val_14013 === (5))){
var inst_13956 = (state_14012[(7)]);
var inst_13959 = cljs.core.seq_QMARK_.call(null,inst_13956);
var state_14012__$1 = state_14012;
if(inst_13959){
var statearr_14041_14081 = state_14012__$1;
(statearr_14041_14081[(1)] = (7));

} else {
var statearr_14042_14082 = state_14012__$1;
(statearr_14042_14082[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (14))){
var inst_13972 = (state_14012[(16)]);
var inst_13979 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13972);
var state_14012__$1 = state_14012;
var statearr_14043_14083 = state_14012__$1;
(statearr_14043_14083[(2)] = inst_13979);

(statearr_14043_14083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (26))){
var inst_14002 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14044_14084 = state_14012__$1;
(statearr_14044_14084[(2)] = inst_14002);

(statearr_14044_14084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (16))){
var inst_13982 = (state_14012[(2)]);
var inst_13983 = calc_state.call(null);
var inst_13956 = inst_13983;
var state_14012__$1 = (function (){var statearr_14045 = state_14012;
(statearr_14045[(7)] = inst_13956);

(statearr_14045[(18)] = inst_13982);

return statearr_14045;
})();
var statearr_14046_14085 = state_14012__$1;
(statearr_14046_14085[(2)] = null);

(statearr_14046_14085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (10))){
var inst_13972 = (state_14012[(16)]);
var inst_13971 = (state_14012[(8)]);
var inst_13970 = (state_14012[(2)]);
var inst_13971__$1 = cljs.core.nth.call(null,inst_13970,(0),null);
var inst_13972__$1 = cljs.core.nth.call(null,inst_13970,(1),null);
var inst_13973 = (inst_13971__$1 == null);
var inst_13974 = cljs.core._EQ_.call(null,inst_13972__$1,change);
var inst_13975 = (inst_13973) || (inst_13974);
var state_14012__$1 = (function (){var statearr_14047 = state_14012;
(statearr_14047[(16)] = inst_13972__$1);

(statearr_14047[(8)] = inst_13971__$1);

return statearr_14047;
})();
if(cljs.core.truth_(inst_13975)){
var statearr_14048_14086 = state_14012__$1;
(statearr_14048_14086[(1)] = (11));

} else {
var statearr_14049_14087 = state_14012__$1;
(statearr_14049_14087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (18))){
var inst_13966 = (state_14012[(17)]);
var inst_13967 = (state_14012[(15)]);
var inst_13972 = (state_14012[(16)]);
var inst_13989 = cljs.core.empty_QMARK_.call(null,inst_13967);
var inst_13990 = inst_13966.call(null,inst_13972);
var inst_13991 = cljs.core.not.call(null,inst_13990);
var inst_13992 = (inst_13989) && (inst_13991);
var state_14012__$1 = state_14012;
var statearr_14050_14088 = state_14012__$1;
(statearr_14050_14088[(2)] = inst_13992);

(statearr_14050_14088[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (8))){
var inst_13956 = (state_14012[(7)]);
var state_14012__$1 = state_14012;
var statearr_14051_14089 = state_14012__$1;
(statearr_14051_14089[(2)] = inst_13956);

(statearr_14051_14089[(1)] = (9));


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
});})(c__6916__auto___14059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6854__auto__,c__6916__auto___14059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6855__auto__ = null;
var cljs$core$async$mix_$_state_machine__6855__auto____0 = (function (){
var statearr_14055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14055[(0)] = cljs$core$async$mix_$_state_machine__6855__auto__);

(statearr_14055[(1)] = (1));

return statearr_14055;
});
var cljs$core$async$mix_$_state_machine__6855__auto____1 = (function (state_14012){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14056){if((e14056 instanceof Object)){
var ex__6858__auto__ = e14056;
var statearr_14057_14090 = state_14012;
(statearr_14057_14090[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14091 = state_14012;
state_14012 = G__14091;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6855__auto__ = function(state_14012){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6855__auto____1.call(this,state_14012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6855__auto____0;
cljs$core$async$mix_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6855__auto____1;
return cljs$core$async$mix_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6918__auto__ = (function (){var statearr_14058 = f__6917__auto__.call(null);
(statearr_14058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14059);

return statearr_14058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14059,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj14093 = {};
return obj14093;
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
var G__14095 = arguments.length;
switch (G__14095) {
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
var G__14099 = arguments.length;
switch (G__14099) {
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
return (function (p1__14097_SHARP_){
if(cljs.core.truth_(p1__14097_SHARP_.call(null,topic))){
return p1__14097_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14097_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4333__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14100 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14100 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14101){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14101 = meta14101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14100.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14100.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14100.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t14100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14100.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14102){
var self__ = this;
var _14102__$1 = this;
return self__.meta14101;
});})(mults,ensure_mult))
;

cljs.core.async.t14100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14102,meta14101__$1){
var self__ = this;
var _14102__$1 = this;
return (new cljs.core.async.t14100(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14101__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14100.cljs$lang$type = true;

cljs.core.async.t14100.cljs$lang$ctorStr = "cljs.core.async/t14100";

cljs.core.async.t14100.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14100");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14100 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14100(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14101){
return (new cljs.core.async.t14100(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14101));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14100(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6916__auto___14223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14223,mults,ensure_mult,p){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14223,mults,ensure_mult,p){
return (function (state_14174){
var state_val_14175 = (state_14174[(1)]);
if((state_val_14175 === (7))){
var inst_14170 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14176_14224 = state_14174__$1;
(statearr_14176_14224[(2)] = inst_14170);

(statearr_14176_14224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (20))){
var state_14174__$1 = state_14174;
var statearr_14177_14225 = state_14174__$1;
(statearr_14177_14225[(2)] = null);

(statearr_14177_14225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (1))){
var state_14174__$1 = state_14174;
var statearr_14178_14226 = state_14174__$1;
(statearr_14178_14226[(2)] = null);

(statearr_14178_14226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (24))){
var inst_14153 = (state_14174[(7)]);
var inst_14162 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14153);
var state_14174__$1 = state_14174;
var statearr_14179_14227 = state_14174__$1;
(statearr_14179_14227[(2)] = inst_14162);

(statearr_14179_14227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (4))){
var inst_14105 = (state_14174[(8)]);
var inst_14105__$1 = (state_14174[(2)]);
var inst_14106 = (inst_14105__$1 == null);
var state_14174__$1 = (function (){var statearr_14180 = state_14174;
(statearr_14180[(8)] = inst_14105__$1);

return statearr_14180;
})();
if(cljs.core.truth_(inst_14106)){
var statearr_14181_14228 = state_14174__$1;
(statearr_14181_14228[(1)] = (5));

} else {
var statearr_14182_14229 = state_14174__$1;
(statearr_14182_14229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (15))){
var inst_14147 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14183_14230 = state_14174__$1;
(statearr_14183_14230[(2)] = inst_14147);

(statearr_14183_14230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (21))){
var inst_14167 = (state_14174[(2)]);
var state_14174__$1 = (function (){var statearr_14184 = state_14174;
(statearr_14184[(9)] = inst_14167);

return statearr_14184;
})();
var statearr_14185_14231 = state_14174__$1;
(statearr_14185_14231[(2)] = null);

(statearr_14185_14231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (13))){
var inst_14129 = (state_14174[(10)]);
var inst_14131 = cljs.core.chunked_seq_QMARK_.call(null,inst_14129);
var state_14174__$1 = state_14174;
if(inst_14131){
var statearr_14186_14232 = state_14174__$1;
(statearr_14186_14232[(1)] = (16));

} else {
var statearr_14187_14233 = state_14174__$1;
(statearr_14187_14233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (22))){
var inst_14159 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
if(cljs.core.truth_(inst_14159)){
var statearr_14188_14234 = state_14174__$1;
(statearr_14188_14234[(1)] = (23));

} else {
var statearr_14189_14235 = state_14174__$1;
(statearr_14189_14235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (6))){
var inst_14105 = (state_14174[(8)]);
var inst_14153 = (state_14174[(7)]);
var inst_14155 = (state_14174[(11)]);
var inst_14153__$1 = topic_fn.call(null,inst_14105);
var inst_14154 = cljs.core.deref.call(null,mults);
var inst_14155__$1 = cljs.core.get.call(null,inst_14154,inst_14153__$1);
var state_14174__$1 = (function (){var statearr_14190 = state_14174;
(statearr_14190[(7)] = inst_14153__$1);

(statearr_14190[(11)] = inst_14155__$1);

return statearr_14190;
})();
if(cljs.core.truth_(inst_14155__$1)){
var statearr_14191_14236 = state_14174__$1;
(statearr_14191_14236[(1)] = (19));

} else {
var statearr_14192_14237 = state_14174__$1;
(statearr_14192_14237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (25))){
var inst_14164 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14193_14238 = state_14174__$1;
(statearr_14193_14238[(2)] = inst_14164);

(statearr_14193_14238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (17))){
var inst_14129 = (state_14174[(10)]);
var inst_14138 = cljs.core.first.call(null,inst_14129);
var inst_14139 = cljs.core.async.muxch_STAR_.call(null,inst_14138);
var inst_14140 = cljs.core.async.close_BANG_.call(null,inst_14139);
var inst_14141 = cljs.core.next.call(null,inst_14129);
var inst_14115 = inst_14141;
var inst_14116 = null;
var inst_14117 = (0);
var inst_14118 = (0);
var state_14174__$1 = (function (){var statearr_14194 = state_14174;
(statearr_14194[(12)] = inst_14116);

(statearr_14194[(13)] = inst_14117);

(statearr_14194[(14)] = inst_14118);

(statearr_14194[(15)] = inst_14140);

(statearr_14194[(16)] = inst_14115);

return statearr_14194;
})();
var statearr_14195_14239 = state_14174__$1;
(statearr_14195_14239[(2)] = null);

(statearr_14195_14239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (3))){
var inst_14172 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14174__$1,inst_14172);
} else {
if((state_val_14175 === (12))){
var inst_14149 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14196_14240 = state_14174__$1;
(statearr_14196_14240[(2)] = inst_14149);

(statearr_14196_14240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (2))){
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14174__$1,(4),ch);
} else {
if((state_val_14175 === (23))){
var state_14174__$1 = state_14174;
var statearr_14197_14241 = state_14174__$1;
(statearr_14197_14241[(2)] = null);

(statearr_14197_14241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (19))){
var inst_14105 = (state_14174[(8)]);
var inst_14155 = (state_14174[(11)]);
var inst_14157 = cljs.core.async.muxch_STAR_.call(null,inst_14155);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14174__$1,(22),inst_14157,inst_14105);
} else {
if((state_val_14175 === (11))){
var inst_14129 = (state_14174[(10)]);
var inst_14115 = (state_14174[(16)]);
var inst_14129__$1 = cljs.core.seq.call(null,inst_14115);
var state_14174__$1 = (function (){var statearr_14198 = state_14174;
(statearr_14198[(10)] = inst_14129__$1);

return statearr_14198;
})();
if(inst_14129__$1){
var statearr_14199_14242 = state_14174__$1;
(statearr_14199_14242[(1)] = (13));

} else {
var statearr_14200_14243 = state_14174__$1;
(statearr_14200_14243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (9))){
var inst_14151 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14201_14244 = state_14174__$1;
(statearr_14201_14244[(2)] = inst_14151);

(statearr_14201_14244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (5))){
var inst_14112 = cljs.core.deref.call(null,mults);
var inst_14113 = cljs.core.vals.call(null,inst_14112);
var inst_14114 = cljs.core.seq.call(null,inst_14113);
var inst_14115 = inst_14114;
var inst_14116 = null;
var inst_14117 = (0);
var inst_14118 = (0);
var state_14174__$1 = (function (){var statearr_14202 = state_14174;
(statearr_14202[(12)] = inst_14116);

(statearr_14202[(13)] = inst_14117);

(statearr_14202[(14)] = inst_14118);

(statearr_14202[(16)] = inst_14115);

return statearr_14202;
})();
var statearr_14203_14245 = state_14174__$1;
(statearr_14203_14245[(2)] = null);

(statearr_14203_14245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (14))){
var state_14174__$1 = state_14174;
var statearr_14207_14246 = state_14174__$1;
(statearr_14207_14246[(2)] = null);

(statearr_14207_14246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (16))){
var inst_14129 = (state_14174[(10)]);
var inst_14133 = cljs.core.chunk_first.call(null,inst_14129);
var inst_14134 = cljs.core.chunk_rest.call(null,inst_14129);
var inst_14135 = cljs.core.count.call(null,inst_14133);
var inst_14115 = inst_14134;
var inst_14116 = inst_14133;
var inst_14117 = inst_14135;
var inst_14118 = (0);
var state_14174__$1 = (function (){var statearr_14208 = state_14174;
(statearr_14208[(12)] = inst_14116);

(statearr_14208[(13)] = inst_14117);

(statearr_14208[(14)] = inst_14118);

(statearr_14208[(16)] = inst_14115);

return statearr_14208;
})();
var statearr_14209_14247 = state_14174__$1;
(statearr_14209_14247[(2)] = null);

(statearr_14209_14247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (10))){
var inst_14116 = (state_14174[(12)]);
var inst_14117 = (state_14174[(13)]);
var inst_14118 = (state_14174[(14)]);
var inst_14115 = (state_14174[(16)]);
var inst_14123 = cljs.core._nth.call(null,inst_14116,inst_14118);
var inst_14124 = cljs.core.async.muxch_STAR_.call(null,inst_14123);
var inst_14125 = cljs.core.async.close_BANG_.call(null,inst_14124);
var inst_14126 = (inst_14118 + (1));
var tmp14204 = inst_14116;
var tmp14205 = inst_14117;
var tmp14206 = inst_14115;
var inst_14115__$1 = tmp14206;
var inst_14116__$1 = tmp14204;
var inst_14117__$1 = tmp14205;
var inst_14118__$1 = inst_14126;
var state_14174__$1 = (function (){var statearr_14210 = state_14174;
(statearr_14210[(12)] = inst_14116__$1);

(statearr_14210[(13)] = inst_14117__$1);

(statearr_14210[(17)] = inst_14125);

(statearr_14210[(14)] = inst_14118__$1);

(statearr_14210[(16)] = inst_14115__$1);

return statearr_14210;
})();
var statearr_14211_14248 = state_14174__$1;
(statearr_14211_14248[(2)] = null);

(statearr_14211_14248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (18))){
var inst_14144 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14212_14249 = state_14174__$1;
(statearr_14212_14249[(2)] = inst_14144);

(statearr_14212_14249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (8))){
var inst_14117 = (state_14174[(13)]);
var inst_14118 = (state_14174[(14)]);
var inst_14120 = (inst_14118 < inst_14117);
var inst_14121 = inst_14120;
var state_14174__$1 = state_14174;
if(cljs.core.truth_(inst_14121)){
var statearr_14213_14250 = state_14174__$1;
(statearr_14213_14250[(1)] = (10));

} else {
var statearr_14214_14251 = state_14174__$1;
(statearr_14214_14251[(1)] = (11));

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
});})(c__6916__auto___14223,mults,ensure_mult,p))
;
return ((function (switch__6854__auto__,c__6916__auto___14223,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14218[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14218[(1)] = (1));

return statearr_14218;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14174){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14219){if((e14219 instanceof Object)){
var ex__6858__auto__ = e14219;
var statearr_14220_14252 = state_14174;
(statearr_14220_14252[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14253 = state_14174;
state_14174 = G__14253;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14223,mults,ensure_mult,p))
})();
var state__6918__auto__ = (function (){var statearr_14221 = f__6917__auto__.call(null);
(statearr_14221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14223);

return statearr_14221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14223,mults,ensure_mult,p))
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
var G__14255 = arguments.length;
switch (G__14255) {
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
var G__14258 = arguments.length;
switch (G__14258) {
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
var G__14261 = arguments.length;
switch (G__14261) {
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
var c__6916__auto___14331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14300){
var state_val_14301 = (state_14300[(1)]);
if((state_val_14301 === (7))){
var state_14300__$1 = state_14300;
var statearr_14302_14332 = state_14300__$1;
(statearr_14302_14332[(2)] = null);

(statearr_14302_14332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (1))){
var state_14300__$1 = state_14300;
var statearr_14303_14333 = state_14300__$1;
(statearr_14303_14333[(2)] = null);

(statearr_14303_14333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (4))){
var inst_14264 = (state_14300[(7)]);
var inst_14266 = (inst_14264 < cnt);
var state_14300__$1 = state_14300;
if(cljs.core.truth_(inst_14266)){
var statearr_14304_14334 = state_14300__$1;
(statearr_14304_14334[(1)] = (6));

} else {
var statearr_14305_14335 = state_14300__$1;
(statearr_14305_14335[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (15))){
var inst_14296 = (state_14300[(2)]);
var state_14300__$1 = state_14300;
var statearr_14306_14336 = state_14300__$1;
(statearr_14306_14336[(2)] = inst_14296);

(statearr_14306_14336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (13))){
var inst_14289 = cljs.core.async.close_BANG_.call(null,out);
var state_14300__$1 = state_14300;
var statearr_14307_14337 = state_14300__$1;
(statearr_14307_14337[(2)] = inst_14289);

(statearr_14307_14337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (6))){
var state_14300__$1 = state_14300;
var statearr_14308_14338 = state_14300__$1;
(statearr_14308_14338[(2)] = null);

(statearr_14308_14338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (3))){
var inst_14298 = (state_14300[(2)]);
var state_14300__$1 = state_14300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14300__$1,inst_14298);
} else {
if((state_val_14301 === (12))){
var inst_14286 = (state_14300[(8)]);
var inst_14286__$1 = (state_14300[(2)]);
var inst_14287 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14286__$1);
var state_14300__$1 = (function (){var statearr_14309 = state_14300;
(statearr_14309[(8)] = inst_14286__$1);

return statearr_14309;
})();
if(cljs.core.truth_(inst_14287)){
var statearr_14310_14339 = state_14300__$1;
(statearr_14310_14339[(1)] = (13));

} else {
var statearr_14311_14340 = state_14300__$1;
(statearr_14311_14340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (2))){
var inst_14263 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14264 = (0);
var state_14300__$1 = (function (){var statearr_14312 = state_14300;
(statearr_14312[(7)] = inst_14264);

(statearr_14312[(9)] = inst_14263);

return statearr_14312;
})();
var statearr_14313_14341 = state_14300__$1;
(statearr_14313_14341[(2)] = null);

(statearr_14313_14341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (11))){
var inst_14264 = (state_14300[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14300,(10),Object,null,(9));
var inst_14273 = chs__$1.call(null,inst_14264);
var inst_14274 = done.call(null,inst_14264);
var inst_14275 = cljs.core.async.take_BANG_.call(null,inst_14273,inst_14274);
var state_14300__$1 = state_14300;
var statearr_14314_14342 = state_14300__$1;
(statearr_14314_14342[(2)] = inst_14275);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (9))){
var inst_14264 = (state_14300[(7)]);
var inst_14277 = (state_14300[(2)]);
var inst_14278 = (inst_14264 + (1));
var inst_14264__$1 = inst_14278;
var state_14300__$1 = (function (){var statearr_14315 = state_14300;
(statearr_14315[(7)] = inst_14264__$1);

(statearr_14315[(10)] = inst_14277);

return statearr_14315;
})();
var statearr_14316_14343 = state_14300__$1;
(statearr_14316_14343[(2)] = null);

(statearr_14316_14343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (5))){
var inst_14284 = (state_14300[(2)]);
var state_14300__$1 = (function (){var statearr_14317 = state_14300;
(statearr_14317[(11)] = inst_14284);

return statearr_14317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14300__$1,(12),dchan);
} else {
if((state_val_14301 === (14))){
var inst_14286 = (state_14300[(8)]);
var inst_14291 = cljs.core.apply.call(null,f,inst_14286);
var state_14300__$1 = state_14300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14300__$1,(16),out,inst_14291);
} else {
if((state_val_14301 === (16))){
var inst_14293 = (state_14300[(2)]);
var state_14300__$1 = (function (){var statearr_14318 = state_14300;
(statearr_14318[(12)] = inst_14293);

return statearr_14318;
})();
var statearr_14319_14344 = state_14300__$1;
(statearr_14319_14344[(2)] = null);

(statearr_14319_14344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (10))){
var inst_14268 = (state_14300[(2)]);
var inst_14269 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14300__$1 = (function (){var statearr_14320 = state_14300;
(statearr_14320[(13)] = inst_14268);

return statearr_14320;
})();
var statearr_14321_14345 = state_14300__$1;
(statearr_14321_14345[(2)] = inst_14269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14301 === (8))){
var inst_14282 = (state_14300[(2)]);
var state_14300__$1 = state_14300;
var statearr_14322_14346 = state_14300__$1;
(statearr_14322_14346[(2)] = inst_14282);

(statearr_14322_14346[(1)] = (5));


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
});})(c__6916__auto___14331,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6854__auto__,c__6916__auto___14331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14326[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14326[(1)] = (1));

return statearr_14326;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14300){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14327){if((e14327 instanceof Object)){
var ex__6858__auto__ = e14327;
var statearr_14328_14347 = state_14300;
(statearr_14328_14347[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14348 = state_14300;
state_14300 = G__14348;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14331,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6918__auto__ = (function (){var statearr_14329 = f__6917__auto__.call(null);
(statearr_14329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14331);

return statearr_14329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14331,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14351 = arguments.length;
switch (G__14351) {
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
var c__6916__auto___14406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14406,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14406,out){
return (function (state_14381){
var state_val_14382 = (state_14381[(1)]);
if((state_val_14382 === (7))){
var inst_14360 = (state_14381[(7)]);
var inst_14361 = (state_14381[(8)]);
var inst_14360__$1 = (state_14381[(2)]);
var inst_14361__$1 = cljs.core.nth.call(null,inst_14360__$1,(0),null);
var inst_14362 = cljs.core.nth.call(null,inst_14360__$1,(1),null);
var inst_14363 = (inst_14361__$1 == null);
var state_14381__$1 = (function (){var statearr_14383 = state_14381;
(statearr_14383[(7)] = inst_14360__$1);

(statearr_14383[(8)] = inst_14361__$1);

(statearr_14383[(9)] = inst_14362);

return statearr_14383;
})();
if(cljs.core.truth_(inst_14363)){
var statearr_14384_14407 = state_14381__$1;
(statearr_14384_14407[(1)] = (8));

} else {
var statearr_14385_14408 = state_14381__$1;
(statearr_14385_14408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (1))){
var inst_14352 = cljs.core.vec.call(null,chs);
var inst_14353 = inst_14352;
var state_14381__$1 = (function (){var statearr_14386 = state_14381;
(statearr_14386[(10)] = inst_14353);

return statearr_14386;
})();
var statearr_14387_14409 = state_14381__$1;
(statearr_14387_14409[(2)] = null);

(statearr_14387_14409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (4))){
var inst_14353 = (state_14381[(10)]);
var state_14381__$1 = state_14381;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14381__$1,(7),inst_14353);
} else {
if((state_val_14382 === (6))){
var inst_14377 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
var statearr_14388_14410 = state_14381__$1;
(statearr_14388_14410[(2)] = inst_14377);

(statearr_14388_14410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (3))){
var inst_14379 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14381__$1,inst_14379);
} else {
if((state_val_14382 === (2))){
var inst_14353 = (state_14381[(10)]);
var inst_14355 = cljs.core.count.call(null,inst_14353);
var inst_14356 = (inst_14355 > (0));
var state_14381__$1 = state_14381;
if(cljs.core.truth_(inst_14356)){
var statearr_14390_14411 = state_14381__$1;
(statearr_14390_14411[(1)] = (4));

} else {
var statearr_14391_14412 = state_14381__$1;
(statearr_14391_14412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (11))){
var inst_14353 = (state_14381[(10)]);
var inst_14370 = (state_14381[(2)]);
var tmp14389 = inst_14353;
var inst_14353__$1 = tmp14389;
var state_14381__$1 = (function (){var statearr_14392 = state_14381;
(statearr_14392[(10)] = inst_14353__$1);

(statearr_14392[(11)] = inst_14370);

return statearr_14392;
})();
var statearr_14393_14413 = state_14381__$1;
(statearr_14393_14413[(2)] = null);

(statearr_14393_14413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (9))){
var inst_14361 = (state_14381[(8)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14381__$1,(11),out,inst_14361);
} else {
if((state_val_14382 === (5))){
var inst_14375 = cljs.core.async.close_BANG_.call(null,out);
var state_14381__$1 = state_14381;
var statearr_14394_14414 = state_14381__$1;
(statearr_14394_14414[(2)] = inst_14375);

(statearr_14394_14414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (10))){
var inst_14373 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
var statearr_14395_14415 = state_14381__$1;
(statearr_14395_14415[(2)] = inst_14373);

(statearr_14395_14415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (8))){
var inst_14353 = (state_14381[(10)]);
var inst_14360 = (state_14381[(7)]);
var inst_14361 = (state_14381[(8)]);
var inst_14362 = (state_14381[(9)]);
var inst_14365 = (function (){var c = inst_14362;
var v = inst_14361;
var vec__14358 = inst_14360;
var cs = inst_14353;
return ((function (c,v,vec__14358,cs,inst_14353,inst_14360,inst_14361,inst_14362,state_val_14382,c__6916__auto___14406,out){
return (function (p1__14349_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14349_SHARP_);
});
;})(c,v,vec__14358,cs,inst_14353,inst_14360,inst_14361,inst_14362,state_val_14382,c__6916__auto___14406,out))
})();
var inst_14366 = cljs.core.filterv.call(null,inst_14365,inst_14353);
var inst_14353__$1 = inst_14366;
var state_14381__$1 = (function (){var statearr_14396 = state_14381;
(statearr_14396[(10)] = inst_14353__$1);

return statearr_14396;
})();
var statearr_14397_14416 = state_14381__$1;
(statearr_14397_14416[(2)] = null);

(statearr_14397_14416[(1)] = (2));


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
});})(c__6916__auto___14406,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14406,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14401[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14401[(1)] = (1));

return statearr_14401;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14381){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14402){if((e14402 instanceof Object)){
var ex__6858__auto__ = e14402;
var statearr_14403_14417 = state_14381;
(statearr_14403_14417[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14418 = state_14381;
state_14381 = G__14418;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14406,out))
})();
var state__6918__auto__ = (function (){var statearr_14404 = f__6917__auto__.call(null);
(statearr_14404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14406);

return statearr_14404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14406,out))
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
var G__14420 = arguments.length;
switch (G__14420) {
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
var c__6916__auto___14468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14468,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14468,out){
return (function (state_14444){
var state_val_14445 = (state_14444[(1)]);
if((state_val_14445 === (7))){
var inst_14426 = (state_14444[(7)]);
var inst_14426__$1 = (state_14444[(2)]);
var inst_14427 = (inst_14426__$1 == null);
var inst_14428 = cljs.core.not.call(null,inst_14427);
var state_14444__$1 = (function (){var statearr_14446 = state_14444;
(statearr_14446[(7)] = inst_14426__$1);

return statearr_14446;
})();
if(inst_14428){
var statearr_14447_14469 = state_14444__$1;
(statearr_14447_14469[(1)] = (8));

} else {
var statearr_14448_14470 = state_14444__$1;
(statearr_14448_14470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (1))){
var inst_14421 = (0);
var state_14444__$1 = (function (){var statearr_14449 = state_14444;
(statearr_14449[(8)] = inst_14421);

return statearr_14449;
})();
var statearr_14450_14471 = state_14444__$1;
(statearr_14450_14471[(2)] = null);

(statearr_14450_14471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (4))){
var state_14444__$1 = state_14444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14444__$1,(7),ch);
} else {
if((state_val_14445 === (6))){
var inst_14439 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14451_14472 = state_14444__$1;
(statearr_14451_14472[(2)] = inst_14439);

(statearr_14451_14472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (3))){
var inst_14441 = (state_14444[(2)]);
var inst_14442 = cljs.core.async.close_BANG_.call(null,out);
var state_14444__$1 = (function (){var statearr_14452 = state_14444;
(statearr_14452[(9)] = inst_14441);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14444__$1,inst_14442);
} else {
if((state_val_14445 === (2))){
var inst_14421 = (state_14444[(8)]);
var inst_14423 = (inst_14421 < n);
var state_14444__$1 = state_14444;
if(cljs.core.truth_(inst_14423)){
var statearr_14453_14473 = state_14444__$1;
(statearr_14453_14473[(1)] = (4));

} else {
var statearr_14454_14474 = state_14444__$1;
(statearr_14454_14474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (11))){
var inst_14421 = (state_14444[(8)]);
var inst_14431 = (state_14444[(2)]);
var inst_14432 = (inst_14421 + (1));
var inst_14421__$1 = inst_14432;
var state_14444__$1 = (function (){var statearr_14455 = state_14444;
(statearr_14455[(8)] = inst_14421__$1);

(statearr_14455[(10)] = inst_14431);

return statearr_14455;
})();
var statearr_14456_14475 = state_14444__$1;
(statearr_14456_14475[(2)] = null);

(statearr_14456_14475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (9))){
var state_14444__$1 = state_14444;
var statearr_14457_14476 = state_14444__$1;
(statearr_14457_14476[(2)] = null);

(statearr_14457_14476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (5))){
var state_14444__$1 = state_14444;
var statearr_14458_14477 = state_14444__$1;
(statearr_14458_14477[(2)] = null);

(statearr_14458_14477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (10))){
var inst_14436 = (state_14444[(2)]);
var state_14444__$1 = state_14444;
var statearr_14459_14478 = state_14444__$1;
(statearr_14459_14478[(2)] = inst_14436);

(statearr_14459_14478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14445 === (8))){
var inst_14426 = (state_14444[(7)]);
var state_14444__$1 = state_14444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14444__$1,(11),out,inst_14426);
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
});})(c__6916__auto___14468,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14468,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14463[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14463[(1)] = (1));

return statearr_14463;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14444){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14464){if((e14464 instanceof Object)){
var ex__6858__auto__ = e14464;
var statearr_14465_14479 = state_14444;
(statearr_14465_14479[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14480 = state_14444;
state_14444 = G__14480;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14468,out))
})();
var state__6918__auto__ = (function (){var statearr_14466 = f__6917__auto__.call(null);
(statearr_14466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14468);

return statearr_14466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14468,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14488 = (function (ch,f,map_LT_,meta14489){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14489 = meta14489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14491 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14491 = (function (fn1,_,meta14489,map_LT_,f,ch,meta14492){
this.fn1 = fn1;
this._ = _;
this.meta14489 = meta14489;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14492 = meta14492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14481_SHARP_){
return f1.call(null,(((p1__14481_SHARP_ == null))?null:self__.f.call(null,p1__14481_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14493){
var self__ = this;
var _14493__$1 = this;
return self__.meta14492;
});})(___$1))
;

cljs.core.async.t14491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14493,meta14492__$1){
var self__ = this;
var _14493__$1 = this;
return (new cljs.core.async.t14491(self__.fn1,self__._,self__.meta14489,self__.map_LT_,self__.f,self__.ch,meta14492__$1));
});})(___$1))
;

cljs.core.async.t14491.cljs$lang$type = true;

cljs.core.async.t14491.cljs$lang$ctorStr = "cljs.core.async/t14491";

cljs.core.async.t14491.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14491");
});})(___$1))
;

cljs.core.async.__GT_t14491 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14491(fn1__$1,___$2,meta14489__$1,map_LT___$1,f__$1,ch__$1,meta14492){
return (new cljs.core.async.t14491(fn1__$1,___$2,meta14489__$1,map_LT___$1,f__$1,ch__$1,meta14492));
});})(___$1))
;

}

return (new cljs.core.async.t14491(fn1,___$1,self__.meta14489,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14490){
var self__ = this;
var _14490__$1 = this;
return self__.meta14489;
});

cljs.core.async.t14488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14490,meta14489__$1){
var self__ = this;
var _14490__$1 = this;
return (new cljs.core.async.t14488(self__.ch,self__.f,self__.map_LT_,meta14489__$1));
});

cljs.core.async.t14488.cljs$lang$type = true;

cljs.core.async.t14488.cljs$lang$ctorStr = "cljs.core.async/t14488";

cljs.core.async.t14488.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14488");
});

cljs.core.async.__GT_t14488 = (function cljs$core$async$map_LT__$___GT_t14488(ch__$1,f__$1,map_LT___$1,meta14489){
return (new cljs.core.async.t14488(ch__$1,f__$1,map_LT___$1,meta14489));
});

}

return (new cljs.core.async.t14488(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14497 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14497 = (function (ch,f,map_GT_,meta14498){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14498 = meta14498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14497.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14499){
var self__ = this;
var _14499__$1 = this;
return self__.meta14498;
});

cljs.core.async.t14497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14499,meta14498__$1){
var self__ = this;
var _14499__$1 = this;
return (new cljs.core.async.t14497(self__.ch,self__.f,self__.map_GT_,meta14498__$1));
});

cljs.core.async.t14497.cljs$lang$type = true;

cljs.core.async.t14497.cljs$lang$ctorStr = "cljs.core.async/t14497";

cljs.core.async.t14497.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14497");
});

cljs.core.async.__GT_t14497 = (function cljs$core$async$map_GT__$___GT_t14497(ch__$1,f__$1,map_GT___$1,meta14498){
return (new cljs.core.async.t14497(ch__$1,f__$1,map_GT___$1,meta14498));
});

}

return (new cljs.core.async.t14497(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14503 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14503 = (function (ch,p,filter_GT_,meta14504){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14504 = meta14504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14505){
var self__ = this;
var _14505__$1 = this;
return self__.meta14504;
});

cljs.core.async.t14503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14505,meta14504__$1){
var self__ = this;
var _14505__$1 = this;
return (new cljs.core.async.t14503(self__.ch,self__.p,self__.filter_GT_,meta14504__$1));
});

cljs.core.async.t14503.cljs$lang$type = true;

cljs.core.async.t14503.cljs$lang$ctorStr = "cljs.core.async/t14503";

cljs.core.async.t14503.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14503");
});

cljs.core.async.__GT_t14503 = (function cljs$core$async$filter_GT__$___GT_t14503(ch__$1,p__$1,filter_GT___$1,meta14504){
return (new cljs.core.async.t14503(ch__$1,p__$1,filter_GT___$1,meta14504));
});

}

return (new cljs.core.async.t14503(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14507 = arguments.length;
switch (G__14507) {
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
var c__6916__auto___14550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14550,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14550,out){
return (function (state_14528){
var state_val_14529 = (state_14528[(1)]);
if((state_val_14529 === (7))){
var inst_14524 = (state_14528[(2)]);
var state_14528__$1 = state_14528;
var statearr_14530_14551 = state_14528__$1;
(statearr_14530_14551[(2)] = inst_14524);

(statearr_14530_14551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (1))){
var state_14528__$1 = state_14528;
var statearr_14531_14552 = state_14528__$1;
(statearr_14531_14552[(2)] = null);

(statearr_14531_14552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (4))){
var inst_14510 = (state_14528[(7)]);
var inst_14510__$1 = (state_14528[(2)]);
var inst_14511 = (inst_14510__$1 == null);
var state_14528__$1 = (function (){var statearr_14532 = state_14528;
(statearr_14532[(7)] = inst_14510__$1);

return statearr_14532;
})();
if(cljs.core.truth_(inst_14511)){
var statearr_14533_14553 = state_14528__$1;
(statearr_14533_14553[(1)] = (5));

} else {
var statearr_14534_14554 = state_14528__$1;
(statearr_14534_14554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (6))){
var inst_14510 = (state_14528[(7)]);
var inst_14515 = p.call(null,inst_14510);
var state_14528__$1 = state_14528;
if(cljs.core.truth_(inst_14515)){
var statearr_14535_14555 = state_14528__$1;
(statearr_14535_14555[(1)] = (8));

} else {
var statearr_14536_14556 = state_14528__$1;
(statearr_14536_14556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (3))){
var inst_14526 = (state_14528[(2)]);
var state_14528__$1 = state_14528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14528__$1,inst_14526);
} else {
if((state_val_14529 === (2))){
var state_14528__$1 = state_14528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14528__$1,(4),ch);
} else {
if((state_val_14529 === (11))){
var inst_14518 = (state_14528[(2)]);
var state_14528__$1 = state_14528;
var statearr_14537_14557 = state_14528__$1;
(statearr_14537_14557[(2)] = inst_14518);

(statearr_14537_14557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (9))){
var state_14528__$1 = state_14528;
var statearr_14538_14558 = state_14528__$1;
(statearr_14538_14558[(2)] = null);

(statearr_14538_14558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (5))){
var inst_14513 = cljs.core.async.close_BANG_.call(null,out);
var state_14528__$1 = state_14528;
var statearr_14539_14559 = state_14528__$1;
(statearr_14539_14559[(2)] = inst_14513);

(statearr_14539_14559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (10))){
var inst_14521 = (state_14528[(2)]);
var state_14528__$1 = (function (){var statearr_14540 = state_14528;
(statearr_14540[(8)] = inst_14521);

return statearr_14540;
})();
var statearr_14541_14560 = state_14528__$1;
(statearr_14541_14560[(2)] = null);

(statearr_14541_14560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (8))){
var inst_14510 = (state_14528[(7)]);
var state_14528__$1 = state_14528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14528__$1,(11),out,inst_14510);
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
});})(c__6916__auto___14550,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14550,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14545 = [null,null,null,null,null,null,null,null,null];
(statearr_14545[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14545[(1)] = (1));

return statearr_14545;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14528){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14546){if((e14546 instanceof Object)){
var ex__6858__auto__ = e14546;
var statearr_14547_14561 = state_14528;
(statearr_14547_14561[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14562 = state_14528;
state_14528 = G__14562;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14550,out))
})();
var state__6918__auto__ = (function (){var statearr_14548 = f__6917__auto__.call(null);
(statearr_14548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14550);

return statearr_14548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14550,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__14564 = arguments.length;
switch (G__14564) {
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
return (function (state_14731){
var state_val_14732 = (state_14731[(1)]);
if((state_val_14732 === (7))){
var inst_14727 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14733_14774 = state_14731__$1;
(statearr_14733_14774[(2)] = inst_14727);

(statearr_14733_14774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (20))){
var inst_14697 = (state_14731[(7)]);
var inst_14708 = (state_14731[(2)]);
var inst_14709 = cljs.core.next.call(null,inst_14697);
var inst_14683 = inst_14709;
var inst_14684 = null;
var inst_14685 = (0);
var inst_14686 = (0);
var state_14731__$1 = (function (){var statearr_14734 = state_14731;
(statearr_14734[(8)] = inst_14683);

(statearr_14734[(9)] = inst_14684);

(statearr_14734[(10)] = inst_14685);

(statearr_14734[(11)] = inst_14686);

(statearr_14734[(12)] = inst_14708);

return statearr_14734;
})();
var statearr_14735_14775 = state_14731__$1;
(statearr_14735_14775[(2)] = null);

(statearr_14735_14775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (1))){
var state_14731__$1 = state_14731;
var statearr_14736_14776 = state_14731__$1;
(statearr_14736_14776[(2)] = null);

(statearr_14736_14776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (4))){
var inst_14672 = (state_14731[(13)]);
var inst_14672__$1 = (state_14731[(2)]);
var inst_14673 = (inst_14672__$1 == null);
var state_14731__$1 = (function (){var statearr_14737 = state_14731;
(statearr_14737[(13)] = inst_14672__$1);

return statearr_14737;
})();
if(cljs.core.truth_(inst_14673)){
var statearr_14738_14777 = state_14731__$1;
(statearr_14738_14777[(1)] = (5));

} else {
var statearr_14739_14778 = state_14731__$1;
(statearr_14739_14778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (15))){
var state_14731__$1 = state_14731;
var statearr_14743_14779 = state_14731__$1;
(statearr_14743_14779[(2)] = null);

(statearr_14743_14779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (21))){
var state_14731__$1 = state_14731;
var statearr_14744_14780 = state_14731__$1;
(statearr_14744_14780[(2)] = null);

(statearr_14744_14780[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (13))){
var inst_14683 = (state_14731[(8)]);
var inst_14684 = (state_14731[(9)]);
var inst_14685 = (state_14731[(10)]);
var inst_14686 = (state_14731[(11)]);
var inst_14693 = (state_14731[(2)]);
var inst_14694 = (inst_14686 + (1));
var tmp14740 = inst_14683;
var tmp14741 = inst_14684;
var tmp14742 = inst_14685;
var inst_14683__$1 = tmp14740;
var inst_14684__$1 = tmp14741;
var inst_14685__$1 = tmp14742;
var inst_14686__$1 = inst_14694;
var state_14731__$1 = (function (){var statearr_14745 = state_14731;
(statearr_14745[(8)] = inst_14683__$1);

(statearr_14745[(9)] = inst_14684__$1);

(statearr_14745[(14)] = inst_14693);

(statearr_14745[(10)] = inst_14685__$1);

(statearr_14745[(11)] = inst_14686__$1);

return statearr_14745;
})();
var statearr_14746_14781 = state_14731__$1;
(statearr_14746_14781[(2)] = null);

(statearr_14746_14781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (22))){
var state_14731__$1 = state_14731;
var statearr_14747_14782 = state_14731__$1;
(statearr_14747_14782[(2)] = null);

(statearr_14747_14782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (6))){
var inst_14672 = (state_14731[(13)]);
var inst_14681 = f.call(null,inst_14672);
var inst_14682 = cljs.core.seq.call(null,inst_14681);
var inst_14683 = inst_14682;
var inst_14684 = null;
var inst_14685 = (0);
var inst_14686 = (0);
var state_14731__$1 = (function (){var statearr_14748 = state_14731;
(statearr_14748[(8)] = inst_14683);

(statearr_14748[(9)] = inst_14684);

(statearr_14748[(10)] = inst_14685);

(statearr_14748[(11)] = inst_14686);

return statearr_14748;
})();
var statearr_14749_14783 = state_14731__$1;
(statearr_14749_14783[(2)] = null);

(statearr_14749_14783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (17))){
var inst_14697 = (state_14731[(7)]);
var inst_14701 = cljs.core.chunk_first.call(null,inst_14697);
var inst_14702 = cljs.core.chunk_rest.call(null,inst_14697);
var inst_14703 = cljs.core.count.call(null,inst_14701);
var inst_14683 = inst_14702;
var inst_14684 = inst_14701;
var inst_14685 = inst_14703;
var inst_14686 = (0);
var state_14731__$1 = (function (){var statearr_14750 = state_14731;
(statearr_14750[(8)] = inst_14683);

(statearr_14750[(9)] = inst_14684);

(statearr_14750[(10)] = inst_14685);

(statearr_14750[(11)] = inst_14686);

return statearr_14750;
})();
var statearr_14751_14784 = state_14731__$1;
(statearr_14751_14784[(2)] = null);

(statearr_14751_14784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (3))){
var inst_14729 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14731__$1,inst_14729);
} else {
if((state_val_14732 === (12))){
var inst_14717 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14752_14785 = state_14731__$1;
(statearr_14752_14785[(2)] = inst_14717);

(statearr_14752_14785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (2))){
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14731__$1,(4),in$);
} else {
if((state_val_14732 === (23))){
var inst_14725 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14753_14786 = state_14731__$1;
(statearr_14753_14786[(2)] = inst_14725);

(statearr_14753_14786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (19))){
var inst_14712 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14754_14787 = state_14731__$1;
(statearr_14754_14787[(2)] = inst_14712);

(statearr_14754_14787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (11))){
var inst_14697 = (state_14731[(7)]);
var inst_14683 = (state_14731[(8)]);
var inst_14697__$1 = cljs.core.seq.call(null,inst_14683);
var state_14731__$1 = (function (){var statearr_14755 = state_14731;
(statearr_14755[(7)] = inst_14697__$1);

return statearr_14755;
})();
if(inst_14697__$1){
var statearr_14756_14788 = state_14731__$1;
(statearr_14756_14788[(1)] = (14));

} else {
var statearr_14757_14789 = state_14731__$1;
(statearr_14757_14789[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (9))){
var inst_14719 = (state_14731[(2)]);
var inst_14720 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14731__$1 = (function (){var statearr_14758 = state_14731;
(statearr_14758[(15)] = inst_14719);

return statearr_14758;
})();
if(cljs.core.truth_(inst_14720)){
var statearr_14759_14790 = state_14731__$1;
(statearr_14759_14790[(1)] = (21));

} else {
var statearr_14760_14791 = state_14731__$1;
(statearr_14760_14791[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (5))){
var inst_14675 = cljs.core.async.close_BANG_.call(null,out);
var state_14731__$1 = state_14731;
var statearr_14761_14792 = state_14731__$1;
(statearr_14761_14792[(2)] = inst_14675);

(statearr_14761_14792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (14))){
var inst_14697 = (state_14731[(7)]);
var inst_14699 = cljs.core.chunked_seq_QMARK_.call(null,inst_14697);
var state_14731__$1 = state_14731;
if(inst_14699){
var statearr_14762_14793 = state_14731__$1;
(statearr_14762_14793[(1)] = (17));

} else {
var statearr_14763_14794 = state_14731__$1;
(statearr_14763_14794[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (16))){
var inst_14715 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14764_14795 = state_14731__$1;
(statearr_14764_14795[(2)] = inst_14715);

(statearr_14764_14795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (10))){
var inst_14684 = (state_14731[(9)]);
var inst_14686 = (state_14731[(11)]);
var inst_14691 = cljs.core._nth.call(null,inst_14684,inst_14686);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14731__$1,(13),out,inst_14691);
} else {
if((state_val_14732 === (18))){
var inst_14697 = (state_14731[(7)]);
var inst_14706 = cljs.core.first.call(null,inst_14697);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14731__$1,(20),out,inst_14706);
} else {
if((state_val_14732 === (8))){
var inst_14685 = (state_14731[(10)]);
var inst_14686 = (state_14731[(11)]);
var inst_14688 = (inst_14686 < inst_14685);
var inst_14689 = inst_14688;
var state_14731__$1 = state_14731;
if(cljs.core.truth_(inst_14689)){
var statearr_14765_14796 = state_14731__$1;
(statearr_14765_14796[(1)] = (10));

} else {
var statearr_14766_14797 = state_14731__$1;
(statearr_14766_14797[(1)] = (11));

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
var statearr_14770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14770[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__);

(statearr_14770[(1)] = (1));

return statearr_14770;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____1 = (function (state_14731){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14771){if((e14771 instanceof Object)){
var ex__6858__auto__ = e14771;
var statearr_14772_14798 = state_14731;
(statearr_14772_14798[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14799 = state_14731;
state_14731 = G__14799;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__ = function(state_14731){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____1.call(this,state_14731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6855__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_14773 = f__6917__auto__.call(null);
(statearr_14773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_14773;
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
var G__14801 = arguments.length;
switch (G__14801) {
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
var G__14804 = arguments.length;
switch (G__14804) {
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
var G__14807 = arguments.length;
switch (G__14807) {
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
var c__6916__auto___14857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14857,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14857,out){
return (function (state_14831){
var state_val_14832 = (state_14831[(1)]);
if((state_val_14832 === (7))){
var inst_14826 = (state_14831[(2)]);
var state_14831__$1 = state_14831;
var statearr_14833_14858 = state_14831__$1;
(statearr_14833_14858[(2)] = inst_14826);

(statearr_14833_14858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (1))){
var inst_14808 = null;
var state_14831__$1 = (function (){var statearr_14834 = state_14831;
(statearr_14834[(7)] = inst_14808);

return statearr_14834;
})();
var statearr_14835_14859 = state_14831__$1;
(statearr_14835_14859[(2)] = null);

(statearr_14835_14859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (4))){
var inst_14811 = (state_14831[(8)]);
var inst_14811__$1 = (state_14831[(2)]);
var inst_14812 = (inst_14811__$1 == null);
var inst_14813 = cljs.core.not.call(null,inst_14812);
var state_14831__$1 = (function (){var statearr_14836 = state_14831;
(statearr_14836[(8)] = inst_14811__$1);

return statearr_14836;
})();
if(inst_14813){
var statearr_14837_14860 = state_14831__$1;
(statearr_14837_14860[(1)] = (5));

} else {
var statearr_14838_14861 = state_14831__$1;
(statearr_14838_14861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (6))){
var state_14831__$1 = state_14831;
var statearr_14839_14862 = state_14831__$1;
(statearr_14839_14862[(2)] = null);

(statearr_14839_14862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (3))){
var inst_14828 = (state_14831[(2)]);
var inst_14829 = cljs.core.async.close_BANG_.call(null,out);
var state_14831__$1 = (function (){var statearr_14840 = state_14831;
(statearr_14840[(9)] = inst_14828);

return statearr_14840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14831__$1,inst_14829);
} else {
if((state_val_14832 === (2))){
var state_14831__$1 = state_14831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14831__$1,(4),ch);
} else {
if((state_val_14832 === (11))){
var inst_14811 = (state_14831[(8)]);
var inst_14820 = (state_14831[(2)]);
var inst_14808 = inst_14811;
var state_14831__$1 = (function (){var statearr_14841 = state_14831;
(statearr_14841[(10)] = inst_14820);

(statearr_14841[(7)] = inst_14808);

return statearr_14841;
})();
var statearr_14842_14863 = state_14831__$1;
(statearr_14842_14863[(2)] = null);

(statearr_14842_14863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (9))){
var inst_14811 = (state_14831[(8)]);
var state_14831__$1 = state_14831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14831__$1,(11),out,inst_14811);
} else {
if((state_val_14832 === (5))){
var inst_14808 = (state_14831[(7)]);
var inst_14811 = (state_14831[(8)]);
var inst_14815 = cljs.core._EQ_.call(null,inst_14811,inst_14808);
var state_14831__$1 = state_14831;
if(inst_14815){
var statearr_14844_14864 = state_14831__$1;
(statearr_14844_14864[(1)] = (8));

} else {
var statearr_14845_14865 = state_14831__$1;
(statearr_14845_14865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (10))){
var inst_14823 = (state_14831[(2)]);
var state_14831__$1 = state_14831;
var statearr_14846_14866 = state_14831__$1;
(statearr_14846_14866[(2)] = inst_14823);

(statearr_14846_14866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14832 === (8))){
var inst_14808 = (state_14831[(7)]);
var tmp14843 = inst_14808;
var inst_14808__$1 = tmp14843;
var state_14831__$1 = (function (){var statearr_14847 = state_14831;
(statearr_14847[(7)] = inst_14808__$1);

return statearr_14847;
})();
var statearr_14848_14867 = state_14831__$1;
(statearr_14848_14867[(2)] = null);

(statearr_14848_14867[(1)] = (2));


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
});})(c__6916__auto___14857,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14857,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14852[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14852[(1)] = (1));

return statearr_14852;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14831){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14853){if((e14853 instanceof Object)){
var ex__6858__auto__ = e14853;
var statearr_14854_14868 = state_14831;
(statearr_14854_14868[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14869 = state_14831;
state_14831 = G__14869;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14857,out))
})();
var state__6918__auto__ = (function (){var statearr_14855 = f__6917__auto__.call(null);
(statearr_14855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14857);

return statearr_14855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14857,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__14871 = arguments.length;
switch (G__14871) {
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
var c__6916__auto___14940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___14940,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___14940,out){
return (function (state_14909){
var state_val_14910 = (state_14909[(1)]);
if((state_val_14910 === (7))){
var inst_14905 = (state_14909[(2)]);
var state_14909__$1 = state_14909;
var statearr_14911_14941 = state_14909__$1;
(statearr_14911_14941[(2)] = inst_14905);

(statearr_14911_14941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (1))){
var inst_14872 = (new Array(n));
var inst_14873 = inst_14872;
var inst_14874 = (0);
var state_14909__$1 = (function (){var statearr_14912 = state_14909;
(statearr_14912[(7)] = inst_14873);

(statearr_14912[(8)] = inst_14874);

return statearr_14912;
})();
var statearr_14913_14942 = state_14909__$1;
(statearr_14913_14942[(2)] = null);

(statearr_14913_14942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (4))){
var inst_14877 = (state_14909[(9)]);
var inst_14877__$1 = (state_14909[(2)]);
var inst_14878 = (inst_14877__$1 == null);
var inst_14879 = cljs.core.not.call(null,inst_14878);
var state_14909__$1 = (function (){var statearr_14914 = state_14909;
(statearr_14914[(9)] = inst_14877__$1);

return statearr_14914;
})();
if(inst_14879){
var statearr_14915_14943 = state_14909__$1;
(statearr_14915_14943[(1)] = (5));

} else {
var statearr_14916_14944 = state_14909__$1;
(statearr_14916_14944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (15))){
var inst_14899 = (state_14909[(2)]);
var state_14909__$1 = state_14909;
var statearr_14917_14945 = state_14909__$1;
(statearr_14917_14945[(2)] = inst_14899);

(statearr_14917_14945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (13))){
var state_14909__$1 = state_14909;
var statearr_14918_14946 = state_14909__$1;
(statearr_14918_14946[(2)] = null);

(statearr_14918_14946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (6))){
var inst_14874 = (state_14909[(8)]);
var inst_14895 = (inst_14874 > (0));
var state_14909__$1 = state_14909;
if(cljs.core.truth_(inst_14895)){
var statearr_14919_14947 = state_14909__$1;
(statearr_14919_14947[(1)] = (12));

} else {
var statearr_14920_14948 = state_14909__$1;
(statearr_14920_14948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (3))){
var inst_14907 = (state_14909[(2)]);
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14909__$1,inst_14907);
} else {
if((state_val_14910 === (12))){
var inst_14873 = (state_14909[(7)]);
var inst_14897 = cljs.core.vec.call(null,inst_14873);
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14909__$1,(15),out,inst_14897);
} else {
if((state_val_14910 === (2))){
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14909__$1,(4),ch);
} else {
if((state_val_14910 === (11))){
var inst_14889 = (state_14909[(2)]);
var inst_14890 = (new Array(n));
var inst_14873 = inst_14890;
var inst_14874 = (0);
var state_14909__$1 = (function (){var statearr_14921 = state_14909;
(statearr_14921[(10)] = inst_14889);

(statearr_14921[(7)] = inst_14873);

(statearr_14921[(8)] = inst_14874);

return statearr_14921;
})();
var statearr_14922_14949 = state_14909__$1;
(statearr_14922_14949[(2)] = null);

(statearr_14922_14949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (9))){
var inst_14873 = (state_14909[(7)]);
var inst_14887 = cljs.core.vec.call(null,inst_14873);
var state_14909__$1 = state_14909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14909__$1,(11),out,inst_14887);
} else {
if((state_val_14910 === (5))){
var inst_14882 = (state_14909[(11)]);
var inst_14873 = (state_14909[(7)]);
var inst_14874 = (state_14909[(8)]);
var inst_14877 = (state_14909[(9)]);
var inst_14881 = (inst_14873[inst_14874] = inst_14877);
var inst_14882__$1 = (inst_14874 + (1));
var inst_14883 = (inst_14882__$1 < n);
var state_14909__$1 = (function (){var statearr_14923 = state_14909;
(statearr_14923[(11)] = inst_14882__$1);

(statearr_14923[(12)] = inst_14881);

return statearr_14923;
})();
if(cljs.core.truth_(inst_14883)){
var statearr_14924_14950 = state_14909__$1;
(statearr_14924_14950[(1)] = (8));

} else {
var statearr_14925_14951 = state_14909__$1;
(statearr_14925_14951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (14))){
var inst_14902 = (state_14909[(2)]);
var inst_14903 = cljs.core.async.close_BANG_.call(null,out);
var state_14909__$1 = (function (){var statearr_14927 = state_14909;
(statearr_14927[(13)] = inst_14902);

return statearr_14927;
})();
var statearr_14928_14952 = state_14909__$1;
(statearr_14928_14952[(2)] = inst_14903);

(statearr_14928_14952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (10))){
var inst_14893 = (state_14909[(2)]);
var state_14909__$1 = state_14909;
var statearr_14929_14953 = state_14909__$1;
(statearr_14929_14953[(2)] = inst_14893);

(statearr_14929_14953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14910 === (8))){
var inst_14882 = (state_14909[(11)]);
var inst_14873 = (state_14909[(7)]);
var tmp14926 = inst_14873;
var inst_14873__$1 = tmp14926;
var inst_14874 = inst_14882;
var state_14909__$1 = (function (){var statearr_14930 = state_14909;
(statearr_14930[(7)] = inst_14873__$1);

(statearr_14930[(8)] = inst_14874);

return statearr_14930;
})();
var statearr_14931_14954 = state_14909__$1;
(statearr_14931_14954[(2)] = null);

(statearr_14931_14954[(1)] = (2));


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
});})(c__6916__auto___14940,out))
;
return ((function (switch__6854__auto__,c__6916__auto___14940,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_14935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14935[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_14935[(1)] = (1));

return statearr_14935;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_14909){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_14909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e14936){if((e14936 instanceof Object)){
var ex__6858__auto__ = e14936;
var statearr_14937_14955 = state_14909;
(statearr_14937_14955[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14956 = state_14909;
state_14909 = G__14956;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_14909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_14909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___14940,out))
})();
var state__6918__auto__ = (function (){var statearr_14938 = f__6917__auto__.call(null);
(statearr_14938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___14940);

return statearr_14938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___14940,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__14958 = arguments.length;
switch (G__14958) {
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
var c__6916__auto___15031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___15031,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___15031,out){
return (function (state_15000){
var state_val_15001 = (state_15000[(1)]);
if((state_val_15001 === (7))){
var inst_14996 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
var statearr_15002_15032 = state_15000__$1;
(statearr_15002_15032[(2)] = inst_14996);

(statearr_15002_15032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (1))){
var inst_14959 = [];
var inst_14960 = inst_14959;
var inst_14961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15000__$1 = (function (){var statearr_15003 = state_15000;
(statearr_15003[(7)] = inst_14960);

(statearr_15003[(8)] = inst_14961);

return statearr_15003;
})();
var statearr_15004_15033 = state_15000__$1;
(statearr_15004_15033[(2)] = null);

(statearr_15004_15033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (4))){
var inst_14964 = (state_15000[(9)]);
var inst_14964__$1 = (state_15000[(2)]);
var inst_14965 = (inst_14964__$1 == null);
var inst_14966 = cljs.core.not.call(null,inst_14965);
var state_15000__$1 = (function (){var statearr_15005 = state_15000;
(statearr_15005[(9)] = inst_14964__$1);

return statearr_15005;
})();
if(inst_14966){
var statearr_15006_15034 = state_15000__$1;
(statearr_15006_15034[(1)] = (5));

} else {
var statearr_15007_15035 = state_15000__$1;
(statearr_15007_15035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (15))){
var inst_14990 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
var statearr_15008_15036 = state_15000__$1;
(statearr_15008_15036[(2)] = inst_14990);

(statearr_15008_15036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (13))){
var state_15000__$1 = state_15000;
var statearr_15009_15037 = state_15000__$1;
(statearr_15009_15037[(2)] = null);

(statearr_15009_15037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (6))){
var inst_14960 = (state_15000[(7)]);
var inst_14985 = inst_14960.length;
var inst_14986 = (inst_14985 > (0));
var state_15000__$1 = state_15000;
if(cljs.core.truth_(inst_14986)){
var statearr_15010_15038 = state_15000__$1;
(statearr_15010_15038[(1)] = (12));

} else {
var statearr_15011_15039 = state_15000__$1;
(statearr_15011_15039[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (3))){
var inst_14998 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15000__$1,inst_14998);
} else {
if((state_val_15001 === (12))){
var inst_14960 = (state_15000[(7)]);
var inst_14988 = cljs.core.vec.call(null,inst_14960);
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15000__$1,(15),out,inst_14988);
} else {
if((state_val_15001 === (2))){
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15000__$1,(4),ch);
} else {
if((state_val_15001 === (11))){
var inst_14968 = (state_15000[(10)]);
var inst_14964 = (state_15000[(9)]);
var inst_14978 = (state_15000[(2)]);
var inst_14979 = [];
var inst_14980 = inst_14979.push(inst_14964);
var inst_14960 = inst_14979;
var inst_14961 = inst_14968;
var state_15000__$1 = (function (){var statearr_15012 = state_15000;
(statearr_15012[(11)] = inst_14980);

(statearr_15012[(12)] = inst_14978);

(statearr_15012[(7)] = inst_14960);

(statearr_15012[(8)] = inst_14961);

return statearr_15012;
})();
var statearr_15013_15040 = state_15000__$1;
(statearr_15013_15040[(2)] = null);

(statearr_15013_15040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (9))){
var inst_14960 = (state_15000[(7)]);
var inst_14976 = cljs.core.vec.call(null,inst_14960);
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15000__$1,(11),out,inst_14976);
} else {
if((state_val_15001 === (5))){
var inst_14968 = (state_15000[(10)]);
var inst_14964 = (state_15000[(9)]);
var inst_14961 = (state_15000[(8)]);
var inst_14968__$1 = f.call(null,inst_14964);
var inst_14969 = cljs.core._EQ_.call(null,inst_14968__$1,inst_14961);
var inst_14970 = cljs.core.keyword_identical_QMARK_.call(null,inst_14961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14971 = (inst_14969) || (inst_14970);
var state_15000__$1 = (function (){var statearr_15014 = state_15000;
(statearr_15014[(10)] = inst_14968__$1);

return statearr_15014;
})();
if(cljs.core.truth_(inst_14971)){
var statearr_15015_15041 = state_15000__$1;
(statearr_15015_15041[(1)] = (8));

} else {
var statearr_15016_15042 = state_15000__$1;
(statearr_15016_15042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (14))){
var inst_14993 = (state_15000[(2)]);
var inst_14994 = cljs.core.async.close_BANG_.call(null,out);
var state_15000__$1 = (function (){var statearr_15018 = state_15000;
(statearr_15018[(13)] = inst_14993);

return statearr_15018;
})();
var statearr_15019_15043 = state_15000__$1;
(statearr_15019_15043[(2)] = inst_14994);

(statearr_15019_15043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (10))){
var inst_14983 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
var statearr_15020_15044 = state_15000__$1;
(statearr_15020_15044[(2)] = inst_14983);

(statearr_15020_15044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (8))){
var inst_14968 = (state_15000[(10)]);
var inst_14964 = (state_15000[(9)]);
var inst_14960 = (state_15000[(7)]);
var inst_14973 = inst_14960.push(inst_14964);
var tmp15017 = inst_14960;
var inst_14960__$1 = tmp15017;
var inst_14961 = inst_14968;
var state_15000__$1 = (function (){var statearr_15021 = state_15000;
(statearr_15021[(14)] = inst_14973);

(statearr_15021[(7)] = inst_14960__$1);

(statearr_15021[(8)] = inst_14961);

return statearr_15021;
})();
var statearr_15022_15045 = state_15000__$1;
(statearr_15022_15045[(2)] = null);

(statearr_15022_15045[(1)] = (2));


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
});})(c__6916__auto___15031,out))
;
return ((function (switch__6854__auto__,c__6916__auto___15031,out){
return (function() {
var cljs$core$async$state_machine__6855__auto__ = null;
var cljs$core$async$state_machine__6855__auto____0 = (function (){
var statearr_15026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15026[(0)] = cljs$core$async$state_machine__6855__auto__);

(statearr_15026[(1)] = (1));

return statearr_15026;
});
var cljs$core$async$state_machine__6855__auto____1 = (function (state_15000){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_15000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e15027){if((e15027 instanceof Object)){
var ex__6858__auto__ = e15027;
var statearr_15028_15046 = state_15000;
(statearr_15028_15046[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15047 = state_15000;
state_15000 = G__15047;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
cljs$core$async$state_machine__6855__auto__ = function(state_15000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6855__auto____1.call(this,state_15000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6855__auto____0;
cljs$core$async$state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6855__auto____1;
return cljs$core$async$state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___15031,out))
})();
var state__6918__auto__ = (function (){var statearr_15029 = f__6917__auto__.call(null);
(statearr_15029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___15031);

return statearr_15029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___15031,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440339749236