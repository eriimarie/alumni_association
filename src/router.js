import Vue from 'vue'
import Router from 'vue-router'
import donatePage from './views/donatePage/Donate'
import eventsPage from './views/eventsPage/Events'
import loginPage from './views/loginPage/Login'
import profilePage from './views/profilePage/Profile'
import registerPage from './views/registerPage/Register'
import shoppingCartPage from './views/shoppingCartPage/ShoppingCart'
import shoppingPage from './views/shoppingPage/Shopping'
import mainPage from './views/mainPage/Main'
import newsPage from './views/newsPage/News'
import userChild from "./views/profilePage/components/userChild"
import shippingChild from "./views/profilePage/components/shippingChild"
import ordersChild from "./views/profilePage/components/ordersChild"
import passwordChild from "@/views/profilePage/components/passwordChild"
import portraitDescriptionChild from "@/views/profilePage/components/portraitDescriptionChild"


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
            path: '/events',
            component: eventsPage,
        },
        {
            path:'/user',
        },
        {
            path: '/login',
            component: loginPage,
        },
        {
            path: '/profile',
            component: profilePage,
            children:[
                {
                    path: "user",
                    component: userChild,
                },
                {
                    path: "shipping",
                    component: shippingChild,
                },
                {
                    path: "orders",
                    component: ordersChild,
                },
                {
                    path: "password",
                    component: passwordChild,
                },
                {
                    path: "editPD",
                    component: portraitDescriptionChild,
                },
                {
                    path: "",
                    redirect:'/profile/user',
                },
            ],
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
            path: '/news',
            component: newsPage,
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