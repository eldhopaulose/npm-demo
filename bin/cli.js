#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
    return true;
  } catch (error) {
    console.error(`Failed to run command: ${command}`);
    return false;
  }
};

const repoName = process.argv[2];

if (!repoName) {
  console.error("Please provide a repository name.");
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/eldhopaulose/npm-demo ${repoName}`;

console.log(`Cloning repo ${repoName}...`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  console.error("Failed to clone repository. Exiting...");
  process.exit(1);
}

const installCommand = `cd ${repoName} && npm install`;

console.log(`Installing dependencies...`);

const installed = runCommand(installCommand);

if (!installed) {
  console.error("Failed to install dependencies. Exiting...");
  process.exit(1);
}

console.log("Congrats! You are all set up!");
console.log("Follow the below steps to run the project:");
console.log(`cd ${repoName}`);
console.log("npm start");
