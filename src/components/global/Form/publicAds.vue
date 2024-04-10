<template>
  <div class="view-ads">
    <p class="text-body">{{ $t("watchAd") }}</p>
    <svg
      width="48"
      height="73"
      viewBox="0 0 48 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.4117 47.9471H8.16172M8.16172 53.5012H40.4117M40.4117 59.5033H24.8959M42.9021 2.0625H5.09797C4.14761 2.0625 3.23617 2.44003 2.56417 3.11203C1.89216 3.78404 1.51463 4.69547 1.51463 5.64583V62.8C1.51463 63.7504 1.89216 64.6618 2.56417 65.3338C3.23617 66.0058 4.14761 66.3833 5.09797 66.3833H37.8855L46.5571 71.7583V5.46666C46.5571 4.51631 46.1796 3.60487 45.5076 2.93287C44.8356 2.26086 43.9242 1.88333 42.9738 1.88333L42.9021 2.0625ZM40.4117 8.02875V38.3079H7.58838V8.02875H40.4117Z"
        stroke="#FCAC62"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

  
  </div>

  <div v-if="data.id!=0" style="    margin: auto;
    display: flex;
    justify-content: center;
">
      <router-link :to="'/workers/'+data.id" style="    color: #ef7606;
    font-size: 19px;
    font-weight: bold;
    border-bottom: 2px solid #fcac62;
    margin-bottom: 20px;">
        اذهب للاعلان
    </router-link>
  </div>
 

  <!-- <div class="main_submit">
    <button class="global-button" @click.prevent="submitAdd">
      <router-link to="/"> {{ $t("backHome") }} </router-link>
    </button>
  </div> -->

  <Toast />
</template>
<script>
import Toast from "primevue/toast";

// import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    // async submitAdd() {
    //   this.disabled = true;
    //   const fd = new FormData(this.$refs.images);
    //   fd.append("lang", sessionStorage.getItem("locale"));
    //   fd.append("user_id", localStorage.getItem("entity_id"));
    //   fd.append("desc_ar", localStorage.getItem("desc_ar"));
    //   fd.append("short_desc_ar", localStorage.getItem("short_desc_ar"));
    //   fd.append("title_ar", localStorage.getItem("title_ar"));
    //   fd.append("price", localStorage.getItem("price"));
    //   fd.append("type", localStorage.getItem("type"));
    //   fd.append("unit", localStorage.getItem("unit"));
    //   fd.append("active_id", localStorage.getItem("act_id"));
    //   fd.append("category_id", localStorage.getItem("cat_id"));
    //   // var images = [];
    //   fd.append("user_id", JSON.parse(sessionStorage.getItem("user")).data.id);

    //   await axios
    //     .post("https://dashboard.mueadaat.info/admin/api/store-service", fd, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.key == 1) {
    //         this.$toast.add({
    //           severity: "success",
    //           summary: res.data.msg,
    //           life: 3000,
    //         });
    //         sessionStorage.removeItem("desc_ar");
    //         sessionStorage.removeItem("short_desc_ar");
    //         sessionStorage.removeItem("title_ar");
    //         sessionStorage.removeItem("price");
    //         sessionStorage.removeItem("type");
    //         sessionStorage.removeItem("active_id");
    //         sessionStorage.removeItem("category_id");
    //         sessionStorage.removeItem("images_links");
    //       } else {
    //         this.$toast.add({
    //           severity: "error",
    //           summary: res.data.msg,
    //           life: 3000,
    //         });
    //       }
    //       console.log(res);
    //       this.disabled = false;
    //     });
    // },
    // async updateAdd() {
    //   this.disabled = true;
    //   const fd = new FormData(this.$refs.images);
    //   fd.append("lang", sessionStorage.getItem("locale"));
    //   fd.append("user_id", localStorage.getItem("entity_id"));
    //   fd.append("desc_ar", localStorage.getItem("desc_ar"));
    //   fd.append("short_desc_ar", localStorage.getItem("short_desc_ar"));
    //   fd.append("title_ar", localStorage.getItem("title_ar"));
    //   fd.append("price", localStorage.getItem("price"));
    //   fd.append("type", localStorage.getItem("type"));
    //   fd.append("active_id", localStorage.getItem("act_id"));
    //   fd.append("category_id", localStorage.getItem("cat_id"));
    //   fd.append("unit", localStorage.getItem("unit"));
    //   fd.append("service_id", this.$route.params.id);

    //   // var images = [];
    //   fd.append("user_id", JSON.parse(sessionStorage.getItem("user")).data.id);

    //   await axios
    //     .post("https://dashboard.mueadaat.info/admin/api/update-service", fd, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.key == 1) {
    //         this.$toast.add({
    //           severity: "success",
    //           summary: res.data.msg,
    //           life: 3000,
    //         });
    //         // this.$router.push('/ads')
    //       } else {
    //         this.$toast.add({
    //           severity: "error",
    //           summary: res.data.msg,
    //           life: 3000,
    //         });
    //       }
    //       console.log(res);
    //       this.disabled = false;
    //     });
    // },
  },
  components: {
    Toast,
  },
   props: {
    data : Object
  },
};
</script>
<style scoped>
.main_submit {
  display: flex;
  justify-content: center;
  /* margin-top: 100px; */
  transform: translateY(82px);
}
.view-ads {
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
}
.view-ads svg {
  margin: 0 auto;
}
.view-ads .text-body {
  width: 100%;
  text-align: center;
  margin-bottom: 16px !important;
}
</style>
