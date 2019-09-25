import React from "react";
// import ReactTestUtils from "react-dom/test-utils";
import { shallow } from "enzyme";

import hello from "../index";

describe("hello", () => {
  describe("#hello()", function() {
    it("Debería devolver Hola", function() {
      const component = shallow(<hello debug />);
      assert.equal(conver.hello(), "Hola");
    });
  });
});

describe("Teste de numeros", () => {
  it("Adding 1 + 1 equals 2", () => {
    expect(1 + 1).toBe(2);
  });
});

// it("Exista un uno ",()=>{
//   expect(conversor.metodo_o_procedimiento(1)).toBe("   \n  |\n  |")
// });
