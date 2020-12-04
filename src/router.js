import Vue from 'vue'
import Router from 'vue-router'
import newsPage from './views/newsPage/News'
import eventsPage from "./views/eventsPage/Events"
import up_comingChild from "./views/eventsPage/components/up_comingChild"
import dinner_danceChild from "./views/eventsPage/components/dinner_danceChild"
import fundraiserChild from "./views/eventsPage/components/fundraiserChild"
import familyChild from "./views/eventsPage/components/familyChild"
import loginPage from './views/loginPage/Login'
import profilePage from './views/profilePage/Profile'
import registerPage from './views/registerPage/Register'
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
import detailNews from "./views/newsPage/components/detailNews"
import adminPage from "./views/adminPage/Admin"
import handleNews from "./views/adminPage/components/handleNews"
import handleEvents from "./views/adminPage/components/handleEvents"
import handleOrder from "./views/adminPage/components/handleOrder"
import handleShopping from "./views/adminPage/components/handleShopping"
import handleUser from "./views/adminPage/components/handleUser"
import handleVolunteer from "./views/adminPage/components/handleVolunteer"
import detailProducts from "@/views/shoppingPage/components/detailProducts";
import productsChild from "@/views/shoppingPage/components/productsChild";
import ShoppingCart from "@/views/shoppingCartPage/ShoppingCart";
import OrderPage from "@/views/shoppingCartPage/OrderPage";
import PaymentPage from "@/views/shoppingCartPage/PaymentPage";
import Donate from "@/views/donatePage/Donate";
import pay from "@/views/donatePage/components/pay";
import thanksGiving from "@/views/donatePage/components/thanksGiving";
import forgetPage from "./views/forgetPage/Forget"
import defaultChild from "./views/adminPage/components/defaultChild"
import history from "./views/historyPage/History"
import qa from "./views/Q&APage/Q&APage"
import officers from "@/views/officerPage/components/officers";
import officersDetail from "@/views/officerPage/components/officersDetail";
import handleOfficers from "@/views/adminPage/components/handleofficers";
import Confirm from "@/views/shoppingCartPage/Confirm";

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
                    path: "handleNews",
                    component: handleNews,
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
                    path: "handleOfficer",
                    component: handleOfficers,
                },
                {
                    path: "default",
                    component: defaultChild,
                },
                {
                    path: "",
                    redirect: '/admin/default'
                },
            ]
        },
        {
            path: '/history',
            component: history,
        },
        {
            path: '/officer',
            component: officers,
        },
        {
            path: '/officer/:id',
            component: officersDetail,
        },
        {
            path: '/q&a',
            component: qa,
        },
        {
            path: '/events',
            component: eventsPage,
            children: [
                {
                    path: "upcoming",
                    component: up_comingChild,
                },
                {
                    path: "dance",
                    component: dinner_danceChild,
                },
                {
                    path: "fundraiser",
                    component: fundraiserChild,
                },
                {
                    path: "family",
                    component: familyChild,
                },
                {
                    path: "",
                    redirect: '/events/upcoming'
                },
            ]
        },
        {
            path: '/forget',
            component: forgetPage,
        },
        {
            path: '/donate',
            component: Donate,
        },
        {
            path: '/pay',
            component: pay,
        },
        {
            path: '/thanks',
            component: thanksGiving,
        },
        {
            path: '/news',
            component: newsPage,
        },
        {
            path: '/news:id',
            component: detailNews
        },
        {
            path: '/shopping',
            component: productsChild,
        },
        {
            path: '/shopping/:id',
            component: detailProducts,
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
            component: ShoppingCart,
        },
        {
            path:'/order',
            component: OrderPage,
        },
        {
            path:'/payment',
            component: PaymentPage,
        },
        {
            path: '/confirm',
            component: Confirm,
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
    if (to.path.includes('volunteer') || to.path.includes('profile')|| to.path.includes('shopping')||to.path.includes('cart')){
        if (window.$cookies.get('email') != null) {
            next()
        } else {
            window.alert('Please login to continue')
            next('/login')
        }
    } else if (to.path.includes('admin')) {
        if (window.$cookies.get('isAdmin') !== "0" && window.$cookies.get('isAdmin') !== null) {
            next()
        } else {
            window.alert('You don\'t have the right the access the page')
            next('/index')
        }
    }else if (to.path.includes('forget') || to.path.includes('login')) {
        if (window.$cookies.get('email') === null) {
            next()
        } else {
            window.alert('You already signed in')
            next('/index')
        }
    }else if (to.path.includes('register')){
        if (window.$cookies.get('email') === null){
            next()
        } else {
            next('/index')
        }
    }
    next()
})


export default router;
