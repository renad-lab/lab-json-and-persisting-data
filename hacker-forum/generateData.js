// generateData.js

const { faker } = require("@faker-js/faker");
const fs = require("fs");

function generateHackerMessage() {
  return {
    id: faker.datatype.uuid(),
    hackerName: `${faker.hacker.adjective()} ${faker.science.chemicalElement()} ${faker.animal.type()}`,
    messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,
    messageContent: faker.lorem.paragraph(),
    isResolved: faker.datatype.boolean(),
    messageResponse: faker.hacker.phrase(),
    date: faker.date.recent().toISOString(),
    numberOfUpvotes: faker.datatype.number({ min: 0, max: 1000 }),
  };
}

function generateMessages(count) {
  const messages = [];
  for (let i = 0; i < count; i++) {
    messages.push(generateHackerMessage());
  }
  return messages;
}

function saveMessagesToFile(messages, filename = "data.json") {
  const data = JSON.stringify(messages, null, 2);
  fs.writeFileSync(filename, data);
}

module.exports = {
  generateHackerMessage,
  generateMessages,
  saveMessagesToFile,
};
