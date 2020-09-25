import Vue from 'vue';
import Router from 'vue-router';
import donatePage from './views/donatePage/Donate';
import forumPage from './views/forumPage/Forum';
import loginPage from './views/loginPage/Login';
import profilePage from './views/profilePage/Profile';
import registerPage from './views/registerPage/Register';
import shoppingCartPage from './views/shoppingCartPage/ShoppingCart';
import shoppingPage from './views/shoppingPage/Shopping';
import mainPage from './views/mainPage/Main';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/donate',
            component: donatePage,
        },
        {
            path: '/forum',
            component: forumPage,
        },
        {
            path: '/login',
            component: loginPage,
        },
        {
            path: '/profile',
            component: profilePage,
        },
        {
            path: '/register',
            component: registerPage,
        },
        {
            path: '/cart',
            component: shoppingCartPage,
        },
        {
            path: '/shopping',
            component: shoppingPage,
        },
        {
            path: '/index',
            component: mainPage,
        },
        {
            path: '*',
            redirect: 'index',
        },
    ]
})
export default router;