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
return cljs.core.reduce.call(null,(function (p1__17883_SHARP_,p2__17884_SHARP_){
var and__4321__auto__ = p1__17883_SHARP_;
if(cljs.core.truth_(and__4321__auto__)){
return p2__17884_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17886_SHARP_,p2__17885_SHARP_){
return [cljs.core.str(p2__17885_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17887){
var map__17888 = p__17887;
var map__17888__$1 = ((cljs.core.seq_QMARK_.call(null,map__17888))?cljs.core.apply.call(null,cljs.core.hash_map,map__17888):map__17888);
var file = cljs.core.get.call(null,map__17888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__17889){
var map__17890 = p__17889;
var map__17890__$1 = ((cljs.core.seq_QMARK_.call(null,map__17890))?cljs.core.apply.call(null,cljs.core.hash_map,map__17890):map__17890);
var namespace = cljs.core.get.call(null,map__17890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e17891){if((e17891 instanceof Error)){
var e = e17891;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e17891;

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
var G__17893 = arguments.length;
switch (G__17893) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__17895,callback){
var map__17897 = p__17895;
var map__17897__$1 = ((cljs.core.seq_QMARK_.call(null,map__17897))?cljs.core.apply.call(null,cljs.core.hash_map,map__17897):map__17897);
var file_msg = map__17897__$1;
var request_url = cljs.core.get.call(null,map__17897__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__17897,map__17897__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__17897,map__17897__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__17898){
var map__17900 = p__17898;
var map__17900__$1 = ((cljs.core.seq_QMARK_.call(null,map__17900))?cljs.core.apply.call(null,cljs.core.hash_map,map__17900):map__17900);
var file_msg = map__17900__$1;
var meta_data = cljs.core.get.call(null,map__17900__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__17900__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__17901,callback){
var map__17903 = p__17901;
var map__17903__$1 = ((cljs.core.seq_QMARK_.call(null,map__17903))?cljs.core.apply.call(null,cljs.core.hash_map,map__17903):map__17903);
var file_msg = map__17903__$1;
var namespace = cljs.core.get.call(null,map__17903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__17903__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__7699__auto___17990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto___17990,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto___17990,out){
return (function (state_17972){
var state_val_17973 = (state_17972[(1)]);
if((state_val_17973 === (7))){
var inst_17956 = (state_17972[(7)]);
var inst_17962 = (state_17972[(2)]);
var inst_17963 = cljs.core.async.put_BANG_.call(null,out,inst_17962);
var inst_17952 = inst_17956;
var state_17972__$1 = (function (){var statearr_17974 = state_17972;
(statearr_17974[(8)] = inst_17963);

(statearr_17974[(9)] = inst_17952);

return statearr_17974;
})();
var statearr_17975_17991 = state_17972__$1;
(statearr_17975_17991[(2)] = null);

(statearr_17975_17991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (6))){
var inst_17968 = (state_17972[(2)]);
var state_17972__$1 = state_17972;
var statearr_17976_17992 = state_17972__$1;
(statearr_17976_17992[(2)] = inst_17968);

(statearr_17976_17992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (5))){
var inst_17966 = cljs.core.async.close_BANG_.call(null,out);
var state_17972__$1 = state_17972;
var statearr_17977_17993 = state_17972__$1;
(statearr_17977_17993[(2)] = inst_17966);

(statearr_17977_17993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (4))){
var inst_17955 = (state_17972[(10)]);
var inst_17960 = figwheel.client.file_reloading.reload_js_file.call(null,inst_17955);
var state_17972__$1 = state_17972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17972__$1,(7),inst_17960);
} else {
if((state_val_17973 === (3))){
var inst_17970 = (state_17972[(2)]);
var state_17972__$1 = state_17972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17972__$1,inst_17970);
} else {
if((state_val_17973 === (2))){
var inst_17955 = (state_17972[(10)]);
var inst_17952 = (state_17972[(9)]);
var inst_17955__$1 = cljs.core.nth.call(null,inst_17952,(0),null);
var inst_17956 = cljs.core.nthnext.call(null,inst_17952,(1));
var inst_17957 = (inst_17955__$1 == null);
var inst_17958 = cljs.core.not.call(null,inst_17957);
var state_17972__$1 = (function (){var statearr_17978 = state_17972;
(statearr_17978[(10)] = inst_17955__$1);

(statearr_17978[(7)] = inst_17956);

return statearr_17978;
})();
if(inst_17958){
var statearr_17979_17994 = state_17972__$1;
(statearr_17979_17994[(1)] = (4));

} else {
var statearr_17980_17995 = state_17972__$1;
(statearr_17980_17995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17973 === (1))){
var inst_17950 = cljs.core.nth.call(null,files,(0),null);
var inst_17951 = cljs.core.nthnext.call(null,files,(1));
var inst_17952 = files;
var state_17972__$1 = (function (){var statearr_17981 = state_17972;
(statearr_17981[(11)] = inst_17950);

(statearr_17981[(12)] = inst_17951);

(statearr_17981[(9)] = inst_17952);

return statearr_17981;
})();
var statearr_17982_17996 = state_17972__$1;
(statearr_17982_17996[(2)] = null);

(statearr_17982_17996[(1)] = (2));


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
});})(c__7699__auto___17990,out))
;
return ((function (switch__7637__auto__,c__7699__auto___17990,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____0 = (function (){
var statearr_17986 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17986[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__);

(statearr_17986[(1)] = (1));

return statearr_17986;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____1 = (function (state_17972){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17987){if((e17987 instanceof Object)){
var ex__7641__auto__ = e17987;
var statearr_17988_17997 = state_17972;
(statearr_17988_17997[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17998 = state_17972;
state_17972 = G__17998;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__ = function(state_17972){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____1.call(this,state_17972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto___17990,out))
})();
var state__7701__auto__ = (function (){var statearr_17989 = f__7700__auto__.call(null);
(statearr_17989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17990);

return statearr_17989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto___17990,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__17999,p__18000){
var map__18003 = p__17999;
var map__18003__$1 = ((cljs.core.seq_QMARK_.call(null,map__18003))?cljs.core.apply.call(null,cljs.core.hash_map,map__18003):map__18003);
var opts = map__18003__$1;
var url_rewriter = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__18004 = p__18000;
var map__18004__$1 = ((cljs.core.seq_QMARK_.call(null,map__18004))?cljs.core.apply.call(null,cljs.core.hash_map,map__18004):map__18004);
var file_msg = map__18004__$1;
var file = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__18005){
var map__18008 = p__18005;
var map__18008__$1 = ((cljs.core.seq_QMARK_.call(null,map__18008))?cljs.core.apply.call(null,cljs.core.hash_map,map__18008):map__18008);
var file = cljs.core.get.call(null,map__18008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__18008__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e18009){var e = e18009;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__18014,p__18015){
var map__18216 = p__18014;
var map__18216__$1 = ((cljs.core.seq_QMARK_.call(null,map__18216))?cljs.core.apply.call(null,cljs.core.hash_map,map__18216):map__18216);
var opts = map__18216__$1;
var load_unchanged_files = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__18217 = p__18015;
var map__18217__$1 = ((cljs.core.seq_QMARK_.call(null,map__18217))?cljs.core.apply.call(null,cljs.core.hash_map,map__18217):map__18217);
var msg = map__18217__$1;
var files = cljs.core.get.call(null,map__18217__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (state_18341){
var state_val_18342 = (state_18341[(1)]);
if((state_val_18342 === (7))){
var inst_18230 = (state_18341[(7)]);
var inst_18229 = (state_18341[(8)]);
var inst_18231 = (state_18341[(9)]);
var inst_18228 = (state_18341[(10)]);
var inst_18236 = cljs.core._nth.call(null,inst_18229,inst_18231);
var inst_18237 = figwheel.client.file_reloading.eval_body.call(null,inst_18236);
var inst_18238 = (inst_18231 + (1));
var tmp18343 = inst_18230;
var tmp18344 = inst_18229;
var tmp18345 = inst_18228;
var inst_18228__$1 = tmp18345;
var inst_18229__$1 = tmp18344;
var inst_18230__$1 = tmp18343;
var inst_18231__$1 = inst_18238;
var state_18341__$1 = (function (){var statearr_18346 = state_18341;
(statearr_18346[(7)] = inst_18230__$1);

(statearr_18346[(8)] = inst_18229__$1);

(statearr_18346[(9)] = inst_18231__$1);

(statearr_18346[(10)] = inst_18228__$1);

(statearr_18346[(11)] = inst_18237);

return statearr_18346;
})();
var statearr_18347_18416 = state_18341__$1;
(statearr_18347_18416[(2)] = null);

(statearr_18347_18416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (20))){
var inst_18278 = (state_18341[(12)]);
var inst_18277 = (state_18341[(13)]);
var inst_18273 = (state_18341[(14)]);
var inst_18274 = (state_18341[(15)]);
var inst_18280 = (state_18341[(16)]);
var inst_18283 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_18285 = (function (){var files_not_loaded = inst_18280;
var res = inst_18278;
var res_SINGLEQUOTE_ = inst_18277;
var files_SINGLEQUOTE_ = inst_18274;
var all_files = inst_18273;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18280,inst_18283,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (p__18284){
var map__18348 = p__18284;
var map__18348__$1 = ((cljs.core.seq_QMARK_.call(null,map__18348))?cljs.core.apply.call(null,cljs.core.hash_map,map__18348):map__18348);
var file = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18280,inst_18283,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18286 = cljs.core.map.call(null,inst_18285,inst_18278);
var inst_18287 = cljs.core.pr_str.call(null,inst_18286);
var inst_18288 = figwheel.client.utils.log.call(null,inst_18287);
var inst_18289 = (function (){var files_not_loaded = inst_18280;
var res = inst_18278;
var res_SINGLEQUOTE_ = inst_18277;
var files_SINGLEQUOTE_ = inst_18274;
var all_files = inst_18273;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18280,inst_18283,inst_18285,inst_18286,inst_18287,inst_18288,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18280,inst_18283,inst_18285,inst_18286,inst_18287,inst_18288,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18290 = setTimeout(inst_18289,(10));
var state_18341__$1 = (function (){var statearr_18349 = state_18341;
(statearr_18349[(17)] = inst_18283);

(statearr_18349[(18)] = inst_18288);

return statearr_18349;
})();
var statearr_18350_18417 = state_18341__$1;
(statearr_18350_18417[(2)] = inst_18290);

(statearr_18350_18417[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (27))){
var inst_18300 = (state_18341[(19)]);
var state_18341__$1 = state_18341;
var statearr_18351_18418 = state_18341__$1;
(statearr_18351_18418[(2)] = inst_18300);

(statearr_18351_18418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (1))){
var inst_18220 = (state_18341[(20)]);
var inst_18218 = before_jsload.call(null,files);
var inst_18219 = (function (){return ((function (inst_18220,inst_18218,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (p1__18010_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18010_SHARP_);
});
;})(inst_18220,inst_18218,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18220__$1 = cljs.core.filter.call(null,inst_18219,files);
var inst_18221 = cljs.core.not_empty.call(null,inst_18220__$1);
var state_18341__$1 = (function (){var statearr_18352 = state_18341;
(statearr_18352[(20)] = inst_18220__$1);

(statearr_18352[(21)] = inst_18218);

return statearr_18352;
})();
if(cljs.core.truth_(inst_18221)){
var statearr_18353_18419 = state_18341__$1;
(statearr_18353_18419[(1)] = (2));

} else {
var statearr_18354_18420 = state_18341__$1;
(statearr_18354_18420[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (24))){
var state_18341__$1 = state_18341;
var statearr_18355_18421 = state_18341__$1;
(statearr_18355_18421[(2)] = null);

(statearr_18355_18421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (4))){
var inst_18265 = (state_18341[(2)]);
var inst_18266 = (function (){return ((function (inst_18265,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (p1__18011_SHARP_){
var and__4321__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__18011_SHARP_);
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18011_SHARP_));
} else {
return and__4321__auto__;
}
});
;})(inst_18265,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18267 = cljs.core.filter.call(null,inst_18266,files);
var state_18341__$1 = (function (){var statearr_18356 = state_18341;
(statearr_18356[(22)] = inst_18265);

(statearr_18356[(23)] = inst_18267);

return statearr_18356;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_18357_18422 = state_18341__$1;
(statearr_18357_18422[(1)] = (16));

} else {
var statearr_18358_18423 = state_18341__$1;
(statearr_18358_18423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (15))){
var inst_18255 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18359_18424 = state_18341__$1;
(statearr_18359_18424[(2)] = inst_18255);

(statearr_18359_18424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (21))){
var state_18341__$1 = state_18341;
var statearr_18360_18425 = state_18341__$1;
(statearr_18360_18425[(2)] = null);

(statearr_18360_18425[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (31))){
var inst_18308 = (state_18341[(24)]);
var inst_18318 = (state_18341[(2)]);
var inst_18319 = cljs.core.not_empty.call(null,inst_18308);
var state_18341__$1 = (function (){var statearr_18361 = state_18341;
(statearr_18361[(25)] = inst_18318);

return statearr_18361;
})();
if(cljs.core.truth_(inst_18319)){
var statearr_18362_18426 = state_18341__$1;
(statearr_18362_18426[(1)] = (32));

} else {
var statearr_18363_18427 = state_18341__$1;
(statearr_18363_18427[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (32))){
var inst_18308 = (state_18341[(24)]);
var inst_18321 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18308);
var inst_18322 = cljs.core.pr_str.call(null,inst_18321);
var inst_18323 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_18322)].join('');
var inst_18324 = figwheel.client.utils.log.call(null,inst_18323);
var state_18341__$1 = state_18341;
var statearr_18364_18428 = state_18341__$1;
(statearr_18364_18428[(2)] = inst_18324);

(statearr_18364_18428[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (33))){
var state_18341__$1 = state_18341;
var statearr_18365_18429 = state_18341__$1;
(statearr_18365_18429[(2)] = null);

(statearr_18365_18429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (13))){
var inst_18241 = (state_18341[(26)]);
var inst_18245 = cljs.core.chunk_first.call(null,inst_18241);
var inst_18246 = cljs.core.chunk_rest.call(null,inst_18241);
var inst_18247 = cljs.core.count.call(null,inst_18245);
var inst_18228 = inst_18246;
var inst_18229 = inst_18245;
var inst_18230 = inst_18247;
var inst_18231 = (0);
var state_18341__$1 = (function (){var statearr_18366 = state_18341;
(statearr_18366[(7)] = inst_18230);

(statearr_18366[(8)] = inst_18229);

(statearr_18366[(9)] = inst_18231);

(statearr_18366[(10)] = inst_18228);

return statearr_18366;
})();
var statearr_18367_18430 = state_18341__$1;
(statearr_18367_18430[(2)] = null);

(statearr_18367_18430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (22))){
var inst_18280 = (state_18341[(16)]);
var inst_18293 = (state_18341[(2)]);
var inst_18294 = cljs.core.not_empty.call(null,inst_18280);
var state_18341__$1 = (function (){var statearr_18368 = state_18341;
(statearr_18368[(27)] = inst_18293);

return statearr_18368;
})();
if(cljs.core.truth_(inst_18294)){
var statearr_18369_18431 = state_18341__$1;
(statearr_18369_18431[(1)] = (23));

} else {
var statearr_18370_18432 = state_18341__$1;
(statearr_18370_18432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (36))){
var state_18341__$1 = state_18341;
var statearr_18371_18433 = state_18341__$1;
(statearr_18371_18433[(2)] = null);

(statearr_18371_18433[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (29))){
var inst_18309 = (state_18341[(28)]);
var inst_18312 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18309);
var inst_18313 = cljs.core.pr_str.call(null,inst_18312);
var inst_18314 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_18313)].join('');
var inst_18315 = figwheel.client.utils.log.call(null,inst_18314);
var state_18341__$1 = state_18341;
var statearr_18372_18434 = state_18341__$1;
(statearr_18372_18434[(2)] = inst_18315);

(statearr_18372_18434[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (6))){
var inst_18262 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18373_18435 = state_18341__$1;
(statearr_18373_18435[(2)] = inst_18262);

(statearr_18373_18435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (28))){
var inst_18309 = (state_18341[(28)]);
var inst_18306 = (state_18341[(2)]);
var inst_18307 = cljs.core.get.call(null,inst_18306,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_18308 = cljs.core.get.call(null,inst_18306,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_18309__$1 = cljs.core.get.call(null,inst_18306,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_18310 = cljs.core.not_empty.call(null,inst_18309__$1);
var state_18341__$1 = (function (){var statearr_18374 = state_18341;
(statearr_18374[(24)] = inst_18308);

(statearr_18374[(28)] = inst_18309__$1);

(statearr_18374[(29)] = inst_18307);

return statearr_18374;
})();
if(cljs.core.truth_(inst_18310)){
var statearr_18375_18436 = state_18341__$1;
(statearr_18375_18436[(1)] = (29));

} else {
var statearr_18376_18437 = state_18341__$1;
(statearr_18376_18437[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (25))){
var inst_18339 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18341__$1,inst_18339);
} else {
if((state_val_18342 === (34))){
var inst_18307 = (state_18341[(29)]);
var inst_18327 = (state_18341[(2)]);
var inst_18328 = cljs.core.not_empty.call(null,inst_18307);
var state_18341__$1 = (function (){var statearr_18377 = state_18341;
(statearr_18377[(30)] = inst_18327);

return statearr_18377;
})();
if(cljs.core.truth_(inst_18328)){
var statearr_18378_18438 = state_18341__$1;
(statearr_18378_18438[(1)] = (35));

} else {
var statearr_18379_18439 = state_18341__$1;
(statearr_18379_18439[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (17))){
var inst_18267 = (state_18341[(23)]);
var state_18341__$1 = state_18341;
var statearr_18380_18440 = state_18341__$1;
(statearr_18380_18440[(2)] = inst_18267);

(statearr_18380_18440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (3))){
var state_18341__$1 = state_18341;
var statearr_18381_18441 = state_18341__$1;
(statearr_18381_18441[(2)] = null);

(statearr_18381_18441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (12))){
var inst_18258 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18382_18442 = state_18341__$1;
(statearr_18382_18442[(2)] = inst_18258);

(statearr_18382_18442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (2))){
var inst_18220 = (state_18341[(20)]);
var inst_18227 = cljs.core.seq.call(null,inst_18220);
var inst_18228 = inst_18227;
var inst_18229 = null;
var inst_18230 = (0);
var inst_18231 = (0);
var state_18341__$1 = (function (){var statearr_18383 = state_18341;
(statearr_18383[(7)] = inst_18230);

(statearr_18383[(8)] = inst_18229);

(statearr_18383[(9)] = inst_18231);

(statearr_18383[(10)] = inst_18228);

return statearr_18383;
})();
var statearr_18384_18443 = state_18341__$1;
(statearr_18384_18443[(2)] = null);

(statearr_18384_18443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (23))){
var inst_18278 = (state_18341[(12)]);
var inst_18277 = (state_18341[(13)]);
var inst_18273 = (state_18341[(14)]);
var inst_18274 = (state_18341[(15)]);
var inst_18280 = (state_18341[(16)]);
var inst_18300 = (state_18341[(19)]);
var inst_18296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_18299 = (function (){var files_not_loaded = inst_18280;
var res = inst_18278;
var res_SINGLEQUOTE_ = inst_18277;
var files_SINGLEQUOTE_ = inst_18274;
var all_files = inst_18273;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18280,inst_18300,inst_18296,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (p__18298){
var map__18385 = p__18298;
var map__18385__$1 = ((cljs.core.seq_QMARK_.call(null,map__18385))?cljs.core.apply.call(null,cljs.core.hash_map,map__18385):map__18385);
var meta_data = cljs.core.get.call(null,map__18385__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18280,inst_18300,inst_18296,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18300__$1 = cljs.core.group_by.call(null,inst_18299,inst_18280);
var inst_18301 = cljs.core.seq_QMARK_.call(null,inst_18300__$1);
var state_18341__$1 = (function (){var statearr_18386 = state_18341;
(statearr_18386[(31)] = inst_18296);

(statearr_18386[(19)] = inst_18300__$1);

return statearr_18386;
})();
if(inst_18301){
var statearr_18387_18444 = state_18341__$1;
(statearr_18387_18444[(1)] = (26));

} else {
var statearr_18388_18445 = state_18341__$1;
(statearr_18388_18445[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (35))){
var inst_18307 = (state_18341[(29)]);
var inst_18330 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18307);
var inst_18331 = cljs.core.pr_str.call(null,inst_18330);
var inst_18332 = [cljs.core.str("not required: "),cljs.core.str(inst_18331)].join('');
var inst_18333 = figwheel.client.utils.log.call(null,inst_18332);
var state_18341__$1 = state_18341;
var statearr_18389_18446 = state_18341__$1;
(statearr_18389_18446[(2)] = inst_18333);

(statearr_18389_18446[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (19))){
var inst_18278 = (state_18341[(12)]);
var inst_18277 = (state_18341[(13)]);
var inst_18273 = (state_18341[(14)]);
var inst_18274 = (state_18341[(15)]);
var inst_18277__$1 = (state_18341[(2)]);
var inst_18278__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_18277__$1);
var inst_18279 = (function (){var res = inst_18278__$1;
var res_SINGLEQUOTE_ = inst_18277__$1;
var files_SINGLEQUOTE_ = inst_18274;
var all_files = inst_18273;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18277__$1,inst_18278__$1,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (p1__18013_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__18013_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18278,inst_18277,inst_18273,inst_18274,inst_18277__$1,inst_18278__$1,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18280 = cljs.core.filter.call(null,inst_18279,inst_18277__$1);
var inst_18281 = cljs.core.not_empty.call(null,inst_18278__$1);
var state_18341__$1 = (function (){var statearr_18390 = state_18341;
(statearr_18390[(12)] = inst_18278__$1);

(statearr_18390[(13)] = inst_18277__$1);

(statearr_18390[(16)] = inst_18280);

return statearr_18390;
})();
if(cljs.core.truth_(inst_18281)){
var statearr_18391_18447 = state_18341__$1;
(statearr_18391_18447[(1)] = (20));

} else {
var statearr_18392_18448 = state_18341__$1;
(statearr_18392_18448[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (11))){
var state_18341__$1 = state_18341;
var statearr_18393_18449 = state_18341__$1;
(statearr_18393_18449[(2)] = null);

(statearr_18393_18449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (9))){
var inst_18260 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18394_18450 = state_18341__$1;
(statearr_18394_18450[(2)] = inst_18260);

(statearr_18394_18450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (5))){
var inst_18230 = (state_18341[(7)]);
var inst_18231 = (state_18341[(9)]);
var inst_18233 = (inst_18231 < inst_18230);
var inst_18234 = inst_18233;
var state_18341__$1 = state_18341;
if(cljs.core.truth_(inst_18234)){
var statearr_18395_18451 = state_18341__$1;
(statearr_18395_18451[(1)] = (7));

} else {
var statearr_18396_18452 = state_18341__$1;
(statearr_18396_18452[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (14))){
var inst_18241 = (state_18341[(26)]);
var inst_18250 = cljs.core.first.call(null,inst_18241);
var inst_18251 = figwheel.client.file_reloading.eval_body.call(null,inst_18250);
var inst_18252 = cljs.core.next.call(null,inst_18241);
var inst_18228 = inst_18252;
var inst_18229 = null;
var inst_18230 = (0);
var inst_18231 = (0);
var state_18341__$1 = (function (){var statearr_18397 = state_18341;
(statearr_18397[(7)] = inst_18230);

(statearr_18397[(8)] = inst_18229);

(statearr_18397[(9)] = inst_18231);

(statearr_18397[(10)] = inst_18228);

(statearr_18397[(32)] = inst_18251);

return statearr_18397;
})();
var statearr_18398_18453 = state_18341__$1;
(statearr_18398_18453[(2)] = null);

(statearr_18398_18453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (26))){
var inst_18300 = (state_18341[(19)]);
var inst_18303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18300);
var state_18341__$1 = state_18341;
var statearr_18399_18454 = state_18341__$1;
(statearr_18399_18454[(2)] = inst_18303);

(statearr_18399_18454[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (16))){
var inst_18267 = (state_18341[(23)]);
var inst_18269 = (function (){var all_files = inst_18267;
return ((function (all_files,inst_18267,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function (p1__18012_SHARP_){
return cljs.core.update_in.call(null,p1__18012_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_18267,state_val_18342,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var inst_18270 = cljs.core.map.call(null,inst_18269,inst_18267);
var state_18341__$1 = state_18341;
var statearr_18400_18455 = state_18341__$1;
(statearr_18400_18455[(2)] = inst_18270);

(statearr_18400_18455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (30))){
var state_18341__$1 = state_18341;
var statearr_18401_18456 = state_18341__$1;
(statearr_18401_18456[(2)] = null);

(statearr_18401_18456[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (10))){
var inst_18241 = (state_18341[(26)]);
var inst_18243 = cljs.core.chunked_seq_QMARK_.call(null,inst_18241);
var state_18341__$1 = state_18341;
if(inst_18243){
var statearr_18402_18457 = state_18341__$1;
(statearr_18402_18457[(1)] = (13));

} else {
var statearr_18403_18458 = state_18341__$1;
(statearr_18403_18458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (18))){
var inst_18273 = (state_18341[(14)]);
var inst_18274 = (state_18341[(15)]);
var inst_18273__$1 = (state_18341[(2)]);
var inst_18274__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_18273__$1);
var inst_18275 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_18274__$1);
var state_18341__$1 = (function (){var statearr_18404 = state_18341;
(statearr_18404[(14)] = inst_18273__$1);

(statearr_18404[(15)] = inst_18274__$1);

return statearr_18404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18341__$1,(19),inst_18275);
} else {
if((state_val_18342 === (37))){
var inst_18336 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18405_18459 = state_18341__$1;
(statearr_18405_18459[(2)] = inst_18336);

(statearr_18405_18459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (8))){
var inst_18228 = (state_18341[(10)]);
var inst_18241 = (state_18341[(26)]);
var inst_18241__$1 = cljs.core.seq.call(null,inst_18228);
var state_18341__$1 = (function (){var statearr_18406 = state_18341;
(statearr_18406[(26)] = inst_18241__$1);

return statearr_18406;
})();
if(inst_18241__$1){
var statearr_18407_18460 = state_18341__$1;
(statearr_18407_18460[(1)] = (10));

} else {
var statearr_18408_18461 = state_18341__$1;
(statearr_18408_18461[(1)] = (11));

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
});})(c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
;
return ((function (switch__7637__auto__,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____0 = (function (){
var statearr_18412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18412[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__);

(statearr_18412[(1)] = (1));

return statearr_18412;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____1 = (function (state_18341){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_18341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e18413){if((e18413 instanceof Object)){
var ex__7641__auto__ = e18413;
var statearr_18414_18462 = state_18341;
(statearr_18414_18462[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18463 = state_18341;
state_18341 = G__18463;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__ = function(state_18341){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____1.call(this,state_18341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
})();
var state__7701__auto__ = (function (){var statearr_18415 = f__7700__auto__.call(null);
(statearr_18415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,map__18216,map__18216__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18217,map__18217__$1,msg,files))
);

return c__7699__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__18466,link){
var map__18468 = p__18466;
var map__18468__$1 = ((cljs.core.seq_QMARK_.call(null,map__18468))?cljs.core.apply.call(null,cljs.core.hash_map,map__18468):map__18468);
var file = cljs.core.get.call(null,map__18468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__18468,map__18468__$1,file){
return (function (p1__18464_SHARP_,p2__18465_SHARP_){
if(cljs.core._EQ_.call(null,p1__18464_SHARP_,p2__18465_SHARP_)){
return p1__18464_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__18468,map__18468__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__18472){
var map__18473 = p__18472;
var map__18473__$1 = ((cljs.core.seq_QMARK_.call(null,map__18473))?cljs.core.apply.call(null,cljs.core.hash_map,map__18473):map__18473);
var current_url_length = cljs.core.get.call(null,map__18473__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__18473__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__18469_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__18469_SHARP_);
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
var G__18475 = arguments.length;
switch (G__18475) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__18477){
var map__18479 = p__18477;
var map__18479__$1 = ((cljs.core.seq_QMARK_.call(null,map__18479))?cljs.core.apply.call(null,cljs.core.hash_map,map__18479):map__18479);
var f_data = map__18479__$1;
var request_url = cljs.core.get.call(null,map__18479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__18479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__18480,files_msg){
var map__18502 = p__18480;
var map__18502__$1 = ((cljs.core.seq_QMARK_.call(null,map__18502))?cljs.core.apply.call(null,cljs.core.hash_map,map__18502):map__18502);
var opts = map__18502__$1;
var on_cssload = cljs.core.get.call(null,map__18502__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__18503_18523 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__18504_18524 = null;
var count__18505_18525 = (0);
var i__18506_18526 = (0);
while(true){
if((i__18506_18526 < count__18505_18525)){
var f_18527 = cljs.core._nth.call(null,chunk__18504_18524,i__18506_18526);
figwheel.client.file_reloading.reload_css_file.call(null,f_18527);

var G__18528 = seq__18503_18523;
var G__18529 = chunk__18504_18524;
var G__18530 = count__18505_18525;
var G__18531 = (i__18506_18526 + (1));
seq__18503_18523 = G__18528;
chunk__18504_18524 = G__18529;
count__18505_18525 = G__18530;
i__18506_18526 = G__18531;
continue;
} else {
var temp__4126__auto___18532 = cljs.core.seq.call(null,seq__18503_18523);
if(temp__4126__auto___18532){
var seq__18503_18533__$1 = temp__4126__auto___18532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18503_18533__$1)){
var c__5118__auto___18534 = cljs.core.chunk_first.call(null,seq__18503_18533__$1);
var G__18535 = cljs.core.chunk_rest.call(null,seq__18503_18533__$1);
var G__18536 = c__5118__auto___18534;
var G__18537 = cljs.core.count.call(null,c__5118__auto___18534);
var G__18538 = (0);
seq__18503_18523 = G__18535;
chunk__18504_18524 = G__18536;
count__18505_18525 = G__18537;
i__18506_18526 = G__18538;
continue;
} else {
var f_18539 = cljs.core.first.call(null,seq__18503_18533__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_18539);

var G__18540 = cljs.core.next.call(null,seq__18503_18533__$1);
var G__18541 = null;
var G__18542 = (0);
var G__18543 = (0);
seq__18503_18523 = G__18540;
chunk__18504_18524 = G__18541;
count__18505_18525 = G__18542;
i__18506_18526 = G__18543;
continue;
}
} else {
}
}
break;
}

var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__,map__18502,map__18502__$1,opts,on_cssload){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__,map__18502,map__18502__$1,opts,on_cssload){
return (function (state_18513){
var state_val_18514 = (state_18513[(1)]);
if((state_val_18514 === (2))){
var inst_18509 = (state_18513[(2)]);
var inst_18510 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_18511 = on_cssload.call(null,inst_18510);
var state_18513__$1 = (function (){var statearr_18515 = state_18513;
(statearr_18515[(7)] = inst_18509);

return statearr_18515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18513__$1,inst_18511);
} else {
if((state_val_18514 === (1))){
var inst_18507 = cljs.core.async.timeout.call(null,(100));
var state_18513__$1 = state_18513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18513__$1,(2),inst_18507);
} else {
return null;
}
}
});})(c__7699__auto__,map__18502,map__18502__$1,opts,on_cssload))
;
return ((function (switch__7637__auto__,c__7699__auto__,map__18502,map__18502__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____0 = (function (){
var statearr_18519 = [null,null,null,null,null,null,null,null];
(statearr_18519[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__);

(statearr_18519[(1)] = (1));

return statearr_18519;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____1 = (function (state_18513){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_18513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e18520){if((e18520 instanceof Object)){
var ex__7641__auto__ = e18520;
var statearr_18521_18544 = state_18513;
(statearr_18521_18544[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18545 = state_18513;
state_18513 = G__18545;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__ = function(state_18513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____1.call(this,state_18513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__,map__18502,map__18502__$1,opts,on_cssload))
})();
var state__7701__auto__ = (function (){var statearr_18522 = f__7700__auto__.call(null);
(statearr_18522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__,map__18502,map__18502__$1,opts,on_cssload))
);

return c__7699__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440776944056