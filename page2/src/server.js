const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function (req, res){
    const pathToHtmlFile = path.resolve(__dirname, '../dist/page2.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(9002, function(){
    console.log('we are runnig in http://localhost:9002')
})