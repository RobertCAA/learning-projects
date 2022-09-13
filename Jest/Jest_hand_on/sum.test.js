const sum = require("./sum");

describe("Example tests", () => {
  it("Adds 1+2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const object = {};
    expect(object).toEqual({});
  });
});

// Evaluates empty string "" as false and any string as true in an if statement. Null, undefined, 0, "": evaluates to false
describe("Truthy or falsey", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    // expect(n).not.toBeTruthy(); // Highly recommended to have just one expect.
    // expect(n).toBeNull();
    // expect(n).not.toBeUndefined();
  });
});

describe("numbers", () => {
  it("2 plus 2", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    // expect(value).toBeGreaterThan(3);
    // expect(value).toBeGreaterThanOrEqual(4);
    // expect(value).toBeLessThan(5);
    // expect(value).toBeLessThanOrEqual(5);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.299999);
  });
});

describe("strings", () => {
  it("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  expect(shoppingList).toContain("milk");
});

function compileAndroid() {
  throw new Error("you are using the wrong JDK");
}

describe("exceptions", () => {
  it("Compiling Android Code", () => {
    expect(() => compileAndroid().toThrow("you are using the wrong JDK")); // Throws an error then same as function and it passes
  });
});

// Is able to compare {} === {} true and [] === [] true
// .toEqual
// Rest of cases
// .toBe
