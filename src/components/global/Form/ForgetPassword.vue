<template>
  <div class="form-items">
    <!-- Start Form Content -->
    <div class="form-content">
      <!-- Start Heading -->
      <div class="form-heading">
        <h3>{{ $t("forgetPassword") }}</h3>
        <p class="text-body">
          هلا لا يوجد أي مشكلة يمكنك ادخال رقم جوالك بالأدنى وسيتم ارسال لك بقية
          الخطوات
        </p>
      </div>
      <!-- End Heading -->
      <form action="/about" method="post" @submit="validateForm">
        <div class="error-list">
          <div class="error" v-for="error in formErrors" :key="error.id">
            {{ error }}
          </div>
        </div>
        <div class="form-item">
          <label for="phone" class="form-item-label">{{ $t("Phone") }}</label>
          <input
            name="phone"
            class="form-item-input"
            id="phone"
            v-model="phone"
            :placeholder="$t('enterPhone')"
          />
        </div>
        {{ msg }}

        <div class="form-item">
          <input type="submit" class="global-button" value="ارسال" />
        </div>
      </form>
    </div>
    <!-- End form Content -->
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
</template>
<script setup>
import { useAuthStore } from "@/stores/AuthSrore";
import axios from "axios";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

let { setAuthData } = useAuthStore();

let data = ref(null);
let formErrors = ref([]);
let phone = ref(null);
let { locale } = useI18n();

let validateForm = (e) => {
  e.preventDefault();
  formErrors.value = [];

  if (!phone.value) {
    formErrors.value.push("Phone can't be empty");
  }
  if (!formErrors.value.length) {
    forgetPassord();
  }
};

let forgetPassord = () => {
  const btn = document.getElementById("btn_forget_model");
  axios
    .post("https://mueadaat.info/test-mode/api/forget-password", {
      phone: phone.value,
      lang: locale.value,
    })
    .then((response) => {
      // handle success
      data.value = response.data;
      if (data.value.key === 1) {
        console.log("welcome");
        console.log(
          "you can edit password",
          JSON.parse(sessionStorage.getItem("user"))
        );
        setAuthData(data.value.data);
        btn.click();
      } else {
        formErrors.value.push(data.value.msg);
        console.log("success", response);
      }
    })
    .catch((error) => {
      // handle error
      console.error("Error fetching data:", error);
    });
};
</script>