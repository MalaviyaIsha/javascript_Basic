const http = require('http');
const port = 3000;

let employeeDetails = [
  { id: 1, name: 'Max', position: 'Software Engineer' },
  { id: 2, name: 'Sofy', position: 'Designer' },
  { id: 3, name: 'John', position: 'Frontend Developer' }
];

const server = http.createServer((req, res) => {
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

function handleGetRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const idParam = url.searchParams.get('id');

  if (idParam) {
    const employee = employeeDetails.find(emp => emp.id === parseInt(idParam));
    if (employee) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(employee));
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Employee not found\n');
    }
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(employeeDetails));
  }
}

function handlePostRequest(req, res) {
  let body = '';

  //store new data
  req.on('data', newData => {
    body += newData.toString();
  });

  req.on('end', () => {
    try {
      const newEmployee = JSON.parse(body);

      if (newEmployee && typeof newEmployee === 'object') {
        const expectedFields = ['id', 'name', 'position'];
        const hasExtraFields = Object.keys(newEmployee).some(field => !expectedFields.includes(field));

        if (hasExtraFields) {
          res.statusCode = 400; // 400 Bad Request
          res.setHeader('Content-Type', 'text/plain');
          res.end('Invalid Only id, name, and position fields are allowed...\n');
        }
        else {
          const idExists = employeeDetails.some(emp => emp.id === newEmployee.id);

          if (idExists) {
            res.statusCode = 400; // 400 Bad Request
            res.setHeader('Content-Type', 'text/plain');
            res.end('Employee with the provided ID already exists...\n');
          }
          else {
            employeeDetails.push(newEmployee);
            employeeDetails.sort((a, b) => a.id - b.id)
            res.statusCode = 201; //created
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(newEmployee));
          }
        }
        // newEmployee.id = employeeDetails.length + 1;
      } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid employee data\n');
      }
    } catch (error) {
      res.statusCode = 500; //Server error
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error processing the request\n');
    }
  });
}

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});



//data fetch with id:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const http = require('http');
// const port = 3000;

// const employeeDetails = [
//   { id: 1, name: 'Max', position: 'Software Engineer' },
//   { id: 2, name: 'Sofy', position: 'Designer' },
//   { id: 3, name: 'John', position: 'Frontend Developer' }
// ];

// const employeeData = JSON.stringify(employeeDetails);

// const server = http.createServer((req, res) => {

//   if (req.method === 'GET') {
//     const url = new URL(req.url, `http://${req.headers.host}`);
//     const idParam = url.searchParams.get('id');
//     // console.log("idParam::", idParam);
//     // console.log("idParam::", parseInt(idParam));
//     if (idParam) {
//       const employee = employeeDetails.find(emp => emp.id === parseInt(idParam));
//       console.log("employee::", employee);
//       if (employee) {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(employee));
//       } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Employee not found\n');
//       }
//     } else {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.end(employeeData);
//     }
//   } else {
//     res.statusCode = 405;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Use GET method only...\n');
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running at ${port}`);
// });


//Only data fetch:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const http = require('http');
// const port = 3000;
// const employeeDetails = [
//   { id: 1, name: 'Max', position: 'Software Engineer' },
//   { id: 2, name: 'Sofy', position: 'Designer' },
//   { id: 3, name: 'John', position: 'Frontend Developer' }
// ];

// const employeeData = JSON.stringify(employeeDetails);

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     req.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(employeeData);
//   }
//   else {
//     res.setHeader(405, { 'Content-Type': 'text/plain' });
//     res.end('Use GET method only...\n');
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running at ${port}`);
// });