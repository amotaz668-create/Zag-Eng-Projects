const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(__dirname + "/page.html", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        });
    }
    else if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
            JSON.stringify({
            name: "Moataz",
            field: "Computer Science",
            goal: "Become a backend developer",
            message: "Keep going, you're doing great",
            }),
        );
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                    <title>404 Not Found</title>
                </head>
                <body>
                    <h1 style="text-align: center;">404 Not Found</h1>
                </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
