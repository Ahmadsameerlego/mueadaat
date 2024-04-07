import {createRouter, createWebHistory} from 'vue-router';
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
      requiresAuth: true,
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
  {
    path: "/fovorite",
    name: "favorite",
    component: () => import("@/views/favoritePage.vue"),
    meta: {
      title: "Favorite",
      requiresAuth: true,
    },
  },
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
];
const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (
      !sessionStorage.getItem("user")
    ) {
        next({ name: "Home" });
        document.querySelector(".login-button").click()
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router