// Generated from ./heck.g4 by ANTLR 4.7.1
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


// Enter a parse tree produced by heckParser#error.
heckListener.prototype.enterError = function(ctx) {
};

// Exit a parse tree produced by heckParser#error.
heckListener.prototype.exitError = function(ctx) {
};


// Enter a parse tree produced by heckParser#sql_stmt_list.
heckListener.prototype.enterSql_stmt_list = function(ctx) {
};

// Exit a parse tree produced by heckParser#sql_stmt_list.
heckListener.prototype.exitSql_stmt_list = function(ctx) {
};


// Enter a parse tree produced by heckParser#sql_stmt.
heckListener.prototype.enterSql_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#sql_stmt.
heckListener.prototype.exitSql_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#alter_table_stmt.
heckListener.prototype.enterAlter_table_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#alter_table_stmt.
heckListener.prototype.exitAlter_table_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#analyze_stmt.
heckListener.prototype.enterAnalyze_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#analyze_stmt.
heckListener.prototype.exitAnalyze_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#attach_stmt.
heckListener.prototype.enterAttach_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#attach_stmt.
heckListener.prototype.exitAttach_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#begin_stmt.
heckListener.prototype.enterBegin_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#begin_stmt.
heckListener.prototype.exitBegin_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#commit_stmt.
heckListener.prototype.enterCommit_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#commit_stmt.
heckListener.prototype.exitCommit_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#compound_select_stmt.
heckListener.prototype.enterCompound_select_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#compound_select_stmt.
heckListener.prototype.exitCompound_select_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#create_index_stmt.
heckListener.prototype.enterCreate_index_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#create_index_stmt.
heckListener.prototype.exitCreate_index_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#create_table_stmt.
heckListener.prototype.enterCreate_table_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#create_table_stmt.
heckListener.prototype.exitCreate_table_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#create_trigger_stmt.
heckListener.prototype.enterCreate_trigger_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#create_trigger_stmt.
heckListener.prototype.exitCreate_trigger_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#create_view_stmt.
heckListener.prototype.enterCreate_view_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#create_view_stmt.
heckListener.prototype.exitCreate_view_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#create_virtual_table_stmt.
heckListener.prototype.enterCreate_virtual_table_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#create_virtual_table_stmt.
heckListener.prototype.exitCreate_virtual_table_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#delete_stmt.
heckListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#delete_stmt.
heckListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#delete_stmt_limited.
heckListener.prototype.enterDelete_stmt_limited = function(ctx) {
};

// Exit a parse tree produced by heckParser#delete_stmt_limited.
heckListener.prototype.exitDelete_stmt_limited = function(ctx) {
};


// Enter a parse tree produced by heckParser#detach_stmt.
heckListener.prototype.enterDetach_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#detach_stmt.
heckListener.prototype.exitDetach_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#drop_index_stmt.
heckListener.prototype.enterDrop_index_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#drop_index_stmt.
heckListener.prototype.exitDrop_index_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#drop_table_stmt.
heckListener.prototype.enterDrop_table_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#drop_table_stmt.
heckListener.prototype.exitDrop_table_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#drop_trigger_stmt.
heckListener.prototype.enterDrop_trigger_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#drop_trigger_stmt.
heckListener.prototype.exitDrop_trigger_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#drop_view_stmt.
heckListener.prototype.enterDrop_view_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#drop_view_stmt.
heckListener.prototype.exitDrop_view_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#factored_select_stmt.
heckListener.prototype.enterFactored_select_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#factored_select_stmt.
heckListener.prototype.exitFactored_select_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#insert_stmt.
heckListener.prototype.enterInsert_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#insert_stmt.
heckListener.prototype.exitInsert_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#pragma_stmt.
heckListener.prototype.enterPragma_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#pragma_stmt.
heckListener.prototype.exitPragma_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#reindex_stmt.
heckListener.prototype.enterReindex_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#reindex_stmt.
heckListener.prototype.exitReindex_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#release_stmt.
heckListener.prototype.enterRelease_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#release_stmt.
heckListener.prototype.exitRelease_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#rollback_stmt.
heckListener.prototype.enterRollback_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#rollback_stmt.
heckListener.prototype.exitRollback_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#savepoint_stmt.
heckListener.prototype.enterSavepoint_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#savepoint_stmt.
heckListener.prototype.exitSavepoint_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#simple_select_stmt.
heckListener.prototype.enterSimple_select_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#simple_select_stmt.
heckListener.prototype.exitSimple_select_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#select_stmt.
heckListener.prototype.enterSelect_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#select_stmt.
heckListener.prototype.exitSelect_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#select_or_values.
heckListener.prototype.enterSelect_or_values = function(ctx) {
};

