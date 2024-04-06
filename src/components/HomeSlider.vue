<template>
  <!-- <div
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
  </div> -->
  <Carousel
    :value="responseData"
    :numVisible="1"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
  >
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2 p-3">
        <div class="mb-3">
          <div class="relative mx-auto">
            <img
              :src="slotProps.data.image"
              :alt="slotProps.data.name"
              class="w-full border-round"
              style="width: 100%; height: 400px; object-fit: cover"
            />
          </div>
        </div>
        <!-- <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-content-between align-items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div> -->
      </div>
    </template>
  </Carousel>
</template>
<script>
import axios from "axios";
import Carousel from "primevue/carousel";

export default {
  data() {
    return {
      responseData: null,
    };
  },
  components: {
    Carousel,
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
.p-carousel{
      direction: ltr !important;
}
</style>