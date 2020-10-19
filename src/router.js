import Vue from 'vue'
import Router from 'vue-router'
import donatePage from './views/donatePage/Donate'
import resourcesPage from './views/resourcesPage/Resources'
import careerChild from "./views/resourcesPage/components/careerChild"
import eventsChild from "./views/resourcesPage/components/eventsChild"
import loginPage from './views/loginPage/Login'
import profilePage from './views/profilePage/Profile'
import registerPage from './views/registerPage/Register'
import shoppingCartPage from './views/shoppingCartPage/ShoppingCart'
import shoppingPage from './views/shoppingPage/Shopping'
import mainPage from './views/mainPage/Main'
import volunteerPage from './views/volunteerPage/Volunteer'
import leadershipChild from "./views/volunteerPage/components/leadershipChild"
import charityChild from "./views/volunteerPage/components/charityChild"
import healthcareChild from "./views/volunteerPage/components/healthcareChild"
import educationChild from "./views/volunteerPage/components/educationChild"
import userChild from "./views/profilePage/components/userChild"
import shippingChild from "./views/profilePage/components/shippingChild"
import ordersChild from "./views/profilePage/components/ordersChild"
import passwordChild from "./views/profilePage/components/passwordChild"
import portraitDescriptionChild from "./views/profilePage/components/portraitDescriptionChild"
import detailEvents from "./views/resourcesPage/components/detailEvents"
import adminPage from "./views/adminPage/Admin"
import handleCareer from "./views/adminPage/components/handleCareer"
import handleEvents from "./views/adminPage/components/handleEvents"
import handleOrder from "./views/adminPage/components/handleOrder"
import handleShopping from "./views/adminPage/components/handleShopping"
import handleUser from "./views/adminPage/components/handleUser"
import handleVolunteer from "./views/adminPage/components/handleVolunteer"


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/admin',
            component: adminPage,
            children: [
                {
                    path: "handleCareer",
                    component: handleCareer,
                },
                {
                    path: "handleEvent",
                    component: handleEvents,
                },
                {
                    path: "handleShopping",
                    component: handleShopping,
                },
                {
                    path: "handleUser",
                    component: handleUser,
                },
                {
                    path: "handleVolunteer",
                    component: handleVolunteer,
                },
                {
                    path: "handleOrder",
                    component: handleOrder,
                },
                {
                    path: "",
                    redirect: '/admin/handleCareer'
                },
            ]
        },
        {
            path: '/donate',
            component: donatePage,
        },
        {
            path: '/resources',
            component: resourcesPage,
            children: [
                {
                    path: "career",
                    component: careerChild,
                },
                {
                    path: "events",
                    component: eventsChild,
                },
                {
                    path: "",
                    redirect: '/resources/career',
                }
            ],
        },
        {
            path: '/resources/events/:id',
            component: detailEvents
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
            path: '/volunteer',
            component: volunteerPage,
            children: [
                {
                    path: "leadership",
                    component: leadershipChild,
                },
                {
                    path: "charity",
                    component: charityChild,
                },
                {
                    path: "educational",
                    component: educationChild,
                },
                {
                    path: "healthcare",
                    component: healthcareChild,
                },
                {
                    path: "",
                    redirect:'/volunteer/leadership',
                },
            ]
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

router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(to.path === '/volunteer')
    console.log(window.$cookies.get('email'))
    if (to.path.includes('volunteer') || to.path.includes('profile')){
        if (window.$cookies.get('email') != null) {
            next()
        } else {
            window.alert('Please login to continue')
            next('/login')
        }
    }
    next()
})

export default router;
