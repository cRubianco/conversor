// import React from "react";
// import ReactTestUtils from "react-dom/test-utils";
// import { shallow } from "enzyme";

import suma from "../src/sum";

// describe("hello", () => {
//   describe("#hello()", function() {
//     it("Debería devolver Hola", function() {
//       const component = shallow(<hello debug />);
//       assert.equal(conver.hello(), "Hola");
//     });
//   });
// });

test("Test suma", () => {
  expect(suma(3, 5)).toBe(8);
});

// it("Exista un uno ",()=>{
//   expect(conversor.metodo_o_procedimiento(1)).toBe("   \n  |\n  |")
// });
