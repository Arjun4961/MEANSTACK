var fs = require('fs');

fs.writeFile('gopi.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});