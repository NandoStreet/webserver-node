import express from 'express'
import * as url from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Fernando',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Fernando',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html');
});

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html');
});


app.listen(port, () => {
    console.log(`Desplegado en el puerto ${port}`);
})
