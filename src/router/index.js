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
        name: 'Favoirte Page',
        component: () => import ('@/views/favoirtePage.vue'),
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
    },
    {
        path: '/watch',
        name: "watch-dates",
        component: () => import('@/views/watchDate'),
        data: {
            title: "Watch Dates"
        }
    },
    {
        path: "/ads",
        name: "myAds",
        component: () => import('@/views/myAds'),
        data: {
            title: "my Ads"
        }
    },
    {
        path: "/rate-ads",
        name: "rateMyAds",
        component: () => import('@/views/rateMyAds'),
        data: {
            title: "rate My Ads"
        }
    },
    {
        path: "/laws",
        name: "Laws",
        component: () => import ('@/views/LawsPage.vue'),
        data: {
            title: "Review of laws"
        }
    },
    {
        path: "/treaty",
        name: "treaty",
        component: () => import ('@/views/treatyPage.vue'),
        data: {
            title: "Employment treaty"
        }
    },
    {
        path: "/usage-policy",
        name: "usagePolicy",
        component: () => import ('@/views/usagePolicyPage.vue'),
        data: {
            title: "Usage policy"
        }
    },

    
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router