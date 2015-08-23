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
var seq__16748_16756 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__16749_16757 = null;
var count__16750_16758 = (0);
var i__16751_16759 = (0);
while(true){
if((i__16751_16759 < count__16750_16758)){
var k_16760 = cljs.core._nth.call(null,chunk__16749_16757,i__16751_16759);
e.setAttribute(cljs.core.name.call(null,k_16760),cljs.core.get.call(null,attrs,k_16760));

var G__16761 = seq__16748_16756;
var G__16762 = chunk__16749_16757;
var G__16763 = count__16750_16758;
var G__16764 = (i__16751_16759 + (1));
seq__16748_16756 = G__16761;
chunk__16749_16757 = G__16762;
count__16750_16758 = G__16763;
i__16751_16759 = G__16764;
continue;
} else {
var temp__4126__auto___16765 = cljs.core.seq.call(null,seq__16748_16756);
if(temp__4126__auto___16765){
var seq__16748_16766__$1 = temp__4126__auto___16765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16748_16766__$1)){
var c__5118__auto___16767 = cljs.core.chunk_first.call(null,seq__16748_16766__$1);
var G__16768 = cljs.core.chunk_rest.call(null,seq__16748_16766__$1);
var G__16769 = c__5118__auto___16767;
var G__16770 = cljs.core.count.call(null,c__5118__auto___16767);
var G__16771 = (0);
seq__16748_16756 = G__16768;
chunk__16749_16757 = G__16769;
count__16750_16758 = G__16770;
i__16751_16759 = G__16771;
continue;
} else {
var k_16772 = cljs.core.first.call(null,seq__16748_16766__$1);
e.setAttribute(cljs.core.name.call(null,k_16772),cljs.core.get.call(null,attrs,k_16772));

var G__16773 = cljs.core.next.call(null,seq__16748_16766__$1);
var G__16774 = null;
var G__16775 = (0);
var G__16776 = (0);
seq__16748_16756 = G__16773;
chunk__16749_16757 = G__16774;
count__16750_16758 = G__16775;
i__16751_16759 = G__16776;
continue;
}
} else {
}
}
break;
}

