// Compiled by ClojureScript 0.0-3208 {}
goog.provide('simpleexample.ticTacToe');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('cljs_http.client');
goog.require('cljs.reader');
goog.require('re_frame.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
simpleexample.ticTacToe.avoid_nil = (function simpleexample$ticTacToe$avoid_nil(s){
if(cljs.core.truth_(s)){
return [cljs.core.str(s)].join('');
} else {
return "";
}
});
/**
 * A method to make a new board for the beginning of games
 */
simpleexample.ticTacToe.make_new_board = (function simpleexample$ticTacToe$make_new_board(){
return cljs.core.mapv.call(null,(function (p1__10237_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),p1__10237_SHARP_], null));
}),cljs.core.range.call(null,(1),(10)));
});
/**
 * A simple helepr method to split the board into rows.
 * This method could be inline, but it is more readable if
 * I give it a good name in larger functions
 */
simpleexample.ticTacToe.split_board_rows = (function simpleexample$ticTacToe$split_board_rows(board){
return cljs.core.partition.call(null,(3),board);
});
simpleexample.ticTacToe.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"game-board","game-board",-1515113092),simpleexample.ticTacToe.make_new_board.call(null),new cljs.core.Keyword(null,"whos-turn","whos-turn",1448354273),"X",new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),new cljs.core.Keyword(null,"current-game","current-game",-862717823),new cljs.core.Keyword(null,"old-games","old-games",-153688758),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"undo-position","undo-position",-1509970378),null,new cljs.core.Keyword(null,"ai?","ai?",-298453096),false], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,simpleexample.ticTacToe.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null)),(function (nav_panel,p__10238){
var vec__10239 = p__10238;
var _ = cljs.core.nth.call(null,vec__10239,(0),null);
var value = cljs.core.nth.call(null,vec__10239,(1),null);
return value;
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
/**
 * Helper function to register a simple handler
 * that doesn't require calcualtions
 */
simpleexample.ticTacToe.make_handler = (function simpleexample$ticTacToe$make_handler(k){
return re_frame.core.register_handler.call(null,cljs.core.keyword.call(null,k),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k)], null)),(function (k__$1,p__10242){
var vec__10243 = p__10242;
var _ = cljs.core.nth.call(null,vec__10243,(0),null);
var value = cljs.core.nth.call(null,vec__10243,(1),null);
return value;
}));
});
simpleexample.ticTacToe.make_handler.call(null,"undo-position");
simpleexample.ticTacToe.make_handler.call(null,"ai");
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-board","game-board",-1515113092)], null)),(function (game_board,p__10245){
var vec__10246 = p__10245;
var db = cljs.core.nth.call(null,vec__10246,(0),null);
var value = cljs.core.nth.call(null,vec__10246,(1),null);
var undo_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-position","undo-position",-1509970378)], null));
return cljs.core.mapv.call(null,((function (undo_position,vec__10246,db,value){
return (function (p1__10244_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,undo_position),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__10244_SHARP_))){
return cljs.core.dissoc.call(null,p1__10244_SHARP_,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
} else {
return p1__10244_SHARP_;
}
});})(undo_position,vec__10246,db,value))
,game_board);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"switch-player","switch-player",1897002906),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whos-turn","whos-turn",1448354273)], null)),(function (whos_turn,p__10247){
var vec__10248 = p__10247;
var db = cljs.core.nth.call(null,vec__10248,(0),null);
var value = cljs.core.nth.call(null,vec__10248,(1),null);
var players_turn = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whos-turn","whos-turn",1448354273)], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,players_turn),"X")){
return "O";
} else {
return "X";
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"save","save",1850079149),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-games","old-games",-153688758)], null)),(function (old_games,p__10249){
var vec__10250 = p__10249;
var db = cljs.core.nth.call(null,vec__10250,(0),null);
var game = cljs.core.nth.call(null,vec__10250,(1),null);
var old_games__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-games","old-games",-153688758)], null));
return cljs.core.conj.call(null,cljs.core.deref.call(null,old_games__$1),game);
}));
simpleexample.ticTacToe.check_horizontal = (function simpleexample$ticTacToe$check_horizontal(board){
var winner = (function (){var iter__5087__auto__ = (function simpleexample$ticTacToe$check_horizontal_$_iter__10255(s__10256){
return (new cljs.core.LazySeq(null,(function (){
var s__10256__$1 = s__10256;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10256__$1);
if(temp__4126__auto__){
var s__10256__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10256__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__10256__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__10258 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__10257 = (0);
while(true){
if((i__10257 < size__5086__auto__)){
var x = cljs.core._nth.call(null,c__5085__auto__,i__10257);
cljs.core.chunk_append.call(null,b__10258,(function (){var f = cljs.core.get.call(null,board,x);
if((cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (1))))) && (cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (2)))))){
return f;
} else {
return "";
}
})());

var G__10259 = (i__10257 + (1));
i__10257 = G__10259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10258),simpleexample$ticTacToe$check_horizontal_$_iter__10255.call(null,cljs.core.chunk_rest.call(null,s__10256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10258),null);
}
} else {
var x = cljs.core.first.call(null,s__10256__$2);
return cljs.core.cons.call(null,(function (){var f = cljs.core.get.call(null,board,x);
if((cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (1))))) && (cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (2)))))){
return f;
} else {
return "";
}
})(),simpleexample$ticTacToe$check_horizontal_$_iter__10255.call(null,cljs.core.rest.call(null,s__10256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5087__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null));
})();
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,winner);
});
simpleexample.ticTacToe.check_vertical = (function simpleexample$ticTacToe$check_vertical(board){
var winner = (function (){var iter__5087__auto__ = (function simpleexample$ticTacToe$check_vertical_$_iter__10264(s__10265){
return (new cljs.core.LazySeq(null,(function (){
var s__10265__$1 = s__10265;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10265__$1);
if(temp__4126__auto__){
var s__10265__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10265__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__10265__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__10267 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__10266 = (0);
while(true){
if((i__10266 < size__5086__auto__)){
var x = cljs.core._nth.call(null,c__5085__auto__,i__10266);
cljs.core.chunk_append.call(null,b__10267,(function (){var f = cljs.core.get.call(null,board,x);
if((cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (3))))) && (cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (6)))))){
return f;
} else {
return "";
}
})());

var G__10268 = (i__10266 + (1));
i__10266 = G__10268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10267),simpleexample$ticTacToe$check_vertical_$_iter__10264.call(null,cljs.core.chunk_rest.call(null,s__10265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10267),null);
}
} else {
var x = cljs.core.first.call(null,s__10265__$2);
return cljs.core.cons.call(null,(function (){var f = cljs.core.get.call(null,board,x);
if((cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (3))))) && (cljs.core._EQ_.call(null,f,cljs.core.get.call(null,board,(x + (6)))))){
return f;
} else {
return "";
}
})(),simpleexample$ticTacToe$check_vertical_$_iter__10264.call(null,cljs.core.rest.call(null,s__10265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5087__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})();
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,winner);
});
simpleexample.ticTacToe.check_diaganal = (function simpleexample$ticTacToe$check_diaganal(board){
var center = cljs.core.get.call(null,board,(4));
if((cljs.core._EQ_.call(null,center,cljs.core.get.call(null,board,(0)))) && (cljs.core._EQ_.call(null,center,cljs.core.get.call(null,board,(8))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [center], null);
} else {
if((cljs.core._EQ_.call(null,center,cljs.core.get.call(null,board,(2)))) && (cljs.core._EQ_.call(null,center,cljs.core.get.call(null,board,(6))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [center], null);
} else {
return null;

}
}
});
/**
 * A set of methods which require the board as a vector of
 * player symbols or nils
 */
simpleexample.ticTacToe.check_winner = (function simpleexample$ticTacToe$check_winner(board){
return cljs.core.first.call(null,cljs.core.concat.call(null,simpleexample.ticTacToe.check_horizontal.call(null,board),simpleexample.ticTacToe.check_vertical.call(null,board),simpleexample.ticTacToe.check_diaganal.call(null,board)));
});
/**
 * Checks to see if the board is full given a vector of maps
 * which is the standard representation for the board in this application
 */
simpleexample.ticTacToe.board_full_QMARK_ = (function simpleexample$ticTacToe$board_full_QMARK_(board){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),board)))){
return false;
} else {
alert("The Game is a DRAW!!! Please lower your weapons");

return true;
}
});
simpleexample.ticTacToe.next_ai_move = (function simpleexample$ticTacToe$next_ai_move(board){
var rows = simpleexample.ticTacToe.split_board_rows.call(null,board);
return null;
});
/**
 * Check to see if the board is full, or if there is winner
 * Returns the old board for things to continue or a fresh board
 */
