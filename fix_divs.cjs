const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// remove one extra </div> from the end of App.tsx
let lines = content.split('\n');
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('</div>')) {
    lines[i] = lines[i].replace('</div>', '');
    break;
  }
}

fs.writeFileSync('src/App.tsx', lines.join('\n'));
