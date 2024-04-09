<template>
  <div class="form-items">
    <div class="row no-padding">
      <div class="col-md-8 no-padding">
        <div class="form-image">
          <img src="../../../assets/create-img-1.png" />
        </div>
      </div>
      <!-- Start Column -->
      <div class="col-md-4 no-padding">
        <!-- Start Form Content -->
        <div class="form-content">
          <!-- Start Heading -->
          <div class="form-heading">
            <h3> {{  $t('register')  }} </h3>
            <p class="text-body">
              {{  $t('registerDesc')  }}
            </p>
          </div>
          <!-- End Heading -->
          <form action="#" @submit.prevent="validateForm">
            <div class="error-list">
              <div
                class="error text-danger"
                v-for="error in formErrors"
                :key="error.id"
              >
                {{ error }}
              </div>
            </div>

            <div class="form-item">
              <label for="first_name" class="form-item-label">{{
                $t("Name")
              }}</label>
              <input
                type="text"
                name="first_name"
                class="form-item-input"
                id="first_name"
                v-model="first_name"
                :placeholder="$t('enterName')"
                required
              />
            </div>
            <div class="form-item">
              <label for="email" class="form-item-label">{{
                $t("Email")
              }}</label>
              <input
                type="email"
                name="email"
                class="form-item-input"
                id="email"
                v-model="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div class="form-item">
              <label for="phone" class="form-item-label">{{
                $t("Phone")
              }}</label>
              <input
                type="phone"
                name="phone"
                class="form-item-input"
                id="phone"
                v-model="phone"
                :placeholder="$t('enterPhone')"
                required
              />
            </div>
            <div class="form-item">
              <label for="password" class="form-item-label">{{
                $t("Password")
              }}</label>
              <input
                class="form-item-input"
                type="password"
                id="password"
                name="password"
                v-model="password"
                :placeholder="$t('enterPassword')"
                required
              />
            </div>

            <div class="form-item">
              <button class="global-button" :disabled="disabled">
                {{ $t('register')  }}
              </button>
            </div>
          </form>

          <div class="new-account">
            <p class="text-body">{{ $t("haveAccount") }}</p>
            <a
              class="go-to"
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
              > {{ $t('signIn') }} </a
            >
          </div>
        </div>
        <!-- End form Content -->
      </div>
      <!-- End Column-->
    </div>
  </div>

  <button
    v-show="false"
    class="go-to"
    data-bs-target="#exampleModalToggle4"
    data-bs-toggle="modal"
    data-bs-dismiss="modal"
    id="btn_forget_model"
  >
    انشاء حساب
  </button>
  <Toast />
</template>
<script setup>
import { useAuthStore } from "@/stores/AuthSrore";
import axios from "axios";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import Toast from "primevue/toast";

import { useToast } from "primevue/usetoast";
const toast = useToast();
const disabled = ref(false);

let { setAuthData, setAuthOPT } = useAuthStore();
let { locale } = useI18n();
let data = ref(null);
let formErrors = ref(null);
let first_name = ref(null);
let email = ref(null);
let phone = ref(null);
let password = ref(null);
// let minChars = ref(6);
// let maxChars = ref(10);

let validateForm = () => {
  // e.preventDefault();
  // formErrors.value = [];
  // if (!first_name.value) {
  //   formErrors.value.push("name can't be empty");
  // }
  // // Check if Emil is Empty
  // if (!email.value) {
  //   formErrors.value.push("Email can't be empty");
  // }
  // if (!phone.value) {
  //   formErrors.value.push("Email can't be empty");
  // }
  // if (!password.value) {
  //   formErrors.value.push("Password can't be empty");
  // }
  // if (password.value && password.value.length < minChars.value) {
  //   formErrors.value.push(
  //     "Password can't be akal" + minChars.value + "Charchs"
  //   );
  // }
  // if (formErrors.value.length) {
  signUp();
  // }
};

let signUp = () => {
  const btn = document.getElementById("btn_forget_model");
  disabled.value = true;
  axios
    .post("https://dashboard.mueadaat.info/test-mode/api/register", {
      first_name: first_name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      lang: locale.value,
    })
    .then((response) => {
      // handle success
      data.value = response.data;
      if (data.value.key === 1) {
        toast.add({ severity: "success", summary: data.value.msg, life: 3000 });
        // sessionStorage.setItem("user", JSON.stringify(data.value.data));
        // console.log(
        //   "logged in user",
        //   JSON.parse(sessionStorage.getItem("user"))
        // );
        // window.location.reload();
        //router.push('/');
        setAuthData(data.value.data);
        setAuthOPT(data.value.data.id);
        btn.click();
      } else {
        toast.add({ severity: "error", summary: data.value.msg, life: 3000 });
        // formErrors.value.push(data.value.msg);
      }
      disabled.value = false;
    })
    .catch((error) => {
      // handle error
      console.error("Error fetching data:", error);
    });
};
</script>
