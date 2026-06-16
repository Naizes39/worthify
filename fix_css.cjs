const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace('.precheckout-price-card{animation:precheckout-price-glow 2.8s ease-in-out infinite;animation-delay:.8s;.premium-modal-sheet:before', '.precheckout-price-card{animation:precheckout-price-glow 2.8s ease-in-out infinite;animation-delay:.8s;}.premium-modal-sheet:before');
fs.writeFileSync('src/index.css', css);
