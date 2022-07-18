import express, { application } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import * as pageController from './controllers/pageController';
import * as searchController from './controllers/searchController'

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/',pageController.home)
app.use('/dogs',pageController.dogs)
app.use('/cats',pageController.cats)
app.use('/fishes',pageController.fishes)
app.use('/search', searchController.serch)


app.use()

app.listen(process.env.PORT, ()=> {
    console.log(`servidor no ar na porta ${process.env.PORT}`);
})