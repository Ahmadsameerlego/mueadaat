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
</style>