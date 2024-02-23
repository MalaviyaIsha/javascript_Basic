const http = require('http');
const signUpData = [];

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Use GET or POST method only...\n');
  }

});

// function handleGetRequest(req, res) {
//   if (req.method === 'POST' && req.url === '/loginn') {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk;
//     });

//     req.on('end', () => {
//       const loginData = JSON.parse(body);
//       console.log("loginData", loginData)
//       // Find user in signUpData array based on email and password
//       const user = signUpData.find(u => u.email === loginData.email && u.password === loginData.password);

//       if (user) {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ success: true, message: "Login successful" }));
//       } else {
//         res.writeHead(401, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ success: false, message: "Invalid email or password" }));
//       }
//     });
//   }
 
// }

function handlePostRequest(req, res) {
  if (req.method === 'POST' && req.url === '/signup') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const data = JSON.parse(body);
      signUpData.push(data);
      console.log('Form data received:', data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: "Successfully logged in" }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

}

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
