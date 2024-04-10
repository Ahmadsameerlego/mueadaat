<template>
  <section class="p-sec">
    <div class="container">
      <div class="section-heading">
        <span class="section-title">{{ $t("workersAd") }}</span>
        <h1 class="section-description">{{ $t("WorkersSliderDesc") }}</h1>
      </div>

      <Carousel
        :autoplay="2000"
        v-bind="settings"
        :breakpoints="breakpoints"
        v-if="fav_worker"
      >
        <Slide v-for="worker in fav_worker.fav_worker" :key="worker.id">
          <div class="carousel__item">
            <!-- Start Post -->
            <div class="post">
              <div class="post-img">
                <router-link :to="'/workers/' + worker.id">
                  <img :src="worker.first_image" />
                </router-link>
                <div class="add-favorite">
                  <button
                    :class="{ favIcon: worker.is_favourite == true }"
                    @click="toggleFavoriteSimilar(worker.id)"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.3314 9.04738L10 17L17.6686 9.04738C18.5211 8.16332 19 6.96429 19 5.71405C19 3.11055 16.9648 1 14.4543 1C13.2487 1 12.0925 1.49666 11.24 2.38071L10 3.66667L8.75997 2.38071C7.90749 1.49666 6.75128 1 5.54569 1C3.03517 1 1 3.11055 1 5.71405C1 6.96429 1.47892 8.16332 2.3314 9.04738Z"
                        stroke="#EDEDED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- Start Post Data -->
              <div class="post-data">
                <!-- Start Post Title -->
                <h3 class="post-title">
                  <router-link to="/workers/${id}">
                    {{ worker.title }}
                  </router-link>
                </h3>
                <!-- End Post Title -->
                <!-- Start Post Description -->
                <p class="post-description text-body">
                  {{ worker.desc }}
                </p>
                <!-- End Post Description -->
              </div>
              <!-- End Post Data -->
              <!-- Start Post Info -->
              <div class="post-info">
                <div class="default-flex">
                  <div class="display-info">
                    <!-- Start Post Place -->
                    <div class="post-place text-body">
                      <placeIcon />{{ worker.city_title }}
                    </div>
                    <!-- Start Post Date -->

                    <div class="post-date text-body">
                      <dateICon /> {{ worker.duration }}
                    </div>
                  </div>
                  <div class="detection">{{ worker.short_desc }}</div>
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
    </div>
  </section>
</template>

<script>
import placeIcon from "./Icons/placeIcon.vue";
import dateICon from "./Icons/dateICon.vue";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
export default defineComponent({
  name: "WorkersSLider",
  components: {
    placeIcon,
    dateICon,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    fav_worker: [],
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
    is_favourite: function (event, theclass) {
      event.target.classList.toggle(theclass);
    },
    async toggleFavoriteSimilar(service_id) {
      if (!sessionStorage.getItem("user")) {
        this.$toast.add({
          severity: "error",
          summary: "عليك تسجيل الدخول اولا",
          life: 3000,
        });
      } else {
        await axios
          .post("https://dashboard.mueadaat.info/admin/api/add-to-favourite", {
            lang: sessionStorage.getItem("locale"),
            user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
            service_id: service_id,
          })
          .then((res) => {
            if (res.data.key === 1) {
              this.$toast.add({
                severity: "success",
                summary: res.data.msg,
                life: 3000,
              });
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              this.$toast.add({
                severity: "error",
                summary: res.data.msg,
                life: 3000,
              });
            }
          });
      }
    },
  },

  mounted() {
    var lang = this.$i18n.locale;
    axios
      .get("https://dashboard.mueadaat.info/admin/api/home?lang=" + lang)
      .then((response) => {
        // handle success
        this.fav_worker = response.data.data;
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
  margin-right: 16px !important;
  margin-left: 16px !important;
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
