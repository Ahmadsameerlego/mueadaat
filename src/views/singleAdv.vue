<template>
  <section class="p-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="ads-heading">
            <h2 class="title">{{ add.title }}</h2>
          </div>

          <div class="price">
            تكلفة الساعة :
            <span class="author-name" style="color: #fcac62; font-weight: bold"
              >{{ add.price }} ر.س</span
            >
          </div>
          <p class="description text-body mb-3">
            {{ add.desc }}
          </p>
          <div class="ads-info">
            <!-- Start First Data Ads -->
            <div class="first-data-ads">
              <div class="info-item mx-3">
                <span class="text"
                  ><i class="fa-solid fa-location-dot mx-1"></i
                  >{{ add.city_title }}</span
                >
              </div>
              <div class="info-item">
                <i class="fa-solid fa-calendar mx-1"></i
                ><span class="text">{{ add.duration }}</span>
              </div>
            </div>
            <!-- End First Data Ads -->
            <!-- Start Second Data Ads -->
            <div class="second-data-ads global-button">
              {{ add.short_desc }}
            </div>
            <!-- End Second Data Ads -->
          </div>
          <!-- Start Author -->
          <div class="author">
            <!-- Start Author Info-->
            <div class="author-info">
              <!-- Start Author Img-->
              <div class="author-img">
                <img :src="add.provider_avatar" />
              </div>
              <!-- End Author Img-->
              <!-- Start Author Information -->
              <div class="author-information">
                <router-link
                  :to="'/provider-profile/' + add.provider_id"
                  class="author-name"
                  >{{ add.provider_name }}</router-link
                >
                <div class="author-rating">
                  <span class="author-rating-text">{{
                    add.provider_rate
                  }}</span>
                  <fa icon="star" class="mx-2" style="color: #fcac62" />
                  <span class="author-rating-text"
                    >{{ add.rate_count }} تقييم</span
                  >
                </div>
              </div>
              <!-- End Author Information -->
            </div>
            <!-- End Author Info-->
            <div class="author-contact d-flex">
              <a
                :href="
                  'https://api.whatsapp.com/send?phone=' + add.provider_phone
                "
                class="chat-provider mx-2"
                target="_blank"
              >
                <i class="fa-solid fa-comment"></i>
              </a>
              <a
                :href="'tel:' + add.provider_phone"
                class="phone-provider mx-2"
              >
                <i class="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
          <!-- End Author -->

          <div class="ads-options">
            <div class="buttons">
              <button @click="shareAdd">
                <fa icon="star" />
                <span class="text">مشاركة</span>
              </button>
              <button @click="toggleFavorite">
                <fa icon="heart" :class="{ favIcon: isAddFav }" />
                <span class="text">أضف للمفضلة</span>
              </button>
            </div>
          </div>

          <span class="desc-rate mt-4 d-block fw-bold" v-if="isAuthed"
            >أضف تقييمك</span
          >

          <div
            class="add-your-rate mx-auto d-flex justify-content-center"
            v-if="isAuthed"
          >
            <div class="stars">
              <Rating v-model="value" :cancel="false" class="mb-2" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                class="form-control mb-2"
                placeholder="اكتب تعليقك هنا"
                v-model="rate"
              ></textarea>
              <div class="d-flex justify-content-center">
                <button
                  class="global-button"
                  :disabled="disabled"
                  @click.prevent="rateAdd"
                >
                  ارسال التقييم
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <GalleryAds :images="add.images" />
        </div>
      </div>
    </div>
  </section>
  <section class="p-sec">
    <div class="container">
      <div class="section-heading">
        <span class="section-title">{{ $t("RelatedTitle") }}</span>
        <h1 class="section-description">{{ $t("RelatedDesc") }}</h1>
      </div>

      <div class="row">
        <div class="col-md-4" v-for="worker in add.similer" :key="worker">
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
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.8314 12.7036L12.5 20.6562L20.1686 12.7036C21.0211 11.8196 21.5 10.6205 21.5 9.3703C21.5 6.7668 19.4648 4.65625 16.9543 4.65625C15.7487 4.65625 14.5925 5.15291 13.74 6.03696L12.5 7.32292L11.26 6.03696C10.4075 5.15291 9.25128 4.65625 8.04569 4.65625C5.53517 4.65625 3.5 6.7668 3.5 9.3703C3.5 10.6205 3.97892 11.8196 4.8314 12.7036Z"
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
        </div>
      </div>
    </div>
  </section>
  <Toast />
