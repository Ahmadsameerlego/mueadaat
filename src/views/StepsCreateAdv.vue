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
                  <span class="numb">{{ index + 1 }}</span>
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
                <component :is="shown_component.component_name" @openNext="openNext" />

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
                    :disabled="openButton"
                  >
                  {{$t('Next')}}
                  </button>
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
export default {
  data() {
    return {
      titles: [this.$t('detils'), this.$t('images'), this.$t('publish')],
        // openButton : true
      }
  },
  methods: {
    // openNext() {
    //     this.openButton = false
    //     console.log('fff')
    //   }
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
  left: 0;
  height: 100%;
  width: 0%;
  background-color: #fcac62;
  transition: all 0.3s ease;
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
</style>
