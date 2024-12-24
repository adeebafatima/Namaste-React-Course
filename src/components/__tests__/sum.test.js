import {sum} from "../sum.js";

test("Sum of two numbers",()=>{

    const result = sum(2,5);

    //Assertion
    expect(result).toBe(7);
})