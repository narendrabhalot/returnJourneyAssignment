const express = require('express');
const fs = require('fs');
const app = express();

const logRequestToFile = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const { method, originalUrl } = req;
    const logMessage = `[${timestamp}] ${method} request received for: ${originalUrl}\n`;


    fs.appendFile('request_logs.txt', logMessage, (err) => {
        if (err) {
            console.error('Error writing log to file:', err);
        }
    });

    next();
};


app.use(logRequestToFile);



app.get('/api/users', (req, res) => {

    res.json({ message: 'i am user' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
