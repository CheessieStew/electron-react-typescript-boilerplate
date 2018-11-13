import * as antlr from "antlr4";

const heckLexer = require('./antlr/heckLexer');
const heckParser = require('./antlr/heckParser');
const heckVisitor = require('./antlr/heckVisitor');

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

}