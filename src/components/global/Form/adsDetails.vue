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
          v-model="email"
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
            v-model="email"
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
            v-model="email"
            placeholder="ادخل رقم جوالك"
          />
        </div>
      </div>

      <div class="form-item">
        <label class="form-item-label">نظام التكلفة</label>
        <div class="flex-this">
          <div class="form-check">
            <input type="checkbox" />
            <label>التكلفة باليوم</label>
          </div>

          <div class="form-check">
            <input type="checkbox" />
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
          v-model="details"
        ></textarea>
      </div>
    </form>
  </div>
</template>
<script setup></script>
