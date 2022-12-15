import validity from "../js/app";

test("Test 1", () => {
  const received = validity("8 (927) 000-00-00");
  expect(received).toBe("+79270000000");
});

test("Test 2", () => {
  const received = validity("+7 960 000 00 00");
  expect(received).toBe("+79600000000");
});

test("Test 3", () => {
  const received = validity("+86 000 000 0000");
  expect(received).toBe("+860000000000");
});

