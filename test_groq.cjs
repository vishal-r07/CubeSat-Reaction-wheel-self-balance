const https = require('https');

const data = JSON.stringify({
    messages: [{ role: 'user', content: 'Hello' }],
    model: 'llama-3.1-8b-instant'
});

const options = {
    hostname: 'api.groq.com',
    path: '/openai/v1/chat/completions',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
