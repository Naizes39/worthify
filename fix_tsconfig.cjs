const fs = require('fs');
let config = JSON.parse(fs.readFileSync('tsconfig.app.json', 'utf8'));
config.compilerOptions.allowJs = true;
fs.writeFileSync('tsconfig.app.json', JSON.stringify(config, null, 2));

let main = fs.readFileSync('src/main.tsx', 'utf8');
main = main.replace('App.tsx', 'App.jsx');
fs.writeFileSync('src/main.tsx', main);
