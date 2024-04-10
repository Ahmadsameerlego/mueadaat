<template>
  <section class="create-ads">
    <div class="container create-container">
      <div class="row no-padding">
        <div class="col-md-4 no-padding">
          <div class="create-image">
            <img src="../assets/create-img-1.png" />
          </div>
        </div>
        <!-- Start Column Progress -->
        <div class="col-md-8">
          <!-- Start Wrapper Stepper -->
          <div class="wrapper-stepper">
            <!-- Start Stepper -->
            <div class="stepper">
              <!-- Start Stepper Progress-->
              <div class="stepper-progress">
                <div
                  class="stepper-progress-bar"
                  :style="'width:' + stepperProgress"
                ></div>
              </div>
              <!-- End Stepper Progress-->
              <!-- Start Item -->
              <div
                class="stepper-item"
                :class="{ current: step == item, success: step >= index + 1 }"
                v-for="(item, index) in titles"
                :key="index"
              >
                <!-- Start Stepper Item Counter-->
                <div class="stepper-item-counter">
                  <fa class="icon" icon="check" />
                  <span class="number">{{ index + 1 }}</span>
                </div>
                <!-- End Stepper Item Counter-->

                <span class="stepper-item-title">
                  {{ item }}
                </span>
              </div>
            </div>

            <div class="stepper-content" v-for="item in 1" :key="item.id">
              <div class="stepper-pane">
                <!-- <adsDetails />
                <adsGallery /> -->
                <form class="creat-form">
                  <component :is="shown_component.component_name" @openNext="openNext" @images="getImages" :data="data" />
                </form>

                <div class="center-this">
                  <button
                    class="global-button"
                    @click="step--"
                    :disabled="step == 1"
                  >
                    {{$t('previous')}}
                  </button>
                  <button
                    class="global-button"
                    @click="step++"
                    :disabled="step==3"
                  >
                  {{$t('Next')}}
                  </button>
                </div>

                 <div class="main_submit d-flex justify-content-center align-items-center mt-4" v-if="step == 3">
                    <button
                      class="global-button"
                      @click.prevent="submitAdd"
                      :disabled="disabled"
                      v-if="!$route.fullPath.includes('edit')"
                    >
                      {{ $t("PostAd") }}
                    </button>
                    <!-- <button
                      v-else
                      class="global-button"
                      @click.prevent="updateAdd"
                      :disabled="disabled"
                    >
                      {{ $t("EditAd") }}
                    </button> -->
                  </div>


              </div>
              <!-- End stepper pane-->
            </div>
          </div>
          <!-- End Wrapper Stepper -->
          <div class="controls"></div>
        </div>
        <!-- End Column Progress -->
      </div>
      <!-- End Row -->
    </div>
    <!-- End Container -->
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import adsDetails from "../components/global/Form/adsDetails.vue";
import adsGallery from "../components/global/Form/adsGallery.vue";
import publicAds from "@/components/global/Form/publicAds.vue";

const components = [
  { step: "1", component_name: adsDetails, title: "تفاصيل الاعلان" },
  { step: "2", component_name: adsGallery, title: "" },
  { step: "3", component_name: publicAds, title: "" },
];
// const { t } = useI18n();