simpleexample.ticTacToe.check_board = (function simpleexample$ticTacToe$check_board(board){
if(cljs.core.truth_(simpleexample.ticTacToe.board_full_QMARK_.call(null,board))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),board], null));

return simpleexample.ticTacToe.make_new_board.call(null);
} else {
var temp__4124__auto__ = simpleexample.ticTacToe.check_winner.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),board));
if(cljs.core.truth_(temp__4124__auto__)){
var winner = temp__4124__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),board], null));

alert([cljs.core.str("The WINNER is....."),cljs.core.str(winner),cljs.core.str("!!!")].join(''));

return simpleexample.ticTacToe.make_new_board.call(null);
} else {
return board;
}
}
});
/**
 * Handles the logic for completing a move and switching players
 */
simpleexample.ticTacToe.complete_move = (function simpleexample$ticTacToe$complete_move(board_position,players_turn,game_board){
return cljs.core.mapv.call(null,(function (p1__10269_SHARP_){
if(cljs.core._EQ_.call(null,board_position,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__10269_SHARP_))){
if((new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__10269_SHARP_) == null)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch-player","switch-player",1897002906)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-position","undo-position",-1509970378),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__10269_SHARP_)], null));

return cljs.core.assoc.call(null,p1__10269_SHARP_,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.deref.call(null,players_turn));
} else {
alert("You can't go there!");

return p1__10269_SHARP_;
}
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch-player","switch-player",1897002906)], null));

