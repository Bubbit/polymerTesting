const wct = require('web-component-tester');

wct.cli.run(process.env, [], process.stdout).then(() => {
  console.log('end');
});