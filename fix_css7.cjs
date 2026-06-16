const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// remove the last 2 characters if they are "}}" or similar. Let's just catch the error position.
// It fails at 81424 which is near the end. Let's see the end.
console.log(css.substring(css.length - 200));
