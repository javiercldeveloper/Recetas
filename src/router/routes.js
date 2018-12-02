import PageHome from '../views/PageHome'
import PageAccess from '../views/PageAccess'
import PageContact from '../views/PageContact'
import PageChefs from '../views/PageChefs'
import PageChefsFinder from '../views/PageChefsFinder'
import PageRecipe from '../views/PageRecipe'
import PageRecipesFinder from '../views/PageRecipesFinder'
import PageNewIngredients from '../views/PageNewIngredients'
import PageNewRecipes from '../views/PageNewRecipes'
import Page404 from '../views/Page404'

export const routes = [
  { path: '/', component: PageHome },
  { path: '/acceso', component: PageAccess },
  { path: '/contacto', component: PageContact },
  // This is the basic configuration for a dynamic route
  { path: '/chef/:id', component: PageChefs },
  { path: '/buscatuchef', component: PageChefsFinder },
  { path: '/receta/:id', component: PageRecipe },
  { path: '/buscatureceta', component: PageRecipesFinder },
  {
    path: '/insertarnuevosingredientes',
    component: PageNewIngredients,
    // Redirect to HomePage if not logged
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info') && JSON.parse(localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info')).user_id === '5c045ff0698a673501394d61') {
        next()
      } else next('/')
    } },
  {
    path: '/insertarnuevarecetas',
    component: PageNewRecipes,
    // Redirect to HomePage if not logged
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info') && JSON.parse(localStorage.getItem('__stitch.client.segundo-bjjsd.auth_info')).user_id === '5c045ff0698a673501394d61') {
        next()
      } else next('/')
    } },
  // The last route will redirect to 404 Page
  { path: '*', component: Page404 }
]
