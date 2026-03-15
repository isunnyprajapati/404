import express from "express";
import {dirname} from "path";
import pg from "pg";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;
const db = new pg.Client({
    user: 'sunny',
    host: 'localhost',
    database: 'my_db',
    port: 5432
});

db.connect();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.ejs', { page: 'home' });
});

app.get('/journal', (req, res) => {
    res.render('journal.ejs', { page: 'journal' });
});

app.get('/blog', (req, res) => {
    res.render('blog.ejs', { page: 'blog' });
});

app.post('/login', (req, res) => {
    console.log(req.body);
});

app.post('/signup', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});