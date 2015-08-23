// Compiled by ClojureScript 0.0-3208 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5373__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5373__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__16757_16765 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__16758_16766 = null;
var count__16759_16767 = (0);
var i__16760_16768 = (0);
while(true){
if((i__16760_16768 < count__16759_16767)){
var k_16769 = cljs.core._nth.call(null,chunk__16758_16766,i__16760_16768);
e.setAttribute(cljs.core.name.call(null,k_16769),cljs.core.get.call(null,attrs,k_16769));

var G__16770 = seq__16757_16765;
var G__16771 = chunk__16758_16766;
var G__16772 = count__16759_16767;
var G__16773 = (i__16760_16768 + (1));
seq__16757_16765 = G__16770;
chunk__16758_16766 = G__16771;
count__16759_16767 = G__16772;
i__16760_16768 = G__16773;
continue;
} else {
var temp__4126__auto___16774 = cljs.core.seq.call(null,seq__16757_16765);
if(temp__4126__auto___16774){
var seq__16757_16775__$1 = temp__4126__auto___16774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16757_16775__$1)){
var c__5118__auto___16776 = cljs.core.chunk_first.call(null,seq__16757_16775__$1);
var G__16777 = cljs.core.chunk_rest.call(null,seq__16757_16775__$1);
var G__16778 = c__5118__auto___16776;
var G__16779 = cljs.core.count.call(null,c__5118__auto___16776);
var G__16780 = (0);
seq__16757_16765 = G__16777;
chunk__16758_16766 = G__16778;
count__16759_16767 = G__16779;
i__16760_16768 = G__16780;
continue;
} else {
var k_16781 = cljs.core.first.call(null,seq__16757_16775__$1);
e.setAttribute(cljs.core.name.call(null,k_16781),cljs.core.get.call(null,attrs,k_16781));

var G__16782 = cljs.core.next.call(null,seq__16757_16775__$1);
var G__16783 = null;
var G__16784 = (0);
var G__16785 = (0);
seq__16757_16765 = G__16782;
chunk__16758_16766 = G__16783;
count__16759_16767 = G__16784;
i__16760_16768 = G__16785;
continue;
}
} else {
}
}
break;
}

