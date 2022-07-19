import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './router/index';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../public')))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache'); 
app.engine('mustache', mustache());


app.use(mainRoutes);


// app.use((req, res) => {
//     res.render('pages/404');
// });

app.listen(process.env.PORT);