// Exit a parse tree produced by heckParser#select_or_values.
heckListener.prototype.exitSelect_or_values = function(ctx) {
};


// Enter a parse tree produced by heckParser#update_stmt.
heckListener.prototype.enterUpdate_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#update_stmt.
heckListener.prototype.exitUpdate_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#update_stmt_limited.
heckListener.prototype.enterUpdate_stmt_limited = function(ctx) {
};

// Exit a parse tree produced by heckParser#update_stmt_limited.
heckListener.prototype.exitUpdate_stmt_limited = function(ctx) {
};


// Enter a parse tree produced by heckParser#vacuum_stmt.
heckListener.prototype.enterVacuum_stmt = function(ctx) {
};

// Exit a parse tree produced by heckParser#vacuum_stmt.
heckListener.prototype.exitVacuum_stmt = function(ctx) {
};


// Enter a parse tree produced by heckParser#column_def.
heckListener.prototype.enterColumn_def = function(ctx) {
};

// Exit a parse tree produced by heckParser#column_def.
heckListener.prototype.exitColumn_def = function(ctx) {
};


// Enter a parse tree produced by heckParser#type_name.
heckListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#type_name.
heckListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#column_constraint.
heckListener.prototype.enterColumn_constraint = function(ctx) {
};

// Exit a parse tree produced by heckParser#column_constraint.
heckListener.prototype.exitColumn_constraint = function(ctx) {
};


// Enter a parse tree produced by heckParser#conflict_clause.
heckListener.prototype.enterConflict_clause = function(ctx) {
};

// Exit a parse tree produced by heckParser#conflict_clause.
heckListener.prototype.exitConflict_clause = function(ctx) {
};


// Enter a parse tree produced by heckParser#expr.
heckListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by heckParser#expr.
heckListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by heckParser#foreign_key_clause.
heckListener.prototype.enterForeign_key_clause = function(ctx) {
};

// Exit a parse tree produced by heckParser#foreign_key_clause.
heckListener.prototype.exitForeign_key_clause = function(ctx) {
};


// Enter a parse tree produced by heckParser#raise_function.
heckListener.prototype.enterRaise_function = function(ctx) {
};

// Exit a parse tree produced by heckParser#raise_function.
heckListener.prototype.exitRaise_function = function(ctx) {
};


// Enter a parse tree produced by heckParser#indexed_column.
heckListener.prototype.enterIndexed_column = function(ctx) {
};

// Exit a parse tree produced by heckParser#indexed_column.
heckListener.prototype.exitIndexed_column = function(ctx) {
};


// Enter a parse tree produced by heckParser#table_constraint.
heckListener.prototype.enterTable_constraint = function(ctx) {
};

// Exit a parse tree produced by heckParser#table_constraint.
heckListener.prototype.exitTable_constraint = function(ctx) {
};


// Enter a parse tree produced by heckParser#with_clause.
heckListener.prototype.enterWith_clause = function(ctx) {
};

// Exit a parse tree produced by heckParser#with_clause.
heckListener.prototype.exitWith_clause = function(ctx) {
};


// Enter a parse tree produced by heckParser#qualified_table_name.
heckListener.prototype.enterQualified_table_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#qualified_table_name.
heckListener.prototype.exitQualified_table_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#ordering_term.
heckListener.prototype.enterOrdering_term = function(ctx) {
};

// Exit a parse tree produced by heckParser#ordering_term.
heckListener.prototype.exitOrdering_term = function(ctx) {
};


// Enter a parse tree produced by heckParser#pragma_value.
heckListener.prototype.enterPragma_value = function(ctx) {
};

// Exit a parse tree produced by heckParser#pragma_value.
heckListener.prototype.exitPragma_value = function(ctx) {
};


// Enter a parse tree produced by heckParser#common_table_expression.
heckListener.prototype.enterCommon_table_expression = function(ctx) {
};

// Exit a parse tree produced by heckParser#common_table_expression.
heckListener.prototype.exitCommon_table_expression = function(ctx) {
};


// Enter a parse tree produced by heckParser#result_column.
heckListener.prototype.enterResult_column = function(ctx) {
};

// Exit a parse tree produced by heckParser#result_column.
heckListener.prototype.exitResult_column = function(ctx) {
};


// Enter a parse tree produced by heckParser#table_or_subquery.
heckListener.prototype.enterTable_or_subquery = function(ctx) {
};

// Exit a parse tree produced by heckParser#table_or_subquery.
heckListener.prototype.exitTable_or_subquery = function(ctx) {
};


