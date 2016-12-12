import test from "tape";
import tool from "../src/tool"

console.log(process.env.BABEL_ENV);

test('test', (t) => {

    t.equal(14, tool(5,9))
    t.end();
})