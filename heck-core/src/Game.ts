import * as antlr from "antlr4ts";

export function doStuff(x: number) {
  console.log(antlr.Token.DEFAULT_CHANNEL);
  return x + 5;
}
