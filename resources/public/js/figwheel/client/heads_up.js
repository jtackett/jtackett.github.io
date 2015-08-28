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
var seq__17581_17589 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__17582_17590 = null;
var count__17583_17591 = (0);
var i__17584_17592 = (0);
while(true){
if((i__17584_17592 < count__17583_17591)){
var k_17593 = cljs.core._nth.call(null,chunk__17582_17590,i__17584_17592);
e.setAttribute(cljs.core.name.call(null,k_17593),cljs.core.get.call(null,attrs,k_17593));

var G__17594 = seq__17581_17589;
var G__17595 = chunk__17582_17590;
var G__17596 = count__17583_17591;
var G__17597 = (i__17584_17592 + (1));
seq__17581_17589 = G__17594;
chunk__17582_17590 = G__17595;
count__17583_17591 = G__17596;
i__17584_17592 = G__17597;
continue;
} else {
var temp__4126__auto___17598 = cljs.core.seq.call(null,seq__17581_17589);
if(temp__4126__auto___17598){
var seq__17581_17599__$1 = temp__4126__auto___17598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17581_17599__$1)){
var c__5118__auto___17600 = cljs.core.chunk_first.call(null,seq__17581_17599__$1);
var G__17601 = cljs.core.chunk_rest.call(null,seq__17581_17599__$1);
var G__17602 = c__5118__auto___17600;
var G__17603 = cljs.core.count.call(null,c__5118__auto___17600);
var G__17604 = (0);
seq__17581_17589 = G__17601;
chunk__17582_17590 = G__17602;
count__17583_17591 = G__17603;
i__17584_17592 = G__17604;
continue;
} else {
var k_17605 = cljs.core.first.call(null,seq__17581_17599__$1);
e.setAttribute(cljs.core.name.call(null,k_17605),cljs.core.get.call(null,attrs,k_17605));

var G__17606 = cljs.core.next.call(null,seq__17581_17599__$1);
var G__17607 = null;
var G__17608 = (0);
var G__17609 = (0);
seq__17581_17589 = G__17606;
chunk__17582_17590 = G__17607;
count__17583_17591 = G__17608;
i__17584_17592 = G__17609;
continue;
}
} else {
}
}
break;
}

