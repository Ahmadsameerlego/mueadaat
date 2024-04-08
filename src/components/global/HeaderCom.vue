<template>
  <nav
    class="navbar navbar-expand-lg custom-nav"
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="container" style="    max-width: 1250px;"> 
      <router-link class="navbar-brand" to="/">
        <img src="../../assets/logo.png" width="120" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'Home' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Home' }"
            >
              {{ $t("Home") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'About' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'About' }"
            >
              {{ $t("About") }}
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'Equipment' ? 'active' : ''"
              to="/equipment"
            >
              <span class="text-link">{{ $t("Equipments") }}</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'Workers' ? 'active' : ''"
              to="/workers"
            >
              <span class="text-link">{{ $t("Workers") }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'CreateAd' ? 'active' : ''"
              to="/create-adv"
            >
              <span class="text-link">{{ $t("Create") }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name == 'Contact' ? 'active' : ''"
              to="/contact"
            >
              <span class="text-link">{{ $t("Contact") }}</span>
            </router-link>
          </li>
        </ul>
        <section class="user_interaction d-flex justify-content-between">

        <div v-if="user">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="user.data.avatar"
                alt=""
                width="30"
                height="30"
                style="border-radius: 50%"
              />
              <span>
                {{ user.data.first_name }}
              </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <router-link class="dropdown-item d-flex" to="/profile">
                  <div class="drop-image">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <span class="mx-2"> حسابي </span>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item d-flex" to="/laws">
                  <div class="drop-image">
                    <i class="fa-regular fa-square"></i>
                  </div>
                  <span class="mx-2"> استعراض القوانين </span>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item d-flex" to="/treaty">
                  <div class="drop-image">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                  <span class="mx-2"> معاهدة الاستخدام </span>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item d-flex" to="/usage-policy">
                  <div class="drop-image">
                    <i class="fa-solid fa-file"></i>
                  </div>
                  <span class="mx-2"> سياسة الخصوصية </span>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item d-flex" to="/favs">
                  <div class="drop-image">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <span class="mx-2"> المفضلة </span>
                </router-link>
              </li>
              <li>
                <div class="dropdown-item d-flex">
                  <div class="drop-image">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </div>
                  <span
                    class="mx-2"
                    @click="signout"
                    :disabled="disabled"
                    style="cursor:pointer"
                  >
                    تسجيل الخروج
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <button
            type="button"
            class="global-button login-button"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
            style="background-color: #000;"
          >
            <i class="fa-regular fa-user"></i>
            <span class="mx-2">
              {{ $t("SignIn") }}
            </span>
          </button>
        </div>
          <LangCom class="mx-2" />

        <div  v-if="user">
          <a  :href="'https://api.whatsapp.com/send?phone='+phone" target="_black" style="width:33px;height:33px;border-radius:50%" class="px-0 global-button drop-image mx-2 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-comment-dots"></i>
          </a>
        </div>

        <div  v-if="user">
          <router-link @click="getNotification"  to="/notification" style="width:33px;height:33px" class="position-relative drop-image mx-2">
            <i class="fa-regular fa-bell"></i>
           <span class="notification_count" v-if="isNotGet">
             {{ notification_count }}
           </span>
          </router-link>
        </div>

        <div>
          <router-link to="/search" style="width:33px;height:33px" class="drop-image mx-2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </router-link>
        </div>
        </section>
      </div>
    </div>
  </nav>
  <modalLoginForm />
  <modalSignUpForm />
  <modalForgetPassword />
  <modalVerfication />
  <modalChangePassword />
  <modalResetPassword />

  <Toast />
</template>
<script setup>
import LangCom from "./LangCom.vue";
import modalLoginForm from "./modal/modalLoginForm.vue";
import modalSignUpForm from "./modal/modalSignUpForm.vue";
import modalForgetPassword from "./modal/modalForgetPassword.vue";
import modalVerfication from "./modal/modalVerfication.vue";
import modalChangePassword from "./modal/modalChangePassword.vue";
import modalResetPassword from "./modal/modalResetPassword.vue";

// import { useToast } from "primevue/usetoast";
// const toast = useToast();
</script>
<script>
import Toast from "primevue/toast";
import axios from 'axios'
export default {
  data() {
    return {
      user: null,
      disabled: false,
      notification_count: '',
      isNotGet: false,
      phone : ''
    };
  },
  methods: {
       // get notifications 
        async getNotification(){
            
          setTimeout(() => {
               axios.post('https://dashboard.mueadaat.info/test-mode/api/show-notification', {
                 lang: localStorage.getItem('locale'),
                 user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
            } )
            .then( (res)=>{
                // if( res.data.key === 'success' ){
                    console.log(res.data.data)
                    // this.currentPage = res.data.data.pagination.current_page ;
                    // this.totalPages = res.data.data.pagination.total_pages ;
                    // this.per_page = res.data.data.pagination.per_page ;
                // }
            } )
          }, 1000);
    },
        signout() {
      this.disabled = true;
      setTimeout(() => {
        sessionStorage.removeItem("user");
        this.user = null;
        this.$toast.add({
          severity: "success",
          summary: "تم تسجيل الخروج بنجاح",
          life: 3000,
        });
      }, 1000);
    },
  },
  mounted() {
    var savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    }
    var id = null;
    if (sessionStorage.getItem('user')) {
      id =  JSON.parse(sessionStorage.getItem("user")).data.id
    }
    axios
      .post("https://dashboard.mueadaat.info/test-mode/api/home", {
       user_id:  id,
      })
      .then((response) => {
        // handle success
        this.notification_count = response.data.notification_count;
        this.phone = response.data.phone;
        this.isNotGet = true;
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },
  // methods: {
    
  // },
  components: {
    Toast,
  },
};
</script>
<style>
.notification_count{
    background-color: red;
    width: 20px;
    height: 19px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    position: absolute;
    left: -8px;
    top: -6px;

}
.dropdown-menu {
  border: none !important;
  border-radius: 10px !important;
  box-shadow: 0px 0px 10px #3333336e;
  text-align: right;
}
.drop-image {
  width: 25px;
  height: 25px;
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.dropdown-item {
  border-bottom: 1px solid #ccc !important;
}
</style>
