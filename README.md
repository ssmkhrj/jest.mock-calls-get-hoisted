This repository uses an easily comprehendible example to highlight the fact that `jest.mock` calls are hoisted.

# Understanding the Setup

There are two modules in this repo, `square.js` and `multiply.js`, and each of them export a single function, `square` and `multiply` respectively.

The `square` function depends on the `multiply` function, exported
from the `multiply.js` module.

In our test for the `square` function, we've mocked the `multiply` module using `jest.mock`.

# Visualizing Hoisting

Let's look at the first few lines of code in our test file.

```js
const { square } = require("../square");

jest.mock("../multiply", () => {
  // ...
});
```

You might be wondering how does the mocking actually work here, because by the time we call `jest.mock`, the `require` statement on the top would've already imported the actual/real implementation for `multiply`.

The answer is really simply, `jest.mock` calls get hoisted, so the mocking happens first and then when the `require` statements run they get the mocked implementation.

And this is quite evident if you notice the module level logs, the **"In mocked multiply.js module factory"** log prints before the **"In square.js module"** log, which confirms that the mocking happens first.

## Hoisting with Auto Mocking

You can also see hoisting happening when using Jest's auto mocking functionality. So, if you remove the module factory provided to `jest.mock` in your test (as shown below) and run the test, you would notice that the log from the `multiply.js` module prints before the log from the `square.js` module.

The only difference here is that jest needs to look through the actual `mutiply.js` module in order to provide mock implementations for all the exports from the module.

```js
const { square } = require("../square");

// Removed the module factory argument
jest.mock("../multiply");

it("works", () => {
  // your test here...
});
```
