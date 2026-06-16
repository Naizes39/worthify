const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The original HTML had self closing tags that got messed up. Let's use a simpler approach.
// I will just use vite without TS strictness for App.tsx. I will rename it to App.jsx.
fs.renameSync('src/App.tsx', 'src/App.jsx');
