// app.js

const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const employee = [
    { id: 1, name: 'Narayan S', email: 'narayan@prainsys.com' },
    { id: 2, name: 'Naveen M', email: 'naveen@prainsys.com' },
    { id: 3, name: 'Akshay A K ', email: 'akshay@parinsys.com' }
];

// Routes
app.get('/', (req, res) => {
    res.send('<h1>WELCOME PRAINSYS EMPLOYEE PORTAL  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1> ');
});

app.get('/api/employee', (req, res) => {
    res.json(employee);
});

app.get('/api/employee/:id', (req, res) => {
    const user = employee.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
