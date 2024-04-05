<template>
  <Carousel
    :autoplay="2000"
    v-bind="settings"
    :breakpoints="breakpoints"
    v-if="fav_item"
  >
    <Slide
      v-for="equipment in fav_item.fav_item"
      :id="equipment.id"
      :key="equipment.id"
    >
      <div class="carousel__item">
        <!-- Start Post -->
        <div class="post">
          <div class="post-img">
            <router-link to="/workers/:id">
              <img :src="equipment.first_image"
            /></router-link>
            <div class="add-favorite">
              <button
                :class="{ added: isAdded }"
                @click="addWish($event, 'added')"
              >
                <fa icon="heart" />
              </button>
            </div>
          </div>
          <!-- Start Post Data -->
          <div class="post-data">
            <!-- Start Post Title -->
            <h3 class="post-title">
              <router-link to="/workers/:id">
                {{ equipment.title }}
              </router-link>
            </h3>
            <!-- End Post Title -->
            <!-- Start Post Description -->
            <p class="post-description text-body">
              {{ equipment.desc }}
            </p>
            <!-- End Post Description -->
          </div>
          <!-- End Post Data -->
          <!-- Start Post Info -->
          <div class="post-info">
            <div class="row">
              <div class="col-sm-8">
                <!-- Start Post Place -->
                <span class="post-place text-body">
                  <fa icon="heart" /> {{ equipment.city_title }}</span
                >
                <!-- Start Post Date -->

                <span class="post-date text-body"
                  ><fa icon="heart" /> {{ equipment.unit }}</span
                >
              </div>
              <div class="col-sm-4">
                <!-- Start Post Detection -->

                <span class="detection">{{ equipment.short_desc }}</span>
              </div>
            </div>
          </div>
          <!-- End Post Info -->
        </div>
        <!-- End Post -->
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
//import equipments from '../json/equipments.json'
import axios from "axios";

export default defineComponent({
  name: "EquipmentSlider",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    fav_item: [],
    // carousel settings
    settings: {
      itemsToShow: 1,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
  methods: {
    addWish: function (event, theclass) {
      event.target.classList.toggle(theclass);
    },
  },
  mounted() {
    axios
      .get("https://dashboard.mueadaat.info/test-mode/api/home")
      .then((response) => {
        // handle success
        this.fav_item = response.data.data;
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },
});
</script>

<style scoped>
.carousel__slide--next[data-v-7b327ef6],
.carousel__slide {
  transform: none;
  margin-right: 16px;
  margin-left: 16px;
  width: 30.4% !important;
}

@media (max-width: 480px) {
  .carousel__slide,
  .carousel__slide[data-v-32ce89ea] {
    transform: none;
    margin-right: 0 !important;
    margin-left: 0 !important;
    width: 100% !important;
  }
}
.carousel__slide {
  justify-content: normal;
  align-items: normal;
}
.carousel__slide {
  justify-content: normal;
  align-items: normal;
}
body.ltr .carousel__slide {
  text-align: left !important;
}
body.rtl .carousel__slide {
  text-align: right !important;
}
.carousel__viewport {
  text-align: none;
}

.carousel__slide--prev {
  opacity: 1;
}

.carousel__slide--next {
  opacity: 1;
  transform: none;
}
</style>
