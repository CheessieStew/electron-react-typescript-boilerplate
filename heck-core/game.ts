import {heckParser} from "./Evaluator/heckParser"
import { heckLexer } from "./Evaluator/heckLexer";
export function doStuff(x: number) {
  import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

  // Create the lexer and parser
  let inputStream = new ANTLRInputStream("text");
  let lexer = new heckLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new heckParser(tokenStream);
  
  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let result = parser.parse(); 
  console.log(result);
   return x + 5;
}