return p1__10269_SHARP_;
}
}),game_board);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-board","game-board",-1515113092)], null)),(function (game_board,p__10270){
var vec__10271 = p__10270;
var db = cljs.core.nth.call(null,vec__10271,(0),null);
var board_position = cljs.core.nth.call(null,vec__10271,(1),null);
var players_turn = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whos-turn","whos-turn",1448354273)], null));
var new_board = simpleexample.ticTacToe.complete_move.call(null,board_position,players_turn,game_board);
return simpleexample.ticTacToe.check_board.call(null,new_board);
}));
simpleexample.ticTacToe.make_sub = (function simpleexample$ticTacToe$make_sub(k){
return re_frame.core.register_sub.call(null,cljs.core.keyword.call(null,k),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.keyword.call(null,k).call(null,cljs.core.deref.call(null,db));
}));
}));
});
simpleexample.ticTacToe.make_sub.call(null,"game-board");
simpleexample.ticTacToe.make_sub.call(null,"whos-turn");
simpleexample.ticTacToe.make_sub.call(null,"old-games");
simpleexample.ticTacToe.make_sub.call(null,"undo-position");
simpleexample.ticTacToe.make_sub.call(null,"ai");
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"progress","progress",244323547),(function (db,_){
var game_board = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-board","game-board",-1515113092)], null));
var move_value = ((100) * ((1) / (9)));
var current_progress = reagent.ratom.make_reaction.call(null,((function (game_board,move_value){
return (function (){
return (move_value * cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.deref.call(null,game_board))));
});})(game_board,move_value))
);
return reagent.ratom.make_reaction.call(null,((function (game_board,move_value,current_progress){
return (function (){
return cljs.core.deref.call(null,current_progress);
});})(game_board,move_value,current_progress))
);
}));
/**
 * Creates the button for the board
 */
