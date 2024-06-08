// generateData.test.js

const {
  generateHackerMessage,
  generateMessages,
} = require("../hacker-forum/generateData");

test("generateHackerMessage creates a message with the correct fields", () => {
  const message = generateHackerMessage();
  expect(message).toHaveProperty("id");
  expect(message).toHaveProperty("hackerName");
  expect(message).toHaveProperty("messageTitle");
  expect(message).toHaveProperty("messageContent");
  expect(message).toHaveProperty("isResolved");
  expect(message).toHaveProperty("messageResponse");
  expect(message).toHaveProperty("date");
  expect(message).toHaveProperty("numberOfUpvotes");
});

test("generateHackerMessage creates a message with correct data types", () => {
  const message = generateHackerMessage();
  expect(typeof message.id).toBe("string");
  expect(typeof message.hackerName).toBe("string");
  expect(typeof message.messageTitle).toBe("string");
  expect(typeof message.messageContent).toBe("string");
  expect(typeof message.isResolved).toBe("boolean");
  expect(typeof message.messageResponse).toBe("string");
  expect(typeof message.date).toBe("string");
  expect(typeof message.numberOfUpvotes).toBe("number");
});

test("generateMessages creates the correct number of messages", () => {
  const count = 5;
  const messages = generateMessages(count);
  expect(messages.length).toBe(count);
});

test("generateMessages creates messages with unique IDs", () => {
  const count = 10;
  const messages = generateMessages(count);
  const ids = messages.map((msg) => msg.id);
  const uniqueIds = new Set(ids);
  expect(uniqueIds.size).toBe(count);
});

test("generateHackerMessage creates a message with a valid date string", () => {
  const message = generateHackerMessage();
  const date = new Date(message.date);
  expect(date.toString()).not.toBe("Invalid Date");
});

test("generateMessages(0) returns an empty array", () => {
  const messages = generateMessages(0);
  expect(messages.length).toBe(0);
  expect(messages).toEqual([]);
});

test("generateMessages with a large number of messages", () => {
  const count = 1000;
  const messages = generateMessages(count);
  expect(messages.length).toBe(count);
});
