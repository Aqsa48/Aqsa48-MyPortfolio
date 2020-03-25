const express = require('express');
const app = express();
const path = require('path');
//Serves resources from public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const fs = require('fs');
app.get('/', (req, res) => {

    res.render('index')
});
app.get('/download', (req, res) => {
    console.log(__dirname);
    var file = __dirname + '/cv_file/MyUpdatedCv.pdf';
    res.download(file);
})

//connection to server
app.listen(3000 || process.env.PORT, error => {
    if (error) console.log("error is " + error);
    else console.log("listening to port " + 3000);
});