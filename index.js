let express = require('express');
let cors = require('cors');
let multer = require('multer');
let upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
