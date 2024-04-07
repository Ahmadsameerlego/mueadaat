<template>
  <!-- Start Column BlockItem-->
  <div class="col-md-4">
    <!-- Start Post -->
    <div class="post">
      <div class="post-img">
        <router-link :to="'/workers/' + props.id"
          ><img :src="img"
        /></router-link>
        <div class="add-favorite">
          <button
            :class="{ favIcon: props.isAdded == true }"
            @click="toggleFavoriteSimilar(props.id)"
          >
            <fa icon="heart" />
          </button>
        </div>
      </div>
      <!-- Start Post Data -->
      <div class="post-data">
        <!-- Start Post Title -->
        <h3 class="post-title">
          <router-link to="/workers/${id}">
            {{ props.title }}
          </router-link>
        </h3>
        <!-- End Post Title -->
        <!-- Start Post Description -->
        <p class="post-description text-body">
          {{ props.description }}
        </p>
        <!-- End Post Description -->
        <div class="rate" v-show="rate">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 12.0417L4.25 14.1667L5.3125 9.91667L2.125 6.375L6.72917 6.02083L8.5 2.125L10.2708 6.02083L14.875 6.375L11.6875 9.91667L12.75 14.1667L8.5 12.0417Z" stroke="#FCAC62" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <span>5</span>
        </div>
      </div>
      <!-- End Post Data -->

      <!-- Start Post Info -->
      <div class="post-info ">
        <div class="row">
          <div class="col-sm-8 d-flex">
            <!-- Start Post Place -->
            <span class="post-place text-body mx-2"
              ><placeIcon />{{ props.city }}</span
            >
            <!-- Start Post Date -->
            <span class="post-date text-body">
              <dateICon /> {{ props.date }}</span
            >
          </div>
          <div class="col-sm-4">
            <!-- Start Post Detection -->
            <span class="detection global-button px-1">{{ props.detection }}</span>
          </div>
          <!-- <div class="detection">{{ props.detection }}</div> -->
        </div>
      </div>
      <!-- End Post Info -->


    </div>
    <!-- End Post -->
  </div>
  <!-- End Column BlockItem-->
  <Toast />
</template>
<script setup>
import placeIcon from "./Icons/placeIcon.vue";
import dateICon from "./Icons/dateICon.vue";

import { defineProps } from "vue";
const props = defineProps({
  id: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  detection: {
    type: Boolean,
    required: true,
  },
  isAdded: {
    type: Boolean,
    required: true,
  },
  rate: {
    type: Boolean,
    required: false
  }
});
// function addWish(event, theclass) {
//   event.target.classList.toggle(theclass);
// }
</script>

<script>
import axios from "axios";
import Toast from "primevue/toast";

export default {
  methods: {
    async toggleFavoriteSimilar(service_id) {
      await axios
        .post(
          "https://dashboard.mueadaat.info/test-mode/api/add-to-favourite",
          {
            lang: localStorage.getItem("locale"),
            user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
            service_id: service_id,
          }
        )
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
    },
  },
  components: {
    Toast,
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
.post .rate{
  margin-top:16px ;
}
</style>