const express = require('express');
const app = express();
const port = 5000; // not 3000 it is reserved for create react app

app.get('/api/customers', (req, res) => {
    const customer = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Marry', lastName: 'Berry'},
        {id: 3, firstName: 'Tom', lastName: 'Hanks'}
    ];
    res.json(customer);
});

app.listen(port, () => console.log(`Server started on port ${port}`));