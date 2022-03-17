const { multiply } = require("./multiply");

console.log("In square.js module");

function square(num) {
  return multiply(num, num);
}

module.exports = { square };
