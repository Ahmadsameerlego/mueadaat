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
            <h3>{{ $t("welcomeBack") }}</h3>
            <p class="text-body">
              {{ $t("loginEmailTitle") }}
            </p>
          </div>
          <!-- End Heading -->
          <form action="#" method="post" @submit="validateForm">
            <!-- <div class="error-list">
              <div class="error" v-for="error in formErrors" :key="error.id">
                {{ error }}
              </div>
            </div> -->
            <!-- <div class="form-item">
              <label for="email" class="form-item-label">{{
                $t("Email")
              }}</label>
              <input
                type="email"
                name="email"
                class="form-item-input"
                id="email"
                v-model="email"
                :placeholder="$t('enterEmail')"
              />
            </div> -->
            <div class="form-item">
              <label for="phone" class="form-item-label">{{
                $t("Phone")
              }}</label>
              <input
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
              <a
                class="forget-button"
                data-bs-toggle="modal"
                href="#exampleModalToggle3"
                role="button"
              >
                {{ $t("forgetPassword") }}
              </a>
            </div>

            <div class="form-item">
              <button type="submit" :disabled="disabled" class="global-button">
                تسجيل الدخول
              </button>
            </div>
          </form>

          <div class="new-account">
            <p class="text-body">{{ $t("NohaveAccount") }}</p>

            <button
              class="go-to"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              type="button"
            >
              انشاء حساب
            </button>
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

let { setAuthData, setAuthOPT } = useAuthStore();

let data = ref(null);
let formErrors = ref([]);
const disabled = ref(false);
// let email = ref(null);
let phone = ref(null);
let password = ref(null);
// let minChars = ref(6);
let { locale } = useI18n();
// let maxChars = ref(10);

let validateForm = (e) => {
  e.preventDefault();
  formErrors.value = [];
  // Check if Emil is Empty
  // if (!email.value) {
  //   formErrors.value.push("Email can't be empty");
  // // }
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
  // if (!formErrors.value.length) {
  login();
  // }
};

let login = () => {
  const btn = document.getElementById("btn_forget_model");
  disabled.value = true;
  axios
    .post("https://dashboard.mueadaat.info/test-mode/api/login", {
      // email: email.value,
      phone: phone.value,
      password: password.value,
      lang: locale.value,
    })
    .then((response) => {
      // handle success
      data.value = response.data;
    })
    .then(() => {
      if (data.value.key === 1) {
        toast.add({ severity: "success", summary: data.value.msg, life: 3000 });

        if (data.value.status == "active") {
          sessionStorage.setItem("user", JSON.stringify(data.value));
          console.log(
            "logged in user",
            JSON.parse(sessionStorage.getItem("user"))
          );
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          console.log(data.value.data.id);
          axios
            .post("https://dashboard.mueadaat.info/test-mode/api/resend-code", {
              user_id: data.value.data.id,
              lang: locale.value,
            })
            .then((res) => {
              setAuthData(res.data);
              setAuthOPT(data.value.data.id);
              btn.click();
            });
        }
        // email.value = null
        password.value = null;
        phone.value = null;
      } else {
        toast.add({ severity: "error", summary: data.value.msg, life: 3000 });
        formErrors.value.push(data.value.msg);
      }

      disabled.value = false;
    })
    .catch((error) => {
      // handle error
      console.error("Error fetching data:", error);
    });
};
// components:{
//   Toast
// }
</script>