</template>
<script>
import axios from "axios";
import GalleryAds from "../components/global/GalleryAds.vue";
import Toast from "primevue/toast";
import Rating from "primevue/rating";

export default {
  name: "singleAdv",
  data() {
    return {
      add: {},
      isAddFav: null,
      value: 0,
      rate: "",
      disabled: false,
      provider_id: "",
      isAuthed: false,
    };
  },
  methods: {
    async getAdds() {
      await axios
        .post("https://dashboard.mueadaat.info/admin/api/show-service", {
          lang: sessionStorage.getItem("locale"),
          user_id: 1 || JSON.parse(sessionStorage.getItem("user")).data.id,
          service_id: this.$route.params.id,
        })
        .then((res) => {
          this.add = res.data.data;
          this.provider_id = res.data.data.provider_id;
          this.isAddFav = res.data.data.is_favourite;
          // console.log(res.data.data)
        });
    },
    async toggleFavorite() {
      await axios
        .post("https://dashboard.mueadaat.info/admin/api/add-to-favourite", {
          lang: sessionStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
          service_id: this.$route.params.id,
        })
        .then((res) => {
          if (res.data.key === 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.isAddFav = !this.isAddFav;
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
        });
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
    async rateAdd() {
      this.disabled = true;

      await axios
        .post("https://dashboard.mueadaat.info/admin/api/rate-provider", {
          lang: sessionStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
          service_id: this.$route.params.id,
          rate: this.value,
          desc: this.rate,
          provider_id: this.provider_id,
        })
        .then((res) => {
          if (res.data.key === 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.rate = "";
            this.value = 0;
            this.getAdds();
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
          this.disabled = false;
        });
    },
    shareAdd() {
      const url = window.location.href;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          // Notification or indication that URL has been copied
          console.log("URL copied to clipboard");
          // You can also show a toast message or any other notification
        })
        .catch((err) => {
          console.error("Failed to copy URL: ", err);
          // Handle error if copying failed
        });

      this.$toast.add({
        severity: "success",
        summary: "تم نسخ رابط الصفحة بنجاح",
        life: 3000,
      });
    },
  },
  mounted() {
    this.getAdds();
    if (sessionStorage.getItem("user")) {
      this.isAuthed = true;
    }
  },
  components: {
    GalleryAds,
    Toast,
    Rating,
  },
};
</script>

<style>
.favIcon {
  color: red !important;
}
.favIcon svg {
  fill: red !important;
}
.chat-provider {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-provider {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fcac62;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ads-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.ads-info .first-data-ads {
  display: flex;
  align-items: center;
}
.ads-info .description {
  margin-bottom: 32px;
}
.price {
  margin-bottom: 16px;
}
.ads-heading {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;
}
.title {
  font-family: "Tajawal-medium";
  display: inline-block;
}
.author {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 2px solid #ededed;
  border-radius: 16px;
  margin-bottom: 32px;
}
.author .author-info {
  display: flex;
}
.author .author-img {
  margin-left: 16px;
}
.author .author-img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.author .author-info .author-name {
  color: #fcac62;
  text-decoration: none;
  transition: all 0.3s;
}
.author .author-info .author-name:hover {
  color: #74757e;
}
.author .author-info .author-rating .author-rating-text {
  font-size: 14px;
}
.add-your-rate {
  display: flex;
  align-items: baseline;
}
.desc-rate {
  font-size: 14px;
  margin-left: 8px;
}
.stars {
  font-size: 13px;
}
.ads-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons button {
  background-color: #ccc;
  padding: 5px 16px;
  border-radius: 25px;
  border: 0;
  font-size: 14px;
  display: inline-block;
  align-items: center;
}

.buttons button:first-child {
  margin-left: 8px;
}
</style>
