console.log("In multiply.js module");

function multiply(...nums) {
  return nums.reduce((product, num) => product * num, 1);
}

module.exports = { multiply };
