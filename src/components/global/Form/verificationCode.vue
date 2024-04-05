<template>
  <div class="form-items">
    <!-- Start Form Content -->
    <div class="form-content">
      <!-- Start Heading -->
      <div class="form-heading">
        <h3>{{ $t("accountConfirmation") }}</h3>
        <p class="text-body">
          {{ $t("accountConfirmDesc-1") }}
          <span class="user-phone"></span>
          {{ $t("accountConfirmDesc-2") }}
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
          <!-- <input
            type="text"
            v-for="number in length"
            :key="number.id"
            v-model="otpArray[n - 1]"
            maxlength="1"
            class="inputOtb"
          /> -->
          <v-otp-input
            ref="otpInput"
            v-model:value="bindModal"
            input-classes="otp-input"
            separator=" "
            :num-inputs="4"
            :should-auto-focus="true"
            input-type="number"
            :conditionalClass="['one', 'two', 'three', 'four', 'five']"
            @on-complete="handleOnComplete"
          />
        </div>

        <div class="form-item">
          <button type="submit" class="global-button" :disabled="disabled"> ارسال</button>
        </div>
      </form>
    </div>
    <!-- End form Content -->
  </div>

  <button
    v-show="false"
    class="go-to"
    data-bs-target="#exampleModalToggle6"
    data-bs-toggle="modal"
    data-bs-dismiss="modal"
    id="btn_reset_model"
  >
    انشاء حساب
  </button>
  <Toast />
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import { ref } from "vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/AuthSrore";
import { storeToRefs } from "pinia";

let store = useAuthStore();

let { setAuthOPT } = store;
let { OPT } = storeToRefs(store);
const disabled = ref(false)
import Toast from 'primevue/toast';

import { useToast } from "primevue/usetoast";
const toast = useToast();

let formErrors = ref([]);
// let data = ref(null);
const otpInput = ref(null);
const bindModal = ref("");
let { locale } = useI18n();

// let validateForm = (e) => {
//   e.preventDefault();
//   formErrors.value = [];

//   if (!phone) {
//     formErrors.value.push("Phone can't be empty");
//   }
//   if (!formErrors.value.length) {
//     resetPassord();
//   }
// };

const handleOnComplete = (value) => {
  disabled.value = true;
  if (OPT.value) {
    axios
      .post("https://dashboard.mueadaat.info/test-mode/api/active-account", {
        code: value,
        lang: locale.value,
        user_id: OPT.value,
      })
      .then((res) => {
        if (res.data.key === 1) {
                  sessionStorage.setItem("user", JSON.stringify(res.data));
        
        toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
        setTimeout(() => {
          window.location.reload();
        }, 2000);

        } else {
                  toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });

        }
        disabled.value = false;
      });
  } else {
    const btn = document.getElementById("btn_reset_model");
    setAuthOPT(value);
    btn.click();
  }
  // axios
  //   .post("https://dashboard.mueadaat.info/test-mode/api/forget-password", {
  //     code: value,
  //     lang: locale.value,
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     data.value = response.data;
  //     if (data.value.key === 1) {
  //       console.log("welcome");
  //       console.log(
  //         "you can edit password",
  //         JSON.parse(sessionStorage.getItem("user"))
  //       );
  //       // window.location.reload();
  //       // router.push("/");
  //     } else {
  //       formErrors.value.push(data.value.msg);
  //       console.log("success", response);
  //     }
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.error("Error fetching data:", error);
  //   });
};

// let resendCode = () => {
//   axios
//     .post("https://dashboard.mueadaat.info/test-mode/api/forget-password", {
//       phone: authData.phone,
//       lang: useI18n().locale.value,
//     })
//     .then((response) => {
//       // handle success
//       this.response = response.data;
//       if (this.response.key === 1) {
//         console.log("welcome");
//         console.log(
//           "you can edit password",
//           JSON.parse(sessionStorage.getItem("user"))
//         );
//         // window.location.reload();
//         //router.push('/');
//       } else {
//         this.formErrors.push(this.response.msg);
//         console.log("success", response);
//       }
//     })
//     .catch((error) => {
//       // handle error
//       console.error("Error fetching data:", error);
//     });
// };
// resendCode();
</script>
