<template>
  <section class="p-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="about-data">
            <div class="section-heading">
              <span class="section-title">{{ $t("About") }}</span>
              <h1 class="section-description">{{ about_us.title }}</h1>
              <h1 class="site-name">{{ $t("siteNmae") }}</h1>
            </div>
            <div class="about-text">
              <p class="text-body">{{ about_us.desc }}</p>
            </div>
            <router-link to="/about" class="global-button" v-show="showButton">
              {{ $t("knowUsMore") }}</router-link
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="about-media">
            <button
              class="play-btn"
              data-bs-toggle="modal"
              href="#appVideo"
              role="button"
            ></button>
            <img src="../../assets/about-img.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <appVideoModal />
</template>
<script>
import appVideoModal from "./modal/appVideoModal.vue";
import axios from "axios";
export default {
  name: "AboutIntro",
  components: { appVideoModal },
  props: {
    showButton: Boolean,
  },
  data: () => ({
    about_us: {},
  }),
  mounted() {
    var lang = this.$i18n.locale;
    axios
      .get("https://dashboard.mueadaat.info/admin/api/home?lang=" + lang)
      .then((response) => {
        // handle success
        this.about_us = response.data.data.about_us;
        console.log("success", response.data.data);
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style scoped>
.about-media img {
  width: 100%;
  height: 400px;
  border-radius: 150px;
}
.about-text {
  margin-bottom: 32px;
}

body {
  background: #444;
}
.about-media {
  position: relative;
  overflow: hidden;
}
.play-btn {
  width: 100px;
  height: 100px;
  position: absolute !important;
  right: 0 !important;
  left: 0 !important;
  background: radial-gradient(
    rgb(252 172 98 / 85%) 60%,
    rgba(255, 255, 255, 1) 62%
  );
  border-radius: 50%;
  position: relative;
  display: block;
  margin: 100px auto;
  box-shadow: 0px 0px 25px 3px rgb(252 172 98 / 93%);
}
/* triangle */
.play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-40%) translateY(-50%);
  transform: translateX(-40%) translateY(-50%);
  transform-origin: center center;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid #fff;
  z-index: 100;
  -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

/* pulse wave */
.play-btn:before {
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate1 2s;
  animation: pulsate1 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.75);
  top: -30%;
  left: -30%;
  background: rgba(198, 16, 0, 0);
}

@-webkit-keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
  }
}

@keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
  }
}
</style>
