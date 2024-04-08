<template>
  <div class="section-heading">
        <span class="section-title">{{ $t("SendUsEmail") }}</span>
        <h1 class="section-description">{{ $t("feelFree") }}</h1>
      </div>
      
  <form class="form-items contact" @submit.prevent="save">
    <!-- Start Grid Two -->
    <div class="grid-two">
      <div class="form-item">
        <label for="username" class="form-label">{{$t('Name')}}</label>
        <input
          type="text"
          name="username"
          id="username"
          class="form-item-input"
          :placeholder="$t('enterName')" 
          v-model="formData.username"
          required
        />
      </div>
      <div class="form-item">
        <label for="email" class="form-label">{{ $t('Email') }}</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-item-input"
          :placeholder="$t('enterEmail')" 
          v-model="formData.email"
          required
        />
      </div>
      <div class="form-item">
        <label for="mobileNumber" class="form-label">{{$t('Phone')}}</label>
        <input
          type="tel"
          name="mobileNumber"
          class="form-item-input"
          id="mobileNumber"
          :placeholder="$t('enterPhone')" 
          v-model="formData.mobileNumber"
          required
        />
      </div>
      <div class="form-item">
        <label for="subject" class="form-label">{{$t('Subject')}}</label>
        <input
          type="text"
          name="subject"
          id="subject"
          class="form-item-input"
          :placeholder="$t('enterSubject')" 
          v-model="formData.subject"
          required
        />
      </div>
    </div>
    <!-- End Grid Two -->
    <div class="form-item">
      <label for="message" class="form-label">{{ $t('Message') }}</label>
      <textarea
        name="message"
        class="form-item-input"
        id="message"
        :placeholder="$t('enterMessage')" 
        v-model="formData.message"
        required
      ></textarea>
    </div>

    <div class="form-group d-flex justify-content-center align-items-center">
      <button type="submit" class="global-button" :disabled="disabled">
        {{$t('send')}}
      </button>
    </div>
  </form>

  <Toast />
</template>
<script setup>
import { reactive, ref } from "vue";
import Toast from "primevue/toast";
import axios from "axios";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const formData = reactive({
  username: null,
  email: null,
  subject: null,
  mobileNumber: null,
  message: null,
});
const disabled = ref(false);
const save = () => {
  disabled.value = true;
  axios
    .post("https://dashboard.mueadaat.info/test-mode/api/contact-us", {
      name: formData.username,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
      phone: formData.mobileNumber,
      lang: localStorage.getItem("locale"),
    })
    .then((res) => {
      if (res.data.key == 1) {
        toast.add({ severity: "success", summary: res.data.msg, life: 3000 });
        formData.username = "";
        formData.email = "";
        formData.subject = "";
        formData.message = "";
        formData.mobileNumber = "";
      } else {
        toast.add({ severity: "error", summary: res.data.msg, life: 3000 });
      }
      disabled.value = false;
    });
};
</script>
<style scoped>
.section-description{
    font-size: 25px !important;
}
.section-title{
  font-size: 15px !important;
}
</style>