// 1. library imports
const express = require('express');
const multer = require('multer');

// 2. app initilization
const app = express();

// 3. middleware, any app settings
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
const upload = multer({ dest: 'client/upload/' });

let lastImageUploaded = {};

app.post('/upload', upload.single('blob'), (request, response) => {
	console.log(request.body);
	console.log(request.file);
	lastImageUploaded.caption = request.body.filename;
	lastImageUploaded.src = `upload/${request.file.filename}`;
	response.send('thanks!');
});

app.get('/image', (request, response) => {
	response.send(`<img src=${lastImageUploaded.src} />`);
});

// LAST: starting the server to listen for requests
app.listen(5003, () => {
	console.log('server is running on port 5003');
});
