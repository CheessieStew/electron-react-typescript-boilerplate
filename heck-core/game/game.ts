import { heckEvaluator } from "../index";

export function doStuff(x: string) {
    return `.${x}...`;
    const evaluator = new heckEvaluator();

    return evaluator.evaluate(`=${x}=`);
}
