import { heckEvaluator } from "../index";

export function doStuff(x: string) {
    const evaluator = new heckEvaluator();

    return evaluator.evaluate(`=${x}=`);
}
