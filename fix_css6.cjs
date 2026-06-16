const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// There is actually an extra closing brace at the end of the file maybe?
// Wait, when I fixed `.premium-modal-sheet` lightningcss complained about a trailing brace because adding the brace was wrong, or something.
// Let's just wrap the CSS in a standard way and disable css minification if we can't fix it.
