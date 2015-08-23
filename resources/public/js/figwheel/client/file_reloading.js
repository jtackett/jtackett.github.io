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
return cljs.core.reduce.call(null,(function (p1__17059_SHARP_,p2__17060_SHARP_){
var and__4321__auto__ = p1__17059_SHARP_;
if(cljs.core.truth_(and__4321__auto__)){
return p2__17060_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__17062_SHARP_,p2__17061_SHARP_){
return [cljs.core.str(p2__17061_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17063){
var map__17064 = p__17063;
var map__17064__$1 = ((cljs.core.seq_QMARK_.call(null,map__17064))?cljs.core.apply.call(null,cljs.core.hash_map,map__17064):map__17064);
var file = cljs.core.get.call(null,map__17064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__17065){
var map__17066 = p__17065;
var map__17066__$1 = ((cljs.core.seq_QMARK_.call(null,map__17066))?cljs.core.apply.call(null,cljs.core.hash_map,map__17066):map__17066);
var namespace = cljs.core.get.call(null,map__17066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e17067){if((e17067 instanceof Error)){
var e = e17067;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e17067;

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
var G__17069 = arguments.length;
switch (G__17069) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__17071,callback){
var map__17073 = p__17071;
var map__17073__$1 = ((cljs.core.seq_QMARK_.call(null,map__17073))?cljs.core.apply.call(null,cljs.core.hash_map,map__17073):map__17073);
var file_msg = map__17073__$1;
var request_url = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__17073,map__17073__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__17073,map__17073__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__17074){
var map__17076 = p__17074;
var map__17076__$1 = ((cljs.core.seq_QMARK_.call(null,map__17076))?cljs.core.apply.call(null,cljs.core.hash_map,map__17076):map__17076);
var file_msg = map__17076__$1;
var meta_data = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__17077,callback){
var map__17079 = p__17077;
var map__17079__$1 = ((cljs.core.seq_QMARK_.call(null,map__17079))?cljs.core.apply.call(null,cljs.core.hash_map,map__17079):map__17079);
var file_msg = map__17079__$1;
var namespace = cljs.core.get.call(null,map__17079__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__17079__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__6916__auto___17166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto___17166,out){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto___17166,out){
return (function (state_17148){
var state_val_17149 = (state_17148[(1)]);
if((state_val_17149 === (7))){
var inst_17132 = (state_17148[(7)]);
var inst_17138 = (state_17148[(2)]);
var inst_17139 = cljs.core.async.put_BANG_.call(null,out,inst_17138);
var inst_17128 = inst_17132;
var state_17148__$1 = (function (){var statearr_17150 = state_17148;
(statearr_17150[(8)] = inst_17139);

(statearr_17150[(9)] = inst_17128);

return statearr_17150;
})();
var statearr_17151_17167 = state_17148__$1;
(statearr_17151_17167[(2)] = null);

(statearr_17151_17167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (6))){
var inst_17144 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17152_17168 = state_17148__$1;
(statearr_17152_17168[(2)] = inst_17144);

(statearr_17152_17168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (5))){
var inst_17142 = cljs.core.async.close_BANG_.call(null,out);
var state_17148__$1 = state_17148;
var statearr_17153_17169 = state_17148__$1;
(statearr_17153_17169[(2)] = inst_17142);

(statearr_17153_17169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (4))){
var inst_17131 = (state_17148[(10)]);
var inst_17136 = figwheel.client.file_reloading.reload_js_file.call(null,inst_17131);
var state_17148__$1 = state_17148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17148__$1,(7),inst_17136);
} else {
if((state_val_17149 === (3))){
var inst_17146 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17148__$1,inst_17146);
} else {
if((state_val_17149 === (2))){
var inst_17131 = (state_17148[(10)]);
var inst_17128 = (state_17148[(9)]);
var inst_17131__$1 = cljs.core.nth.call(null,inst_17128,(0),null);
var inst_17132 = cljs.core.nthnext.call(null,inst_17128,(1));
var inst_17133 = (inst_17131__$1 == null);
var inst_17134 = cljs.core.not.call(null,inst_17133);
var state_17148__$1 = (function (){var statearr_17154 = state_17148;
(statearr_17154[(10)] = inst_17131__$1);

(statearr_17154[(7)] = inst_17132);

return statearr_17154;
})();
if(inst_17134){
var statearr_17155_17170 = state_17148__$1;
(statearr_17155_17170[(1)] = (4));

} else {
var statearr_17156_17171 = state_17148__$1;
(statearr_17156_17171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (1))){
var inst_17126 = cljs.core.nth.call(null,files,(0),null);
var inst_17127 = cljs.core.nthnext.call(null,files,(1));
var inst_17128 = files;
var state_17148__$1 = (function (){var statearr_17157 = state_17148;
(statearr_17157[(11)] = inst_17126);

(statearr_17157[(9)] = inst_17128);

(statearr_17157[(12)] = inst_17127);

return statearr_17157;
})();
var statearr_17158_17172 = state_17148__$1;
(statearr_17158_17172[(2)] = null);

(statearr_17158_17172[(1)] = (2));


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
});})(c__6916__auto___17166,out))
;
return ((function (switch__6854__auto__,c__6916__auto___17166,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____0 = (function (){
var statearr_17162 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17162[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__);

(statearr_17162[(1)] = (1));

return statearr_17162;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____1 = (function (state_17148){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_17148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e17163){if((e17163 instanceof Object)){
var ex__6858__auto__ = e17163;
var statearr_17164_17173 = state_17148;
(statearr_17164_17173[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17174 = state_17148;
state_17148 = G__17174;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__ = function(state_17148){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____1.call(this,state_17148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto___17166,out))
})();
var state__6918__auto__ = (function (){var statearr_17165 = f__6917__auto__.call(null);
(statearr_17165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto___17166);

return statearr_17165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto___17166,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__17175,p__17176){
var map__17179 = p__17175;
var map__17179__$1 = ((cljs.core.seq_QMARK_.call(null,map__17179))?cljs.core.apply.call(null,cljs.core.hash_map,map__17179):map__17179);
var opts = map__17179__$1;
var url_rewriter = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__17180 = p__17176;
var map__17180__$1 = ((cljs.core.seq_QMARK_.call(null,map__17180))?cljs.core.apply.call(null,cljs.core.hash_map,map__17180):map__17180);
var file_msg = map__17180__$1;
var file = cljs.core.get.call(null,map__17180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__17181){
var map__17184 = p__17181;
var map__17184__$1 = ((cljs.core.seq_QMARK_.call(null,map__17184))?cljs.core.apply.call(null,cljs.core.hash_map,map__17184):map__17184);
var file = cljs.core.get.call(null,map__17184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__17184__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e17185){var e = e17185;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__17190,p__17191){
var map__17392 = p__17190;
var map__17392__$1 = ((cljs.core.seq_QMARK_.call(null,map__17392))?cljs.core.apply.call(null,cljs.core.hash_map,map__17392):map__17392);
var opts = map__17392__$1;
var load_unchanged_files = cljs.core.get.call(null,map__17392__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__17392__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__17392__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__17393 = p__17191;
var map__17393__$1 = ((cljs.core.seq_QMARK_.call(null,map__17393))?cljs.core.apply.call(null,cljs.core.hash_map,map__17393):map__17393);
var msg = map__17393__$1;
var files = cljs.core.get.call(null,map__17393__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (state_17517){
var state_val_17518 = (state_17517[(1)]);
if((state_val_17518 === (7))){
var inst_17404 = (state_17517[(7)]);
var inst_17407 = (state_17517[(8)]);
var inst_17406 = (state_17517[(9)]);
var inst_17405 = (state_17517[(10)]);
var inst_17412 = cljs.core._nth.call(null,inst_17405,inst_17407);
var inst_17413 = figwheel.client.file_reloading.eval_body.call(null,inst_17412);
var inst_17414 = (inst_17407 + (1));
var tmp17519 = inst_17404;
var tmp17520 = inst_17406;
var tmp17521 = inst_17405;
var inst_17404__$1 = tmp17519;
var inst_17405__$1 = tmp17521;
var inst_17406__$1 = tmp17520;
var inst_17407__$1 = inst_17414;
var state_17517__$1 = (function (){var statearr_17522 = state_17517;
(statearr_17522[(7)] = inst_17404__$1);

(statearr_17522[(8)] = inst_17407__$1);

(statearr_17522[(11)] = inst_17413);

(statearr_17522[(9)] = inst_17406__$1);

(statearr_17522[(10)] = inst_17405__$1);

return statearr_17522;
})();
var statearr_17523_17592 = state_17517__$1;
(statearr_17523_17592[(2)] = null);

(statearr_17523_17592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (20))){
var inst_17450 = (state_17517[(12)]);
var inst_17456 = (state_17517[(13)]);
var inst_17453 = (state_17517[(14)]);
var inst_17454 = (state_17517[(15)]);
var inst_17449 = (state_17517[(16)]);
var inst_17459 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_17461 = (function (){var files_not_loaded = inst_17456;
var res = inst_17454;
var res_SINGLEQUOTE_ = inst_17453;
var files_SINGLEQUOTE_ = inst_17450;
var all_files = inst_17449;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17456,inst_17453,inst_17454,inst_17449,inst_17459,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (p__17460){
var map__17524 = p__17460;
var map__17524__$1 = ((cljs.core.seq_QMARK_.call(null,map__17524))?cljs.core.apply.call(null,cljs.core.hash_map,map__17524):map__17524);
var file = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17456,inst_17453,inst_17454,inst_17449,inst_17459,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17462 = cljs.core.map.call(null,inst_17461,inst_17454);
var inst_17463 = cljs.core.pr_str.call(null,inst_17462);
var inst_17464 = figwheel.client.utils.log.call(null,inst_17463);
var inst_17465 = (function (){var files_not_loaded = inst_17456;
var res = inst_17454;
var res_SINGLEQUOTE_ = inst_17453;
var files_SINGLEQUOTE_ = inst_17450;
var all_files = inst_17449;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17456,inst_17453,inst_17454,inst_17449,inst_17459,inst_17461,inst_17462,inst_17463,inst_17464,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17456,inst_17453,inst_17454,inst_17449,inst_17459,inst_17461,inst_17462,inst_17463,inst_17464,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17466 = setTimeout(inst_17465,(10));
var state_17517__$1 = (function (){var statearr_17525 = state_17517;
(statearr_17525[(17)] = inst_17459);

(statearr_17525[(18)] = inst_17464);

return statearr_17525;
})();
var statearr_17526_17593 = state_17517__$1;
(statearr_17526_17593[(2)] = inst_17466);

(statearr_17526_17593[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (27))){
var inst_17476 = (state_17517[(19)]);
var state_17517__$1 = state_17517;
var statearr_17527_17594 = state_17517__$1;
(statearr_17527_17594[(2)] = inst_17476);

(statearr_17527_17594[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (1))){
var inst_17396 = (state_17517[(20)]);
var inst_17394 = before_jsload.call(null,files);
var inst_17395 = (function (){return ((function (inst_17396,inst_17394,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (p1__17186_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__17186_SHARP_);
});
;})(inst_17396,inst_17394,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17396__$1 = cljs.core.filter.call(null,inst_17395,files);
var inst_17397 = cljs.core.not_empty.call(null,inst_17396__$1);
var state_17517__$1 = (function (){var statearr_17528 = state_17517;
(statearr_17528[(21)] = inst_17394);

(statearr_17528[(20)] = inst_17396__$1);

return statearr_17528;
})();
if(cljs.core.truth_(inst_17397)){
var statearr_17529_17595 = state_17517__$1;
(statearr_17529_17595[(1)] = (2));

} else {
var statearr_17530_17596 = state_17517__$1;
(statearr_17530_17596[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (24))){
var state_17517__$1 = state_17517;
var statearr_17531_17597 = state_17517__$1;
(statearr_17531_17597[(2)] = null);

(statearr_17531_17597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (4))){
var inst_17441 = (state_17517[(2)]);
var inst_17442 = (function (){return ((function (inst_17441,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (p1__17187_SHARP_){
var and__4321__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__17187_SHARP_);
if(cljs.core.truth_(and__4321__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__17187_SHARP_));
} else {
return and__4321__auto__;
}
});
;})(inst_17441,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17443 = cljs.core.filter.call(null,inst_17442,files);
var state_17517__$1 = (function (){var statearr_17532 = state_17517;
(statearr_17532[(22)] = inst_17443);

(statearr_17532[(23)] = inst_17441);

return statearr_17532;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_17533_17598 = state_17517__$1;
(statearr_17533_17598[(1)] = (16));

} else {
var statearr_17534_17599 = state_17517__$1;
(statearr_17534_17599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (15))){
var inst_17431 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17535_17600 = state_17517__$1;
(statearr_17535_17600[(2)] = inst_17431);

(statearr_17535_17600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (21))){
var state_17517__$1 = state_17517;
var statearr_17536_17601 = state_17517__$1;
(statearr_17536_17601[(2)] = null);

(statearr_17536_17601[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (31))){
var inst_17484 = (state_17517[(24)]);
var inst_17494 = (state_17517[(2)]);
var inst_17495 = cljs.core.not_empty.call(null,inst_17484);
var state_17517__$1 = (function (){var statearr_17537 = state_17517;
(statearr_17537[(25)] = inst_17494);

return statearr_17537;
})();
if(cljs.core.truth_(inst_17495)){
var statearr_17538_17602 = state_17517__$1;
(statearr_17538_17602[(1)] = (32));

} else {
var statearr_17539_17603 = state_17517__$1;
(statearr_17539_17603[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (32))){
var inst_17484 = (state_17517[(24)]);
var inst_17497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17484);
var inst_17498 = cljs.core.pr_str.call(null,inst_17497);
var inst_17499 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_17498)].join('');
var inst_17500 = figwheel.client.utils.log.call(null,inst_17499);
var state_17517__$1 = state_17517;
var statearr_17540_17604 = state_17517__$1;
(statearr_17540_17604[(2)] = inst_17500);

(statearr_17540_17604[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (33))){
var state_17517__$1 = state_17517;
var statearr_17541_17605 = state_17517__$1;
(statearr_17541_17605[(2)] = null);

(statearr_17541_17605[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (13))){
var inst_17417 = (state_17517[(26)]);
var inst_17421 = cljs.core.chunk_first.call(null,inst_17417);
var inst_17422 = cljs.core.chunk_rest.call(null,inst_17417);
var inst_17423 = cljs.core.count.call(null,inst_17421);
var inst_17404 = inst_17422;
var inst_17405 = inst_17421;
var inst_17406 = inst_17423;
var inst_17407 = (0);
var state_17517__$1 = (function (){var statearr_17542 = state_17517;
(statearr_17542[(7)] = inst_17404);

(statearr_17542[(8)] = inst_17407);

(statearr_17542[(9)] = inst_17406);

(statearr_17542[(10)] = inst_17405);

return statearr_17542;
})();
var statearr_17543_17606 = state_17517__$1;
(statearr_17543_17606[(2)] = null);

(statearr_17543_17606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (22))){
var inst_17456 = (state_17517[(13)]);
var inst_17469 = (state_17517[(2)]);
var inst_17470 = cljs.core.not_empty.call(null,inst_17456);
var state_17517__$1 = (function (){var statearr_17544 = state_17517;
(statearr_17544[(27)] = inst_17469);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17470)){
var statearr_17545_17607 = state_17517__$1;
(statearr_17545_17607[(1)] = (23));

} else {
var statearr_17546_17608 = state_17517__$1;
(statearr_17546_17608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (36))){
var state_17517__$1 = state_17517;
var statearr_17547_17609 = state_17517__$1;
(statearr_17547_17609[(2)] = null);

(statearr_17547_17609[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (29))){
var inst_17485 = (state_17517[(28)]);
var inst_17488 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17485);
var inst_17489 = cljs.core.pr_str.call(null,inst_17488);
var inst_17490 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_17489)].join('');
var inst_17491 = figwheel.client.utils.log.call(null,inst_17490);
var state_17517__$1 = state_17517;
var statearr_17548_17610 = state_17517__$1;
(statearr_17548_17610[(2)] = inst_17491);

(statearr_17548_17610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (6))){
var inst_17438 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17549_17611 = state_17517__$1;
(statearr_17549_17611[(2)] = inst_17438);

(statearr_17549_17611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (28))){
var inst_17485 = (state_17517[(28)]);
var inst_17482 = (state_17517[(2)]);
var inst_17483 = cljs.core.get.call(null,inst_17482,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_17484 = cljs.core.get.call(null,inst_17482,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_17485__$1 = cljs.core.get.call(null,inst_17482,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_17486 = cljs.core.not_empty.call(null,inst_17485__$1);
var state_17517__$1 = (function (){var statearr_17550 = state_17517;
(statearr_17550[(24)] = inst_17484);

(statearr_17550[(29)] = inst_17483);

(statearr_17550[(28)] = inst_17485__$1);

return statearr_17550;
})();
if(cljs.core.truth_(inst_17486)){
var statearr_17551_17612 = state_17517__$1;
(statearr_17551_17612[(1)] = (29));

} else {
var statearr_17552_17613 = state_17517__$1;
(statearr_17552_17613[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (25))){
var inst_17515 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17517__$1,inst_17515);
} else {
if((state_val_17518 === (34))){
var inst_17483 = (state_17517[(29)]);
var inst_17503 = (state_17517[(2)]);
var inst_17504 = cljs.core.not_empty.call(null,inst_17483);
var state_17517__$1 = (function (){var statearr_17553 = state_17517;
(statearr_17553[(30)] = inst_17503);

return statearr_17553;
})();
if(cljs.core.truth_(inst_17504)){
var statearr_17554_17614 = state_17517__$1;
(statearr_17554_17614[(1)] = (35));

} else {
var statearr_17555_17615 = state_17517__$1;
(statearr_17555_17615[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (17))){
var inst_17443 = (state_17517[(22)]);
var state_17517__$1 = state_17517;
var statearr_17556_17616 = state_17517__$1;
(statearr_17556_17616[(2)] = inst_17443);

(statearr_17556_17616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (3))){
var state_17517__$1 = state_17517;
var statearr_17557_17617 = state_17517__$1;
(statearr_17557_17617[(2)] = null);

(statearr_17557_17617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (12))){
var inst_17434 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17558_17618 = state_17517__$1;
(statearr_17558_17618[(2)] = inst_17434);

(statearr_17558_17618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (2))){
var inst_17396 = (state_17517[(20)]);
var inst_17403 = cljs.core.seq.call(null,inst_17396);
var inst_17404 = inst_17403;
var inst_17405 = null;
var inst_17406 = (0);
var inst_17407 = (0);
var state_17517__$1 = (function (){var statearr_17559 = state_17517;
(statearr_17559[(7)] = inst_17404);

(statearr_17559[(8)] = inst_17407);

(statearr_17559[(9)] = inst_17406);

(statearr_17559[(10)] = inst_17405);

return statearr_17559;
})();
var statearr_17560_17619 = state_17517__$1;
(statearr_17560_17619[(2)] = null);

(statearr_17560_17619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (23))){
var inst_17450 = (state_17517[(12)]);
var inst_17456 = (state_17517[(13)]);
var inst_17453 = (state_17517[(14)]);
var inst_17476 = (state_17517[(19)]);
var inst_17454 = (state_17517[(15)]);
var inst_17449 = (state_17517[(16)]);
var inst_17472 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_17475 = (function (){var files_not_loaded = inst_17456;
var res = inst_17454;
var res_SINGLEQUOTE_ = inst_17453;
var files_SINGLEQUOTE_ = inst_17450;
var all_files = inst_17449;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17456,inst_17453,inst_17476,inst_17454,inst_17449,inst_17472,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (p__17474){
var map__17561 = p__17474;
var map__17561__$1 = ((cljs.core.seq_QMARK_.call(null,map__17561))?cljs.core.apply.call(null,cljs.core.hash_map,map__17561):map__17561);
var meta_data = cljs.core.get.call(null,map__17561__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17456,inst_17453,inst_17476,inst_17454,inst_17449,inst_17472,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17476__$1 = cljs.core.group_by.call(null,inst_17475,inst_17456);
var inst_17477 = cljs.core.seq_QMARK_.call(null,inst_17476__$1);
var state_17517__$1 = (function (){var statearr_17562 = state_17517;
(statearr_17562[(31)] = inst_17472);

(statearr_17562[(19)] = inst_17476__$1);

return statearr_17562;
})();
if(inst_17477){
var statearr_17563_17620 = state_17517__$1;
(statearr_17563_17620[(1)] = (26));

} else {
var statearr_17564_17621 = state_17517__$1;
(statearr_17564_17621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (35))){
var inst_17483 = (state_17517[(29)]);
var inst_17506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17483);
var inst_17507 = cljs.core.pr_str.call(null,inst_17506);
var inst_17508 = [cljs.core.str("not required: "),cljs.core.str(inst_17507)].join('');
var inst_17509 = figwheel.client.utils.log.call(null,inst_17508);
var state_17517__$1 = state_17517;
var statearr_17565_17622 = state_17517__$1;
(statearr_17565_17622[(2)] = inst_17509);

(statearr_17565_17622[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (19))){
var inst_17450 = (state_17517[(12)]);
var inst_17453 = (state_17517[(14)]);
var inst_17454 = (state_17517[(15)]);
var inst_17449 = (state_17517[(16)]);
var inst_17453__$1 = (state_17517[(2)]);
var inst_17454__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_17453__$1);
var inst_17455 = (function (){var res = inst_17454__$1;
var res_SINGLEQUOTE_ = inst_17453__$1;
var files_SINGLEQUOTE_ = inst_17450;
var all_files = inst_17449;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17453,inst_17454,inst_17449,inst_17453__$1,inst_17454__$1,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (p1__17189_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__17189_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17450,inst_17453,inst_17454,inst_17449,inst_17453__$1,inst_17454__$1,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17456 = cljs.core.filter.call(null,inst_17455,inst_17453__$1);
var inst_17457 = cljs.core.not_empty.call(null,inst_17454__$1);
var state_17517__$1 = (function (){var statearr_17566 = state_17517;
(statearr_17566[(13)] = inst_17456);

(statearr_17566[(14)] = inst_17453__$1);

(statearr_17566[(15)] = inst_17454__$1);

return statearr_17566;
})();
if(cljs.core.truth_(inst_17457)){
var statearr_17567_17623 = state_17517__$1;
(statearr_17567_17623[(1)] = (20));

} else {
var statearr_17568_17624 = state_17517__$1;
(statearr_17568_17624[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (11))){
var state_17517__$1 = state_17517;
var statearr_17569_17625 = state_17517__$1;
(statearr_17569_17625[(2)] = null);

(statearr_17569_17625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (9))){
var inst_17436 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17570_17626 = state_17517__$1;
(statearr_17570_17626[(2)] = inst_17436);

(statearr_17570_17626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (5))){
var inst_17407 = (state_17517[(8)]);
var inst_17406 = (state_17517[(9)]);
var inst_17409 = (inst_17407 < inst_17406);
var inst_17410 = inst_17409;
var state_17517__$1 = state_17517;
if(cljs.core.truth_(inst_17410)){
var statearr_17571_17627 = state_17517__$1;
(statearr_17571_17627[(1)] = (7));

} else {
var statearr_17572_17628 = state_17517__$1;
(statearr_17572_17628[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (14))){
var inst_17417 = (state_17517[(26)]);
var inst_17426 = cljs.core.first.call(null,inst_17417);
var inst_17427 = figwheel.client.file_reloading.eval_body.call(null,inst_17426);
var inst_17428 = cljs.core.next.call(null,inst_17417);
var inst_17404 = inst_17428;
var inst_17405 = null;
var inst_17406 = (0);
var inst_17407 = (0);
var state_17517__$1 = (function (){var statearr_17573 = state_17517;
(statearr_17573[(7)] = inst_17404);

(statearr_17573[(8)] = inst_17407);

(statearr_17573[(32)] = inst_17427);

(statearr_17573[(9)] = inst_17406);

(statearr_17573[(10)] = inst_17405);

return statearr_17573;
})();
var statearr_17574_17629 = state_17517__$1;
(statearr_17574_17629[(2)] = null);

(statearr_17574_17629[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (26))){
var inst_17476 = (state_17517[(19)]);
var inst_17479 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17476);
var state_17517__$1 = state_17517;
var statearr_17575_17630 = state_17517__$1;
(statearr_17575_17630[(2)] = inst_17479);

(statearr_17575_17630[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (16))){
var inst_17443 = (state_17517[(22)]);
var inst_17445 = (function (){var all_files = inst_17443;
return ((function (all_files,inst_17443,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function (p1__17188_SHARP_){
return cljs.core.update_in.call(null,p1__17188_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_17443,state_val_17518,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var inst_17446 = cljs.core.map.call(null,inst_17445,inst_17443);
var state_17517__$1 = state_17517;
var statearr_17576_17631 = state_17517__$1;
(statearr_17576_17631[(2)] = inst_17446);

(statearr_17576_17631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (30))){
var state_17517__$1 = state_17517;
var statearr_17577_17632 = state_17517__$1;
(statearr_17577_17632[(2)] = null);

(statearr_17577_17632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (10))){
var inst_17417 = (state_17517[(26)]);
var inst_17419 = cljs.core.chunked_seq_QMARK_.call(null,inst_17417);
var state_17517__$1 = state_17517;
if(inst_17419){
var statearr_17578_17633 = state_17517__$1;
(statearr_17578_17633[(1)] = (13));

} else {
var statearr_17579_17634 = state_17517__$1;
(statearr_17579_17634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (18))){
var inst_17450 = (state_17517[(12)]);
var inst_17449 = (state_17517[(16)]);
var inst_17449__$1 = (state_17517[(2)]);
var inst_17450__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_17449__$1);
var inst_17451 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_17450__$1);
var state_17517__$1 = (function (){var statearr_17580 = state_17517;
(statearr_17580[(12)] = inst_17450__$1);

(statearr_17580[(16)] = inst_17449__$1);

return statearr_17580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17517__$1,(19),inst_17451);
} else {
if((state_val_17518 === (37))){
var inst_17512 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17581_17635 = state_17517__$1;
(statearr_17581_17635[(2)] = inst_17512);

(statearr_17581_17635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (8))){
var inst_17404 = (state_17517[(7)]);
var inst_17417 = (state_17517[(26)]);
var inst_17417__$1 = cljs.core.seq.call(null,inst_17404);
var state_17517__$1 = (function (){var statearr_17582 = state_17517;
(statearr_17582[(26)] = inst_17417__$1);

return statearr_17582;
})();
if(inst_17417__$1){
var statearr_17583_17636 = state_17517__$1;
(statearr_17583_17636[(1)] = (10));

} else {
var statearr_17584_17637 = state_17517__$1;
(statearr_17584_17637[(1)] = (11));

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
});})(c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
;
return ((function (switch__6854__auto__,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____0 = (function (){
var statearr_17588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17588[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__);

(statearr_17588[(1)] = (1));

return statearr_17588;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____1 = (function (state_17517){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_17517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e17589){if((e17589 instanceof Object)){
var ex__6858__auto__ = e17589;
var statearr_17590_17638 = state_17517;
(statearr_17590_17638[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17639 = state_17517;
state_17517 = G__17639;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__ = function(state_17517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____1.call(this,state_17517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
})();
var state__6918__auto__ = (function (){var statearr_17591 = f__6917__auto__.call(null);
(statearr_17591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_17591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,map__17392,map__17392__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17393,map__17393__$1,msg,files))
);

return c__6916__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__17642,link){
var map__17644 = p__17642;
var map__17644__$1 = ((cljs.core.seq_QMARK_.call(null,map__17644))?cljs.core.apply.call(null,cljs.core.hash_map,map__17644):map__17644);
var file = cljs.core.get.call(null,map__17644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__17644,map__17644__$1,file){
return (function (p1__17640_SHARP_,p2__17641_SHARP_){
if(cljs.core._EQ_.call(null,p1__17640_SHARP_,p2__17641_SHARP_)){
return p1__17640_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__17644,map__17644__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__17648){
var map__17649 = p__17648;
var map__17649__$1 = ((cljs.core.seq_QMARK_.call(null,map__17649))?cljs.core.apply.call(null,cljs.core.hash_map,map__17649):map__17649);
var current_url_length = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__17645_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__17645_SHARP_);
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
var G__17651 = arguments.length;
switch (G__17651) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__17653){
var map__17655 = p__17653;
var map__17655__$1 = ((cljs.core.seq_QMARK_.call(null,map__17655))?cljs.core.apply.call(null,cljs.core.hash_map,map__17655):map__17655);
var f_data = map__17655__$1;
var request_url = cljs.core.get.call(null,map__17655__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__17655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__17656,files_msg){
var map__17678 = p__17656;
var map__17678__$1 = ((cljs.core.seq_QMARK_.call(null,map__17678))?cljs.core.apply.call(null,cljs.core.hash_map,map__17678):map__17678);
var opts = map__17678__$1;
var on_cssload = cljs.core.get.call(null,map__17678__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__17679_17699 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__17680_17700 = null;
var count__17681_17701 = (0);
var i__17682_17702 = (0);
while(true){
if((i__17682_17702 < count__17681_17701)){
var f_17703 = cljs.core._nth.call(null,chunk__17680_17700,i__17682_17702);
figwheel.client.file_reloading.reload_css_file.call(null,f_17703);

var G__17704 = seq__17679_17699;
var G__17705 = chunk__17680_17700;
var G__17706 = count__17681_17701;
var G__17707 = (i__17682_17702 + (1));
seq__17679_17699 = G__17704;
chunk__17680_17700 = G__17705;
count__17681_17701 = G__17706;
i__17682_17702 = G__17707;
continue;
} else {
var temp__4126__auto___17708 = cljs.core.seq.call(null,seq__17679_17699);
if(temp__4126__auto___17708){
var seq__17679_17709__$1 = temp__4126__auto___17708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17679_17709__$1)){
var c__5118__auto___17710 = cljs.core.chunk_first.call(null,seq__17679_17709__$1);
var G__17711 = cljs.core.chunk_rest.call(null,seq__17679_17709__$1);
var G__17712 = c__5118__auto___17710;
var G__17713 = cljs.core.count.call(null,c__5118__auto___17710);
var G__17714 = (0);
seq__17679_17699 = G__17711;
chunk__17680_17700 = G__17712;
count__17681_17701 = G__17713;
i__17682_17702 = G__17714;
continue;
} else {
var f_17715 = cljs.core.first.call(null,seq__17679_17709__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_17715);

var G__17716 = cljs.core.next.call(null,seq__17679_17709__$1);
var G__17717 = null;
var G__17718 = (0);
var G__17719 = (0);
seq__17679_17699 = G__17716;
chunk__17680_17700 = G__17717;
count__17681_17701 = G__17718;
i__17682_17702 = G__17719;
continue;
}
} else {
}
}
break;
}

var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__,map__17678,map__17678__$1,opts,on_cssload){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__,map__17678,map__17678__$1,opts,on_cssload){
return (function (state_17689){
var state_val_17690 = (state_17689[(1)]);
if((state_val_17690 === (2))){
var inst_17685 = (state_17689[(2)]);
var inst_17686 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_17687 = on_cssload.call(null,inst_17686);
var state_17689__$1 = (function (){var statearr_17691 = state_17689;
(statearr_17691[(7)] = inst_17685);

return statearr_17691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17689__$1,inst_17687);
} else {
if((state_val_17690 === (1))){
var inst_17683 = cljs.core.async.timeout.call(null,(100));
var state_17689__$1 = state_17689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17689__$1,(2),inst_17683);
} else {
return null;
}
}
});})(c__6916__auto__,map__17678,map__17678__$1,opts,on_cssload))
;
return ((function (switch__6854__auto__,c__6916__auto__,map__17678,map__17678__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____0 = (function (){
var statearr_17695 = [null,null,null,null,null,null,null,null];
(statearr_17695[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__);

(statearr_17695[(1)] = (1));

return statearr_17695;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____1 = (function (state_17689){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_17689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e17696){if((e17696 instanceof Object)){
var ex__6858__auto__ = e17696;
var statearr_17697_17720 = state_17689;
(statearr_17697_17720[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17721 = state_17689;
state_17689 = G__17721;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__ = function(state_17689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____1.call(this,state_17689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__,map__17678,map__17678__$1,opts,on_cssload))
})();
var state__6918__auto__ = (function (){var statearr_17698 = f__6917__auto__.call(null);
(statearr_17698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_17698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__,map__17678,map__17678__$1,opts,on_cssload))
);

return c__6916__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440339752975