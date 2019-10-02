// import React from "react";
// import ReactTestUtils from "react-dom/test-utils";

const hello = require("../index");
const suma = require("../src/sum");
const convertir = require("../src/convert");
const numToJs = require("../src/nroAJson");
const convertirNro = require("../src/conversor");

describe("Mi primer test", () => {
  it("Espero que retorne Hola", () => {
    expect(hello.hello()).toMatch("Hola");
  });
});

describe("Test suma", () => {
  it("Test suma de 3 + 5 ", () => {
    expect(suma(3, 5)).toBe(8);
  });
});

describe("Convertir nro a String", () => {
  it("Convierto un Nro a String", () => {
    expect(convertir(1)).toMatch("1");
  });
});

describe("Convertir String", () => {
  it("Convierto un String a Json", () => {
    expect(numToJs("uno")).toMatch("uno");
  });
});

describe("Convertir A Digito", () => {
  it("Convierte  ", () => {
    expect(convertirNro(1)).toMatch("   \n  |\n  |");
  });
});