// const titles = 
const step = ref(1);
const stepperProgress = computed(() => {
  return (100 / 2) * (step.value - 1) + "%";
});
const shown_component = computed(() => {
  return components.find((component) => component.step == step.value);
});
const openButton = ref(true)
const openNext = (val) => {
  if (val == true) {
      openButton.value = false

  } else {
      openButton.value = true

  }
}
</script>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      titles: [this.$t('detils'), this.$t('images'), this.$t('publish')],
      disabled: false,
      images: null,
      data : {id : 0}
        // openButton : true
      }
  },
  methods: {
    // openNext() {
    //     this.openButton = false
    //     console.log('fff')
    //   }
    getImages(val) {
          this.images = val
      },
    async submitAdd() {
      this.disabled = true;
      const fd = new FormData(this.images);
      fd.append("lang", sessionStorage.getItem("locale"));
      fd.append("user_id", localStorage.getItem("entity_id"));
      fd.append("desc_ar", localStorage.getItem("desc_ar"));
      fd.append("short_desc_ar", localStorage.getItem("short_desc_ar"));
      fd.append("title_ar", localStorage.getItem("title_ar"));
      fd.append("price", localStorage.getItem("price"));
      fd.append("type", localStorage.getItem("type"));
      fd.append("unit", localStorage.getItem("unit"));
      fd.append("active_id", localStorage.getItem("act_id"));
      fd.append("category_id", localStorage.getItem("cat_id"));
      fd.append("city_id", localStorage.getItem("city_id"));
      // fd.append("images[]", this.images);
      // var images = [];
      fd.append("user_id", JSON.parse(sessionStorage.getItem("user")).data.id);

      await axios
        .post("https://dashboard.mueadaat.info/admin/api/store-service", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.key == 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            localStorage.removeItem("desc_ar");
            localStorage.removeItem("short_desc_ar");
            localStorage.removeItem("title_ar");
            localStorage.removeItem("price");
            localStorage.removeItem("type");
            localStorage.removeItem("active_id");
            localStorage.removeItem("category_id");
            localStorage.removeItem("images_links");

            this.data = res.data.data
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
          console.log(res);
          this.disabled = false;
        });
    },
    async updateAdd() {
      this.disabled = true;
      const fd = new FormData(this.$refs.images);
      fd.append("lang", sessionStorage.getItem("locale"));
      fd.append("user_id", localStorage.getItem("entity_id"));
      fd.append("desc_ar", localStorage.getItem("desc_ar"));
      fd.append("short_desc_ar", localStorage.getItem("short_desc_ar"));
      fd.append("title_ar", localStorage.getItem("title_ar"));
      fd.append("price", localStorage.getItem("price"));
      fd.append("type", localStorage.getItem("type"));
      fd.append("active_id", localStorage.getItem("act_id"));
      fd.append("category_id", localStorage.getItem("cat_id"));
      fd.append("unit", localStorage.getItem("unit"));
      fd.append("service_id", this.$route.params.id);

      // var images = [];
      fd.append("user_id", JSON.parse(sessionStorage.getItem("user")).data.id);

      await axios
        .post("https://dashboard.mueadaat.info/admin/api/update-service", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.key == 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            // this.$router.push('/ads')
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
          console.log(res);
          this.disabled = false;
        });
    },
    }
  }
</script>
<style scoped>
.wrapper-stepper {
  padding: 32px;
}
@media (max-width: 768px) {
  .wrapper-stepper {
    padding: 16px;
  }
}
@media (max-width: 480px) {
  .wrapper-stepper {
    padding: 8px;
  }
}
.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 0;
  margin-bottom: 32px;
}
.stepper-progress {
  position: absolute;
  background-color: #ededed;
  height: 2px;
  z-index: -1;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.stepper-progress-bar {
  position: absolute;
  
  height: 100%;
  width: 0%;
  background-color: #fcac62;
  transition: all 0.3s ease;
}
.ltr .stepper-progress-bar{
  left: 0;
}
.rtl .stepper-progress-bar{
  rtl: 0;
}
.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ededed;
  transition: all 0.3s ease;
}
.stepper-item-counter {
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  background-color: #fff;
  border: 2px solid #ededed;
  border-radius: 100%;
  position: relative;
}
@media(max-width: 468px){
  .stepper-item-counter{
    width: 32px;
    height: 32px;
  }
}
.icon {
  position: absolute;
  opacity: 0;
  scale: (0);
  width: 24px;
  transition: all 0.3s ease;
}
.number {
  font-size: 22px;
}
.stepper-item-title {
  font-size: 16px;
  position: absolute;
  bottom: -24px;
  color: #74757e;
  width: 100px;
}
@media(max-width: 486px){
  .stepper-item-title{
    font-size: 14px;
    text-align: center;
  }
}
.stepper-item.success .stepper-item-counter {
  border-color: #fcac62;
  background-color: #fcac62;
  color: #fff;
}
.stepper-item.success .stepper-item-counter .icon {
  opacity: 1;
  scale: (1);
}
.stepper-item.success .stepper-item-counter .number {
  opacity: 0;
  scale: (0);
}
.stepper-item.success .stepper-item-counter .stepper-item-title {
  color: #fcac62;
}
.stepper-item.current .stepper-item-counter {
  border-color: #fcac62;
  background-color: #fcac62;
  color: #fff;
}
.stepper-item.current .stepper-item-title {
  color: #212121;
}
.stepper-pane {
  color: #333;
  padding: 32px 0;
}
.controls {
  display: flex;
}
.global-button:disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media(max-width: 768px){
  .stepper{
    width: 85% !important;
    margin: 0 auto;
    margin-top: 32px;
  }
  .creat-form{
    margin-top: 32px;
  }
}
@media(max-width: 486px){
  .creat-form{
    padding: 0 16px;
  }
}
</style>
