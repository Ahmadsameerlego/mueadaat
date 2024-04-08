<template>
  <BreadCrumb
    :title="$t('Equipments')"
    :pageTitle="$t('Equipments')"
    :homePage="$t('Home')"
  />
  <section class="p-sec">
    <div class="container">
      <div class="row">
        <BlockItem
          v-for="equipment in data"
          :key="equipment.id"
          :id="equipment.id"
          :img="equipment.first_image"
          :title="equipment.title"
          :description="equipment.desc"
          :city="equipment.city_title"
          :date="equipment.date"
          :detection="equipment.short_desc"
          :isAdded="equipment.is_favourite"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
// import { ref } from "vue";
import BreadCrumb from "@/components/global/BreadCrumb.vue";
import BlockItem from "@/components/BlockItem.vue";
// import equipments from "../json/equipments.json";

// const allEquipments = ref(equipments);
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getEquips() {
      var id = null;
      if (sessionStorage.getItem("user")) {
        id = JSON.parse(sessionStorage.getItem("user")).data.id;
      }
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/services", {
          lang: localStorage.getItem("locale"),
          user_id: id,
          type: "item",
        })
        .then((res) => {
          this.data = res.data.data;
          // console.log('tag', res.data.data)
        });
    },
  },
  mounted() {
    this.getEquips();
  },
};
</script>
