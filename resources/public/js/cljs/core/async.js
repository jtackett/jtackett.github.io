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
if(typeof cljs.core.async.t12886 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12886 = (function (f,fn_handler,meta12887){
this.f = f;
this.fn_handler = fn_handler;
this.meta12887 = meta12887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12886.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12888){
var self__ = this;
var _12888__$1 = this;
return self__.meta12887;
});

cljs.core.async.t12886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12888,meta12887__$1){
var self__ = this;
var _12888__$1 = this;
return (new cljs.core.async.t12886(self__.f,self__.fn_handler,meta12887__$1));
});

cljs.core.async.t12886.cljs$lang$type = true;

cljs.core.async.t12886.cljs$lang$ctorStr = "cljs.core.async/t12886";

cljs.core.async.t12886.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12886");
});

cljs.core.async.__GT_t12886 = (function cljs$core$async$fn_handler_$___GT_t12886(f__$1,fn_handler__$1,meta12887){
return (new cljs.core.async.t12886(f__$1,fn_handler__$1,meta12887));
});

}

return (new cljs.core.async.t12886(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12890 = buff;
if(G__12890){
var bit__5007__auto__ = null;
if(cljs.core.truth_((function (){var or__4333__auto__ = bit__5007__auto__;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return G__12890.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12890.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12890);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12890);
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
var G__12892 = arguments.length;
switch (G__12892) {
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
var G__12895 = arguments.length;
switch (G__12895) {
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
var val_12897 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12897);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12897,ret){
return (function (){
return fn1.call(null,val_12897);
});})(val_12897,ret))
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
var G__12899 = arguments.length;
switch (G__12899) {
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
var n__5218__auto___12901 = n;
var x_12902 = (0);
while(true){
if((x_12902 < n__5218__auto___12901)){
(a[x_12902] = (0));

var G__12903 = (x_12902 + (1));
x_12902 = G__12903;
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

var G__12904 = (i + (1));
i = G__12904;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12908 = (function (flag,alt_flag,meta12909){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12909 = meta12909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12908.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12910){
var self__ = this;
var _12910__$1 = this;
return self__.meta12909;
});})(flag))
;

cljs.core.async.t12908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12910,meta12909__$1){
var self__ = this;
var _12910__$1 = this;
return (new cljs.core.async.t12908(self__.flag,self__.alt_flag,meta12909__$1));
});})(flag))
;

cljs.core.async.t12908.cljs$lang$type = true;

cljs.core.async.t12908.cljs$lang$ctorStr = "cljs.core.async/t12908";

cljs.core.async.t12908.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12908");
});})(flag))
;

cljs.core.async.__GT_t12908 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12908(flag__$1,alt_flag__$1,meta12909){
return (new cljs.core.async.t12908(flag__$1,alt_flag__$1,meta12909));
});})(flag))
;

}

return (new cljs.core.async.t12908(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12914 = (function (cb,flag,alt_handler,meta12915){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12915 = meta12915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12916){
var self__ = this;
var _12916__$1 = this;
return self__.meta12915;
});

cljs.core.async.t12914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12916,meta12915__$1){
var self__ = this;
var _12916__$1 = this;
return (new cljs.core.async.t12914(self__.cb,self__.flag,self__.alt_handler,meta12915__$1));
});

cljs.core.async.t12914.cljs$lang$type = true;

cljs.core.async.t12914.cljs$lang$ctorStr = "cljs.core.async/t12914";

cljs.core.async.t12914.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t12914");
});

cljs.core.async.__GT_t12914 = (function cljs$core$async$alt_handler_$___GT_t12914(cb__$1,flag__$1,alt_handler__$1,meta12915){
return (new cljs.core.async.t12914(cb__$1,flag__$1,alt_handler__$1,meta12915));
});

}

