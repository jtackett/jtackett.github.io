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
var seq__15953 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__15958 = null;
var count__15959 = (0);
var i__15960 = (0);
while(true){
if((i__15960 < count__15959)){
var h_name = cljs.core._nth.call(null,chunk__15958,i__15960);
var seq__15961_15965 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__15962_15966 = null;
var count__15963_15967 = (0);
var i__15964_15968 = (0);
while(true){
if((i__15964_15968 < count__15963_15967)){
var h_val_15969 = cljs.core._nth.call(null,chunk__15962_15966,i__15964_15968);
xhr.headers.set(h_name,h_val_15969);

var G__15970 = seq__15961_15965;
var G__15971 = chunk__15962_15966;
var G__15972 = count__15963_15967;
var G__15973 = (i__15964_15968 + (1));
seq__15961_15965 = G__15970;
chunk__15962_15966 = G__15971;
count__15963_15967 = G__15972;
i__15964_15968 = G__15973;
continue;
} else {
var temp__4126__auto___15974 = cljs.core.seq.call(null,seq__15961_15965);
if(temp__4126__auto___15974){
var seq__15961_15975__$1 = temp__4126__auto___15974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15961_15975__$1)){
var c__5118__auto___15976 = cljs.core.chunk_first.call(null,seq__15961_15975__$1);
var G__15977 = cljs.core.chunk_rest.call(null,seq__15961_15975__$1);
var G__15978 = c__5118__auto___15976;
var G__15979 = cljs.core.count.call(null,c__5118__auto___15976);
var G__15980 = (0);
seq__15961_15965 = G__15977;
chunk__15962_15966 = G__15978;
count__15963_15967 = G__15979;
i__15964_15968 = G__15980;
continue;
} else {
var h_val_15981 = cljs.core.first.call(null,seq__15961_15975__$1);
xhr.headers.set(h_name,h_val_15981);

var G__15982 = cljs.core.next.call(null,seq__15961_15975__$1);
var G__15983 = null;
var G__15984 = (0);
var G__15985 = (0);
seq__15961_15965 = G__15982;
chunk__15962_15966 = G__15983;
count__15963_15967 = G__15984;
i__15964_15968 = G__15985;
continue;
}
} else {
}
}
break;
}

var G__15986 = seq__15953;
var G__15987 = chunk__15958;
var G__15988 = count__15959;
var G__15989 = (i__15960 + (1));
seq__15953 = G__15986;
chunk__15958 = G__15987;
count__15959 = G__15988;
i__15960 = G__15989;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15953);
if(temp__4126__auto__){
var seq__15953__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15953__$1)){
var c__5118__auto__ = cljs.core.chunk_first.call(null,seq__15953__$1);
var G__15990 = cljs.core.chunk_rest.call(null,seq__15953__$1);
var G__15991 = c__5118__auto__;
var G__15992 = cljs.core.count.call(null,c__5118__auto__);
var G__15993 = (0);
seq__15953 = G__15990;
chunk__15958 = G__15991;
count__15959 = G__15992;
i__15960 = G__15993;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__15953__$1);
var seq__15954_15994 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__15955_15995 = null;
var count__15956_15996 = (0);
var i__15957_15997 = (0);
while(true){
if((i__15957_15997 < count__15956_15996)){
var h_val_15998 = cljs.core._nth.call(null,chunk__15955_15995,i__15957_15997);
xhr.headers.set(h_name,h_val_15998);

var G__15999 = seq__15954_15994;
var G__16000 = chunk__15955_15995;
var G__16001 = count__15956_15996;
var G__16002 = (i__15957_15997 + (1));
seq__15954_15994 = G__15999;
chunk__15955_15995 = G__16000;
count__15956_15996 = G__16001;
i__15957_15997 = G__16002;
continue;
} else {
var temp__4126__auto___16003__$1 = cljs.core.seq.call(null,seq__15954_15994);
if(temp__4126__auto___16003__$1){
var seq__15954_16004__$1 = temp__4126__auto___16003__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15954_16004__$1)){
var c__5118__auto___16005 = cljs.core.chunk_first.call(null,seq__15954_16004__$1);
var G__16006 = cljs.core.chunk_rest.call(null,seq__15954_16004__$1);
var G__16007 = c__5118__auto___16005;
var G__16008 = cljs.core.count.call(null,c__5118__auto___16005);
var G__16009 = (0);
seq__15954_15994 = G__16006;
chunk__15955_15995 = G__16007;
count__15956_15996 = G__16008;
i__15957_15997 = G__16009;
continue;
} else {
var h_val_16010 = cljs.core.first.call(null,seq__15954_16004__$1);
xhr.headers.set(h_name,h_val_16010);

var G__16011 = cljs.core.next.call(null,seq__15954_16004__$1);
var G__16012 = null;
var G__16013 = (0);
var G__16014 = (0);
seq__15954_15994 = G__16011;
chunk__15955_15995 = G__16012;
count__15956_15996 = G__16013;
i__15957_15997 = G__16014;
continue;
}
} else {
}
}
break;
}

