const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The original sed grabbed from '<div id="root">' down to line 2194
// Let's just fix the unmatched div issue by doing a quick regex or counting divs.
let openCount = 0;
let lines = content.split('\n');
// Or we could just use a tool to format it, wait, we might have dropped the closing divs.