var seq__16761_16786 = cljs.core.seq.call(null,children);
var chunk__16762_16787 = null;
var count__16763_16788 = (0);
var i__16764_16789 = (0);
while(true){
if((i__16764_16789 < count__16763_16788)){
var ch_16790 = cljs.core._nth.call(null,chunk__16762_16787,i__16764_16789);
e.appendChild(ch_16790);

var G__16791 = seq__16761_16786;
var G__16792 = chunk__16762_16787;
var G__16793 = count__16763_16788;
var G__16794 = (i__16764_16789 + (1));
seq__16761_16786 = G__16791;
chunk__16762_16787 = G__16792;
count__16763_16788 = G__16793;
i__16764_16789 = G__16794;
continue;
} else {
var temp__4126__auto___16795 = cljs.core.seq.call(null,seq__16761_16786);
if(temp__4126__auto___16795){
var seq__16761_16796__$1 = temp__4126__auto___16795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16761_16796__$1)){
var c__5118__auto___16797 = cljs.core.chunk_first.call(null,seq__16761_16796__$1);
var G__16798 = cljs.core.chunk_rest.call(null,seq__16761_16796__$1);
var G__16799 = c__5118__auto___16797;
var G__16800 = cljs.core.count.call(null,c__5118__auto___16797);
var G__16801 = (0);
seq__16761_16786 = G__16798;
chunk__16762_16787 = G__16799;
count__16763_16788 = G__16800;
i__16764_16789 = G__16801;
continue;
} else {
var ch_16802 = cljs.core.first.call(null,seq__16761_16796__$1);
e.appendChild(ch_16802);

var G__16803 = cljs.core.next.call(null,seq__16761_16796__$1);
var G__16804 = null;
var G__16805 = (0);
var G__16806 = (0);
seq__16761_16786 = G__16803;
chunk__16762_16787 = G__16804;
count__16763_16788 = G__16805;
i__16764_16789 = G__16806;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq16754){
var G__16755 = cljs.core.first.call(null,seq16754);
var seq16754__$1 = cljs.core.next.call(null,seq16754);
var G__16756 = cljs.core.first.call(null,seq16754__$1);
var seq16754__$2 = cljs.core.next.call(null,seq16754__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__16755,G__16756,seq16754__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5228__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5232__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5228__auto__,prefer_table__5229__auto__,method_cache__5230__auto__,cached_hierarchy__5231__auto__,hierarchy__5232__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5228__auto__,prefer_table__5229__auto__,method_cache__5230__auto__,cached_hierarchy__5231__auto__,hierarchy__5232__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5232__auto__,method_table__5228__auto__,prefer_table__5229__auto__,method_cache__5230__auto__,cached_hierarchy__5231__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_16807 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_16807.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_16807.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_16807.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_16807);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__16808,st_map){
var map__16812 = p__16808;
var map__16812__$1 = ((cljs.core.seq_QMARK_.call(null,map__16812))?cljs.core.apply.call(null,cljs.core.hash_map,map__16812):map__16812);
var container_el = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__16812,map__16812__$1,container_el){
return (function (p__16813){
var vec__16814 = p__16813;
var k = cljs.core.nth.call(null,vec__16814,(0),null);
var v = cljs.core.nth.call(null,vec__16814,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__16812,map__16812__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__16815,dom_str){
var map__16817 = p__16815;
var map__16817__$1 = ((cljs.core.seq_QMARK_.call(null,map__16817))?cljs.core.apply.call(null,cljs.core.hash_map,map__16817):map__16817);
var c = map__16817__$1;
var content_area_el = cljs.core.get.call(null,map__16817__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__16818){
var map__16820 = p__16818;
var map__16820__$1 = ((cljs.core.seq_QMARK_.call(null,map__16820))?cljs.core.apply.call(null,cljs.core.hash_map,map__16820):map__16820);
var content_area_el = cljs.core.get.call(null,map__16820__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_16862){
var state_val_16863 = (state_16862[(1)]);
if((state_val_16863 === (2))){
var inst_16847 = (state_16862[(7)]);
var inst_16856 = (state_16862[(2)]);
var inst_16857 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_16858 = ["auto"];
var inst_16859 = cljs.core.PersistentHashMap.fromArrays(inst_16857,inst_16858);
var inst_16860 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16847,inst_16859);
var state_16862__$1 = (function (){var statearr_16864 = state_16862;
(statearr_16864[(8)] = inst_16856);

return statearr_16864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16862__$1,inst_16860);
} else {
if((state_val_16863 === (1))){
var inst_16847 = (state_16862[(7)]);
var inst_16847__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_16848 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_16849 = ["10px","10px","100%","68px","1.0"];
var inst_16850 = cljs.core.PersistentHashMap.fromArrays(inst_16848,inst_16849);
var inst_16851 = cljs.core.merge.call(null,inst_16850,style);
var inst_16852 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16847__$1,inst_16851);
var inst_16853 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_16847__$1,msg);
var inst_16854 = cljs.core.async.timeout.call(null,(300));
var state_16862__$1 = (function (){var statearr_16865 = state_16862;
(statearr_16865[(7)] = inst_16847__$1);

(statearr_16865[(9)] = inst_16852);

(statearr_16865[(10)] = inst_16853);

return statearr_16865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16862__$1,(2),inst_16854);
} else {
return null;
}
}
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____0 = (function (){
var statearr_16869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16869[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__);

(statearr_16869[(1)] = (1));

return statearr_16869;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____1 = (function (state_16862){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16870){if((e16870 instanceof Object)){
var ex__6858__auto__ = e16870;
var statearr_16871_16873 = state_16862;
(statearr_16871_16873[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16874 = state_16862;
state_16862 = G__16874;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__ = function(state_16862){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____1.call(this,state_16862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16872 = f__6917__auto__.call(null);
(statearr_16872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__16876 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__16876,(0),null);
var ln = cljs.core.nth.call(null,vec__16876,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__16879 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__16879,(0),null);
var file_line = cljs.core.nth.call(null,vec__16879,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__16879,file_name,file_line){
return (function (p1__16877_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__16877_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__16879,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__16881 = figwheel.client.heads_up.ensure_container.call(null);
var map__16881__$1 = ((cljs.core.seq_QMARK_.call(null,map__16881))?cljs.core.apply.call(null,cljs.core.hash_map,map__16881):map__16881);
var content_area_el = cljs.core.get.call(null,map__16881__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_16928){
var state_val_16929 = (state_16928[(1)]);
if((state_val_16929 === (3))){
var inst_16911 = (state_16928[(7)]);
var inst_16925 = (state_16928[(2)]);
var inst_16926 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_16911,"");
var state_16928__$1 = (function (){var statearr_16930 = state_16928;
(statearr_16930[(8)] = inst_16925);

return statearr_16930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16928__$1,inst_16926);
} else {
if((state_val_16929 === (2))){
var inst_16911 = (state_16928[(7)]);
var inst_16918 = (state_16928[(2)]);
var inst_16919 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_16920 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_16921 = cljs.core.PersistentHashMap.fromArrays(inst_16919,inst_16920);
var inst_16922 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16911,inst_16921);
var inst_16923 = cljs.core.async.timeout.call(null,(200));
var state_16928__$1 = (function (){var statearr_16931 = state_16928;
(statearr_16931[(9)] = inst_16922);

(statearr_16931[(10)] = inst_16918);

return statearr_16931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16928__$1,(3),inst_16923);
} else {
if((state_val_16929 === (1))){
var inst_16911 = (state_16928[(7)]);
var inst_16911__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_16912 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_16913 = ["0.0"];
var inst_16914 = cljs.core.PersistentHashMap.fromArrays(inst_16912,inst_16913);
var inst_16915 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16911__$1,inst_16914);
var inst_16916 = cljs.core.async.timeout.call(null,(300));
var state_16928__$1 = (function (){var statearr_16932 = state_16928;
(statearr_16932[(7)] = inst_16911__$1);

(statearr_16932[(11)] = inst_16915);

return statearr_16932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16928__$1,(2),inst_16916);
} else {
return null;
}
}
}
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__6855__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__6855__auto____0 = (function (){
var statearr_16936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16936[(0)] = figwheel$client$heads_up$clear_$_state_machine__6855__auto__);

(statearr_16936[(1)] = (1));

return statearr_16936;
});
var figwheel$client$heads_up$clear_$_state_machine__6855__auto____1 = (function (state_16928){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16937){if((e16937 instanceof Object)){
var ex__6858__auto__ = e16937;
var statearr_16938_16940 = state_16928;
(statearr_16938_16940[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16941 = state_16928;
state_16928 = G__16941;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__6855__auto__ = function(state_16928){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__6855__auto____1.call(this,state_16928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__6855__auto____0;
figwheel$client$heads_up$clear_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__6855__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16939 = f__6917__auto__.call(null);
(statearr_16939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_16973){
var state_val_16974 = (state_16973[(1)]);
if((state_val_16974 === (4))){
var inst_16971 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16973__$1,inst_16971);
} else {
if((state_val_16974 === (3))){
var inst_16968 = (state_16973[(2)]);
var inst_16969 = figwheel.client.heads_up.clear.call(null);
var state_16973__$1 = (function (){var statearr_16975 = state_16973;
(statearr_16975[(7)] = inst_16968);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16973__$1,(4),inst_16969);
} else {
if((state_val_16974 === (2))){
var inst_16965 = (state_16973[(2)]);
var inst_16966 = cljs.core.async.timeout.call(null,(400));
var state_16973__$1 = (function (){var statearr_16976 = state_16973;
(statearr_16976[(8)] = inst_16965);

return statearr_16976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16973__$1,(3),inst_16966);
} else {
if((state_val_16974 === (1))){
var inst_16963 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16973__$1,(2),inst_16963);
} else {
return null;
}
}
}
}
});})(c__6916__auto__))
;
return ((function (switch__6854__auto__,c__6916__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____0 = (function (){
var statearr_16980 = [null,null,null,null,null,null,null,null,null];
(statearr_16980[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__);

(statearr_16980[(1)] = (1));

return statearr_16980;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____1 = (function (state_16973){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16981){if((e16981 instanceof Object)){
var ex__6858__auto__ = e16981;
var statearr_16982_16984 = state_16973;
(statearr_16982_16984[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16985 = state_16973;
state_16973 = G__16985;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__ = function(state_16973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____1.call(this,state_16973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16983 = f__6917__auto__.call(null);
(statearr_16983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440339752679