// Generated from ./heck.g4 by ANTLR 4.7.1
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


// Visit a parse tree produced by heckParser#error.
heckVisitor.prototype.visitError = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#sql_stmt_list.
heckVisitor.prototype.visitSql_stmt_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#sql_stmt.
heckVisitor.prototype.visitSql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#alter_table_stmt.
heckVisitor.prototype.visitAlter_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#analyze_stmt.
heckVisitor.prototype.visitAnalyze_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#attach_stmt.
heckVisitor.prototype.visitAttach_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#begin_stmt.
heckVisitor.prototype.visitBegin_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#commit_stmt.
heckVisitor.prototype.visitCommit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#compound_select_stmt.
heckVisitor.prototype.visitCompound_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#create_index_stmt.
heckVisitor.prototype.visitCreate_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#create_table_stmt.
heckVisitor.prototype.visitCreate_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#create_trigger_stmt.
heckVisitor.prototype.visitCreate_trigger_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#create_view_stmt.
heckVisitor.prototype.visitCreate_view_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#create_virtual_table_stmt.
heckVisitor.prototype.visitCreate_virtual_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#delete_stmt.
heckVisitor.prototype.visitDelete_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#delete_stmt_limited.
heckVisitor.prototype.visitDelete_stmt_limited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#detach_stmt.
heckVisitor.prototype.visitDetach_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#drop_index_stmt.
heckVisitor.prototype.visitDrop_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#drop_table_stmt.
heckVisitor.prototype.visitDrop_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#drop_trigger_stmt.
heckVisitor.prototype.visitDrop_trigger_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#drop_view_stmt.
heckVisitor.prototype.visitDrop_view_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#factored_select_stmt.
heckVisitor.prototype.visitFactored_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#insert_stmt.
heckVisitor.prototype.visitInsert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#pragma_stmt.
heckVisitor.prototype.visitPragma_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#reindex_stmt.
heckVisitor.prototype.visitReindex_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#release_stmt.
heckVisitor.prototype.visitRelease_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#rollback_stmt.
heckVisitor.prototype.visitRollback_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#savepoint_stmt.
heckVisitor.prototype.visitSavepoint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#simple_select_stmt.
heckVisitor.prototype.visitSimple_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#select_stmt.
heckVisitor.prototype.visitSelect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#select_or_values.
heckVisitor.prototype.visitSelect_or_values = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#update_stmt.
heckVisitor.prototype.visitUpdate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#update_stmt_limited.
heckVisitor.prototype.visitUpdate_stmt_limited = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#vacuum_stmt.
heckVisitor.prototype.visitVacuum_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#column_def.
heckVisitor.prototype.visitColumn_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#type_name.
heckVisitor.prototype.visitType_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#column_constraint.
heckVisitor.prototype.visitColumn_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#conflict_clause.
heckVisitor.prototype.visitConflict_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#expr.
heckVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#foreign_key_clause.
heckVisitor.prototype.visitForeign_key_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#raise_function.
heckVisitor.prototype.visitRaise_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#indexed_column.
heckVisitor.prototype.visitIndexed_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#table_constraint.
heckVisitor.prototype.visitTable_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#with_clause.
heckVisitor.prototype.visitWith_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#qualified_table_name.
heckVisitor.prototype.visitQualified_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#ordering_term.
heckVisitor.prototype.visitOrdering_term = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#pragma_value.
heckVisitor.prototype.visitPragma_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#common_table_expression.
heckVisitor.prototype.visitCommon_table_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#result_column.
heckVisitor.prototype.visitResult_column = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#table_or_subquery.
heckVisitor.prototype.visitTable_or_subquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#join_clause.
heckVisitor.prototype.visitJoin_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#join_operator.
heckVisitor.prototype.visitJoin_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#join_constraint.
heckVisitor.prototype.visitJoin_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#select_core.
heckVisitor.prototype.visitSelect_core = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#compound_operator.
heckVisitor.prototype.visitCompound_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#cte_table_name.
heckVisitor.prototype.visitCte_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#signed_number.
heckVisitor.prototype.visitSigned_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#literal_value.
heckVisitor.prototype.visitLiteral_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#unary_operator.
heckVisitor.prototype.visitUnary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#error_message.
heckVisitor.prototype.visitError_message = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#module_argument.
heckVisitor.prototype.visitModule_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#column_alias.
heckVisitor.prototype.visitColumn_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#keyword.
heckVisitor.prototype.visitKeyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#name.
heckVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#function_name.
heckVisitor.prototype.visitFunction_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#database_name.
heckVisitor.prototype.visitDatabase_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#table_name.
heckVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#table_or_index_name.
heckVisitor.prototype.visitTable_or_index_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#new_table_name.
heckVisitor.prototype.visitNew_table_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#column_name.
heckVisitor.prototype.visitColumn_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#collation_name.
heckVisitor.prototype.visitCollation_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#foreign_table.
heckVisitor.prototype.visitForeign_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#index_name.
heckVisitor.prototype.visitIndex_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#trigger_name.
heckVisitor.prototype.visitTrigger_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#view_name.
heckVisitor.prototype.visitView_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#module_name.
heckVisitor.prototype.visitModule_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#pragma_name.
heckVisitor.prototype.visitPragma_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#savepoint_name.
heckVisitor.prototype.visitSavepoint_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#table_alias.
heckVisitor.prototype.visitTable_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#transaction_name.
heckVisitor.prototype.visitTransaction_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by heckParser#any_name.
heckVisitor.prototype.visitAny_name = function(ctx) {
  return this.visitChildren(ctx);
};



exports.heckVisitor = heckVisitor;