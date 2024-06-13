const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Jassim S. Mohammed Salim Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h1>Home Page</h1>');

        //method post for create user method
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Create User</button>');
        res.write('</form>');



        res.write('</body>');
        res.write('</html>');
        return res.end();
    }


    //static data for path users dummy
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<h1>List of Users</h1>');
        res.write('<ul>');
        res.write('<li>Dummy 1</li>');
        res.write('<li>Dummy 2</li>');
        res.write('<li>Dummy 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }


    //Listener for the form
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log('Username:', username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(3000);
