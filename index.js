import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>
{
    res.render(__dirname + '/views/index.ejs', { page: 'home' });
});

app.get('/about', (req, res) =>
{
    res.render(__dirname + '/views/about.ejs', { page: 'about' });
});

app.get('/links', (req, res) =>
{
    res.render(__dirname + '/views/links.ejs', { page: 'links' });
});


app.listen(port, () => 
{
    console.log(`Server is running on port ${port}.`);
});