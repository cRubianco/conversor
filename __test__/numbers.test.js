// import React from "react";
// import ReactTestUtils from "react-dom/test-utils";

const hello = require("../index");
const suma = require("../src/sum");

describe("Mi primer test", () => {
  it("Espero que retorne Hola", () => {
    expect(hello.hello()).toMatch("Hola");
  });
});

it("Test suma", () => {
  expect(suma(3, 5)).toBe(8);
});

// it("Exista un uno ",()=>{
//   expect(conversor.metodo_o_procedimiento(1)).toBe("   \n  |\n  |")
// });
