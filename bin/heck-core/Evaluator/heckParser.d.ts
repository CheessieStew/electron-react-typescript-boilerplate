import { ATN } from 'antlr4ts/atn/ATN';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RuleContext } from 'antlr4ts/RuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { heckListener } from './heckListener';
import { heckVisitor } from './heckVisitor';
export declare class heckParser extends Parser {
    static readonly SCOL = 1;
    static readonly DOT = 2;
    static readonly OPEN_PAR = 3;
    static readonly CLOSE_PAR = 4;
    static readonly COMMA = 5;
    static readonly ASSIGN = 6;
    static readonly STAR = 7;
    static readonly PLUS = 8;
    static readonly MINUS = 9;
    static readonly TILDE = 10;
    static readonly PIPE2 = 11;
    static readonly DIV = 12;
    static readonly MOD = 13;
    static readonly LT2 = 14;
    static readonly GT2 = 15;
    static readonly AMP = 16;
    static readonly PIPE = 17;
    static readonly LT = 18;
    static readonly LT_EQ = 19;
    static readonly GT = 20;
    static readonly GT_EQ = 21;
    static readonly EQ = 22;
    static readonly NOT_EQ1 = 23;
    static readonly NOT_EQ2 = 24;
    static readonly K_ABORT = 25;
    static readonly K_ACTION = 26;
    static readonly K_ADD = 27;
    static readonly K_AFTER = 28;
    static readonly K_ALL = 29;
    static readonly K_ALTER = 30;
    static readonly K_ANALYZE = 31;
    static readonly K_AND = 32;
    static readonly K_AS = 33;
    static readonly K_ASC = 34;
    static readonly K_ATTACH = 35;
    static readonly K_AUTOINCREMENT = 36;
    static readonly K_BEFORE = 37;
    static readonly K_BEGIN = 38;
    static readonly K_BETWEEN = 39;
    static readonly K_BY = 40;
    static readonly K_CASCADE = 41;
    static readonly K_CASE = 42;
    static readonly K_CAST = 43;
    static readonly K_CHECK = 44;
    static readonly K_COLLATE = 45;
    static readonly K_COLUMN = 46;
    static readonly K_COMMIT = 47;
    static readonly K_CONFLICT = 48;
    static readonly K_CONSTRAINT = 49;
    static readonly K_CREATE = 50;
    static readonly K_CROSS = 51;
    static readonly K_CURRENT_DATE = 52;
    static readonly K_CURRENT_TIME = 53;
    static readonly K_CURRENT_TIMESTAMP = 54;
    static readonly K_DATABASE = 55;
    static readonly K_DEFAULT = 56;
    static readonly K_DEFERRABLE = 57;
    static readonly K_DEFERRED = 58;
    static readonly K_DELETE = 59;
    static readonly K_DESC = 60;
    static readonly K_DETACH = 61;
    static readonly K_DISTINCT = 62;
    static readonly K_DROP = 63;
    static readonly K_EACH = 64;
    static readonly K_ELSE = 65;
    static readonly K_END = 66;
    static readonly K_ESCAPE = 67;
    static readonly K_EXCEPT = 68;
    static readonly K_EXCLUSIVE = 69;
    static readonly K_EXISTS = 70;
    static readonly K_EXPLAIN = 71;
    static readonly K_FAIL = 72;
    static readonly K_FOR = 73;
    static readonly K_FOREIGN = 74;
    static readonly K_FROM = 75;
    static readonly K_FULL = 76;
    static readonly K_GLOB = 77;
    static readonly K_GROUP = 78;
    static readonly K_HAVING = 79;
    static readonly K_IF = 80;
    static readonly K_IGNORE = 81;
    static readonly K_IMMEDIATE = 82;
    static readonly K_IN = 83;
    static readonly K_INDEX = 84;
    static readonly K_INDEXED = 85;
    static readonly K_INITIALLY = 86;
    static readonly K_INNER = 87;
    static readonly K_INSERT = 88;
    static readonly K_INSTEAD = 89;
    static readonly K_INTERSECT = 90;
    static readonly K_INTO = 91;
    static readonly K_IS = 92;
    static readonly K_ISNULL = 93;
    static readonly K_JOIN = 94;
    static readonly K_KEY = 95;
    static readonly K_LEFT = 96;
    static readonly K_LIKE = 97;
    static readonly K_LIMIT = 98;
    static readonly K_MATCH = 99;
    static readonly K_NATURAL = 100;
    static readonly K_NO = 101;
    static readonly K_NOT = 102;
    static readonly K_NOTNULL = 103;
    static readonly K_NULL = 104;
    static readonly K_OF = 105;
    static readonly K_OFFSET = 106;
    static readonly K_ON = 107;
    static readonly K_OR = 108;
    static readonly K_ORDER = 109;
    static readonly K_OUTER = 110;
    static readonly K_PLAN = 111;
    static readonly K_PRAGMA = 112;
    static readonly K_PRIMARY = 113;
    static readonly K_QUERY = 114;
    static readonly K_RAISE = 115;
    static readonly K_RECURSIVE = 116;
    static readonly K_REFERENCES = 117;
    static readonly K_REGEXP = 118;
    static readonly K_REINDEX = 119;
    static readonly K_RELEASE = 120;
    static readonly K_RENAME = 121;
    static readonly K_REPLACE = 122;
    static readonly K_RESTRICT = 123;
    static readonly K_RIGHT = 124;
    static readonly K_ROLLBACK = 125;
    static readonly K_ROW = 126;
    static readonly K_SAVEPOINT = 127;
    static readonly K_SELECT = 128;
    static readonly K_SET = 129;
    static readonly K_TABLE = 130;
    static readonly K_TEMP = 131;
    static readonly K_TEMPORARY = 132;
    static readonly K_THEN = 133;
    static readonly K_TO = 134;
    static readonly K_TRANSACTION = 135;
    static readonly K_TRIGGER = 136;
    static readonly K_UNION = 137;
    static readonly K_UNIQUE = 138;
    static readonly K_UPDATE = 139;
    static readonly K_USING = 140;
    static readonly K_VACUUM = 141;
    static readonly K_VALUES = 142;
    static readonly K_VIEW = 143;
    static readonly K_VIRTUAL = 144;
    static readonly K_WHEN = 145;
    static readonly K_WHERE = 146;
    static readonly K_WITH = 147;
    static readonly K_WITHOUT = 148;
    static readonly IDENTIFIER = 149;
    static readonly NUMERIC_LITERAL = 150;
    static readonly BIND_PARAMETER = 151;
    static readonly STRING_LITERAL = 152;
    static readonly BLOB_LITERAL = 153;
    static readonly SINGLE_LINE_COMMENT = 154;
    static readonly MULTILINE_COMMENT = 155;
    static readonly SPACES = 156;
    static readonly UNEXPECTED_CHAR = 157;
    static readonly RULE_parse = 0;
    static readonly RULE_error = 1;
    static readonly RULE_sql_stmt_list = 2;
    static readonly RULE_sql_stmt = 3;
    static readonly RULE_alter_table_stmt = 4;
    static readonly RULE_analyze_stmt = 5;
    static readonly RULE_attach_stmt = 6;
    static readonly RULE_begin_stmt = 7;
    static readonly RULE_commit_stmt = 8;
    static readonly RULE_compound_select_stmt = 9;
    static readonly RULE_create_index_stmt = 10;
    static readonly RULE_create_table_stmt = 11;
    static readonly RULE_create_trigger_stmt = 12;
    static readonly RULE_create_view_stmt = 13;
    static readonly RULE_create_virtual_table_stmt = 14;
    static readonly RULE_delete_stmt = 15;
    static readonly RULE_delete_stmt_limited = 16;
    static readonly RULE_detach_stmt = 17;
    static readonly RULE_drop_index_stmt = 18;
    static readonly RULE_drop_table_stmt = 19;
    static readonly RULE_drop_trigger_stmt = 20;
    static readonly RULE_drop_view_stmt = 21;
    static readonly RULE_factored_select_stmt = 22;
    static readonly RULE_insert_stmt = 23;
    static readonly RULE_pragma_stmt = 24;
    static readonly RULE_reindex_stmt = 25;
    static readonly RULE_release_stmt = 26;
    static readonly RULE_rollback_stmt = 27;
    static readonly RULE_savepoint_stmt = 28;
    static readonly RULE_simple_select_stmt = 29;
    static readonly RULE_select_stmt = 30;
    static readonly RULE_select_or_values = 31;
    static readonly RULE_update_stmt = 32;
    static readonly RULE_update_stmt_limited = 33;
    static readonly RULE_vacuum_stmt = 34;
    static readonly RULE_column_def = 35;
    static readonly RULE_type_name = 36;
    static readonly RULE_column_constraint = 37;
    static readonly RULE_conflict_clause = 38;
    static readonly RULE_expr = 39;
    static readonly RULE_foreign_key_clause = 40;
    static readonly RULE_raise_function = 41;
    static readonly RULE_indexed_column = 42;
    static readonly RULE_table_constraint = 43;
    static readonly RULE_with_clause = 44;
    static readonly RULE_qualified_table_name = 45;
    static readonly RULE_ordering_term = 46;
    static readonly RULE_pragma_value = 47;
    static readonly RULE_common_table_expression = 48;
    static readonly RULE_result_column = 49;
    static readonly RULE_table_or_subquery = 50;
    static readonly RULE_join_clause = 51;
    static readonly RULE_join_operator = 52;
    static readonly RULE_join_constraint = 53;
    static readonly RULE_select_core = 54;
    static readonly RULE_compound_operator = 55;
    static readonly RULE_cte_table_name = 56;
    static readonly RULE_signed_number = 57;
    static readonly RULE_literal_value = 58;
    static readonly RULE_unary_operator = 59;
    static readonly RULE_error_message = 60;
    static readonly RULE_module_argument = 61;
    static readonly RULE_column_alias = 62;
    static readonly RULE_keyword = 63;
    static readonly RULE_name = 64;
    static readonly RULE_function_name = 65;
    static readonly RULE_database_name = 66;
    static readonly RULE_table_name = 67;
    static readonly RULE_table_or_index_name = 68;
    static readonly RULE_new_table_name = 69;
    static readonly RULE_column_name = 70;
    static readonly RULE_collation_name = 71;
    static readonly RULE_foreign_table = 72;
    static readonly RULE_index_name = 73;
    static readonly RULE_trigger_name = 74;
    static readonly RULE_view_name = 75;
    static readonly RULE_module_name = 76;
    static readonly RULE_pragma_name = 77;
    static readonly RULE_savepoint_name = 78;
    static readonly RULE_table_alias = 79;
    static readonly RULE_transaction_name = 80;
    static readonly RULE_any_name = 81;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    parse(): ParseContext;
    error(): ErrorContext;
    sql_stmt_list(): Sql_stmt_listContext;
    sql_stmt(): Sql_stmtContext;
    alter_table_stmt(): Alter_table_stmtContext;
    analyze_stmt(): Analyze_stmtContext;
    attach_stmt(): Attach_stmtContext;
    begin_stmt(): Begin_stmtContext;
    commit_stmt(): Commit_stmtContext;
    compound_select_stmt(): Compound_select_stmtContext;
    create_index_stmt(): Create_index_stmtContext;
    create_table_stmt(): Create_table_stmtContext;
    create_trigger_stmt(): Create_trigger_stmtContext;
    create_view_stmt(): Create_view_stmtContext;
    create_virtual_table_stmt(): Create_virtual_table_stmtContext;
    delete_stmt(): Delete_stmtContext;
    delete_stmt_limited(): Delete_stmt_limitedContext;
    detach_stmt(): Detach_stmtContext;
    drop_index_stmt(): Drop_index_stmtContext;
    drop_table_stmt(): Drop_table_stmtContext;
    drop_trigger_stmt(): Drop_trigger_stmtContext;
    drop_view_stmt(): Drop_view_stmtContext;
    factored_select_stmt(): Factored_select_stmtContext;
    insert_stmt(): Insert_stmtContext;
    pragma_stmt(): Pragma_stmtContext;
    reindex_stmt(): Reindex_stmtContext;
    release_stmt(): Release_stmtContext;
    rollback_stmt(): Rollback_stmtContext;
    savepoint_stmt(): Savepoint_stmtContext;
    simple_select_stmt(): Simple_select_stmtContext;
    select_stmt(): Select_stmtContext;
    select_or_values(): Select_or_valuesContext;
    update_stmt(): Update_stmtContext;
    update_stmt_limited(): Update_stmt_limitedContext;
    vacuum_stmt(): Vacuum_stmtContext;
    column_def(): Column_defContext;
    type_name(): Type_nameContext;
    column_constraint(): Column_constraintContext;
    conflict_clause(): Conflict_clauseContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    foreign_key_clause(): Foreign_key_clauseContext;
    raise_function(): Raise_functionContext;
    indexed_column(): Indexed_columnContext;
    table_constraint(): Table_constraintContext;
    with_clause(): With_clauseContext;
    qualified_table_name(): Qualified_table_nameContext;
    ordering_term(): Ordering_termContext;
    pragma_value(): Pragma_valueContext;
    common_table_expression(): Common_table_expressionContext;
    result_column(): Result_columnContext;
    table_or_subquery(): Table_or_subqueryContext;
    join_clause(): Join_clauseContext;
    join_operator(): Join_operatorContext;
    join_constraint(): Join_constraintContext;
    select_core(): Select_coreContext;
    compound_operator(): Compound_operatorContext;
    cte_table_name(): Cte_table_nameContext;
    signed_number(): Signed_numberContext;
    literal_value(): Literal_valueContext;
    unary_operator(): Unary_operatorContext;
    error_message(): Error_messageContext;
    module_argument(): Module_argumentContext;
    column_alias(): Column_aliasContext;
    keyword(): KeywordContext;
    name(): NameContext;
    function_name(): Function_nameContext;
    database_name(): Database_nameContext;
    table_name(): Table_nameContext;
    table_or_index_name(): Table_or_index_nameContext;
    new_table_name(): New_table_nameContext;
    column_name(): Column_nameContext;
    collation_name(): Collation_nameContext;
    foreign_table(): Foreign_tableContext;
    index_name(): Index_nameContext;
    trigger_name(): Trigger_nameContext;
    view_name(): View_nameContext;
    module_name(): Module_nameContext;
    pragma_name(): Pragma_nameContext;
    savepoint_name(): Savepoint_nameContext;
    table_alias(): Table_aliasContext;
    transaction_name(): Transaction_nameContext;
    any_name(): Any_nameContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expr_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    private static readonly _serializedATNSegment3;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class ParseContext extends ParserRuleContext {
    EOF(): TerminalNode;
    sql_stmt_list(): Sql_stmt_listContext[];
    sql_stmt_list(i: number): Sql_stmt_listContext;
    error(): ErrorContext[];
    error(i: number): ErrorContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class ErrorContext extends ParserRuleContext {
    UNEXPECTED_CHAR(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Sql_stmt_listContext extends ParserRuleContext {
    sql_stmt(): Sql_stmtContext[];
    sql_stmt(i: number): Sql_stmtContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Sql_stmtContext extends ParserRuleContext {
    alter_table_stmt(): Alter_table_stmtContext | undefined;
    analyze_stmt(): Analyze_stmtContext | undefined;
    attach_stmt(): Attach_stmtContext | undefined;
    begin_stmt(): Begin_stmtContext | undefined;
    commit_stmt(): Commit_stmtContext | undefined;
    compound_select_stmt(): Compound_select_stmtContext | undefined;
    create_index_stmt(): Create_index_stmtContext | undefined;
    create_table_stmt(): Create_table_stmtContext | undefined;
    create_trigger_stmt(): Create_trigger_stmtContext | undefined;
    create_view_stmt(): Create_view_stmtContext | undefined;
    create_virtual_table_stmt(): Create_virtual_table_stmtContext | undefined;
    delete_stmt(): Delete_stmtContext | undefined;
    delete_stmt_limited(): Delete_stmt_limitedContext | undefined;
    detach_stmt(): Detach_stmtContext | undefined;
    drop_index_stmt(): Drop_index_stmtContext | undefined;
    drop_table_stmt(): Drop_table_stmtContext | undefined;
    drop_trigger_stmt(): Drop_trigger_stmtContext | undefined;
    drop_view_stmt(): Drop_view_stmtContext | undefined;
    factored_select_stmt(): Factored_select_stmtContext | undefined;
    insert_stmt(): Insert_stmtContext | undefined;
    pragma_stmt(): Pragma_stmtContext | undefined;
    reindex_stmt(): Reindex_stmtContext | undefined;
    release_stmt(): Release_stmtContext | undefined;
    rollback_stmt(): Rollback_stmtContext | undefined;
    savepoint_stmt(): Savepoint_stmtContext | undefined;
    simple_select_stmt(): Simple_select_stmtContext | undefined;
    select_stmt(): Select_stmtContext | undefined;
    update_stmt(): Update_stmtContext | undefined;
    update_stmt_limited(): Update_stmt_limitedContext | undefined;
    vacuum_stmt(): Vacuum_stmtContext | undefined;
    K_EXPLAIN(): TerminalNode | undefined;
    K_QUERY(): TerminalNode | undefined;
    K_PLAN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Alter_table_stmtContext extends ParserRuleContext {
    K_ALTER(): TerminalNode;
    K_TABLE(): TerminalNode;
    table_name(): Table_nameContext;
    K_RENAME(): TerminalNode | undefined;
    K_TO(): TerminalNode | undefined;
    new_table_name(): New_table_nameContext | undefined;
    K_ADD(): TerminalNode | undefined;
    column_def(): Column_defContext | undefined;
    database_name(): Database_nameContext | undefined;
    K_COLUMN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Analyze_stmtContext extends ParserRuleContext {
    K_ANALYZE(): TerminalNode;
    database_name(): Database_nameContext | undefined;
    table_or_index_name(): Table_or_index_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Attach_stmtContext extends ParserRuleContext {
    K_ATTACH(): TerminalNode;
    expr(): ExprContext;
    K_AS(): TerminalNode;
    database_name(): Database_nameContext;
    K_DATABASE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Begin_stmtContext extends ParserRuleContext {
    K_BEGIN(): TerminalNode;
    K_TRANSACTION(): TerminalNode | undefined;
    K_DEFERRED(): TerminalNode | undefined;
    K_IMMEDIATE(): TerminalNode | undefined;
    K_EXCLUSIVE(): TerminalNode | undefined;
    transaction_name(): Transaction_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Commit_stmtContext extends ParserRuleContext {
    K_COMMIT(): TerminalNode | undefined;
    K_END(): TerminalNode | undefined;
    K_TRANSACTION(): TerminalNode | undefined;
    transaction_name(): Transaction_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Compound_select_stmtContext extends ParserRuleContext {
    select_core(): Select_coreContext[];
    select_core(i: number): Select_coreContext;
    K_WITH(): TerminalNode | undefined;
    common_table_expression(): Common_table_expressionContext[];
    common_table_expression(i: number): Common_table_expressionContext;
    K_ORDER(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    K_LIMIT(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_UNION(): TerminalNode[];
    K_UNION(i: number): TerminalNode;
    K_INTERSECT(): TerminalNode[];
    K_INTERSECT(i: number): TerminalNode;
    K_EXCEPT(): TerminalNode[];
    K_EXCEPT(i: number): TerminalNode;
    K_RECURSIVE(): TerminalNode | undefined;
    K_OFFSET(): TerminalNode | undefined;
    K_ALL(): TerminalNode[];
    K_ALL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Create_index_stmtContext extends ParserRuleContext {
    K_CREATE(): TerminalNode;
    K_INDEX(): TerminalNode;
    index_name(): Index_nameContext;
    K_ON(): TerminalNode;
    table_name(): Table_nameContext;
    indexed_column(): Indexed_columnContext[];
    indexed_column(i: number): Indexed_columnContext;
    K_UNIQUE(): TerminalNode | undefined;
    K_IF(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    K_WHERE(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Create_table_stmtContext extends ParserRuleContext {
    K_CREATE(): TerminalNode;
    K_TABLE(): TerminalNode;
    table_name(): Table_nameContext;
    column_def(): Column_defContext[];
    column_def(i: number): Column_defContext;
    K_AS(): TerminalNode | undefined;
    select_stmt(): Select_stmtContext | undefined;
    K_IF(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    K_TEMP(): TerminalNode | undefined;
    K_TEMPORARY(): TerminalNode | undefined;
    table_constraint(): Table_constraintContext[];
    table_constraint(i: number): Table_constraintContext;
    K_WITHOUT(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Create_trigger_stmtContext extends ParserRuleContext {
    K_CREATE(): TerminalNode;
    K_TRIGGER(): TerminalNode;
    trigger_name(): Trigger_nameContext;
    K_ON(): TerminalNode;
    table_name(): Table_nameContext;
    K_BEGIN(): TerminalNode;
    K_END(): TerminalNode;
    K_DELETE(): TerminalNode | undefined;
    K_INSERT(): TerminalNode | undefined;
    K_UPDATE(): TerminalNode | undefined;
    K_IF(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext[];
    database_name(i: number): Database_nameContext;
    K_BEFORE(): TerminalNode | undefined;
    K_AFTER(): TerminalNode | undefined;
    K_INSTEAD(): TerminalNode | undefined;
    K_OF(): TerminalNode[];
    K_OF(i: number): TerminalNode;
    K_FOR(): TerminalNode | undefined;
    K_EACH(): TerminalNode | undefined;
    K_ROW(): TerminalNode | undefined;
    K_WHEN(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    K_TEMP(): TerminalNode | undefined;
    K_TEMPORARY(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    update_stmt(): Update_stmtContext[];
    update_stmt(i: number): Update_stmtContext;
    insert_stmt(): Insert_stmtContext[];
    insert_stmt(i: number): Insert_stmtContext;
    delete_stmt(): Delete_stmtContext[];
    delete_stmt(i: number): Delete_stmtContext;
    select_stmt(): Select_stmtContext[];
    select_stmt(i: number): Select_stmtContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Create_view_stmtContext extends ParserRuleContext {
    K_CREATE(): TerminalNode;
    K_VIEW(): TerminalNode;
    view_name(): View_nameContext;
    K_AS(): TerminalNode;
    select_stmt(): Select_stmtContext;
    K_IF(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    K_TEMP(): TerminalNode | undefined;
    K_TEMPORARY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Create_virtual_table_stmtContext extends ParserRuleContext {
    K_CREATE(): TerminalNode;
    K_VIRTUAL(): TerminalNode;
    K_TABLE(): TerminalNode;
    table_name(): Table_nameContext;
    K_USING(): TerminalNode;
    module_name(): Module_nameContext;
    K_IF(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    module_argument(): Module_argumentContext[];
    module_argument(i: number): Module_argumentContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Delete_stmtContext extends ParserRuleContext {
    K_DELETE(): TerminalNode;
    K_FROM(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    with_clause(): With_clauseContext | undefined;
    K_WHERE(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Delete_stmt_limitedContext extends ParserRuleContext {
    K_DELETE(): TerminalNode;
    K_FROM(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    with_clause(): With_clauseContext | undefined;
    K_WHERE(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_LIMIT(): TerminalNode | undefined;
    K_ORDER(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    K_OFFSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Detach_stmtContext extends ParserRuleContext {
    K_DETACH(): TerminalNode;
    database_name(): Database_nameContext;
    K_DATABASE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Drop_index_stmtContext extends ParserRuleContext {
    K_DROP(): TerminalNode;
    K_INDEX(): TerminalNode;
    index_name(): Index_nameContext;
    K_IF(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Drop_table_stmtContext extends ParserRuleContext {
    K_DROP(): TerminalNode;
    K_TABLE(): TerminalNode;
    table_name(): Table_nameContext;
    K_IF(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Drop_trigger_stmtContext extends ParserRuleContext {
    K_DROP(): TerminalNode;
    K_TRIGGER(): TerminalNode;
    trigger_name(): Trigger_nameContext;
    K_IF(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Drop_view_stmtContext extends ParserRuleContext {
    K_DROP(): TerminalNode;
    K_VIEW(): TerminalNode;
    view_name(): View_nameContext;
    K_IF(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    database_name(): Database_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Factored_select_stmtContext extends ParserRuleContext {
    select_core(): Select_coreContext[];
    select_core(i: number): Select_coreContext;
    K_WITH(): TerminalNode | undefined;
    common_table_expression(): Common_table_expressionContext[];
    common_table_expression(i: number): Common_table_expressionContext;
    compound_operator(): Compound_operatorContext[];
    compound_operator(i: number): Compound_operatorContext;
    K_ORDER(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    K_LIMIT(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_RECURSIVE(): TerminalNode | undefined;
    K_OFFSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Insert_stmtContext extends ParserRuleContext {
    K_INTO(): TerminalNode;
    table_name(): Table_nameContext;
    K_INSERT(): TerminalNode | undefined;
    K_REPLACE(): TerminalNode | undefined;
    K_OR(): TerminalNode | undefined;
    K_ROLLBACK(): TerminalNode | undefined;
    K_ABORT(): TerminalNode | undefined;
    K_FAIL(): TerminalNode | undefined;
    K_IGNORE(): TerminalNode | undefined;
    K_VALUES(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    select_stmt(): Select_stmtContext | undefined;
    K_DEFAULT(): TerminalNode | undefined;
    with_clause(): With_clauseContext | undefined;
    database_name(): Database_nameContext | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Pragma_stmtContext extends ParserRuleContext {
    K_PRAGMA(): TerminalNode;
    pragma_name(): Pragma_nameContext;
    database_name(): Database_nameContext | undefined;
    pragma_value(): Pragma_valueContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Reindex_stmtContext extends ParserRuleContext {
    K_REINDEX(): TerminalNode;
    collation_name(): Collation_nameContext | undefined;
    table_name(): Table_nameContext | undefined;
    index_name(): Index_nameContext | undefined;
    database_name(): Database_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Release_stmtContext extends ParserRuleContext {
    K_RELEASE(): TerminalNode;
    savepoint_name(): Savepoint_nameContext;
    K_SAVEPOINT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Rollback_stmtContext extends ParserRuleContext {
    K_ROLLBACK(): TerminalNode;
    K_TRANSACTION(): TerminalNode | undefined;
    K_TO(): TerminalNode | undefined;
    savepoint_name(): Savepoint_nameContext | undefined;
    transaction_name(): Transaction_nameContext | undefined;
    K_SAVEPOINT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Savepoint_stmtContext extends ParserRuleContext {
    K_SAVEPOINT(): TerminalNode;
    savepoint_name(): Savepoint_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Simple_select_stmtContext extends ParserRuleContext {
    select_core(): Select_coreContext;
    K_WITH(): TerminalNode | undefined;
    common_table_expression(): Common_table_expressionContext[];
    common_table_expression(i: number): Common_table_expressionContext;
    K_ORDER(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    K_LIMIT(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_RECURSIVE(): TerminalNode | undefined;
    K_OFFSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Select_stmtContext extends ParserRuleContext {
    select_or_values(): Select_or_valuesContext[];
    select_or_values(i: number): Select_or_valuesContext;
    K_WITH(): TerminalNode | undefined;
    common_table_expression(): Common_table_expressionContext[];
    common_table_expression(i: number): Common_table_expressionContext;
    compound_operator(): Compound_operatorContext[];
    compound_operator(i: number): Compound_operatorContext;
    K_ORDER(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    K_LIMIT(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_RECURSIVE(): TerminalNode | undefined;
    K_OFFSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Select_or_valuesContext extends ParserRuleContext {
    K_SELECT(): TerminalNode | undefined;
    result_column(): Result_columnContext[];
    result_column(i: number): Result_columnContext;
    K_FROM(): TerminalNode | undefined;
    K_WHERE(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_GROUP(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    K_DISTINCT(): TerminalNode | undefined;
    K_ALL(): TerminalNode | undefined;
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_clause(): Join_clauseContext | undefined;
    K_HAVING(): TerminalNode | undefined;
    K_VALUES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Update_stmtContext extends ParserRuleContext {
    K_UPDATE(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    K_SET(): TerminalNode;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    with_clause(): With_clauseContext | undefined;
    K_OR(): TerminalNode | undefined;
    K_ROLLBACK(): TerminalNode | undefined;
    K_ABORT(): TerminalNode | undefined;
    K_REPLACE(): TerminalNode | undefined;
    K_FAIL(): TerminalNode | undefined;
    K_IGNORE(): TerminalNode | undefined;
    K_WHERE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Update_stmt_limitedContext extends ParserRuleContext {
    K_UPDATE(): TerminalNode;
    qualified_table_name(): Qualified_table_nameContext;
    K_SET(): TerminalNode;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    with_clause(): With_clauseContext | undefined;
    K_OR(): TerminalNode | undefined;
    K_ROLLBACK(): TerminalNode | undefined;
    K_ABORT(): TerminalNode | undefined;
    K_REPLACE(): TerminalNode | undefined;
    K_FAIL(): TerminalNode | undefined;
    K_IGNORE(): TerminalNode | undefined;
    K_WHERE(): TerminalNode | undefined;
    K_LIMIT(): TerminalNode | undefined;
    K_ORDER(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    ordering_term(): Ordering_termContext[];
    ordering_term(i: number): Ordering_termContext;
    K_OFFSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Vacuum_stmtContext extends ParserRuleContext {
    K_VACUUM(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Column_defContext extends ParserRuleContext {
    column_name(): Column_nameContext;
    type_name(): Type_nameContext | undefined;
    column_constraint(): Column_constraintContext[];
    column_constraint(i: number): Column_constraintContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Type_nameContext extends ParserRuleContext {
    name(): NameContext[];
    name(i: number): NameContext;
    signed_number(): Signed_numberContext[];
    signed_number(i: number): Signed_numberContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Column_constraintContext extends ParserRuleContext {
    K_PRIMARY(): TerminalNode | undefined;
    K_KEY(): TerminalNode | undefined;
    conflict_clause(): Conflict_clauseContext | undefined;
    K_NULL(): TerminalNode | undefined;
    K_UNIQUE(): TerminalNode | undefined;
    K_CHECK(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    K_DEFAULT(): TerminalNode | undefined;
    K_COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    foreign_key_clause(): Foreign_key_clauseContext | undefined;
    K_CONSTRAINT(): TerminalNode | undefined;
    name(): NameContext | undefined;
    signed_number(): Signed_numberContext | undefined;
    literal_value(): Literal_valueContext | undefined;
    K_AUTOINCREMENT(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_ASC(): TerminalNode | undefined;
    K_DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Conflict_clauseContext extends ParserRuleContext {
    K_ON(): TerminalNode | undefined;
    K_CONFLICT(): TerminalNode | undefined;
    K_ROLLBACK(): TerminalNode | undefined;
    K_ABORT(): TerminalNode | undefined;
    K_FAIL(): TerminalNode | undefined;
    K_IGNORE(): TerminalNode | undefined;
    K_REPLACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class ExprContext extends ParserRuleContext {
    literal_value(): Literal_valueContext | undefined;
    BIND_PARAMETER(): TerminalNode | undefined;
    column_name(): Column_nameContext | undefined;
    table_name(): Table_nameContext | undefined;
    database_name(): Database_nameContext | undefined;
    unary_operator(): Unary_operatorContext | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_IS(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_IN(): TerminalNode | undefined;
    K_LIKE(): TerminalNode | undefined;
    K_GLOB(): TerminalNode | undefined;
    K_MATCH(): TerminalNode | undefined;
    K_REGEXP(): TerminalNode | undefined;
    K_AND(): TerminalNode | undefined;
    K_OR(): TerminalNode | undefined;
    function_name(): Function_nameContext | undefined;
    K_DISTINCT(): TerminalNode | undefined;
    K_CAST(): TerminalNode | undefined;
    K_AS(): TerminalNode | undefined;
    type_name(): Type_nameContext | undefined;
    K_COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    K_ESCAPE(): TerminalNode | undefined;
    K_ISNULL(): TerminalNode | undefined;
    K_NOTNULL(): TerminalNode | undefined;
    K_NULL(): TerminalNode | undefined;
    K_BETWEEN(): TerminalNode | undefined;
    select_stmt(): Select_stmtContext | undefined;
    K_EXISTS(): TerminalNode | undefined;
    K_CASE(): TerminalNode | undefined;
    K_END(): TerminalNode | undefined;
    K_WHEN(): TerminalNode[];
    K_WHEN(i: number): TerminalNode;
    K_THEN(): TerminalNode[];
    K_THEN(i: number): TerminalNode;
    K_ELSE(): TerminalNode | undefined;
    raise_function(): Raise_functionContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Foreign_key_clauseContext extends ParserRuleContext {
    K_REFERENCES(): TerminalNode;
    foreign_table(): Foreign_tableContext;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    K_DEFERRABLE(): TerminalNode | undefined;
    K_ON(): TerminalNode[];
    K_ON(i: number): TerminalNode;
    K_MATCH(): TerminalNode[];
    K_MATCH(i: number): TerminalNode;
    name(): NameContext[];
    name(i: number): NameContext;
    K_DELETE(): TerminalNode[];
    K_DELETE(i: number): TerminalNode;
    K_UPDATE(): TerminalNode[];
    K_UPDATE(i: number): TerminalNode;
    K_NOT(): TerminalNode | undefined;
    K_INITIALLY(): TerminalNode | undefined;
    K_DEFERRED(): TerminalNode | undefined;
    K_IMMEDIATE(): TerminalNode | undefined;
    K_SET(): TerminalNode[];
    K_SET(i: number): TerminalNode;
    K_NULL(): TerminalNode[];
    K_NULL(i: number): TerminalNode;
    K_DEFAULT(): TerminalNode[];
    K_DEFAULT(i: number): TerminalNode;
    K_CASCADE(): TerminalNode[];
    K_CASCADE(i: number): TerminalNode;
    K_RESTRICT(): TerminalNode[];
    K_RESTRICT(i: number): TerminalNode;
    K_NO(): TerminalNode[];
    K_NO(i: number): TerminalNode;
    K_ACTION(): TerminalNode[];
    K_ACTION(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Raise_functionContext extends ParserRuleContext {
    K_RAISE(): TerminalNode;
    K_IGNORE(): TerminalNode | undefined;
    error_message(): Error_messageContext | undefined;
    K_ROLLBACK(): TerminalNode | undefined;
    K_ABORT(): TerminalNode | undefined;
    K_FAIL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Indexed_columnContext extends ParserRuleContext {
    column_name(): Column_nameContext;
    K_COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    K_ASC(): TerminalNode | undefined;
    K_DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Table_constraintContext extends ParserRuleContext {
    indexed_column(): Indexed_columnContext[];
    indexed_column(i: number): Indexed_columnContext;
    conflict_clause(): Conflict_clauseContext | undefined;
    K_CHECK(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    K_FOREIGN(): TerminalNode | undefined;
    K_KEY(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    foreign_key_clause(): Foreign_key_clauseContext | undefined;
    K_CONSTRAINT(): TerminalNode | undefined;
    name(): NameContext | undefined;
    K_PRIMARY(): TerminalNode | undefined;
    K_UNIQUE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class With_clauseContext extends ParserRuleContext {
    K_WITH(): TerminalNode;
    cte_table_name(): Cte_table_nameContext[];
    cte_table_name(i: number): Cte_table_nameContext;
    K_AS(): TerminalNode[];
    K_AS(i: number): TerminalNode;
    select_stmt(): Select_stmtContext[];
    select_stmt(i: number): Select_stmtContext;
    K_RECURSIVE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Qualified_table_nameContext extends ParserRuleContext {
    table_name(): Table_nameContext;
    database_name(): Database_nameContext | undefined;
    K_INDEXED(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    index_name(): Index_nameContext | undefined;
    K_NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Ordering_termContext extends ParserRuleContext {
    expr(): ExprContext;
    K_COLLATE(): TerminalNode | undefined;
    collation_name(): Collation_nameContext | undefined;
    K_ASC(): TerminalNode | undefined;
    K_DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Pragma_valueContext extends ParserRuleContext {
    signed_number(): Signed_numberContext | undefined;
    name(): NameContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Common_table_expressionContext extends ParserRuleContext {
    table_name(): Table_nameContext;
    K_AS(): TerminalNode;
    select_stmt(): Select_stmtContext;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Result_columnContext extends ParserRuleContext {
    table_name(): Table_nameContext | undefined;
    expr(): ExprContext | undefined;
    column_alias(): Column_aliasContext | undefined;
    K_AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Table_or_subqueryContext extends ParserRuleContext {
    table_name(): Table_nameContext | undefined;
    database_name(): Database_nameContext | undefined;
    table_alias(): Table_aliasContext | undefined;
    K_INDEXED(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    index_name(): Index_nameContext | undefined;
    K_NOT(): TerminalNode | undefined;
    K_AS(): TerminalNode | undefined;
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_clause(): Join_clauseContext | undefined;
    select_stmt(): Select_stmtContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Join_clauseContext extends ParserRuleContext {
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_operator(): Join_operatorContext[];
    join_operator(i: number): Join_operatorContext;
    join_constraint(): Join_constraintContext[];
    join_constraint(i: number): Join_constraintContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Join_operatorContext extends ParserRuleContext {
    K_JOIN(): TerminalNode | undefined;
    K_NATURAL(): TerminalNode | undefined;
    K_LEFT(): TerminalNode | undefined;
    K_INNER(): TerminalNode | undefined;
    K_CROSS(): TerminalNode | undefined;
    K_OUTER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Join_constraintContext extends ParserRuleContext {
    K_ON(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    K_USING(): TerminalNode | undefined;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Select_coreContext extends ParserRuleContext {
    K_SELECT(): TerminalNode | undefined;
    result_column(): Result_columnContext[];
    result_column(i: number): Result_columnContext;
    K_FROM(): TerminalNode | undefined;
    K_WHERE(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    K_GROUP(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    K_DISTINCT(): TerminalNode | undefined;
    K_ALL(): TerminalNode | undefined;
    table_or_subquery(): Table_or_subqueryContext[];
    table_or_subquery(i: number): Table_or_subqueryContext;
    join_clause(): Join_clauseContext | undefined;
    K_HAVING(): TerminalNode | undefined;
    K_VALUES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Compound_operatorContext extends ParserRuleContext {
    K_UNION(): TerminalNode | undefined;
    K_ALL(): TerminalNode | undefined;
    K_INTERSECT(): TerminalNode | undefined;
    K_EXCEPT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Cte_table_nameContext extends ParserRuleContext {
    table_name(): Table_nameContext;
    column_name(): Column_nameContext[];
    column_name(i: number): Column_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Signed_numberContext extends ParserRuleContext {
    NUMERIC_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Literal_valueContext extends ParserRuleContext {
    NUMERIC_LITERAL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    BLOB_LITERAL(): TerminalNode | undefined;
    K_NULL(): TerminalNode | undefined;
    K_CURRENT_TIME(): TerminalNode | undefined;
    K_CURRENT_DATE(): TerminalNode | undefined;
    K_CURRENT_TIMESTAMP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Unary_operatorContext extends ParserRuleContext {
    K_NOT(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Error_messageContext extends ParserRuleContext {
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Module_argumentContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    column_def(): Column_defContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Column_aliasContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class KeywordContext extends ParserRuleContext {
    K_ABORT(): TerminalNode | undefined;
    K_ACTION(): TerminalNode | undefined;
    K_ADD(): TerminalNode | undefined;
    K_AFTER(): TerminalNode | undefined;
    K_ALL(): TerminalNode | undefined;
    K_ALTER(): TerminalNode | undefined;
    K_ANALYZE(): TerminalNode | undefined;
    K_AND(): TerminalNode | undefined;
    K_AS(): TerminalNode | undefined;
    K_ASC(): TerminalNode | undefined;
    K_ATTACH(): TerminalNode | undefined;
    K_AUTOINCREMENT(): TerminalNode | undefined;
    K_BEFORE(): TerminalNode | undefined;
    K_BEGIN(): TerminalNode | undefined;
    K_BETWEEN(): TerminalNode | undefined;
    K_BY(): TerminalNode | undefined;
    K_CASCADE(): TerminalNode | undefined;
    K_CASE(): TerminalNode | undefined;
    K_CAST(): TerminalNode | undefined;
    K_CHECK(): TerminalNode | undefined;
    K_COLLATE(): TerminalNode | undefined;
    K_COLUMN(): TerminalNode | undefined;
    K_COMMIT(): TerminalNode | undefined;
    K_CONFLICT(): TerminalNode | undefined;
    K_CONSTRAINT(): TerminalNode | undefined;
    K_CREATE(): TerminalNode | undefined;
    K_CROSS(): TerminalNode | undefined;
    K_CURRENT_DATE(): TerminalNode | undefined;
    K_CURRENT_TIME(): TerminalNode | undefined;
    K_CURRENT_TIMESTAMP(): TerminalNode | undefined;
    K_DATABASE(): TerminalNode | undefined;
    K_DEFAULT(): TerminalNode | undefined;
    K_DEFERRABLE(): TerminalNode | undefined;
    K_DEFERRED(): TerminalNode | undefined;
    K_DELETE(): TerminalNode | undefined;
    K_DESC(): TerminalNode | undefined;
    K_DETACH(): TerminalNode | undefined;
    K_DISTINCT(): TerminalNode | undefined;
    K_DROP(): TerminalNode | undefined;
    K_EACH(): TerminalNode | undefined;
    K_ELSE(): TerminalNode | undefined;
    K_END(): TerminalNode | undefined;
    K_ESCAPE(): TerminalNode | undefined;
    K_EXCEPT(): TerminalNode | undefined;
    K_EXCLUSIVE(): TerminalNode | undefined;
    K_EXISTS(): TerminalNode | undefined;
    K_EXPLAIN(): TerminalNode | undefined;
    K_FAIL(): TerminalNode | undefined;
    K_FOR(): TerminalNode | undefined;
    K_FOREIGN(): TerminalNode | undefined;
    K_FROM(): TerminalNode | undefined;
    K_FULL(): TerminalNode | undefined;
    K_GLOB(): TerminalNode | undefined;
    K_GROUP(): TerminalNode | undefined;
    K_HAVING(): TerminalNode | undefined;
    K_IF(): TerminalNode | undefined;
    K_IGNORE(): TerminalNode | undefined;
    K_IMMEDIATE(): TerminalNode | undefined;
    K_IN(): TerminalNode | undefined;
    K_INDEX(): TerminalNode | undefined;
    K_INDEXED(): TerminalNode | undefined;
    K_INITIALLY(): TerminalNode | undefined;
    K_INNER(): TerminalNode | undefined;
    K_INSERT(): TerminalNode | undefined;
    K_INSTEAD(): TerminalNode | undefined;
    K_INTERSECT(): TerminalNode | undefined;
    K_INTO(): TerminalNode | undefined;
    K_IS(): TerminalNode | undefined;
    K_ISNULL(): TerminalNode | undefined;
    K_JOIN(): TerminalNode | undefined;
    K_KEY(): TerminalNode | undefined;
    K_LEFT(): TerminalNode | undefined;
    K_LIKE(): TerminalNode | undefined;
    K_LIMIT(): TerminalNode | undefined;
    K_MATCH(): TerminalNode | undefined;
    K_NATURAL(): TerminalNode | undefined;
    K_NO(): TerminalNode | undefined;
    K_NOT(): TerminalNode | undefined;
    K_NOTNULL(): TerminalNode | undefined;
    K_NULL(): TerminalNode | undefined;
    K_OF(): TerminalNode | undefined;
    K_OFFSET(): TerminalNode | undefined;
    K_ON(): TerminalNode | undefined;
    K_OR(): TerminalNode | undefined;
    K_ORDER(): TerminalNode | undefined;
    K_OUTER(): TerminalNode | undefined;
    K_PLAN(): TerminalNode | undefined;
    K_PRAGMA(): TerminalNode | undefined;
    K_PRIMARY(): TerminalNode | undefined;
    K_QUERY(): TerminalNode | undefined;
    K_RAISE(): TerminalNode | undefined;
    K_RECURSIVE(): TerminalNode | undefined;
    K_REFERENCES(): TerminalNode | undefined;
    K_REGEXP(): TerminalNode | undefined;
    K_REINDEX(): TerminalNode | undefined;
    K_RELEASE(): TerminalNode | undefined;
    K_RENAME(): TerminalNode | undefined;
    K_REPLACE(): TerminalNode | undefined;
    K_RESTRICT(): TerminalNode | undefined;
    K_RIGHT(): TerminalNode | undefined;
    K_ROLLBACK(): TerminalNode | undefined;
    K_ROW(): TerminalNode | undefined;
    K_SAVEPOINT(): TerminalNode | undefined;
    K_SELECT(): TerminalNode | undefined;
    K_SET(): TerminalNode | undefined;
    K_TABLE(): TerminalNode | undefined;
    K_TEMP(): TerminalNode | undefined;
    K_TEMPORARY(): TerminalNode | undefined;
    K_THEN(): TerminalNode | undefined;
    K_TO(): TerminalNode | undefined;
    K_TRANSACTION(): TerminalNode | undefined;
    K_TRIGGER(): TerminalNode | undefined;
    K_UNION(): TerminalNode | undefined;
    K_UNIQUE(): TerminalNode | undefined;
    K_UPDATE(): TerminalNode | undefined;
    K_USING(): TerminalNode | undefined;
    K_VACUUM(): TerminalNode | undefined;
    K_VALUES(): TerminalNode | undefined;
    K_VIEW(): TerminalNode | undefined;
    K_VIRTUAL(): TerminalNode | undefined;
    K_WHEN(): TerminalNode | undefined;
    K_WHERE(): TerminalNode | undefined;
    K_WITH(): TerminalNode | undefined;
    K_WITHOUT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class NameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Function_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Database_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Table_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Table_or_index_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class New_table_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Column_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Collation_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Foreign_tableContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Index_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Trigger_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class View_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Module_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Pragma_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Savepoint_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Table_aliasContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Transaction_nameContext extends ParserRuleContext {
    any_name(): Any_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
export declare class Any_nameContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    keyword(): KeywordContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    any_name(): Any_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: heckListener): void;
    exitRule(listener: heckListener): void;
    accept<Result>(visitor: heckVisitor<Result>): Result;
}
