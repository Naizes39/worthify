const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/ariaLabel/g, '"aria-label"');
content = content.replace(/ariaHidden/g, '"aria-hidden"');
content = content.replace(/ariaLive/g, '"aria-live"');
content = content.replace(/ariaRelevant/g, '"aria-relevant"');
content = content.replace(/ariaAtomic/g, '"aria-atomic"');
content = content.replace(/clipPath/g, 'clipPath');

fs.writeFileSync('src/App.tsx', content);
