import {createRouter, createWebHistory} from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import ('@/views/HomePage.vue'),
        meta: {
            title: "Home Page"
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import ('@/views/AboutPage.vue'),
        meta: {
            title: "About Us"
        }
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: () => import ('@/views/EquipmentPage.vue'),
        meta: {
            title: "Equipments"
        }
    },
    {
        path: '/workers',
        name: 'Workers',
        component: () => import ('@/views/WorkersPage.vue'),
        meta: {
            title: 'Workers Ads'
        }
    },

    {
        path: '/contact',
        name: 'Contact',
        component: () => import ('@/views/ContactPage.vue'),
        meta: {
            title: " Contact Us "
        }
    },
    {
        path: '/workers/:id',
        name: 'singleAdv',
        component: () => import ('@/views/singleAdv.vue'),
        meta: {
            title: "Ads Details"
        }
    },
    {
        path: '/create-adv',
        name: 'CreateAd',
        component: () => import ('@/views/createAdvPage.vue'),
        meta: {
            title: "Create New Ads"
        }
    },
    {
        path: '/steps',
        name: 'steps-create-ads',
        component: () => import ('@/views/StepsCreateAdv.vue'),
        meta: {
            title: "Steps Create Ads"
        }
    },
    {
        path: '/fovorite',
        name: 'favorite',
        component: () => import ('@/views/favoritePage.vue'),
        meta: {
            title: "Favorite"
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import ('@/views/myProfile.vue'),
        meta: {
            title: "My Profile"
        }
    },
    {
        path: '/provider-profile/:id',
        name: 'provider-profile',
        component: () => import ('@/views/providerProfile.vue'),
        meta: {
            title: "Provider Profile"
        }
    },
    {
        path: '/search',
        name: "search Page",
        component: () => import('@/views/searchPage.vue'),
        data: {
            title: "search Page"
        }
    }
    
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router