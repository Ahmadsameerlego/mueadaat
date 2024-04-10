<template>
  <BreadCrumb
    :title="$t('policyTitle')"
    :pageTitle="$t('policyTitle')"
    :homePage="$t('Home')"
  />

  <section class="p-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="trim-title">{{ data.title }}</h2>
          <p class="trim-text text-body">
            {{ data.desc }}
          </p>
        </div>
        <div class="col-md-6">
          <img class="trim-img" src="https://picsum.photos/id/55/300/300" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import BreadCrumb from "@/components/global/BreadCrumb.vue";
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async getEquips() {
      await axios
        .post("https://dashboard.mueadaat.info/admin/api/page", {
          lang: sessionStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
          title: "policy",
        })
        .then((res) => {
          this.data = res.data.data.page;
          // console.log('tag', res.data.data)
        });
    },
  },
  mounted() {
    this.getEquips();
  },
};
</script>

<style scoped>
.trim-title {
  font-size: 25px;
  margin-bottom: 16px !important;
}
.trim-img {
  width: 100%;
  height: 300px;
  border-radius: 20px;
}
</style>
