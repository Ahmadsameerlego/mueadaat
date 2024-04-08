import { createRouter, createWebHistory } from "vue-router";
// import { component } from "vue/types/umd";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutPage.vue"),
    meta: {
      title: "About Us",
    },
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: () => import("@/views/EquipmentPage.vue"),
    meta: {
      title: "Equipments",
    },
  },
  {
    path: "/workers",
    name: "Workers",
    component: () => import("@/views/WorkersPage.vue"),
    meta: {
      title: "Workers Ads",
    },
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/ContactPage.vue"),
    meta: {
      title: " Contact Us ",
    },
  },
  {
    path: "/workers/:id",
    name: "singleAdv",
    component: () => import("@/views/singleAdv.vue"),
    meta: {
      title: "Ads Details",
    },
  },
  {
    path: "/create-adv",
    name: "CreateAd",
    component: () => import("@/views/createAdvPage.vue"),
    meta: {
      title: "Create New Ads",
      requiresAuth: true,
    },
  },
  {
    path: "/steps",
    name: "steps-create-ads",
    component: () => import("@/views/StepsCreateAdv.vue"),
    meta: {
      title: "Steps Create Ads",
      requiresAuth: true,
    },
  },
  // {
  //   path: "/fovorite",
  //   name: "favorite",
  //   component: () => import("@/views/favoritePage.vue"),
  //   meta: {
  //     title: "Favorite",
  //     requiresAuth: true,
  //   },
  // },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/myProfile.vue"),
    meta: {
      title: "My Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/provider-profile/:id",
    name: "provider-profile",
    component: () => import("@/views/providerProfile.vue"),
    meta: {
      title: "Provider Profile",
      requiresAuth: true,
    },
  },

  {
    path: "/search",
    name: "search Page",
    component: () => import("@/views/searchPage.vue"),
    data: {
      title: "search Page",
    },
  },
  {
    path: "/watch",
    name: "watch-dates",
    component: () => import("@/views/watchDate"),
    data: {
      title: "Watch Dates",
    },
  },
  {
    path: "/ads",
    name: "myAds",
    component: () => import("@/views/myAds"),
    data: {
      title: "my Ads",
    },
  },
  {
    path: "/rate-ads",
    name: "rateMyAds",
    component: () => import("@/views/rateMyAds"),
    data: {
      title: "rate My Ads",
    },
  },
  {
    path: "/laws",
    name: "Laws",
    component: () => import("@/views/LawsPage.vue"),
    data: {
      title: "Review of laws",
    },
  },
  {
    path: "/treaty",
    name: "treaty",
    component: () => import("@/views/treatyPage.vue"),
    data: {
      title: "Employment treaty",
    },
  },
  {
    path: "/usage-policy",
    name: "usagePolicy",
    component: () => import("@/views/usagePolicyPage.vue"),
    data: {
      title: "Usage policy",
    },
  },
  {
    path: '/notification',
    component : ()=> import('@/views/notificationView.vue')
  },
  {
    path: '/favs',
    component : ()=> import('@/views/favoirtePage.vue')
  },
  {
    path: "/edit/:id",
    component : ()=> import('@/views/editOwnAdd.vue')
  }
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!sessionStorage.getItem("user")) {
      next({ name: "Home" });
      document.querySelector(".login-button").click();
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
