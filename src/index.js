const express = require('express');

const app = express();

const PORT = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ok: true})
})

app.get('/ping', (req, res) => {
 res.status(201).json({ status: 'ok' });
})

app.listen(PORT), error => {
    if (error) {
        console.log('eRROR!')
        throw error;
    } else {
        console.log(`Node server listening on port ${PORT}`);
    }
};

// http.createServer(function(req, res) {
//     const responseData = {
//         status: 'okay',
//     };
//     res.writeHead(201, {
//         'Content-Type': 'application/json',
//     });
//     res.end(JSON.stringify(responseData));
// }).listen(PORT);

// console.log(`Node  server is listening on port ${PORT}`)