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
      <div class="post-info px-2">
        <div class="default-flex">
          <div class="display-info">
            <!-- Start Post Place -->
            <div class="post-place text-body">
              <placeIcon />{{ props.city }}
            </div>
            <!-- Start Post Date -->

            <div class="post-date text-body">
              <dateICon /> {{ props.date }}
            </div>
          </div>
          <div class="detection">{{ props.detection }}</div>
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
    async toggleFavoriteSimilar(id) {
      await axios
        .post(
          "https://dashboard.mueadaat.info/test-mode/api/add-to-favourite",
          {
            lang: localStorage.getItem("locale"),
            user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
            service_id: id,
          }
        )
        .then((res) => {
          if (res.data.key === 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            window.location.reload();
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
.post .rate{
  margin-top:16px ;
}
</style>