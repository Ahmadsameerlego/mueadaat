<template>
  <div
    id="carouselExampleControlsNoTouching"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-inner" v-if="responseData">
      <div class="carousel-item" v-for="item in responseData" :key="item.id">
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
      responseData: null,
    };
  },
  mounted() {
    axios
      .get("https://dashboard.mueadaat.info/test-mode/api/home")
      .then((response) => {
        // handle success
        this.responseData = response.data;
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
