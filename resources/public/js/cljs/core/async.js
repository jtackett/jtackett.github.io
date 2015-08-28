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
if(typeof cljs.core.async.t12882 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12882 = (function (f,fn_handler,meta12883){
this.f = f;
this.fn_handler = fn_handler;
this.meta12883 = meta12883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12882.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12884){
var self__ = this;
var _12884__$1 = this;
return self__.meta12883;
});

cljs.core.async.t12882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12884,meta12883__$1){
var self__ = this;
var _12884__$1 = this;
return (new cljs.core.async.t12882(self__.f,self__.fn_handler,meta12883__$1));
});

cljs.core.async.t12882.cljs$lang$type = true;

cljs.core.async.t12882.cljs$lang$ctorStr = "cljs.core.async/t12882";

cljs.core.async.t12882.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12882");
});

cljs.core.async.__GT_t12882 = (function cljs$core$async$fn_handler_$___GT_t12882(f__$1,fn_handler__$1,meta12883){
return (new cljs.core.async.t12882(f__$1,fn_handler__$1,meta12883));
});

}

return (new cljs.core.async.t12882(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12886 = buff;
if(G__12886){
var bit__5007__auto__ = null;
if(cljs.core.truth_((function (){var or__4333__auto__ = bit__5007__auto__;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return G__12886.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12886.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12886);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12886);
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
var G__12888 = arguments.length;
switch (G__12888) {
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
var G__12891 = arguments.length;
switch (G__12891) {
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
var val_12893 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12893);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12893,ret){
return (function (){
return fn1.call(null,val_12893);
});})(val_12893,ret))
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
var G__12895 = arguments.length;
switch (G__12895) {
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
var n__5218__auto___12897 = n;
var x_12898 = (0);
while(true){
if((x_12898 < n__5218__auto___12897)){
(a[x_12898] = (0));

var G__12899 = (x_12898 + (1));
x_12898 = G__12899;
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

var G__12900 = (i + (1));
i = G__12900;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12904 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12904 = (function (flag,alt_flag,meta12905){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12905 = meta12905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12906){
var self__ = this;
var _12906__$1 = this;
return self__.meta12905;
});})(flag))
;

cljs.core.async.t12904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12906,meta12905__$1){
var self__ = this;
var _12906__$1 = this;
return (new cljs.core.async.t12904(self__.flag,self__.alt_flag,meta12905__$1));
});})(flag))
;

cljs.core.async.t12904.cljs$lang$type = true;

cljs.core.async.t12904.cljs$lang$ctorStr = "cljs.core.async/t12904";

cljs.core.async.t12904.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12904");
});})(flag))
;

cljs.core.async.__GT_t12904 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12904(flag__$1,alt_flag__$1,meta12905){
return (new cljs.core.async.t12904(flag__$1,alt_flag__$1,meta12905));
});})(flag))
;

}

return (new cljs.core.async.t12904(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12910 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12910 = (function (cb,flag,alt_handler,meta12911){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12911 = meta12911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12910.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12912){
var self__ = this;
var _12912__$1 = this;
return self__.meta12911;
});

cljs.core.async.t12910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12912,meta12911__$1){
var self__ = this;
var _12912__$1 = this;
return (new cljs.core.async.t12910(self__.cb,self__.flag,self__.alt_handler,meta12911__$1));
});

cljs.core.async.t12910.cljs$lang$type = true;

cljs.core.async.t12910.cljs$lang$ctorStr = "cljs.core.async/t12910";

cljs.core.async.t12910.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12910");
});

cljs.core.async.__GT_t12910 = (function cljs$core$async$alt_handler_$___GT_t12910(cb__$1,flag__$1,alt_handler__$1,meta12911){
return (new cljs.core.async.t12910(cb__$1,flag__$1,alt_handler__$1,meta12911));
});

}

