import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OpenHousesIndex from '../views/OpenHousesIndex.vue'
import OpenHousesNew from '../views/OpenHousesNew.vue'
import OpenHousesShow from '../views/OpenHousesShow.vue'
import OpenHousesEdit from '../views/OpenHousesEdit.vue'
import RealtorsNew from '../views/RealtorsNew.vue'
import RealtorsShow from '../views/RealtorsShow.vue'
import RealtorsEdit from '../views/RealtorsEdit.vue'
import BuyersNew from '../views/BuyersNew.vue'
import BuyersShow from '../views/BuyersShow.vue'
import BuyersEdit from '../views/BuyersEdit.vue'
import InterestsNew from '../views/InterestsNew.vue'
import InterestsShow from '../views/InterestsShow.vue'
import InterestsEdit from '../views/InterestsEdit.vue'
import PhotosNew from '../views/PhotosNew.vue'
import PhotosShow from '../views/PhotosShow.vue'
import PhotosEdit from '../views/PhotosEdit.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";


Vue.use(VueRouter)

const routes = [
 {path: '/', name: 'home', component: Home },
 {path: '/open_houses', name: 'open-houses-index', component: OpenHousesIndex },
 {path: '/open_houses/new', name: 'openhouses-new', component: OpenHousesNew },
 {path: '/open_houses/:id', name: 'openhouses-show', component: OpenHousesShow },
 {path: '/open_houses/id/edit', name: 'openhouses-edit', component: OpenHousesEdit },
 {path: '/realtors/new', name: 'realtors-new', component: RealtorsNew },
 {path: '/realtors/:id', name: 'realtors-show', component: RealtorsShow },
 {path: '/realtors/:id/edit', name: 'realtors-edit', component: RealtorsEdit},
 {path: '/buyers/new', namne: 'buyers-new', component: BuyersNew },
 {path: '/buyers/:id', name: 'buyers-show', component: BuyersShow },
 {path: '/buyers/:id/edit', name: 'buyers-edit', component: BuyersEdit },
 {path: '/interests/new', name: 'interests-new', component: InterestsNew },
 {path: '/interests/:id', name: 'interests-show', component: InterestsShow },
 {path: '/interests/:id/edit', name: 'interests-edit', component: InterestsEdit },
 {path: '/photos/new', name: 'photos-new', component: PhotosNew },
 {path: '/photos/:id', name: 'photos-show', component: PhotosShow },
 {path: '/photos/:id/edit', name: 'photos-edit', component: PhotosEdit },
 {path: "/signup", name: "signup", component: Signup },
 {path: "/login", name: "login", component: Login },
 {path: "/logout", name: "logout", component: Logout }



]
const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import FoodsIndex from '../views/FoodsIndex.vue'
// import FoodsNew from '../views/FoodsNew.vue'
// import FoodsShow from '../views/FoodsShow.vue'
// import FoodsEdit from '../views/FoodsEdit.vue'
// Vue.use(VueRouter)
// const routes = [
//  {path: '/', name: 'home', component: FoodsIndex },
//  {path: '/foods', name: 'foods-index', component: FoodsIndex },
//  {path: '/foods/new', name: 'foods-new', component: FoodsNew },
//  {path: '/foods/:id', name: 'foods-show', component: FoodsShow },
//  {path: '/foods/:id/edit', name: 'foods-edit', component: FoodsEdit }
// ]
// const router = new VueRouter({
//  mode: 'history',
//  base: process.env.BASE_URL,
//  routes
// })
// export default router