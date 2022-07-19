import router  from 'express';
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController'

const app = router();


app.get('/',pageController.home)
app.get('/dogs',pageController.dogs)
app.get('/cats',pageController.cats)
app.get('/fishes',pageController.fishes)
app.get('/search', searchController.serch)



export default app;