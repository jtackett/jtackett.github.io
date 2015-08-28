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
var seq__17577_17585 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__17578_17586 = null;
var count__17579_17587 = (0);
var i__17580_17588 = (0);
while(true){
if((i__17580_17588 < count__17579_17587)){
var k_17589 = cljs.core._nth.call(null,chunk__17578_17586,i__17580_17588);
e.setAttribute(cljs.core.name.call(null,k_17589),cljs.core.get.call(null,attrs,k_17589));

var G__17590 = seq__17577_17585;
var G__17591 = chunk__17578_17586;
var G__17592 = count__17579_17587;
var G__17593 = (i__17580_17588 + (1));
seq__17577_17585 = G__17590;
chunk__17578_17586 = G__17591;
count__17579_17587 = G__17592;
i__17580_17588 = G__17593;
continue;
} else {
var temp__4126__auto___17594 = cljs.core.seq.call(null,seq__17577_17585);
if(temp__4126__auto___17594){
var seq__17577_17595__$1 = temp__4126__auto___17594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17577_17595__$1)){
var c__5118__auto___17596 = cljs.core.chunk_first.call(null,seq__17577_17595__$1);
var G__17597 = cljs.core.chunk_rest.call(null,seq__17577_17595__$1);
var G__17598 = c__5118__auto___17596;
var G__17599 = cljs.core.count.call(null,c__5118__auto___17596);
var G__17600 = (0);
seq__17577_17585 = G__17597;
chunk__17578_17586 = G__17598;
count__17579_17587 = G__17599;
i__17580_17588 = G__17600;
continue;
} else {
var k_17601 = cljs.core.first.call(null,seq__17577_17595__$1);
e.setAttribute(cljs.core.name.call(null,k_17601),cljs.core.get.call(null,attrs,k_17601));

var G__17602 = cljs.core.next.call(null,seq__17577_17595__$1);
var G__17603 = null;
var G__17604 = (0);
var G__17605 = (0);
seq__17577_17585 = G__17602;
chunk__17578_17586 = G__17603;
count__17579_17587 = G__17604;
i__17580_17588 = G__17605;
continue;
}
} else {
}
}
break;
}

