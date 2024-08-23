const http = require('http');
const config = require('./apiconfig');

// API
const options = {
    hostname: config.API_HOST,
    path: config.API_BUS_ARRIVAL_PATH,
    headers: {"accountKey" : process.env.LTA_TOKEN},
    method: "GET",
};


function checkBusArrival(){
    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        // Ending the response 
        res.on('end', () => {
            console.log('Body:', JSON.parse(data));
        });
    }).on("error", (err) => {
        console.log("Error: ", err)
    }).end();
}

module.exports = {
    checkBusArrival
};