simpleexample.ticTacToe.cell_button = (function simpleexample$ticTacToe$cell_button(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return simpleexample.ticTacToe.cell_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

simpleexample.ticTacToe.cell_button.cljs$core$IFn$_invoke$arity$variadic = (function (cell_contents,old_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.trim.nav","button.trim.nav",764982581),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(cljs.core.ffirst.call(null,old_QMARK_))?(function (){
return alert("This is an old board. Please go back to the current game to play");
}):(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell_contents)], null));
}))], null),(function (){var pred__10274 = cljs.core._EQ_;
var expr__10275 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cell_contents);
if(cljs.core.truth_(pred__10274.call(null,"X",expr__10275))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#373737",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], null);
} else {
if(cljs.core.truth_(pred__10274.call(null,"O",expr__10275))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#373737",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null);
}
}
})()),(function (){var or__4333__auto__ = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cell_contents);
if(cljs.core.truth_(or__4333__auto__)){
return or__4333__auto__;
} else {
return "open";
}
})()], null);
});

simpleexample.ticTacToe.cell_button.cljs$lang$maxFixedArity = (1);

simpleexample.ticTacToe.cell_button.cljs$lang$applyTo = (function (seq10272){
var G__10273 = cljs.core.first.call(null,seq10272);
var seq10272__$1 = cljs.core.next.call(null,seq10272);
return simpleexample.ticTacToe.cell_button.cljs$core$IFn$_invoke$arity$variadic(G__10273,seq10272__$1);
});
simpleexample.ticTacToe.undo_button = (function simpleexample$ticTacToe$undo_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.trim.nav","button.trim.nav",764982581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
})], null),"UNDO"], null);
});
simpleexample.ticTacToe.display_board = (function simpleexample$ticTacToe$display_board(){
var argseq__5373__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return simpleexample.ticTacToe.display_board.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);
});

simpleexample.ticTacToe.display_board.cljs$core$IFn$_invoke$arity$variadic = (function (board,old_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.call(null,(function (row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5087__auto__ = (function simpleexample$ticTacToe$iter__10279(s__10280){
return (new cljs.core.LazySeq(null,(function (){
var s__10280__$1 = s__10280;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10280__$1);
if(temp__4126__auto__){
var s__10280__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10280__$2)){
var c__5085__auto__ = cljs.core.chunk_first.call(null,s__10280__$2);
var size__5086__auto__ = cljs.core.count.call(null,c__5085__auto__);
var b__10282 = cljs.core.chunk_buffer.call(null,size__5086__auto__);
if((function (){var i__10281 = (0);
while(true){
if((i__10281 < size__5086__auto__)){
var cell = cljs.core._nth.call(null,c__5085__auto__,i__10281);
cljs.core.chunk_append.call(null,b__10282,simpleexample.ticTacToe.cell_button.call(null,cell,old_QMARK_));

var G__10283 = (i__10281 + (1));
i__10281 = G__10283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10282),simpleexample$ticTacToe$iter__10279.call(null,cljs.core.chunk_rest.call(null,s__10280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10282),null);
}
} else {
var cell = cljs.core.first.call(null,s__10280__$2);
return cljs.core.cons.call(null,simpleexample.ticTacToe.cell_button.call(null,cell,old_QMARK_),simpleexample$ticTacToe$iter__10279.call(null,cljs.core.rest.call(null,s__10280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5087__auto__.call(null,row);
})()], null)], null);
}),simpleexample.ticTacToe.split_board_rows.call(null,board))], null),(cljs.core.truth_(old_QMARK_)?null:simpleexample.ticTacToe.undo_button.call(null))], null)], null);
});

simpleexample.ticTacToe.display_board.cljs$lang$maxFixedArity = (1);

