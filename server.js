const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    const now = new Date().toDateString();
    const log = `${now} ${req.method} ${req.path}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err)=>{
        if(err){
            console.log(err);
        }
    });
    next();
});
app.use((req,res,next)=>{
    res.render('maintenance.hbs',{
        title : 'Maintenance Page',
        message : 'We will be right back'
    });
});
app.get('/', (req,res)=>{
    res.render('home.hbs', {
        title : 'Home Page',
        message : 'Welcome to my website'
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        title : 'About Page'
    });
});

app.get('/bad', (req,res)=>{
    res.send('Error message');
})

app.listen(3000, ()=>{
    console.log('Server is listening at port 3000');
});

