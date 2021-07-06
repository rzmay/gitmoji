const generate = require('../src/index');

(async () => {
  const test = await generate('Robert is a horse');
  console.log(test);
})();
