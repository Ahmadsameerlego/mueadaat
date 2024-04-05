<template>
  <nav class="navbar navbar-expand-lg custom-nav"
       :dir="$i18n.locale == 'ar'?'rtl':'ltr'">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../../assets/logo.png">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav  ms-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <router-link class="nav-link" :class="$route.name == 'Home'? 'active':''" aria-current="page"
                         :to="{ name: 'Home' }">
              {{ $t('Home') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="$route.name == 'About'? 'active':''" aria-current="page"
                         :to="{ name: 'About' }">
              {{ $t('About') }}
            </router-link>
          </li>


          <li class="nav-item">
            <router-link class="nav-link"
                         :class="$route.name == 'Equipment'? 'active':''" to="/equipment">
              <span class="text-link">{{ $t('Equipments') }}</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link"
                         :class="$route.name == 'Workers'? 'active':''" to="/workers">
              <span class="text-link">{{ $t('Workers') }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
                         :class="$route.name == 'CreateAd'? 'active':''" to="/create-adv">
              <span class="text-link">{{ $t('Create') }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
                         :class="$route.name == 'Contact'? 'active':''" to="/contact">
              <span class="text-link">{{ $t('Contact') }}</span>
            </router-link>
          </li>

        </ul>

        <div v-if="user">
         

         <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{ user.full_name }}
         <img :src="user.avatar" class="header-avatar">
  </button>
  <div>
  <b-dropdown text="Button text via Prop">
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
  </b-dropdown>


</div>

  <button type="button" class="global-button" @click="signout" :disabled="disabled"  role="button">
          {{ $t('Sign out') }}
      </button>
</div>
          
        </div>
        <div v-else>
          <button type="button" class="global-button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
            {{ $t('SignIn') }}
          </button>
        </div>
        <LangCom/>
      </div>
    </div>
  </nav>
  <modalLoginForm/>
  <modalSignUpForm/>
  <modalForgetPassword/>
  <modalVerfication />
  <modalChangePassword />
  <modalResetPassword />

  <Toast />
</template>
<script setup>
import LangCom from './LangCom.vue';
import modalLoginForm from './modal/modalLoginForm.vue';
import modalSignUpForm from './modal/modalSignUpForm.vue';
import modalForgetPassword from './modal/modalForgetPassword.vue';
import modalVerfication from './modal/modalVerfication.vue';
import modalChangePassword from './modal/modalChangePassword.vue';
import modalResetPassword from './modal/modalResetPassword.vue';

// import { useToast } from "primevue/usetoast";
// const toast = useToast();

</script>
<script>
import Toast from 'primevue/toast';

export default {
  data() {
    return{
      user: null,
      disabled : false
    }
  },
  mounted() {
    var savedUser = sessionStorage.getItem("user");
    if(savedUser){
      this.user = JSON.parse(savedUser);
    }
  },
  methods:{
    signout() {
      this.disabled = true ;
      setTimeout(() => {
          sessionStorage.removeItem('user');
          this.user = null;
                          this.$toast.add({ severity: 'success', summary: 'تم تسجيل الخروج بنجاح', life: 3000 });

      }, 1000);
    }
  },
  components:{
    Toast
  }
}
</script>
<style scoped>
</style>