var seq__16752_16777 = cljs.core.seq.call(null,children);
var chunk__16753_16778 = null;
var count__16754_16779 = (0);
var i__16755_16780 = (0);
while(true){
if((i__16755_16780 < count__16754_16779)){
var ch_16781 = cljs.core._nth.call(null,chunk__16753_16778,i__16755_16780);
e.appendChild(ch_16781);

var G__16782 = seq__16752_16777;
var G__16783 = chunk__16753_16778;
var G__16784 = count__16754_16779;
var G__16785 = (i__16755_16780 + (1));
seq__16752_16777 = G__16782;
chunk__16753_16778 = G__16783;
count__16754_16779 = G__16784;
i__16755_16780 = G__16785;
continue;
} else {
var temp__4126__auto___16786 = cljs.core.seq.call(null,seq__16752_16777);
if(temp__4126__auto___16786){
var seq__16752_16787__$1 = temp__4126__auto___16786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16752_16787__$1)){
var c__5118__auto___16788 = cljs.core.chunk_first.call(null,seq__16752_16787__$1);
var G__16789 = cljs.core.chunk_rest.call(null,seq__16752_16787__$1);
var G__16790 = c__5118__auto___16788;
var G__16791 = cljs.core.count.call(null,c__5118__auto___16788);
var G__16792 = (0);
seq__16752_16777 = G__16789;
chunk__16753_16778 = G__16790;
count__16754_16779 = G__16791;
i__16755_16780 = G__16792;
continue;
} else {
var ch_16793 = cljs.core.first.call(null,seq__16752_16787__$1);
e.appendChild(ch_16793);

var G__16794 = cljs.core.next.call(null,seq__16752_16787__$1);
var G__16795 = null;
var G__16796 = (0);
var G__16797 = (0);
seq__16752_16777 = G__16794;
chunk__16753_16778 = G__16795;
count__16754_16779 = G__16796;
i__16755_16780 = G__16797;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq16745){
var G__16746 = cljs.core.first.call(null,seq16745);
var seq16745__$1 = cljs.core.next.call(null,seq16745);
var G__16747 = cljs.core.first.call(null,seq16745__$1);
var seq16745__$2 = cljs.core.next.call(null,seq16745__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__16746,G__16747,seq16745__$2);
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
var el_16798 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_16798.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_16798.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_16798.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_16798);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__16799,st_map){
var map__16803 = p__16799;
var map__16803__$1 = ((cljs.core.seq_QMARK_.call(null,map__16803))?cljs.core.apply.call(null,cljs.core.hash_map,map__16803):map__16803);
var container_el = cljs.core.get.call(null,map__16803__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__16803,map__16803__$1,container_el){
return (function (p__16804){
var vec__16805 = p__16804;
var k = cljs.core.nth.call(null,vec__16805,(0),null);
var v = cljs.core.nth.call(null,vec__16805,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__16803,map__16803__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__16806,dom_str){
var map__16808 = p__16806;
var map__16808__$1 = ((cljs.core.seq_QMARK_.call(null,map__16808))?cljs.core.apply.call(null,cljs.core.hash_map,map__16808):map__16808);
var c = map__16808__$1;
var content_area_el = cljs.core.get.call(null,map__16808__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__16809){
var map__16811 = p__16809;
var map__16811__$1 = ((cljs.core.seq_QMARK_.call(null,map__16811))?cljs.core.apply.call(null,cljs.core.hash_map,map__16811):map__16811);
var content_area_el = cljs.core.get.call(null,map__16811__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_16853){
var state_val_16854 = (state_16853[(1)]);
if((state_val_16854 === (2))){
var inst_16838 = (state_16853[(7)]);
var inst_16847 = (state_16853[(2)]);
var inst_16848 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_16849 = ["auto"];
var inst_16850 = cljs.core.PersistentHashMap.fromArrays(inst_16848,inst_16849);
var inst_16851 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16838,inst_16850);
var state_16853__$1 = (function (){var statearr_16855 = state_16853;
(statearr_16855[(8)] = inst_16847);

return statearr_16855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16853__$1,inst_16851);
} else {
if((state_val_16854 === (1))){
var inst_16838 = (state_16853[(7)]);
var inst_16838__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_16839 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_16840 = ["10px","10px","100%","68px","1.0"];
var inst_16841 = cljs.core.PersistentHashMap.fromArrays(inst_16839,inst_16840);
var inst_16842 = cljs.core.merge.call(null,inst_16841,style);
var inst_16843 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16838__$1,inst_16842);
var inst_16844 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_16838__$1,msg);
var inst_16845 = cljs.core.async.timeout.call(null,(300));
var state_16853__$1 = (function (){var statearr_16856 = state_16853;
(statearr_16856[(9)] = inst_16844);

(statearr_16856[(7)] = inst_16838__$1);

(statearr_16856[(10)] = inst_16843);

return statearr_16856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16853__$1,(2),inst_16845);
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
var statearr_16860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16860[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__);

(statearr_16860[(1)] = (1));

return statearr_16860;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____1 = (function (state_16853){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16861){if((e16861 instanceof Object)){
var ex__6858__auto__ = e16861;
var statearr_16862_16864 = state_16853;
(statearr_16862_16864[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16865 = state_16853;
state_16853 = G__16865;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__ = function(state_16853){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____1.call(this,state_16853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16863 = f__6917__auto__.call(null);
(statearr_16863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16863;
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
var vec__16867 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__16867,(0),null);
var ln = cljs.core.nth.call(null,vec__16867,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__16870 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__16870,(0),null);
var file_line = cljs.core.nth.call(null,vec__16870,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__16870,file_name,file_line){
return (function (p1__16868_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__16868_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__16870,file_name,file_line))
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
var map__16872 = figwheel.client.heads_up.ensure_container.call(null);
var map__16872__$1 = ((cljs.core.seq_QMARK_.call(null,map__16872))?cljs.core.apply.call(null,cljs.core.hash_map,map__16872):map__16872);
var content_area_el = cljs.core.get.call(null,map__16872__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__6916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6916__auto__){
return (function (){
var f__6917__auto__ = (function (){var switch__6854__auto__ = ((function (c__6916__auto__){
return (function (state_16919){
var state_val_16920 = (state_16919[(1)]);
if((state_val_16920 === (3))){
var inst_16902 = (state_16919[(7)]);
var inst_16916 = (state_16919[(2)]);
var inst_16917 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_16902,"");
var state_16919__$1 = (function (){var statearr_16921 = state_16919;
(statearr_16921[(8)] = inst_16916);

return statearr_16921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16919__$1,inst_16917);
} else {
if((state_val_16920 === (2))){
var inst_16902 = (state_16919[(7)]);
var inst_16909 = (state_16919[(2)]);
var inst_16910 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_16911 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_16912 = cljs.core.PersistentHashMap.fromArrays(inst_16910,inst_16911);
var inst_16913 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16902,inst_16912);
var inst_16914 = cljs.core.async.timeout.call(null,(200));
var state_16919__$1 = (function (){var statearr_16922 = state_16919;
(statearr_16922[(9)] = inst_16913);

(statearr_16922[(10)] = inst_16909);

return statearr_16922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16919__$1,(3),inst_16914);
} else {
if((state_val_16920 === (1))){
var inst_16902 = (state_16919[(7)]);
var inst_16902__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_16903 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_16904 = ["0.0"];
var inst_16905 = cljs.core.PersistentHashMap.fromArrays(inst_16903,inst_16904);
var inst_16906 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16902__$1,inst_16905);
var inst_16907 = cljs.core.async.timeout.call(null,(300));
var state_16919__$1 = (function (){var statearr_16923 = state_16919;
(statearr_16923[(11)] = inst_16906);

(statearr_16923[(7)] = inst_16902__$1);

return statearr_16923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16919__$1,(2),inst_16907);
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
var statearr_16927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16927[(0)] = figwheel$client$heads_up$clear_$_state_machine__6855__auto__);

(statearr_16927[(1)] = (1));

return statearr_16927;
});
var figwheel$client$heads_up$clear_$_state_machine__6855__auto____1 = (function (state_16919){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16928){if((e16928 instanceof Object)){
var ex__6858__auto__ = e16928;
var statearr_16929_16931 = state_16919;
(statearr_16929_16931[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16932 = state_16919;
state_16919 = G__16932;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__6855__auto__ = function(state_16919){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__6855__auto____1.call(this,state_16919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__6855__auto____0;
figwheel$client$heads_up$clear_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__6855__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16930 = f__6917__auto__.call(null);
(statearr_16930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16930;
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
return (function (state_16964){
var state_val_16965 = (state_16964[(1)]);
if((state_val_16965 === (4))){
var inst_16962 = (state_16964[(2)]);
var state_16964__$1 = state_16964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16964__$1,inst_16962);
} else {
if((state_val_16965 === (3))){
var inst_16959 = (state_16964[(2)]);
var inst_16960 = figwheel.client.heads_up.clear.call(null);
var state_16964__$1 = (function (){var statearr_16966 = state_16964;
(statearr_16966[(7)] = inst_16959);

return statearr_16966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16964__$1,(4),inst_16960);
} else {
if((state_val_16965 === (2))){
var inst_16956 = (state_16964[(2)]);
var inst_16957 = cljs.core.async.timeout.call(null,(400));
var state_16964__$1 = (function (){var statearr_16967 = state_16964;
(statearr_16967[(8)] = inst_16956);

return statearr_16967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16964__$1,(3),inst_16957);
} else {
if((state_val_16965 === (1))){
var inst_16954 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_16964__$1 = state_16964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16964__$1,(2),inst_16954);
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
var statearr_16971 = [null,null,null,null,null,null,null,null,null];
(statearr_16971[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__);

(statearr_16971[(1)] = (1));

return statearr_16971;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____1 = (function (state_16964){
while(true){
var ret_value__6856__auto__ = (function (){try{while(true){
var result__6857__auto__ = switch__6854__auto__.call(null,state_16964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6857__auto__;
}
break;
}
}catch (e16972){if((e16972 instanceof Object)){
var ex__6858__auto__ = e16972;
var statearr_16973_16975 = state_16964;
(statearr_16973_16975[(5)] = ex__6858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16976 = state_16964;
state_16964 = G__16976;
continue;
} else {
return ret_value__6856__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__ = function(state_16964){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____1.call(this,state_16964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__6855__auto__;
})()
;})(switch__6854__auto__,c__6916__auto__))
})();
var state__6918__auto__ = (function (){var statearr_16974 = f__6917__auto__.call(null);
(statearr_16974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6916__auto__);

return statearr_16974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6918__auto__);
});})(c__6916__auto__))
);

return c__6916__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440297551239