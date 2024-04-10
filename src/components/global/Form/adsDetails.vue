<template>
  <div class="form-items">
    <form>
      <div class="form-item">
        <label for="fullName" class="form-item-label">{{$t('adsName')}}</label>
        <input
          type="text"
          name="fullName"
          class="form-item-input"
          id="fullName"
          v-model="title_ar"
          :placeholder=" $t('enterAdsName') "
        />
      </div>
      <div class="grid-two">
        <div class="form-item">
          <label for="email" class="form-item-label">{{ $t('advantageLabel') }}</label>
          <input
            type="email"
            name="email"
            class="form-item-input"
            id="email"
            v-model="short_desc_ar"
            :placeholder="$t('enterAdvantage')"
          />
        </div>
        <div class="form-item">
          <label for="mobileNumber" class="form-item-label">{{$t('priceLabel')}}</label>
          <input
            type="email"
            name="email"
            class="form-item-input"
            id="mobileNumber"
            v-model="price"
            :placeholder="$t('enterPrice')"
          />
        </div>
 <div
        class="form-item form-item-search d-flex flex-column justify-content-start align-items-start"
      >
        <label for="" class="form-item-label">{{ $t('servicesTypeLabel') }} </label>
        <select
          class="form-select form-item-input"
          aria-label="Default select example"
          v-model="cat_id"
        >
          <option selected disabled value="" hidden>{{$t('chooseServicesType')}}</option>
          <option v-for="cat in categories" :key="cat" :value="cat.id">
            {{ cat.title }}
          </option>
        </select>
      </div>
      <div
        class="form-item form-item-search d-flex flex-column justify-content-start align-items-start"
      >
        <label for="" class="form-item-label">{{ $t('workActivity') }}</label>
        <select
          class="form-select form-item-input"
          aria-label="Default select example"
          v-model="act_id"
        >
          <option selected hidden disabled value="">{{$t('chooseWorkActivity')}}</option>
          <option v-for="act in actives" :key="act" :value="act.id">
            {{ act.title }}
          </option>
        </select>
      </div>
      </div>

      <div class="form-item">
        <label class="form-item-label">{{ $t('costSystem') }}</label>
        <div class="flex-this">
          <div class="form-check">
            <input type="radio" v-model="unit" value="daily" />
            <label>{{$t('dayCost')}}</label>
          </div>

          <div class="form-check">
            <input type="radio" v-model="unit" value="total" />
            <label>{{$t('hourCost')}}</label>
          </div>
        </div>
      </div>

      <!-- Start Form Item -->

      <div class="form-item">
        <label class="form-item-label">{{ $t('costSystem') }}</label>
        <select name="" id="">
          <option value="المدينة المنورة">المدينة المنورة</option>
          <option value="الرياض">الرياض</option>
          <option value="مكه">مكه</option>
          <option value="جدة">جدة</option>
        </select>
        
      </div>

      <!-- Start Form Item -->
     

      <div class="form-item">
        <label for="details" class="form-label">{{ $t('advDetailsLabel') }}</label>
        <textarea
          name="details"
          class="form-item-input"
          id="message"
          :placeholder="$t('enterAdvDetails')"
          v-model="desc_ar"
        ></textarea>
      </div>

    
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title_ar: "",
      desc_ar: "",
      unit: "",
      price: "",
      short_desc_ar: "",
      cat_id: "",
      act_id: "",
       categories: [],
      actives: [],
    };
  },
  watch: {
    title_ar() {
      localStorage.setItem("title_ar", this.title_ar);
    },
    desc_ar() {
      localStorage.setItem("desc_ar", this.desc_ar);
      if (this.title_ar !== '' || this.desc_ar !== '' || this.price !== '' || this.short_desc_ar !== '' || this.unit !== '' || this.cat_id !== '' || this.act_id !== '') {
        this.$emit('openNext', true)
      }
    },
    price() {
      localStorage.setItem("price", this.price);
    },
    short_desc_ar() {
      localStorage.setItem("short_desc_ar", this.short_desc_ar);
    },
    unit() {
      localStorage.setItem("unit", this.unit);
    },
    cat_id() {
      localStorage.setItem("cat_id", this.cat_id);
    },
    act_id() {
      localStorage.setItem("act_id", this.act_id);
    },
  },
  methods: {
    async getFilters() {
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/app_data", {
          lang: localStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
        })
        .then((res) => {
          // this.cities = res.data.data.cities;
          this.categories = res.data.data.categories;
          this.actives = res.data.data.actives;
        });
    },
    async getData() {
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/show-service", {
          lang: localStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
          service_id : this.$route.params.id
        })
        .then((res) => {
          this.title_ar = res.data.data.title;
          this.desc_ar = res.data.data.desc;
          this.price = res.data.data.price;
          this.short_desc_ar = res.data.data.short_desc;
          this.cat_id = res.data.data.category_id;
          this.act_id = res.data.data.active_id;
          this.unit = res.data.data.unit;
          console.log(res)
        });
    },

    
  },
  mounted() {
    this.getFilters();
    if (this.$route.fullPath.includes('edit')) {
      this.getData()
    } else {
      this.title_ar = localStorage.getItem("title_ar");
    this.desc_ar = localStorage.getItem("desc_ar");
    this.price = localStorage.getItem("price");
    this.short_desc_ar = localStorage.getItem("short_desc_ar");
    this.cat_id = localStorage.getItem("cat_id");
    this.act_id =localStorage.getItem("act_id") ;
    this.unit = localStorage.getItem("unit");
    }

    
  },
};
</script>

<style>
.form-select{
  --bs-form-select-bg-img : none !important
}
</style>