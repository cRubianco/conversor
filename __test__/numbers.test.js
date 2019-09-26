// import React from "react";
// import ReactTestUtils from "react-dom/test-utils";

const hello = require("../index");
const suma = require("../src/sum");
const convertir = require("../src/convert");

describe("Mi primer test", () => {
  it("Espero que retorne Hola", () => {
    expect(hello.hello()).toMatch("Hola");
  });
});

describe("Test suma", () => {
  it("Test suma", () => {
    expect(suma(3, 5)).toBe(8);
  });
});

describe("Convertir nro a STring", () => {
  it("Convierto a Nro a String", () => {
    expect(convertir(1)).toMatchSnapshot("uno");
  });
});

// it("Exista un uno ",()=>{
//   expect(conversor.metodo_o_procedimiento(1)).toBe("   \n  |\n  |")
// });
