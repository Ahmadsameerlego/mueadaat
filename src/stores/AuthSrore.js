import { ref } from "vue";
import { defineStore } from "pinia";

export let  useAuthStore = defineStore("auth", () => {
  const authData = ref(null);
  const OPT = ref(null)

  function setAuthData(e) {
    authData.value = e
  }
  function clearAuthData() {
    authData.value = null;
  }

  function setAuthOPT(e){OPT.value = e}

  return { authData , OPT , setAuthData , clearAuthData , setAuthOPT };
});