var seq__17585_17610 = cljs.core.seq.call(null,children);
var chunk__17586_17611 = null;
var count__17587_17612 = (0);
var i__17588_17613 = (0);
while(true){
if((i__17588_17613 < count__17587_17612)){
var ch_17614 = cljs.core._nth.call(null,chunk__17586_17611,i__17588_17613);
e.appendChild(ch_17614);

var G__17615 = seq__17585_17610;
var G__17616 = chunk__17586_17611;
var G__17617 = count__17587_17612;
var G__17618 = (i__17588_17613 + (1));
seq__17585_17610 = G__17615;
chunk__17586_17611 = G__17616;
count__17587_17612 = G__17617;
i__17588_17613 = G__17618;
continue;
} else {
var temp__4126__auto___17619 = cljs.core.seq.call(null,seq__17585_17610);
if(temp__4126__auto___17619){
var seq__17585_17620__$1 = temp__4126__auto___17619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17585_17620__$1)){
var c__5118__auto___17621 = cljs.core.chunk_first.call(null,seq__17585_17620__$1);
var G__17622 = cljs.core.chunk_rest.call(null,seq__17585_17620__$1);
var G__17623 = c__5118__auto___17621;
var G__17624 = cljs.core.count.call(null,c__5118__auto___17621);
var G__17625 = (0);
seq__17585_17610 = G__17622;
chunk__17586_17611 = G__17623;
count__17587_17612 = G__17624;
i__17588_17613 = G__17625;
continue;
} else {
var ch_17626 = cljs.core.first.call(null,seq__17585_17620__$1);
e.appendChild(ch_17626);

var G__17627 = cljs.core.next.call(null,seq__17585_17620__$1);
var G__17628 = null;
var G__17629 = (0);
var G__17630 = (0);
seq__17585_17610 = G__17627;
chunk__17586_17611 = G__17628;
count__17587_17612 = G__17629;
i__17588_17613 = G__17630;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq17578){
var G__17579 = cljs.core.first.call(null,seq17578);
var seq17578__$1 = cljs.core.next.call(null,seq17578);
var G__17580 = cljs.core.first.call(null,seq17578__$1);
var seq17578__$2 = cljs.core.next.call(null,seq17578__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__17579,G__17580,seq17578__$2);
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
var el_17631 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_17631.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_17631.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_17631.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_17631);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__17632,st_map){
var map__17636 = p__17632;
var map__17636__$1 = ((cljs.core.seq_QMARK_.call(null,map__17636))?cljs.core.apply.call(null,cljs.core.hash_map,map__17636):map__17636);
var container_el = cljs.core.get.call(null,map__17636__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__17636,map__17636__$1,container_el){
return (function (p__17637){
var vec__17638 = p__17637;
var k = cljs.core.nth.call(null,vec__17638,(0),null);
var v = cljs.core.nth.call(null,vec__17638,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__17636,map__17636__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__17639,dom_str){
var map__17641 = p__17639;
var map__17641__$1 = ((cljs.core.seq_QMARK_.call(null,map__17641))?cljs.core.apply.call(null,cljs.core.hash_map,map__17641):map__17641);
var c = map__17641__$1;
var content_area_el = cljs.core.get.call(null,map__17641__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__17642){
var map__17644 = p__17642;
var map__17644__$1 = ((cljs.core.seq_QMARK_.call(null,map__17644))?cljs.core.apply.call(null,cljs.core.hash_map,map__17644):map__17644);
var content_area_el = cljs.core.get.call(null,map__17644__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_17686){
var state_val_17687 = (state_17686[(1)]);
if((state_val_17687 === (2))){
var inst_17671 = (state_17686[(7)]);
var inst_17680 = (state_17686[(2)]);
var inst_17681 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_17682 = ["auto"];
var inst_17683 = cljs.core.PersistentHashMap.fromArrays(inst_17681,inst_17682);
var inst_17684 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17671,inst_17683);
var state_17686__$1 = (function (){var statearr_17688 = state_17686;
(statearr_17688[(8)] = inst_17680);

return statearr_17688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17686__$1,inst_17684);
} else {
if((state_val_17687 === (1))){
var inst_17671 = (state_17686[(7)]);
var inst_17671__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17672 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17673 = ["10px","10px","100%","68px","1.0"];
var inst_17674 = cljs.core.PersistentHashMap.fromArrays(inst_17672,inst_17673);
var inst_17675 = cljs.core.merge.call(null,inst_17674,style);
var inst_17676 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17671__$1,inst_17675);
var inst_17677 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17671__$1,msg);
var inst_17678 = cljs.core.async.timeout.call(null,(300));
var state_17686__$1 = (function (){var statearr_17689 = state_17686;
(statearr_17689[(7)] = inst_17671__$1);

(statearr_17689[(9)] = inst_17676);

(statearr_17689[(10)] = inst_17677);

return statearr_17689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17686__$1,(2),inst_17678);
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
var statearr_17693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17693[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__);

(statearr_17693[(1)] = (1));

return statearr_17693;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____1 = (function (state_17686){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17694){if((e17694 instanceof Object)){
var ex__7641__auto__ = e17694;
var statearr_17695_17697 = state_17686;
(statearr_17695_17697[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17698 = state_17686;
state_17686 = G__17698;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__ = function(state_17686){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____1.call(this,state_17686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17696 = f__7700__auto__.call(null);
(statearr_17696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17696;
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
var vec__17700 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__17700,(0),null);
var ln = cljs.core.nth.call(null,vec__17700,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__17703 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__17703,(0),null);
var file_line = cljs.core.nth.call(null,vec__17703,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17703,file_name,file_line){
return (function (p1__17701_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__17701_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__17703,file_name,file_line))
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
var map__17705 = figwheel.client.heads_up.ensure_container.call(null);
var map__17705__$1 = ((cljs.core.seq_QMARK_.call(null,map__17705))?cljs.core.apply.call(null,cljs.core.hash_map,map__17705):map__17705);
var content_area_el = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7637__auto__ = ((function (c__7699__auto__){
return (function (state_17752){
var state_val_17753 = (state_17752[(1)]);
if((state_val_17753 === (3))){
var inst_17735 = (state_17752[(7)]);
var inst_17749 = (state_17752[(2)]);
var inst_17750 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17735,"");
var state_17752__$1 = (function (){var statearr_17754 = state_17752;
(statearr_17754[(8)] = inst_17749);

return statearr_17754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17752__$1,inst_17750);
} else {
if((state_val_17753 === (2))){
var inst_17735 = (state_17752[(7)]);
var inst_17742 = (state_17752[(2)]);
var inst_17743 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_17744 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_17745 = cljs.core.PersistentHashMap.fromArrays(inst_17743,inst_17744);
var inst_17746 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17735,inst_17745);
var inst_17747 = cljs.core.async.timeout.call(null,(200));
var state_17752__$1 = (function (){var statearr_17755 = state_17752;
(statearr_17755[(9)] = inst_17746);

(statearr_17755[(10)] = inst_17742);

return statearr_17755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17752__$1,(3),inst_17747);
} else {
if((state_val_17753 === (1))){
var inst_17735 = (state_17752[(7)]);
var inst_17735__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17736 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17737 = ["0.0"];
var inst_17738 = cljs.core.PersistentHashMap.fromArrays(inst_17736,inst_17737);
var inst_17739 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17735__$1,inst_17738);
var inst_17740 = cljs.core.async.timeout.call(null,(300));
var state_17752__$1 = (function (){var statearr_17756 = state_17752;
(statearr_17756[(11)] = inst_17739);

(statearr_17756[(7)] = inst_17735__$1);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17752__$1,(2),inst_17740);
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
var statearr_17760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17760[(0)] = figwheel$client$heads_up$clear_$_state_machine__7638__auto__);

(statearr_17760[(1)] = (1));

return statearr_17760;
});
var figwheel$client$heads_up$clear_$_state_machine__7638__auto____1 = (function (state_17752){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17761){if((e17761 instanceof Object)){
var ex__7641__auto__ = e17761;
var statearr_17762_17764 = state_17752;
(statearr_17762_17764[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17765 = state_17752;
state_17752 = G__17765;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7638__auto__ = function(state_17752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7638__auto____1.call(this,state_17752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7638__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7638__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17763 = f__7700__auto__.call(null);
(statearr_17763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17763;
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
return (function (state_17797){
var state_val_17798 = (state_17797[(1)]);
if((state_val_17798 === (4))){
var inst_17795 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17797__$1,inst_17795);
} else {
if((state_val_17798 === (3))){
var inst_17792 = (state_17797[(2)]);
var inst_17793 = figwheel.client.heads_up.clear.call(null);
var state_17797__$1 = (function (){var statearr_17799 = state_17797;
(statearr_17799[(7)] = inst_17792);

return statearr_17799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17797__$1,(4),inst_17793);
} else {
if((state_val_17798 === (2))){
var inst_17789 = (state_17797[(2)]);
var inst_17790 = cljs.core.async.timeout.call(null,(400));
var state_17797__$1 = (function (){var statearr_17800 = state_17797;
(statearr_17800[(8)] = inst_17789);

return statearr_17800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17797__$1,(3),inst_17790);
} else {
if((state_val_17798 === (1))){
var inst_17787 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17797__$1,(2),inst_17787);
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
var statearr_17804 = [null,null,null,null,null,null,null,null,null];
(statearr_17804[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__);

(statearr_17804[(1)] = (1));

return statearr_17804;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____1 = (function (state_17797){
while(true){
var ret_value__7639__auto__ = (function (){try{while(true){
var result__7640__auto__ = switch__7637__auto__.call(null,state_17797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7640__auto__;
}
break;
}
}catch (e17805){if((e17805 instanceof Object)){
var ex__7641__auto__ = e17805;
var statearr_17806_17808 = state_17797;
(statearr_17806_17808[(5)] = ex__7641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17809 = state_17797;
state_17797 = G__17809;
continue;
} else {
return ret_value__7639__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7638__auto__;
})()
;})(switch__7637__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_17807 = f__7700__auto__.call(null);
(statearr_17807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_17807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440777374014