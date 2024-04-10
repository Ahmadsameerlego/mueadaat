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
          <reviewsIcon class="commentIcon" />

          <p class="reviews-text">{{ item.desc }}</p>
          <div class="testimonial-user">
            <div class="testimonial-user-image">
              <img :src="item.user_avatar" alt="" />
            </div>

            <div class="testimonial-user-data">
              <h4 class="testimonial-username">{{ item.user_name }}</h4>
              <div class="testimonial-address">
                <span class="testimonial-address-text">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 10.5C10.2426 10.5 11.25 9.49264 11.25 8.25C11.25 7.00736 10.2426 6 9 6C7.75736 6 6.75 7.00736 6.75 8.25C6.75 9.49264 7.75736 10.5 9 10.5Z"
                      stroke="#74757E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 15.75C12.3137 14.25 15 11.5637 15 8.25C15 4.93629 12.3137 2.25 9 2.25C5.68629 2.25 3 4.93629 3 8.25C3 11.5637 5.68629 14.25 9 15.75Z"
                      stroke="#74757E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {{ item.city_title }}</span
                >
              </div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 12.0417L4.25 14.1667L5.3125 9.91667L2.125 6.375L6.72917 6.02083L8.5 2.125L10.2708 6.02083L14.875 6.375L11.6875 9.91667L12.75 14.1667L8.5 12.0417Z"
                  stroke="#FCAC62"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

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
    var lang = this.$i18n.locale;
    axios
      .get("https://dashboard.mueadaat.info/admin/api/home?lang=" + lang)
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
  box-shadow: 0 0 10px rgb(0 0 0 / 8%);
  transition: all 0.4s;
  position: relative;
  margin-bottom: 16px;
  border-radius: 50px 20px;
  padding: 32px;
  margin-top: 32px;
}
.testimonial-block:hover {
  box-shadow: 0 0 30px rgb(0 0 0 / 8%);
}
.reviews-text {
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 32px;
  color: #74757e;
}
.testimonial-user {
  display: flex;
  margin-top: 32px;
}
.ltr .testimonial-user {
  direction: ltr !important;
}
.rtl .testimonial-user {
  direction: rtl !important;
}
.testimonial-user .testimonial-user-image {
  width: 55px;
  height: 55px;
}
.rtl .testimonial-user .testimonial-user-image {
  margin-left: 16px !important;
}
.ltr .testimonial-user .testimonial-user-image {
  margin-right: 16px !important;
}
.testimonial-user .testimonial-user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 1px 1px 30px 2px rgb(0 0 0 / 10%);
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
  font-size: 15px;
  color: #74757e;
}

.carousel__slide--next[data-v-7b327ef6],
.carousel__slide {
  transform: none;
  margin-right: 16px !important;
  margin-left: 16px !important;
  width: 31% !important;
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
@media(max-width: 486px){
  body.ltr .carousel__slide{
    margin-right: 20px !important;
  }
  .commentIcon{
    margin-bottom: 16px !important;
  }

  
}
</style>
