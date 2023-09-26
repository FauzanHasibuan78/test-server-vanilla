// inport node modules dari builtin module node.js
const http = require('http');
const PORT = 3000;



const server = http.createServer((request, 
    response) => {
        // bikin rute untuk url "/" dengan method "GET"
        if (request.url === "/" && request.method === "GET") {
            response.write("ini adalah homepage");
            response.end();
        }

        // bikin rute untuk url "/me" dengna method "GET"
        if (request.url === "/me" && request.method === "GET") {
            response.end("ini adalah halaman me");
            // response.end();
        }
    })

server.listen(PORT, () => {
    console.log('server sedang berjalan pada url dan port http://localhost:${PORT}')
})