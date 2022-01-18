const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    else if (req.url === '/about') {
        res.end('Welcome to our About page');
    }
    else {
        res.end(`
        <h1>OOPS!</h1>
        <p>We can't find the page that you are looking for.</p>
        <a href="/">Back home</a>
    `);
    }

})
server.listen(5000);