var seq__17581_17606 = cljs.core.seq.call(null,children);
var chunk__17582_17607 = null;
var count__17583_17608 = (0);
var i__17584_17609 = (0);
while(true){
if((i__17584_17609 < count__17583_17608)){
var ch_17610 = cljs.core._nth.call(null,chunk__17582_17607,i__17584_17609);
e.appendChild(ch_17610);

var G__17611 = seq__17581_17606;
var G__17612 = chunk__17582_17607;
var G__17613 = count__17583_17608;
var G__17614 = (i__17584_17609 + (1));
seq__17581_17606 = G__17611;
chunk__17582_17607 = G__17612;
count__17583_17608 = G__17613;
i__17584_17609 = G__17614;
continue;
} else {
var temp__4126__auto___17615 = cljs.core.seq.call(null,seq__17581_17606);
if(temp__4126__auto___17615){
var seq__17581_17616__$1 = temp__4126__auto___17615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17581_17616__$1)){
var c__5118__auto___17617 = cljs.core.chunk_first.call(null,seq__17581_17616__$1);
var G__17618 = cljs.core.chunk_rest.call(null,seq__17581_17616__$1);
var G__17619 = c__5118__auto___17617;
var G__17620 = cljs.core.count.call(null,c__5118__auto___17617);
var G__17621 = (0);
seq__17581_17606 = G__17618;
chunk__17582_17607 = G__17619;
count__17583_17608 = G__17620;
i__17584_17609 = G__17621;
continue;
} else {
var ch_17622 = cljs.core.first.call(null,seq__17581_17616__$1);
e.appendChild(ch_17622);

var G__17623 = cljs.core.next.call(null,seq__17581_17616__$1);
var G__17624 = null;
var G__17625 = (0);
var G__17626 = (0);
seq__17581_17606 = G__17623;
chunk__17582_17607 = G__17624;
count__17583_17608 = G__17625;
i__17584_17609 = G__17626;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq17574){
var G__17575 = cljs.core.first.call(null,seq17574);
var seq17574__$1 = cljs.core.next.call(null,seq17574);
var G__17576 = cljs.core.first.call(null,seq17574__$1);
var seq17574__$2 = cljs.core.next.call(null,seq17574__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__17575,G__17576,seq17574__$2);
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
var el_17627 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_17627.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_17627.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_17627.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_17627);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__17628,st_map){
var map__17632 = p__17628;
var map__17632__$1 = ((cljs.core.seq_QMARK_.call(null,map__17632))?cljs.core.apply.call(null,cljs.core.hash_map,map__17632):map__17632);
var container_el = cljs.core.get.call(null,map__17632__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__17632,map__17632__$1,container_el){
return (function (p__17633){
var vec__17634 = p__17633;
var k = cljs.core.nth.call(null,vec__17634,(0),null);
var v = cljs.core.nth.call(null,vec__17634,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__17632,map__17632__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__17635,dom_str){
var map__17637 = p__17635;
var map__17637__$1 = ((cljs.core.seq_QMARK_.call(null,map__17637))?cljs.core.apply.call(null,cljs.core.hash_map,map__17637):map__17637);
var c = map__17637__$1;
var content_area_el = cljs.core.get.call(null,map__17637__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__17638){
var map__17640 = p__17638;
var map__17640__$1 = ((cljs.core.seq_QMARK_.call(null,map__17640))?cljs.core.apply.call(null,cljs.core.hash_map,map__17640):map__17640);
var content_area_el = cljs.core.get.call(null,map__17640__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_17682){
var state_val_17683 = (state_17682[(1)]);
if((state_val_17683 === (2))){
var inst_17667 = (state_17682[(7)]);
var inst_17676 = (state_17682[(2)]);
var inst_17677 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_17678 = ["auto"];
var inst_17679 = cljs.core.PersistentHashMap.fromArrays(inst_17677,inst_17678);
var inst_17680 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17667,inst_17679);
var state_17682__$1 = (function (){var statearr_17684 = state_17682;
(statearr_17684[(8)] = inst_17676);

return statearr_17684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17682__$1,inst_17680);
} else {
if((state_val_17683 === (1))){
var inst_17667 = (state_17682[(7)]);
var inst_17667__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17668 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17669 = ["10px","10px","100%","68px","1.0"];
var inst_17670 = cljs.core.PersistentHashMap.fromArrays(inst_17668,inst_17669);
var inst_17671 = cljs.core.merge.call(null,inst_17670,style);
var inst_17672 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17667__$1,inst_17671);
var inst_17673 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17667__$1,msg);
var inst_17674 = cljs.core.async.timeout.call(null,(300));
var state_17682__$1 = (function (){var statearr_17685 = state_17682;
(statearr_17685[(7)] = inst_17667__$1);

(statearr_17685[(9)] = inst_17673);

(statearr_17685[(10)] = inst_17672);

return statearr_17685;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17682__$1,(2),inst_17674);
} else {
return null;
}
}
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____0 = (function (){
var statearr_17689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17689[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__);

(statearr_17689[(1)] = (1));

return statearr_17689;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____1 = (function (state_17682){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17690){if((e17690 instanceof Object)){
var ex__7641__auto__ = e17690;
var statearr_17691_17693 = state_17682;
(statearr_17691_17693[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17694 = state_17682;
state_17682 = G__17694;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__ = function(state_17682){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____1.call(this,state_17682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17692 = f__7700__auto__.call(null);
(statearr_17692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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
var vec__17696 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__17696,(0),null);
var ln = cljs.core.nth.call(null,vec__17696,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__17699 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__17699,(0),null);
var file_line = cljs.core.nth.call(null,vec__17699,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17699,file_name,file_line){
return (function (p1__17697_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__17697_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__17699,file_name,file_line))
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
var map__17701 = figwheel.client.heads_up.ensure_container.call(null);
var map__17701__$1 = ((cljs.core.seq_QMARK_.call(null,map__17701))?cljs.core.apply.call(null,cljs.core.hash_map,map__17701):map__17701);
var content_area_el = cljs.core.get.call(null,map__17701__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_17748){
var state_val_17749 = (state_17748[(1)]);
if((state_val_17749 === (3))){
var inst_17731 = (state_17748[(7)]);
var inst_17745 = (state_17748[(2)]);
var inst_17746 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17731,"");
var state_17748__$1 = (function (){var statearr_17750 = state_17748;
(statearr_17750[(8)] = inst_17745);

return statearr_17750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17748__$1,inst_17746);
} else {
if((state_val_17749 === (2))){
var inst_17731 = (state_17748[(7)]);
var inst_17738 = (state_17748[(2)]);
var inst_17739 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_17740 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_17741 = cljs.core.PersistentHashMap.fromArrays(inst_17739,inst_17740);
var inst_17742 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17731,inst_17741);
var inst_17743 = cljs.core.async.timeout.call(null,(200));
var state_17748__$1 = (function (){var statearr_17751 = state_17748;
(statearr_17751[(9)] = inst_17738);

(statearr_17751[(10)] = inst_17742);

return statearr_17751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17748__$1,(3),inst_17743);
} else {
if((state_val_17749 === (1))){
var inst_17731 = (state_17748[(7)]);
var inst_17731__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17732 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17733 = ["0.0"];
var inst_17734 = cljs.core.PersistentHashMap.fromArrays(inst_17732,inst_17733);
var inst_17735 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17731__$1,inst_17734);
var inst_17736 = cljs.core.async.timeout.call(null,(300));
var state_17748__$1 = (function (){var statearr_17752 = state_17748;
(statearr_17752[(11)] = inst_17735);

(statearr_17752[(7)] = inst_17731__$1);

return statearr_17752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17748__$1,(2),inst_17736);
} else {
return null;
}
}
}
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__7638__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__7638__auto____0 = (function (){
var statearr_17756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17756[(0)] = figwheel$client$heads_up$clear_$_state_machine__7638__auto__);

(statearr_17756[(1)] = (1));

return statearr_17756;
});
var figwheel$client$heads_up$clear_$_state_machine__7638__auto____1 = (function (state_17748){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17757){if((e17757 instanceof Object)){
var ex__7641__auto__ = e17757;
var statearr_17758_17760 = state_17748;
(statearr_17758_17760[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17761 = state_17748;
state_17748 = G__17761;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7638__auto__ = function(state_17748){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7638__auto____1.call(this,state_17748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7638__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7638__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17759 = f__7700__auto__.call(null);
(statearr_17759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (4))){
var inst_17791 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17793__$1,inst_17791);
} else {
if((state_val_17794 === (3))){
var inst_17788 = (state_17793[(2)]);
var inst_17789 = figwheel.client.heads_up.clear.call(null);
var state_17793__$1 = (function (){var statearr_17795 = state_17793;
(statearr_17795[(7)] = inst_17788);

return statearr_17795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(4),inst_17789);
} else {
if((state_val_17794 === (2))){
var inst_17785 = (state_17793[(2)]);
var inst_17786 = cljs.core.async.timeout.call(null,(400));
var state_17793__$1 = (function (){var statearr_17796 = state_17793;
(statearr_17796[(8)] = inst_17785);

return statearr_17796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(3),inst_17786);
} else {
if((state_val_17794 === (1))){
var inst_17783 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(2),inst_17783);
} else {
return null;
}
}
}
}
});})(c__7699__auto__))
;
return ((function (switch__7637__auto__,c__7699__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____0 = (function (){
var statearr_17800 = [null,null,null,null,null,null,null,null,null];
(statearr_17800[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__);

(statearr_17800[(1)] = (1));

return statearr_17800;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____1 = (function (state_17793){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17801){if((e17801 instanceof Object)){
var ex__7641__auto__ = e17801;
var statearr_17802_17804 = state_17793;
(statearr_17802_17804[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17805 = state_17793;
state_17793 = G__17805;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17803 = f__7700__auto__.call(null);
(statearr_17803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440774552568