// Generated from ./evaluator/heck.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by heckParser.

function heckVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

heckVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
heckVisitor.prototype.constructor = heckVisitor;

// Visit a parse tree produced by heckParser#parse.
heckVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#sql_stmt_list.
heckVisitor.prototype.visitSql_stmt_list = function(ctx) {
  return this.visitChildren(ctx);
};



exports.heckVisitor = heckVisitor;