return (new cljs.core.async.t12914(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12917_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12917_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12918_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12918_SHARP_,port], null));
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
var G__12919 = (i + (1));
i = G__12919;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12922){
var map__12923 = p__12922;
var map__12923__$1 = ((cljs.core.seq_QMARK_.call(null,map__12923))?cljs.core.apply.call(null,cljs.core.hash_map,map__12923):map__12923);
var opts = map__12923__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12920){
var G__12921 = cljs.core.first.call(null,seq12920);
var seq12920__$1 = cljs.core.next.call(null,seq12920);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12921,seq12920__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__12925 = arguments.length;
switch (G__12925) {
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
var c__7699__auto___12974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___12974){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___12974){
return (function (state_12949){
var state_val_12950 = (state_12949[(1)]);
if((state_val_12950 === (7))){
var inst_12945 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
var statearr_12951_12975 = state_12949__$1;
(statearr_12951_12975[(2)] = inst_12945);

(statearr_12951_12975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (1))){
var state_12949__$1 = state_12949;
var statearr_12952_12976 = state_12949__$1;
(statearr_12952_12976[(2)] = null);

(statearr_12952_12976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (4))){
var inst_12928 = (state_12949[(7)]);
var inst_12928__$1 = (state_12949[(2)]);
var inst_12929 = (inst_12928__$1 == null);
var state_12949__$1 = (function (){var statearr_12953 = state_12949;
(statearr_12953[(7)] = inst_12928__$1);

return statearr_12953;
})();
if(cljs.core.truth_(inst_12929)){
var statearr_12954_12977 = state_12949__$1;
(statearr_12954_12977[(1)] = (5));

} else {
var statearr_12955_12978 = state_12949__$1;
(statearr_12955_12978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (13))){
var state_12949__$1 = state_12949;
var statearr_12956_12979 = state_12949__$1;
(statearr_12956_12979[(2)] = null);

(statearr_12956_12979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (6))){
var inst_12928 = (state_12949[(7)]);
var state_12949__$1 = state_12949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12949__$1,(11),to,inst_12928);
} else {
if((state_val_12950 === (3))){
var inst_12947 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12949__$1,inst_12947);
} else {
if((state_val_12950 === (12))){
var state_12949__$1 = state_12949;
var statearr_12957_12980 = state_12949__$1;
(statearr_12957_12980[(2)] = null);

(statearr_12957_12980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (2))){
var state_12949__$1 = state_12949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12949__$1,(4),from);
} else {
if((state_val_12950 === (11))){
var inst_12938 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
if(cljs.core.truth_(inst_12938)){
var statearr_12958_12981 = state_12949__$1;
(statearr_12958_12981[(1)] = (12));

} else {
var statearr_12959_12982 = state_12949__$1;
(statearr_12959_12982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (9))){
var state_12949__$1 = state_12949;
var statearr_12960_12983 = state_12949__$1;
(statearr_12960_12983[(2)] = null);

(statearr_12960_12983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (5))){
var state_12949__$1 = state_12949;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12961_12984 = state_12949__$1;
(statearr_12961_12984[(1)] = (8));

} else {
var statearr_12962_12985 = state_12949__$1;
(statearr_12962_12985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (14))){
var inst_12943 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
var statearr_12963_12986 = state_12949__$1;
(statearr_12963_12986[(2)] = inst_12943);

(statearr_12963_12986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (10))){
var inst_12935 = (state_12949[(2)]);
var state_12949__$1 = state_12949;
var statearr_12964_12987 = state_12949__$1;
(statearr_12964_12987[(2)] = inst_12935);

(statearr_12964_12987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12950 === (8))){
var inst_12932 = cljs.core.async.close_BANG_.call(null,to);
var state_12949__$1 = state_12949;
var statearr_12965_12988 = state_12949__$1;
(statearr_12965_12988[(2)] = inst_12932);

(statearr_12965_12988[(1)] = (10));


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
});})(c__7699__auto___12974))
;
return ((function (switch__7637__auto__,c__7699__auto___12974){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_12969 = [null,null,null,null,null,null,null,null];
(statearr_12969[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_12969[(1)] = (1));

return statearr_12969;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_12949){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_12949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e12970){if((e12970 instanceof Object)){
var ex__7641__auto__ = e12970;
var statearr_12971_12989 = state_12949;
(statearr_12971_12989[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12990 = state_12949;
state_12949 = G__12990;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_12949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_12949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___12974))
})();
var state__7701__auto__ = (function (){var statearr_12972 = f__7700__auto__.call(null);
(statearr_12972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___12974);

return statearr_12972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___12974))
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
return (function (p__13174){
var vec__13175 = p__13174;
var v = cljs.core.nth.call(null,vec__13175,(0),null);
var p = cljs.core.nth.call(null,vec__13175,(1),null);
var job = vec__13175;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7699__auto___13357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___13357,res,vec__13175,v,p,job,jobs,results){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___13357,res,vec__13175,v,p,job,jobs,results){
return (function (state_13180){
var state_val_13181 = (state_13180[(1)]);
if((state_val_13181 === (2))){
var inst_13177 = (state_13180[(2)]);
var inst_13178 = cljs.core.async.close_BANG_.call(null,res);
var state_13180__$1 = (function (){var statearr_13182 = state_13180;
(statearr_13182[(7)] = inst_13177);

return statearr_13182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13180__$1,inst_13178);
} else {
if((state_val_13181 === (1))){
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13180__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7699__auto___13357,res,vec__13175,v,p,job,jobs,results))
;
return ((function (switch__7637__auto__,c__7699__auto___13357,res,vec__13175,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13186 = [null,null,null,null,null,null,null,null];
(statearr_13186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13186[(1)] = (1));

return statearr_13186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13180){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13187){if((e13187 instanceof Object)){
var ex__7641__auto__ = e13187;
var statearr_13188_13358 = state_13180;
(statearr_13188_13358[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13359 = state_13180;
state_13180 = G__13359;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___13357,res,vec__13175,v,p,job,jobs,results))
})();
var state__7701__auto__ = (function (){var statearr_13189 = f__7700__auto__.call(null);
(statearr_13189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13357);

return statearr_13189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___13357,res,vec__13175,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13190){
var vec__13191 = p__13190;
var v = cljs.core.nth.call(null,vec__13191,(0),null);
var p = cljs.core.nth.call(null,vec__13191,(1),null);
var job = vec__13191;
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
var n__5218__auto___13360 = n;
var __13361 = (0);
while(true){
if((__13361 < n__5218__auto___13360)){
var G__13192_13362 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13192_13362) {
case "async":
var c__7699__auto___13364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13361,c__7699__auto___13364,G__13192_13362,n__5218__auto___13360,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (__13361,c__7699__auto___13364,G__13192_13362,n__5218__auto___13360,jobs,results,process,async){
return (function (state_13205){
var state_val_13206 = (state_13205[(1)]);
if((state_val_13206 === (7))){
var inst_13201 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13207_13365 = state_13205__$1;
(statearr_13207_13365[(2)] = inst_13201);

(statearr_13207_13365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (6))){
var state_13205__$1 = state_13205;
var statearr_13208_13366 = state_13205__$1;
(statearr_13208_13366[(2)] = null);

(statearr_13208_13366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (5))){
var state_13205__$1 = state_13205;
var statearr_13209_13367 = state_13205__$1;
(statearr_13209_13367[(2)] = null);

(statearr_13209_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (4))){
var inst_13195 = (state_13205[(2)]);
var inst_13196 = async.call(null,inst_13195);
var state_13205__$1 = state_13205;
if(cljs.core.truth_(inst_13196)){
var statearr_13210_13368 = state_13205__$1;
(statearr_13210_13368[(1)] = (5));

} else {
var statearr_13211_13369 = state_13205__$1;
(statearr_13211_13369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (3))){
var inst_13203 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13205__$1,inst_13203);
} else {
if((state_val_13206 === (2))){
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13205__$1,(4),jobs);
} else {
if((state_val_13206 === (1))){
var state_13205__$1 = state_13205;
var statearr_13212_13370 = state_13205__$1;
(statearr_13212_13370[(2)] = null);

(statearr_13212_13370[(1)] = (2));


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
});})(__13361,c__7699__auto___13364,G__13192_13362,n__5218__auto___13360,jobs,results,process,async))
;
return ((function (__13361,switch__7637__auto__,c__7699__auto___13364,G__13192_13362,n__5218__auto___13360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13216 = [null,null,null,null,null,null,null];
(statearr_13216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13216[(1)] = (1));

return statearr_13216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13205){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13217){if((e13217 instanceof Object)){
var ex__7641__auto__ = e13217;
var statearr_13218_13371 = state_13205;
(statearr_13218_13371[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13372 = state_13205;
state_13205 = G__13372;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(__13361,switch__7637__auto__,c__7699__auto___13364,G__13192_13362,n__5218__auto___13360,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13219 = f__7700__auto__.call(null);
(statearr_13219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13364);

return statearr_13219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(__13361,c__7699__auto___13364,G__13192_13362,n__5218__auto___13360,jobs,results,process,async))
);


break;
case "compute":
var c__7699__auto___13373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13361,c__7699__auto___13373,G__13192_13362,n__5218__auto___13360,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (__13361,c__7699__auto___13373,G__13192_13362,n__5218__auto___13360,jobs,results,process,async){
return (function (state_13232){
var state_val_13233 = (state_13232[(1)]);
if((state_val_13233 === (7))){
var inst_13228 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
var statearr_13234_13374 = state_13232__$1;
(statearr_13234_13374[(2)] = inst_13228);

(statearr_13234_13374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (6))){
var state_13232__$1 = state_13232;
var statearr_13235_13375 = state_13232__$1;
(statearr_13235_13375[(2)] = null);

(statearr_13235_13375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (5))){
var state_13232__$1 = state_13232;
var statearr_13236_13376 = state_13232__$1;
(statearr_13236_13376[(2)] = null);

(statearr_13236_13376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (4))){
var inst_13222 = (state_13232[(2)]);
var inst_13223 = process.call(null,inst_13222);
var state_13232__$1 = state_13232;
if(cljs.core.truth_(inst_13223)){
var statearr_13237_13377 = state_13232__$1;
(statearr_13237_13377[(1)] = (5));

} else {
var statearr_13238_13378 = state_13232__$1;
(statearr_13238_13378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (3))){
var inst_13230 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13232__$1,inst_13230);
} else {
if((state_val_13233 === (2))){
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13232__$1,(4),jobs);
} else {
if((state_val_13233 === (1))){
var state_13232__$1 = state_13232;
var statearr_13239_13379 = state_13232__$1;
(statearr_13239_13379[(2)] = null);

(statearr_13239_13379[(1)] = (2));


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
});})(__13361,c__7699__auto___13373,G__13192_13362,n__5218__auto___13360,jobs,results,process,async))
;
return ((function (__13361,switch__7637__auto__,c__7699__auto___13373,G__13192_13362,n__5218__auto___13360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13243 = [null,null,null,null,null,null,null];
(statearr_13243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13243[(1)] = (1));

return statearr_13243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13232){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13244){if((e13244 instanceof Object)){
var ex__7641__auto__ = e13244;
var statearr_13245_13380 = state_13232;
(statearr_13245_13380[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13381 = state_13232;
state_13232 = G__13381;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(__13361,switch__7637__auto__,c__7699__auto___13373,G__13192_13362,n__5218__auto___13360,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13246 = f__7700__auto__.call(null);
(statearr_13246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13373);

return statearr_13246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(__13361,c__7699__auto___13373,G__13192_13362,n__5218__auto___13360,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13382 = (__13361 + (1));
__13361 = G__13382;
continue;
} else {
}
break;
}

var c__7699__auto___13383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___13383,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___13383,jobs,results,process,async){
return (function (state_13268){
var state_val_13269 = (state_13268[(1)]);
if((state_val_13269 === (9))){
var inst_13261 = (state_13268[(2)]);
var state_13268__$1 = (function (){var statearr_13270 = state_13268;
(statearr_13270[(7)] = inst_13261);

return statearr_13270;
})();
var statearr_13271_13384 = state_13268__$1;
(statearr_13271_13384[(2)] = null);

(statearr_13271_13384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (8))){
var inst_13254 = (state_13268[(8)]);
var inst_13259 = (state_13268[(2)]);
var state_13268__$1 = (function (){var statearr_13272 = state_13268;
(statearr_13272[(9)] = inst_13259);

return statearr_13272;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13268__$1,(9),results,inst_13254);
} else {
if((state_val_13269 === (7))){
var inst_13264 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
var statearr_13273_13385 = state_13268__$1;
(statearr_13273_13385[(2)] = inst_13264);

(statearr_13273_13385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (6))){
var inst_13249 = (state_13268[(10)]);
var inst_13254 = (state_13268[(8)]);
var inst_13254__$1 = cljs.core.async.chan.call(null,(1));
var inst_13255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13256 = [inst_13249,inst_13254__$1];
var inst_13257 = (new cljs.core.PersistentVector(null,2,(5),inst_13255,inst_13256,null));
var state_13268__$1 = (function (){var statearr_13274 = state_13268;
(statearr_13274[(8)] = inst_13254__$1);

return statearr_13274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13268__$1,(8),jobs,inst_13257);
} else {
if((state_val_13269 === (5))){
var inst_13252 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13268__$1 = state_13268;
var statearr_13275_13386 = state_13268__$1;
(statearr_13275_13386[(2)] = inst_13252);

(statearr_13275_13386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (4))){
var inst_13249 = (state_13268[(10)]);
var inst_13249__$1 = (state_13268[(2)]);
var inst_13250 = (inst_13249__$1 == null);
var state_13268__$1 = (function (){var statearr_13276 = state_13268;
(statearr_13276[(10)] = inst_13249__$1);

return statearr_13276;
})();
if(cljs.core.truth_(inst_13250)){
var statearr_13277_13387 = state_13268__$1;
(statearr_13277_13387[(1)] = (5));

} else {
var statearr_13278_13388 = state_13268__$1;
(statearr_13278_13388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13269 === (3))){
var inst_13266 = (state_13268[(2)]);
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13268__$1,inst_13266);
} else {
if((state_val_13269 === (2))){
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13268__$1,(4),from);
} else {
if((state_val_13269 === (1))){
var state_13268__$1 = state_13268;
var statearr_13279_13389 = state_13268__$1;
(statearr_13279_13389[(2)] = null);

(statearr_13279_13389[(1)] = (2));


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
});})(c__7699__auto___13383,jobs,results,process,async))
;
return ((function (switch__7637__auto__,c__7699__auto___13383,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0 = (function (){
var statearr_13283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13283[(1)] = (1));

return statearr_13283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13268){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13284){if((e13284 instanceof Object)){
var ex__7641__auto__ = e13284;
var statearr_13285_13390 = state_13268;
(statearr_13285_13390[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13391 = state_13268;
state_13268 = G__13391;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___13383,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13286 = f__7700__auto__.call(null);
(statearr_13286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13383);

return statearr_13286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___13383,jobs,results,process,async))
);


var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,jobs,results,process,async){
return (function (state_13324){
var state_val_13325 = (state_13324[(1)]);
if((state_val_13325 === (7))){
var inst_13320 = (state_13324[(2)]);
var state_13324__$1 = state_13324;
var statearr_13326_13392 = state_13324__$1;
(statearr_13326_13392[(2)] = inst_13320);

(statearr_13326_13392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (20))){
var state_13324__$1 = state_13324;
var statearr_13327_13393 = state_13324__$1;
(statearr_13327_13393[(2)] = null);

(statearr_13327_13393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (1))){
var state_13324__$1 = state_13324;
var statearr_13328_13394 = state_13324__$1;
(statearr_13328_13394[(2)] = null);

(statearr_13328_13394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (4))){
var inst_13289 = (state_13324[(7)]);
var inst_13289__$1 = (state_13324[(2)]);
var inst_13290 = (inst_13289__$1 == null);
var state_13324__$1 = (function (){var statearr_13329 = state_13324;
(statearr_13329[(7)] = inst_13289__$1);

return statearr_13329;
})();
if(cljs.core.truth_(inst_13290)){
var statearr_13330_13395 = state_13324__$1;
(statearr_13330_13395[(1)] = (5));

} else {
var statearr_13331_13396 = state_13324__$1;
(statearr_13331_13396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (15))){
var inst_13302 = (state_13324[(8)]);
var state_13324__$1 = state_13324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13324__$1,(18),to,inst_13302);
} else {
if((state_val_13325 === (21))){
var inst_13315 = (state_13324[(2)]);
var state_13324__$1 = state_13324;
var statearr_13332_13397 = state_13324__$1;
(statearr_13332_13397[(2)] = inst_13315);

(statearr_13332_13397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (13))){
var inst_13317 = (state_13324[(2)]);
var state_13324__$1 = (function (){var statearr_13333 = state_13324;
(statearr_13333[(9)] = inst_13317);

return statearr_13333;
})();
var statearr_13334_13398 = state_13324__$1;
(statearr_13334_13398[(2)] = null);

(statearr_13334_13398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (6))){
var inst_13289 = (state_13324[(7)]);
var state_13324__$1 = state_13324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13324__$1,(11),inst_13289);
} else {
if((state_val_13325 === (17))){
var inst_13310 = (state_13324[(2)]);
var state_13324__$1 = state_13324;
if(cljs.core.truth_(inst_13310)){
var statearr_13335_13399 = state_13324__$1;
(statearr_13335_13399[(1)] = (19));

} else {
var statearr_13336_13400 = state_13324__$1;
(statearr_13336_13400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (3))){
var inst_13322 = (state_13324[(2)]);
var state_13324__$1 = state_13324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13324__$1,inst_13322);
} else {
if((state_val_13325 === (12))){
var inst_13299 = (state_13324[(10)]);
var state_13324__$1 = state_13324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13324__$1,(14),inst_13299);
} else {
if((state_val_13325 === (2))){
var state_13324__$1 = state_13324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13324__$1,(4),results);
} else {
if((state_val_13325 === (19))){
var state_13324__$1 = state_13324;
var statearr_13337_13401 = state_13324__$1;
(statearr_13337_13401[(2)] = null);

(statearr_13337_13401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (11))){
var inst_13299 = (state_13324[(2)]);
var state_13324__$1 = (function (){var statearr_13338 = state_13324;
(statearr_13338[(10)] = inst_13299);

return statearr_13338;
})();
var statearr_13339_13402 = state_13324__$1;
(statearr_13339_13402[(2)] = null);

(statearr_13339_13402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (9))){
var state_13324__$1 = state_13324;
var statearr_13340_13403 = state_13324__$1;
(statearr_13340_13403[(2)] = null);

(statearr_13340_13403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (5))){
var state_13324__$1 = state_13324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13341_13404 = state_13324__$1;
(statearr_13341_13404[(1)] = (8));

} else {
var statearr_13342_13405 = state_13324__$1;
(statearr_13342_13405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (14))){
var inst_13302 = (state_13324[(8)]);
var inst_13304 = (state_13324[(11)]);
var inst_13302__$1 = (state_13324[(2)]);
var inst_13303 = (inst_13302__$1 == null);
var inst_13304__$1 = cljs.core.not.call(null,inst_13303);
var state_13324__$1 = (function (){var statearr_13343 = state_13324;
(statearr_13343[(8)] = inst_13302__$1);

(statearr_13343[(11)] = inst_13304__$1);

return statearr_13343;
})();
if(inst_13304__$1){
var statearr_13344_13406 = state_13324__$1;
(statearr_13344_13406[(1)] = (15));

} else {
var statearr_13345_13407 = state_13324__$1;
(statearr_13345_13407[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (16))){
var inst_13304 = (state_13324[(11)]);
var state_13324__$1 = state_13324;
var statearr_13346_13408 = state_13324__$1;
(statearr_13346_13408[(2)] = inst_13304);

(statearr_13346_13408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (10))){
var inst_13296 = (state_13324[(2)]);
var state_13324__$1 = state_13324;
var statearr_13347_13409 = state_13324__$1;
(statearr_13347_13409[(2)] = inst_13296);

(statearr_13347_13409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (18))){
var inst_13307 = (state_13324[(2)]);
var state_13324__$1 = state_13324;
var statearr_13348_13410 = state_13324__$1;
(statearr_13348_13410[(2)] = inst_13307);

(statearr_13348_13410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13325 === (8))){
var inst_13293 = cljs.core.async.close_BANG_.call(null,to);
var state_13324__$1 = state_13324;
var statearr_13349_13411 = state_13324__$1;
(statearr_13349_13411[(2)] = inst_13293);

(statearr_13349_13411[(1)] = (10));


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
var statearr_13353 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__);

(statearr_13353[(1)] = (1));

return statearr_13353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1 = (function (state_13324){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13354){if((e13354 instanceof Object)){
var ex__7641__auto__ = e13354;
var statearr_13355_13412 = state_13324;
(statearr_13355_13412[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13413 = state_13324;
state_13324 = G__13413;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__ = function(state_13324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1.call(this,state_13324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_13356 = f__7700__auto__.call(null);
(statearr_13356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_13356;
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
var G__13415 = arguments.length;
switch (G__13415) {
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
var G__13418 = arguments.length;
switch (G__13418) {
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
var G__13421 = arguments.length;
switch (G__13421) {
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
var c__7699__auto___13473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___13473,tc,fc){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___13473,tc,fc){
return (function (state_13447){
var state_val_13448 = (state_13447[(1)]);
if((state_val_13448 === (7))){
var inst_13443 = (state_13447[(2)]);
var state_13447__$1 = state_13447;
var statearr_13449_13474 = state_13447__$1;
(statearr_13449_13474[(2)] = inst_13443);

(statearr_13449_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (1))){
var state_13447__$1 = state_13447;
var statearr_13450_13475 = state_13447__$1;
(statearr_13450_13475[(2)] = null);

(statearr_13450_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (4))){
var inst_13424 = (state_13447[(7)]);
var inst_13424__$1 = (state_13447[(2)]);
var inst_13425 = (inst_13424__$1 == null);
var state_13447__$1 = (function (){var statearr_13451 = state_13447;
(statearr_13451[(7)] = inst_13424__$1);

return statearr_13451;
})();
if(cljs.core.truth_(inst_13425)){
var statearr_13452_13476 = state_13447__$1;
(statearr_13452_13476[(1)] = (5));

} else {
var statearr_13453_13477 = state_13447__$1;
(statearr_13453_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (13))){
var state_13447__$1 = state_13447;
var statearr_13454_13478 = state_13447__$1;
(statearr_13454_13478[(2)] = null);

(statearr_13454_13478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (6))){
var inst_13424 = (state_13447[(7)]);
var inst_13430 = p.call(null,inst_13424);
var state_13447__$1 = state_13447;
if(cljs.core.truth_(inst_13430)){
var statearr_13455_13479 = state_13447__$1;
(statearr_13455_13479[(1)] = (9));

} else {
var statearr_13456_13480 = state_13447__$1;
(statearr_13456_13480[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (3))){
var inst_13445 = (state_13447[(2)]);
var state_13447__$1 = state_13447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13447__$1,inst_13445);
} else {
if((state_val_13448 === (12))){
var state_13447__$1 = state_13447;
var statearr_13457_13481 = state_13447__$1;
(statearr_13457_13481[(2)] = null);

(statearr_13457_13481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (2))){
var state_13447__$1 = state_13447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13447__$1,(4),ch);
} else {
if((state_val_13448 === (11))){
var inst_13424 = (state_13447[(7)]);
var inst_13434 = (state_13447[(2)]);
var state_13447__$1 = state_13447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13447__$1,(8),inst_13434,inst_13424);
} else {
if((state_val_13448 === (9))){
var state_13447__$1 = state_13447;
var statearr_13458_13482 = state_13447__$1;
(statearr_13458_13482[(2)] = tc);

(statearr_13458_13482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (5))){
var inst_13427 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13428 = cljs.core.async.close_BANG_.call(null,fc);
var state_13447__$1 = (function (){var statearr_13459 = state_13447;
(statearr_13459[(8)] = inst_13427);

return statearr_13459;
})();
var statearr_13460_13483 = state_13447__$1;
(statearr_13460_13483[(2)] = inst_13428);

(statearr_13460_13483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (14))){
var inst_13441 = (state_13447[(2)]);
var state_13447__$1 = state_13447;
var statearr_13461_13484 = state_13447__$1;
(statearr_13461_13484[(2)] = inst_13441);

(statearr_13461_13484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (10))){
var state_13447__$1 = state_13447;
var statearr_13462_13485 = state_13447__$1;
(statearr_13462_13485[(2)] = fc);

(statearr_13462_13485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13448 === (8))){
var inst_13436 = (state_13447[(2)]);
var state_13447__$1 = state_13447;
if(cljs.core.truth_(inst_13436)){
var statearr_13463_13486 = state_13447__$1;
(statearr_13463_13486[(1)] = (12));

} else {
var statearr_13464_13487 = state_13447__$1;
(statearr_13464_13487[(1)] = (13));

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
});})(c__7699__auto___13473,tc,fc))
;
return ((function (switch__7637__auto__,c__7699__auto___13473,tc,fc){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_13468 = [null,null,null,null,null,null,null,null,null];
(statearr_13468[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_13468[(1)] = (1));

return statearr_13468;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_13447){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13469){if((e13469 instanceof Object)){
var ex__7641__auto__ = e13469;
var statearr_13470_13488 = state_13447;
(statearr_13470_13488[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13489 = state_13447;
state_13447 = G__13489;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_13447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_13447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___13473,tc,fc))
})();
var state__7701__auto__ = (function (){var statearr_13471 = f__7700__auto__.call(null);
(statearr_13471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___13473);

return statearr_13471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___13473,tc,fc))
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
return (function (state_13536){
var state_val_13537 = (state_13536[(1)]);
if((state_val_13537 === (7))){
var inst_13532 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13538_13554 = state_13536__$1;
(statearr_13538_13554[(2)] = inst_13532);

(statearr_13538_13554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (6))){
var inst_13522 = (state_13536[(7)]);
var inst_13525 = (state_13536[(8)]);
var inst_13529 = f.call(null,inst_13522,inst_13525);
var inst_13522__$1 = inst_13529;
var state_13536__$1 = (function (){var statearr_13539 = state_13536;
(statearr_13539[(7)] = inst_13522__$1);

return statearr_13539;
})();
var statearr_13540_13555 = state_13536__$1;
(statearr_13540_13555[(2)] = null);

(statearr_13540_13555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (5))){
var inst_13522 = (state_13536[(7)]);
var state_13536__$1 = state_13536;
var statearr_13541_13556 = state_13536__$1;
(statearr_13541_13556[(2)] = inst_13522);

(statearr_13541_13556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (4))){
var inst_13525 = (state_13536[(8)]);
var inst_13525__$1 = (state_13536[(2)]);
var inst_13526 = (inst_13525__$1 == null);
var state_13536__$1 = (function (){var statearr_13542 = state_13536;
(statearr_13542[(8)] = inst_13525__$1);

return statearr_13542;
})();
if(cljs.core.truth_(inst_13526)){
var statearr_13543_13557 = state_13536__$1;
(statearr_13543_13557[(1)] = (5));

} else {
var statearr_13544_13558 = state_13536__$1;
(statearr_13544_13558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (3))){
var inst_13534 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13536__$1,inst_13534);
} else {
if((state_val_13537 === (2))){
var state_13536__$1 = state_13536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13536__$1,(4),ch);
} else {
if((state_val_13537 === (1))){
var inst_13522 = init;
var state_13536__$1 = (function (){var statearr_13545 = state_13536;
(statearr_13545[(7)] = inst_13522);

return statearr_13545;
})();
var statearr_13546_13559 = state_13536__$1;
(statearr_13546_13559[(2)] = null);

(statearr_13546_13559[(1)] = (2));


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
var statearr_13550 = [null,null,null,null,null,null,null,null,null];
(statearr_13550[(0)] = cljs$core$async$reduce_$_state_machine__7638__auto__);

(statearr_13550[(1)] = (1));

return statearr_13550;
});
var cljs$core$async$reduce_$_state_machine__7638__auto____1 = (function (state_13536){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13551){if((e13551 instanceof Object)){
var ex__7641__auto__ = e13551;
var statearr_13552_13560 = state_13536;
(statearr_13552_13560[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13561 = state_13536;
state_13536 = G__13561;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7638__auto__ = function(state_13536){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7638__auto____1.call(this,state_13536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7638__auto____0;
cljs$core$async$reduce_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7638__auto____1;
return cljs$core$async$reduce_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_13553 = f__7700__auto__.call(null);
(statearr_13553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_13553;
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
var G__13563 = arguments.length;
switch (G__13563) {
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
return (function (state_13588){
var state_val_13589 = (state_13588[(1)]);
if((state_val_13589 === (7))){
var inst_13570 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
var statearr_13590_13614 = state_13588__$1;
(statearr_13590_13614[(2)] = inst_13570);

(statearr_13590_13614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (1))){
var inst_13564 = cljs.core.seq.call(null,coll);
var inst_13565 = inst_13564;
var state_13588__$1 = (function (){var statearr_13591 = state_13588;
(statearr_13591[(7)] = inst_13565);

return statearr_13591;
})();
var statearr_13592_13615 = state_13588__$1;
(statearr_13592_13615[(2)] = null);

(statearr_13592_13615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (4))){
var inst_13565 = (state_13588[(7)]);
var inst_13568 = cljs.core.first.call(null,inst_13565);
var state_13588__$1 = state_13588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13588__$1,(7),ch,inst_13568);
} else {
if((state_val_13589 === (13))){
var inst_13582 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
var statearr_13593_13616 = state_13588__$1;
(statearr_13593_13616[(2)] = inst_13582);

(statearr_13593_13616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (6))){
var inst_13573 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
if(cljs.core.truth_(inst_13573)){
var statearr_13594_13617 = state_13588__$1;
(statearr_13594_13617[(1)] = (8));

} else {
var statearr_13595_13618 = state_13588__$1;
(statearr_13595_13618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (3))){
var inst_13586 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13588__$1,inst_13586);
} else {
if((state_val_13589 === (12))){
var state_13588__$1 = state_13588;
var statearr_13596_13619 = state_13588__$1;
(statearr_13596_13619[(2)] = null);

(statearr_13596_13619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (2))){
var inst_13565 = (state_13588[(7)]);
var state_13588__$1 = state_13588;
if(cljs.core.truth_(inst_13565)){
var statearr_13597_13620 = state_13588__$1;
(statearr_13597_13620[(1)] = (4));

} else {
var statearr_13598_13621 = state_13588__$1;
(statearr_13598_13621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (11))){
var inst_13579 = cljs.core.async.close_BANG_.call(null,ch);
var state_13588__$1 = state_13588;
var statearr_13599_13622 = state_13588__$1;
(statearr_13599_13622[(2)] = inst_13579);

(statearr_13599_13622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (9))){
var state_13588__$1 = state_13588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13600_13623 = state_13588__$1;
(statearr_13600_13623[(1)] = (11));

} else {
var statearr_13601_13624 = state_13588__$1;
(statearr_13601_13624[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (5))){
var inst_13565 = (state_13588[(7)]);
var state_13588__$1 = state_13588;
var statearr_13602_13625 = state_13588__$1;
(statearr_13602_13625[(2)] = inst_13565);

(statearr_13602_13625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (10))){
var inst_13584 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
var statearr_13603_13626 = state_13588__$1;
(statearr_13603_13626[(2)] = inst_13584);

(statearr_13603_13626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (8))){
var inst_13565 = (state_13588[(7)]);
var inst_13575 = cljs.core.next.call(null,inst_13565);
var inst_13565__$1 = inst_13575;
var state_13588__$1 = (function (){var statearr_13604 = state_13588;
(statearr_13604[(7)] = inst_13565__$1);

return statearr_13604;
})();
var statearr_13605_13627 = state_13588__$1;
(statearr_13605_13627[(2)] = null);

(statearr_13605_13627[(1)] = (2));


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
var statearr_13609 = [null,null,null,null,null,null,null,null];
(statearr_13609[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_13609[(1)] = (1));

return statearr_13609;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_13588){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e13610){if((e13610 instanceof Object)){
var ex__7641__auto__ = e13610;
var statearr_13611_13628 = state_13588;
(statearr_13611_13628[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13629 = state_13588;
state_13588 = G__13629;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_13588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_13588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_13612 = f__7700__auto__.call(null);
(statearr_13612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_13612;
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

cljs.core.async.Mux = (function (){var obj13631 = {};
return obj13631;
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


cljs.core.async.Mult = (function (){var obj13633 = {};
return obj13633;
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
if(typeof cljs.core.async.t13855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13855 = (function (cs,ch,mult,meta13856){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13856 = meta13856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13855.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13855.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13855.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13855.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13855.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13857){
var self__ = this;
var _13857__$1 = this;
return self__.meta13856;
});})(cs))
;

cljs.core.async.t13855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13857,meta13856__$1){
var self__ = this;
var _13857__$1 = this;
return (new cljs.core.async.t13855(self__.cs,self__.ch,self__.mult,meta13856__$1));
});})(cs))
;

cljs.core.async.t13855.cljs$lang$type = true;

cljs.core.async.t13855.cljs$lang$ctorStr = "cljs.core.async/t13855";

cljs.core.async.t13855.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t13855");
});})(cs))
;

cljs.core.async.__GT_t13855 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13855(cs__$1,ch__$1,mult__$1,meta13856){
return (new cljs.core.async.t13855(cs__$1,ch__$1,mult__$1,meta13856));
});})(cs))
;

}

return (new cljs.core.async.t13855(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7699__auto___14076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14076,cs,m,dchan,dctr,done){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14076,cs,m,dchan,dctr,done){
return (function (state_13988){
var state_val_13989 = (state_13988[(1)]);
if((state_val_13989 === (7))){
var inst_13984 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_13990_14077 = state_13988__$1;
(statearr_13990_14077[(2)] = inst_13984);

(statearr_13990_14077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (20))){
var inst_13889 = (state_13988[(7)]);
var inst_13899 = cljs.core.first.call(null,inst_13889);
var inst_13900 = cljs.core.nth.call(null,inst_13899,(0),null);
var inst_13901 = cljs.core.nth.call(null,inst_13899,(1),null);
var state_13988__$1 = (function (){var statearr_13991 = state_13988;
(statearr_13991[(8)] = inst_13900);

return statearr_13991;
})();
if(cljs.core.truth_(inst_13901)){
var statearr_13992_14078 = state_13988__$1;
(statearr_13992_14078[(1)] = (22));

} else {
var statearr_13993_14079 = state_13988__$1;
(statearr_13993_14079[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (27))){
var inst_13936 = (state_13988[(9)]);
var inst_13931 = (state_13988[(10)]);
var inst_13860 = (state_13988[(11)]);
var inst_13929 = (state_13988[(12)]);
var inst_13936__$1 = cljs.core._nth.call(null,inst_13929,inst_13931);
var inst_13937 = cljs.core.async.put_BANG_.call(null,inst_13936__$1,inst_13860,done);
var state_13988__$1 = (function (){var statearr_13994 = state_13988;
(statearr_13994[(9)] = inst_13936__$1);

return statearr_13994;
})();
if(cljs.core.truth_(inst_13937)){
var statearr_13995_14080 = state_13988__$1;
(statearr_13995_14080[(1)] = (30));

} else {
var statearr_13996_14081 = state_13988__$1;
(statearr_13996_14081[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (1))){
var state_13988__$1 = state_13988;
var statearr_13997_14082 = state_13988__$1;
(statearr_13997_14082[(2)] = null);

(statearr_13997_14082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (24))){
var inst_13889 = (state_13988[(7)]);
var inst_13906 = (state_13988[(2)]);
var inst_13907 = cljs.core.next.call(null,inst_13889);
var inst_13869 = inst_13907;
var inst_13870 = null;
var inst_13871 = (0);
var inst_13872 = (0);
var state_13988__$1 = (function (){var statearr_13998 = state_13988;
(statearr_13998[(13)] = inst_13906);

(statearr_13998[(14)] = inst_13872);

(statearr_13998[(15)] = inst_13869);

(statearr_13998[(16)] = inst_13870);

(statearr_13998[(17)] = inst_13871);

return statearr_13998;
})();
var statearr_13999_14083 = state_13988__$1;
(statearr_13999_14083[(2)] = null);

(statearr_13999_14083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (39))){
var state_13988__$1 = state_13988;
var statearr_14003_14084 = state_13988__$1;
(statearr_14003_14084[(2)] = null);

(statearr_14003_14084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (4))){
var inst_13860 = (state_13988[(11)]);
var inst_13860__$1 = (state_13988[(2)]);
var inst_13861 = (inst_13860__$1 == null);
var state_13988__$1 = (function (){var statearr_14004 = state_13988;
(statearr_14004[(11)] = inst_13860__$1);

return statearr_14004;
})();
if(cljs.core.truth_(inst_13861)){
var statearr_14005_14085 = state_13988__$1;
(statearr_14005_14085[(1)] = (5));

} else {
var statearr_14006_14086 = state_13988__$1;
(statearr_14006_14086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (15))){
var inst_13872 = (state_13988[(14)]);
var inst_13869 = (state_13988[(15)]);
var inst_13870 = (state_13988[(16)]);
var inst_13871 = (state_13988[(17)]);
var inst_13885 = (state_13988[(2)]);
var inst_13886 = (inst_13872 + (1));
var tmp14000 = inst_13869;
var tmp14001 = inst_13870;
var tmp14002 = inst_13871;
var inst_13869__$1 = tmp14000;
var inst_13870__$1 = tmp14001;
var inst_13871__$1 = tmp14002;
var inst_13872__$1 = inst_13886;
var state_13988__$1 = (function (){var statearr_14007 = state_13988;
(statearr_14007[(18)] = inst_13885);

(statearr_14007[(14)] = inst_13872__$1);

(statearr_14007[(15)] = inst_13869__$1);

(statearr_14007[(16)] = inst_13870__$1);

(statearr_14007[(17)] = inst_13871__$1);

return statearr_14007;
})();
var statearr_14008_14087 = state_13988__$1;
(statearr_14008_14087[(2)] = null);

(statearr_14008_14087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (21))){
var inst_13910 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14012_14088 = state_13988__$1;
(statearr_14012_14088[(2)] = inst_13910);

(statearr_14012_14088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (31))){
var inst_13936 = (state_13988[(9)]);
var inst_13940 = done.call(null,null);
var inst_13941 = cljs.core.async.untap_STAR_.call(null,m,inst_13936);
var state_13988__$1 = (function (){var statearr_14013 = state_13988;
(statearr_14013[(19)] = inst_13940);

return statearr_14013;
})();
var statearr_14014_14089 = state_13988__$1;
(statearr_14014_14089[(2)] = inst_13941);

(statearr_14014_14089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (32))){
var inst_13931 = (state_13988[(10)]);
var inst_13930 = (state_13988[(20)]);
var inst_13929 = (state_13988[(12)]);
var inst_13928 = (state_13988[(21)]);
var inst_13943 = (state_13988[(2)]);
var inst_13944 = (inst_13931 + (1));
var tmp14009 = inst_13930;
var tmp14010 = inst_13929;
var tmp14011 = inst_13928;
var inst_13928__$1 = tmp14011;
var inst_13929__$1 = tmp14010;
var inst_13930__$1 = tmp14009;
var inst_13931__$1 = inst_13944;
var state_13988__$1 = (function (){var statearr_14015 = state_13988;
(statearr_14015[(10)] = inst_13931__$1);

(statearr_14015[(20)] = inst_13930__$1);

(statearr_14015[(12)] = inst_13929__$1);

(statearr_14015[(21)] = inst_13928__$1);

(statearr_14015[(22)] = inst_13943);

return statearr_14015;
})();
var statearr_14016_14090 = state_13988__$1;
(statearr_14016_14090[(2)] = null);

(statearr_14016_14090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (40))){
var inst_13956 = (state_13988[(23)]);
var inst_13960 = done.call(null,null);
var inst_13961 = cljs.core.async.untap_STAR_.call(null,m,inst_13956);
var state_13988__$1 = (function (){var statearr_14017 = state_13988;
(statearr_14017[(24)] = inst_13960);

return statearr_14017;
})();
var statearr_14018_14091 = state_13988__$1;
(statearr_14018_14091[(2)] = inst_13961);

(statearr_14018_14091[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (33))){
var inst_13947 = (state_13988[(25)]);
var inst_13949 = cljs.core.chunked_seq_QMARK_.call(null,inst_13947);
var state_13988__$1 = state_13988;
if(inst_13949){
var statearr_14019_14092 = state_13988__$1;
(statearr_14019_14092[(1)] = (36));

} else {
var statearr_14020_14093 = state_13988__$1;
(statearr_14020_14093[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (13))){
var inst_13879 = (state_13988[(26)]);
var inst_13882 = cljs.core.async.close_BANG_.call(null,inst_13879);
var state_13988__$1 = state_13988;
var statearr_14021_14094 = state_13988__$1;
(statearr_14021_14094[(2)] = inst_13882);

(statearr_14021_14094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (22))){
var inst_13900 = (state_13988[(8)]);
var inst_13903 = cljs.core.async.close_BANG_.call(null,inst_13900);
var state_13988__$1 = state_13988;
var statearr_14022_14095 = state_13988__$1;
(statearr_14022_14095[(2)] = inst_13903);

(statearr_14022_14095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (36))){
var inst_13947 = (state_13988[(25)]);
var inst_13951 = cljs.core.chunk_first.call(null,inst_13947);
var inst_13952 = cljs.core.chunk_rest.call(null,inst_13947);
var inst_13953 = cljs.core.count.call(null,inst_13951);
var inst_13928 = inst_13952;
var inst_13929 = inst_13951;
var inst_13930 = inst_13953;
var inst_13931 = (0);
var state_13988__$1 = (function (){var statearr_14023 = state_13988;
(statearr_14023[(10)] = inst_13931);

(statearr_14023[(20)] = inst_13930);

(statearr_14023[(12)] = inst_13929);

(statearr_14023[(21)] = inst_13928);

return statearr_14023;
})();
var statearr_14024_14096 = state_13988__$1;
(statearr_14024_14096[(2)] = null);

(statearr_14024_14096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (41))){
var inst_13947 = (state_13988[(25)]);
var inst_13963 = (state_13988[(2)]);
var inst_13964 = cljs.core.next.call(null,inst_13947);
var inst_13928 = inst_13964;
var inst_13929 = null;
var inst_13930 = (0);
var inst_13931 = (0);
var state_13988__$1 = (function (){var statearr_14025 = state_13988;
(statearr_14025[(10)] = inst_13931);

(statearr_14025[(20)] = inst_13930);

(statearr_14025[(27)] = inst_13963);

(statearr_14025[(12)] = inst_13929);

(statearr_14025[(21)] = inst_13928);

return statearr_14025;
})();
var statearr_14026_14097 = state_13988__$1;
(statearr_14026_14097[(2)] = null);

(statearr_14026_14097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (43))){
var state_13988__$1 = state_13988;
var statearr_14027_14098 = state_13988__$1;
(statearr_14027_14098[(2)] = null);

(statearr_14027_14098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (29))){
var inst_13972 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14028_14099 = state_13988__$1;
(statearr_14028_14099[(2)] = inst_13972);

(statearr_14028_14099[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (44))){
var inst_13981 = (state_13988[(2)]);
var state_13988__$1 = (function (){var statearr_14029 = state_13988;
(statearr_14029[(28)] = inst_13981);

return statearr_14029;
})();
var statearr_14030_14100 = state_13988__$1;
(statearr_14030_14100[(2)] = null);

(statearr_14030_14100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (6))){
var inst_13920 = (state_13988[(29)]);
var inst_13919 = cljs.core.deref.call(null,cs);
var inst_13920__$1 = cljs.core.keys.call(null,inst_13919);
var inst_13921 = cljs.core.count.call(null,inst_13920__$1);
var inst_13922 = cljs.core.reset_BANG_.call(null,dctr,inst_13921);
var inst_13927 = cljs.core.seq.call(null,inst_13920__$1);
var inst_13928 = inst_13927;
var inst_13929 = null;
var inst_13930 = (0);
var inst_13931 = (0);
var state_13988__$1 = (function (){var statearr_14031 = state_13988;
(statearr_14031[(10)] = inst_13931);

(statearr_14031[(30)] = inst_13922);

(statearr_14031[(20)] = inst_13930);

(statearr_14031[(12)] = inst_13929);

(statearr_14031[(21)] = inst_13928);

(statearr_14031[(29)] = inst_13920__$1);

return statearr_14031;
})();
var statearr_14032_14101 = state_13988__$1;
(statearr_14032_14101[(2)] = null);

(statearr_14032_14101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (28))){
var inst_13947 = (state_13988[(25)]);
var inst_13928 = (state_13988[(21)]);
var inst_13947__$1 = cljs.core.seq.call(null,inst_13928);
var state_13988__$1 = (function (){var statearr_14033 = state_13988;
(statearr_14033[(25)] = inst_13947__$1);

return statearr_14033;
})();
if(inst_13947__$1){
var statearr_14034_14102 = state_13988__$1;
(statearr_14034_14102[(1)] = (33));

} else {
var statearr_14035_14103 = state_13988__$1;
(statearr_14035_14103[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (25))){
var inst_13931 = (state_13988[(10)]);
var inst_13930 = (state_13988[(20)]);
var inst_13933 = (inst_13931 < inst_13930);
var inst_13934 = inst_13933;
var state_13988__$1 = state_13988;
if(cljs.core.truth_(inst_13934)){
var statearr_14036_14104 = state_13988__$1;
(statearr_14036_14104[(1)] = (27));

} else {
var statearr_14037_14105 = state_13988__$1;
(statearr_14037_14105[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (34))){
var state_13988__$1 = state_13988;
var statearr_14038_14106 = state_13988__$1;
(statearr_14038_14106[(2)] = null);

(statearr_14038_14106[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (17))){
var state_13988__$1 = state_13988;
var statearr_14039_14107 = state_13988__$1;
(statearr_14039_14107[(2)] = null);

(statearr_14039_14107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (3))){
var inst_13986 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13988__$1,inst_13986);
} else {
if((state_val_13989 === (12))){
var inst_13915 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14040_14108 = state_13988__$1;
(statearr_14040_14108[(2)] = inst_13915);

(statearr_14040_14108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (2))){
var state_13988__$1 = state_13988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13988__$1,(4),ch);
} else {
if((state_val_13989 === (23))){
var state_13988__$1 = state_13988;
var statearr_14041_14109 = state_13988__$1;
(statearr_14041_14109[(2)] = null);

(statearr_14041_14109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (35))){
var inst_13970 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14042_14110 = state_13988__$1;
(statearr_14042_14110[(2)] = inst_13970);

(statearr_14042_14110[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (19))){
var inst_13889 = (state_13988[(7)]);
var inst_13893 = cljs.core.chunk_first.call(null,inst_13889);
var inst_13894 = cljs.core.chunk_rest.call(null,inst_13889);
var inst_13895 = cljs.core.count.call(null,inst_13893);
var inst_13869 = inst_13894;
var inst_13870 = inst_13893;
var inst_13871 = inst_13895;
var inst_13872 = (0);
var state_13988__$1 = (function (){var statearr_14043 = state_13988;
(statearr_14043[(14)] = inst_13872);

(statearr_14043[(15)] = inst_13869);

(statearr_14043[(16)] = inst_13870);

(statearr_14043[(17)] = inst_13871);

return statearr_14043;
})();
var statearr_14044_14111 = state_13988__$1;
(statearr_14044_14111[(2)] = null);

(statearr_14044_14111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (11))){
var inst_13869 = (state_13988[(15)]);
var inst_13889 = (state_13988[(7)]);
var inst_13889__$1 = cljs.core.seq.call(null,inst_13869);
var state_13988__$1 = (function (){var statearr_14045 = state_13988;
(statearr_14045[(7)] = inst_13889__$1);

return statearr_14045;
})();
if(inst_13889__$1){
var statearr_14046_14112 = state_13988__$1;
(statearr_14046_14112[(1)] = (16));

} else {
var statearr_14047_14113 = state_13988__$1;
(statearr_14047_14113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (9))){
var inst_13917 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14048_14114 = state_13988__$1;
(statearr_14048_14114[(2)] = inst_13917);

(statearr_14048_14114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (5))){
var inst_13867 = cljs.core.deref.call(null,cs);
var inst_13868 = cljs.core.seq.call(null,inst_13867);
var inst_13869 = inst_13868;
var inst_13870 = null;
var inst_13871 = (0);
var inst_13872 = (0);
var state_13988__$1 = (function (){var statearr_14049 = state_13988;
(statearr_14049[(14)] = inst_13872);

(statearr_14049[(15)] = inst_13869);

(statearr_14049[(16)] = inst_13870);

(statearr_14049[(17)] = inst_13871);

return statearr_14049;
})();
var statearr_14050_14115 = state_13988__$1;
(statearr_14050_14115[(2)] = null);

(statearr_14050_14115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (14))){
var state_13988__$1 = state_13988;
var statearr_14051_14116 = state_13988__$1;
(statearr_14051_14116[(2)] = null);

(statearr_14051_14116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (45))){
var inst_13978 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14052_14117 = state_13988__$1;
(statearr_14052_14117[(2)] = inst_13978);

(statearr_14052_14117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (26))){
var inst_13920 = (state_13988[(29)]);
var inst_13974 = (state_13988[(2)]);
var inst_13975 = cljs.core.seq.call(null,inst_13920);
var state_13988__$1 = (function (){var statearr_14053 = state_13988;
(statearr_14053[(31)] = inst_13974);

return statearr_14053;
})();
if(inst_13975){
var statearr_14054_14118 = state_13988__$1;
(statearr_14054_14118[(1)] = (42));

} else {
var statearr_14055_14119 = state_13988__$1;
(statearr_14055_14119[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (16))){
var inst_13889 = (state_13988[(7)]);
var inst_13891 = cljs.core.chunked_seq_QMARK_.call(null,inst_13889);
var state_13988__$1 = state_13988;
if(inst_13891){
var statearr_14056_14120 = state_13988__$1;
(statearr_14056_14120[(1)] = (19));

} else {
var statearr_14057_14121 = state_13988__$1;
(statearr_14057_14121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (38))){
var inst_13967 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14058_14122 = state_13988__$1;
(statearr_14058_14122[(2)] = inst_13967);

(statearr_14058_14122[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (30))){
var state_13988__$1 = state_13988;
var statearr_14059_14123 = state_13988__$1;
(statearr_14059_14123[(2)] = null);

(statearr_14059_14123[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (10))){
var inst_13872 = (state_13988[(14)]);
var inst_13870 = (state_13988[(16)]);
var inst_13878 = cljs.core._nth.call(null,inst_13870,inst_13872);
var inst_13879 = cljs.core.nth.call(null,inst_13878,(0),null);
var inst_13880 = cljs.core.nth.call(null,inst_13878,(1),null);
var state_13988__$1 = (function (){var statearr_14060 = state_13988;
(statearr_14060[(26)] = inst_13879);

return statearr_14060;
})();
if(cljs.core.truth_(inst_13880)){
var statearr_14061_14124 = state_13988__$1;
(statearr_14061_14124[(1)] = (13));

} else {
var statearr_14062_14125 = state_13988__$1;
(statearr_14062_14125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (18))){
var inst_13913 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14063_14126 = state_13988__$1;
(statearr_14063_14126[(2)] = inst_13913);

(statearr_14063_14126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (42))){
var state_13988__$1 = state_13988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13988__$1,(45),dchan);
} else {
if((state_val_13989 === (37))){
var inst_13947 = (state_13988[(25)]);
var inst_13956 = (state_13988[(23)]);
var inst_13860 = (state_13988[(11)]);
var inst_13956__$1 = cljs.core.first.call(null,inst_13947);
var inst_13957 = cljs.core.async.put_BANG_.call(null,inst_13956__$1,inst_13860,done);
var state_13988__$1 = (function (){var statearr_14064 = state_13988;
(statearr_14064[(23)] = inst_13956__$1);

return statearr_14064;
})();
if(cljs.core.truth_(inst_13957)){
var statearr_14065_14127 = state_13988__$1;
(statearr_14065_14127[(1)] = (39));

} else {
var statearr_14066_14128 = state_13988__$1;
(statearr_14066_14128[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (8))){
var inst_13872 = (state_13988[(14)]);
var inst_13871 = (state_13988[(17)]);
var inst_13874 = (inst_13872 < inst_13871);
var inst_13875 = inst_13874;
var state_13988__$1 = state_13988;
if(cljs.core.truth_(inst_13875)){
var statearr_14067_14129 = state_13988__$1;
(statearr_14067_14129[(1)] = (10));

} else {
var statearr_14068_14130 = state_13988__$1;
(statearr_14068_14130[(1)] = (11));

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
});})(c__7699__auto___14076,cs,m,dchan,dctr,done))
;
return ((function (switch__7637__auto__,c__7699__auto___14076,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7638__auto__ = null;
var cljs$core$async$mult_$_state_machine__7638__auto____0 = (function (){
var statearr_14072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14072[(0)] = cljs$core$async$mult_$_state_machine__7638__auto__);

(statearr_14072[(1)] = (1));

return statearr_14072;
});
var cljs$core$async$mult_$_state_machine__7638__auto____1 = (function (state_13988){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_13988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14073){if((e14073 instanceof Object)){
var ex__7641__auto__ = e14073;
var statearr_14074_14131 = state_13988;
(statearr_14074_14131[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14132 = state_13988;
state_13988 = G__14132;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7638__auto__ = function(state_13988){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7638__auto____1.call(this,state_13988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7638__auto____0;
cljs$core$async$mult_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7638__auto____1;
return cljs$core$async$mult_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14076,cs,m,dchan,dctr,done))
})();
var state__7701__auto__ = (function (){var statearr_14075 = f__7700__auto__.call(null);
(statearr_14075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14076);

return statearr_14075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14076,cs,m,dchan,dctr,done))
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
var G__14134 = arguments.length;
switch (G__14134) {
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

cljs.core.async.Mix = (function (){var obj14137 = {};
return obj14137;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14142){
var map__14143 = p__14142;
var map__14143__$1 = ((cljs.core.seq_QMARK_.call(null,map__14143))?cljs.core.apply.call(null,cljs.core.hash_map,map__14143):map__14143);
var opts = map__14143__$1;
var statearr_14144_14147 = state;
(statearr_14144_14147[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14143,map__14143__$1,opts){
return (function (val){
var statearr_14145_14148 = state;
(statearr_14145_14148[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14143,map__14143__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14146_14149 = state;
(statearr_14146_14149[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14138){
var G__14139 = cljs.core.first.call(null,seq14138);
var seq14138__$1 = cljs.core.next.call(null,seq14138);
var G__14140 = cljs.core.first.call(null,seq14138__$1);
var seq14138__$2 = cljs.core.next.call(null,seq14138__$1);
var G__14141 = cljs.core.first.call(null,seq14138__$2);
var seq14138__$3 = cljs.core.next.call(null,seq14138__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14139,G__14140,G__14141,seq14138__$3);
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
if(typeof cljs.core.async.t14269 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14269 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14270){
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
this.meta14270 = meta14270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14269.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14269.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t14269.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14271){
var self__ = this;
var _14271__$1 = this;
return self__.meta14270;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14271,meta14270__$1){
var self__ = this;
var _14271__$1 = this;
return (new cljs.core.async.t14269(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14270__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14269.cljs$lang$type = true;

cljs.core.async.t14269.cljs$lang$ctorStr = "cljs.core.async/t14269";

cljs.core.async.t14269.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14269");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14269 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14269(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14270){
return (new cljs.core.async.t14269(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14270));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14269(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7699__auto___14388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14341){
var state_val_14342 = (state_14341[(1)]);
if((state_val_14342 === (7))){
var inst_14285 = (state_14341[(7)]);
var inst_14290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14285);
var state_14341__$1 = state_14341;
var statearr_14343_14389 = state_14341__$1;
(statearr_14343_14389[(2)] = inst_14290);

(statearr_14343_14389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (20))){
var inst_14300 = (state_14341[(8)]);
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14341__$1,(23),out,inst_14300);
} else {
if((state_val_14342 === (1))){
var inst_14275 = (state_14341[(9)]);
var inst_14275__$1 = calc_state.call(null);
var inst_14276 = cljs.core.seq_QMARK_.call(null,inst_14275__$1);
var state_14341__$1 = (function (){var statearr_14344 = state_14341;
(statearr_14344[(9)] = inst_14275__$1);

return statearr_14344;
})();
if(inst_14276){
var statearr_14345_14390 = state_14341__$1;
(statearr_14345_14390[(1)] = (2));

} else {
var statearr_14346_14391 = state_14341__$1;
(statearr_14346_14391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (24))){
var inst_14293 = (state_14341[(10)]);
var inst_14285 = inst_14293;
var state_14341__$1 = (function (){var statearr_14347 = state_14341;
(statearr_14347[(7)] = inst_14285);

return statearr_14347;
})();
var statearr_14348_14392 = state_14341__$1;
(statearr_14348_14392[(2)] = null);

(statearr_14348_14392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (4))){
var inst_14275 = (state_14341[(9)]);
var inst_14281 = (state_14341[(2)]);
var inst_14282 = cljs.core.get.call(null,inst_14281,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14283 = cljs.core.get.call(null,inst_14281,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14284 = cljs.core.get.call(null,inst_14281,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14285 = inst_14275;
var state_14341__$1 = (function (){var statearr_14349 = state_14341;
(statearr_14349[(11)] = inst_14282);

(statearr_14349[(12)] = inst_14284);

(statearr_14349[(13)] = inst_14283);

(statearr_14349[(7)] = inst_14285);

return statearr_14349;
})();
var statearr_14350_14393 = state_14341__$1;
(statearr_14350_14393[(2)] = null);

(statearr_14350_14393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (15))){
var state_14341__$1 = state_14341;
var statearr_14351_14394 = state_14341__$1;
(statearr_14351_14394[(2)] = null);

(statearr_14351_14394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (21))){
var inst_14293 = (state_14341[(10)]);
var inst_14285 = inst_14293;
var state_14341__$1 = (function (){var statearr_14352 = state_14341;
(statearr_14352[(7)] = inst_14285);

return statearr_14352;
})();
var statearr_14353_14395 = state_14341__$1;
(statearr_14353_14395[(2)] = null);

(statearr_14353_14395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (13))){
var inst_14337 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14354_14396 = state_14341__$1;
(statearr_14354_14396[(2)] = inst_14337);

(statearr_14354_14396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (22))){
var inst_14335 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14355_14397 = state_14341__$1;
(statearr_14355_14397[(2)] = inst_14335);

(statearr_14355_14397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (6))){
var inst_14339 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14341__$1,inst_14339);
} else {
if((state_val_14342 === (25))){
var state_14341__$1 = state_14341;
var statearr_14356_14398 = state_14341__$1;
(statearr_14356_14398[(2)] = null);

(statearr_14356_14398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (17))){
var inst_14315 = (state_14341[(14)]);
var state_14341__$1 = state_14341;
var statearr_14357_14399 = state_14341__$1;
(statearr_14357_14399[(2)] = inst_14315);

(statearr_14357_14399[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (3))){
var inst_14275 = (state_14341[(9)]);
var state_14341__$1 = state_14341;
var statearr_14358_14400 = state_14341__$1;
(statearr_14358_14400[(2)] = inst_14275);

(statearr_14358_14400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (12))){
var inst_14301 = (state_14341[(15)]);
var inst_14296 = (state_14341[(16)]);
var inst_14315 = (state_14341[(14)]);
var inst_14315__$1 = inst_14296.call(null,inst_14301);
var state_14341__$1 = (function (){var statearr_14359 = state_14341;
(statearr_14359[(14)] = inst_14315__$1);

return statearr_14359;
})();
if(cljs.core.truth_(inst_14315__$1)){
var statearr_14360_14401 = state_14341__$1;
(statearr_14360_14401[(1)] = (17));

} else {
var statearr_14361_14402 = state_14341__$1;
(statearr_14361_14402[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (2))){
var inst_14275 = (state_14341[(9)]);
var inst_14278 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14275);
var state_14341__$1 = state_14341;
var statearr_14362_14403 = state_14341__$1;
(statearr_14362_14403[(2)] = inst_14278);

(statearr_14362_14403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (23))){
var inst_14326 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
if(cljs.core.truth_(inst_14326)){
var statearr_14363_14404 = state_14341__$1;
(statearr_14363_14404[(1)] = (24));

} else {
var statearr_14364_14405 = state_14341__$1;
(statearr_14364_14405[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (19))){
var inst_14323 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
if(cljs.core.truth_(inst_14323)){
var statearr_14365_14406 = state_14341__$1;
(statearr_14365_14406[(1)] = (20));

} else {
var statearr_14366_14407 = state_14341__$1;
(statearr_14366_14407[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (11))){
var inst_14300 = (state_14341[(8)]);
var inst_14306 = (inst_14300 == null);
var state_14341__$1 = state_14341;
if(cljs.core.truth_(inst_14306)){
var statearr_14367_14408 = state_14341__$1;
(statearr_14367_14408[(1)] = (14));

} else {
var statearr_14368_14409 = state_14341__$1;
(statearr_14368_14409[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (9))){
var inst_14293 = (state_14341[(10)]);
var inst_14293__$1 = (state_14341[(2)]);
var inst_14294 = cljs.core.get.call(null,inst_14293__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14295 = cljs.core.get.call(null,inst_14293__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14296 = cljs.core.get.call(null,inst_14293__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14341__$1 = (function (){var statearr_14369 = state_14341;
(statearr_14369[(10)] = inst_14293__$1);

(statearr_14369[(16)] = inst_14296);

(statearr_14369[(17)] = inst_14295);

return statearr_14369;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14341__$1,(10),inst_14294);
} else {
if((state_val_14342 === (5))){
var inst_14285 = (state_14341[(7)]);
var inst_14288 = cljs.core.seq_QMARK_.call(null,inst_14285);
var state_14341__$1 = state_14341;
if(inst_14288){
var statearr_14370_14410 = state_14341__$1;
(statearr_14370_14410[(1)] = (7));

} else {
var statearr_14371_14411 = state_14341__$1;
(statearr_14371_14411[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (14))){
var inst_14301 = (state_14341[(15)]);
var inst_14308 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14301);
var state_14341__$1 = state_14341;
var statearr_14372_14412 = state_14341__$1;
(statearr_14372_14412[(2)] = inst_14308);

(statearr_14372_14412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (26))){
var inst_14331 = (state_14341[(2)]);
var state_14341__$1 = state_14341;
var statearr_14373_14413 = state_14341__$1;
(statearr_14373_14413[(2)] = inst_14331);

(statearr_14373_14413[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (16))){
var inst_14311 = (state_14341[(2)]);
var inst_14312 = calc_state.call(null);
var inst_14285 = inst_14312;
var state_14341__$1 = (function (){var statearr_14374 = state_14341;
(statearr_14374[(18)] = inst_14311);

(statearr_14374[(7)] = inst_14285);

return statearr_14374;
})();
var statearr_14375_14414 = state_14341__$1;
(statearr_14375_14414[(2)] = null);

(statearr_14375_14414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (10))){
var inst_14301 = (state_14341[(15)]);
var inst_14300 = (state_14341[(8)]);
var inst_14299 = (state_14341[(2)]);
var inst_14300__$1 = cljs.core.nth.call(null,inst_14299,(0),null);
var inst_14301__$1 = cljs.core.nth.call(null,inst_14299,(1),null);
var inst_14302 = (inst_14300__$1 == null);
var inst_14303 = cljs.core._EQ_.call(null,inst_14301__$1,change);
var inst_14304 = (inst_14302) || (inst_14303);
var state_14341__$1 = (function (){var statearr_14376 = state_14341;
(statearr_14376[(15)] = inst_14301__$1);

(statearr_14376[(8)] = inst_14300__$1);

return statearr_14376;
})();
if(cljs.core.truth_(inst_14304)){
var statearr_14377_14415 = state_14341__$1;
(statearr_14377_14415[(1)] = (11));

} else {
var statearr_14378_14416 = state_14341__$1;
(statearr_14378_14416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (18))){
var inst_14301 = (state_14341[(15)]);
var inst_14296 = (state_14341[(16)]);
var inst_14295 = (state_14341[(17)]);
var inst_14318 = cljs.core.empty_QMARK_.call(null,inst_14296);
var inst_14319 = inst_14295.call(null,inst_14301);
var inst_14320 = cljs.core.not.call(null,inst_14319);
var inst_14321 = (inst_14318) && (inst_14320);
var state_14341__$1 = state_14341;
var statearr_14379_14417 = state_14341__$1;
(statearr_14379_14417[(2)] = inst_14321);

(statearr_14379_14417[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14342 === (8))){
var inst_14285 = (state_14341[(7)]);
var state_14341__$1 = state_14341;
var statearr_14380_14418 = state_14341__$1;
(statearr_14380_14418[(2)] = inst_14285);

(statearr_14380_14418[(1)] = (9));


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
});})(c__7699__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7637__auto__,c__7699__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7638__auto__ = null;
var cljs$core$async$mix_$_state_machine__7638__auto____0 = (function (){
var statearr_14384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14384[(0)] = cljs$core$async$mix_$_state_machine__7638__auto__);

(statearr_14384[(1)] = (1));

return statearr_14384;
});
var cljs$core$async$mix_$_state_machine__7638__auto____1 = (function (state_14341){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14385){if((e14385 instanceof Object)){
var ex__7641__auto__ = e14385;
var statearr_14386_14419 = state_14341;
(statearr_14386_14419[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14420 = state_14341;
state_14341 = G__14420;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7638__auto__ = function(state_14341){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7638__auto____1.call(this,state_14341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7638__auto____0;
cljs$core$async$mix_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7638__auto____1;
return cljs$core$async$mix_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7701__auto__ = (function (){var statearr_14387 = f__7700__auto__.call(null);
(statearr_14387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14388);

return statearr_14387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj14422 = {};
return obj14422;
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
var G__14424 = arguments.length;
switch (G__14424) {
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
var G__14428 = arguments.length;
switch (G__14428) {
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
return (function (p1__14426_SHARP_){
if(cljs.core.truth_(p1__14426_SHARP_.call(null,topic))){
return p1__14426_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14426_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4333__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14429 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14429 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14430){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14430 = meta14430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14429.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14429.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14429.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t14429.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14429.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14429.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14431){
var self__ = this;
var _14431__$1 = this;
return self__.meta14430;
});})(mults,ensure_mult))
;

cljs.core.async.t14429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14431,meta14430__$1){
var self__ = this;
var _14431__$1 = this;
return (new cljs.core.async.t14429(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14430__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14429.cljs$lang$type = true;

cljs.core.async.t14429.cljs$lang$ctorStr = "cljs.core.async/t14429";

cljs.core.async.t14429.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14429");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14429 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14429(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14430){
return (new cljs.core.async.t14429(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14430));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14429(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7699__auto___14552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14552,mults,ensure_mult,p){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14552,mults,ensure_mult,p){
return (function (state_14503){
var state_val_14504 = (state_14503[(1)]);
if((state_val_14504 === (7))){
var inst_14499 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
var statearr_14505_14553 = state_14503__$1;
(statearr_14505_14553[(2)] = inst_14499);

(statearr_14505_14553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (20))){
var state_14503__$1 = state_14503;
var statearr_14506_14554 = state_14503__$1;
(statearr_14506_14554[(2)] = null);

(statearr_14506_14554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (1))){
var state_14503__$1 = state_14503;
var statearr_14507_14555 = state_14503__$1;
(statearr_14507_14555[(2)] = null);

(statearr_14507_14555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (24))){
var inst_14482 = (state_14503[(7)]);
var inst_14491 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14482);
var state_14503__$1 = state_14503;
var statearr_14508_14556 = state_14503__$1;
(statearr_14508_14556[(2)] = inst_14491);

(statearr_14508_14556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (4))){
var inst_14434 = (state_14503[(8)]);
var inst_14434__$1 = (state_14503[(2)]);
var inst_14435 = (inst_14434__$1 == null);
var state_14503__$1 = (function (){var statearr_14509 = state_14503;
(statearr_14509[(8)] = inst_14434__$1);

return statearr_14509;
})();
if(cljs.core.truth_(inst_14435)){
var statearr_14510_14557 = state_14503__$1;
(statearr_14510_14557[(1)] = (5));

} else {
var statearr_14511_14558 = state_14503__$1;
(statearr_14511_14558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (15))){
var inst_14476 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
var statearr_14512_14559 = state_14503__$1;
(statearr_14512_14559[(2)] = inst_14476);

(statearr_14512_14559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (21))){
var inst_14496 = (state_14503[(2)]);
var state_14503__$1 = (function (){var statearr_14513 = state_14503;
(statearr_14513[(9)] = inst_14496);

return statearr_14513;
})();
var statearr_14514_14560 = state_14503__$1;
(statearr_14514_14560[(2)] = null);

(statearr_14514_14560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (13))){
var inst_14458 = (state_14503[(10)]);
var inst_14460 = cljs.core.chunked_seq_QMARK_.call(null,inst_14458);
var state_14503__$1 = state_14503;
if(inst_14460){
var statearr_14515_14561 = state_14503__$1;
(statearr_14515_14561[(1)] = (16));

} else {
var statearr_14516_14562 = state_14503__$1;
(statearr_14516_14562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (22))){
var inst_14488 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
if(cljs.core.truth_(inst_14488)){
var statearr_14517_14563 = state_14503__$1;
(statearr_14517_14563[(1)] = (23));

} else {
var statearr_14518_14564 = state_14503__$1;
(statearr_14518_14564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (6))){
var inst_14482 = (state_14503[(7)]);
var inst_14434 = (state_14503[(8)]);
var inst_14484 = (state_14503[(11)]);
var inst_14482__$1 = topic_fn.call(null,inst_14434);
var inst_14483 = cljs.core.deref.call(null,mults);
var inst_14484__$1 = cljs.core.get.call(null,inst_14483,inst_14482__$1);
var state_14503__$1 = (function (){var statearr_14519 = state_14503;
(statearr_14519[(7)] = inst_14482__$1);

(statearr_14519[(11)] = inst_14484__$1);

return statearr_14519;
})();
if(cljs.core.truth_(inst_14484__$1)){
var statearr_14520_14565 = state_14503__$1;
(statearr_14520_14565[(1)] = (19));

} else {
var statearr_14521_14566 = state_14503__$1;
(statearr_14521_14566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (25))){
var inst_14493 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
var statearr_14522_14567 = state_14503__$1;
(statearr_14522_14567[(2)] = inst_14493);

(statearr_14522_14567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (17))){
var inst_14458 = (state_14503[(10)]);
var inst_14467 = cljs.core.first.call(null,inst_14458);
var inst_14468 = cljs.core.async.muxch_STAR_.call(null,inst_14467);
var inst_14469 = cljs.core.async.close_BANG_.call(null,inst_14468);
var inst_14470 = cljs.core.next.call(null,inst_14458);
var inst_14444 = inst_14470;
var inst_14445 = null;
var inst_14446 = (0);
var inst_14447 = (0);
var state_14503__$1 = (function (){var statearr_14523 = state_14503;
(statearr_14523[(12)] = inst_14446);

(statearr_14523[(13)] = inst_14469);

(statearr_14523[(14)] = inst_14445);

(statearr_14523[(15)] = inst_14447);

(statearr_14523[(16)] = inst_14444);

return statearr_14523;
})();
var statearr_14524_14568 = state_14503__$1;
(statearr_14524_14568[(2)] = null);

(statearr_14524_14568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (3))){
var inst_14501 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14503__$1,inst_14501);
} else {
if((state_val_14504 === (12))){
var inst_14478 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
var statearr_14525_14569 = state_14503__$1;
(statearr_14525_14569[(2)] = inst_14478);

(statearr_14525_14569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (2))){
var state_14503__$1 = state_14503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14503__$1,(4),ch);
} else {
if((state_val_14504 === (23))){
var state_14503__$1 = state_14503;
var statearr_14526_14570 = state_14503__$1;
(statearr_14526_14570[(2)] = null);

(statearr_14526_14570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (19))){
var inst_14434 = (state_14503[(8)]);
var inst_14484 = (state_14503[(11)]);
var inst_14486 = cljs.core.async.muxch_STAR_.call(null,inst_14484);
var state_14503__$1 = state_14503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14503__$1,(22),inst_14486,inst_14434);
} else {
if((state_val_14504 === (11))){
var inst_14444 = (state_14503[(16)]);
var inst_14458 = (state_14503[(10)]);
var inst_14458__$1 = cljs.core.seq.call(null,inst_14444);
var state_14503__$1 = (function (){var statearr_14527 = state_14503;
(statearr_14527[(10)] = inst_14458__$1);

return statearr_14527;
})();
if(inst_14458__$1){
var statearr_14528_14571 = state_14503__$1;
(statearr_14528_14571[(1)] = (13));

} else {
var statearr_14529_14572 = state_14503__$1;
(statearr_14529_14572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (9))){
var inst_14480 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
var statearr_14530_14573 = state_14503__$1;
(statearr_14530_14573[(2)] = inst_14480);

(statearr_14530_14573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (5))){
var inst_14441 = cljs.core.deref.call(null,mults);
var inst_14442 = cljs.core.vals.call(null,inst_14441);
var inst_14443 = cljs.core.seq.call(null,inst_14442);
var inst_14444 = inst_14443;
var inst_14445 = null;
var inst_14446 = (0);
var inst_14447 = (0);
var state_14503__$1 = (function (){var statearr_14531 = state_14503;
(statearr_14531[(12)] = inst_14446);

(statearr_14531[(14)] = inst_14445);

(statearr_14531[(15)] = inst_14447);

(statearr_14531[(16)] = inst_14444);

return statearr_14531;
})();
var statearr_14532_14574 = state_14503__$1;
(statearr_14532_14574[(2)] = null);

(statearr_14532_14574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (14))){
var state_14503__$1 = state_14503;
var statearr_14536_14575 = state_14503__$1;
(statearr_14536_14575[(2)] = null);

(statearr_14536_14575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (16))){
var inst_14458 = (state_14503[(10)]);
var inst_14462 = cljs.core.chunk_first.call(null,inst_14458);
var inst_14463 = cljs.core.chunk_rest.call(null,inst_14458);
var inst_14464 = cljs.core.count.call(null,inst_14462);
var inst_14444 = inst_14463;
var inst_14445 = inst_14462;
var inst_14446 = inst_14464;
var inst_14447 = (0);
var state_14503__$1 = (function (){var statearr_14537 = state_14503;
(statearr_14537[(12)] = inst_14446);

(statearr_14537[(14)] = inst_14445);

(statearr_14537[(15)] = inst_14447);

(statearr_14537[(16)] = inst_14444);

return statearr_14537;
})();
var statearr_14538_14576 = state_14503__$1;
(statearr_14538_14576[(2)] = null);

(statearr_14538_14576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (10))){
var inst_14446 = (state_14503[(12)]);
var inst_14445 = (state_14503[(14)]);
var inst_14447 = (state_14503[(15)]);
var inst_14444 = (state_14503[(16)]);
var inst_14452 = cljs.core._nth.call(null,inst_14445,inst_14447);
var inst_14453 = cljs.core.async.muxch_STAR_.call(null,inst_14452);
var inst_14454 = cljs.core.async.close_BANG_.call(null,inst_14453);
var inst_14455 = (inst_14447 + (1));
var tmp14533 = inst_14446;
var tmp14534 = inst_14445;
var tmp14535 = inst_14444;
var inst_14444__$1 = tmp14535;
var inst_14445__$1 = tmp14534;
var inst_14446__$1 = tmp14533;
var inst_14447__$1 = inst_14455;
var state_14503__$1 = (function (){var statearr_14539 = state_14503;
(statearr_14539[(12)] = inst_14446__$1);

(statearr_14539[(14)] = inst_14445__$1);

(statearr_14539[(15)] = inst_14447__$1);

(statearr_14539[(16)] = inst_14444__$1);

(statearr_14539[(17)] = inst_14454);

return statearr_14539;
})();
var statearr_14540_14577 = state_14503__$1;
(statearr_14540_14577[(2)] = null);

(statearr_14540_14577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (18))){
var inst_14473 = (state_14503[(2)]);
var state_14503__$1 = state_14503;
var statearr_14541_14578 = state_14503__$1;
(statearr_14541_14578[(2)] = inst_14473);

(statearr_14541_14578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14504 === (8))){
var inst_14446 = (state_14503[(12)]);
var inst_14447 = (state_14503[(15)]);
var inst_14449 = (inst_14447 < inst_14446);
var inst_14450 = inst_14449;
var state_14503__$1 = state_14503;
if(cljs.core.truth_(inst_14450)){
var statearr_14542_14579 = state_14503__$1;
(statearr_14542_14579[(1)] = (10));

} else {
var statearr_14543_14580 = state_14503__$1;
(statearr_14543_14580[(1)] = (11));

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
});})(c__7699__auto___14552,mults,ensure_mult,p))
;
return ((function (switch__7637__auto__,c__7699__auto___14552,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14547[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14547[(1)] = (1));

return statearr_14547;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14503){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14548){if((e14548 instanceof Object)){
var ex__7641__auto__ = e14548;
var statearr_14549_14581 = state_14503;
(statearr_14549_14581[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14582 = state_14503;
state_14503 = G__14582;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14552,mults,ensure_mult,p))
})();
var state__7701__auto__ = (function (){var statearr_14550 = f__7700__auto__.call(null);
(statearr_14550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14552);

return statearr_14550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14552,mults,ensure_mult,p))
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
var G__14584 = arguments.length;
switch (G__14584) {
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
var G__14587 = arguments.length;
switch (G__14587) {
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
var G__14590 = arguments.length;
switch (G__14590) {
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
var c__7699__auto___14660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14629){
var state_val_14630 = (state_14629[(1)]);
if((state_val_14630 === (7))){
var state_14629__$1 = state_14629;
var statearr_14631_14661 = state_14629__$1;
(statearr_14631_14661[(2)] = null);

(statearr_14631_14661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (1))){
var state_14629__$1 = state_14629;
var statearr_14632_14662 = state_14629__$1;
(statearr_14632_14662[(2)] = null);

(statearr_14632_14662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (4))){
var inst_14593 = (state_14629[(7)]);
var inst_14595 = (inst_14593 < cnt);
var state_14629__$1 = state_14629;
if(cljs.core.truth_(inst_14595)){
var statearr_14633_14663 = state_14629__$1;
(statearr_14633_14663[(1)] = (6));

} else {
var statearr_14634_14664 = state_14629__$1;
(statearr_14634_14664[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (15))){
var inst_14625 = (state_14629[(2)]);
var state_14629__$1 = state_14629;
var statearr_14635_14665 = state_14629__$1;
(statearr_14635_14665[(2)] = inst_14625);

(statearr_14635_14665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (13))){
var inst_14618 = cljs.core.async.close_BANG_.call(null,out);
var state_14629__$1 = state_14629;
var statearr_14636_14666 = state_14629__$1;
(statearr_14636_14666[(2)] = inst_14618);

(statearr_14636_14666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (6))){
var state_14629__$1 = state_14629;
var statearr_14637_14667 = state_14629__$1;
(statearr_14637_14667[(2)] = null);

(statearr_14637_14667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (3))){
var inst_14627 = (state_14629[(2)]);
var state_14629__$1 = state_14629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14629__$1,inst_14627);
} else {
if((state_val_14630 === (12))){
var inst_14615 = (state_14629[(8)]);
var inst_14615__$1 = (state_14629[(2)]);
var inst_14616 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14615__$1);
var state_14629__$1 = (function (){var statearr_14638 = state_14629;
(statearr_14638[(8)] = inst_14615__$1);

return statearr_14638;
})();
if(cljs.core.truth_(inst_14616)){
var statearr_14639_14668 = state_14629__$1;
(statearr_14639_14668[(1)] = (13));

} else {
var statearr_14640_14669 = state_14629__$1;
(statearr_14640_14669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (2))){
var inst_14592 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14593 = (0);
var state_14629__$1 = (function (){var statearr_14641 = state_14629;
(statearr_14641[(9)] = inst_14592);

(statearr_14641[(7)] = inst_14593);

return statearr_14641;
})();
var statearr_14642_14670 = state_14629__$1;
(statearr_14642_14670[(2)] = null);

(statearr_14642_14670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (11))){
var inst_14593 = (state_14629[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14629,(10),Object,null,(9));
var inst_14602 = chs__$1.call(null,inst_14593);
var inst_14603 = done.call(null,inst_14593);
var inst_14604 = cljs.core.async.take_BANG_.call(null,inst_14602,inst_14603);
var state_14629__$1 = state_14629;
var statearr_14643_14671 = state_14629__$1;
(statearr_14643_14671[(2)] = inst_14604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (9))){
var inst_14593 = (state_14629[(7)]);
var inst_14606 = (state_14629[(2)]);
var inst_14607 = (inst_14593 + (1));
var inst_14593__$1 = inst_14607;
var state_14629__$1 = (function (){var statearr_14644 = state_14629;
(statearr_14644[(10)] = inst_14606);

(statearr_14644[(7)] = inst_14593__$1);

return statearr_14644;
})();
var statearr_14645_14672 = state_14629__$1;
(statearr_14645_14672[(2)] = null);

(statearr_14645_14672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (5))){
var inst_14613 = (state_14629[(2)]);
var state_14629__$1 = (function (){var statearr_14646 = state_14629;
(statearr_14646[(11)] = inst_14613);

return statearr_14646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14629__$1,(12),dchan);
} else {
if((state_val_14630 === (14))){
var inst_14615 = (state_14629[(8)]);
var inst_14620 = cljs.core.apply.call(null,f,inst_14615);
var state_14629__$1 = state_14629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14629__$1,(16),out,inst_14620);
} else {
if((state_val_14630 === (16))){
var inst_14622 = (state_14629[(2)]);
var state_14629__$1 = (function (){var statearr_14647 = state_14629;
(statearr_14647[(12)] = inst_14622);

return statearr_14647;
})();
var statearr_14648_14673 = state_14629__$1;
(statearr_14648_14673[(2)] = null);

(statearr_14648_14673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (10))){
var inst_14597 = (state_14629[(2)]);
var inst_14598 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14629__$1 = (function (){var statearr_14649 = state_14629;
(statearr_14649[(13)] = inst_14597);

return statearr_14649;
})();
var statearr_14650_14674 = state_14629__$1;
(statearr_14650_14674[(2)] = inst_14598);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14630 === (8))){
var inst_14611 = (state_14629[(2)]);
var state_14629__$1 = state_14629;
var statearr_14651_14675 = state_14629__$1;
(statearr_14651_14675[(2)] = inst_14611);

(statearr_14651_14675[(1)] = (5));


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
});})(c__7699__auto___14660,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7637__auto__,c__7699__auto___14660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14655[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14655[(1)] = (1));

return statearr_14655;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14629){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14656){if((e14656 instanceof Object)){
var ex__7641__auto__ = e14656;
var statearr_14657_14676 = state_14629;
(statearr_14657_14676[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14677 = state_14629;
state_14629 = G__14677;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14660,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7701__auto__ = (function (){var statearr_14658 = f__7700__auto__.call(null);
(statearr_14658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14660);

return statearr_14658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14660,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14680 = arguments.length;
switch (G__14680) {
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
var c__7699__auto___14735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14735,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14735,out){
return (function (state_14710){
var state_val_14711 = (state_14710[(1)]);
if((state_val_14711 === (7))){
var inst_14689 = (state_14710[(7)]);
var inst_14690 = (state_14710[(8)]);
var inst_14689__$1 = (state_14710[(2)]);
var inst_14690__$1 = cljs.core.nth.call(null,inst_14689__$1,(0),null);
var inst_14691 = cljs.core.nth.call(null,inst_14689__$1,(1),null);
var inst_14692 = (inst_14690__$1 == null);
var state_14710__$1 = (function (){var statearr_14712 = state_14710;
(statearr_14712[(7)] = inst_14689__$1);

(statearr_14712[(8)] = inst_14690__$1);

(statearr_14712[(9)] = inst_14691);

return statearr_14712;
})();
if(cljs.core.truth_(inst_14692)){
var statearr_14713_14736 = state_14710__$1;
(statearr_14713_14736[(1)] = (8));

} else {
var statearr_14714_14737 = state_14710__$1;
(statearr_14714_14737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (1))){
var inst_14681 = cljs.core.vec.call(null,chs);
var inst_14682 = inst_14681;
var state_14710__$1 = (function (){var statearr_14715 = state_14710;
(statearr_14715[(10)] = inst_14682);

return statearr_14715;
})();
var statearr_14716_14738 = state_14710__$1;
(statearr_14716_14738[(2)] = null);

(statearr_14716_14738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (4))){
var inst_14682 = (state_14710[(10)]);
var state_14710__$1 = state_14710;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14710__$1,(7),inst_14682);
} else {
if((state_val_14711 === (6))){
var inst_14706 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14717_14739 = state_14710__$1;
(statearr_14717_14739[(2)] = inst_14706);

(statearr_14717_14739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (3))){
var inst_14708 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14710__$1,inst_14708);
} else {
if((state_val_14711 === (2))){
var inst_14682 = (state_14710[(10)]);
var inst_14684 = cljs.core.count.call(null,inst_14682);
var inst_14685 = (inst_14684 > (0));
var state_14710__$1 = state_14710;
if(cljs.core.truth_(inst_14685)){
var statearr_14719_14740 = state_14710__$1;
(statearr_14719_14740[(1)] = (4));

} else {
var statearr_14720_14741 = state_14710__$1;
(statearr_14720_14741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (11))){
var inst_14682 = (state_14710[(10)]);
var inst_14699 = (state_14710[(2)]);
var tmp14718 = inst_14682;
var inst_14682__$1 = tmp14718;
var state_14710__$1 = (function (){var statearr_14721 = state_14710;
(statearr_14721[(11)] = inst_14699);

(statearr_14721[(10)] = inst_14682__$1);

return statearr_14721;
})();
var statearr_14722_14742 = state_14710__$1;
(statearr_14722_14742[(2)] = null);

(statearr_14722_14742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (9))){
var inst_14690 = (state_14710[(8)]);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14710__$1,(11),out,inst_14690);
} else {
if((state_val_14711 === (5))){
var inst_14704 = cljs.core.async.close_BANG_.call(null,out);
var state_14710__$1 = state_14710;
var statearr_14723_14743 = state_14710__$1;
(statearr_14723_14743[(2)] = inst_14704);

(statearr_14723_14743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (10))){
var inst_14702 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14724_14744 = state_14710__$1;
(statearr_14724_14744[(2)] = inst_14702);

(statearr_14724_14744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (8))){
var inst_14689 = (state_14710[(7)]);
var inst_14682 = (state_14710[(10)]);
var inst_14690 = (state_14710[(8)]);
var inst_14691 = (state_14710[(9)]);
var inst_14694 = (function (){var c = inst_14691;
var v = inst_14690;
var vec__14687 = inst_14689;
var cs = inst_14682;
return ((function (c,v,vec__14687,cs,inst_14689,inst_14682,inst_14690,inst_14691,state_val_14711,c__7699__auto___14735,out){
return (function (p1__14678_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14678_SHARP_);
});
;})(c,v,vec__14687,cs,inst_14689,inst_14682,inst_14690,inst_14691,state_val_14711,c__7699__auto___14735,out))
})();
var inst_14695 = cljs.core.filterv.call(null,inst_14694,inst_14682);
var inst_14682__$1 = inst_14695;
var state_14710__$1 = (function (){var statearr_14725 = state_14710;
(statearr_14725[(10)] = inst_14682__$1);

return statearr_14725;
})();
var statearr_14726_14745 = state_14710__$1;
(statearr_14726_14745[(2)] = null);

(statearr_14726_14745[(1)] = (2));


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
});})(c__7699__auto___14735,out))
;
return ((function (switch__7637__auto__,c__7699__auto___14735,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14730[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14730[(1)] = (1));

return statearr_14730;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14710){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14731){if((e14731 instanceof Object)){
var ex__7641__auto__ = e14731;
var statearr_14732_14746 = state_14710;
(statearr_14732_14746[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14747 = state_14710;
state_14710 = G__14747;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14735,out))
})();
var state__7701__auto__ = (function (){var statearr_14733 = f__7700__auto__.call(null);
(statearr_14733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14735);

return statearr_14733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14735,out))
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
var G__14749 = arguments.length;
switch (G__14749) {
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
var c__7699__auto___14797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14797,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14797,out){
return (function (state_14773){
var state_val_14774 = (state_14773[(1)]);
if((state_val_14774 === (7))){
var inst_14755 = (state_14773[(7)]);
var inst_14755__$1 = (state_14773[(2)]);
var inst_14756 = (inst_14755__$1 == null);
var inst_14757 = cljs.core.not.call(null,inst_14756);
var state_14773__$1 = (function (){var statearr_14775 = state_14773;
(statearr_14775[(7)] = inst_14755__$1);

return statearr_14775;
})();
if(inst_14757){
var statearr_14776_14798 = state_14773__$1;
(statearr_14776_14798[(1)] = (8));

} else {
var statearr_14777_14799 = state_14773__$1;
(statearr_14777_14799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (1))){
var inst_14750 = (0);
var state_14773__$1 = (function (){var statearr_14778 = state_14773;
(statearr_14778[(8)] = inst_14750);

return statearr_14778;
})();
var statearr_14779_14800 = state_14773__$1;
(statearr_14779_14800[(2)] = null);

(statearr_14779_14800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (4))){
var state_14773__$1 = state_14773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14773__$1,(7),ch);
} else {
if((state_val_14774 === (6))){
var inst_14768 = (state_14773[(2)]);
var state_14773__$1 = state_14773;
var statearr_14780_14801 = state_14773__$1;
(statearr_14780_14801[(2)] = inst_14768);

(statearr_14780_14801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (3))){
var inst_14770 = (state_14773[(2)]);
var inst_14771 = cljs.core.async.close_BANG_.call(null,out);
var state_14773__$1 = (function (){var statearr_14781 = state_14773;
(statearr_14781[(9)] = inst_14770);

return statearr_14781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14773__$1,inst_14771);
} else {
if((state_val_14774 === (2))){
var inst_14750 = (state_14773[(8)]);
var inst_14752 = (inst_14750 < n);
var state_14773__$1 = state_14773;
if(cljs.core.truth_(inst_14752)){
var statearr_14782_14802 = state_14773__$1;
(statearr_14782_14802[(1)] = (4));

} else {
var statearr_14783_14803 = state_14773__$1;
(statearr_14783_14803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (11))){
var inst_14750 = (state_14773[(8)]);
var inst_14760 = (state_14773[(2)]);
var inst_14761 = (inst_14750 + (1));
var inst_14750__$1 = inst_14761;
var state_14773__$1 = (function (){var statearr_14784 = state_14773;
(statearr_14784[(10)] = inst_14760);

(statearr_14784[(8)] = inst_14750__$1);

return statearr_14784;
})();
var statearr_14785_14804 = state_14773__$1;
(statearr_14785_14804[(2)] = null);

(statearr_14785_14804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (9))){
var state_14773__$1 = state_14773;
var statearr_14786_14805 = state_14773__$1;
(statearr_14786_14805[(2)] = null);

(statearr_14786_14805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (5))){
var state_14773__$1 = state_14773;
var statearr_14787_14806 = state_14773__$1;
(statearr_14787_14806[(2)] = null);

(statearr_14787_14806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (10))){
var inst_14765 = (state_14773[(2)]);
var state_14773__$1 = state_14773;
var statearr_14788_14807 = state_14773__$1;
(statearr_14788_14807[(2)] = inst_14765);

(statearr_14788_14807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14774 === (8))){
var inst_14755 = (state_14773[(7)]);
var state_14773__$1 = state_14773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14773__$1,(11),out,inst_14755);
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
});})(c__7699__auto___14797,out))
;
return ((function (switch__7637__auto__,c__7699__auto___14797,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14792[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14792[(1)] = (1));

return statearr_14792;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14773){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14793){if((e14793 instanceof Object)){
var ex__7641__auto__ = e14793;
var statearr_14794_14808 = state_14773;
(statearr_14794_14808[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14809 = state_14773;
state_14773 = G__14809;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14797,out))
})();
var state__7701__auto__ = (function (){var statearr_14795 = f__7700__auto__.call(null);
(statearr_14795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14797);

return statearr_14795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14797,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14817 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14817 = (function (ch,f,map_LT_,meta14818){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14818 = meta14818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14820 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14820 = (function (fn1,_,meta14818,map_LT_,f,ch,meta14821){
this.fn1 = fn1;
this._ = _;
this.meta14818 = meta14818;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14821 = meta14821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14820.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14810_SHARP_){
return f1.call(null,(((p1__14810_SHARP_ == null))?null:self__.f.call(null,p1__14810_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14822){
var self__ = this;
var _14822__$1 = this;
return self__.meta14821;
});})(___$1))
;

cljs.core.async.t14820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14822,meta14821__$1){
var self__ = this;
var _14822__$1 = this;
return (new cljs.core.async.t14820(self__.fn1,self__._,self__.meta14818,self__.map_LT_,self__.f,self__.ch,meta14821__$1));
});})(___$1))
;

cljs.core.async.t14820.cljs$lang$type = true;

cljs.core.async.t14820.cljs$lang$ctorStr = "cljs.core.async/t14820";

cljs.core.async.t14820.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14820");
});})(___$1))
;

cljs.core.async.__GT_t14820 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14820(fn1__$1,___$2,meta14818__$1,map_LT___$1,f__$1,ch__$1,meta14821){
return (new cljs.core.async.t14820(fn1__$1,___$2,meta14818__$1,map_LT___$1,f__$1,ch__$1,meta14821));
});})(___$1))
;

}

return (new cljs.core.async.t14820(fn1,___$1,self__.meta14818,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14819){
var self__ = this;
var _14819__$1 = this;
return self__.meta14818;
});

cljs.core.async.t14817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14819,meta14818__$1){
var self__ = this;
var _14819__$1 = this;
return (new cljs.core.async.t14817(self__.ch,self__.f,self__.map_LT_,meta14818__$1));
});

cljs.core.async.t14817.cljs$lang$type = true;

cljs.core.async.t14817.cljs$lang$ctorStr = "cljs.core.async/t14817";

cljs.core.async.t14817.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14817");
});

cljs.core.async.__GT_t14817 = (function cljs$core$async$map_LT__$___GT_t14817(ch__$1,f__$1,map_LT___$1,meta14818){
return (new cljs.core.async.t14817(ch__$1,f__$1,map_LT___$1,meta14818));
});

}

return (new cljs.core.async.t14817(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14826 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14826 = (function (ch,f,map_GT_,meta14827){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14827 = meta14827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14826.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14826.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14826.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14828){
var self__ = this;
var _14828__$1 = this;
return self__.meta14827;
});

cljs.core.async.t14826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14828,meta14827__$1){
var self__ = this;
var _14828__$1 = this;
return (new cljs.core.async.t14826(self__.ch,self__.f,self__.map_GT_,meta14827__$1));
});

cljs.core.async.t14826.cljs$lang$type = true;

cljs.core.async.t14826.cljs$lang$ctorStr = "cljs.core.async/t14826";

cljs.core.async.t14826.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14826");
});

cljs.core.async.__GT_t14826 = (function cljs$core$async$map_GT__$___GT_t14826(ch__$1,f__$1,map_GT___$1,meta14827){
return (new cljs.core.async.t14826(ch__$1,f__$1,map_GT___$1,meta14827));
});

}

return (new cljs.core.async.t14826(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14832 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14832 = (function (ch,p,filter_GT_,meta14833){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14833 = meta14833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14834){
var self__ = this;
var _14834__$1 = this;
return self__.meta14833;
});

cljs.core.async.t14832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14834,meta14833__$1){
var self__ = this;
var _14834__$1 = this;
return (new cljs.core.async.t14832(self__.ch,self__.p,self__.filter_GT_,meta14833__$1));
});

cljs.core.async.t14832.cljs$lang$type = true;

cljs.core.async.t14832.cljs$lang$ctorStr = "cljs.core.async/t14832";

cljs.core.async.t14832.cljs$lang$ctorPrWriter = (function (this__4912__auto__,writer__4913__auto__,opt__4914__auto__){
return cljs.core._write.call(null,writer__4913__auto__,"cljs.core.async/t14832");
});

cljs.core.async.__GT_t14832 = (function cljs$core$async$filter_GT__$___GT_t14832(ch__$1,p__$1,filter_GT___$1,meta14833){
return (new cljs.core.async.t14832(ch__$1,p__$1,filter_GT___$1,meta14833));
});

}

return (new cljs.core.async.t14832(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14836 = arguments.length;
switch (G__14836) {
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
var c__7699__auto___14879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___14879,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___14879,out){
return (function (state_14857){
var state_val_14858 = (state_14857[(1)]);
if((state_val_14858 === (7))){
var inst_14853 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
var statearr_14859_14880 = state_14857__$1;
(statearr_14859_14880[(2)] = inst_14853);

(statearr_14859_14880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (1))){
var state_14857__$1 = state_14857;
var statearr_14860_14881 = state_14857__$1;
(statearr_14860_14881[(2)] = null);

(statearr_14860_14881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (4))){
var inst_14839 = (state_14857[(7)]);
var inst_14839__$1 = (state_14857[(2)]);
var inst_14840 = (inst_14839__$1 == null);
var state_14857__$1 = (function (){var statearr_14861 = state_14857;
(statearr_14861[(7)] = inst_14839__$1);

return statearr_14861;
})();
if(cljs.core.truth_(inst_14840)){
var statearr_14862_14882 = state_14857__$1;
(statearr_14862_14882[(1)] = (5));

} else {
var statearr_14863_14883 = state_14857__$1;
(statearr_14863_14883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (6))){
var inst_14839 = (state_14857[(7)]);
var inst_14844 = p.call(null,inst_14839);
var state_14857__$1 = state_14857;
if(cljs.core.truth_(inst_14844)){
var statearr_14864_14884 = state_14857__$1;
(statearr_14864_14884[(1)] = (8));

} else {
var statearr_14865_14885 = state_14857__$1;
(statearr_14865_14885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (3))){
var inst_14855 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14857__$1,inst_14855);
} else {
if((state_val_14858 === (2))){
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14857__$1,(4),ch);
} else {
if((state_val_14858 === (11))){
var inst_14847 = (state_14857[(2)]);
var state_14857__$1 = state_14857;
var statearr_14866_14886 = state_14857__$1;
(statearr_14866_14886[(2)] = inst_14847);

(statearr_14866_14886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (9))){
var state_14857__$1 = state_14857;
var statearr_14867_14887 = state_14857__$1;
(statearr_14867_14887[(2)] = null);

(statearr_14867_14887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (5))){
var inst_14842 = cljs.core.async.close_BANG_.call(null,out);
var state_14857__$1 = state_14857;
var statearr_14868_14888 = state_14857__$1;
(statearr_14868_14888[(2)] = inst_14842);

(statearr_14868_14888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (10))){
var inst_14850 = (state_14857[(2)]);
var state_14857__$1 = (function (){var statearr_14869 = state_14857;
(statearr_14869[(8)] = inst_14850);

return statearr_14869;
})();
var statearr_14870_14889 = state_14857__$1;
(statearr_14870_14889[(2)] = null);

(statearr_14870_14889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14858 === (8))){
var inst_14839 = (state_14857[(7)]);
var state_14857__$1 = state_14857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14857__$1,(11),out,inst_14839);
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
});})(c__7699__auto___14879,out))
;
return ((function (switch__7637__auto__,c__7699__auto___14879,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_14874 = [null,null,null,null,null,null,null,null,null];
(statearr_14874[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_14874[(1)] = (1));

return statearr_14874;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_14857){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_14857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e14875){if((e14875 instanceof Object)){
var ex__7641__auto__ = e14875;
var statearr_14876_14890 = state_14857;
(statearr_14876_14890[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14891 = state_14857;
state_14857 = G__14891;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_14857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_14857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___14879,out))
})();
var state__7701__auto__ = (function (){var statearr_14877 = f__7700__auto__.call(null);
(statearr_14877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___14879);

return statearr_14877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___14879,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__14893 = arguments.length;
switch (G__14893) {
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
return (function (state_15060){
var state_val_15061 = (state_15060[(1)]);
if((state_val_15061 === (7))){
var inst_15056 = (state_15060[(2)]);
var state_15060__$1 = state_15060;
var statearr_15062_15103 = state_15060__$1;
(statearr_15062_15103[(2)] = inst_15056);

(statearr_15062_15103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (20))){
var inst_15026 = (state_15060[(7)]);
var inst_15037 = (state_15060[(2)]);
var inst_15038 = cljs.core.next.call(null,inst_15026);
var inst_15012 = inst_15038;
var inst_15013 = null;
var inst_15014 = (0);
var inst_15015 = (0);
var state_15060__$1 = (function (){var statearr_15063 = state_15060;
(statearr_15063[(8)] = inst_15014);

(statearr_15063[(9)] = inst_15015);

(statearr_15063[(10)] = inst_15013);

(statearr_15063[(11)] = inst_15012);

(statearr_15063[(12)] = inst_15037);

return statearr_15063;
})();
var statearr_15064_15104 = state_15060__$1;
(statearr_15064_15104[(2)] = null);

(statearr_15064_15104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (1))){
var state_15060__$1 = state_15060;
var statearr_15065_15105 = state_15060__$1;
(statearr_15065_15105[(2)] = null);

(statearr_15065_15105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (4))){
var inst_15001 = (state_15060[(13)]);
var inst_15001__$1 = (state_15060[(2)]);
var inst_15002 = (inst_15001__$1 == null);
var state_15060__$1 = (function (){var statearr_15066 = state_15060;
(statearr_15066[(13)] = inst_15001__$1);

return statearr_15066;
})();
if(cljs.core.truth_(inst_15002)){
var statearr_15067_15106 = state_15060__$1;
(statearr_15067_15106[(1)] = (5));

} else {
var statearr_15068_15107 = state_15060__$1;
(statearr_15068_15107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (15))){
var state_15060__$1 = state_15060;
var statearr_15072_15108 = state_15060__$1;
(statearr_15072_15108[(2)] = null);

(statearr_15072_15108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (21))){
var state_15060__$1 = state_15060;
var statearr_15073_15109 = state_15060__$1;
(statearr_15073_15109[(2)] = null);

(statearr_15073_15109[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (13))){
var inst_15014 = (state_15060[(8)]);
var inst_15015 = (state_15060[(9)]);
var inst_15013 = (state_15060[(10)]);
var inst_15012 = (state_15060[(11)]);
var inst_15022 = (state_15060[(2)]);
var inst_15023 = (inst_15015 + (1));
var tmp15069 = inst_15014;
var tmp15070 = inst_15013;
var tmp15071 = inst_15012;
var inst_15012__$1 = tmp15071;
var inst_15013__$1 = tmp15070;
var inst_15014__$1 = tmp15069;
var inst_15015__$1 = inst_15023;
var state_15060__$1 = (function (){var statearr_15074 = state_15060;
(statearr_15074[(8)] = inst_15014__$1);

(statearr_15074[(14)] = inst_15022);

(statearr_15074[(9)] = inst_15015__$1);

(statearr_15074[(10)] = inst_15013__$1);

(statearr_15074[(11)] = inst_15012__$1);

return statearr_15074;
})();
var statearr_15075_15110 = state_15060__$1;
(statearr_15075_15110[(2)] = null);

(statearr_15075_15110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (22))){
var state_15060__$1 = state_15060;
var statearr_15076_15111 = state_15060__$1;
(statearr_15076_15111[(2)] = null);

(statearr_15076_15111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (6))){
var inst_15001 = (state_15060[(13)]);
var inst_15010 = f.call(null,inst_15001);
var inst_15011 = cljs.core.seq.call(null,inst_15010);
var inst_15012 = inst_15011;
var inst_15013 = null;
var inst_15014 = (0);
var inst_15015 = (0);
var state_15060__$1 = (function (){var statearr_15077 = state_15060;
(statearr_15077[(8)] = inst_15014);

(statearr_15077[(9)] = inst_15015);

(statearr_15077[(10)] = inst_15013);

(statearr_15077[(11)] = inst_15012);

return statearr_15077;
})();
var statearr_15078_15112 = state_15060__$1;
(statearr_15078_15112[(2)] = null);

(statearr_15078_15112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (17))){
var inst_15026 = (state_15060[(7)]);
var inst_15030 = cljs.core.chunk_first.call(null,inst_15026);
var inst_15031 = cljs.core.chunk_rest.call(null,inst_15026);
var inst_15032 = cljs.core.count.call(null,inst_15030);
var inst_15012 = inst_15031;
var inst_15013 = inst_15030;
var inst_15014 = inst_15032;
var inst_15015 = (0);
var state_15060__$1 = (function (){var statearr_15079 = state_15060;
(statearr_15079[(8)] = inst_15014);

(statearr_15079[(9)] = inst_15015);

(statearr_15079[(10)] = inst_15013);

(statearr_15079[(11)] = inst_15012);

return statearr_15079;
})();
var statearr_15080_15113 = state_15060__$1;
(statearr_15080_15113[(2)] = null);

(statearr_15080_15113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (3))){
var inst_15058 = (state_15060[(2)]);
var state_15060__$1 = state_15060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15060__$1,inst_15058);
} else {
if((state_val_15061 === (12))){
var inst_15046 = (state_15060[(2)]);
var state_15060__$1 = state_15060;
var statearr_15081_15114 = state_15060__$1;
(statearr_15081_15114[(2)] = inst_15046);

(statearr_15081_15114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (2))){
var state_15060__$1 = state_15060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15060__$1,(4),in$);
} else {
if((state_val_15061 === (23))){
var inst_15054 = (state_15060[(2)]);
var state_15060__$1 = state_15060;
var statearr_15082_15115 = state_15060__$1;
(statearr_15082_15115[(2)] = inst_15054);

(statearr_15082_15115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (19))){
var inst_15041 = (state_15060[(2)]);
var state_15060__$1 = state_15060;
var statearr_15083_15116 = state_15060__$1;
(statearr_15083_15116[(2)] = inst_15041);

(statearr_15083_15116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (11))){
var inst_15012 = (state_15060[(11)]);
var inst_15026 = (state_15060[(7)]);
var inst_15026__$1 = cljs.core.seq.call(null,inst_15012);
var state_15060__$1 = (function (){var statearr_15084 = state_15060;
(statearr_15084[(7)] = inst_15026__$1);

return statearr_15084;
})();
if(inst_15026__$1){
var statearr_15085_15117 = state_15060__$1;
(statearr_15085_15117[(1)] = (14));

} else {
var statearr_15086_15118 = state_15060__$1;
(statearr_15086_15118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (9))){
var inst_15048 = (state_15060[(2)]);
var inst_15049 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15060__$1 = (function (){var statearr_15087 = state_15060;
(statearr_15087[(15)] = inst_15048);

return statearr_15087;
})();
if(cljs.core.truth_(inst_15049)){
var statearr_15088_15119 = state_15060__$1;
(statearr_15088_15119[(1)] = (21));

} else {
var statearr_15089_15120 = state_15060__$1;
(statearr_15089_15120[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (5))){
var inst_15004 = cljs.core.async.close_BANG_.call(null,out);
var state_15060__$1 = state_15060;
var statearr_15090_15121 = state_15060__$1;
(statearr_15090_15121[(2)] = inst_15004);

(statearr_15090_15121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (14))){
var inst_15026 = (state_15060[(7)]);
var inst_15028 = cljs.core.chunked_seq_QMARK_.call(null,inst_15026);
var state_15060__$1 = state_15060;
if(inst_15028){
var statearr_15091_15122 = state_15060__$1;
(statearr_15091_15122[(1)] = (17));

} else {
var statearr_15092_15123 = state_15060__$1;
(statearr_15092_15123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (16))){
var inst_15044 = (state_15060[(2)]);
var state_15060__$1 = state_15060;
var statearr_15093_15124 = state_15060__$1;
(statearr_15093_15124[(2)] = inst_15044);

(statearr_15093_15124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15061 === (10))){
var inst_15015 = (state_15060[(9)]);
var inst_15013 = (state_15060[(10)]);
var inst_15020 = cljs.core._nth.call(null,inst_15013,inst_15015);
var state_15060__$1 = state_15060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15060__$1,(13),out,inst_15020);
} else {
if((state_val_15061 === (18))){
var inst_15026 = (state_15060[(7)]);
var inst_15035 = cljs.core.first.call(null,inst_15026);
var state_15060__$1 = state_15060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15060__$1,(20),out,inst_15035);
} else {
if((state_val_15061 === (8))){
var inst_15014 = (state_15060[(8)]);
var inst_15015 = (state_15060[(9)]);
var inst_15017 = (inst_15015 < inst_15014);
var inst_15018 = inst_15017;
var state_15060__$1 = state_15060;
if(cljs.core.truth_(inst_15018)){
var statearr_15094_15125 = state_15060__$1;
(statearr_15094_15125[(1)] = (10));

} else {
var statearr_15095_15126 = state_15060__$1;
(statearr_15095_15126[(1)] = (11));

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
var statearr_15099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15099[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__);

(statearr_15099[(1)] = (1));

return statearr_15099;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____1 = (function (state_15060){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15100){if((e15100 instanceof Object)){
var ex__7641__auto__ = e15100;
var statearr_15101_15127 = state_15060;
(statearr_15101_15127[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15128 = state_15060;
state_15060 = G__15128;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__ = function(state_15060){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____1.call(this,state_15060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7638__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_15102 = f__7700__auto__.call(null);
(statearr_15102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_15102;
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
var G__15130 = arguments.length;
switch (G__15130) {
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
var G__15133 = arguments.length;
switch (G__15133) {
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
var G__15136 = arguments.length;
switch (G__15136) {
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
var c__7699__auto___15186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___15186,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___15186,out){
return (function (state_15160){
var state_val_15161 = (state_15160[(1)]);
if((state_val_15161 === (7))){
var inst_15155 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15162_15187 = state_15160__$1;
(statearr_15162_15187[(2)] = inst_15155);

(statearr_15162_15187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (1))){
var inst_15137 = null;
var state_15160__$1 = (function (){var statearr_15163 = state_15160;
(statearr_15163[(7)] = inst_15137);

return statearr_15163;
})();
var statearr_15164_15188 = state_15160__$1;
(statearr_15164_15188[(2)] = null);

(statearr_15164_15188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (4))){
var inst_15140 = (state_15160[(8)]);
var inst_15140__$1 = (state_15160[(2)]);
var inst_15141 = (inst_15140__$1 == null);
var inst_15142 = cljs.core.not.call(null,inst_15141);
var state_15160__$1 = (function (){var statearr_15165 = state_15160;
(statearr_15165[(8)] = inst_15140__$1);

return statearr_15165;
})();
if(inst_15142){
var statearr_15166_15189 = state_15160__$1;
(statearr_15166_15189[(1)] = (5));

} else {
var statearr_15167_15190 = state_15160__$1;
(statearr_15167_15190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (6))){
var state_15160__$1 = state_15160;
var statearr_15168_15191 = state_15160__$1;
(statearr_15168_15191[(2)] = null);

(statearr_15168_15191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (3))){
var inst_15157 = (state_15160[(2)]);
var inst_15158 = cljs.core.async.close_BANG_.call(null,out);
var state_15160__$1 = (function (){var statearr_15169 = state_15160;
(statearr_15169[(9)] = inst_15157);

return statearr_15169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15160__$1,inst_15158);
} else {
if((state_val_15161 === (2))){
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15160__$1,(4),ch);
} else {
if((state_val_15161 === (11))){
var inst_15140 = (state_15160[(8)]);
var inst_15149 = (state_15160[(2)]);
var inst_15137 = inst_15140;
var state_15160__$1 = (function (){var statearr_15170 = state_15160;
(statearr_15170[(7)] = inst_15137);

(statearr_15170[(10)] = inst_15149);

return statearr_15170;
})();
var statearr_15171_15192 = state_15160__$1;
(statearr_15171_15192[(2)] = null);

(statearr_15171_15192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (9))){
var inst_15140 = (state_15160[(8)]);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15160__$1,(11),out,inst_15140);
} else {
if((state_val_15161 === (5))){
var inst_15140 = (state_15160[(8)]);
var inst_15137 = (state_15160[(7)]);
var inst_15144 = cljs.core._EQ_.call(null,inst_15140,inst_15137);
var state_15160__$1 = state_15160;
if(inst_15144){
var statearr_15173_15193 = state_15160__$1;
(statearr_15173_15193[(1)] = (8));

} else {
var statearr_15174_15194 = state_15160__$1;
(statearr_15174_15194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (10))){
var inst_15152 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15175_15195 = state_15160__$1;
(statearr_15175_15195[(2)] = inst_15152);

(statearr_15175_15195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (8))){
var inst_15137 = (state_15160[(7)]);
var tmp15172 = inst_15137;
var inst_15137__$1 = tmp15172;
var state_15160__$1 = (function (){var statearr_15176 = state_15160;
(statearr_15176[(7)] = inst_15137__$1);

return statearr_15176;
})();
var statearr_15177_15196 = state_15160__$1;
(statearr_15177_15196[(2)] = null);

(statearr_15177_15196[(1)] = (2));


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
});})(c__7699__auto___15186,out))
;
return ((function (switch__7637__auto__,c__7699__auto___15186,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_15181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15181[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_15181[(1)] = (1));

return statearr_15181;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_15160){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15182){if((e15182 instanceof Object)){
var ex__7641__auto__ = e15182;
var statearr_15183_15197 = state_15160;
(statearr_15183_15197[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15198 = state_15160;
state_15160 = G__15198;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_15160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_15160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___15186,out))
})();
var state__7701__auto__ = (function (){var statearr_15184 = f__7700__auto__.call(null);
(statearr_15184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___15186);

return statearr_15184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___15186,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15200 = arguments.length;
switch (G__15200) {
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
var c__7699__auto___15269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___15269,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___15269,out){
return (function (state_15238){
var state_val_15239 = (state_15238[(1)]);
if((state_val_15239 === (7))){
var inst_15234 = (state_15238[(2)]);
var state_15238__$1 = state_15238;
var statearr_15240_15270 = state_15238__$1;
(statearr_15240_15270[(2)] = inst_15234);

(statearr_15240_15270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (1))){
var inst_15201 = (new Array(n));
var inst_15202 = inst_15201;
var inst_15203 = (0);
var state_15238__$1 = (function (){var statearr_15241 = state_15238;
(statearr_15241[(7)] = inst_15203);

(statearr_15241[(8)] = inst_15202);

return statearr_15241;
})();
var statearr_15242_15271 = state_15238__$1;
(statearr_15242_15271[(2)] = null);

(statearr_15242_15271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (4))){
var inst_15206 = (state_15238[(9)]);
var inst_15206__$1 = (state_15238[(2)]);
var inst_15207 = (inst_15206__$1 == null);
var inst_15208 = cljs.core.not.call(null,inst_15207);
var state_15238__$1 = (function (){var statearr_15243 = state_15238;
(statearr_15243[(9)] = inst_15206__$1);

return statearr_15243;
})();
if(inst_15208){
var statearr_15244_15272 = state_15238__$1;
(statearr_15244_15272[(1)] = (5));

} else {
var statearr_15245_15273 = state_15238__$1;
(statearr_15245_15273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (15))){
var inst_15228 = (state_15238[(2)]);
var state_15238__$1 = state_15238;
var statearr_15246_15274 = state_15238__$1;
(statearr_15246_15274[(2)] = inst_15228);

(statearr_15246_15274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (13))){
var state_15238__$1 = state_15238;
var statearr_15247_15275 = state_15238__$1;
(statearr_15247_15275[(2)] = null);

(statearr_15247_15275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (6))){
var inst_15203 = (state_15238[(7)]);
var inst_15224 = (inst_15203 > (0));
var state_15238__$1 = state_15238;
if(cljs.core.truth_(inst_15224)){
var statearr_15248_15276 = state_15238__$1;
(statearr_15248_15276[(1)] = (12));

} else {
var statearr_15249_15277 = state_15238__$1;
(statearr_15249_15277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (3))){
var inst_15236 = (state_15238[(2)]);
var state_15238__$1 = state_15238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15238__$1,inst_15236);
} else {
if((state_val_15239 === (12))){
var inst_15202 = (state_15238[(8)]);
var inst_15226 = cljs.core.vec.call(null,inst_15202);
var state_15238__$1 = state_15238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15238__$1,(15),out,inst_15226);
} else {
if((state_val_15239 === (2))){
var state_15238__$1 = state_15238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15238__$1,(4),ch);
} else {
if((state_val_15239 === (11))){
var inst_15218 = (state_15238[(2)]);
var inst_15219 = (new Array(n));
var inst_15202 = inst_15219;
var inst_15203 = (0);
var state_15238__$1 = (function (){var statearr_15250 = state_15238;
(statearr_15250[(7)] = inst_15203);

(statearr_15250[(10)] = inst_15218);

(statearr_15250[(8)] = inst_15202);

return statearr_15250;
})();
var statearr_15251_15278 = state_15238__$1;
(statearr_15251_15278[(2)] = null);

(statearr_15251_15278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (9))){
var inst_15202 = (state_15238[(8)]);
var inst_15216 = cljs.core.vec.call(null,inst_15202);
var state_15238__$1 = state_15238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15238__$1,(11),out,inst_15216);
} else {
if((state_val_15239 === (5))){
var inst_15203 = (state_15238[(7)]);
var inst_15211 = (state_15238[(11)]);
var inst_15206 = (state_15238[(9)]);
var inst_15202 = (state_15238[(8)]);
var inst_15210 = (inst_15202[inst_15203] = inst_15206);
var inst_15211__$1 = (inst_15203 + (1));
var inst_15212 = (inst_15211__$1 < n);
var state_15238__$1 = (function (){var statearr_15252 = state_15238;
(statearr_15252[(12)] = inst_15210);

(statearr_15252[(11)] = inst_15211__$1);

return statearr_15252;
})();
if(cljs.core.truth_(inst_15212)){
var statearr_15253_15279 = state_15238__$1;
(statearr_15253_15279[(1)] = (8));

} else {
var statearr_15254_15280 = state_15238__$1;
(statearr_15254_15280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (14))){
var inst_15231 = (state_15238[(2)]);
var inst_15232 = cljs.core.async.close_BANG_.call(null,out);
var state_15238__$1 = (function (){var statearr_15256 = state_15238;
(statearr_15256[(13)] = inst_15231);

return statearr_15256;
})();
var statearr_15257_15281 = state_15238__$1;
(statearr_15257_15281[(2)] = inst_15232);

(statearr_15257_15281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (10))){
var inst_15222 = (state_15238[(2)]);
var state_15238__$1 = state_15238;
var statearr_15258_15282 = state_15238__$1;
(statearr_15258_15282[(2)] = inst_15222);

(statearr_15258_15282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15239 === (8))){
var inst_15211 = (state_15238[(11)]);
var inst_15202 = (state_15238[(8)]);
var tmp15255 = inst_15202;
var inst_15202__$1 = tmp15255;
var inst_15203 = inst_15211;
var state_15238__$1 = (function (){var statearr_15259 = state_15238;
(statearr_15259[(7)] = inst_15203);

(statearr_15259[(8)] = inst_15202__$1);

return statearr_15259;
})();
var statearr_15260_15283 = state_15238__$1;
(statearr_15260_15283[(2)] = null);

(statearr_15260_15283[(1)] = (2));


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
});})(c__7699__auto___15269,out))
;
return ((function (switch__7637__auto__,c__7699__auto___15269,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_15264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15264[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_15264[(1)] = (1));

return statearr_15264;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_15238){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15265){if((e15265 instanceof Object)){
var ex__7641__auto__ = e15265;
var statearr_15266_15284 = state_15238;
(statearr_15266_15284[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15285 = state_15238;
state_15238 = G__15285;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_15238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_15238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___15269,out))
})();
var state__7701__auto__ = (function (){var statearr_15267 = f__7700__auto__.call(null);
(statearr_15267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___15269);

return statearr_15267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___15269,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15287 = arguments.length;
switch (G__15287) {
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
var c__7699__auto___15360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___15360,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___15360,out){
return (function (state_15329){
var state_val_15330 = (state_15329[(1)]);
if((state_val_15330 === (7))){
var inst_15325 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15331_15361 = state_15329__$1;
(statearr_15331_15361[(2)] = inst_15325);

(statearr_15331_15361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (1))){
var inst_15288 = [];
var inst_15289 = inst_15288;
var inst_15290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15329__$1 = (function (){var statearr_15332 = state_15329;
(statearr_15332[(7)] = inst_15289);

(statearr_15332[(8)] = inst_15290);

return statearr_15332;
})();
var statearr_15333_15362 = state_15329__$1;
(statearr_15333_15362[(2)] = null);

(statearr_15333_15362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (4))){
var inst_15293 = (state_15329[(9)]);
var inst_15293__$1 = (state_15329[(2)]);
var inst_15294 = (inst_15293__$1 == null);
var inst_15295 = cljs.core.not.call(null,inst_15294);
var state_15329__$1 = (function (){var statearr_15334 = state_15329;
(statearr_15334[(9)] = inst_15293__$1);

return statearr_15334;
})();
if(inst_15295){
var statearr_15335_15363 = state_15329__$1;
(statearr_15335_15363[(1)] = (5));

} else {
var statearr_15336_15364 = state_15329__$1;
(statearr_15336_15364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (15))){
var inst_15319 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15337_15365 = state_15329__$1;
(statearr_15337_15365[(2)] = inst_15319);

(statearr_15337_15365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (13))){
var state_15329__$1 = state_15329;
var statearr_15338_15366 = state_15329__$1;
(statearr_15338_15366[(2)] = null);

(statearr_15338_15366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (6))){
var inst_15289 = (state_15329[(7)]);
var inst_15314 = inst_15289.length;
var inst_15315 = (inst_15314 > (0));
var state_15329__$1 = state_15329;
if(cljs.core.truth_(inst_15315)){
var statearr_15339_15367 = state_15329__$1;
(statearr_15339_15367[(1)] = (12));

} else {
var statearr_15340_15368 = state_15329__$1;
(statearr_15340_15368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (3))){
var inst_15327 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15329__$1,inst_15327);
} else {
if((state_val_15330 === (12))){
var inst_15289 = (state_15329[(7)]);
var inst_15317 = cljs.core.vec.call(null,inst_15289);
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15329__$1,(15),out,inst_15317);
} else {
if((state_val_15330 === (2))){
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15329__$1,(4),ch);
} else {
if((state_val_15330 === (11))){
var inst_15297 = (state_15329[(10)]);
var inst_15293 = (state_15329[(9)]);
var inst_15307 = (state_15329[(2)]);
var inst_15308 = [];
var inst_15309 = inst_15308.push(inst_15293);
var inst_15289 = inst_15308;
var inst_15290 = inst_15297;
var state_15329__$1 = (function (){var statearr_15341 = state_15329;
(statearr_15341[(7)] = inst_15289);

(statearr_15341[(11)] = inst_15307);

(statearr_15341[(12)] = inst_15309);

(statearr_15341[(8)] = inst_15290);

return statearr_15341;
})();
var statearr_15342_15369 = state_15329__$1;
(statearr_15342_15369[(2)] = null);

(statearr_15342_15369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (9))){
var inst_15289 = (state_15329[(7)]);
var inst_15305 = cljs.core.vec.call(null,inst_15289);
var state_15329__$1 = state_15329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15329__$1,(11),out,inst_15305);
} else {
if((state_val_15330 === (5))){
var inst_15290 = (state_15329[(8)]);
var inst_15297 = (state_15329[(10)]);
var inst_15293 = (state_15329[(9)]);
var inst_15297__$1 = f.call(null,inst_15293);
var inst_15298 = cljs.core._EQ_.call(null,inst_15297__$1,inst_15290);
var inst_15299 = cljs.core.keyword_identical_QMARK_.call(null,inst_15290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15300 = (inst_15298) || (inst_15299);
var state_15329__$1 = (function (){var statearr_15343 = state_15329;
(statearr_15343[(10)] = inst_15297__$1);

return statearr_15343;
})();
if(cljs.core.truth_(inst_15300)){
var statearr_15344_15370 = state_15329__$1;
(statearr_15344_15370[(1)] = (8));

} else {
var statearr_15345_15371 = state_15329__$1;
(statearr_15345_15371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (14))){
var inst_15322 = (state_15329[(2)]);
var inst_15323 = cljs.core.async.close_BANG_.call(null,out);
var state_15329__$1 = (function (){var statearr_15347 = state_15329;
(statearr_15347[(13)] = inst_15322);

return statearr_15347;
})();
var statearr_15348_15372 = state_15329__$1;
(statearr_15348_15372[(2)] = inst_15323);

(statearr_15348_15372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (10))){
var inst_15312 = (state_15329[(2)]);
var state_15329__$1 = state_15329;
var statearr_15349_15373 = state_15329__$1;
(statearr_15349_15373[(2)] = inst_15312);

(statearr_15349_15373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15330 === (8))){
var inst_15289 = (state_15329[(7)]);
var inst_15297 = (state_15329[(10)]);
var inst_15293 = (state_15329[(9)]);
var inst_15302 = inst_15289.push(inst_15293);
var tmp15346 = inst_15289;
var inst_15289__$1 = tmp15346;
var inst_15290 = inst_15297;
var state_15329__$1 = (function (){var statearr_15350 = state_15329;
(statearr_15350[(7)] = inst_15289__$1);

(statearr_15350[(14)] = inst_15302);

(statearr_15350[(8)] = inst_15290);

return statearr_15350;
})();
var statearr_15351_15374 = state_15329__$1;
(statearr_15351_15374[(2)] = null);

(statearr_15351_15374[(1)] = (2));


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
});})(c__7699__auto___15360,out))
;
return ((function (switch__7637__auto__,c__7699__auto___15360,out){
return (function() {
var cljs$core$async$state_machine__7638__auto__ = null;
var cljs$core$async$state_machine__7638__auto____0 = (function (){
var statearr_15355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15355[(0)] = cljs$core$async$state_machine__7638__auto__);

(statearr_15355[(1)] = (1));

return statearr_15355;
});
var cljs$core$async$state_machine__7638__auto____1 = (function (state_15329){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_15329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e15356){if((e15356 instanceof Object)){
var ex__7641__auto__ = e15356;
var statearr_15357_15375 = state_15329;
(statearr_15357_15375[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15376 = state_15329;
state_15329 = G__15376;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs$core$async$state_machine__7638__auto__ = function(state_15329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7638__auto____1.call(this,state_15329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7638__auto____0;
cljs$core$async$state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7638__auto____1;
return cljs$core$async$state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___15360,out))
})();
var state__7701__auto__ = (function (){var statearr_15358 = f__7700__auto__.call(null);
(statearr_15358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___15360);

return statearr_15358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___15360,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440776939338