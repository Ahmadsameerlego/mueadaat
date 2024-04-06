<template>
  <div
    id="carouselExampleControlsNoTouching"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-inner" v-if="sliders">
      <div class="carousel-item" v-for="item in sliders" :key="item.id">
        <img :src="item.image" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sliders: null,
    };
  },
  mounted() {
    var lang = this.$i18n.locale;
    axios
      .get("https://dashboard.mueadaat.info/test-mode/api/home?lang=" + lang)
      .then((response) => {
        // handle success
        this.sliders = response.data.data;
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
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