// Enter a parse tree produced by heckParser#join_clause.
heckListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by heckParser#join_clause.
heckListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by heckParser#join_operator.
heckListener.prototype.enterJoin_operator = function(ctx) {
};

// Exit a parse tree produced by heckParser#join_operator.
heckListener.prototype.exitJoin_operator = function(ctx) {
};


// Enter a parse tree produced by heckParser#join_constraint.
heckListener.prototype.enterJoin_constraint = function(ctx) {
};

// Exit a parse tree produced by heckParser#join_constraint.
heckListener.prototype.exitJoin_constraint = function(ctx) {
};


// Enter a parse tree produced by heckParser#select_core.
heckListener.prototype.enterSelect_core = function(ctx) {
};

// Exit a parse tree produced by heckParser#select_core.
heckListener.prototype.exitSelect_core = function(ctx) {
};


// Enter a parse tree produced by heckParser#compound_operator.
heckListener.prototype.enterCompound_operator = function(ctx) {
};

// Exit a parse tree produced by heckParser#compound_operator.
heckListener.prototype.exitCompound_operator = function(ctx) {
};


// Enter a parse tree produced by heckParser#cte_table_name.
heckListener.prototype.enterCte_table_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#cte_table_name.
heckListener.prototype.exitCte_table_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#signed_number.
heckListener.prototype.enterSigned_number = function(ctx) {
};

// Exit a parse tree produced by heckParser#signed_number.
heckListener.prototype.exitSigned_number = function(ctx) {
};


// Enter a parse tree produced by heckParser#literal_value.
heckListener.prototype.enterLiteral_value = function(ctx) {
};

// Exit a parse tree produced by heckParser#literal_value.
heckListener.prototype.exitLiteral_value = function(ctx) {
};


// Enter a parse tree produced by heckParser#unary_operator.
heckListener.prototype.enterUnary_operator = function(ctx) {
};

// Exit a parse tree produced by heckParser#unary_operator.
heckListener.prototype.exitUnary_operator = function(ctx) {
};


// Enter a parse tree produced by heckParser#error_message.
heckListener.prototype.enterError_message = function(ctx) {
};

// Exit a parse tree produced by heckParser#error_message.
heckListener.prototype.exitError_message = function(ctx) {
};


// Enter a parse tree produced by heckParser#module_argument.
heckListener.prototype.enterModule_argument = function(ctx) {
};

// Exit a parse tree produced by heckParser#module_argument.
heckListener.prototype.exitModule_argument = function(ctx) {
};


// Enter a parse tree produced by heckParser#column_alias.
heckListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by heckParser#column_alias.
heckListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by heckParser#keyword.
heckListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by heckParser#keyword.
heckListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by heckParser#name.
heckListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by heckParser#name.
heckListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by heckParser#function_name.
heckListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#function_name.
heckListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#database_name.
heckListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#database_name.
heckListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#table_name.
heckListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#table_name.
heckListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#table_or_index_name.
heckListener.prototype.enterTable_or_index_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#table_or_index_name.
heckListener.prototype.exitTable_or_index_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#new_table_name.
heckListener.prototype.enterNew_table_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#new_table_name.
heckListener.prototype.exitNew_table_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#column_name.
heckListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#column_name.
heckListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#collation_name.
heckListener.prototype.enterCollation_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#collation_name.
heckListener.prototype.exitCollation_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#foreign_table.
heckListener.prototype.enterForeign_table = function(ctx) {
};

// Exit a parse tree produced by heckParser#foreign_table.
heckListener.prototype.exitForeign_table = function(ctx) {
};


// Enter a parse tree produced by heckParser#index_name.
heckListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#index_name.
heckListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#trigger_name.
heckListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#trigger_name.
heckListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#view_name.
heckListener.prototype.enterView_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#view_name.
heckListener.prototype.exitView_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#module_name.
heckListener.prototype.enterModule_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#module_name.
heckListener.prototype.exitModule_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#pragma_name.
heckListener.prototype.enterPragma_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#pragma_name.
heckListener.prototype.exitPragma_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#savepoint_name.
heckListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#savepoint_name.
heckListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#table_alias.
heckListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by heckParser#table_alias.
heckListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by heckParser#transaction_name.
heckListener.prototype.enterTransaction_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#transaction_name.
heckListener.prototype.exitTransaction_name = function(ctx) {
};


// Enter a parse tree produced by heckParser#any_name.
heckListener.prototype.enterAny_name = function(ctx) {
};

// Exit a parse tree produced by heckParser#any_name.
heckListener.prototype.exitAny_name = function(ctx) {
};



exports.heckListener = heckListener;