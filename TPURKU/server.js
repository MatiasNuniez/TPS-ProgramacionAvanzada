const express  = require ('express');
const hbs = require('hbs');
const app = express();

//Le indicamos a el render donde van a estar los parciales para reutilizarlos
hbs.registerPartials(__dirname + "/views/partials");

//Ruta predeterminada
app.use(express.static(__dirname + "/public"));

app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render('home',{

    })
});

app.get('/about', (req,res)=>{
    res.render('about',{
        
    })
});

app.get('/blog', (req,res)=>{
    res.render('blog',{
        
    })
});

app.get('/contact', (req,res)=>{
    res.render('contact',{
        
    })
});

app.get('/portfolio', (req,res)=>{
    res.render('portfolio',{
        
    })
})

app.get('/home', (req,res)=>{
    res.render('home',{
        
    })
})

app.listen(3030)