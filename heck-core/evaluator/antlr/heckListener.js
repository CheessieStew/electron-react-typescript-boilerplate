// Generated from ./evaluator/heck.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by heckParser.
function heckListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

heckListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
heckListener.prototype.constructor = heckListener;

// Enter a parse tree produced by heckParser#parse.
heckListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by heckParser#parse.
heckListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by heckParser#sql_stmt_list.
heckListener.prototype.enterSql_stmt_list = function(ctx) {
};

// Exit a parse tree produced by heckParser#sql_stmt_list.
heckListener.prototype.exitSql_stmt_list = function(ctx) {
};



exports.heckListener = heckListener;