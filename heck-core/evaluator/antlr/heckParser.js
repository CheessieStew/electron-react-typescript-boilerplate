// Generated from ./evaluator/heck.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var heckListener = require('./heckListener').heckListener;
var heckVisitor = require('./heckVisitor').heckVisitor;

var grammarFileName = "heck.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003 /\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0007\u0002",
    "\b\n\u0002\f\u0002\u000e\u0002\u000b\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0007\u0003\u0010\n\u0003\f\u0003\u000e\u0003\u0013\u000b",
    "\u0003\u0003\u0003\u0006\u0003\u0016\n\u0003\r\u0003\u000e\u0003\u0017",
    "\u0003\u0003\u0006\u0003\u001b\n\u0003\r\u0003\u000e\u0003\u001c\u0003",
    "\u0003\u0006\u0003 \n\u0003\r\u0003\u000e\u0003!\u0007\u0003$\n\u0003",
    "\f\u0003\u000e\u0003\'\u000b\u0003\u0003\u0003\u0007\u0003*\n\u0003",
    "\f\u0003\u000e\u0003-\u000b\u0003\u0003\u0003\u0002\u0002\u0004\u0002",
    "\u0004\u0002\u0002\u00023\u0002\t\u0003\u0002\u0002\u0002\u0004\u0011",
    "\u0003\u0002\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\u0006",
    "\u0003\u0002\u0002\u0002\b\u000b\u0003\u0002\u0002\u0002\t\u0007\u0003",
    "\u0002\u0002\u0002\t\n\u0003\u0002\u0002\u0002\n\f\u0003\u0002\u0002",
    "\u0002\u000b\t\u0003\u0002\u0002\u0002\f\r\u0007\u0002\u0002\u0003\r",
    "\u0003\u0003\u0002\u0002\u0002\u000e\u0010\u0007\u0004\u0002\u0002\u000f",
    "\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011",
    "\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012",
    "\u0015\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014",
    "\u0016\u0007\u0003\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0003\u0002\u0002\u0002\u0018%\u0003\u0002\u0002\u0002\u0019",
    "\u001b\u0007\u0004\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0003\u0002\u0002\u0002\u001d\u001f\u0003\u0002\u0002\u0002\u001e",
    " \u0007\u0003\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 !\u0003",
    "\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002",
    "\u0002\"$\u0003\u0002\u0002\u0002#\u001a\u0003\u0002\u0002\u0002$\'",
    "\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002",
    "\u0002&+\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002(*\u0007",
    "\u0004\u0002\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002",
    "+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\u0005\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002\t\t\u0011\u0017\u001c!%+"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "';'", "'.'", "'('", "')'", "','", "'='", 
                     "'*'", "'+'", "'-'", "'~'", "'||'", "'/'", "'%'", "'<<'", 
                     "'>>'", "'&'", "'|'", "'<'", "'<='", "'>'", "'>='", 
                     "'=='", "'!='", "'<>'" ];

var symbolicNames = [ null, "LETTER", "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", 
                      "COMMA", "ASSIGN", "STAR", "PLUS", "MINUS", "TILDE", 
                      "PIPE2", "DIV", "MOD", "LT2", "GT2", "AMP", "PIPE", 
                      "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", "NOT_EQ2", 
                      "IDENTIFIER", "NUMERIC_LITERAL", "SINGLE_LINE_COMMENT", 
                      "MULTILINE_COMMENT", "SPACES" ];

var ruleNames =  [ "parse", "sql_stmt_list" ];

function heckParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

heckParser.prototype = Object.create(antlr4.Parser.prototype);
heckParser.prototype.constructor = heckParser;

Object.defineProperty(heckParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

heckParser.EOF = antlr4.Token.EOF;
heckParser.LETTER = 1;
heckParser.SCOL = 2;
heckParser.DOT = 3;
heckParser.OPEN_PAR = 4;
heckParser.CLOSE_PAR = 5;
heckParser.COMMA = 6;
heckParser.ASSIGN = 7;
heckParser.STAR = 8;
heckParser.PLUS = 9;
heckParser.MINUS = 10;
heckParser.TILDE = 11;
heckParser.PIPE2 = 12;
heckParser.DIV = 13;
heckParser.MOD = 14;
heckParser.LT2 = 15;
heckParser.GT2 = 16;
heckParser.AMP = 17;
heckParser.PIPE = 18;
heckParser.LT = 19;
heckParser.LT_EQ = 20;
heckParser.GT = 21;
heckParser.GT_EQ = 22;
heckParser.EQ = 23;
heckParser.NOT_EQ1 = 24;
heckParser.NOT_EQ2 = 25;
heckParser.IDENTIFIER = 26;
heckParser.NUMERIC_LITERAL = 27;
heckParser.SINGLE_LINE_COMMENT = 28;
heckParser.MULTILINE_COMMENT = 29;
heckParser.SPACES = 30;

heckParser.RULE_parse = 0;
heckParser.RULE_sql_stmt_list = 1;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = heckParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.EOF = function() {
    return this.getToken(heckParser.EOF, 0);
};

ParseContext.prototype.sql_stmt_list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Sql_stmt_listContext);
    } else {
        return this.getTypedRuleContext(Sql_stmt_listContext,i);
    }
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof heckListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof heckListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof heckVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




heckParser.ParseContext = ParseContext;

heckParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, heckParser.RULE_parse);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===heckParser.LETTER || _la===heckParser.SCOL) {
            this.state = 4;
            this.sql_stmt_list();
            this.state = 9;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 10;
        this.match(heckParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sql_stmt_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = heckParser.RULE_sql_stmt_list;
    return this;
}

Sql_stmt_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sql_stmt_listContext.prototype.constructor = Sql_stmt_listContext;

Sql_stmt_listContext.prototype.LETTER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(heckParser.LETTER);
    } else {
        return this.getToken(heckParser.LETTER, i);
    }
};


Sql_stmt_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof heckListener ) {
        listener.enterSql_stmt_list(this);
	}
};

Sql_stmt_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof heckListener ) {
        listener.exitSql_stmt_list(this);
	}
};

Sql_stmt_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof heckVisitor ) {
        return visitor.visitSql_stmt_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




heckParser.Sql_stmt_listContext = Sql_stmt_listContext;

heckParser.prototype.sql_stmt_list = function() {

    var localctx = new Sql_stmt_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, heckParser.RULE_sql_stmt_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===heckParser.SCOL) {
            this.state = 12;
            this.match(heckParser.SCOL);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 19; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 18;
        		this.match(heckParser.LETTER);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 21; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 35;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 24; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 23;
                    this.match(heckParser.SCOL);
                    this.state = 26; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===heckParser.SCOL);
                this.state = 29; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 28;
                		this.match(heckParser.LETTER);
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 31; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
            }
            this.state = 37;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

        this.state = 41;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 38;
                this.match(heckParser.SCOL); 
            }
            this.state = 43;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.heckParser = heckParser;
