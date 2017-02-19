let express = require('express');
let app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	//res.send(`ExpressJS is running on port ${port}`);
	res.sendFile(__dirname + '/public/home.html');
});

app.listen(port, () => {
	console.log(`ExpressJS running on port ${port}.`)
});