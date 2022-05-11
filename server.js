const express = require('express')
const app = express();
const path = require('path');
const port = 8080;
fs = require('fs'),

app.use(express.urlencoded({
  extended: true
}))

app.use(express.static('images'))

app.get('/', function(req, res) {
    //Form ommited from source.
    res.sendFile(path.join(__dirname, 'public/form.html'));
});

app.post('/api/v1/submit', (req, res) => {
    const id = num(100000000, 9999999999);
    fs.writeFile('Result_'+id+'.json', ''+JSON.stringify(req.body), ()=>{});
    console.log('Processed: '+id);
    res.end()
  })


function num(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

app.listen(8080);
console.log('Running on port: ' + port);
