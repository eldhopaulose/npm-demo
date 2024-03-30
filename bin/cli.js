#!/usr/bin/env node

const { execSync } = require("child_process");
const runComand = (comand) => {
  try {
    execSync(`${comand}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to run comand: ${comand}`);
    // process.exit(1);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitChekoutComand = `git clone --depth 1 https://github.com/eldhopaulose/npm-demo ${repoName}`;

console.log(`Cloneing repo ${repoName}...`);

const checkedOut = runComand(gitChekoutComand);

if (checkedOut) process.exit(-1);

const installComand = `cd ${repoName} && npm install `;

console.log(`Installing dependencies...`);

const installed = runComand(installComand);

if (installed) process.exit(-1);

console.log(
  `Congrats! You are all set up! Follow the below steps to run the project:`
);
console.log(`cd ${repoName}`);
console.log(`npm start || yarn start`);
