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

describe("Convertir A Digito el 1", () => {
  it("Convierte  ", () => {
    expect(convertirNro(1)).toMatch("   \n  |\n  |");
  });
  console.log(convertirNro(1));
});

describe("Convertir A Digito el 2", () => {
  it("Convierte Nro 2 ", () => {
    expect(convertirNro(2)).toMatch(" _ \n _|\n|_ ");
  });
  console.log(convertirNro(2));
});

describe("Convertir A Digito el 3", () => {
  it("Convierte Nro 3 ", () => {
    expect(convertirNro(3)).toMatch(" _ \n _|\n _|");
  });
  console.log(convertirNro(3));
});

describe("Convertir A Digito el 4", () => {
  it("Convierte Nro 4 ", () => {
    expect(convertirNro(4)).toMatch("   \n|_|\n  |");
  });
  console.log(convertirNro(4));
});
describe("Convertir A Digito el 5", () => {
  it("Convierte el 5 ", () => {
    expect(convertirNro(5)).toMatch(" _ \n|_ \n _|");
  });
  console.log(convertirNro(5));
});

describe("Convertir A Digito el 6", () => {
  it("Convierte Nro 6 ", () => {
    expect(convertirNro(6)).toMatch(" _ \n|_ \n|_|");
  });
  console.log(convertirNro(6));
});

describe("Convertir A Digito el 7", () => {
  it("Convierte Nro 7 ", () => {
    expect(convertirNro(7)).toMatch(" _ \n  |\n  |\n");
  });
  console.log(convertirNro(7));
});

describe("Convertir A Digito el 8", () => {
  it("Convierte Nro 8 ", () => {
    expect(convertirNro(8)).toMatch(" _ \n|_|\n|_|");
  });
  console.log(convertirNro(8));
});
describe("Convertir A Digito el 9", () => {
  it("Convierte Nro 9 ", () => {
    expect(convertirNro(9)).toMatch(" _ \n|_|\n _|");
  });
  console.log(convertirNro(9));
});

describe("Convertir A Digito el 0", () => {
  it("Convierte Nro 0 ", () => {
    expect(convertirNro(0)).toMatch(" _ \n| |\n|_|");
  });
  console.log(convertirNro(0));
});
