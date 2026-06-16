const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// There is a missing closing brace before the start of premium-modal-sheet
css = css.replace('animation-delay:.8s;.premium-modal-sheet', 'animation-delay:.8s;}.premium-modal-sheet');

fs.writeFileSync('src/index.css', css);