return (new cljs.core.async.t12910(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12913_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12913_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12914_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12914_SHARP_,port], null));
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
var G__12915 = (i + (1));
i = G__12915;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12918){
var map__12919 = p__12918;
var map__12919__$1 = ((cljs.core.seq_QMARK_.call(null,map__12919))?cljs.core.apply.call(null,cljs.core.hash_map,map__12919):map__12919);
var opts = map__12919__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12916){
var G__12917 = cljs.core.first.call(null,seq12916);
var seq12916__$1 = cljs.core.next.call(null,seq12916);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12917,seq12916__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__12921 = arguments.length;
switch (G__12921) {
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
var c__7699__auto___12970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___12970){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___12970){
return (function (state_12945){
var state_val_12946 = (state_12945[(1)]);
if((state_val_12946 === (7))){
var inst_12941 = (state_12945[(2)]);
var state_12945__$1 = state_12945;
var statearr_12947_12971 = state_12945__$1;
(statearr_12947_12971[(2)] = inst_12941);

(statearr_12947_12971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (1))){
var state_12945__$1 = state_12945;
var statearr_12948_12972 = state_12945__$1;
(statearr_12948_12972[(2)] = null);

(statearr_12948_12972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (4))){
var inst_12924 = (state_12945[(7)]);
var inst_12924__$1 = (state_12945[(2)]);
var inst_12925 = (inst_12924__$1 == null);
var state_12945__$1 = (function (){var statearr_12949 = state_12945;
(statearr_12949[(7)] = inst_12924__$1);

return statearr_12949;
})();
if(cljs.core.truth_(inst_12925)){
var statearr_12950_12973 = state_12945__$1;
(statearr_12950_12973[(1)] = (5));

} else {
var statearr_12951_12974 = state_12945__$1;
(statearr_12951_12974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (13))){
var state_12945__$1 = state_12945;
var statearr_12952_12975 = state_12945__$1;
(statearr_12952_12975[(2)] = null);

(statearr_12952_12975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (6))){
var inst_12924 = (state_12945[(7)]);
var state_12945__$1 = state_12945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12945__$1,(11),to,inst_12924);
} else {
if((state_val_12946 === (3))){
var inst_12943 = (state_12945[(2)]);
var state_12945__$1 = state_12945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12945__$1,inst_12943);
} else {
if((state_val_12946 === (12))){
var state_12945__$1 = state_12945;
var statearr_12953_12976 = state_12945__$1;
(statearr_12953_12976[(2)] = null);

(statearr_12953_12976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (2))){
var state_12945__$1 = state_12945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12945__$1,(4),from);
} else {
if((state_val_12946 === (11))){
var inst_12934 = (state_12945[(2)]);
var state_12945__$1 = state_12945;
if(cljs.core.truth_(inst_12934)){
var statearr_12954_12977 = state_12945__$1;
(statearr_12954_12977[(1)] = (12));

} else {
var statearr_12955_12978 = state_12945__$1;
(statearr_12955_12978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (9))){
var state_12945__$1 = state_12945;
var statearr_12956_12979 = state_12945__$1;
(statearr_12956_12979[(2)] = null);

(statearr_12956_12979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (5))){
var state_12945__$1 = state_12945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12957_12980 = state_12945__$1;
(statearr_12957_12980[(1)] = (8));

} else {
var statearr_12958_12981 = state_12945__$1;
(statearr_12958_12981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (14))){
var inst_12939 = (state_12945[(2)]);
var state_12945__$1 = state_12945;
var statearr_12959_12982 = state_12945__$1;
(statearr_12959_12982[(2)] = inst_12939);

(statearr_12959_12982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (10))){
var inst_12931 = (state_12945[(2)]);
var state_12945__$1 = state_12945;
var statearr_12960_12983 = state_12945__$1;
(statearr_12960_12983[(2)] = inst_12931);

(statearr_12960_12983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12946 === (8))){
var inst_12928 = cljs.core.async.close_BANG_.call(null,to);
var state_12945__$1 = state_12945;
var statearr_12961_12984 = state_12945__$1;
(statearr_12961_12984[(2)] = inst_12928);

(statearr_12961_12984[(1)] = (10));


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
});})(c__7699__auto___12970))
;
return ((function (switch__7637__auto__,c__7699__auto___12970){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_12965 = [null,null,null,null,null,null,null,null];
(statearr_12965[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_12965[(1)] = (1));

return statearr_12965;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_12945){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_12945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e12966){if((e12966 instanceof Object)){
var ex__7641__auto__ = e12966;
var statearr_12967_12985 = state_12945;
(statearr_12967_12985[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12986 = state_12945;
state_12945 = G__12986;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_12945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_12945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___12970))
})();
var state__7701__auto__ = (function (){var statearr_12968 = f__7700__auto__.call(null);
(statearr_12968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___12970);

return statearr_12968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___12970))
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
return (function (p__13170){
var vec__13171 = p__13170;
var v = cljs.core.nth.call(null,vec__13171,(0),null);
var p = cljs.core.nth.call(null,vec__13171,(1),null);
var job = vec__13171;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7699__auto___13353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___13353,res,vec__13171,v,p,job,jobs,results){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___13353,res,vec__13171,v,p,job,jobs,results){
return (function (state_13176){
var state_val_13177 = (state_13176[(1)]);
if((state_val_13177 === (2))){
var inst_13173 = (state_13176[(2)]);
var inst_13174 = cljs.core.async.close_BANG_.call(null,res);
var state_13176__$1 = (function (){var statearr_13178 = state_13176;
(statearr_13178[(7)] = inst_13173);

return statearr_13178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13176__$1,inst_13174);
} else {
if((state_val_13177 === (1))){
var state_13176__$1 = state_13176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13176__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7699__auto___13353,res,vec__13171,v,p,job,jobs,results))
;
return ((function (switch__7637__auto__,c__7699__auto___13353,res,vec__13171,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13182 = [null,null,null,null,null,null,null,null];
(statearr_13182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13182[(1)] = (1));

return statearr_13182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13176){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13183){if((e13183 instanceof Object)){
var ex__7641__auto__ = e13183;
var statearr_13184_13354 = state_13176;
(statearr_13184_13354[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13355 = state_13176;
state_13176 = G__13355;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___13353,res,vec__13171,v,p,job,jobs,results))
})();
var state__7701__auto__ = (function (){var statearr_13185 = f__7700__auto__.call(null);
(statearr_13185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13353);

return statearr_13185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___13353,res,vec__13171,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13186){
var vec__13187 = p__13186;
var v = cljs.core.nth.call(null,vec__13187,(0),null);
var p = cljs.core.nth.call(null,vec__13187,(1),null);
var job = vec__13187;
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
var n__5218__auto___13356 = n;
var __13357 = (0);
while(true){
if((__13357 < n__5218__auto___13356)){
var G__13188_13358 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13188_13358) {
case "async":
var c__7699__auto___13360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13357,c__7699__auto___13360,G__13188_13358,n__5218__auto___13356,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (__13357,c__7699__auto___13360,G__13188_13358,n__5218__auto___13356,jobs,results,process,async){
return (function (state_13201){
var state_val_13202 = (state_13201[(1)]);
if((state_val_13202 === (7))){
var inst_13197 = (state_13201[(2)]);
var state_13201__$1 = state_13201;
var statearr_13203_13361 = state_13201__$1;
(statearr_13203_13361[(2)] = inst_13197);

(statearr_13203_13361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13202 === (6))){
var state_13201__$1 = state_13201;
var statearr_13204_13362 = state_13201__$1;
(statearr_13204_13362[(2)] = null);

(statearr_13204_13362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13202 === (5))){
var state_13201__$1 = state_13201;
var statearr_13205_13363 = state_13201__$1;
(statearr_13205_13363[(2)] = null);

(statearr_13205_13363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13202 === (4))){
var inst_13191 = (state_13201[(2)]);
var inst_13192 = async.call(null,inst_13191);
var state_13201__$1 = state_13201;
if(cljs.core.truth_(inst_13192)){
var statearr_13206_13364 = state_13201__$1;
(statearr_13206_13364[(1)] = (5));

} else {
var statearr_13207_13365 = state_13201__$1;
(statearr_13207_13365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13202 === (3))){
var inst_13199 = (state_13201[(2)]);
var state_13201__$1 = state_13201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13201__$1,inst_13199);
} else {
if((state_val_13202 === (2))){
var state_13201__$1 = state_13201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13201__$1,(4),jobs);
} else {
if((state_val_13202 === (1))){
var state_13201__$1 = state_13201;
var statearr_13208_13366 = state_13201__$1;
(statearr_13208_13366[(2)] = null);

(statearr_13208_13366[(1)] = (2));


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
});})(__13357,c__7699__auto___13360,G__13188_13358,n__5218__auto___13356,jobs,results,process,async))
;
return ((function (__13357,switch__7637__auto__,c__7699__auto___13360,G__13188_13358,n__5218__auto___13356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13212 = [null,null,null,null,null,null,null];
(statearr_13212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13212[(1)] = (1));

return statearr_13212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13201){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13213){if((e13213 instanceof Object)){
var ex__7641__auto__ = e13213;
var statearr_13214_13367 = state_13201;
(statearr_13214_13367[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13368 = state_13201;
state_13201 = G__13368;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(__13357,switch__7637__auto__,c__7699__auto___13360,G__13188_13358,n__5218__auto___13356,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13215 = f__7700__auto__.call(null);
(statearr_13215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13360);

return statearr_13215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(__13357,c__7699__auto___13360,G__13188_13358,n__5218__auto___13356,jobs,results,process,async))
);


break;
case "compute":
var c__7699__auto___13369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13357,c__7699__auto___13369,G__13188_13358,n__5218__auto___13356,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (__13357,c__7699__auto___13369,G__13188_13358,n__5218__auto___13356,jobs,results,process,async){
return (function (state_13228){
var state_val_13229 = (state_13228[(1)]);
if((state_val_13229 === (7))){
var inst_13224 = (state_13228[(2)]);
var state_13228__$1 = state_13228;
var statearr_13230_13370 = state_13228__$1;
(statearr_13230_13370[(2)] = inst_13224);

(statearr_13230_13370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13229 === (6))){
var state_13228__$1 = state_13228;
var statearr_13231_13371 = state_13228__$1;
(statearr_13231_13371[(2)] = null);

(statearr_13231_13371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13229 === (5))){
var state_13228__$1 = state_13228;
var statearr_13232_13372 = state_13228__$1;
(statearr_13232_13372[(2)] = null);

(statearr_13232_13372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13229 === (4))){
var inst_13218 = (state_13228[(2)]);
var inst_13219 = process.call(null,inst_13218);
var state_13228__$1 = state_13228;
if(cljs.core.truth_(inst_13219)){
var statearr_13233_13373 = state_13228__$1;
(statearr_13233_13373[(1)] = (5));

} else {
var statearr_13234_13374 = state_13228__$1;
(statearr_13234_13374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13229 === (3))){
var inst_13226 = (state_13228[(2)]);
var state_13228__$1 = state_13228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13228__$1,inst_13226);
} else {
if((state_val_13229 === (2))){
var state_13228__$1 = state_13228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13228__$1,(4),jobs);
} else {
if((state_val_13229 === (1))){
var state_13228__$1 = state_13228;
var statearr_13235_13375 = state_13228__$1;
(statearr_13235_13375[(2)] = null);

(statearr_13235_13375[(1)] = (2));


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
});})(__13357,c__7699__auto___13369,G__13188_13358,n__5218__auto___13356,jobs,results,process,async))
;
return ((function (__13357,switch__7637__auto__,c__7699__auto___13369,G__13188_13358,n__5218__auto___13356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13239 = [null,null,null,null,null,null,null];
(statearr_13239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13239[(1)] = (1));

return statearr_13239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13228){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13240){if((e13240 instanceof Object)){
var ex__7641__auto__ = e13240;
var statearr_13241_13376 = state_13228;
(statearr_13241_13376[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_13228;
state_13228 = G__13377;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(__13357,switch__7637__auto__,c__7699__auto___13369,G__13188_13358,n__5218__auto___13356,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13242 = f__7700__auto__.call(null);
(statearr_13242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13369);

return statearr_13242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(__13357,c__7699__auto___13369,G__13188_13358,n__5218__auto___13356,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13378 = (__13357 + (1));
__13357 = G__13378;
continue;
} else {
}
break;
}

var c__7699__auto___13379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___13379,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___13379,jobs,results,process,async){
return (function (state_13264){
var state_val_13265 = (state_13264[(1)]);
if((state_val_13265 === (9))){
var inst_13257 = (state_13264[(2)]);
var state_13264__$1 = (function (){var statearr_13266 = state_13264;
(statearr_13266[(7)] = inst_13257);

return statearr_13266;
})();
var statearr_13267_13380 = state_13264__$1;
(statearr_13267_13380[(2)] = null);

(statearr_13267_13380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13265 === (8))){
var inst_13250 = (state_13264[(8)]);
var inst_13255 = (state_13264[(2)]);
var state_13264__$1 = (function (){var statearr_13268 = state_13264;
(statearr_13268[(9)] = inst_13255);

return statearr_13268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13264__$1,(9),results,inst_13250);
} else {
if((state_val_13265 === (7))){
var inst_13260 = (state_13264[(2)]);
var state_13264__$1 = state_13264;
var statearr_13269_13381 = state_13264__$1;
(statearr_13269_13381[(2)] = inst_13260);

(statearr_13269_13381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13265 === (6))){
var inst_13250 = (state_13264[(8)]);
var inst_13245 = (state_13264[(10)]);
var inst_13250__$1 = cljs.core.async.chan.call(null,(1));
var inst_13251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13252 = [inst_13245,inst_13250__$1];
var inst_13253 = (new cljs.core.PersistentVector(null,2,(5),inst_13251,inst_13252,null));
var state_13264__$1 = (function (){var statearr_13270 = state_13264;
(statearr_13270[(8)] = inst_13250__$1);

return statearr_13270;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13264__$1,(8),jobs,inst_13253);
} else {
if((state_val_13265 === (5))){
var inst_13248 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13264__$1 = state_13264;
var statearr_13271_13382 = state_13264__$1;
(statearr_13271_13382[(2)] = inst_13248);

(statearr_13271_13382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13265 === (4))){
var inst_13245 = (state_13264[(10)]);
var inst_13245__$1 = (state_13264[(2)]);
var inst_13246 = (inst_13245__$1 == null);
var state_13264__$1 = (function (){var statearr_13272 = state_13264;
(statearr_13272[(10)] = inst_13245__$1);

return statearr_13272;
})();
if(cljs.core.truth_(inst_13246)){
var statearr_13273_13383 = state_13264__$1;
(statearr_13273_13383[(1)] = (5));

} else {
var statearr_13274_13384 = state_13264__$1;
(statearr_13274_13384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13265 === (3))){
var inst_13262 = (state_13264[(2)]);
var state_13264__$1 = state_13264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13264__$1,inst_13262);
} else {
if((state_val_13265 === (2))){
var state_13264__$1 = state_13264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13264__$1,(4),from);
} else {
if((state_val_13265 === (1))){
var state_13264__$1 = state_13264;
var statearr_13275_13385 = state_13264__$1;
(statearr_13275_13385[(2)] = null);

(statearr_13275_13385[(1)] = (2));


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
});})(c__7699__auto___13379,jobs,results,process,async))
;
return ((function (switch__7637__auto__,c__7699__auto___13379,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13279[(1)] = (1));

return statearr_13279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13264){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13280){if((e13280 instanceof Object)){
var ex__7641__auto__ = e13280;
var statearr_13281_13386 = state_13264;
(statearr_13281_13386[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13387 = state_13264;
state_13264 = G__13387;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___13379,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13282 = f__7700__auto__.call(null);
(statearr_13282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13379);

return statearr_13282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___13379,jobs,results,process,async))
);


var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,jobs,results,process,async){
return (function (state_13320){
var state_val_13321 = (state_13320[(1)]);
if((state_val_13321 === (7))){
var inst_13316 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13322_13388 = state_13320__$1;
(statearr_13322_13388[(2)] = inst_13316);

(statearr_13322_13388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (20))){
var state_13320__$1 = state_13320;
var statearr_13323_13389 = state_13320__$1;
(statearr_13323_13389[(2)] = null);

(statearr_13323_13389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (1))){
var state_13320__$1 = state_13320;
var statearr_13324_13390 = state_13320__$1;
(statearr_13324_13390[(2)] = null);

(statearr_13324_13390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (4))){
var inst_13285 = (state_13320[(7)]);
var inst_13285__$1 = (state_13320[(2)]);
var inst_13286 = (inst_13285__$1 == null);
var state_13320__$1 = (function (){var statearr_13325 = state_13320;
(statearr_13325[(7)] = inst_13285__$1);

return statearr_13325;
})();
if(cljs.core.truth_(inst_13286)){
var statearr_13326_13391 = state_13320__$1;
(statearr_13326_13391[(1)] = (5));

} else {
var statearr_13327_13392 = state_13320__$1;
(statearr_13327_13392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (15))){
var inst_13298 = (state_13320[(8)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,(18),to,inst_13298);
} else {
if((state_val_13321 === (21))){
var inst_13311 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13328_13393 = state_13320__$1;
(statearr_13328_13393[(2)] = inst_13311);

(statearr_13328_13393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (13))){
var inst_13313 = (state_13320[(2)]);
var state_13320__$1 = (function (){var statearr_13329 = state_13320;
(statearr_13329[(9)] = inst_13313);

return statearr_13329;
})();
var statearr_13330_13394 = state_13320__$1;
(statearr_13330_13394[(2)] = null);

(statearr_13330_13394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (6))){
var inst_13285 = (state_13320[(7)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,(11),inst_13285);
} else {
if((state_val_13321 === (17))){
var inst_13306 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
if(cljs.core.truth_(inst_13306)){
var statearr_13331_13395 = state_13320__$1;
(statearr_13331_13395[(1)] = (19));

} else {
var statearr_13332_13396 = state_13320__$1;
(statearr_13332_13396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (3))){
var inst_13318 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13320__$1,inst_13318);
} else {
if((state_val_13321 === (12))){
var inst_13295 = (state_13320[(10)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,(14),inst_13295);
} else {
if((state_val_13321 === (2))){
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,(4),results);
} else {
if((state_val_13321 === (19))){
var state_13320__$1 = state_13320;
var statearr_13333_13397 = state_13320__$1;
(statearr_13333_13397[(2)] = null);

(statearr_13333_13397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (11))){
var inst_13295 = (state_13320[(2)]);
var state_13320__$1 = (function (){var statearr_13334 = state_13320;
(statearr_13334[(10)] = inst_13295);

return statearr_13334;
})();
var statearr_13335_13398 = state_13320__$1;
(statearr_13335_13398[(2)] = null);

(statearr_13335_13398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (9))){
var state_13320__$1 = state_13320;
var statearr_13336_13399 = state_13320__$1;
(statearr_13336_13399[(2)] = null);

(statearr_13336_13399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (5))){
var state_13320__$1 = state_13320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13337_13400 = state_13320__$1;
(statearr_13337_13400[(1)] = (8));

} else {
var statearr_13338_13401 = state_13320__$1;
(statearr_13338_13401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (14))){
var inst_13300 = (state_13320[(11)]);
var inst_13298 = (state_13320[(8)]);
var inst_13298__$1 = (state_13320[(2)]);
var inst_13299 = (inst_13298__$1 == null);
var inst_13300__$1 = cljs.core.not.call(null,inst_13299);
var state_13320__$1 = (function (){var statearr_13339 = state_13320;
(statearr_13339[(11)] = inst_13300__$1);

(statearr_13339[(8)] = inst_13298__$1);

return statearr_13339;
})();
if(inst_13300__$1){
var statearr_13340_13402 = state_13320__$1;
(statearr_13340_13402[(1)] = (15));

} else {
var statearr_13341_13403 = state_13320__$1;
(statearr_13341_13403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (16))){
var inst_13300 = (state_13320[(11)]);
var state_13320__$1 = state_13320;
var statearr_13342_13404 = state_13320__$1;
(statearr_13342_13404[(2)] = inst_13300);

(statearr_13342_13404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (10))){
var inst_13292 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13343_13405 = state_13320__$1;
(statearr_13343_13405[(2)] = inst_13292);

(statearr_13343_13405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (18))){
var inst_13303 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13344_13406 = state_13320__$1;
(statearr_13344_13406[(2)] = inst_13303);

(statearr_13344_13406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (8))){
var inst_13289 = cljs.core.async.close_BANG_.call(null,to);
var state_13320__$1 = state_13320;
var statearr_13345_13407 = state_13320__$1;
(statearr_13345_13407[(2)] = inst_13289);

(statearr_13345_13407[(1)] = (10));


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
});})(c__7699__auto__,jobs,results,process,async))
;
return ((function (switch__7637__auto__,c__7699__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13349[(1)] = (1));

return statearr_13349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13320){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13350){if((e13350 instanceof Object)){
var ex__7641__auto__ = e13350;
var statearr_13351_13408 = state_13320;
(statearr_13351_13408[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13409 = state_13320;
state_13320 = G__13409;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13352 = f__7700__auto__.call(null);
(statearr_13352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_13352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,jobs,results,process,async))
);

return c__7699__auto__;
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
var G__13411 = arguments.length;
switch (G__13411) {
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
var G__13414 = arguments.length;
switch (G__13414) {
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
var G__13417 = arguments.length;
switch (G__13417) {
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
var c__7699__auto___13469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___13469,tc,fc){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___13469,tc,fc){
return (function (state_13443){
var state_val_13444 = (state_13443[(1)]);
if((state_val_13444 === (7))){
var inst_13439 = (state_13443[(2)]);
var state_13443__$1 = state_13443;
var statearr_13445_13470 = state_13443__$1;
(statearr_13445_13470[(2)] = inst_13439);

(statearr_13445_13470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (1))){
var state_13443__$1 = state_13443;
var statearr_13446_13471 = state_13443__$1;
(statearr_13446_13471[(2)] = null);

(statearr_13446_13471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (4))){
var inst_13420 = (state_13443[(7)]);
var inst_13420__$1 = (state_13443[(2)]);
var inst_13421 = (inst_13420__$1 == null);
var state_13443__$1 = (function (){var statearr_13447 = state_13443;
(statearr_13447[(7)] = inst_13420__$1);

return statearr_13447;
})();
if(cljs.core.truth_(inst_13421)){
var statearr_13448_13472 = state_13443__$1;
(statearr_13448_13472[(1)] = (5));

} else {
var statearr_13449_13473 = state_13443__$1;
(statearr_13449_13473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (13))){
var state_13443__$1 = state_13443;
var statearr_13450_13474 = state_13443__$1;
(statearr_13450_13474[(2)] = null);

(statearr_13450_13474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (6))){
var inst_13420 = (state_13443[(7)]);
var inst_13426 = p.call(null,inst_13420);
var state_13443__$1 = state_13443;
if(cljs.core.truth_(inst_13426)){
var statearr_13451_13475 = state_13443__$1;
(statearr_13451_13475[(1)] = (9));

} else {
var statearr_13452_13476 = state_13443__$1;
(statearr_13452_13476[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (3))){
var inst_13441 = (state_13443[(2)]);
var state_13443__$1 = state_13443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13443__$1,inst_13441);
} else {
if((state_val_13444 === (12))){
var state_13443__$1 = state_13443;
var statearr_13453_13477 = state_13443__$1;
(statearr_13453_13477[(2)] = null);

(statearr_13453_13477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (2))){
var state_13443__$1 = state_13443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13443__$1,(4),ch);
} else {
if((state_val_13444 === (11))){
var inst_13420 = (state_13443[(7)]);
var inst_13430 = (state_13443[(2)]);
var state_13443__$1 = state_13443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13443__$1,(8),inst_13430,inst_13420);
} else {
if((state_val_13444 === (9))){
var state_13443__$1 = state_13443;
var statearr_13454_13478 = state_13443__$1;
(statearr_13454_13478[(2)] = tc);

(statearr_13454_13478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (5))){
var inst_13423 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13424 = cljs.core.async.close_BANG_.call(null,fc);
var state_13443__$1 = (function (){var statearr_13455 = state_13443;
(statearr_13455[(8)] = inst_13423);

return statearr_13455;
})();
var statearr_13456_13479 = state_13443__$1;
(statearr_13456_13479[(2)] = inst_13424);

(statearr_13456_13479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (14))){
var inst_13437 = (state_13443[(2)]);
var state_13443__$1 = state_13443;
var statearr_13457_13480 = state_13443__$1;
(statearr_13457_13480[(2)] = inst_13437);

(statearr_13457_13480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (10))){
var state_13443__$1 = state_13443;
var statearr_13458_13481 = state_13443__$1;
(statearr_13458_13481[(2)] = fc);

(statearr_13458_13481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13444 === (8))){
var inst_13432 = (state_13443[(2)]);
var state_13443__$1 = state_13443;
if(cljs.core.truth_(inst_13432)){
var statearr_13459_13482 = state_13443__$1;
(statearr_13459_13482[(1)] = (12));

} else {
var statearr_13460_13483 = state_13443__$1;
(statearr_13460_13483[(1)] = (13));

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
});})(c__7699__auto___13469,tc,fc))
;
return ((function (switch__7637__auto__,c__7699__auto___13469,tc,fc){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_13464 = [null,null,null,null,null,null,null,null,null];
(statearr_13464[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_13464[(1)] = (1));

return statearr_13464;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_13443){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13465){if((e13465 instanceof Object)){
var ex__7641__auto__ = e13465;
var statearr_13466_13484 = state_13443;
(statearr_13466_13484[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13485 = state_13443;
state_13443 = G__13485;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_13443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_13443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___13469,tc,fc))
})();
var state__7701__auto__ = (function (){var statearr_13467 = f__7700__auto__.call(null);
(statearr_13467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13469);

return statearr_13467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___13469,tc,fc))
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
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_13532){
var state_val_13533 = (state_13532[(1)]);
if((state_val_13533 === (7))){
var inst_13528 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13534_13550 = state_13532__$1;
(statearr_13534_13550[(2)] = inst_13528);

(statearr_13534_13550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (6))){
var inst_13518 = (state_13532[(7)]);
var inst_13521 = (state_13532[(8)]);
var inst_13525 = f.call(null,inst_13518,inst_13521);
var inst_13518__$1 = inst_13525;
var state_13532__$1 = (function (){var statearr_13535 = state_13532;
(statearr_13535[(7)] = inst_13518__$1);

return statearr_13535;
})();
var statearr_13536_13551 = state_13532__$1;
(statearr_13536_13551[(2)] = null);

(statearr_13536_13551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (5))){
var inst_13518 = (state_13532[(7)]);
var state_13532__$1 = state_13532;
var statearr_13537_13552 = state_13532__$1;
(statearr_13537_13552[(2)] = inst_13518);

(statearr_13537_13552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (4))){
var inst_13521 = (state_13532[(8)]);
var inst_13521__$1 = (state_13532[(2)]);
var inst_13522 = (inst_13521__$1 == null);
var state_13532__$1 = (function (){var statearr_13538 = state_13532;
(statearr_13538[(8)] = inst_13521__$1);

return statearr_13538;
})();
if(cljs.core.truth_(inst_13522)){
var statearr_13539_13553 = state_13532__$1;
(statearr_13539_13553[(1)] = (5));

} else {
var statearr_13540_13554 = state_13532__$1;
(statearr_13540_13554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (3))){
var inst_13530 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13532__$1,inst_13530);
} else {
if((state_val_13533 === (2))){
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13532__$1,(4),ch);
} else {
if((state_val_13533 === (1))){
var inst_13518 = init;
var state_13532__$1 = (function (){var statearr_13541 = state_13532;
(statearr_13541[(7)] = inst_13518);

return statearr_13541;
})();
var statearr_13542_13555 = state_13532__$1;
(statearr_13542_13555[(2)] = null);

(statearr_13542_13555[(1)] = (2));


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
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7638__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7638__auto____0 = (function (){
var statearr_13546 = [null,null,null,null,null,null,null,null,null];
(statearr_13546[(0)] = cljs$core$async$reduce_$_state_machine__7638__auto__);

(statearr_13546[(1)] = (1));

return statearr_13546;
});
var cljs$core$async$reduce_$_state_machine__7638__auto____1 = (function (state_13532){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13547){if((e13547 instanceof Object)){
var ex__7641__auto__ = e13547;
var statearr_13548_13556 = state_13532;
(statearr_13548_13556[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13557 = state_13532;
state_13532 = G__13557;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7638__auto__ = function(state_13532){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7638__auto____1.call(this,state_13532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7638__auto____0;
cljs$core$async$reduce_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7638__auto____1;
return cljs$core$async$reduce_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_13549 = f__7700__auto__.call(null);
(statearr_13549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_13549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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
var G__13559 = arguments.length;
switch (G__13559) {
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
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_13584){
var state_val_13585 = (state_13584[(1)]);
if((state_val_13585 === (7))){
var inst_13566 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13586_13610 = state_13584__$1;
(statearr_13586_13610[(2)] = inst_13566);

(statearr_13586_13610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (1))){
var inst_13560 = cljs.core.seq.call(null,coll);
var inst_13561 = inst_13560;
var state_13584__$1 = (function (){var statearr_13587 = state_13584;
(statearr_13587[(7)] = inst_13561);

return statearr_13587;
})();
var statearr_13588_13611 = state_13584__$1;
(statearr_13588_13611[(2)] = null);

(statearr_13588_13611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (4))){
var inst_13561 = (state_13584[(7)]);
var inst_13564 = cljs.core.first.call(null,inst_13561);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(7),ch,inst_13564);
} else {
if((state_val_13585 === (13))){
var inst_13578 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13589_13612 = state_13584__$1;
(statearr_13589_13612[(2)] = inst_13578);

(statearr_13589_13612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (6))){
var inst_13569 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13569)){
var statearr_13590_13613 = state_13584__$1;
(statearr_13590_13613[(1)] = (8));

} else {
var statearr_13591_13614 = state_13584__$1;
(statearr_13591_13614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (3))){
var inst_13582 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13584__$1,inst_13582);
} else {
if((state_val_13585 === (12))){
var state_13584__$1 = state_13584;
var statearr_13592_13615 = state_13584__$1;
(statearr_13592_13615[(2)] = null);

(statearr_13592_13615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (2))){
var inst_13561 = (state_13584[(7)]);
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13561)){
var statearr_13593_13616 = state_13584__$1;
(statearr_13593_13616[(1)] = (4));

} else {
var statearr_13594_13617 = state_13584__$1;
(statearr_13594_13617[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (11))){
var inst_13575 = cljs.core.async.close_BANG_.call(null,ch);
var state_13584__$1 = state_13584;
var statearr_13595_13618 = state_13584__$1;
(statearr_13595_13618[(2)] = inst_13575);

(statearr_13595_13618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (9))){
var state_13584__$1 = state_13584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13596_13619 = state_13584__$1;
(statearr_13596_13619[(1)] = (11));

} else {
var statearr_13597_13620 = state_13584__$1;
(statearr_13597_13620[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (5))){
var inst_13561 = (state_13584[(7)]);
var state_13584__$1 = state_13584;
var statearr_13598_13621 = state_13584__$1;
(statearr_13598_13621[(2)] = inst_13561);

(statearr_13598_13621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (10))){
var inst_13580 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13599_13622 = state_13584__$1;
(statearr_13599_13622[(2)] = inst_13580);

(statearr_13599_13622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (8))){
var inst_13561 = (state_13584[(7)]);
var inst_13571 = cljs.core.next.call(null,inst_13561);
var inst_13561__$1 = inst_13571;
var state_13584__$1 = (function (){var statearr_13600 = state_13584;
(statearr_13600[(7)] = inst_13561__$1);

return statearr_13600;
})();
var statearr_13601_13623 = state_13584__$1;
(statearr_13601_13623[(2)] = null);

(statearr_13601_13623[(1)] = (2));


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
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_13605 = [null,null,null,null,null,null,null,null];
(statearr_13605[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_13605[(1)] = (1));

return statearr_13605;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_13584){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13606){if((e13606 instanceof Object)){
var ex__7641__auto__ = e13606;
var statearr_13607_13624 = state_13584;
(statearr_13607_13624[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13625 = state_13584;
state_13584 = G__13625;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_13584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_13584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_13608 = f__7700__auto__.call(null);
(statearr_13608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_13608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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

cljs.core.async.Mux = (function (){var obj13627 = {};
return obj13627;
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


cljs.core.async.Mult = (function (){var obj13629 = {};
return obj13629;
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
if(typeof cljs.core.async.t13851 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13851 = (function (cs,ch,mult,meta13852){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13852 = meta13852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13851.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13851.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13851.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13851.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13851.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13853){
var self__ = this;
var _13853__$1 = this;
return self__.meta13852;
});})(cs))
;

cljs.core.async.t13851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13853,meta13852__$1){
var self__ = this;
var _13853__$1 = this;
return (new cljs.core.async.t13851(self__.cs,self__.ch,self__.mult,meta13852__$1));
});})(cs))
;

cljs.core.async.t13851.cljs$lang$type = true;

cljs.core.async.t13851.cljs$lang$ctorStr = "cljs.core.async/t13851";

cljs.core.async.t13851.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t13851");
});})(cs))
;

cljs.core.async.__GT_t13851 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13851(cs__$1,ch__$1,mult__$1,meta13852){
return (new cljs.core.async.t13851(cs__$1,ch__$1,mult__$1,meta13852));
});})(cs))
;

}

return (new cljs.core.async.t13851(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7699__auto___14072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14072,cs,m,dchan,dctr,done){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14072,cs,m,dchan,dctr,done){
return (function (state_13984){
var state_val_13985 = (state_13984[(1)]);
if((state_val_13985 === (7))){
var inst_13980 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_13986_14073 = state_13984__$1;
(statearr_13986_14073[(2)] = inst_13980);

(statearr_13986_14073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (20))){
var inst_13885 = (state_13984[(7)]);
var inst_13895 = cljs.core.first.call(null,inst_13885);
var inst_13896 = cljs.core.nth.call(null,inst_13895,(0),null);
var inst_13897 = cljs.core.nth.call(null,inst_13895,(1),null);
var state_13984__$1 = (function (){var statearr_13987 = state_13984;
(statearr_13987[(8)] = inst_13896);

return statearr_13987;
})();
if(cljs.core.truth_(inst_13897)){
var statearr_13988_14074 = state_13984__$1;
(statearr_13988_14074[(1)] = (22));

} else {
var statearr_13989_14075 = state_13984__$1;
(statearr_13989_14075[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (27))){
var inst_13932 = (state_13984[(9)]);
var inst_13856 = (state_13984[(10)]);
var inst_13925 = (state_13984[(11)]);
var inst_13927 = (state_13984[(12)]);
var inst_13932__$1 = cljs.core._nth.call(null,inst_13925,inst_13927);
var inst_13933 = cljs.core.async.put_BANG_.call(null,inst_13932__$1,inst_13856,done);
var state_13984__$1 = (function (){var statearr_13990 = state_13984;
(statearr_13990[(9)] = inst_13932__$1);

return statearr_13990;
})();
if(cljs.core.truth_(inst_13933)){
var statearr_13991_14076 = state_13984__$1;
(statearr_13991_14076[(1)] = (30));

} else {
var statearr_13992_14077 = state_13984__$1;
(statearr_13992_14077[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (1))){
var state_13984__$1 = state_13984;
var statearr_13993_14078 = state_13984__$1;
(statearr_13993_14078[(2)] = null);

(statearr_13993_14078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (24))){
var inst_13885 = (state_13984[(7)]);
var inst_13902 = (state_13984[(2)]);
var inst_13903 = cljs.core.next.call(null,inst_13885);
var inst_13865 = inst_13903;
var inst_13866 = null;
var inst_13867 = (0);
var inst_13868 = (0);
var state_13984__$1 = (function (){var statearr_13994 = state_13984;
(statearr_13994[(13)] = inst_13866);

(statearr_13994[(14)] = inst_13867);

(statearr_13994[(15)] = inst_13868);

(statearr_13994[(16)] = inst_13902);

(statearr_13994[(17)] = inst_13865);

return statearr_13994;
})();
var statearr_13995_14079 = state_13984__$1;
(statearr_13995_14079[(2)] = null);

(statearr_13995_14079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (39))){
var state_13984__$1 = state_13984;
var statearr_13999_14080 = state_13984__$1;
(statearr_13999_14080[(2)] = null);

(statearr_13999_14080[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (4))){
var inst_13856 = (state_13984[(10)]);
var inst_13856__$1 = (state_13984[(2)]);
var inst_13857 = (inst_13856__$1 == null);
var state_13984__$1 = (function (){var statearr_14000 = state_13984;
(statearr_14000[(10)] = inst_13856__$1);

return statearr_14000;
})();
if(cljs.core.truth_(inst_13857)){
var statearr_14001_14081 = state_13984__$1;
(statearr_14001_14081[(1)] = (5));

} else {
var statearr_14002_14082 = state_13984__$1;
(statearr_14002_14082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (15))){
var inst_13866 = (state_13984[(13)]);
var inst_13867 = (state_13984[(14)]);
var inst_13868 = (state_13984[(15)]);
var inst_13865 = (state_13984[(17)]);
var inst_13881 = (state_13984[(2)]);
var inst_13882 = (inst_13868 + (1));
var tmp13996 = inst_13866;
var tmp13997 = inst_13867;
var tmp13998 = inst_13865;
var inst_13865__$1 = tmp13998;
var inst_13866__$1 = tmp13996;
var inst_13867__$1 = tmp13997;
var inst_13868__$1 = inst_13882;
var state_13984__$1 = (function (){var statearr_14003 = state_13984;
(statearr_14003[(13)] = inst_13866__$1);

(statearr_14003[(14)] = inst_13867__$1);

(statearr_14003[(15)] = inst_13868__$1);

(statearr_14003[(18)] = inst_13881);

(statearr_14003[(17)] = inst_13865__$1);

return statearr_14003;
})();
var statearr_14004_14083 = state_13984__$1;
(statearr_14004_14083[(2)] = null);

(statearr_14004_14083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (21))){
var inst_13906 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14008_14084 = state_13984__$1;
(statearr_14008_14084[(2)] = inst_13906);

(statearr_14008_14084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (31))){
var inst_13932 = (state_13984[(9)]);
var inst_13936 = done.call(null,null);
var inst_13937 = cljs.core.async.untap_STAR_.call(null,m,inst_13932);
var state_13984__$1 = (function (){var statearr_14009 = state_13984;
(statearr_14009[(19)] = inst_13936);

return statearr_14009;
})();
var statearr_14010_14085 = state_13984__$1;
(statearr_14010_14085[(2)] = inst_13937);

(statearr_14010_14085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (32))){
var inst_13926 = (state_13984[(20)]);
var inst_13924 = (state_13984[(21)]);
var inst_13925 = (state_13984[(11)]);
var inst_13927 = (state_13984[(12)]);
var inst_13939 = (state_13984[(2)]);
var inst_13940 = (inst_13927 + (1));
var tmp14005 = inst_13926;
var tmp14006 = inst_13924;
var tmp14007 = inst_13925;
var inst_13924__$1 = tmp14006;
var inst_13925__$1 = tmp14007;
var inst_13926__$1 = tmp14005;
var inst_13927__$1 = inst_13940;
var state_13984__$1 = (function (){var statearr_14011 = state_13984;
(statearr_14011[(20)] = inst_13926__$1);

(statearr_14011[(21)] = inst_13924__$1);

(statearr_14011[(11)] = inst_13925__$1);

(statearr_14011[(22)] = inst_13939);

(statearr_14011[(12)] = inst_13927__$1);

return statearr_14011;
})();
var statearr_14012_14086 = state_13984__$1;
(statearr_14012_14086[(2)] = null);

(statearr_14012_14086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (40))){
var inst_13952 = (state_13984[(23)]);
var inst_13956 = done.call(null,null);
var inst_13957 = cljs.core.async.untap_STAR_.call(null,m,inst_13952);
var state_13984__$1 = (function (){var statearr_14013 = state_13984;
(statearr_14013[(24)] = inst_13956);

return statearr_14013;
})();
var statearr_14014_14087 = state_13984__$1;
(statearr_14014_14087[(2)] = inst_13957);

(statearr_14014_14087[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (33))){
var inst_13943 = (state_13984[(25)]);
var inst_13945 = cljs.core.chunked_seq_QMARK_.call(null,inst_13943);
var state_13984__$1 = state_13984;
if(inst_13945){
var statearr_14015_14088 = state_13984__$1;
(statearr_14015_14088[(1)] = (36));

} else {
var statearr_14016_14089 = state_13984__$1;
(statearr_14016_14089[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (13))){
var inst_13875 = (state_13984[(26)]);
var inst_13878 = cljs.core.async.close_BANG_.call(null,inst_13875);
var state_13984__$1 = state_13984;
var statearr_14017_14090 = state_13984__$1;
(statearr_14017_14090[(2)] = inst_13878);

(statearr_14017_14090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (22))){
var inst_13896 = (state_13984[(8)]);
var inst_13899 = cljs.core.async.close_BANG_.call(null,inst_13896);
var state_13984__$1 = state_13984;
var statearr_14018_14091 = state_13984__$1;
(statearr_14018_14091[(2)] = inst_13899);

(statearr_14018_14091[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (36))){
var inst_13943 = (state_13984[(25)]);
var inst_13947 = cljs.core.chunk_first.call(null,inst_13943);
var inst_13948 = cljs.core.chunk_rest.call(null,inst_13943);
var inst_13949 = cljs.core.count.call(null,inst_13947);
var inst_13924 = inst_13948;
var inst_13925 = inst_13947;
var inst_13926 = inst_13949;
var inst_13927 = (0);
var state_13984__$1 = (function (){var statearr_14019 = state_13984;
(statearr_14019[(20)] = inst_13926);

(statearr_14019[(21)] = inst_13924);

(statearr_14019[(11)] = inst_13925);

(statearr_14019[(12)] = inst_13927);

return statearr_14019;
})();
var statearr_14020_14092 = state_13984__$1;
(statearr_14020_14092[(2)] = null);

(statearr_14020_14092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (41))){
var inst_13943 = (state_13984[(25)]);
var inst_13959 = (state_13984[(2)]);
var inst_13960 = cljs.core.next.call(null,inst_13943);
var inst_13924 = inst_13960;
var inst_13925 = null;
var inst_13926 = (0);
var inst_13927 = (0);
var state_13984__$1 = (function (){var statearr_14021 = state_13984;
(statearr_14021[(20)] = inst_13926);

(statearr_14021[(21)] = inst_13924);

(statearr_14021[(11)] = inst_13925);

(statearr_14021[(27)] = inst_13959);

(statearr_14021[(12)] = inst_13927);

return statearr_14021;
})();
var statearr_14022_14093 = state_13984__$1;
(statearr_14022_14093[(2)] = null);

(statearr_14022_14093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (43))){
var state_13984__$1 = state_13984;
var statearr_14023_14094 = state_13984__$1;
(statearr_14023_14094[(2)] = null);

(statearr_14023_14094[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (29))){
var inst_13968 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14024_14095 = state_13984__$1;
(statearr_14024_14095[(2)] = inst_13968);

(statearr_14024_14095[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (44))){
var inst_13977 = (state_13984[(2)]);
var state_13984__$1 = (function (){var statearr_14025 = state_13984;
(statearr_14025[(28)] = inst_13977);

return statearr_14025;
})();
var statearr_14026_14096 = state_13984__$1;
(statearr_14026_14096[(2)] = null);

(statearr_14026_14096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (6))){
var inst_13916 = (state_13984[(29)]);
var inst_13915 = cljs.core.deref.call(null,cs);
var inst_13916__$1 = cljs.core.keys.call(null,inst_13915);
var inst_13917 = cljs.core.count.call(null,inst_13916__$1);
var inst_13918 = cljs.core.reset_BANG_.call(null,dctr,inst_13917);
var inst_13923 = cljs.core.seq.call(null,inst_13916__$1);
var inst_13924 = inst_13923;
var inst_13925 = null;
var inst_13926 = (0);
var inst_13927 = (0);
var state_13984__$1 = (function (){var statearr_14027 = state_13984;
(statearr_14027[(20)] = inst_13926);

(statearr_14027[(21)] = inst_13924);

(statearr_14027[(30)] = inst_13918);

(statearr_14027[(11)] = inst_13925);

(statearr_14027[(29)] = inst_13916__$1);

(statearr_14027[(12)] = inst_13927);

return statearr_14027;
})();
var statearr_14028_14097 = state_13984__$1;
(statearr_14028_14097[(2)] = null);

(statearr_14028_14097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (28))){
var inst_13924 = (state_13984[(21)]);
var inst_13943 = (state_13984[(25)]);
var inst_13943__$1 = cljs.core.seq.call(null,inst_13924);
var state_13984__$1 = (function (){var statearr_14029 = state_13984;
(statearr_14029[(25)] = inst_13943__$1);

return statearr_14029;
})();
if(inst_13943__$1){
var statearr_14030_14098 = state_13984__$1;
(statearr_14030_14098[(1)] = (33));

} else {
var statearr_14031_14099 = state_13984__$1;
(statearr_14031_14099[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (25))){
var inst_13926 = (state_13984[(20)]);
var inst_13927 = (state_13984[(12)]);
var inst_13929 = (inst_13927 < inst_13926);
var inst_13930 = inst_13929;
var state_13984__$1 = state_13984;
if(cljs.core.truth_(inst_13930)){
var statearr_14032_14100 = state_13984__$1;
(statearr_14032_14100[(1)] = (27));

} else {
var statearr_14033_14101 = state_13984__$1;
(statearr_14033_14101[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (34))){
var state_13984__$1 = state_13984;
var statearr_14034_14102 = state_13984__$1;
(statearr_14034_14102[(2)] = null);

(statearr_14034_14102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (17))){
var state_13984__$1 = state_13984;
var statearr_14035_14103 = state_13984__$1;
(statearr_14035_14103[(2)] = null);

(statearr_14035_14103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (3))){
var inst_13982 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13984__$1,inst_13982);
} else {
if((state_val_13985 === (12))){
var inst_13911 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14036_14104 = state_13984__$1;
(statearr_14036_14104[(2)] = inst_13911);

(statearr_14036_14104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (2))){
var state_13984__$1 = state_13984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13984__$1,(4),ch);
} else {
if((state_val_13985 === (23))){
var state_13984__$1 = state_13984;
var statearr_14037_14105 = state_13984__$1;
(statearr_14037_14105[(2)] = null);

(statearr_14037_14105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (35))){
var inst_13966 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14038_14106 = state_13984__$1;
(statearr_14038_14106[(2)] = inst_13966);

(statearr_14038_14106[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (19))){
var inst_13885 = (state_13984[(7)]);
var inst_13889 = cljs.core.chunk_first.call(null,inst_13885);
var inst_13890 = cljs.core.chunk_rest.call(null,inst_13885);
var inst_13891 = cljs.core.count.call(null,inst_13889);
var inst_13865 = inst_13890;
var inst_13866 = inst_13889;
var inst_13867 = inst_13891;
var inst_13868 = (0);
var state_13984__$1 = (function (){var statearr_14039 = state_13984;
(statearr_14039[(13)] = inst_13866);

(statearr_14039[(14)] = inst_13867);

(statearr_14039[(15)] = inst_13868);

(statearr_14039[(17)] = inst_13865);

return statearr_14039;
})();
var statearr_14040_14107 = state_13984__$1;
(statearr_14040_14107[(2)] = null);

(statearr_14040_14107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (11))){
var inst_13885 = (state_13984[(7)]);
var inst_13865 = (state_13984[(17)]);
var inst_13885__$1 = cljs.core.seq.call(null,inst_13865);
var state_13984__$1 = (function (){var statearr_14041 = state_13984;
(statearr_14041[(7)] = inst_13885__$1);

return statearr_14041;
})();
if(inst_13885__$1){
var statearr_14042_14108 = state_13984__$1;
(statearr_14042_14108[(1)] = (16));

} else {
var statearr_14043_14109 = state_13984__$1;
(statearr_14043_14109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (9))){
var inst_13913 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14044_14110 = state_13984__$1;
(statearr_14044_14110[(2)] = inst_13913);

(statearr_14044_14110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (5))){
var inst_13863 = cljs.core.deref.call(null,cs);
var inst_13864 = cljs.core.seq.call(null,inst_13863);
var inst_13865 = inst_13864;
var inst_13866 = null;
var inst_13867 = (0);
var inst_13868 = (0);
var state_13984__$1 = (function (){var statearr_14045 = state_13984;
(statearr_14045[(13)] = inst_13866);

(statearr_14045[(14)] = inst_13867);

(statearr_14045[(15)] = inst_13868);

(statearr_14045[(17)] = inst_13865);

return statearr_14045;
})();
var statearr_14046_14111 = state_13984__$1;
(statearr_14046_14111[(2)] = null);

(statearr_14046_14111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (14))){
var state_13984__$1 = state_13984;
var statearr_14047_14112 = state_13984__$1;
(statearr_14047_14112[(2)] = null);

(statearr_14047_14112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (45))){
var inst_13974 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14048_14113 = state_13984__$1;
(statearr_14048_14113[(2)] = inst_13974);

(statearr_14048_14113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (26))){
var inst_13916 = (state_13984[(29)]);
var inst_13970 = (state_13984[(2)]);
var inst_13971 = cljs.core.seq.call(null,inst_13916);
var state_13984__$1 = (function (){var statearr_14049 = state_13984;
(statearr_14049[(31)] = inst_13970);

return statearr_14049;
})();
if(inst_13971){
var statearr_14050_14114 = state_13984__$1;
(statearr_14050_14114[(1)] = (42));

} else {
var statearr_14051_14115 = state_13984__$1;
(statearr_14051_14115[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (16))){
var inst_13885 = (state_13984[(7)]);
var inst_13887 = cljs.core.chunked_seq_QMARK_.call(null,inst_13885);
var state_13984__$1 = state_13984;
if(inst_13887){
var statearr_14052_14116 = state_13984__$1;
(statearr_14052_14116[(1)] = (19));

} else {
var statearr_14053_14117 = state_13984__$1;
(statearr_14053_14117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (38))){
var inst_13963 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14054_14118 = state_13984__$1;
(statearr_14054_14118[(2)] = inst_13963);

(statearr_14054_14118[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (30))){
var state_13984__$1 = state_13984;
var statearr_14055_14119 = state_13984__$1;
(statearr_14055_14119[(2)] = null);

(statearr_14055_14119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (10))){
var inst_13866 = (state_13984[(13)]);
var inst_13868 = (state_13984[(15)]);
var inst_13874 = cljs.core._nth.call(null,inst_13866,inst_13868);
var inst_13875 = cljs.core.nth.call(null,inst_13874,(0),null);
var inst_13876 = cljs.core.nth.call(null,inst_13874,(1),null);
var state_13984__$1 = (function (){var statearr_14056 = state_13984;
(statearr_14056[(26)] = inst_13875);

return statearr_14056;
})();
if(cljs.core.truth_(inst_13876)){
var statearr_14057_14120 = state_13984__$1;
(statearr_14057_14120[(1)] = (13));

} else {
var statearr_14058_14121 = state_13984__$1;
(statearr_14058_14121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (18))){
var inst_13909 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_14059_14122 = state_13984__$1;
(statearr_14059_14122[(2)] = inst_13909);

(statearr_14059_14122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (42))){
var state_13984__$1 = state_13984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13984__$1,(45),dchan);
} else {
if((state_val_13985 === (37))){
var inst_13952 = (state_13984[(23)]);
var inst_13856 = (state_13984[(10)]);
var inst_13943 = (state_13984[(25)]);
var inst_13952__$1 = cljs.core.first.call(null,inst_13943);
var inst_13953 = cljs.core.async.put_BANG_.call(null,inst_13952__$1,inst_13856,done);
var state_13984__$1 = (function (){var statearr_14060 = state_13984;
(statearr_14060[(23)] = inst_13952__$1);

return statearr_14060;
})();
if(cljs.core.truth_(inst_13953)){
var statearr_14061_14123 = state_13984__$1;
(statearr_14061_14123[(1)] = (39));

} else {
var statearr_14062_14124 = state_13984__$1;
(statearr_14062_14124[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (8))){
var inst_13867 = (state_13984[(14)]);
var inst_13868 = (state_13984[(15)]);
var inst_13870 = (inst_13868 < inst_13867);
var inst_13871 = inst_13870;
var state_13984__$1 = state_13984;
if(cljs.core.truth_(inst_13871)){
var statearr_14063_14125 = state_13984__$1;
(statearr_14063_14125[(1)] = (10));

} else {
var statearr_14064_14126 = state_13984__$1;
(statearr_14064_14126[(1)] = (11));

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
});})(c__7699__auto___14072,cs,m,dchan,dctr,done))
;
return ((function (switch__7637__auto__,c__7699__auto___14072,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7638__auto__ = null;
var cljs$core$async$mult_$_state_machine__7638__auto____0 = (function (){
var statearr_14068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14068[(0)] = cljs$core$async$mult_$_state_machine__7638__auto__);

(statearr_14068[(1)] = (1));

return statearr_14068;
});
var cljs$core$async$mult_$_state_machine__7638__auto____1 = (function (state_13984){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14069){if((e14069 instanceof Object)){
var ex__7641__auto__ = e14069;
var statearr_14070_14127 = state_13984;
(statearr_14070_14127[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14128 = state_13984;
state_13984 = G__14128;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7638__auto__ = function(state_13984){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7638__auto____1.call(this,state_13984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7638__auto____0;
cljs$core$async$mult_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7638__auto____1;
return cljs$core$async$mult_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14072,cs,m,dchan,dctr,done))
})();
var state__7701__auto__ = (function (){var statearr_14071 = f__7700__auto__.call(null);
(statearr_14071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14072);

return statearr_14071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14072,cs,m,dchan,dctr,done))
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
var G__14130 = arguments.length;
switch (G__14130) {
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

cljs.core.async.Mix = (function (){var obj14133 = {};
return obj14133;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14138){
var map__14139 = p__14138;
var map__14139__$1 = ((cljs.core.seq_QMARK_.call(null,map__14139))?cljs.core.apply.call(null,cljs.core.hash_map,map__14139):map__14139);
var opts = map__14139__$1;
var statearr_14140_14143 = state;
(statearr_14140_14143[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14139,map__14139__$1,opts){
return (function (val){
var statearr_14141_14144 = state;
(statearr_14141_14144[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14139,map__14139__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14142_14145 = state;
(statearr_14142_14145[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14134){
var G__14135 = cljs.core.first.call(null,seq14134);
var seq14134__$1 = cljs.core.next.call(null,seq14134);
var G__14136 = cljs.core.first.call(null,seq14134__$1);
var seq14134__$2 = cljs.core.next.call(null,seq14134__$1);
var G__14137 = cljs.core.first.call(null,seq14134__$2);
var seq14134__$3 = cljs.core.next.call(null,seq14134__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14135,G__14136,G__14137,seq14134__$3);
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
if(typeof cljs.core.async.t14265 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14265 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14266){
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
this.meta14266 = meta14266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14265.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14265.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t14265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14267){
var self__ = this;
var _14267__$1 = this;
return self__.meta14266;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14267,meta14266__$1){
var self__ = this;
var _14267__$1 = this;
return (new cljs.core.async.t14265(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14266__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14265.cljs$lang$type = true;

cljs.core.async.t14265.cljs$lang$ctorStr = "cljs.core.async/t14265";

cljs.core.async.t14265.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14265");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14265 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14265(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14266){
return (new cljs.core.async.t14265(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14266));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14265(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7699__auto___14384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14337){
var state_val_14338 = (state_14337[(1)]);
if((state_val_14338 === (7))){
var inst_14281 = (state_14337[(7)]);
var inst_14286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14281);
var state_14337__$1 = state_14337;
var statearr_14339_14385 = state_14337__$1;
(statearr_14339_14385[(2)] = inst_14286);

(statearr_14339_14385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (20))){
var inst_14296 = (state_14337[(8)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14337__$1,(23),out,inst_14296);
} else {
if((state_val_14338 === (1))){
var inst_14271 = (state_14337[(9)]);
var inst_14271__$1 = calc_state.call(null);
var inst_14272 = cljs.core.seq_QMARK_.call(null,inst_14271__$1);
var state_14337__$1 = (function (){var statearr_14340 = state_14337;
(statearr_14340[(9)] = inst_14271__$1);

return statearr_14340;
})();
if(inst_14272){
var statearr_14341_14386 = state_14337__$1;
(statearr_14341_14386[(1)] = (2));

} else {
var statearr_14342_14387 = state_14337__$1;
(statearr_14342_14387[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (24))){
var inst_14289 = (state_14337[(10)]);
var inst_14281 = inst_14289;
var state_14337__$1 = (function (){var statearr_14343 = state_14337;
(statearr_14343[(7)] = inst_14281);

return statearr_14343;
})();
var statearr_14344_14388 = state_14337__$1;
(statearr_14344_14388[(2)] = null);

(statearr_14344_14388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (4))){
var inst_14271 = (state_14337[(9)]);
var inst_14277 = (state_14337[(2)]);
var inst_14278 = cljs.core.get.call(null,inst_14277,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14279 = cljs.core.get.call(null,inst_14277,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14280 = cljs.core.get.call(null,inst_14277,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14281 = inst_14271;
var state_14337__$1 = (function (){var statearr_14345 = state_14337;
(statearr_14345[(11)] = inst_14278);

(statearr_14345[(12)] = inst_14279);

(statearr_14345[(7)] = inst_14281);

(statearr_14345[(13)] = inst_14280);

return statearr_14345;
})();
var statearr_14346_14389 = state_14337__$1;
(statearr_14346_14389[(2)] = null);

(statearr_14346_14389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (15))){
var state_14337__$1 = state_14337;
var statearr_14347_14390 = state_14337__$1;
(statearr_14347_14390[(2)] = null);

(statearr_14347_14390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (21))){
var inst_14289 = (state_14337[(10)]);
var inst_14281 = inst_14289;
var state_14337__$1 = (function (){var statearr_14348 = state_14337;
(statearr_14348[(7)] = inst_14281);

return statearr_14348;
})();
var statearr_14349_14391 = state_14337__$1;
(statearr_14349_14391[(2)] = null);

(statearr_14349_14391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (13))){
var inst_14333 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14350_14392 = state_14337__$1;
(statearr_14350_14392[(2)] = inst_14333);

(statearr_14350_14392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (22))){
var inst_14331 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14351_14393 = state_14337__$1;
(statearr_14351_14393[(2)] = inst_14331);

(statearr_14351_14393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (6))){
var inst_14335 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14337__$1,inst_14335);
} else {
if((state_val_14338 === (25))){
var state_14337__$1 = state_14337;
var statearr_14352_14394 = state_14337__$1;
(statearr_14352_14394[(2)] = null);

(statearr_14352_14394[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (17))){
var inst_14311 = (state_14337[(14)]);
var state_14337__$1 = state_14337;
var statearr_14353_14395 = state_14337__$1;
(statearr_14353_14395[(2)] = inst_14311);

(statearr_14353_14395[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (3))){
var inst_14271 = (state_14337[(9)]);
var state_14337__$1 = state_14337;
var statearr_14354_14396 = state_14337__$1;
(statearr_14354_14396[(2)] = inst_14271);

(statearr_14354_14396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (12))){
var inst_14292 = (state_14337[(15)]);
var inst_14311 = (state_14337[(14)]);
var inst_14297 = (state_14337[(16)]);
var inst_14311__$1 = inst_14292.call(null,inst_14297);
var state_14337__$1 = (function (){var statearr_14355 = state_14337;
(statearr_14355[(14)] = inst_14311__$1);

return statearr_14355;
})();
if(cljs.core.truth_(inst_14311__$1)){
var statearr_14356_14397 = state_14337__$1;
(statearr_14356_14397[(1)] = (17));

} else {
var statearr_14357_14398 = state_14337__$1;
(statearr_14357_14398[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (2))){
var inst_14271 = (state_14337[(9)]);
var inst_14274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14271);
var state_14337__$1 = state_14337;
var statearr_14358_14399 = state_14337__$1;
(statearr_14358_14399[(2)] = inst_14274);

(statearr_14358_14399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (23))){
var inst_14322 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
if(cljs.core.truth_(inst_14322)){
var statearr_14359_14400 = state_14337__$1;
(statearr_14359_14400[(1)] = (24));

} else {
var statearr_14360_14401 = state_14337__$1;
(statearr_14360_14401[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (19))){
var inst_14319 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
if(cljs.core.truth_(inst_14319)){
var statearr_14361_14402 = state_14337__$1;
(statearr_14361_14402[(1)] = (20));

} else {
var statearr_14362_14403 = state_14337__$1;
(statearr_14362_14403[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (11))){
var inst_14296 = (state_14337[(8)]);
var inst_14302 = (inst_14296 == null);
var state_14337__$1 = state_14337;
if(cljs.core.truth_(inst_14302)){
var statearr_14363_14404 = state_14337__$1;
(statearr_14363_14404[(1)] = (14));

} else {
var statearr_14364_14405 = state_14337__$1;
(statearr_14364_14405[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (9))){
var inst_14289 = (state_14337[(10)]);
var inst_14289__$1 = (state_14337[(2)]);
var inst_14290 = cljs.core.get.call(null,inst_14289__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14291 = cljs.core.get.call(null,inst_14289__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14292 = cljs.core.get.call(null,inst_14289__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14337__$1 = (function (){var statearr_14365 = state_14337;
(statearr_14365[(15)] = inst_14292);

(statearr_14365[(10)] = inst_14289__$1);

(statearr_14365[(17)] = inst_14291);

return statearr_14365;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14337__$1,(10),inst_14290);
} else {
if((state_val_14338 === (5))){
var inst_14281 = (state_14337[(7)]);
var inst_14284 = cljs.core.seq_QMARK_.call(null,inst_14281);
var state_14337__$1 = state_14337;
if(inst_14284){
var statearr_14366_14406 = state_14337__$1;
(statearr_14366_14406[(1)] = (7));

} else {
var statearr_14367_14407 = state_14337__$1;
(statearr_14367_14407[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (14))){
var inst_14297 = (state_14337[(16)]);
var inst_14304 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14297);
var state_14337__$1 = state_14337;
var statearr_14368_14408 = state_14337__$1;
(statearr_14368_14408[(2)] = inst_14304);

(statearr_14368_14408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (26))){
var inst_14327 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14369_14409 = state_14337__$1;
(statearr_14369_14409[(2)] = inst_14327);

(statearr_14369_14409[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (16))){
var inst_14307 = (state_14337[(2)]);
var inst_14308 = calc_state.call(null);
var inst_14281 = inst_14308;
var state_14337__$1 = (function (){var statearr_14370 = state_14337;
(statearr_14370[(18)] = inst_14307);

(statearr_14370[(7)] = inst_14281);

return statearr_14370;
})();
var statearr_14371_14410 = state_14337__$1;
(statearr_14371_14410[(2)] = null);

(statearr_14371_14410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (10))){
var inst_14296 = (state_14337[(8)]);
var inst_14297 = (state_14337[(16)]);
var inst_14295 = (state_14337[(2)]);
var inst_14296__$1 = cljs.core.nth.call(null,inst_14295,(0),null);
var inst_14297__$1 = cljs.core.nth.call(null,inst_14295,(1),null);
var inst_14298 = (inst_14296__$1 == null);
var inst_14299 = cljs.core._EQ_.call(null,inst_14297__$1,change);
var inst_14300 = (inst_14298) || (inst_14299);
var state_14337__$1 = (function (){var statearr_14372 = state_14337;
(statearr_14372[(8)] = inst_14296__$1);

(statearr_14372[(16)] = inst_14297__$1);

return statearr_14372;
})();
if(cljs.core.truth_(inst_14300)){
var statearr_14373_14411 = state_14337__$1;
(statearr_14373_14411[(1)] = (11));

} else {
var statearr_14374_14412 = state_14337__$1;
(statearr_14374_14412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (18))){
var inst_14292 = (state_14337[(15)]);
var inst_14297 = (state_14337[(16)]);
var inst_14291 = (state_14337[(17)]);
var inst_14314 = cljs.core.empty_QMARK_.call(null,inst_14292);
var inst_14315 = inst_14291.call(null,inst_14297);
var inst_14316 = cljs.core.not.call(null,inst_14315);
var inst_14317 = (inst_14314) && (inst_14316);
var state_14337__$1 = state_14337;
var statearr_14375_14413 = state_14337__$1;
(statearr_14375_14413[(2)] = inst_14317);

(statearr_14375_14413[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14338 === (8))){
var inst_14281 = (state_14337[(7)]);
var state_14337__$1 = state_14337;
var statearr_14376_14414 = state_14337__$1;
(statearr_14376_14414[(2)] = inst_14281);

(statearr_14376_14414[(1)] = (9));


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
});})(c__7699__auto___14384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7637__auto__,c__7699__auto___14384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7638__auto__ = null;
var cljs$core$async$mix_$_state_machine__7638__auto____0 = (function (){
var statearr_14380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14380[(0)] = cljs$core$async$mix_$_state_machine__7638__auto__);

(statearr_14380[(1)] = (1));

return statearr_14380;
});
var cljs$core$async$mix_$_state_machine__7638__auto____1 = (function (state_14337){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14381){if((e14381 instanceof Object)){
var ex__7641__auto__ = e14381;
var statearr_14382_14415 = state_14337;
(statearr_14382_14415[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14416 = state_14337;
state_14337 = G__14416;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7638__auto__ = function(state_14337){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7638__auto____1.call(this,state_14337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7638__auto____0;
cljs$core$async$mix_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7638__auto____1;
return cljs$core$async$mix_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7701__auto__ = (function (){var statearr_14383 = f__7700__auto__.call(null);
(statearr_14383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14384);

return statearr_14383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj14418 = {};
return obj14418;
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
var G__14420 = arguments.length;
switch (G__14420) {
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
var G__14424 = arguments.length;
switch (G__14424) {
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
return (function (p1__14422_SHARP_){
if(cljs.core.truth_(p1__14422_SHARP_.call(null,topic))){
return p1__14422_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14422_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4333__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14425 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14426){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14426 = meta14426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14425.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14425.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14425.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t14425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14427){
var self__ = this;
var _14427__$1 = this;
return self__.meta14426;
});})(mults,ensure_mult))
;

cljs.core.async.t14425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14427,meta14426__$1){
var self__ = this;
var _14427__$1 = this;
return (new cljs.core.async.t14425(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14426__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14425.cljs$lang$type = true;

cljs.core.async.t14425.cljs$lang$ctorStr = "cljs.core.async/t14425";

cljs.core.async.t14425.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14425");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14425 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14426){
return (new cljs.core.async.t14425(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14426));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14425(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7699__auto___14548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14548,mults,ensure_mult,p){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14548,mults,ensure_mult,p){
return (function (state_14499){
var state_val_14500 = (state_14499[(1)]);
if((state_val_14500 === (7))){
var inst_14495 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14501_14549 = state_14499__$1;
(statearr_14501_14549[(2)] = inst_14495);

(statearr_14501_14549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (20))){
var state_14499__$1 = state_14499;
var statearr_14502_14550 = state_14499__$1;
(statearr_14502_14550[(2)] = null);

(statearr_14502_14550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (1))){
var state_14499__$1 = state_14499;
var statearr_14503_14551 = state_14499__$1;
(statearr_14503_14551[(2)] = null);

(statearr_14503_14551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (24))){
var inst_14478 = (state_14499[(7)]);
var inst_14487 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14478);
var state_14499__$1 = state_14499;
var statearr_14504_14552 = state_14499__$1;
(statearr_14504_14552[(2)] = inst_14487);

(statearr_14504_14552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (4))){
var inst_14430 = (state_14499[(8)]);
var inst_14430__$1 = (state_14499[(2)]);
var inst_14431 = (inst_14430__$1 == null);
var state_14499__$1 = (function (){var statearr_14505 = state_14499;
(statearr_14505[(8)] = inst_14430__$1);

return statearr_14505;
})();
if(cljs.core.truth_(inst_14431)){
var statearr_14506_14553 = state_14499__$1;
(statearr_14506_14553[(1)] = (5));

} else {
var statearr_14507_14554 = state_14499__$1;
(statearr_14507_14554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (15))){
var inst_14472 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14508_14555 = state_14499__$1;
(statearr_14508_14555[(2)] = inst_14472);

(statearr_14508_14555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (21))){
var inst_14492 = (state_14499[(2)]);
var state_14499__$1 = (function (){var statearr_14509 = state_14499;
(statearr_14509[(9)] = inst_14492);

return statearr_14509;
})();
var statearr_14510_14556 = state_14499__$1;
(statearr_14510_14556[(2)] = null);

(statearr_14510_14556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (13))){
var inst_14454 = (state_14499[(10)]);
var inst_14456 = cljs.core.chunked_seq_QMARK_.call(null,inst_14454);
var state_14499__$1 = state_14499;
if(inst_14456){
var statearr_14511_14557 = state_14499__$1;
(statearr_14511_14557[(1)] = (16));

} else {
var statearr_14512_14558 = state_14499__$1;
(statearr_14512_14558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (22))){
var inst_14484 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
if(cljs.core.truth_(inst_14484)){
var statearr_14513_14559 = state_14499__$1;
(statearr_14513_14559[(1)] = (23));

} else {
var statearr_14514_14560 = state_14499__$1;
(statearr_14514_14560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (6))){
var inst_14430 = (state_14499[(8)]);
var inst_14478 = (state_14499[(7)]);
var inst_14480 = (state_14499[(11)]);
var inst_14478__$1 = topic_fn.call(null,inst_14430);
var inst_14479 = cljs.core.deref.call(null,mults);
var inst_14480__$1 = cljs.core.get.call(null,inst_14479,inst_14478__$1);
var state_14499__$1 = (function (){var statearr_14515 = state_14499;
(statearr_14515[(7)] = inst_14478__$1);

(statearr_14515[(11)] = inst_14480__$1);

return statearr_14515;
})();
if(cljs.core.truth_(inst_14480__$1)){
var statearr_14516_14561 = state_14499__$1;
(statearr_14516_14561[(1)] = (19));

} else {
var statearr_14517_14562 = state_14499__$1;
(statearr_14517_14562[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (25))){
var inst_14489 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14518_14563 = state_14499__$1;
(statearr_14518_14563[(2)] = inst_14489);

(statearr_14518_14563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (17))){
var inst_14454 = (state_14499[(10)]);
var inst_14463 = cljs.core.first.call(null,inst_14454);
var inst_14464 = cljs.core.async.muxch_STAR_.call(null,inst_14463);
var inst_14465 = cljs.core.async.close_BANG_.call(null,inst_14464);
var inst_14466 = cljs.core.next.call(null,inst_14454);
var inst_14440 = inst_14466;
var inst_14441 = null;
var inst_14442 = (0);
var inst_14443 = (0);
var state_14499__$1 = (function (){var statearr_14519 = state_14499;
(statearr_14519[(12)] = inst_14441);

(statearr_14519[(13)] = inst_14440);

(statearr_14519[(14)] = inst_14442);

(statearr_14519[(15)] = inst_14465);

(statearr_14519[(16)] = inst_14443);

return statearr_14519;
})();
var statearr_14520_14564 = state_14499__$1;
(statearr_14520_14564[(2)] = null);

(statearr_14520_14564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (3))){
var inst_14497 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14499__$1,inst_14497);
} else {
if((state_val_14500 === (12))){
var inst_14474 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14521_14565 = state_14499__$1;
(statearr_14521_14565[(2)] = inst_14474);

(statearr_14521_14565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (2))){
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14499__$1,(4),ch);
} else {
if((state_val_14500 === (23))){
var state_14499__$1 = state_14499;
var statearr_14522_14566 = state_14499__$1;
(statearr_14522_14566[(2)] = null);

(statearr_14522_14566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (19))){
var inst_14430 = (state_14499[(8)]);
var inst_14480 = (state_14499[(11)]);
var inst_14482 = cljs.core.async.muxch_STAR_.call(null,inst_14480);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14499__$1,(22),inst_14482,inst_14430);
} else {
if((state_val_14500 === (11))){
var inst_14440 = (state_14499[(13)]);
var inst_14454 = (state_14499[(10)]);
var inst_14454__$1 = cljs.core.seq.call(null,inst_14440);
var state_14499__$1 = (function (){var statearr_14523 = state_14499;
(statearr_14523[(10)] = inst_14454__$1);

return statearr_14523;
})();
if(inst_14454__$1){
var statearr_14524_14567 = state_14499__$1;
(statearr_14524_14567[(1)] = (13));

} else {
var statearr_14525_14568 = state_14499__$1;
(statearr_14525_14568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (9))){
var inst_14476 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14526_14569 = state_14499__$1;
(statearr_14526_14569[(2)] = inst_14476);

(statearr_14526_14569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (5))){
var inst_14437 = cljs.core.deref.call(null,mults);
var inst_14438 = cljs.core.vals.call(null,inst_14437);
var inst_14439 = cljs.core.seq.call(null,inst_14438);
var inst_14440 = inst_14439;
var inst_14441 = null;
var inst_14442 = (0);
var inst_14443 = (0);
var state_14499__$1 = (function (){var statearr_14527 = state_14499;
(statearr_14527[(12)] = inst_14441);

(statearr_14527[(13)] = inst_14440);

(statearr_14527[(14)] = inst_14442);

(statearr_14527[(16)] = inst_14443);

return statearr_14527;
})();
var statearr_14528_14570 = state_14499__$1;
(statearr_14528_14570[(2)] = null);

(statearr_14528_14570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (14))){
var state_14499__$1 = state_14499;
var statearr_14532_14571 = state_14499__$1;
(statearr_14532_14571[(2)] = null);

(statearr_14532_14571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (16))){
var inst_14454 = (state_14499[(10)]);
var inst_14458 = cljs.core.chunk_first.call(null,inst_14454);
var inst_14459 = cljs.core.chunk_rest.call(null,inst_14454);
var inst_14460 = cljs.core.count.call(null,inst_14458);
var inst_14440 = inst_14459;
var inst_14441 = inst_14458;
var inst_14442 = inst_14460;
var inst_14443 = (0);
var state_14499__$1 = (function (){var statearr_14533 = state_14499;
(statearr_14533[(12)] = inst_14441);

(statearr_14533[(13)] = inst_14440);

(statearr_14533[(14)] = inst_14442);

(statearr_14533[(16)] = inst_14443);

return statearr_14533;
})();
var statearr_14534_14572 = state_14499__$1;
(statearr_14534_14572[(2)] = null);

(statearr_14534_14572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (10))){
var inst_14441 = (state_14499[(12)]);
var inst_14440 = (state_14499[(13)]);
var inst_14442 = (state_14499[(14)]);
var inst_14443 = (state_14499[(16)]);
var inst_14448 = cljs.core._nth.call(null,inst_14441,inst_14443);
var inst_14449 = cljs.core.async.muxch_STAR_.call(null,inst_14448);
var inst_14450 = cljs.core.async.close_BANG_.call(null,inst_14449);
var inst_14451 = (inst_14443 + (1));
var tmp14529 = inst_14441;
var tmp14530 = inst_14440;
var tmp14531 = inst_14442;
var inst_14440__$1 = tmp14530;
var inst_14441__$1 = tmp14529;
var inst_14442__$1 = tmp14531;
var inst_14443__$1 = inst_14451;
var state_14499__$1 = (function (){var statearr_14535 = state_14499;
(statearr_14535[(17)] = inst_14450);

(statearr_14535[(12)] = inst_14441__$1);

(statearr_14535[(13)] = inst_14440__$1);

(statearr_14535[(14)] = inst_14442__$1);

(statearr_14535[(16)] = inst_14443__$1);

return statearr_14535;
})();
var statearr_14536_14573 = state_14499__$1;
(statearr_14536_14573[(2)] = null);

(statearr_14536_14573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (18))){
var inst_14469 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14537_14574 = state_14499__$1;
(statearr_14537_14574[(2)] = inst_14469);

(statearr_14537_14574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (8))){
var inst_14442 = (state_14499[(14)]);
var inst_14443 = (state_14499[(16)]);
var inst_14445 = (inst_14443 < inst_14442);
var inst_14446 = inst_14445;
var state_14499__$1 = state_14499;
if(cljs.core.truth_(inst_14446)){
var statearr_14538_14575 = state_14499__$1;
(statearr_14538_14575[(1)] = (10));

} else {
var statearr_14539_14576 = state_14499__$1;
(statearr_14539_14576[(1)] = (11));

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
});})(c__7699__auto___14548,mults,ensure_mult,p))
;
return ((function (switch__7637__auto__,c__7699__auto___14548,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14543[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14543[(1)] = (1));

return statearr_14543;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14499){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14544){if((e14544 instanceof Object)){
var ex__7641__auto__ = e14544;
var statearr_14545_14577 = state_14499;
(statearr_14545_14577[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14578 = state_14499;
state_14499 = G__14578;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14548,mults,ensure_mult,p))
})();
var state__7701__auto__ = (function (){var statearr_14546 = f__7700__auto__.call(null);
(statearr_14546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14548);

return statearr_14546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14548,mults,ensure_mult,p))
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
var G__14580 = arguments.length;
switch (G__14580) {
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
var G__14583 = arguments.length;
switch (G__14583) {
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
var G__14586 = arguments.length;
switch (G__14586) {
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
var c__7699__auto___14656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14625){
var state_val_14626 = (state_14625[(1)]);
if((state_val_14626 === (7))){
var state_14625__$1 = state_14625;
var statearr_14627_14657 = state_14625__$1;
(statearr_14627_14657[(2)] = null);

(statearr_14627_14657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (1))){
var state_14625__$1 = state_14625;
var statearr_14628_14658 = state_14625__$1;
(statearr_14628_14658[(2)] = null);

(statearr_14628_14658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (4))){
var inst_14589 = (state_14625[(7)]);
var inst_14591 = (inst_14589 < cnt);
var state_14625__$1 = state_14625;
if(cljs.core.truth_(inst_14591)){
var statearr_14629_14659 = state_14625__$1;
(statearr_14629_14659[(1)] = (6));

} else {
var statearr_14630_14660 = state_14625__$1;
(statearr_14630_14660[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (15))){
var inst_14621 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14631_14661 = state_14625__$1;
(statearr_14631_14661[(2)] = inst_14621);

(statearr_14631_14661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (13))){
var inst_14614 = cljs.core.async.close_BANG_.call(null,out);
var state_14625__$1 = state_14625;
var statearr_14632_14662 = state_14625__$1;
(statearr_14632_14662[(2)] = inst_14614);

(statearr_14632_14662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (6))){
var state_14625__$1 = state_14625;
var statearr_14633_14663 = state_14625__$1;
(statearr_14633_14663[(2)] = null);

(statearr_14633_14663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (3))){
var inst_14623 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14625__$1,inst_14623);
} else {
if((state_val_14626 === (12))){
var inst_14611 = (state_14625[(8)]);
var inst_14611__$1 = (state_14625[(2)]);
var inst_14612 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14611__$1);
var state_14625__$1 = (function (){var statearr_14634 = state_14625;
(statearr_14634[(8)] = inst_14611__$1);

return statearr_14634;
})();
if(cljs.core.truth_(inst_14612)){
var statearr_14635_14664 = state_14625__$1;
(statearr_14635_14664[(1)] = (13));

} else {
var statearr_14636_14665 = state_14625__$1;
(statearr_14636_14665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (2))){
var inst_14588 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14589 = (0);
var state_14625__$1 = (function (){var statearr_14637 = state_14625;
(statearr_14637[(7)] = inst_14589);

(statearr_14637[(9)] = inst_14588);

return statearr_14637;
})();
var statearr_14638_14666 = state_14625__$1;
(statearr_14638_14666[(2)] = null);

(statearr_14638_14666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (11))){
var inst_14589 = (state_14625[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14625,(10),Object,null,(9));
var inst_14598 = chs__$1.call(null,inst_14589);
var inst_14599 = done.call(null,inst_14589);
var inst_14600 = cljs.core.async.take_BANG_.call(null,inst_14598,inst_14599);
var state_14625__$1 = state_14625;
var statearr_14639_14667 = state_14625__$1;
(statearr_14639_14667[(2)] = inst_14600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14625__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (9))){
var inst_14589 = (state_14625[(7)]);
var inst_14602 = (state_14625[(2)]);
var inst_14603 = (inst_14589 + (1));
var inst_14589__$1 = inst_14603;
var state_14625__$1 = (function (){var statearr_14640 = state_14625;
(statearr_14640[(7)] = inst_14589__$1);

(statearr_14640[(10)] = inst_14602);

return statearr_14640;
})();
var statearr_14641_14668 = state_14625__$1;
(statearr_14641_14668[(2)] = null);

(statearr_14641_14668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (5))){
var inst_14609 = (state_14625[(2)]);
var state_14625__$1 = (function (){var statearr_14642 = state_14625;
(statearr_14642[(11)] = inst_14609);

return statearr_14642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14625__$1,(12),dchan);
} else {
if((state_val_14626 === (14))){
var inst_14611 = (state_14625[(8)]);
var inst_14616 = cljs.core.apply.call(null,f,inst_14611);
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14625__$1,(16),out,inst_14616);
} else {
if((state_val_14626 === (16))){
var inst_14618 = (state_14625[(2)]);
var state_14625__$1 = (function (){var statearr_14643 = state_14625;
(statearr_14643[(12)] = inst_14618);

return statearr_14643;
})();
var statearr_14644_14669 = state_14625__$1;
(statearr_14644_14669[(2)] = null);

(statearr_14644_14669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (10))){
var inst_14593 = (state_14625[(2)]);
var inst_14594 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14625__$1 = (function (){var statearr_14645 = state_14625;
(statearr_14645[(13)] = inst_14593);

return statearr_14645;
})();
var statearr_14646_14670 = state_14625__$1;
(statearr_14646_14670[(2)] = inst_14594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14625__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (8))){
var inst_14607 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14647_14671 = state_14625__$1;
(statearr_14647_14671[(2)] = inst_14607);

(statearr_14647_14671[(1)] = (5));


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
});})(c__7699__auto___14656,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7637__auto__,c__7699__auto___14656,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14651[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14651[(1)] = (1));

return statearr_14651;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14625){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14652){if((e14652 instanceof Object)){
var ex__7641__auto__ = e14652;
var statearr_14653_14672 = state_14625;
(statearr_14653_14672[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14673 = state_14625;
state_14625 = G__14673;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14656,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7701__auto__ = (function (){var statearr_14654 = f__7700__auto__.call(null);
(statearr_14654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14656);

return statearr_14654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14656,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14676 = arguments.length;
switch (G__14676) {
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
var c__7699__auto___14731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14731,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14731,out){
return (function (state_14706){
var state_val_14707 = (state_14706[(1)]);
if((state_val_14707 === (7))){
var inst_14685 = (state_14706[(7)]);
var inst_14686 = (state_14706[(8)]);
var inst_14685__$1 = (state_14706[(2)]);
var inst_14686__$1 = cljs.core.nth.call(null,inst_14685__$1,(0),null);
var inst_14687 = cljs.core.nth.call(null,inst_14685__$1,(1),null);
var inst_14688 = (inst_14686__$1 == null);
var state_14706__$1 = (function (){var statearr_14708 = state_14706;
(statearr_14708[(9)] = inst_14687);

(statearr_14708[(7)] = inst_14685__$1);

(statearr_14708[(8)] = inst_14686__$1);

return statearr_14708;
})();
if(cljs.core.truth_(inst_14688)){
var statearr_14709_14732 = state_14706__$1;
(statearr_14709_14732[(1)] = (8));

} else {
var statearr_14710_14733 = state_14706__$1;
(statearr_14710_14733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (1))){
var inst_14677 = cljs.core.vec.call(null,chs);
var inst_14678 = inst_14677;
var state_14706__$1 = (function (){var statearr_14711 = state_14706;
(statearr_14711[(10)] = inst_14678);

return statearr_14711;
})();
var statearr_14712_14734 = state_14706__$1;
(statearr_14712_14734[(2)] = null);

(statearr_14712_14734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (4))){
var inst_14678 = (state_14706[(10)]);
var state_14706__$1 = state_14706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14706__$1,(7),inst_14678);
} else {
if((state_val_14707 === (6))){
var inst_14702 = (state_14706[(2)]);
var state_14706__$1 = state_14706;
var statearr_14713_14735 = state_14706__$1;
(statearr_14713_14735[(2)] = inst_14702);

(statearr_14713_14735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (3))){
var inst_14704 = (state_14706[(2)]);
var state_14706__$1 = state_14706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14706__$1,inst_14704);
} else {
if((state_val_14707 === (2))){
var inst_14678 = (state_14706[(10)]);
var inst_14680 = cljs.core.count.call(null,inst_14678);
var inst_14681 = (inst_14680 > (0));
var state_14706__$1 = state_14706;
if(cljs.core.truth_(inst_14681)){
var statearr_14715_14736 = state_14706__$1;
(statearr_14715_14736[(1)] = (4));

} else {
var statearr_14716_14737 = state_14706__$1;
(statearr_14716_14737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (11))){
var inst_14678 = (state_14706[(10)]);
var inst_14695 = (state_14706[(2)]);
var tmp14714 = inst_14678;
var inst_14678__$1 = tmp14714;
var state_14706__$1 = (function (){var statearr_14717 = state_14706;
(statearr_14717[(11)] = inst_14695);

(statearr_14717[(10)] = inst_14678__$1);

return statearr_14717;
})();
var statearr_14718_14738 = state_14706__$1;
(statearr_14718_14738[(2)] = null);

(statearr_14718_14738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (9))){
var inst_14686 = (state_14706[(8)]);
var state_14706__$1 = state_14706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14706__$1,(11),out,inst_14686);
} else {
if((state_val_14707 === (5))){
var inst_14700 = cljs.core.async.close_BANG_.call(null,out);
var state_14706__$1 = state_14706;
var statearr_14719_14739 = state_14706__$1;
(statearr_14719_14739[(2)] = inst_14700);

(statearr_14719_14739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (10))){
var inst_14698 = (state_14706[(2)]);
var state_14706__$1 = state_14706;
var statearr_14720_14740 = state_14706__$1;
(statearr_14720_14740[(2)] = inst_14698);

(statearr_14720_14740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (8))){
var inst_14678 = (state_14706[(10)]);
var inst_14687 = (state_14706[(9)]);
var inst_14685 = (state_14706[(7)]);
var inst_14686 = (state_14706[(8)]);
var inst_14690 = (function (){var c = inst_14687;
var v = inst_14686;
var vec__14683 = inst_14685;
var cs = inst_14678;
return ((function (c,v,vec__14683,cs,inst_14678,inst_14687,inst_14685,inst_14686,state_val_14707,c__7699__auto___14731,out){
return (function (p1__14674_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14674_SHARP_);
});
;})(c,v,vec__14683,cs,inst_14678,inst_14687,inst_14685,inst_14686,state_val_14707,c__7699__auto___14731,out))
})();
var inst_14691 = cljs.core.filterv.call(null,inst_14690,inst_14678);
var inst_14678__$1 = inst_14691;
var state_14706__$1 = (function (){var statearr_14721 = state_14706;
(statearr_14721[(10)] = inst_14678__$1);

return statearr_14721;
})();
var statearr_14722_14741 = state_14706__$1;
(statearr_14722_14741[(2)] = null);

(statearr_14722_14741[(1)] = (2));


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
});})(c__7699__auto___14731,out))
;
return ((function (switch__7637__auto__,c__7699__auto___14731,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14726[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14726[(1)] = (1));

return statearr_14726;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14706){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14727){if((e14727 instanceof Object)){
var ex__7641__auto__ = e14727;
var statearr_14728_14742 = state_14706;
(statearr_14728_14742[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14743 = state_14706;
state_14706 = G__14743;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14731,out))
})();
var state__7701__auto__ = (function (){var statearr_14729 = f__7700__auto__.call(null);
(statearr_14729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14731);

return statearr_14729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14731,out))
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
var G__14745 = arguments.length;
switch (G__14745) {
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
var c__7699__auto___14793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14793,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14793,out){
return (function (state_14769){
var state_val_14770 = (state_14769[(1)]);
if((state_val_14770 === (7))){
var inst_14751 = (state_14769[(7)]);
var inst_14751__$1 = (state_14769[(2)]);
var inst_14752 = (inst_14751__$1 == null);
var inst_14753 = cljs.core.not.call(null,inst_14752);
var state_14769__$1 = (function (){var statearr_14771 = state_14769;
(statearr_14771[(7)] = inst_14751__$1);

return statearr_14771;
})();
if(inst_14753){
var statearr_14772_14794 = state_14769__$1;
(statearr_14772_14794[(1)] = (8));

} else {
var statearr_14773_14795 = state_14769__$1;
(statearr_14773_14795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (1))){
var inst_14746 = (0);
var state_14769__$1 = (function (){var statearr_14774 = state_14769;
(statearr_14774[(8)] = inst_14746);

return statearr_14774;
})();
var statearr_14775_14796 = state_14769__$1;
(statearr_14775_14796[(2)] = null);

(statearr_14775_14796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (4))){
var state_14769__$1 = state_14769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14769__$1,(7),ch);
} else {
if((state_val_14770 === (6))){
var inst_14764 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14776_14797 = state_14769__$1;
(statearr_14776_14797[(2)] = inst_14764);

(statearr_14776_14797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (3))){
var inst_14766 = (state_14769[(2)]);
var inst_14767 = cljs.core.async.close_BANG_.call(null,out);
var state_14769__$1 = (function (){var statearr_14777 = state_14769;
(statearr_14777[(9)] = inst_14766);

return statearr_14777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14769__$1,inst_14767);
} else {
if((state_val_14770 === (2))){
var inst_14746 = (state_14769[(8)]);
var inst_14748 = (inst_14746 < n);
var state_14769__$1 = state_14769;
if(cljs.core.truth_(inst_14748)){
var statearr_14778_14798 = state_14769__$1;
(statearr_14778_14798[(1)] = (4));

} else {
var statearr_14779_14799 = state_14769__$1;
(statearr_14779_14799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (11))){
var inst_14746 = (state_14769[(8)]);
var inst_14756 = (state_14769[(2)]);
var inst_14757 = (inst_14746 + (1));
var inst_14746__$1 = inst_14757;
var state_14769__$1 = (function (){var statearr_14780 = state_14769;
(statearr_14780[(8)] = inst_14746__$1);

(statearr_14780[(10)] = inst_14756);

return statearr_14780;
})();
var statearr_14781_14800 = state_14769__$1;
(statearr_14781_14800[(2)] = null);

(statearr_14781_14800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (9))){
var state_14769__$1 = state_14769;
var statearr_14782_14801 = state_14769__$1;
(statearr_14782_14801[(2)] = null);

(statearr_14782_14801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (5))){
var state_14769__$1 = state_14769;
var statearr_14783_14802 = state_14769__$1;
(statearr_14783_14802[(2)] = null);

(statearr_14783_14802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (10))){
var inst_14761 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14784_14803 = state_14769__$1;
(statearr_14784_14803[(2)] = inst_14761);

(statearr_14784_14803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (8))){
var inst_14751 = (state_14769[(7)]);
var state_14769__$1 = state_14769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14769__$1,(11),out,inst_14751);
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
});})(c__7699__auto___14793,out))
;
return ((function (switch__7637__auto__,c__7699__auto___14793,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14788[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14788[(1)] = (1));

return statearr_14788;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14769){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14789){if((e14789 instanceof Object)){
var ex__7641__auto__ = e14789;
var statearr_14790_14804 = state_14769;
(statearr_14790_14804[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14805 = state_14769;
state_14769 = G__14805;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14793,out))
})();
var state__7701__auto__ = (function (){var statearr_14791 = f__7700__auto__.call(null);
(statearr_14791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14793);

return statearr_14791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14793,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14813 = (function (ch,f,map_LT_,meta14814){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14814 = meta14814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14816 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14816 = (function (fn1,_,meta14814,map_LT_,f,ch,meta14817){
this.fn1 = fn1;
this._ = _;
this.meta14814 = meta14814;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14817 = meta14817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14816.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14806_SHARP_){
return f1.call(null,(((p1__14806_SHARP_ == null))?null:self__.f.call(null,p1__14806_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14818){
var self__ = this;
var _14818__$1 = this;
return self__.meta14817;
});})(___$1))
;

cljs.core.async.t14816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14818,meta14817__$1){
var self__ = this;
var _14818__$1 = this;
return (new cljs.core.async.t14816(self__.fn1,self__._,self__.meta14814,self__.map_LT_,self__.f,self__.ch,meta14817__$1));
});})(___$1))
;

cljs.core.async.t14816.cljs$lang$type = true;

cljs.core.async.t14816.cljs$lang$ctorStr = "cljs.core.async/t14816";

cljs.core.async.t14816.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14816");
});})(___$1))
;

cljs.core.async.__GT_t14816 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14816(fn1__$1,___$2,meta14814__$1,map_LT___$1,f__$1,ch__$1,meta14817){
return (new cljs.core.async.t14816(fn1__$1,___$2,meta14814__$1,map_LT___$1,f__$1,ch__$1,meta14817));
});})(___$1))
;

}

return (new cljs.core.async.t14816(fn1,___$1,self__.meta14814,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14815){
var self__ = this;
var _14815__$1 = this;
return self__.meta14814;
});

cljs.core.async.t14813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14815,meta14814__$1){
var self__ = this;
var _14815__$1 = this;
return (new cljs.core.async.t14813(self__.ch,self__.f,self__.map_LT_,meta14814__$1));
});

cljs.core.async.t14813.cljs$lang$type = true;

cljs.core.async.t14813.cljs$lang$ctorStr = "cljs.core.async/t14813";

cljs.core.async.t14813.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14813");
});

cljs.core.async.__GT_t14813 = (function cljs$core$async$map_LT__$___GT_t14813(ch__$1,f__$1,map_LT___$1,meta14814){
return (new cljs.core.async.t14813(ch__$1,f__$1,map_LT___$1,meta14814));
});

}

return (new cljs.core.async.t14813(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14822 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14822 = (function (ch,f,map_GT_,meta14823){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14823 = meta14823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14824){
var self__ = this;
var _14824__$1 = this;
return self__.meta14823;
});

cljs.core.async.t14822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14824,meta14823__$1){
var self__ = this;
var _14824__$1 = this;
return (new cljs.core.async.t14822(self__.ch,self__.f,self__.map_GT_,meta14823__$1));
});

cljs.core.async.t14822.cljs$lang$type = true;

cljs.core.async.t14822.cljs$lang$ctorStr = "cljs.core.async/t14822";

cljs.core.async.t14822.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14822");
});

cljs.core.async.__GT_t14822 = (function cljs$core$async$map_GT__$___GT_t14822(ch__$1,f__$1,map_GT___$1,meta14823){
return (new cljs.core.async.t14822(ch__$1,f__$1,map_GT___$1,meta14823));
});

}

return (new cljs.core.async.t14822(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14828 = (function (ch,p,filter_GT_,meta14829){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14829 = meta14829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14830){
var self__ = this;
var _14830__$1 = this;
return self__.meta14829;
});

cljs.core.async.t14828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14830,meta14829__$1){
var self__ = this;
var _14830__$1 = this;
return (new cljs.core.async.t14828(self__.ch,self__.p,self__.filter_GT_,meta14829__$1));
});

cljs.core.async.t14828.cljs$lang$type = true;

cljs.core.async.t14828.cljs$lang$ctorStr = "cljs.core.async/t14828";

cljs.core.async.t14828.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14828");
});

cljs.core.async.__GT_t14828 = (function cljs$core$async$filter_GT__$___GT_t14828(ch__$1,p__$1,filter_GT___$1,meta14829){
return (new cljs.core.async.t14828(ch__$1,p__$1,filter_GT___$1,meta14829));
});

}

return (new cljs.core.async.t14828(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14832 = arguments.length;
switch (G__14832) {
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
var c__7699__auto___14875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14875,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14875,out){
return (function (state_14853){
var state_val_14854 = (state_14853[(1)]);
if((state_val_14854 === (7))){
var inst_14849 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
var statearr_14855_14876 = state_14853__$1;
(statearr_14855_14876[(2)] = inst_14849);

(statearr_14855_14876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (1))){
var state_14853__$1 = state_14853;
var statearr_14856_14877 = state_14853__$1;
(statearr_14856_14877[(2)] = null);

(statearr_14856_14877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (4))){
var inst_14835 = (state_14853[(7)]);
var inst_14835__$1 = (state_14853[(2)]);
var inst_14836 = (inst_14835__$1 == null);
var state_14853__$1 = (function (){var statearr_14857 = state_14853;
(statearr_14857[(7)] = inst_14835__$1);

return statearr_14857;
})();
if(cljs.core.truth_(inst_14836)){
var statearr_14858_14878 = state_14853__$1;
(statearr_14858_14878[(1)] = (5));

} else {
var statearr_14859_14879 = state_14853__$1;
(statearr_14859_14879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (6))){
var inst_14835 = (state_14853[(7)]);
var inst_14840 = p.call(null,inst_14835);
var state_14853__$1 = state_14853;
if(cljs.core.truth_(inst_14840)){
var statearr_14860_14880 = state_14853__$1;
(statearr_14860_14880[(1)] = (8));

} else {
var statearr_14861_14881 = state_14853__$1;
(statearr_14861_14881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (3))){
var inst_14851 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14853__$1,inst_14851);
} else {
if((state_val_14854 === (2))){
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14853__$1,(4),ch);
} else {
if((state_val_14854 === (11))){
var inst_14843 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
var statearr_14862_14882 = state_14853__$1;
(statearr_14862_14882[(2)] = inst_14843);

(statearr_14862_14882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (9))){
var state_14853__$1 = state_14853;
var statearr_14863_14883 = state_14853__$1;
(statearr_14863_14883[(2)] = null);

(statearr_14863_14883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (5))){
var inst_14838 = cljs.core.async.close_BANG_.call(null,out);
var state_14853__$1 = state_14853;
var statearr_14864_14884 = state_14853__$1;
(statearr_14864_14884[(2)] = inst_14838);

(statearr_14864_14884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (10))){
var inst_14846 = (state_14853[(2)]);
var state_14853__$1 = (function (){var statearr_14865 = state_14853;
(statearr_14865[(8)] = inst_14846);

return statearr_14865;
})();
var statearr_14866_14885 = state_14853__$1;
(statearr_14866_14885[(2)] = null);

(statearr_14866_14885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (8))){
var inst_14835 = (state_14853[(7)]);
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14853__$1,(11),out,inst_14835);
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
});})(c__7699__auto___14875,out))
;
return ((function (switch__7637__auto__,c__7699__auto___14875,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14870 = [null,null,null,null,null,null,null,null,null];
(statearr_14870[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14870[(1)] = (1));

return statearr_14870;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14853){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14871){if((e14871 instanceof Object)){
var ex__7641__auto__ = e14871;
var statearr_14872_14886 = state_14853;
(statearr_14872_14886[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14887 = state_14853;
state_14853 = G__14887;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14875,out))
})();
var state__7701__auto__ = (function (){var statearr_14873 = f__7700__auto__.call(null);
(statearr_14873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14875);

return statearr_14873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14875,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__14889 = arguments.length;
switch (G__14889) {
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
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_15056){
var state_val_15057 = (state_15056[(1)]);
if((state_val_15057 === (7))){
var inst_15052 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15058_15099 = state_15056__$1;
(statearr_15058_15099[(2)] = inst_15052);

(statearr_15058_15099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (20))){
var inst_15022 = (state_15056[(7)]);
var inst_15033 = (state_15056[(2)]);
var inst_15034 = cljs.core.next.call(null,inst_15022);
var inst_15008 = inst_15034;
var inst_15009 = null;
var inst_15010 = (0);
var inst_15011 = (0);
var state_15056__$1 = (function (){var statearr_15059 = state_15056;
(statearr_15059[(8)] = inst_15009);

(statearr_15059[(9)] = inst_15033);

(statearr_15059[(10)] = inst_15011);

(statearr_15059[(11)] = inst_15010);

(statearr_15059[(12)] = inst_15008);

return statearr_15059;
})();
var statearr_15060_15100 = state_15056__$1;
(statearr_15060_15100[(2)] = null);

(statearr_15060_15100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (1))){
var state_15056__$1 = state_15056;
var statearr_15061_15101 = state_15056__$1;
(statearr_15061_15101[(2)] = null);

(statearr_15061_15101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (4))){
var inst_14997 = (state_15056[(13)]);
var inst_14997__$1 = (state_15056[(2)]);
var inst_14998 = (inst_14997__$1 == null);
var state_15056__$1 = (function (){var statearr_15062 = state_15056;
(statearr_15062[(13)] = inst_14997__$1);

return statearr_15062;
})();
if(cljs.core.truth_(inst_14998)){
var statearr_15063_15102 = state_15056__$1;
(statearr_15063_15102[(1)] = (5));

} else {
var statearr_15064_15103 = state_15056__$1;
(statearr_15064_15103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (15))){
var state_15056__$1 = state_15056;
var statearr_15068_15104 = state_15056__$1;
(statearr_15068_15104[(2)] = null);

(statearr_15068_15104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (21))){
var state_15056__$1 = state_15056;
var statearr_15069_15105 = state_15056__$1;
(statearr_15069_15105[(2)] = null);

(statearr_15069_15105[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (13))){
var inst_15009 = (state_15056[(8)]);
var inst_15011 = (state_15056[(10)]);
var inst_15010 = (state_15056[(11)]);
var inst_15008 = (state_15056[(12)]);
var inst_15018 = (state_15056[(2)]);
var inst_15019 = (inst_15011 + (1));
var tmp15065 = inst_15009;
var tmp15066 = inst_15010;
var tmp15067 = inst_15008;
var inst_15008__$1 = tmp15067;
var inst_15009__$1 = tmp15065;
var inst_15010__$1 = tmp15066;
var inst_15011__$1 = inst_15019;
var state_15056__$1 = (function (){var statearr_15070 = state_15056;
(statearr_15070[(8)] = inst_15009__$1);

(statearr_15070[(10)] = inst_15011__$1);

(statearr_15070[(11)] = inst_15010__$1);

(statearr_15070[(14)] = inst_15018);

(statearr_15070[(12)] = inst_15008__$1);

return statearr_15070;
})();
var statearr_15071_15106 = state_15056__$1;
(statearr_15071_15106[(2)] = null);

(statearr_15071_15106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (22))){
var state_15056__$1 = state_15056;
var statearr_15072_15107 = state_15056__$1;
(statearr_15072_15107[(2)] = null);

(statearr_15072_15107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (6))){
var inst_14997 = (state_15056[(13)]);
var inst_15006 = f.call(null,inst_14997);
var inst_15007 = cljs.core.seq.call(null,inst_15006);
var inst_15008 = inst_15007;
var inst_15009 = null;
var inst_15010 = (0);
var inst_15011 = (0);
var state_15056__$1 = (function (){var statearr_15073 = state_15056;
(statearr_15073[(8)] = inst_15009);

(statearr_15073[(10)] = inst_15011);

(statearr_15073[(11)] = inst_15010);

(statearr_15073[(12)] = inst_15008);

return statearr_15073;
})();
var statearr_15074_15108 = state_15056__$1;
(statearr_15074_15108[(2)] = null);

(statearr_15074_15108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (17))){
var inst_15022 = (state_15056[(7)]);
var inst_15026 = cljs.core.chunk_first.call(null,inst_15022);
var inst_15027 = cljs.core.chunk_rest.call(null,inst_15022);
var inst_15028 = cljs.core.count.call(null,inst_15026);
var inst_15008 = inst_15027;
var inst_15009 = inst_15026;
var inst_15010 = inst_15028;
var inst_15011 = (0);
var state_15056__$1 = (function (){var statearr_15075 = state_15056;
(statearr_15075[(8)] = inst_15009);

(statearr_15075[(10)] = inst_15011);

(statearr_15075[(11)] = inst_15010);

(statearr_15075[(12)] = inst_15008);

return statearr_15075;
})();
var statearr_15076_15109 = state_15056__$1;
(statearr_15076_15109[(2)] = null);

(statearr_15076_15109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (3))){
var inst_15054 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15056__$1,inst_15054);
} else {
if((state_val_15057 === (12))){
var inst_15042 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15077_15110 = state_15056__$1;
(statearr_15077_15110[(2)] = inst_15042);

(statearr_15077_15110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (2))){
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15056__$1,(4),in$);
} else {
if((state_val_15057 === (23))){
var inst_15050 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15078_15111 = state_15056__$1;
(statearr_15078_15111[(2)] = inst_15050);

(statearr_15078_15111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (19))){
var inst_15037 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15079_15112 = state_15056__$1;
(statearr_15079_15112[(2)] = inst_15037);

(statearr_15079_15112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (11))){
var inst_15022 = (state_15056[(7)]);
var inst_15008 = (state_15056[(12)]);
var inst_15022__$1 = cljs.core.seq.call(null,inst_15008);
var state_15056__$1 = (function (){var statearr_15080 = state_15056;
(statearr_15080[(7)] = inst_15022__$1);

return statearr_15080;
})();
if(inst_15022__$1){
var statearr_15081_15113 = state_15056__$1;
(statearr_15081_15113[(1)] = (14));

} else {
var statearr_15082_15114 = state_15056__$1;
(statearr_15082_15114[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (9))){
var inst_15044 = (state_15056[(2)]);
var inst_15045 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15056__$1 = (function (){var statearr_15083 = state_15056;
(statearr_15083[(15)] = inst_15044);

return statearr_15083;
})();
if(cljs.core.truth_(inst_15045)){
var statearr_15084_15115 = state_15056__$1;
(statearr_15084_15115[(1)] = (21));

} else {
var statearr_15085_15116 = state_15056__$1;
(statearr_15085_15116[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (5))){
var inst_15000 = cljs.core.async.close_BANG_.call(null,out);
var state_15056__$1 = state_15056;
var statearr_15086_15117 = state_15056__$1;
(statearr_15086_15117[(2)] = inst_15000);

(statearr_15086_15117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (14))){
var inst_15022 = (state_15056[(7)]);
var inst_15024 = cljs.core.chunked_seq_QMARK_.call(null,inst_15022);
var state_15056__$1 = state_15056;
if(inst_15024){
var statearr_15087_15118 = state_15056__$1;
(statearr_15087_15118[(1)] = (17));

} else {
var statearr_15088_15119 = state_15056__$1;
(statearr_15088_15119[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (16))){
var inst_15040 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15089_15120 = state_15056__$1;
(statearr_15089_15120[(2)] = inst_15040);

(statearr_15089_15120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (10))){
var inst_15009 = (state_15056[(8)]);
var inst_15011 = (state_15056[(10)]);
var inst_15016 = cljs.core._nth.call(null,inst_15009,inst_15011);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15056__$1,(13),out,inst_15016);
} else {
if((state_val_15057 === (18))){
var inst_15022 = (state_15056[(7)]);
var inst_15031 = cljs.core.first.call(null,inst_15022);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15056__$1,(20),out,inst_15031);
} else {
if((state_val_15057 === (8))){
var inst_15011 = (state_15056[(10)]);
var inst_15010 = (state_15056[(11)]);
var inst_15013 = (inst_15011 < inst_15010);
var inst_15014 = inst_15013;
var state_15056__$1 = state_15056;
if(cljs.core.truth_(inst_15014)){
var statearr_15090_15121 = state_15056__$1;
(statearr_15090_15121[(1)] = (10));

} else {
var statearr_15091_15122 = state_15056__$1;
(statearr_15091_15122[(1)] = (11));

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
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_15095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15095[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__);

(statearr_15095[(1)] = (1));

return statearr_15095;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____1 = (function (state_15056){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15096){if((e15096 instanceof Object)){
var ex__7641__auto__ = e15096;
var statearr_15097_15123 = state_15056;
(statearr_15097_15123[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15124 = state_15056;
state_15056 = G__15124;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__ = function(state_15056){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____1.call(this,state_15056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_15098 = f__7700__auto__.call(null);
(statearr_15098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_15098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15126 = arguments.length;
switch (G__15126) {
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
var G__15129 = arguments.length;
switch (G__15129) {
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
var G__15132 = arguments.length;
switch (G__15132) {
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
var c__7699__auto___15182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___15182,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___15182,out){
return (function (state_15156){
var state_val_15157 = (state_15156[(1)]);
if((state_val_15157 === (7))){
var inst_15151 = (state_15156[(2)]);
var state_15156__$1 = state_15156;
var statearr_15158_15183 = state_15156__$1;
(statearr_15158_15183[(2)] = inst_15151);

(statearr_15158_15183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (1))){
var inst_15133 = null;
var state_15156__$1 = (function (){var statearr_15159 = state_15156;
(statearr_15159[(7)] = inst_15133);

return statearr_15159;
})();
var statearr_15160_15184 = state_15156__$1;
(statearr_15160_15184[(2)] = null);

(statearr_15160_15184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (4))){
var inst_15136 = (state_15156[(8)]);
var inst_15136__$1 = (state_15156[(2)]);
var inst_15137 = (inst_15136__$1 == null);
var inst_15138 = cljs.core.not.call(null,inst_15137);
var state_15156__$1 = (function (){var statearr_15161 = state_15156;
(statearr_15161[(8)] = inst_15136__$1);

return statearr_15161;
})();
if(inst_15138){
var statearr_15162_15185 = state_15156__$1;
(statearr_15162_15185[(1)] = (5));

} else {
var statearr_15163_15186 = state_15156__$1;
(statearr_15163_15186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (6))){
var state_15156__$1 = state_15156;
var statearr_15164_15187 = state_15156__$1;
(statearr_15164_15187[(2)] = null);

(statearr_15164_15187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (3))){
var inst_15153 = (state_15156[(2)]);
var inst_15154 = cljs.core.async.close_BANG_.call(null,out);
var state_15156__$1 = (function (){var statearr_15165 = state_15156;
(statearr_15165[(9)] = inst_15153);

return statearr_15165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15156__$1,inst_15154);
} else {
if((state_val_15157 === (2))){
var state_15156__$1 = state_15156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15156__$1,(4),ch);
} else {
if((state_val_15157 === (11))){
var inst_15136 = (state_15156[(8)]);
var inst_15145 = (state_15156[(2)]);
var inst_15133 = inst_15136;
var state_15156__$1 = (function (){var statearr_15166 = state_15156;
(statearr_15166[(7)] = inst_15133);

(statearr_15166[(10)] = inst_15145);

return statearr_15166;
})();
var statearr_15167_15188 = state_15156__$1;
(statearr_15167_15188[(2)] = null);

(statearr_15167_15188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (9))){
var inst_15136 = (state_15156[(8)]);
var state_15156__$1 = state_15156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15156__$1,(11),out,inst_15136);
} else {
if((state_val_15157 === (5))){
var inst_15133 = (state_15156[(7)]);
var inst_15136 = (state_15156[(8)]);
var inst_15140 = cljs.core._EQ_.call(null,inst_15136,inst_15133);
var state_15156__$1 = state_15156;
if(inst_15140){
var statearr_15169_15189 = state_15156__$1;
(statearr_15169_15189[(1)] = (8));

} else {
var statearr_15170_15190 = state_15156__$1;
(statearr_15170_15190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (10))){
var inst_15148 = (state_15156[(2)]);
var state_15156__$1 = state_15156;
var statearr_15171_15191 = state_15156__$1;
(statearr_15171_15191[(2)] = inst_15148);

(statearr_15171_15191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15157 === (8))){
var inst_15133 = (state_15156[(7)]);
var tmp15168 = inst_15133;
var inst_15133__$1 = tmp15168;
var state_15156__$1 = (function (){var statearr_15172 = state_15156;
(statearr_15172[(7)] = inst_15133__$1);

return statearr_15172;
})();
var statearr_15173_15192 = state_15156__$1;
(statearr_15173_15192[(2)] = null);

(statearr_15173_15192[(1)] = (2));


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
});})(c__7699__auto___15182,out))
;
return ((function (switch__7637__auto__,c__7699__auto___15182,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_15177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15177[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_15177[(1)] = (1));

return statearr_15177;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_15156){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15178){if((e15178 instanceof Object)){
var ex__7641__auto__ = e15178;
var statearr_15179_15193 = state_15156;
(statearr_15179_15193[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15194 = state_15156;
state_15156 = G__15194;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_15156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_15156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___15182,out))
})();
var state__7701__auto__ = (function (){var statearr_15180 = f__7700__auto__.call(null);
(statearr_15180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___15182);

return statearr_15180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___15182,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15196 = arguments.length;
switch (G__15196) {
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
var c__7699__auto___15265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___15265,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___15265,out){
return (function (state_15234){
var state_val_15235 = (state_15234[(1)]);
if((state_val_15235 === (7))){
var inst_15230 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15236_15266 = state_15234__$1;
(statearr_15236_15266[(2)] = inst_15230);

(statearr_15236_15266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (1))){
var inst_15197 = (new Array(n));
var inst_15198 = inst_15197;
var inst_15199 = (0);
var state_15234__$1 = (function (){var statearr_15237 = state_15234;
(statearr_15237[(7)] = inst_15198);

(statearr_15237[(8)] = inst_15199);

return statearr_15237;
})();
var statearr_15238_15267 = state_15234__$1;
(statearr_15238_15267[(2)] = null);

(statearr_15238_15267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (4))){
var inst_15202 = (state_15234[(9)]);
var inst_15202__$1 = (state_15234[(2)]);
var inst_15203 = (inst_15202__$1 == null);
var inst_15204 = cljs.core.not.call(null,inst_15203);
var state_15234__$1 = (function (){var statearr_15239 = state_15234;
(statearr_15239[(9)] = inst_15202__$1);

return statearr_15239;
})();
if(inst_15204){
var statearr_15240_15268 = state_15234__$1;
(statearr_15240_15268[(1)] = (5));

} else {
var statearr_15241_15269 = state_15234__$1;
(statearr_15241_15269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (15))){
var inst_15224 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15242_15270 = state_15234__$1;
(statearr_15242_15270[(2)] = inst_15224);

(statearr_15242_15270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (13))){
var state_15234__$1 = state_15234;
var statearr_15243_15271 = state_15234__$1;
(statearr_15243_15271[(2)] = null);

(statearr_15243_15271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (6))){
var inst_15199 = (state_15234[(8)]);
var inst_15220 = (inst_15199 > (0));
var state_15234__$1 = state_15234;
if(cljs.core.truth_(inst_15220)){
var statearr_15244_15272 = state_15234__$1;
(statearr_15244_15272[(1)] = (12));

} else {
var statearr_15245_15273 = state_15234__$1;
(statearr_15245_15273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (3))){
var inst_15232 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15234__$1,inst_15232);
} else {
if((state_val_15235 === (12))){
var inst_15198 = (state_15234[(7)]);
var inst_15222 = cljs.core.vec.call(null,inst_15198);
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15234__$1,(15),out,inst_15222);
} else {
if((state_val_15235 === (2))){
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15234__$1,(4),ch);
} else {
if((state_val_15235 === (11))){
var inst_15214 = (state_15234[(2)]);
var inst_15215 = (new Array(n));
var inst_15198 = inst_15215;
var inst_15199 = (0);
var state_15234__$1 = (function (){var statearr_15246 = state_15234;
(statearr_15246[(7)] = inst_15198);

(statearr_15246[(8)] = inst_15199);

(statearr_15246[(10)] = inst_15214);

return statearr_15246;
})();
var statearr_15247_15274 = state_15234__$1;
(statearr_15247_15274[(2)] = null);

(statearr_15247_15274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (9))){
var inst_15198 = (state_15234[(7)]);
var inst_15212 = cljs.core.vec.call(null,inst_15198);
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15234__$1,(11),out,inst_15212);
} else {
if((state_val_15235 === (5))){
var inst_15198 = (state_15234[(7)]);
var inst_15199 = (state_15234[(8)]);
var inst_15207 = (state_15234[(11)]);
var inst_15202 = (state_15234[(9)]);
var inst_15206 = (inst_15198[inst_15199] = inst_15202);
var inst_15207__$1 = (inst_15199 + (1));
var inst_15208 = (inst_15207__$1 < n);
var state_15234__$1 = (function (){var statearr_15248 = state_15234;
(statearr_15248[(11)] = inst_15207__$1);

(statearr_15248[(12)] = inst_15206);

return statearr_15248;
})();
if(cljs.core.truth_(inst_15208)){
var statearr_15249_15275 = state_15234__$1;
(statearr_15249_15275[(1)] = (8));

} else {
var statearr_15250_15276 = state_15234__$1;
(statearr_15250_15276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (14))){
var inst_15227 = (state_15234[(2)]);
var inst_15228 = cljs.core.async.close_BANG_.call(null,out);
var state_15234__$1 = (function (){var statearr_15252 = state_15234;
(statearr_15252[(13)] = inst_15227);

return statearr_15252;
})();
var statearr_15253_15277 = state_15234__$1;
(statearr_15253_15277[(2)] = inst_15228);

(statearr_15253_15277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (10))){
var inst_15218 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15254_15278 = state_15234__$1;
(statearr_15254_15278[(2)] = inst_15218);

(statearr_15254_15278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (8))){
var inst_15198 = (state_15234[(7)]);
var inst_15207 = (state_15234[(11)]);
var tmp15251 = inst_15198;
var inst_15198__$1 = tmp15251;
var inst_15199 = inst_15207;
var state_15234__$1 = (function (){var statearr_15255 = state_15234;
(statearr_15255[(7)] = inst_15198__$1);

(statearr_15255[(8)] = inst_15199);

return statearr_15255;
})();
var statearr_15256_15279 = state_15234__$1;
(statearr_15256_15279[(2)] = null);

(statearr_15256_15279[(1)] = (2));


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
});})(c__7699__auto___15265,out))
;
return ((function (switch__7637__auto__,c__7699__auto___15265,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_15260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15260[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_15260[(1)] = (1));

return statearr_15260;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_15234){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15261){if((e15261 instanceof Object)){
var ex__7641__auto__ = e15261;
var statearr_15262_15280 = state_15234;
(statearr_15262_15280[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15281 = state_15234;
state_15234 = G__15281;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_15234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_15234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___15265,out))
})();
var state__7701__auto__ = (function (){var statearr_15263 = f__7700__auto__.call(null);
(statearr_15263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___15265);

return statearr_15263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___15265,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15283 = arguments.length;
switch (G__15283) {
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
var c__7699__auto___15356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___15356,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___15356,out){
return (function (state_15325){
var state_val_15326 = (state_15325[(1)]);
if((state_val_15326 === (7))){
var inst_15321 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15327_15357 = state_15325__$1;
(statearr_15327_15357[(2)] = inst_15321);

(statearr_15327_15357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (1))){
var inst_15284 = [];
var inst_15285 = inst_15284;
var inst_15286 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15325__$1 = (function (){var statearr_15328 = state_15325;
(statearr_15328[(7)] = inst_15286);

(statearr_15328[(8)] = inst_15285);

return statearr_15328;
})();
var statearr_15329_15358 = state_15325__$1;
(statearr_15329_15358[(2)] = null);

(statearr_15329_15358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (4))){
var inst_15289 = (state_15325[(9)]);
var inst_15289__$1 = (state_15325[(2)]);
var inst_15290 = (inst_15289__$1 == null);
var inst_15291 = cljs.core.not.call(null,inst_15290);
var state_15325__$1 = (function (){var statearr_15330 = state_15325;
(statearr_15330[(9)] = inst_15289__$1);

return statearr_15330;
})();
if(inst_15291){
var statearr_15331_15359 = state_15325__$1;
(statearr_15331_15359[(1)] = (5));

} else {
var statearr_15332_15360 = state_15325__$1;
(statearr_15332_15360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (15))){
var inst_15315 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15333_15361 = state_15325__$1;
(statearr_15333_15361[(2)] = inst_15315);

(statearr_15333_15361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (13))){
var state_15325__$1 = state_15325;
var statearr_15334_15362 = state_15325__$1;
(statearr_15334_15362[(2)] = null);

(statearr_15334_15362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (6))){
var inst_15285 = (state_15325[(8)]);
var inst_15310 = inst_15285.length;
var inst_15311 = (inst_15310 > (0));
var state_15325__$1 = state_15325;
if(cljs.core.truth_(inst_15311)){
var statearr_15335_15363 = state_15325__$1;
(statearr_15335_15363[(1)] = (12));

} else {
var statearr_15336_15364 = state_15325__$1;
(statearr_15336_15364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (3))){
var inst_15323 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15325__$1,inst_15323);
} else {
if((state_val_15326 === (12))){
var inst_15285 = (state_15325[(8)]);
var inst_15313 = cljs.core.vec.call(null,inst_15285);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15325__$1,(15),out,inst_15313);
} else {
if((state_val_15326 === (2))){
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15325__$1,(4),ch);
} else {
if((state_val_15326 === (11))){
var inst_15289 = (state_15325[(9)]);
var inst_15293 = (state_15325[(10)]);
var inst_15303 = (state_15325[(2)]);
var inst_15304 = [];
var inst_15305 = inst_15304.push(inst_15289);
var inst_15285 = inst_15304;
var inst_15286 = inst_15293;
var state_15325__$1 = (function (){var statearr_15337 = state_15325;
(statearr_15337[(7)] = inst_15286);

(statearr_15337[(8)] = inst_15285);

(statearr_15337[(11)] = inst_15305);

(statearr_15337[(12)] = inst_15303);

return statearr_15337;
})();
var statearr_15338_15365 = state_15325__$1;
(statearr_15338_15365[(2)] = null);

(statearr_15338_15365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (9))){
var inst_15285 = (state_15325[(8)]);
var inst_15301 = cljs.core.vec.call(null,inst_15285);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15325__$1,(11),out,inst_15301);
} else {
if((state_val_15326 === (5))){
var inst_15289 = (state_15325[(9)]);
var inst_15286 = (state_15325[(7)]);
var inst_15293 = (state_15325[(10)]);
var inst_15293__$1 = f.call(null,inst_15289);
var inst_15294 = cljs.core._EQ_.call(null,inst_15293__$1,inst_15286);
var inst_15295 = cljs.core.keyword_identical_QMARK_.call(null,inst_15286,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15296 = (inst_15294) || (inst_15295);
var state_15325__$1 = (function (){var statearr_15339 = state_15325;
(statearr_15339[(10)] = inst_15293__$1);

return statearr_15339;
})();
if(cljs.core.truth_(inst_15296)){
var statearr_15340_15366 = state_15325__$1;
(statearr_15340_15366[(1)] = (8));

} else {
var statearr_15341_15367 = state_15325__$1;
(statearr_15341_15367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (14))){
var inst_15318 = (state_15325[(2)]);
var inst_15319 = cljs.core.async.close_BANG_.call(null,out);
var state_15325__$1 = (function (){var statearr_15343 = state_15325;
(statearr_15343[(13)] = inst_15318);

return statearr_15343;
})();
var statearr_15344_15368 = state_15325__$1;
(statearr_15344_15368[(2)] = inst_15319);

(statearr_15344_15368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (10))){
var inst_15308 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15345_15369 = state_15325__$1;
(statearr_15345_15369[(2)] = inst_15308);

(statearr_15345_15369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (8))){
var inst_15289 = (state_15325[(9)]);
var inst_15285 = (state_15325[(8)]);
var inst_15293 = (state_15325[(10)]);
var inst_15298 = inst_15285.push(inst_15289);
var tmp15342 = inst_15285;
var inst_15285__$1 = tmp15342;
var inst_15286 = inst_15293;
var state_15325__$1 = (function (){var statearr_15346 = state_15325;
(statearr_15346[(14)] = inst_15298);

(statearr_15346[(7)] = inst_15286);

(statearr_15346[(8)] = inst_15285__$1);

return statearr_15346;
})();
var statearr_15347_15370 = state_15325__$1;
(statearr_15347_15370[(2)] = null);

(statearr_15347_15370[(1)] = (2));


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
});})(c__7699__auto___15356,out))
;
return ((function (switch__7637__auto__,c__7699__auto___15356,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_15351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15351[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_15351[(1)] = (1));

return statearr_15351;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_15325){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15352){if((e15352 instanceof Object)){
var ex__7641__auto__ = e15352;
var statearr_15353_15371 = state_15325;
(statearr_15353_15371[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15372 = state_15325;
state_15325 = G__15372;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_15325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_15325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___15356,out))
})();
var state__7701__auto__ = (function (){var statearr_15354 = f__7700__auto__.call(null);
(statearr_15354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___15356);

return statearr_15354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___15356,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440774548182