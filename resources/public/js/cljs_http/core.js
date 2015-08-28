// Compiled by ClojureScript 0.0-3208 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 * with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var req = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__15949 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__15954 = null;
var count__15955 = (0);
var i__15956 = (0);
while(true){
if((i__15956 < count__15955)){
var h_name = cljs.core._nth.call(null,chunk__15954,i__15956);
var seq__15957_15961 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__15958_15962 = null;
var count__15959_15963 = (0);
var i__15960_15964 = (0);
while(true){
if((i__15960_15964 < count__15959_15963)){
var h_val_15965 = cljs.core._nth.call(null,chunk__15958_15962,i__15960_15964);
xhr.headers.set(h_name,h_val_15965);

var G__15966 = seq__15957_15961;
var G__15967 = chunk__15958_15962;
var G__15968 = count__15959_15963;
var G__15969 = (i__15960_15964 + (1));
seq__15957_15961 = G__15966;
chunk__15958_15962 = G__15967;
count__15959_15963 = G__15968;
i__15960_15964 = G__15969;
continue;
} else {
var temp__4126__auto___15970 = cljs.core.seq.call(null,seq__15957_15961);
if(temp__4126__auto___15970){
var seq__15957_15971__$1 = temp__4126__auto___15970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15957_15971__$1)){
var c__5118__auto___15972 = cljs.core.chunk_first.call(null,seq__15957_15971__$1);
var G__15973 = cljs.core.chunk_rest.call(null,seq__15957_15971__$1);
var G__15974 = c__5118__auto___15972;
var G__15975 = cljs.core.count.call(null,c__5118__auto___15972);
var G__15976 = (0);
seq__15957_15961 = G__15973;
chunk__15958_15962 = G__15974;
count__15959_15963 = G__15975;
i__15960_15964 = G__15976;
continue;
} else {
var h_val_15977 = cljs.core.first.call(null,seq__15957_15971__$1);
xhr.headers.set(h_name,h_val_15977);

var G__15978 = cljs.core.next.call(null,seq__15957_15971__$1);
var G__15979 = null;
var G__15980 = (0);
var G__15981 = (0);
seq__15957_15961 = G__15978;
chunk__15958_15962 = G__15979;
count__15959_15963 = G__15980;
i__15960_15964 = G__15981;
continue;
}
} else {
}
}
break;
}

var G__15982 = seq__15949;
var G__15983 = chunk__15954;
var G__15984 = count__15955;
var G__15985 = (i__15956 + (1));
seq__15949 = G__15982;
chunk__15954 = G__15983;
count__15955 = G__15984;
i__15956 = G__15985;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15949);
if(temp__4126__auto__){
var seq__15949__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15949__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__15949__$1);
var G__15986 = cljs.core.chunk_rest.call(null,seq__15949__$1);
var G__15987 = c__5118__auto__;
var G__15988 = cljs.core.count.call(null,c__5118__auto__);
var G__15989 = (0);
seq__15949 = G__15986;
chunk__15954 = G__15987;
count__15955 = G__15988;
i__15956 = G__15989;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__15949__$1);
var seq__15950_15990 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__15951_15991 = null;
var count__15952_15992 = (0);
var i__15953_15993 = (0);
while(true){
if((i__15953_15993 < count__15952_15992)){
var h_val_15994 = cljs.core._nth.call(null,chunk__15951_15991,i__15953_15993);
xhr.headers.set(h_name,h_val_15994);

var G__15995 = seq__15950_15990;
var G__15996 = chunk__15951_15991;
var G__15997 = count__15952_15992;
var G__15998 = (i__15953_15993 + (1));
seq__15950_15990 = G__15995;
chunk__15951_15991 = G__15996;
count__15952_15992 = G__15997;
i__15953_15993 = G__15998;
continue;
} else {
var temp__4126__auto___15999__$1 = cljs.core.seq.call(null,seq__15950_15990);
if(temp__4126__auto___15999__$1){
var seq__15950_16000__$1 = temp__4126__auto___15999__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15950_16000__$1)){
var c__5118__auto___16001 = cljs.core.chunk_first.call(null,seq__15950_16000__$1);
var G__16002 = cljs.core.chunk_rest.call(null,seq__15950_16000__$1);
var G__16003 = c__5118__auto___16001;
var G__16004 = cljs.core.count.call(null,c__5118__auto___16001);
var G__16005 = (0);
seq__15950_15990 = G__16002;
chunk__15951_15991 = G__16003;
count__15952_15992 = G__16004;
i__15953_15993 = G__16005;
continue;
} else {
var h_val_16006 = cljs.core.first.call(null,seq__15950_16000__$1);
xhr.headers.set(h_name,h_val_16006);

var G__16007 = cljs.core.next.call(null,seq__15950_16000__$1);
var G__16008 = null;
var G__16009 = (0);
var G__16010 = (0);
seq__15950_15990 = G__16007;
chunk__15951_15991 = G__16008;
count__15952_15992 = G__16009;
i__15953_15993 = G__16010;
continue;
}
} else {
}
}
break;
}

