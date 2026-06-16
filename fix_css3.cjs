const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Replace newlines within selectors
css = css.replace(/\.bg-\[radial-gradient\([^)]*\)/g, (match) => {
    return match.replace(/\s+/g, '');
});

fs.writeFileSync('src/index.css', css);
