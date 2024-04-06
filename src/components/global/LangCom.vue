<template>
  
    <div v-if="currentLang === 'en'">
      <button  @click="switchLanguage()" class="switch-lang px-2">
        <i class="fa-solid fa-globe"></i>
        <span class="mx-2">
          العربية
        </span>
      </button>
    </div>
    <div v-else>
      <button  @click="switchLanguage()" class="switch-lang px-2">
        <i class="fa-solid fa-globe"></i>
        <span class="mx-2">
          English
        </span>
      </button>
    </div>


    

</template>
<script>
export default {
  mounted() {
    var lang = sessionStorage.getItem('locale') === 'en' ? 'en' : 'ar';
    sessionStorage.setItem('locale', lang)
    this.$i18n.locale = lang
    this.updateLanguageClassInBody(lang)
  },
  methods: {
    switchLanguage() {
      const newLang = this.$i18n.locale === 'en' ? 'ar' : 'en'
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('locale', newLang)
      }
      this.$i18n.locale = newLang
      this.updateLanguageClassInBody(newLang)
      window.location.reload();

    },
    updateLanguageClassInBody(lang) {
      const body = document.querySelector('body')
      if (lang === 'ar') {
        body.classList.remove('ltr')
        body.classList.add('rtl')
      } else {
        body.classList.remove('rtl')
        body.classList.add('ltr')
      }
    }
  },
  computed: {
    currentLang() {
      return this.$i18n.locale
    }
  }
}

</script>
<style scoped>
.switch-lang{
    border: 2px solid #000 !important;
    color: #000;
    padding: 5px 0;
    min-width: 70px;
    background-color: #fff;
    border-radius: 25px;;
}
</style>