var G__16011 = cljs.core.next.call(null,seq__15949__$1);
var G__16012 = null;
var G__16013 = (0);
var G__16014 = (0);
seq__15949 = G__16011;
chunk__15954 = G__16012;
count__15955 = G__16013;
i__15956 = G__16014;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16016 = response_type;
if(cljs.core._EQ_.call(null,null,G__16016)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__16016)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__16016)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__16016)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__16016)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__16016)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16017){
var map__16020 = p__16017;
var map__16020__$1 = ((cljs.core.seq_QMARK_.call(null,map__16020))?cljs.core.apply.call(null,cljs.core.hash_map,map__16020):map__16020);
var request = map__16020__$1;
var response_type = cljs.core.get.call(null,map__16020__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var default_headers = cljs.core.get.call(null,map__16020__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16020__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__4333__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16021 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__16021,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__16021,response_type);

G__16021.setTimeoutInterval(timeout);

G__16021.setWithCredentials(send_credentials);

return G__16021;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16022){
var map__16048 = p__16022;
var map__16048__$1 = ((cljs.core.seq_QMARK_.call(null,map__16048))?cljs.core.apply.call(null,cljs.core.hash_map,map__16048):map__16048);
var request = map__16048__$1;
var cancel = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4333__auto__ = request_method;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7699__auto___16073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___16073,channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___16073,channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_16059){
var state_val_16060 = (state_16059[(1)]);
if((state_val_16060 === (5))){
var inst_16057 = (state_16059[(2)]);
var state_16059__$1 = state_16059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16059__$1,inst_16057);
} else {
if((state_val_16060 === (4))){
var state_16059__$1 = state_16059;
var statearr_16061_16074 = state_16059__$1;
(statearr_16061_16074[(2)] = null);

(statearr_16061_16074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (3))){
var inst_16054 = xhr__$1.abort();
var state_16059__$1 = state_16059;
var statearr_16062_16075 = state_16059__$1;
(statearr_16062_16075[(2)] = inst_16054);

(statearr_16062_16075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (2))){
var inst_16050 = (state_16059[(2)]);
var inst_16051 = xhr__$1.isComplete();
var inst_16052 = cljs.core.not.call(null,inst_16051);
var state_16059__$1 = (function (){var statearr_16063 = state_16059;
(statearr_16063[(7)] = inst_16050);

return statearr_16063;
})();
if(inst_16052){
var statearr_16064_16076 = state_16059__$1;
(statearr_16064_16076[(1)] = (3));

} else {
var statearr_16065_16077 = state_16059__$1;
(statearr_16065_16077[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (1))){
var state_16059__$1 = state_16059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16059__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__7699__auto___16073,channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__7637__auto__,c__7699__auto___16073,channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var cljs_http$core$xhr_$_state_machine__7638__auto__ = null;
var cljs_http$core$xhr_$_state_machine__7638__auto____0 = (function (){
var statearr_16069 = [null,null,null,null,null,null,null,null];
(statearr_16069[(0)] = cljs_http$core$xhr_$_state_machine__7638__auto__);

(statearr_16069[(1)] = (1));

return statearr_16069;
});
var cljs_http$core$xhr_$_state_machine__7638__auto____1 = (function (state_16059){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_16059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e16070){if((e16070 instanceof Object)){
var ex__7641__auto__ = e16070;
var statearr_16071_16078 = state_16059;
(statearr_16071_16078[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16079 = state_16059;
state_16059 = G__16079;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__7638__auto__ = function(state_16059){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__7638__auto____1.call(this,state_16059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__7638__auto____0;
cljs_http$core$xhr_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__7638__auto____1;
return cljs_http$core$xhr_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___16073,channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__7701__auto__ = (function (){var statearr_16072 = f__7700__auto__.call(null);
(statearr_16072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___16073);

return statearr_16072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___16073,channel,request_url,method,headers__$1,xhr__$1,map__16048,map__16048__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16080){
var map__16096 = p__16080;
var map__16096__$1 = ((cljs.core.seq_QMARK_.call(null,map__16096))?cljs.core.apply.call(null,cljs.core.hash_map,map__16096):map__16096);
var request = map__16096__$1;
var cancel = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var callback_name = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var timeout = cljs.core.get.call(null,map__16096__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16111 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_16111], null));

if(cljs.core.truth_(cancel)){
var c__7699__auto___16112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___16112,req_16111,channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___16112,req_16111,channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout){
return (function (state_16101){
var state_val_16102 = (state_16101[(1)]);
if((state_val_16102 === (2))){
var inst_16098 = (state_16101[(2)]);
var inst_16099 = jsonp__$1.cancel(req_16111);
var state_16101__$1 = (function (){var statearr_16103 = state_16101;
(statearr_16103[(7)] = inst_16098);

return statearr_16103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16101__$1,inst_16099);
} else {
if((state_val_16102 === (1))){
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16101__$1,(2),cancel);
} else {
return null;
}
}
});})(c__7699__auto___16112,req_16111,channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__7637__auto__,c__7699__auto___16112,req_16111,channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout){
return (function() {
var cljs_http$core$jsonp_$_state_machine__7638__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__7638__auto____0 = (function (){
var statearr_16107 = [null,null,null,null,null,null,null,null];
(statearr_16107[(0)] = cljs_http$core$jsonp_$_state_machine__7638__auto__);

(statearr_16107[(1)] = (1));

return statearr_16107;
});
var cljs_http$core$jsonp_$_state_machine__7638__auto____1 = (function (state_16101){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_16101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e16108){if((e16108 instanceof Object)){
var ex__7641__auto__ = e16108;
var statearr_16109_16113 = state_16101;
(statearr_16109_16113[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16114 = state_16101;
state_16101 = G__16114;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__7638__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__7638__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__7638__auto____0;
cljs_http$core$jsonp_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__7638__auto____1;
return cljs_http$core$jsonp_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___16112,req_16111,channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout))
})();
var state__7701__auto__ = (function (){var statearr_16110 = f__7700__auto__.call(null);
(statearr_16110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___16112);

return statearr_16110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___16112,req_16111,channel,jsonp__$1,map__16096,map__16096__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16115){
var map__16117 = p__16115;
var map__16117__$1 = ((cljs.core.seq_QMARK_.call(null,map__16117))?cljs.core.apply.call(null,cljs.core.hash_map,map__16117):map__16117);
var request__$1 = map__16117__$1;
var request_method = cljs.core.get.call(null,map__16117__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1440775509285