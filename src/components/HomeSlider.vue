<template>
  <swiper
    class="mySwiper"
        :modules="modules"
    :spaceBetween="30"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="image in responseData" :key="image">
      <img :src="image.image" alt="" style="width:100%;height:400px;object-fit:cover" class="slide-image" />
    </swiper-slide>
  </swiper>
</template>
<script>
import axios from "axios";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default {
  data() {
    return {
      responseData: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    axios
      .get("https://dashboard.mueadaat.info/test-mode/api/home")
      .then((response) => {
        // handle success
        this.responseData = response.data.data.sliders;
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },

  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style scoped>
.carousel-inner,
.carousel-item {
  width: 100%;
  height: 600px;
}
.carousel-inner .carousel-item img {
  width: 100%;
  height: 100%;
}
@media (max-width: 375px) {
  .carousel-inner,
  .carousel-item {
    width: 100%;
    height: 300px;
  }
}
</style>
<style>
.slide-image{
  border-top-left-radius: 150px;
  border-bottom-right-radius: 150px;
}
.p-carousel {
  direction: ltr !important;
}
.p-carousel-next,
.p-carousel-prev {
  display: none !important  ;
}
</style>
