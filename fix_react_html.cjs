const fs = require('fs');

let html = fs.readFileSync('src/App.tsx.raw', 'utf8');

// Basic replacements for React
html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/crossorigin=/g, 'crossOrigin=');
html = html.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
html = html.replace(/xlink:href=/g, 'xlinkHref=');
html = html.replace(/stroke-width=/g, 'strokeWidth=');
html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
html = html.replace(/fill-rule=/g, 'fillRule=');
html = html.replace(/clip-rule=/g, 'clipRule=');
html = html.replace(/clip-path=/g, 'clipPath=');
html = html.replace(/aria-hidden=/g, 'ariaHidden=');
html = html.replace(/aria-label=/g, 'ariaLabel=');
html = html.replace(/aria-live=/g, 'ariaLive=');
html = html.replace(/aria-relevant=/g, 'ariaRelevant=');
html = html.replace(/aria-atomic=/g, 'ariaAtomic=');
html = html.replace(/tabindex=/g, 'tabIndex=');
html = html.replace(/autocomplete=/g, 'autoComplete=');
html = html.replace(/autocorrect=/g, 'autoCorrect=');
html = html.replace(/autocapitalize=/g, 'autoCapitalize=');
html = html.replace(/spellcheck=/g, 'spellCheck=');
html = html.replace(/maxlength=/g, 'maxLength=');

// Fix style attributes
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim() !== '');
  const styleObj = {};
  styles.forEach(s => {
    let [key, ...valParts] = s.split(':');
    if (!key || valParts.length === 0) return;
    key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    styleObj[key] = valParts.join(':').trim().replace(/&quot;/g, "'");
  });
  return `style={${JSON.stringify(styleObj)}}`;
});

// Self-closing tags
html = html.replace(/<img([^>]*)>/g, (m, p1) => {
  if (p1.endsWith('/')) return m;
  return `<img${p1} />`;
});
html = html.replace(/<input([^>]*)>/g, (m, p1) => {
  if (p1.endsWith('/')) return m;
  return `<input${p1} />`;
});
html = html.replace(/<hr([^>]*)>/g, (m, p1) => {
  if (p1.endsWith('/')) return m;
  return `<hr${p1} />`;
});
html = html.replace(/<br([^>]*)>/g, (m, p1) => {
  if (p1.endsWith('/')) return m;
  return `<br${p1} />`;
});
html = html.replace(/<path([^>]*)>/g, (m, p1) => {
  if (p1.endsWith('/')) return m;
  return `<path${p1} />`;
});

const tsxContent = `import React from 'react';

export default function App() {
  return (
    <>
      ${html}
    </>
  );
}
`;

fs.writeFileSync('src/App.tsx', tsxContent);
