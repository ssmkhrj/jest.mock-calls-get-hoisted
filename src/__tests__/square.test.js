const { square } = require("../square");

jest.mock("../multiply", () => {
  console.log("In mocked multiply.js module factory");

  return {
    multiply: jest.fn(),
  };
});

it("works", () => {
  // your test here...
});
