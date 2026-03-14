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

const AUTH_KEY = process.env.VUE_APP_STITCH_AUTH_KEY
const ADMIN_USER_ID = process.env.VUE_APP_ADMIN_USER_ID

function isAdmin () {
  const raw = localStorage.getItem(AUTH_KEY)
  if (!raw) return false
  try {
    return JSON.parse(raw).user_id === ADMIN_USER_ID
  } catch (e) {
    return false
  }
}

export const routes = [
  { path: '/', component: PageHome },
  { path: '/acceso', component: PageAccess },
  { path: '/contacto', component: PageContact },
  { path: '/chef/:id', component: PageChefs },
  { path: '/buscatuchef', component: PageChefsFinder },
  { path: '/receta/:id', component: PageRecipe },
  { path: '/buscatureceta', component: PageRecipesFinder },
  {
    path: '/insertarnuevosingredientes',
    component: PageNewIngredients,
    beforeEnter: (to, from, next) => {
      isAdmin() ? next() : next('/')
    }
  },
  {
    path: '/insertarnuevarecetas',
    component: PageNewRecipes,
    beforeEnter: (to, from, next) => {
      isAdmin() ? next() : next('/')
    }
  },
  { path: '*', component: Page404 }
]
