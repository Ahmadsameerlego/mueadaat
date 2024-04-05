<template>
  <div class="form-items">
    <form>
      <div class="form-item">
        <label for="fullName" class="form-item-label">عنوان الإعلان</label>
        <input
          type="text"
          name="fullName"
          class="form-item-input"
          id="fullName"
          v-model="title_ar"
          placeholder="ادخل اسمك"
        />
      </div>
      <div class="grid-two">
        <div class="form-item">
          <label for="email" class="form-item-label">الميزة التنافسية</label>
          <input
            type="email"
            name="email"
            class="form-item-input"
            id="email"
            v-model="short_desc_ar"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-item">
          <label for="mobileNumber" class="form-item-label">السعر</label>
          <input
            type="email"
            name="email"
            class="form-item-input"
            id="mobileNumber"
            v-model="price"
            placeholder="ادخل السعر"
          />
        </div>
      </div>

      <div class="form-item">
        <label class="form-item-label">نظام التكلفة</label>
        <div class="flex-this">
          <div class="form-check">
            <input type="radio" v-model="unit" value="daily"/>
            <label>التكلفة باليوم</label>
          </div>

          <div class="form-check">
            <input type="radio" v-model="unit"  value="total" />
            <label>التكلفة بالساعة</label>
          </div>
        </div>
      </div>

      <div class="form-item">
        <label for="details" class="form-label">تفاصيل الإعلان</label>
        <textarea
          name="details"
          class="form-item-input"
          id="message"
          v-model="desc_ar"
        ></textarea>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title_ar: '',
        desc_ar : '',
      unit: '',
      price: '',
        short_desc_ar : ''
    }
  },
  watch: {
    title_ar(){
      localStorage.setItem('title_ar', this.title_ar)
    },
    desc_ar(){
      localStorage.setItem('desc_ar', this.desc_ar)
    },
    price(){
      localStorage.setItem('price', this.price)
    },
    short_desc_ar(){
      localStorage.setItem('short_desc_ar', this.short_desc_ar)
    },
    unit(){
      localStorage.setItem('unit', this.unit)
    },
  }
}
</script>
