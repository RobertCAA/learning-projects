const fetchData = require("./async");

// describe("Async functions", () => {
//   it("Should return correct data", () => {
//     const todo = fetchData(1).then((todo) => {
//       expect(todo.id).toBe(1);
//     });
//   });
// });

describe("Async functions", () => {
  it("Should return correct data", async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
  });
});
