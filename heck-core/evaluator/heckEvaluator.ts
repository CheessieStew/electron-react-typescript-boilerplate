//import * as antlr from "antlr4";

//import * as heckLexer from './antlr/heckLexer';
//import * as heckParser from './antlr/heckParser';
//import * as heckVisitor from './antlr/heckVisitor';
var antlr = require('antlr4');
var heckLexer = require('./antlr/heckLexer');
var heckParser = require('./antlr/heckParser');
var heckVisitor = require('./antlr/heckVisitor.js');
 
export class heckEvaluator {
    public evaluate(s:string):string{
        const inputStream = new antlr.InputStream(s);
        const lexer = new heckLexer.heckLexer(inputStream);
        const commonTokenStream = new antlr.CommonTokenStream(lexer);
        const parser = new heckParser.heckParser(commonTokenStream);
        const visitor = new heckVisitorSimple();
        const parseTree = parser.parse();

        return visitor.visitParse(parseTree);
        }
}

class heckVisitorSimple extends heckVisitor.heckVisitor {
    public visitParse(ctx : string) : string{
        try {
            return `${this.visitChildren(ctx)}12`;
          }
          catch(error) {
            console.error(error);
            // expected output: SyntaxError: unterminated string literal
            // Note - error messages will vary depending on browser
          }
          
        return '';  
        
    }
}