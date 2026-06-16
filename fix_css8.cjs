const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace('.verdict-content-panel{max-width:470px!important}}', '.verdict-content-panel{max-width:470px!important}');

fs.writeFileSync('src/index.css', css);