simpleexample.ticTacToe.display_board.cljs$lang$applyTo = (function (seq10277){
var G__10278 = cljs.core.first.call(null,seq10277);
var seq10277__$1 = cljs.core.next.call(null,seq10277);
return simpleexample.ticTacToe.display_board.cljs$core$IFn$_invoke$arity$variadic(G__10278,seq10277__$1);
});
simpleexample.ticTacToe.current_game = (function simpleexample$ticTacToe$current_game(){
var board = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-board","game-board",-1515113092)], null));
var current_player = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whos-turn","whos-turn",1448354273)], null));
var ai_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697)], null));
var progress = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547)], null));
return ((function (board,current_player,ai_QMARK_,progress){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5%",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Tic Tac Toe ",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str("Whoever is "),cljs.core.str(cljs.core.deref.call(null,current_player)),cljs.core.str("'s ... You're up!")].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.progress_bar,new cljs.core.Keyword(null,"model","model",331153215),progress,new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20%"], null)], null)], null)], null),simpleexample.ticTacToe.display_board.call(null,cljs.core.deref.call(null,board)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"label","label",1718410804),"Play the computer? (Not working yet)",new cljs.core.Keyword(null,"model","model",331153215),ai_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (board,current_player,ai_QMARK_,progress){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),cljs.core.not.call(null,cljs.core.deref.call(null,ai_QMARK_))], null));
});})(board,current_player,ai_QMARK_,progress))
], null)], null)], null);
});
;})(board,current_player,ai_QMARK_,progress))
});
simpleexample.ticTacToe.old_game = (function simpleexample$ticTacToe$old_game(){
var old_games = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-games","old-games",-153688758)], null));
return ((function (old_games){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Old Games",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"70%",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.call(null,simpleexample.ticTacToe.display_board,cljs.core.reverse.call(null,cljs.core.deref.call(null,old_games)),cljs.core.repeat.call(null,true))], null)], null)], null);
});
;})(old_games))
});
simpleexample.ticTacToe.greeting = (function simpleexample$ticTacToe$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Disco Melee ",new cljs.core.Keyword(null,"underline?","underline?",-1123247603),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null)], null);
});
simpleexample.ticTacToe.footer_navigation = (function simpleexample$ticTacToe$footer_navigation(){
var nav_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"10%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.trim.nav","button.trim.nav",764982581),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav_panel){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),new cljs.core.Keyword(null,"current-game","current-game",-862717823)], null));
});})(nav_panel))
], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,nav_panel),new cljs.core.Keyword(null,"current-game","current-game",-862717823)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#373737",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF"], null)], null):null)),"Current Game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.trim.nav","button.trim.nav",764982581),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav_panel){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582),new cljs.core.Keyword(null,"old-games","old-games",-153688758)], null));
});})(nav_panel))
], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,nav_panel),new cljs.core.Keyword(null,"old-games","old-games",-153688758)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#373737",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF"], null)], null):null)),"Old Games"], null)], null)], null);
});
simpleexample.ticTacToe.game = (function simpleexample$ticTacToe$game(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.greeting], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.current_game], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.footer_navigation], null)], null);
});
simpleexample.ticTacToe.game_history = (function simpleexample$ticTacToe$game_history(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.greeting], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.old_game], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.footer_navigation], null)], null);
});
/**
 * This is the framework for the app.
 * The condp along with the nav-panel key in the @db
 * provide a nice navigation/routing framework
 * while building within a singlepage application
 */
simpleexample.ticTacToe.simple_example = (function simpleexample$ticTacToe$simple_example(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var nav_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-panel","nav-panel",533208582)], null));
if(!((cljs.core.deref.call(null,nav_panel) == null))){
var pred__10287 = cljs.core._EQ_;
var expr__10288 = cljs.core.deref.call(null,nav_panel);
if(cljs.core.truth_(pred__10287.call(null,new cljs.core.Keyword(null,"current-game","current-game",-862717823),expr__10288))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.game], null);
} else {
if(cljs.core.truth_(pred__10287.call(null,new cljs.core.Keyword(null,"old-games","old-games",-153688758),expr__10288))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.game_history], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.game], null);
}
}
} else {
return null;
}
})()], null)], null);
});
simpleexample.ticTacToe.run = (function simpleexample$ticTacToe$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleexample.ticTacToe.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('simpleexample.ticTacToe.run', simpleexample.ticTacToe.run);

//# sourceMappingURL=ticTacToe.js.map?rel=1440774543866