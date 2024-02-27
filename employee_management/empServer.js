const http = require("http")
const url = require("url")
let nextId = 1;
const signUpData = [];
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST,PUT,DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.writeHead(200)
    res.end()
    return
  }
  const reqUrl = url.parse(req.url, true);
  const path = reqUrl.pathname;
  //Routing
  if (path === "/signup") {
    handleSignup(req, res)
  } else if (path === "/userlogin") {
    handleLogin(req, res)
  } else if (path === "/getdata") {
    handleGetEmployees(req, res)
  } else if (path === "/editUser") {
    handleUpdateUser(req, res)
  } else if (path.startsWith("/deleteUser/")) {
    handleDeleteUser(req, res)
  } 
  // else if (path==="/getEmployee/") {
  //   getEmployee(req, res)
  // }
  else {
    res.statusCode = 404
    res.setHeader("Content-Type", "text/plain")
    res.end("routing error part...\n")
    // res.end(JSON.stringify({ error: "Route not found" }));
  }
})

function handleSignup(req, res) {
  if (req.method === "POST" && req.url === "/signup") {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk
    })
    req.on("end", () => {
      const data = JSON.parse(body)
      data.id = nextId++;
      const existingUser = signUpData.find((user) => user.email === data.email)
      if (existingUser) {
        res.writeHead(400, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Email already exists" }))
        return
      }
      signUpData.push(data)
      console.log("signUpData::::::::::::::", signUpData),
        console.log("Form data received:::::::", data)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(
        JSON.stringify({ success: true, message: "Successfully logged in" })
      )
    })
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("404 Not Found")
  }
}

function handleLogin(req, res) {
  if (req.method === "POST" && req.url === "/userlogin") {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk
    })
    req.on("end", () => {
      const loginData = JSON.parse(body)
      const user = signUpData.find(
        (u) => u.email === loginData.email && u.password === loginData.password
      )
      if (user) {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(
          JSON.stringify({ success: true, message: "Login successful", user })
        )
      } else {
        res.writeHead(401, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Invalid user or Invalid email or password!" }))
      }
    })
  } else {
    res.writeHead(405, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: "Method Not Allowed" }))
  }
}

function handleUpdateUser(req, res) {
  if (req.method === 'PUT' && req.url === "/editUser") {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const updateData = JSON.parse(body);
      console.log("updateData:::", updateData)
      const userIndex = signUpData.findIndex(user => user.id === updateData.id);
      console.log("userIndex:::::", userIndex)
      if (userIndex !== -1) {
        signUpData[userIndex] = updateData;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'User details successfully updated', user: signUpData[userIndex] }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'User not found' }));
      }
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
}

function handleDeleteUser(req, res) {
  if (req.method === 'DELETE' && req.url.startsWith("/deleteUser/")) {
    const userId = parseInt(req.url.split("/")[2]); // Extract user id from URL
    const userIndex = signUpData.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
      signUpData.splice(userIndex, 1);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'User successfully deleted' }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'User not found' }));
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
}

// function handleDeleteUser(req, res) {
//   if (req.method === 'DELETE' && req.url === "/deleteUser/:id") {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       const deleteData = JSON.parse(body);
//       console.log("deleteData:::", deleteData)
//       const userIndex = signUpData.findIndex(user => user.id === deleteData.id);
//       console.log("userIndex:::::", userIndex)
//       if (userIndex !== -1) {
//         signUpData.splice(userIndex, 1);
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ success: true, message: 'User deleted successfully', user: signUpData[userIndex] }));
//       } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'User not found' }));
//       }
//     });
//   } else {
//     res.writeHead(405, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: 'Method Not Allowed' }));
//   }
// }

function handleGetEmployees(req, res) {
  if (req.method === "GET" && req.url === "/getdata") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(signUpData))
  } else {
    res.writeHead(405, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: "Method Not Allowed" }))
  }
}

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})