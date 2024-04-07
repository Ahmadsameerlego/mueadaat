<template>
  <BreadCrumb
    :title="$t('searchFilterTitle')"
    style="background-color:#fcac62"
    class="py-5"
  />

  <div class="total_filter">
    {{ data.length  }} نتيجة حول بحثك
  </div>
  <div class="form-items p-sec" style="background:#f9f9f9">
    <form>
      <div class="container">
        <div class="row align-items-center">
          <!-- Start Column -->
          <div class="col-md-2">
            <!-- Start Form Item -->
            <div
              class="form-item form-item-search d-flex flex-column justify-content-start align-items-start"
            >
              <div>
                <label for="" class="form-item-label">المكان</label>
              </div>
              <select
                class="form-select form-item-input"
                aria-label="Default select example"
                v-model="city_id"
                @change="getData"
                style="    background: #f0f0f0;"
              >
                <option selected value="" hidden disabled>اختر موقعك</option>
                <option v-for="city in cities" :key="city" :value="city.id">{{city.title}}</option>
              </select>
            </div>
            <!-- End Form Item -->
          </div>
          <!-- End Column -->
          <!-- Start Column -->
          <div class="col-md-4" style="    margin-top: 22px;">
            <!-- Start Form Item -->
            <div class="form-item form-item-search">
              <input
                placeholder="ادخل هنا ماتريد البحث عنه"
                type="search"
                class="form-item-input"
                v-model="title"
                @input="getData"
              />
            </div>
            <!-- End Form Item -->
          </div>
          <!-- End Column -->
          <!-- Start Column -->
          <div class="col-md-2" style="    margin-top: 22px;">
            <!-- Start Form Item -->
            <div class="form-item form-item-search">
              <div class="categori-switch">
                <button
                  class="category-button"
                  :class="{ active: type == 'worker' }"
                  @click.prevent="toggleType('worker')"
                >
                  عمالة
                </button>
                <button
                  class="category-button"
                  :class="{ active: type == 'item' }"
                  @click.prevent="toggleType('item')"
                >
                  معدات
                </button>
              </div>
            </div>
            <!-- End Form Item -->
          </div>
          <!-- End Column -->
          <div class="col-md-2">
            <!-- Start Form Item -->
            <div class="form-item form-item-search d-flex flex-column justify-content-start align-items-start">
              <label for="" class="form-item-label">نوع الخدمة </label>
              <select
                class="form-select form-item-input"
                aria-label="Default select example"
                v-model="cat_id"
                @change="getData"
                style="    background: #f0f0f0;"
              >
                <option selected disabled value="" hidden>اختر نوع الخدمة</option>
                <option v-for="cat in categories" :key="cat" :value="cat.id">{{cat.title}}</option>
              </select>
            </div>
            <!-- End Form Item -->
          </div>
          <!-- End Column -->
          <!-- Start Column -->
          <div class="col-md-2">
            <!-- Start Form Item -->
            <div class="form-item form-item-search d-flex flex-column justify-content-start align-items-start">
              <label for="" class="form-item-label">نشاط العامل </label>
              <select
                class="form-select form-item-input"
                aria-label="Default select example"
                v-model="act_id"
                @change="getData"
                style="    background: #f0f0f0;"
              >
                <option selected hidden disabled value="">اختر نشاط العمل</option>
                <option v-for="act in actives" :key="act" :value="act.id">{{act.title}}</option>
              </select>
            </div>
            <!-- End Form Item -->
          </div>
          <!-- End Column -->
        </div>
      </div>
    </form>
  </div>

  <div class="page-container workers-area">
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

        <Message severity="warn" v-if="data.length===0">لا توجد اعلانات مطابقة</Message>

      </div>
      <div class="loader" v-if="isDataGet">
        <ProgressSpinner />
      </div>
    </div>

  </div>
</template>
<script setup>
// import { ref } from "vue";
import BreadCrumb from "@/components/global/BreadCrumb.vue";
import BlockItem from "@/components/BlockItem.vue";
// import workers from "../json/workers.json";
// import searchFilter from "../components/global/Form/searchFilter.vue";
// const ourworks = ref(workers);
</script>

<script>
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';

import axios from "axios";
export default {
  data() {
    return {
      data: [],
        type: "worker",
      cities : [],
      categories : [],
        actives: [],
        city_id: '',
        cat_id: '',
        act_id: '',
        title: '',
        isDataGet : false
    };
  },
  methods: {
      async getEquips() {
          this.isDataGet = true;
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/services", {
          lang: localStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
            type: this.type,
            city_id: this.city_id,
            category_id: this.cat_id,
            active_id: this.act_id,
          title : this.title
        })
        .then((res) => {
            this.data = res.data.data;
          this.isDataGet = false;
          // console.log('tag', res.data.data)
        });
    },
    async getFilters() {
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/app_data", {
          lang: localStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
        })
        .then((res) => {
          this.cities = res.data.data.cities;
          this.categories = res.data.data.categories;
          this.actives = res.data.data.actives;
        });
    },
    toggleType(type) {
        this.type = type;
        this.getEquips();
      },
      getData() {
                this.getEquips();

    }
  },
    components: {
        ProgressSpinner,
        Message
  },
  mounted() {
    this.getEquips();
    this.getFilters();
  },
};
</script>

<style >
.total_filter{
        margin: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 27%;
    right: 45%;
    background: #fff;
    border-radius: 10px;
    padding: 3px 10px;

}
.p-message{
        padding: 20px;
}
.loader{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3333333f;
}
.page-container {
    position: relative;
  padding: 60px 0;
}

.categori-switch {
  border-radius: 20px;
  padding: 4px 5px;
  background: #f0f0f0;
  button {
    padding: 4px 10px;
    width: 70px;
  }
}
.categori-switch button.active {
  background-color: #fff !important;
  border-radius: 20px;
}
.form-select{
    --bs-form-select-bg-img : none !important
}
</style>
