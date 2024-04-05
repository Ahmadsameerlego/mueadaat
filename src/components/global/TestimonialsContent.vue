<template>
  <Carousel
    :autoplay="2000"
    v-bind="settings"
    :breakpoints="breakpoints"
    v-if="reviews"
  >
    <Slide v-for="item in reviews.reviews" :id="item.id" :key="item.id">
      <div class="carousel__item">
        <div class="testimonial-block">
          <reviewsIcon />

          <p class="reviews-text">{{ item.desc }}</p>
          <div class="testimonial-user">
            <div class="testimonial-user-image">
              <img :src="item.user_avatar" alt="" />
            </div>

            <div class="testimonial-user-data">
              <h4 class="testimonial-username">{{ item.user_name }}</h4>
              <div class="testimonial-address">
                <span class="testimonial-address-text">
                  {{ item.city_title }}</span
                >
              </div>
              {{ item.rate }}
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script>
import reviewsIcon from "../Icons/reviewsIcon.vue";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
export default defineComponent({
  name: "TestimonialsContent",
  components: {
    reviewsIcon,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    reviews: [],
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

  mounted() {
    axios
      .get("https://dashboard.mueadaat.info/test-mode/api/home")
      .then((response) => {
        // handle success
        this.reviews = response.data.data;
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },
});
</script>
<style scoped>
.icon {
  margin-bottom: 32px;
}
.testimonial-block {
  background-color: #fff;
  box-shadow: 1px 1px 5px 2px rgb(0 0 0 / 17%);
  transition: all 0.3s;
  position: relative;
  margin-bottom: 16px;
  border-radius: 50px 20px;
  padding: 32px;
}
.reviews-text {
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 32px;
  color: #74757e;
}
.testimonial-user {
  display: flex;
}
.testimonial-user .testimonial-user-image {
  width: 55px;
  height: 55px;
  margin-left: 8px;
}
.testimonial-user .testimonial-user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 2px rgb(0 0 0 / 10%);
}
.testimonial-username {
  font-size: 18px;
  padding: 0;
  margin: 0;
  margin-bottom: 2px;
}
.testimonial-address-text {
  display: inline-block;
  padding: 0;
  margin: 0;
}

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
