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
return cljs.core.reduce.call(null,(function (p1__17050_SHARP_,p2__17051_SHARP_){
var and__4321__auto__ = p1__17050_SHARP_;
if(cljs.core.truth_(and__4321__auto__)){
return p2__17051_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17053_SHARP_,p2__17052_SHARP_){
return [cljs.core.str(p2__17052_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17054){
var map__17055 = p__17054;
var map__17055__$1 = ((cljs.core.seq_QMARK_.call(null,map__17055))?cljs.core.apply.call(null,cljs.core.hash_map,map__17055):map__17055);
var file = cljs.core.get.call(null,map__17055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__17056){
var map__17057 = p__17056;
var map__17057__$1 = ((cljs.core.seq_QMARK_.call(null,map__17057))?cljs.core.apply.call(null,cljs.core.hash_map,map__17057):map__17057);
var namespace = cljs.core.get.call(null,map__17057__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e17058){if((e17058 instanceof Error)){
var e = e17058;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e17058;

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
var G__17060 = arguments.length;
switch (G__17060) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__17062,callback){
var map__17064 = p__17062;
var map__17064__$1 = ((cljs.core.seq_QMARK_.call(null,map__17064))?cljs.core.apply.call(null,cljs.core.hash_map,map__17064):map__17064);
var file_msg = map__17064__$1;
var request_url = cljs.core.get.call(null,map__17064__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__17064,map__17064__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__17064,map__17064__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__17065){
var map__17067 = p__17065;
var map__17067__$1 = ((cljs.core.seq_QMARK_.call(null,map__17067))?cljs.core.apply.call(null,cljs.core.hash_map,map__17067):map__17067);
var file_msg = map__17067__$1;
var meta_data = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__17068,callback){
var map__17070 = p__17068;
var map__17070__$1 = ((cljs.core.seq_QMARK_.call(null,map__17070))?cljs.core.apply.call(null,cljs.core.hash_map,map__17070):map__17070);
var file_msg = map__17070__$1;
var namespace = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__6916__auto___17157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___17157,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___17157,out){
return (function (state_17139){
var state_val_17140 = (state_17139[(1)]);
if((state_val_17140 === (7))){
var inst_17123 = (state_17139[(7)]);
var inst_17129 = (state_17139[(2)]);
var inst_17130 = cljs.core.async.put_BANG_.call(null,out,inst_17129);
var inst_17119 = inst_17123;
var state_17139__$1 = (function (){var statearr_17141 = state_17139;
(statearr_17141[(8)] = inst_17130);

(statearr_17141[(9)] = inst_17119);

return statearr_17141;
})();
var statearr_17142_17158 = state_17139__$1;
(statearr_17142_17158[(2)] = null);

(statearr_17142_17158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (6))){
var inst_17135 = (state_17139[(2)]);
var state_17139__$1 = state_17139;
var statearr_17143_17159 = state_17139__$1;
(statearr_17143_17159[(2)] = inst_17135);

(statearr_17143_17159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (5))){
var inst_17133 = cljs.core.async.close_BANG_.call(null,out);
var state_17139__$1 = state_17139;
var statearr_17144_17160 = state_17139__$1;
(statearr_17144_17160[(2)] = inst_17133);

(statearr_17144_17160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (4))){
var inst_17122 = (state_17139[(10)]);
var inst_17127 = figwheel.client.file_reloading.reload_js_file.call(null,inst_17122);
var state_17139__$1 = state_17139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17139__$1,(7),inst_17127);
} else {
if((state_val_17140 === (3))){
var inst_17137 = (state_17139[(2)]);
var state_17139__$1 = state_17139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17139__$1,inst_17137);
} else {
if((state_val_17140 === (2))){
var inst_17119 = (state_17139[(9)]);
var inst_17122 = (state_17139[(10)]);
var inst_17122__$1 = cljs.core.nth.call(null,inst_17119,(0),null);
var inst_17123 = cljs.core.nthnext.call(null,inst_17119,(1));
var inst_17124 = (inst_17122__$1 == null);
var inst_17125 = cljs.core.not.call(null,inst_17124);
var state_17139__$1 = (function (){var statearr_17145 = state_17139;
(statearr_17145[(10)] = inst_17122__$1);

(statearr_17145[(7)] = inst_17123);

return statearr_17145;
})();
if(inst_17125){
var statearr_17146_17161 = state_17139__$1;
(statearr_17146_17161[(1)] = (4));

} else {
var statearr_17147_17162 = state_17139__$1;
(statearr_17147_17162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17140 === (1))){
var inst_17117 = cljs.core.nth.call(null,files,(0),null);
var inst_17118 = cljs.core.nthnext.call(null,files,(1));
var inst_17119 = files;
var state_17139__$1 = (function (){var statearr_17148 = state_17139;
(statearr_17148[(11)] = inst_17117);

(statearr_17148[(9)] = inst_17119);

(statearr_17148[(12)] = inst_17118);

return statearr_17148;
})();
var statearr_17149_17163 = state_17139__$1;
(statearr_17149_17163[(2)] = null);

(statearr_17149_17163[(1)] = (2));


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
});})(c__6916__auto___17157,out))
;
return ((function (switch__6854__auto__,c__6916__auto___17157,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____0 = (function (){
var statearr_17153 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17153[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__);

(statearr_17153[(1)] = (1));

return statearr_17153;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____1 = (function (state_17139){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_17139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e17154){if((e17154 instanceof Object)){
var ex__6858__auto__ = e17154;
var statearr_17155_17164 = state_17139;
(statearr_17155_17164[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17165 = state_17139;
state_17139 = G__17165;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__ = function(state_17139){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____1.call(this,state_17139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___17157,out))
})();
var state__6918__auto__ = (function (){var statearr_17156 = f__6917__auto__.call(null);
(statearr_17156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___17157);

return statearr_17156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___17157,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__17166,p__17167){
var map__17170 = p__17166;
var map__17170__$1 = ((cljs.core.seq_QMARK_.call(null,map__17170))?cljs.core.apply.call(null,cljs.core.hash_map,map__17170):map__17170);
var opts = map__17170__$1;
var url_rewriter = cljs.core.get.call(null,map__17170__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__17171 = p__17167;
var map__17171__$1 = ((cljs.core.seq_QMARK_.call(null,map__17171))?cljs.core.apply.call(null,cljs.core.hash_map,map__17171):map__17171);
var file_msg = map__17171__$1;
var file = cljs.core.get.call(null,map__17171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__17172){
var map__17175 = p__17172;
var map__17175__$1 = ((cljs.core.seq_QMARK_.call(null,map__17175))?cljs.core.apply.call(null,cljs.core.hash_map,map__17175):map__17175);
var file = cljs.core.get.call(null,map__17175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__17175__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e17176){var e = e17176;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__17181,p__17182){
var map__17383 = p__17181;
var map__17383__$1 = ((cljs.core.seq_QMARK_.call(null,map__17383))?cljs.core.apply.call(null,cljs.core.hash_map,map__17383):map__17383);
var opts = map__17383__$1;
var load_unchanged_files = cljs.core.get.call(null,map__17383__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__17383__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__17383__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__17384 = p__17182;
var map__17384__$1 = ((cljs.core.seq_QMARK_.call(null,map__17384))?cljs.core.apply.call(null,cljs.core.hash_map,map__17384):map__17384);
var msg = map__17384__$1;
var files = cljs.core.get.call(null,map__17384__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (state_17508){
var state_val_17509 = (state_17508[(1)]);
if((state_val_17509 === (7))){
var inst_17397 = (state_17508[(7)]);
var inst_17395 = (state_17508[(8)]);
var inst_17398 = (state_17508[(9)]);
var inst_17396 = (state_17508[(10)]);
var inst_17403 = cljs.core._nth.call(null,inst_17396,inst_17398);
var inst_17404 = figwheel.client.file_reloading.eval_body.call(null,inst_17403);
var inst_17405 = (inst_17398 + (1));
var tmp17510 = inst_17397;
var tmp17511 = inst_17395;
var tmp17512 = inst_17396;
var inst_17395__$1 = tmp17511;
var inst_17396__$1 = tmp17512;
var inst_17397__$1 = tmp17510;
var inst_17398__$1 = inst_17405;
var state_17508__$1 = (function (){var statearr_17513 = state_17508;
(statearr_17513[(7)] = inst_17397__$1);

(statearr_17513[(11)] = inst_17404);

(statearr_17513[(8)] = inst_17395__$1);

(statearr_17513[(9)] = inst_17398__$1);

(statearr_17513[(10)] = inst_17396__$1);

return statearr_17513;
})();
var statearr_17514_17583 = state_17508__$1;
(statearr_17514_17583[(2)] = null);

(statearr_17514_17583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (20))){
var inst_17440 = (state_17508[(12)]);
var inst_17447 = (state_17508[(13)]);
var inst_17445 = (state_17508[(14)]);
var inst_17444 = (state_17508[(15)]);
var inst_17441 = (state_17508[(16)]);
var inst_17450 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_17452 = (function (){var files_not_loaded = inst_17447;
var res = inst_17445;
var res_SINGLEQUOTE_ = inst_17444;
var files_SINGLEQUOTE_ = inst_17441;
var all_files = inst_17440;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17447,inst_17445,inst_17444,inst_17441,inst_17450,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (p__17451){
var map__17515 = p__17451;
var map__17515__$1 = ((cljs.core.seq_QMARK_.call(null,map__17515))?cljs.core.apply.call(null,cljs.core.hash_map,map__17515):map__17515);
var file = cljs.core.get.call(null,map__17515__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__17515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17447,inst_17445,inst_17444,inst_17441,inst_17450,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17453 = cljs.core.map.call(null,inst_17452,inst_17445);
var inst_17454 = cljs.core.pr_str.call(null,inst_17453);
var inst_17455 = figwheel.client.utils.log.call(null,inst_17454);
var inst_17456 = (function (){var files_not_loaded = inst_17447;
var res = inst_17445;
var res_SINGLEQUOTE_ = inst_17444;
var files_SINGLEQUOTE_ = inst_17441;
var all_files = inst_17440;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17447,inst_17445,inst_17444,inst_17441,inst_17450,inst_17452,inst_17453,inst_17454,inst_17455,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17447,inst_17445,inst_17444,inst_17441,inst_17450,inst_17452,inst_17453,inst_17454,inst_17455,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17457 = setTimeout(inst_17456,(10));
var state_17508__$1 = (function (){var statearr_17516 = state_17508;
(statearr_17516[(17)] = inst_17450);

(statearr_17516[(18)] = inst_17455);

return statearr_17516;
})();
var statearr_17517_17584 = state_17508__$1;
(statearr_17517_17584[(2)] = inst_17457);

(statearr_17517_17584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (27))){
var inst_17467 = (state_17508[(19)]);
var state_17508__$1 = state_17508;
var statearr_17518_17585 = state_17508__$1;
(statearr_17518_17585[(2)] = inst_17467);

(statearr_17518_17585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (1))){
var inst_17387 = (state_17508[(20)]);
var inst_17385 = before_jsload.call(null,files);
var inst_17386 = (function (){return ((function (inst_17387,inst_17385,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (p1__17177_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__17177_SHARP_);
});
;})(inst_17387,inst_17385,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17387__$1 = cljs.core.filter.call(null,inst_17386,files);
var inst_17388 = cljs.core.not_empty.call(null,inst_17387__$1);
var state_17508__$1 = (function (){var statearr_17519 = state_17508;
(statearr_17519[(21)] = inst_17385);

(statearr_17519[(20)] = inst_17387__$1);

return statearr_17519;
})();
if(cljs.core.truth_(inst_17388)){
var statearr_17520_17586 = state_17508__$1;
(statearr_17520_17586[(1)] = (2));

} else {
var statearr_17521_17587 = state_17508__$1;
(statearr_17521_17587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (24))){
var state_17508__$1 = state_17508;
var statearr_17522_17588 = state_17508__$1;
(statearr_17522_17588[(2)] = null);

(statearr_17522_17588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (4))){
var inst_17432 = (state_17508[(2)]);
var inst_17433 = (function (){return ((function (inst_17432,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (p1__17178_SHARP_){
var and__4321__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__17178_SHARP_);
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__17178_SHARP_));
} else {
return and__4321__auto__;
}
});
;})(inst_17432,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17434 = cljs.core.filter.call(null,inst_17433,files);
var state_17508__$1 = (function (){var statearr_17523 = state_17508;
(statearr_17523[(22)] = inst_17432);

(statearr_17523[(23)] = inst_17434);

return statearr_17523;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_17524_17589 = state_17508__$1;
(statearr_17524_17589[(1)] = (16));

} else {
var statearr_17525_17590 = state_17508__$1;
(statearr_17525_17590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (15))){
var inst_17422 = (state_17508[(2)]);
var state_17508__$1 = state_17508;
var statearr_17526_17591 = state_17508__$1;
(statearr_17526_17591[(2)] = inst_17422);

(statearr_17526_17591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (21))){
var state_17508__$1 = state_17508;
var statearr_17527_17592 = state_17508__$1;
(statearr_17527_17592[(2)] = null);

(statearr_17527_17592[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (31))){
var inst_17475 = (state_17508[(24)]);
var inst_17485 = (state_17508[(2)]);
var inst_17486 = cljs.core.not_empty.call(null,inst_17475);
var state_17508__$1 = (function (){var statearr_17528 = state_17508;
(statearr_17528[(25)] = inst_17485);

return statearr_17528;
})();
if(cljs.core.truth_(inst_17486)){
var statearr_17529_17593 = state_17508__$1;
(statearr_17529_17593[(1)] = (32));

} else {
var statearr_17530_17594 = state_17508__$1;
(statearr_17530_17594[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (32))){
var inst_17475 = (state_17508[(24)]);
var inst_17488 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17475);
var inst_17489 = cljs.core.pr_str.call(null,inst_17488);
var inst_17490 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_17489)].join('');
var inst_17491 = figwheel.client.utils.log.call(null,inst_17490);
var state_17508__$1 = state_17508;
var statearr_17531_17595 = state_17508__$1;
(statearr_17531_17595[(2)] = inst_17491);

(statearr_17531_17595[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (33))){
var state_17508__$1 = state_17508;
var statearr_17532_17596 = state_17508__$1;
(statearr_17532_17596[(2)] = null);

(statearr_17532_17596[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (13))){
var inst_17408 = (state_17508[(26)]);
var inst_17412 = cljs.core.chunk_first.call(null,inst_17408);
var inst_17413 = cljs.core.chunk_rest.call(null,inst_17408);
var inst_17414 = cljs.core.count.call(null,inst_17412);
var inst_17395 = inst_17413;
var inst_17396 = inst_17412;
var inst_17397 = inst_17414;
var inst_17398 = (0);
var state_17508__$1 = (function (){var statearr_17533 = state_17508;
(statearr_17533[(7)] = inst_17397);

(statearr_17533[(8)] = inst_17395);

(statearr_17533[(9)] = inst_17398);

(statearr_17533[(10)] = inst_17396);

return statearr_17533;
})();
var statearr_17534_17597 = state_17508__$1;
(statearr_17534_17597[(2)] = null);

(statearr_17534_17597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (22))){
var inst_17447 = (state_17508[(13)]);
var inst_17460 = (state_17508[(2)]);
var inst_17461 = cljs.core.not_empty.call(null,inst_17447);
var state_17508__$1 = (function (){var statearr_17535 = state_17508;
(statearr_17535[(27)] = inst_17460);

return statearr_17535;
})();
if(cljs.core.truth_(inst_17461)){
var statearr_17536_17598 = state_17508__$1;
(statearr_17536_17598[(1)] = (23));

} else {
var statearr_17537_17599 = state_17508__$1;
(statearr_17537_17599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (36))){
var state_17508__$1 = state_17508;
var statearr_17538_17600 = state_17508__$1;
(statearr_17538_17600[(2)] = null);

(statearr_17538_17600[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (29))){
var inst_17476 = (state_17508[(28)]);
var inst_17479 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17476);
var inst_17480 = cljs.core.pr_str.call(null,inst_17479);
var inst_17481 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_17480)].join('');
var inst_17482 = figwheel.client.utils.log.call(null,inst_17481);
var state_17508__$1 = state_17508;
var statearr_17539_17601 = state_17508__$1;
(statearr_17539_17601[(2)] = inst_17482);

(statearr_17539_17601[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (6))){
var inst_17429 = (state_17508[(2)]);
var state_17508__$1 = state_17508;
var statearr_17540_17602 = state_17508__$1;
(statearr_17540_17602[(2)] = inst_17429);

(statearr_17540_17602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (28))){
var inst_17476 = (state_17508[(28)]);
var inst_17473 = (state_17508[(2)]);
var inst_17474 = cljs.core.get.call(null,inst_17473,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_17475 = cljs.core.get.call(null,inst_17473,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_17476__$1 = cljs.core.get.call(null,inst_17473,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_17477 = cljs.core.not_empty.call(null,inst_17476__$1);
var state_17508__$1 = (function (){var statearr_17541 = state_17508;
(statearr_17541[(29)] = inst_17474);

(statearr_17541[(28)] = inst_17476__$1);

(statearr_17541[(24)] = inst_17475);

return statearr_17541;
})();
if(cljs.core.truth_(inst_17477)){
var statearr_17542_17603 = state_17508__$1;
(statearr_17542_17603[(1)] = (29));

} else {
var statearr_17543_17604 = state_17508__$1;
(statearr_17543_17604[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (25))){
var inst_17506 = (state_17508[(2)]);
var state_17508__$1 = state_17508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17508__$1,inst_17506);
} else {
if((state_val_17509 === (34))){
var inst_17474 = (state_17508[(29)]);
var inst_17494 = (state_17508[(2)]);
var inst_17495 = cljs.core.not_empty.call(null,inst_17474);
var state_17508__$1 = (function (){var statearr_17544 = state_17508;
(statearr_17544[(30)] = inst_17494);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17495)){
var statearr_17545_17605 = state_17508__$1;
(statearr_17545_17605[(1)] = (35));

} else {
var statearr_17546_17606 = state_17508__$1;
(statearr_17546_17606[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (17))){
var inst_17434 = (state_17508[(23)]);
var state_17508__$1 = state_17508;
var statearr_17547_17607 = state_17508__$1;
(statearr_17547_17607[(2)] = inst_17434);

(statearr_17547_17607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (3))){
var state_17508__$1 = state_17508;
var statearr_17548_17608 = state_17508__$1;
(statearr_17548_17608[(2)] = null);

(statearr_17548_17608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (12))){
var inst_17425 = (state_17508[(2)]);
var state_17508__$1 = state_17508;
var statearr_17549_17609 = state_17508__$1;
(statearr_17549_17609[(2)] = inst_17425);

(statearr_17549_17609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (2))){
var inst_17387 = (state_17508[(20)]);
var inst_17394 = cljs.core.seq.call(null,inst_17387);
var inst_17395 = inst_17394;
var inst_17396 = null;
var inst_17397 = (0);
var inst_17398 = (0);
var state_17508__$1 = (function (){var statearr_17550 = state_17508;
(statearr_17550[(7)] = inst_17397);

(statearr_17550[(8)] = inst_17395);

(statearr_17550[(9)] = inst_17398);

(statearr_17550[(10)] = inst_17396);

return statearr_17550;
})();
var statearr_17551_17610 = state_17508__$1;
(statearr_17551_17610[(2)] = null);

(statearr_17551_17610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (23))){
var inst_17440 = (state_17508[(12)]);
var inst_17447 = (state_17508[(13)]);
var inst_17445 = (state_17508[(14)]);
var inst_17444 = (state_17508[(15)]);
var inst_17467 = (state_17508[(19)]);
var inst_17441 = (state_17508[(16)]);
var inst_17463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_17466 = (function (){var files_not_loaded = inst_17447;
var res = inst_17445;
var res_SINGLEQUOTE_ = inst_17444;
var files_SINGLEQUOTE_ = inst_17441;
var all_files = inst_17440;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17447,inst_17445,inst_17444,inst_17467,inst_17441,inst_17463,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (p__17465){
var map__17552 = p__17465;
var map__17552__$1 = ((cljs.core.seq_QMARK_.call(null,map__17552))?cljs.core.apply.call(null,cljs.core.hash_map,map__17552):map__17552);
var meta_data = cljs.core.get.call(null,map__17552__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17447,inst_17445,inst_17444,inst_17467,inst_17441,inst_17463,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17467__$1 = cljs.core.group_by.call(null,inst_17466,inst_17447);
var inst_17468 = cljs.core.seq_QMARK_.call(null,inst_17467__$1);
var state_17508__$1 = (function (){var statearr_17553 = state_17508;
(statearr_17553[(31)] = inst_17463);

(statearr_17553[(19)] = inst_17467__$1);

return statearr_17553;
})();
if(inst_17468){
var statearr_17554_17611 = state_17508__$1;
(statearr_17554_17611[(1)] = (26));

} else {
var statearr_17555_17612 = state_17508__$1;
(statearr_17555_17612[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (35))){
var inst_17474 = (state_17508[(29)]);
var inst_17497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17474);
var inst_17498 = cljs.core.pr_str.call(null,inst_17497);
var inst_17499 = [cljs.core.str("not required: "),cljs.core.str(inst_17498)].join('');
var inst_17500 = figwheel.client.utils.log.call(null,inst_17499);
var state_17508__$1 = state_17508;
var statearr_17556_17613 = state_17508__$1;
(statearr_17556_17613[(2)] = inst_17500);

(statearr_17556_17613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (19))){
var inst_17440 = (state_17508[(12)]);
var inst_17445 = (state_17508[(14)]);
var inst_17444 = (state_17508[(15)]);
var inst_17441 = (state_17508[(16)]);
var inst_17444__$1 = (state_17508[(2)]);
var inst_17445__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_17444__$1);
var inst_17446 = (function (){var res = inst_17445__$1;
var res_SINGLEQUOTE_ = inst_17444__$1;
var files_SINGLEQUOTE_ = inst_17441;
var all_files = inst_17440;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17445,inst_17444,inst_17441,inst_17444__$1,inst_17445__$1,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (p1__17180_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__17180_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17440,inst_17445,inst_17444,inst_17441,inst_17444__$1,inst_17445__$1,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17447 = cljs.core.filter.call(null,inst_17446,inst_17444__$1);
var inst_17448 = cljs.core.not_empty.call(null,inst_17445__$1);
var state_17508__$1 = (function (){var statearr_17557 = state_17508;
(statearr_17557[(13)] = inst_17447);

(statearr_17557[(14)] = inst_17445__$1);

(statearr_17557[(15)] = inst_17444__$1);

return statearr_17557;
})();
if(cljs.core.truth_(inst_17448)){
var statearr_17558_17614 = state_17508__$1;
(statearr_17558_17614[(1)] = (20));

} else {
var statearr_17559_17615 = state_17508__$1;
(statearr_17559_17615[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (11))){
var state_17508__$1 = state_17508;
var statearr_17560_17616 = state_17508__$1;
(statearr_17560_17616[(2)] = null);

(statearr_17560_17616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (9))){
var inst_17427 = (state_17508[(2)]);
var state_17508__$1 = state_17508;
var statearr_17561_17617 = state_17508__$1;
(statearr_17561_17617[(2)] = inst_17427);

(statearr_17561_17617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (5))){
var inst_17397 = (state_17508[(7)]);
var inst_17398 = (state_17508[(9)]);
var inst_17400 = (inst_17398 < inst_17397);
var inst_17401 = inst_17400;
var state_17508__$1 = state_17508;
if(cljs.core.truth_(inst_17401)){
var statearr_17562_17618 = state_17508__$1;
(statearr_17562_17618[(1)] = (7));

} else {
var statearr_17563_17619 = state_17508__$1;
(statearr_17563_17619[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (14))){
var inst_17408 = (state_17508[(26)]);
var inst_17417 = cljs.core.first.call(null,inst_17408);
var inst_17418 = figwheel.client.file_reloading.eval_body.call(null,inst_17417);
var inst_17419 = cljs.core.next.call(null,inst_17408);
var inst_17395 = inst_17419;
var inst_17396 = null;
var inst_17397 = (0);
var inst_17398 = (0);
var state_17508__$1 = (function (){var statearr_17564 = state_17508;
(statearr_17564[(32)] = inst_17418);

(statearr_17564[(7)] = inst_17397);

(statearr_17564[(8)] = inst_17395);

(statearr_17564[(9)] = inst_17398);

(statearr_17564[(10)] = inst_17396);

return statearr_17564;
})();
var statearr_17565_17620 = state_17508__$1;
(statearr_17565_17620[(2)] = null);

(statearr_17565_17620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (26))){
var inst_17467 = (state_17508[(19)]);
var inst_17470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17467);
var state_17508__$1 = state_17508;
var statearr_17566_17621 = state_17508__$1;
(statearr_17566_17621[(2)] = inst_17470);

(statearr_17566_17621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (16))){
var inst_17434 = (state_17508[(23)]);
var inst_17436 = (function (){var all_files = inst_17434;
return ((function (all_files,inst_17434,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function (p1__17179_SHARP_){
return cljs.core.update_in.call(null,p1__17179_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_17434,state_val_17509,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var inst_17437 = cljs.core.map.call(null,inst_17436,inst_17434);
var state_17508__$1 = state_17508;
var statearr_17567_17622 = state_17508__$1;
(statearr_17567_17622[(2)] = inst_17437);

(statearr_17567_17622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (30))){
var state_17508__$1 = state_17508;
var statearr_17568_17623 = state_17508__$1;
(statearr_17568_17623[(2)] = null);

(statearr_17568_17623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (10))){
var inst_17408 = (state_17508[(26)]);
var inst_17410 = cljs.core.chunked_seq_QMARK_.call(null,inst_17408);
var state_17508__$1 = state_17508;
if(inst_17410){
var statearr_17569_17624 = state_17508__$1;
(statearr_17569_17624[(1)] = (13));

} else {
var statearr_17570_17625 = state_17508__$1;
(statearr_17570_17625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (18))){
var inst_17440 = (state_17508[(12)]);
var inst_17441 = (state_17508[(16)]);
var inst_17440__$1 = (state_17508[(2)]);
var inst_17441__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_17440__$1);
var inst_17442 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_17441__$1);
var state_17508__$1 = (function (){var statearr_17571 = state_17508;
(statearr_17571[(12)] = inst_17440__$1);

(statearr_17571[(16)] = inst_17441__$1);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17508__$1,(19),inst_17442);
} else {
if((state_val_17509 === (37))){
var inst_17503 = (state_17508[(2)]);
var state_17508__$1 = state_17508;
var statearr_17572_17626 = state_17508__$1;
(statearr_17572_17626[(2)] = inst_17503);

(statearr_17572_17626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17509 === (8))){
var inst_17395 = (state_17508[(8)]);
var inst_17408 = (state_17508[(26)]);
var inst_17408__$1 = cljs.core.seq.call(null,inst_17395);
var state_17508__$1 = (function (){var statearr_17573 = state_17508;
(statearr_17573[(26)] = inst_17408__$1);

return statearr_17573;
})();
if(inst_17408__$1){
var statearr_17574_17627 = state_17508__$1;
(statearr_17574_17627[(1)] = (10));

} else {
var statearr_17575_17628 = state_17508__$1;
(statearr_17575_17628[(1)] = (11));

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
});})(c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
;
return ((function (switch__6854__auto__,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____0 = (function (){
var statearr_17579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17579[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__);

(statearr_17579[(1)] = (1));

return statearr_17579;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____1 = (function (state_17508){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_17508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e17580){if((e17580 instanceof Object)){
var ex__6858__auto__ = e17580;
var statearr_17581_17629 = state_17508;
(statearr_17581_17629[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17630 = state_17508;
state_17508 = G__17630;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__ = function(state_17508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____1.call(this,state_17508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
})();
var state__6918__auto__ = (function (){var statearr_17582 = f__6917__auto__.call(null);
(statearr_17582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_17582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,map__17383,map__17383__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17384,map__17384__$1,msg,files))
);

return c__6916__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__17633,link){
var map__17635 = p__17633;
var map__17635__$1 = ((cljs.core.seq_QMARK_.call(null,map__17635))?cljs.core.apply.call(null,cljs.core.hash_map,map__17635):map__17635);
var file = cljs.core.get.call(null,map__17635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__17635,map__17635__$1,file){
return (function (p1__17631_SHARP_,p2__17632_SHARP_){
if(cljs.core._EQ_.call(null,p1__17631_SHARP_,p2__17632_SHARP_)){
return p1__17631_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__17635,map__17635__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__17639){
var map__17640 = p__17639;
var map__17640__$1 = ((cljs.core.seq_QMARK_.call(null,map__17640))?cljs.core.apply.call(null,cljs.core.hash_map,map__17640):map__17640);
var current_url_length = cljs.core.get.call(null,map__17640__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__17640__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__17636_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__17636_SHARP_);
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
var G__17642 = arguments.length;
switch (G__17642) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__17644){
var map__17646 = p__17644;
var map__17646__$1 = ((cljs.core.seq_QMARK_.call(null,map__17646))?cljs.core.apply.call(null,cljs.core.hash_map,map__17646):map__17646);
var f_data = map__17646__$1;
var request_url = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__17647,files_msg){
var map__17669 = p__17647;
var map__17669__$1 = ((cljs.core.seq_QMARK_.call(null,map__17669))?cljs.core.apply.call(null,cljs.core.hash_map,map__17669):map__17669);
var opts = map__17669__$1;
var on_cssload = cljs.core.get.call(null,map__17669__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__17670_17690 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__17671_17691 = null;
var count__17672_17692 = (0);
var i__17673_17693 = (0);
while(true){
if((i__17673_17693 < count__17672_17692)){
var f_17694 = cljs.core._nth.call(null,chunk__17671_17691,i__17673_17693);
figwheel.client.file_reloading.reload_css_file.call(null,f_17694);

var G__17695 = seq__17670_17690;
var G__17696 = chunk__17671_17691;
var G__17697 = count__17672_17692;
var G__17698 = (i__17673_17693 + (1));
seq__17670_17690 = G__17695;
chunk__17671_17691 = G__17696;
count__17672_17692 = G__17697;
i__17673_17693 = G__17698;
continue;
} else {
var temp__4126__auto___17699 = cljs.core.seq.call(null,seq__17670_17690);
if(temp__4126__auto___17699){
var seq__17670_17700__$1 = temp__4126__auto___17699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17670_17700__$1)){
var c__5118__auto___17701 = cljs.core.chunk_first.call(null,seq__17670_17700__$1);
var G__17702 = cljs.core.chunk_rest.call(null,seq__17670_17700__$1);
var G__17703 = c__5118__auto___17701;
var G__17704 = cljs.core.count.call(null,c__5118__auto___17701);
var G__17705 = (0);
seq__17670_17690 = G__17702;
chunk__17671_17691 = G__17703;
count__17672_17692 = G__17704;
i__17673_17693 = G__17705;
continue;
} else {
var f_17706 = cljs.core.first.call(null,seq__17670_17700__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_17706);

var G__17707 = cljs.core.next.call(null,seq__17670_17700__$1);
var G__17708 = null;
var G__17709 = (0);
var G__17710 = (0);
seq__17670_17690 = G__17707;
chunk__17671_17691 = G__17708;
count__17672_17692 = G__17709;
i__17673_17693 = G__17710;
continue;
}
} else {
}
}
break;
}

var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,map__17669,map__17669__$1,opts,on_cssload){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,map__17669,map__17669__$1,opts,on_cssload){
return (function (state_17680){
var state_val_17681 = (state_17680[(1)]);
if((state_val_17681 === (2))){
var inst_17676 = (state_17680[(2)]);
var inst_17677 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_17678 = on_cssload.call(null,inst_17677);
var state_17680__$1 = (function (){var statearr_17682 = state_17680;
(statearr_17682[(7)] = inst_17676);

return statearr_17682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17680__$1,inst_17678);
} else {
if((state_val_17681 === (1))){
var inst_17674 = cljs.core.async.timeout.call(null,(100));
var state_17680__$1 = state_17680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17680__$1,(2),inst_17674);
} else {
return null;
}
}
});})(c__6916__auto__,map__17669,map__17669__$1,opts,on_cssload))
;
return ((function (switch__6854__auto__,c__6916__auto__,map__17669,map__17669__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____0 = (function (){
var statearr_17686 = [null,null,null,null,null,null,null,null];
(statearr_17686[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__);

(statearr_17686[(1)] = (1));

return statearr_17686;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____1 = (function (state_17680){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_17680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e17687){if((e17687 instanceof Object)){
var ex__6858__auto__ = e17687;
var statearr_17688_17711 = state_17680;
(statearr_17688_17711[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17712 = state_17680;
state_17680 = G__17712;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__ = function(state_17680){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____1.call(this,state_17680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,map__17669,map__17669__$1,opts,on_cssload))
})();
var state__6918__auto__ = (function (){var statearr_17689 = f__6917__auto__.call(null);
(statearr_17689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_17689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,map__17669,map__17669__$1,opts,on_cssload))
);

return c__6916__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440296649478