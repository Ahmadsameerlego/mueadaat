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
      <form method="post" @submit.prevent="validateForm">
        <div class="error-list">
          <!-- <div class="error" v-for="error in formErrors" :key="error.id">
            {{ error }}
          </div> -->
        </div>
        <div class="form-item">
          <label for="password" class="form-item-label">{{
            $t("Password")
          }}</label>
          <input
            name="password"
            class="form-item-input"
            id="password"
            v-model="password"
            :placeholder="$t('enterPassword')"
          />
        </div>
        <div class="form-item">
          <label for="password" class="form-item-label">{{
            $t("Password")
          }}</label>
          <input
            name="password"
            class="form-item-input"
            id="password"
            v-model="repassword"
            :placeholder="$t('enterPassword')"
          />
        </div>
        {{ msg }}

        <div class="form-item">
          <button class="global-button" :disabled="disabled">تغيير</button>
        </div>
      </form>
    </div>
    <!-- End form Content -->
    <Toast />
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/AuthSrore";
import { storeToRefs } from "pinia";
import Toast from "primevue/toast";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const disabled = ref(false);
let store = useAuthStore();

let { OPT, authData } = storeToRefs(store);
let { locale } = useI18n();
let password = ref(null);
let repassword = ref(null);
let formErrors = ref([]);

let validateForm = () => {
  // e.preventDefault();
  // formErrors.value = [];
  // if (!password.value) {
  //   formErrors.value.push("Phone can't be empty");
  // }
  // if (!repassword.value) {
  //   formErrors.value.push("Phone can't be empty");
  // }

  // if (password.value !== repassword.value) {
  //   formErrors.value.push("password must be matched");
  // }

  // if (!formErrors.value.length) {
  resetPassord();
  // }
};

let resetPassord = () => {
  disabled.value = true;
  axios
    .post("https://dashboard.mueadaat.info/test-mode/api/reset-password", {
      user_id: authData.value.id,
      code: OPT.value,
      password: password.value,
      lang: locale.value,
    })
    .then((res) => {
      // handle success
      if (res.data.key === 1) {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        toast.add({ severity: "success", summary: res.data.msg, life: 3000 });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        formErrors.value.push(res.data.msg);
        console.log("success", res.data);
        toast.add({ severity: "error", summary: res.data.msg, life: 3000 });
      }
      disabled.value = false;
    })
    .catch((error) => {
      // handle error
      console.error("Error fetching data:", error);
    });
};
</script>
