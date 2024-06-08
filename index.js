// index.js

const {
  generateHackerMessage,
  generateMessages,
  saveMessagesToFile,
} = require("./generateData");
const fs = require("fs");
const process = require("process");

const filename = "data.json";

function readMessagesFromFile() {
  if (!fs.existsSync(filename)) {
    return [];
  }
  const data = fs.readFileSync(filename);
  return JSON.parse(data);
}

function appendMessagesToFile(newMessages) {
  const existingMessages = readMessagesFromFile();
  const allMessages = existingMessages.concat(newMessages);
  saveMessagesToFile(allMessages);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Usage: node index.js <command> [<number>]");
    console.log("Commands:");
    console.log("  one        Create one message");
    console.log("  many <n>   Create many messages");
    return;
  }

  const command = args[0];
  if (command === "one") {
    const message = generateHackerMessage();
    appendMessagesToFile([message]);
    console.log("Created one message");
  } else if (command === "many") {
    const count = parseInt(args[1], 10) || 1;
    const messages = generateMessages(count);
    appendMessagesToFile(messages);
    console.log(`Created ${count} messages`);
  } else {
    console.log("Unknown command");
  }
}

main();