var G__16015 = cljs.core.next.call(null,seq__15953__$1);
var G__16016 = null;
var G__16017 = (0);
var G__16018 = (0);
seq__15953 = G__16015;
chunk__15958 = G__16016;
count__15959 = G__16017;
i__15960 = G__16018;
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
return xhr.setResponseType((function (){var G__16020 = response_type;
if(cljs.core._EQ_.call(null,null,G__16020)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__16020)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__16020)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__16020)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__16020)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__16020)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16021){
var map__16024 = p__16021;
var map__16024__$1 = ((cljs.core.seq_QMARK_.call(null,map__16024))?cljs.core.apply.call(null,cljs.core.hash_map,map__16024):map__16024);
var request = map__16024__$1;
var response_type = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var default_headers = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16024__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__4333__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16025 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__16025,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__16025,response_type);

G__16025.setTimeoutInterval(timeout);

G__16025.setWithCredentials(send_credentials);

return G__16025;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16026){
var map__16052 = p__16026;
var map__16052__$1 = ((cljs.core.seq_QMARK_.call(null,map__16052))?cljs.core.apply.call(null,cljs.core.hash_map,map__16052):map__16052);
var request = map__16052__$1;
var cancel = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__16052__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7699__auto___16077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___16077,channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___16077,channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_16063){
var state_val_16064 = (state_16063[(1)]);
if((state_val_16064 === (5))){
var inst_16061 = (state_16063[(2)]);
var state_16063__$1 = state_16063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16063__$1,inst_16061);
} else {
if((state_val_16064 === (4))){
var state_16063__$1 = state_16063;
var statearr_16065_16078 = state_16063__$1;
(statearr_16065_16078[(2)] = null);

(statearr_16065_16078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16064 === (3))){
var inst_16058 = xhr__$1.abort();
var state_16063__$1 = state_16063;
var statearr_16066_16079 = state_16063__$1;
(statearr_16066_16079[(2)] = inst_16058);

(statearr_16066_16079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16064 === (2))){
var inst_16054 = (state_16063[(2)]);
var inst_16055 = xhr__$1.isComplete();
var inst_16056 = cljs.core.not.call(null,inst_16055);
var state_16063__$1 = (function (){var statearr_16067 = state_16063;
(statearr_16067[(7)] = inst_16054);

return statearr_16067;
})();
if(inst_16056){
var statearr_16068_16080 = state_16063__$1;
(statearr_16068_16080[(1)] = (3));

} else {
var statearr_16069_16081 = state_16063__$1;
(statearr_16069_16081[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16064 === (1))){
var state_16063__$1 = state_16063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16063__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__7699__auto___16077,channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__7637__auto__,c__7699__auto___16077,channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var cljs_http$core$xhr_$_state_machine__7638__auto__ = null;
var cljs_http$core$xhr_$_state_machine__7638__auto____0 = (function (){
var statearr_16073 = [null,null,null,null,null,null,null,null];
(statearr_16073[(0)] = cljs_http$core$xhr_$_state_machine__7638__auto__);

(statearr_16073[(1)] = (1));

return statearr_16073;
});
var cljs_http$core$xhr_$_state_machine__7638__auto____1 = (function (state_16063){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_16063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e16074){if((e16074 instanceof Object)){
var ex__7641__auto__ = e16074;
var statearr_16075_16082 = state_16063;
(statearr_16075_16082[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16083 = state_16063;
state_16063 = G__16083;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__7638__auto__ = function(state_16063){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__7638__auto____1.call(this,state_16063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__7638__auto____0;
cljs_http$core$xhr_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__7638__auto____1;
return cljs_http$core$xhr_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___16077,channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__7701__auto__ = (function (){var statearr_16076 = f__7700__auto__.call(null);
(statearr_16076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___16077);

return statearr_16076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___16077,channel,request_url,method,headers__$1,xhr__$1,map__16052,map__16052__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16084){
var map__16100 = p__16084;
var map__16100__$1 = ((cljs.core.seq_QMARK_.call(null,map__16100))?cljs.core.apply.call(null,cljs.core.hash_map,map__16100):map__16100);
var request = map__16100__$1;
var cancel = cljs.core.get.call(null,map__16100__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var callback_name = cljs.core.get.call(null,map__16100__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var timeout = cljs.core.get.call(null,map__16100__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16115 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_16115], null));

if(cljs.core.truth_(cancel)){
var c__7699__auto___16116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___16116,req_16115,channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___16116,req_16115,channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout){
return (function (state_16105){
var state_val_16106 = (state_16105[(1)]);
if((state_val_16106 === (2))){
var inst_16102 = (state_16105[(2)]);
var inst_16103 = jsonp__$1.cancel(req_16115);
var state_16105__$1 = (function (){var statearr_16107 = state_16105;
(statearr_16107[(7)] = inst_16102);

return statearr_16107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16105__$1,inst_16103);
} else {
if((state_val_16106 === (1))){
var state_16105__$1 = state_16105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16105__$1,(2),cancel);
} else {
return null;
}
}
});})(c__7699__auto___16116,req_16115,channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__7637__auto__,c__7699__auto___16116,req_16115,channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout){
return (function() {
var cljs_http$core$jsonp_$_state_machine__7638__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__7638__auto____0 = (function (){
var statearr_16111 = [null,null,null,null,null,null,null,null];
(statearr_16111[(0)] = cljs_http$core$jsonp_$_state_machine__7638__auto__);

(statearr_16111[(1)] = (1));

return statearr_16111;
});
var cljs_http$core$jsonp_$_state_machine__7638__auto____1 = (function (state_16105){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_16105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e16112){if((e16112 instanceof Object)){
var ex__7641__auto__ = e16112;
var statearr_16113_16117 = state_16105;
(statearr_16113_16117[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16118 = state_16105;
state_16105 = G__16118;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__7638__auto__ = function(state_16105){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__7638__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__7638__auto____1.call(this,state_16105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__7638__auto____0;
cljs_http$core$jsonp_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__7638__auto____1;
return cljs_http$core$jsonp_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___16116,req_16115,channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout))
})();
var state__7701__auto__ = (function (){var statearr_16114 = f__7700__auto__.call(null);
(statearr_16114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___16116);

return statearr_16114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___16116,req_16115,channel,jsonp__$1,map__16100,map__16100__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16119){
var map__16121 = p__16119;
var map__16121__$1 = ((cljs.core.seq_QMARK_.call(null,map__16121))?cljs.core.apply.call(null,cljs.core.hash_map,map__16121):map__16121);
var request__$1 = map__16121__$1;
var request_method = cljs.core.get.call(null,map__16121__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1440777370941