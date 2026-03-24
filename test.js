const greet = require('./index.js');

if (greet("World") === "Hello, World!") {
  console.log("Test Passed");
  process.exit(0);
} else {
  console.log("Test Failed");
  process.exit(1);
}