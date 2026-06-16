const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');

index = index.replace('<head>', `<head>
    <meta name="description" content="Check any UK car's MOT history instantly. Get AI-powered risk analysis, real registry data (write-off, theft, finance, mileage), and a buy / caution / avoid verdict before you commit."/>
    <meta name="keywords" content="UK MOT history check, car history check UK, vehicle data check, write-off check, HPI alternative, car finance check, car theft check, car valuation UK, used car checker, Worthify"/>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1"/>
    <link rel="canonical" href="https://worthify.co.uk/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Worthify"/>
    <meta property="og:title" content="Worthify — UK car MOT history &amp; risk check"/>
    <meta property="og:description" content="Check any UK car's real risk in 30 seconds. Spot hidden issues, repair costs, and your negotiation lever before you buy."/>
    <meta property="og:image" content="https://worthify.co.uk/og-default.png"/>
    <meta property="og:url" content="https://worthify.co.uk"/>
    <meta property="og:locale" content="en_GB"/>
    <meta property="og:locale:alternate" content="pl_PL"/>
    <meta property="og:locale:alternate" content="de_DE"/>
    <meta property="og:locale:alternate" content="fr_FR"/>
    <meta property="og:locale:alternate" content="es_ES"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Worthify — UK car MOT history &amp; risk check"/>
    <meta name="twitter:description" content="Check any UK car's real risk in 30 seconds."/>
    <meta name="twitter:image" content="https://worthify.co.uk/og-default.png"/>
`);

fs.writeFileSync('index.html', index);
