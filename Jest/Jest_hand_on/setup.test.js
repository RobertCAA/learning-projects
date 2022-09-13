let animals = ["elephant", "zebra", "bear", "tiger"];

// beforeAll(() => {}) // Also putting in inside describe block will have more control effect on the tests.

beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
});

// afterEach(() => {
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

// afterAll(() => {})

describe("Animals array", () => {
  it("Should animals to end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("Should animals to beggining of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("Should have initial lenght of 4", () => {
    expect(animals.length).toBe(4); // It fails because the tests manipulated the array. Fixed with beforeEach method
  });
});

describe("Testing something else (other array)", () => {
  it.only("true should be truthy", () => {
    // Only just to show that it will skipped rest
    expect(true).toBeTruthy();
  });
});
