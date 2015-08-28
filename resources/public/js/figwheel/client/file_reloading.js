// Compiled by ClojureScript 0.0-3208 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__17879_SHARP_,p2__17880_SHARP_){
var and__4321__auto__ = p1__17879_SHARP_;
if(cljs.core.truth_(and__4321__auto__)){
return p2__17880_SHARP_;
} else {
return and__4321__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4333__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4333__auto__){
return or__4333__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17882_SHARP_,p2__17881_SHARP_){
return [cljs.core.str(p2__17881_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4333__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4333__auto__){
return or__4333__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4333__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5232__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5232__auto__,method_table__5228__auto__,prefer_table__5229__auto__,method_cache__5230__auto__,cached_hierarchy__5231__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17883){
var map__17884 = p__17883;
var map__17884__$1 = ((cljs.core.seq_QMARK_.call(null,map__17884))?cljs.core.apply.call(null,cljs.core.hash_map,map__17884):map__17884);
var file = cljs.core.get.call(null,map__17884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__17885){
var map__17886 = p__17885;
var map__17886__$1 = ((cljs.core.seq_QMARK_.call(null,map__17886))?cljs.core.apply.call(null,cljs.core.hash_map,map__17886):map__17886);
var namespace = cljs.core.get.call(null,map__17886__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5232__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5232__auto__,method_table__5228__auto__,prefer_table__5229__auto__,method_cache__5230__auto__,cached_hierarchy__5231__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e17887){if((e17887 instanceof Error)){
var e = e17887;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e17887;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__17889 = arguments.length;
switch (G__17889) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__17891,callback){
var map__17893 = p__17891;
var map__17893__$1 = ((cljs.core.seq_QMARK_.call(null,map__17893))?cljs.core.apply.call(null,cljs.core.hash_map,map__17893):map__17893);
var file_msg = map__17893__$1;
var request_url = cljs.core.get.call(null,map__17893__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__17893,map__17893__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__17893,map__17893__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__17894){
var map__17896 = p__17894;
var map__17896__$1 = ((cljs.core.seq_QMARK_.call(null,map__17896))?cljs.core.apply.call(null,cljs.core.hash_map,map__17896):map__17896);
var file_msg = map__17896__$1;
var meta_data = cljs.core.get.call(null,map__17896__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__17896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4333__auto__ = meta_data;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4321__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4321__auto__){
var or__4333__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
var or__4333__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4333__auto____$1)){
return or__4333__auto____$1;
} else {
var and__4321__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4321__auto____$1){
var or__4333__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4333__auto____$2){
return or__4333__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4321__auto____$1;
}
}
}
} else {
return and__4321__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__17897,callback){
var map__17899 = p__17897;
var map__17899__$1 = ((cljs.core.seq_QMARK_.call(null,map__17899))?cljs.core.apply.call(null,cljs.core.hash_map,map__17899):map__17899);
var file_msg = map__17899__$1;
var namespace = cljs.core.get.call(null,map__17899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__17899__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7699__auto___17986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___17986,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___17986,out){
return (function (state_17968){
var state_val_17969 = (state_17968[(1)]);
if((state_val_17969 === (7))){
var inst_17952 = (state_17968[(7)]);
var inst_17958 = (state_17968[(2)]);
var inst_17959 = cljs.core.async.put_BANG_.call(null,out,inst_17958);
var inst_17948 = inst_17952;
var state_17968__$1 = (function (){var statearr_17970 = state_17968;
(statearr_17970[(8)] = inst_17959);

(statearr_17970[(9)] = inst_17948);

return statearr_17970;
})();
var statearr_17971_17987 = state_17968__$1;
(statearr_17971_17987[(2)] = null);

(statearr_17971_17987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17969 === (6))){
var inst_17964 = (state_17968[(2)]);
var state_17968__$1 = state_17968;
var statearr_17972_17988 = state_17968__$1;
(statearr_17972_17988[(2)] = inst_17964);

(statearr_17972_17988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17969 === (5))){
var inst_17962 = cljs.core.async.close_BANG_.call(null,out);
var state_17968__$1 = state_17968;
var statearr_17973_17989 = state_17968__$1;
(statearr_17973_17989[(2)] = inst_17962);

(statearr_17973_17989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17969 === (4))){
var inst_17951 = (state_17968[(10)]);
var inst_17956 = figwheel.client.file_reloading.reload_js_file.call(null,inst_17951);
var state_17968__$1 = state_17968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17968__$1,(7),inst_17956);
} else {
if((state_val_17969 === (3))){
var inst_17966 = (state_17968[(2)]);
var state_17968__$1 = state_17968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17968__$1,inst_17966);
} else {
if((state_val_17969 === (2))){
var inst_17948 = (state_17968[(9)]);
var inst_17951 = (state_17968[(10)]);
var inst_17951__$1 = cljs.core.nth.call(null,inst_17948,(0),null);
var inst_17952 = cljs.core.nthnext.call(null,inst_17948,(1));
var inst_17953 = (inst_17951__$1 == null);
var inst_17954 = cljs.core.not.call(null,inst_17953);
var state_17968__$1 = (function (){var statearr_17974 = state_17968;
(statearr_17974[(10)] = inst_17951__$1);

(statearr_17974[(7)] = inst_17952);

return statearr_17974;
})();
if(inst_17954){
var statearr_17975_17990 = state_17968__$1;
(statearr_17975_17990[(1)] = (4));

} else {
var statearr_17976_17991 = state_17968__$1;
(statearr_17976_17991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17969 === (1))){
var inst_17946 = cljs.core.nth.call(null,files,(0),null);
var inst_17947 = cljs.core.nthnext.call(null,files,(1));
var inst_17948 = files;
var state_17968__$1 = (function (){var statearr_17977 = state_17968;
(statearr_17977[(11)] = inst_17946);

(statearr_17977[(12)] = inst_17947);

(statearr_17977[(9)] = inst_17948);

return statearr_17977;
})();
var statearr_17978_17992 = state_17968__$1;
(statearr_17978_17992[(2)] = null);

(statearr_17978_17992[(1)] = (2));


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
});})(c__7699__auto___17986,out))
;
return ((function (switch__7637__auto__,c__7699__auto___17986,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____0 = (function (){
var statearr_17982 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17982[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__);

(statearr_17982[(1)] = (1));

return statearr_17982;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____1 = (function (state_17968){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17983){if((e17983 instanceof Object)){
var ex__7641__auto__ = e17983;
var statearr_17984_17993 = state_17968;
(statearr_17984_17993[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17994 = state_17968;
state_17968 = G__17994;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__ = function(state_17968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____1.call(this,state_17968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___17986,out))
})();
var state__7701__auto__ = (function (){var statearr_17985 = f__7700__auto__.call(null);
(statearr_17985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17986);

return statearr_17985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___17986,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__17995,p__17996){
var map__17999 = p__17995;
var map__17999__$1 = ((cljs.core.seq_QMARK_.call(null,map__17999))?cljs.core.apply.call(null,cljs.core.hash_map,map__17999):map__17999);
var opts = map__17999__$1;
var url_rewriter = cljs.core.get.call(null,map__17999__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__18000 = p__17996;
var map__18000__$1 = ((cljs.core.seq_QMARK_.call(null,map__18000))?cljs.core.apply.call(null,cljs.core.hash_map,map__18000):map__18000);
var file_msg = map__18000__$1;
var file = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__18001){
var map__18004 = p__18001;
var map__18004__$1 = ((cljs.core.seq_QMARK_.call(null,map__18004))?cljs.core.apply.call(null,cljs.core.hash_map,map__18004):map__18004);
var file = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4321__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4321__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4321__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e18005){var e = e18005;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__18010,p__18011){
var map__18212 = p__18010;
var map__18212__$1 = ((cljs.core.seq_QMARK_.call(null,map__18212))?cljs.core.apply.call(null,cljs.core.hash_map,map__18212):map__18212);
var opts = map__18212__$1;
var load_unchanged_files = cljs.core.get.call(null,map__18212__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__18212__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__18212__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__18213 = p__18011;
var map__18213__$1 = ((cljs.core.seq_QMARK_.call(null,map__18213))?cljs.core.apply.call(null,cljs.core.hash_map,map__18213):map__18213);
var msg = map__18213__$1;
var files = cljs.core.get.call(null,map__18213__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (state_18337){
var state_val_18338 = (state_18337[(1)]);
if((state_val_18338 === (7))){
var inst_18224 = (state_18337[(7)]);
var inst_18225 = (state_18337[(8)]);
var inst_18227 = (state_18337[(9)]);
var inst_18226 = (state_18337[(10)]);
var inst_18232 = cljs.core._nth.call(null,inst_18225,inst_18227);
var inst_18233 = figwheel.client.file_reloading.eval_body.call(null,inst_18232);
var inst_18234 = (inst_18227 + (1));
var tmp18339 = inst_18224;
var tmp18340 = inst_18225;
var tmp18341 = inst_18226;
var inst_18224__$1 = tmp18339;
var inst_18225__$1 = tmp18340;
var inst_18226__$1 = tmp18341;
var inst_18227__$1 = inst_18234;
var state_18337__$1 = (function (){var statearr_18342 = state_18337;
(statearr_18342[(7)] = inst_18224__$1);

(statearr_18342[(11)] = inst_18233);

(statearr_18342[(8)] = inst_18225__$1);

(statearr_18342[(9)] = inst_18227__$1);

(statearr_18342[(10)] = inst_18226__$1);

return statearr_18342;
})();
var statearr_18343_18412 = state_18337__$1;
(statearr_18343_18412[(2)] = null);

(statearr_18343_18412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (20))){
var inst_18276 = (state_18337[(12)]);
var inst_18269 = (state_18337[(13)]);
var inst_18273 = (state_18337[(14)]);
var inst_18274 = (state_18337[(15)]);
var inst_18270 = (state_18337[(16)]);
var inst_18279 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_18281 = (function (){var files_not_loaded = inst_18276;
var res = inst_18274;
var res_SINGLEQUOTE_ = inst_18273;
var files_SINGLEQUOTE_ = inst_18270;
var all_files = inst_18269;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18276,inst_18269,inst_18273,inst_18274,inst_18270,inst_18279,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (p__18280){
var map__18344 = p__18280;
var map__18344__$1 = ((cljs.core.seq_QMARK_.call(null,map__18344))?cljs.core.apply.call(null,cljs.core.hash_map,map__18344):map__18344);
var file = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__18344__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18276,inst_18269,inst_18273,inst_18274,inst_18270,inst_18279,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18282 = cljs.core.map.call(null,inst_18281,inst_18274);
var inst_18283 = cljs.core.pr_str.call(null,inst_18282);
var inst_18284 = figwheel.client.utils.log.call(null,inst_18283);
var inst_18285 = (function (){var files_not_loaded = inst_18276;
var res = inst_18274;
var res_SINGLEQUOTE_ = inst_18273;
var files_SINGLEQUOTE_ = inst_18270;
var all_files = inst_18269;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18276,inst_18269,inst_18273,inst_18274,inst_18270,inst_18279,inst_18281,inst_18282,inst_18283,inst_18284,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18276,inst_18269,inst_18273,inst_18274,inst_18270,inst_18279,inst_18281,inst_18282,inst_18283,inst_18284,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18286 = setTimeout(inst_18285,(10));
var state_18337__$1 = (function (){var statearr_18345 = state_18337;
(statearr_18345[(17)] = inst_18279);

(statearr_18345[(18)] = inst_18284);

return statearr_18345;
})();
var statearr_18346_18413 = state_18337__$1;
(statearr_18346_18413[(2)] = inst_18286);

(statearr_18346_18413[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (27))){
var inst_18296 = (state_18337[(19)]);
var state_18337__$1 = state_18337;
var statearr_18347_18414 = state_18337__$1;
(statearr_18347_18414[(2)] = inst_18296);

(statearr_18347_18414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (1))){
var inst_18216 = (state_18337[(20)]);
var inst_18214 = before_jsload.call(null,files);
var inst_18215 = (function (){return ((function (inst_18216,inst_18214,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (p1__18006_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18006_SHARP_);
});
;})(inst_18216,inst_18214,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18216__$1 = cljs.core.filter.call(null,inst_18215,files);
var inst_18217 = cljs.core.not_empty.call(null,inst_18216__$1);
var state_18337__$1 = (function (){var statearr_18348 = state_18337;
(statearr_18348[(20)] = inst_18216__$1);

(statearr_18348[(21)] = inst_18214);

return statearr_18348;
})();
if(cljs.core.truth_(inst_18217)){
var statearr_18349_18415 = state_18337__$1;
(statearr_18349_18415[(1)] = (2));

} else {
var statearr_18350_18416 = state_18337__$1;
(statearr_18350_18416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (24))){
var state_18337__$1 = state_18337;
var statearr_18351_18417 = state_18337__$1;
(statearr_18351_18417[(2)] = null);

(statearr_18351_18417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (4))){
var inst_18261 = (state_18337[(2)]);
var inst_18262 = (function (){return ((function (inst_18261,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (p1__18007_SHARP_){
var and__4321__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__18007_SHARP_);
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18007_SHARP_));
} else {
return and__4321__auto__;
}
});
;})(inst_18261,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18263 = cljs.core.filter.call(null,inst_18262,files);
var state_18337__$1 = (function (){var statearr_18352 = state_18337;
(statearr_18352[(22)] = inst_18263);

(statearr_18352[(23)] = inst_18261);

return statearr_18352;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_18353_18418 = state_18337__$1;
(statearr_18353_18418[(1)] = (16));

} else {
var statearr_18354_18419 = state_18337__$1;
(statearr_18354_18419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (15))){
var inst_18251 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18355_18420 = state_18337__$1;
(statearr_18355_18420[(2)] = inst_18251);

(statearr_18355_18420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (21))){
var state_18337__$1 = state_18337;
var statearr_18356_18421 = state_18337__$1;
(statearr_18356_18421[(2)] = null);

(statearr_18356_18421[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (31))){
var inst_18304 = (state_18337[(24)]);
var inst_18314 = (state_18337[(2)]);
var inst_18315 = cljs.core.not_empty.call(null,inst_18304);
var state_18337__$1 = (function (){var statearr_18357 = state_18337;
(statearr_18357[(25)] = inst_18314);

return statearr_18357;
})();
if(cljs.core.truth_(inst_18315)){
var statearr_18358_18422 = state_18337__$1;
(statearr_18358_18422[(1)] = (32));

} else {
var statearr_18359_18423 = state_18337__$1;
(statearr_18359_18423[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (32))){
var inst_18304 = (state_18337[(24)]);
var inst_18317 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18304);
var inst_18318 = cljs.core.pr_str.call(null,inst_18317);
var inst_18319 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_18318)].join('');
var inst_18320 = figwheel.client.utils.log.call(null,inst_18319);
var state_18337__$1 = state_18337;
var statearr_18360_18424 = state_18337__$1;
(statearr_18360_18424[(2)] = inst_18320);

(statearr_18360_18424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (33))){
var state_18337__$1 = state_18337;
var statearr_18361_18425 = state_18337__$1;
(statearr_18361_18425[(2)] = null);

(statearr_18361_18425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (13))){
var inst_18237 = (state_18337[(26)]);
var inst_18241 = cljs.core.chunk_first.call(null,inst_18237);
var inst_18242 = cljs.core.chunk_rest.call(null,inst_18237);
var inst_18243 = cljs.core.count.call(null,inst_18241);
var inst_18224 = inst_18242;
var inst_18225 = inst_18241;
var inst_18226 = inst_18243;
var inst_18227 = (0);
var state_18337__$1 = (function (){var statearr_18362 = state_18337;
(statearr_18362[(7)] = inst_18224);

(statearr_18362[(8)] = inst_18225);

(statearr_18362[(9)] = inst_18227);

(statearr_18362[(10)] = inst_18226);

return statearr_18362;
})();
var statearr_18363_18426 = state_18337__$1;
(statearr_18363_18426[(2)] = null);

(statearr_18363_18426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (22))){
var inst_18276 = (state_18337[(12)]);
var inst_18289 = (state_18337[(2)]);
var inst_18290 = cljs.core.not_empty.call(null,inst_18276);
var state_18337__$1 = (function (){var statearr_18364 = state_18337;
(statearr_18364[(27)] = inst_18289);

return statearr_18364;
})();
if(cljs.core.truth_(inst_18290)){
var statearr_18365_18427 = state_18337__$1;
(statearr_18365_18427[(1)] = (23));

} else {
var statearr_18366_18428 = state_18337__$1;
(statearr_18366_18428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (36))){
var state_18337__$1 = state_18337;
var statearr_18367_18429 = state_18337__$1;
(statearr_18367_18429[(2)] = null);

(statearr_18367_18429[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (29))){
var inst_18305 = (state_18337[(28)]);
var inst_18308 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18305);
var inst_18309 = cljs.core.pr_str.call(null,inst_18308);
var inst_18310 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_18309)].join('');
var inst_18311 = figwheel.client.utils.log.call(null,inst_18310);
var state_18337__$1 = state_18337;
var statearr_18368_18430 = state_18337__$1;
(statearr_18368_18430[(2)] = inst_18311);

(statearr_18368_18430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (6))){
var inst_18258 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18369_18431 = state_18337__$1;
(statearr_18369_18431[(2)] = inst_18258);

(statearr_18369_18431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (28))){
var inst_18305 = (state_18337[(28)]);
var inst_18302 = (state_18337[(2)]);
var inst_18303 = cljs.core.get.call(null,inst_18302,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_18304 = cljs.core.get.call(null,inst_18302,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_18305__$1 = cljs.core.get.call(null,inst_18302,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_18306 = cljs.core.not_empty.call(null,inst_18305__$1);
var state_18337__$1 = (function (){var statearr_18370 = state_18337;
(statearr_18370[(24)] = inst_18304);

(statearr_18370[(28)] = inst_18305__$1);

(statearr_18370[(29)] = inst_18303);

return statearr_18370;
})();
if(cljs.core.truth_(inst_18306)){
var statearr_18371_18432 = state_18337__$1;
(statearr_18371_18432[(1)] = (29));

} else {
var statearr_18372_18433 = state_18337__$1;
(statearr_18372_18433[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (25))){
var inst_18335 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18337__$1,inst_18335);
} else {
if((state_val_18338 === (34))){
var inst_18303 = (state_18337[(29)]);
var inst_18323 = (state_18337[(2)]);
var inst_18324 = cljs.core.not_empty.call(null,inst_18303);
var state_18337__$1 = (function (){var statearr_18373 = state_18337;
(statearr_18373[(30)] = inst_18323);

return statearr_18373;
})();
if(cljs.core.truth_(inst_18324)){
var statearr_18374_18434 = state_18337__$1;
(statearr_18374_18434[(1)] = (35));

} else {
var statearr_18375_18435 = state_18337__$1;
(statearr_18375_18435[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (17))){
var inst_18263 = (state_18337[(22)]);
var state_18337__$1 = state_18337;
var statearr_18376_18436 = state_18337__$1;
(statearr_18376_18436[(2)] = inst_18263);

(statearr_18376_18436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (3))){
var state_18337__$1 = state_18337;
var statearr_18377_18437 = state_18337__$1;
(statearr_18377_18437[(2)] = null);

(statearr_18377_18437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (12))){
var inst_18254 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18378_18438 = state_18337__$1;
(statearr_18378_18438[(2)] = inst_18254);

(statearr_18378_18438[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (2))){
var inst_18216 = (state_18337[(20)]);
var inst_18223 = cljs.core.seq.call(null,inst_18216);
var inst_18224 = inst_18223;
var inst_18225 = null;
var inst_18226 = (0);
var inst_18227 = (0);
var state_18337__$1 = (function (){var statearr_18379 = state_18337;
(statearr_18379[(7)] = inst_18224);

(statearr_18379[(8)] = inst_18225);

(statearr_18379[(9)] = inst_18227);

(statearr_18379[(10)] = inst_18226);

return statearr_18379;
})();
var statearr_18380_18439 = state_18337__$1;
(statearr_18380_18439[(2)] = null);

(statearr_18380_18439[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (23))){
var inst_18276 = (state_18337[(12)]);
var inst_18296 = (state_18337[(19)]);
var inst_18269 = (state_18337[(13)]);
var inst_18273 = (state_18337[(14)]);
var inst_18274 = (state_18337[(15)]);
var inst_18270 = (state_18337[(16)]);
var inst_18292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_18295 = (function (){var files_not_loaded = inst_18276;
var res = inst_18274;
var res_SINGLEQUOTE_ = inst_18273;
var files_SINGLEQUOTE_ = inst_18270;
var all_files = inst_18269;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18276,inst_18296,inst_18269,inst_18273,inst_18274,inst_18270,inst_18292,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (p__18294){
var map__18381 = p__18294;
var map__18381__$1 = ((cljs.core.seq_QMARK_.call(null,map__18381))?cljs.core.apply.call(null,cljs.core.hash_map,map__18381):map__18381);
var meta_data = cljs.core.get.call(null,map__18381__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18276,inst_18296,inst_18269,inst_18273,inst_18274,inst_18270,inst_18292,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18296__$1 = cljs.core.group_by.call(null,inst_18295,inst_18276);
var inst_18297 = cljs.core.seq_QMARK_.call(null,inst_18296__$1);
var state_18337__$1 = (function (){var statearr_18382 = state_18337;
(statearr_18382[(19)] = inst_18296__$1);

(statearr_18382[(31)] = inst_18292);

return statearr_18382;
})();
if(inst_18297){
var statearr_18383_18440 = state_18337__$1;
(statearr_18383_18440[(1)] = (26));

} else {
var statearr_18384_18441 = state_18337__$1;
(statearr_18384_18441[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (35))){
var inst_18303 = (state_18337[(29)]);
var inst_18326 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18303);
var inst_18327 = cljs.core.pr_str.call(null,inst_18326);
var inst_18328 = [cljs.core.str("not required: "),cljs.core.str(inst_18327)].join('');
var inst_18329 = figwheel.client.utils.log.call(null,inst_18328);
var state_18337__$1 = state_18337;
var statearr_18385_18442 = state_18337__$1;
(statearr_18385_18442[(2)] = inst_18329);

(statearr_18385_18442[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (19))){
var inst_18269 = (state_18337[(13)]);
var inst_18273 = (state_18337[(14)]);
var inst_18274 = (state_18337[(15)]);
var inst_18270 = (state_18337[(16)]);
var inst_18273__$1 = (state_18337[(2)]);
var inst_18274__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_18273__$1);
var inst_18275 = (function (){var res = inst_18274__$1;
var res_SINGLEQUOTE_ = inst_18273__$1;
var files_SINGLEQUOTE_ = inst_18270;
var all_files = inst_18269;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18269,inst_18273,inst_18274,inst_18270,inst_18273__$1,inst_18274__$1,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (p1__18009_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__18009_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18269,inst_18273,inst_18274,inst_18270,inst_18273__$1,inst_18274__$1,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18276 = cljs.core.filter.call(null,inst_18275,inst_18273__$1);
var inst_18277 = cljs.core.not_empty.call(null,inst_18274__$1);
var state_18337__$1 = (function (){var statearr_18386 = state_18337;
(statearr_18386[(12)] = inst_18276);

(statearr_18386[(14)] = inst_18273__$1);

(statearr_18386[(15)] = inst_18274__$1);

return statearr_18386;
})();
if(cljs.core.truth_(inst_18277)){
var statearr_18387_18443 = state_18337__$1;
(statearr_18387_18443[(1)] = (20));

} else {
var statearr_18388_18444 = state_18337__$1;
(statearr_18388_18444[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (11))){
var state_18337__$1 = state_18337;
var statearr_18389_18445 = state_18337__$1;
(statearr_18389_18445[(2)] = null);

(statearr_18389_18445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (9))){
var inst_18256 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18390_18446 = state_18337__$1;
(statearr_18390_18446[(2)] = inst_18256);

(statearr_18390_18446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (5))){
var inst_18227 = (state_18337[(9)]);
var inst_18226 = (state_18337[(10)]);
var inst_18229 = (inst_18227 < inst_18226);
var inst_18230 = inst_18229;
var state_18337__$1 = state_18337;
if(cljs.core.truth_(inst_18230)){
var statearr_18391_18447 = state_18337__$1;
(statearr_18391_18447[(1)] = (7));

} else {
var statearr_18392_18448 = state_18337__$1;
(statearr_18392_18448[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (14))){
var inst_18237 = (state_18337[(26)]);
var inst_18246 = cljs.core.first.call(null,inst_18237);
var inst_18247 = figwheel.client.file_reloading.eval_body.call(null,inst_18246);
var inst_18248 = cljs.core.next.call(null,inst_18237);
var inst_18224 = inst_18248;
var inst_18225 = null;
var inst_18226 = (0);
var inst_18227 = (0);
var state_18337__$1 = (function (){var statearr_18393 = state_18337;
(statearr_18393[(7)] = inst_18224);

(statearr_18393[(8)] = inst_18225);

(statearr_18393[(32)] = inst_18247);

(statearr_18393[(9)] = inst_18227);

(statearr_18393[(10)] = inst_18226);

return statearr_18393;
})();
var statearr_18394_18449 = state_18337__$1;
(statearr_18394_18449[(2)] = null);

(statearr_18394_18449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (26))){
var inst_18296 = (state_18337[(19)]);
var inst_18299 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18296);
var state_18337__$1 = state_18337;
var statearr_18395_18450 = state_18337__$1;
(statearr_18395_18450[(2)] = inst_18299);

(statearr_18395_18450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (16))){
var inst_18263 = (state_18337[(22)]);
var inst_18265 = (function (){var all_files = inst_18263;
return ((function (all_files,inst_18263,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function (p1__18008_SHARP_){
return cljs.core.update_in.call(null,p1__18008_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_18263,state_val_18338,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var inst_18266 = cljs.core.map.call(null,inst_18265,inst_18263);
var state_18337__$1 = state_18337;
var statearr_18396_18451 = state_18337__$1;
(statearr_18396_18451[(2)] = inst_18266);

(statearr_18396_18451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (30))){
var state_18337__$1 = state_18337;
var statearr_18397_18452 = state_18337__$1;
(statearr_18397_18452[(2)] = null);

(statearr_18397_18452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (10))){
var inst_18237 = (state_18337[(26)]);
var inst_18239 = cljs.core.chunked_seq_QMARK_.call(null,inst_18237);
var state_18337__$1 = state_18337;
if(inst_18239){
var statearr_18398_18453 = state_18337__$1;
(statearr_18398_18453[(1)] = (13));

} else {
var statearr_18399_18454 = state_18337__$1;
(statearr_18399_18454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (18))){
var inst_18269 = (state_18337[(13)]);
var inst_18270 = (state_18337[(16)]);
var inst_18269__$1 = (state_18337[(2)]);
var inst_18270__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_18269__$1);
var inst_18271 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_18270__$1);
var state_18337__$1 = (function (){var statearr_18400 = state_18337;
(statearr_18400[(13)] = inst_18269__$1);

(statearr_18400[(16)] = inst_18270__$1);

return statearr_18400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18337__$1,(19),inst_18271);
} else {
if((state_val_18338 === (37))){
var inst_18332 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18401_18455 = state_18337__$1;
(statearr_18401_18455[(2)] = inst_18332);

(statearr_18401_18455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (8))){
var inst_18224 = (state_18337[(7)]);
var inst_18237 = (state_18337[(26)]);
var inst_18237__$1 = cljs.core.seq.call(null,inst_18224);
var state_18337__$1 = (function (){var statearr_18402 = state_18337;
(statearr_18402[(26)] = inst_18237__$1);

return statearr_18402;
})();
if(inst_18237__$1){
var statearr_18403_18456 = state_18337__$1;
(statearr_18403_18456[(1)] = (10));

} else {
var statearr_18404_18457 = state_18337__$1;
(statearr_18404_18457[(1)] = (11));

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
});})(c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
;
return ((function (switch__7637__auto__,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____0 = (function (){
var statearr_18408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18408[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__);

(statearr_18408[(1)] = (1));

return statearr_18408;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____1 = (function (state_18337){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_18337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e18409){if((e18409 instanceof Object)){
var ex__7641__auto__ = e18409;
var statearr_18410_18458 = state_18337;
(statearr_18410_18458[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18459 = state_18337;
state_18337 = G__18459;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__ = function(state_18337){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____1.call(this,state_18337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
})();
var state__7701__auto__ = (function (){var statearr_18411 = f__7700__auto__.call(null);
(statearr_18411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,map__18212,map__18212__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18213,map__18213__$1,msg,files))
);

return c__7699__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__18462,link){
var map__18464 = p__18462;
var map__18464__$1 = ((cljs.core.seq_QMARK_.call(null,map__18464))?cljs.core.apply.call(null,cljs.core.hash_map,map__18464):map__18464);
var file = cljs.core.get.call(null,map__18464__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__18464,map__18464__$1,file){
return (function (p1__18460_SHARP_,p2__18461_SHARP_){
if(cljs.core._EQ_.call(null,p1__18460_SHARP_,p2__18461_SHARP_)){
return p1__18460_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__18464,map__18464__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__18468){
var map__18469 = p__18468;
var map__18469__$1 = ((cljs.core.seq_QMARK_.call(null,map__18469))?cljs.core.apply.call(null,cljs.core.hash_map,map__18469):map__18469);
var current_url_length = cljs.core.get.call(null,map__18469__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__18469__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__18465_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__18465_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__18471 = arguments.length;
switch (G__18471) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__18473){
var map__18475 = p__18473;
var map__18475__$1 = ((cljs.core.seq_QMARK_.call(null,map__18475))?cljs.core.apply.call(null,cljs.core.hash_map,map__18475):map__18475);
var f_data = map__18475__$1;
var request_url = cljs.core.get.call(null,map__18475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__18475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4333__auto__ = request_url;
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__18476,files_msg){
var map__18498 = p__18476;
var map__18498__$1 = ((cljs.core.seq_QMARK_.call(null,map__18498))?cljs.core.apply.call(null,cljs.core.hash_map,map__18498):map__18498);
var opts = map__18498__$1;
var on_cssload = cljs.core.get.call(null,map__18498__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__18499_18519 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__18500_18520 = null;
var count__18501_18521 = (0);
var i__18502_18522 = (0);
while(true){
if((i__18502_18522 < count__18501_18521)){
var f_18523 = cljs.core._nth.call(null,chunk__18500_18520,i__18502_18522);
figwheel.client.file_reloading.reload_css_file.call(null,f_18523);

var G__18524 = seq__18499_18519;
var G__18525 = chunk__18500_18520;
var G__18526 = count__18501_18521;
var G__18527 = (i__18502_18522 + (1));
seq__18499_18519 = G__18524;
chunk__18500_18520 = G__18525;
count__18501_18521 = G__18526;
i__18502_18522 = G__18527;
continue;
} else {
var temp__4126__auto___18528 = cljs.core.seq.call(null,seq__18499_18519);
if(temp__4126__auto___18528){
var seq__18499_18529__$1 = temp__4126__auto___18528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18499_18529__$1)){
var c__5118__auto___18530 = cljs.core.chunk_first.call(null,seq__18499_18529__$1);
var G__18531 = cljs.core.chunk_rest.call(null,seq__18499_18529__$1);
var G__18532 = c__5118__auto___18530;
var G__18533 = cljs.core.count.call(null,c__5118__auto___18530);
var G__18534 = (0);
seq__18499_18519 = G__18531;
chunk__18500_18520 = G__18532;
count__18501_18521 = G__18533;
i__18502_18522 = G__18534;
continue;
} else {
var f_18535 = cljs.core.first.call(null,seq__18499_18529__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_18535);

var G__18536 = cljs.core.next.call(null,seq__18499_18529__$1);
var G__18537 = null;
var G__18538 = (0);
var G__18539 = (0);
seq__18499_18519 = G__18536;
chunk__18500_18520 = G__18537;
count__18501_18521 = G__18538;
i__18502_18522 = G__18539;
continue;
}
} else {
}
}
break;
}

var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,map__18498,map__18498__$1,opts,on_cssload){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,map__18498,map__18498__$1,opts,on_cssload){
return (function (state_18509){
var state_val_18510 = (state_18509[(1)]);
if((state_val_18510 === (2))){
var inst_18505 = (state_18509[(2)]);
var inst_18506 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_18507 = on_cssload.call(null,inst_18506);
var state_18509__$1 = (function (){var statearr_18511 = state_18509;
(statearr_18511[(7)] = inst_18505);

return statearr_18511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18509__$1,inst_18507);
} else {
if((state_val_18510 === (1))){
var inst_18503 = cljs.core.async.timeout.call(null,(100));
var state_18509__$1 = state_18509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18509__$1,(2),inst_18503);
} else {
return null;
}
}
});})(c__7699__auto__,map__18498,map__18498__$1,opts,on_cssload))
;
return ((function (switch__7637__auto__,c__7699__auto__,map__18498,map__18498__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____0 = (function (){
var statearr_18515 = [null,null,null,null,null,null,null,null];
(statearr_18515[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__);

(statearr_18515[(1)] = (1));

return statearr_18515;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____1 = (function (state_18509){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_18509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e18516){if((e18516 instanceof Object)){
var ex__7641__auto__ = e18516;
var statearr_18517_18540 = state_18509;
(statearr_18517_18540[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18541 = state_18509;
state_18509 = G__18541;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__ = function(state_18509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____1.call(this,state_18509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,map__18498,map__18498__$1,opts,on_cssload))
})();
var state__7701__auto__ = (function (){var statearr_18518 = f__7700__auto__.call(null);
(statearr_18518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,map__18498,map__18498__$1,opts,on_cssload))
);

return c__7699__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440775512795