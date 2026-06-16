const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// There's an extra comma because of sed replacement:
content = content.replace(/opacity: "1",\s*,/g, 'opacity: "1"');
content = content.replace(/opacity: "1"\s*,/g, 'opacity: "1",');

fs.writeFileSync('src/App.jsx', content);
