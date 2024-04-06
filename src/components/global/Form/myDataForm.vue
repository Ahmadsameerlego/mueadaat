<template>
  <section class="p-sec">
    <div class="container">
      <div class="user-head">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" rx="17.5" fill="#FCAC62" />
          <path
            d="M20.8333 20H14.1666C12.3256 20 10.8333 21.4924 10.8333 23.3333V25H24.1666V23.3333C24.1666 21.4924 22.6742 20 20.8333 20Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.4999 16.6667C19.3409 16.6667 20.8333 15.1743 20.8333 13.3333C20.8333 11.4924 19.3409 10 17.4999 10C15.659 10 14.1666 11.4924 14.1666 13.3333C14.1666 15.1743 15.659 16.6667 17.4999 16.6667Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h4 class="title">بياناتي الشخصية</h4>
      </div>
      <form class="form-items" ref="profile" @submit.prevent="updateProfile">
        <div class="user-img">
          <img :src="user_image" />
          <input
            type="file"
            name="photo"
            class="photo_image"
            value=""
            @change="updateImage"
          />
        </div>

        <!-- Start Grid Two -->
        <div class="grid-two">
          <div class="form-item">
            <label for="username" class="form-label">{{ $t("Name") }}</label>
            <input
              type="text"
              id="username"
              class="form-item-input"
              value="عبدالرحمن العتيبي"
              v-model="first_name"
            />
          </div>
          <div class="form-item">
            <label for="subject" class="form-label">{{
              $t("companyNameLabel")
            }}</label>
            <input
              type="text"
              id="subject"
              class="form-item-input"
              value="مؤسسة الجوهرة لتأجير المعدات"
              v-model="full_name"
            />
          </div>

          <div class="form-item">
            <label for="email" class="form-label">{{ $t("Email") }}</label>
            <input
              type="email"
              id="email"
              class="form-item-input"
              value="islamelorabi2023@gmail.com"
              v-model="email"
            />
          </div>
          <div class="form-item">
            <label for="mobileNumber" class="form-label">{{
              $t("Phone")
            }}</label>
            <input
              type="number"
              class="form-item-input"
              id="mobileNumber"
              value="12255125"
              v-model="phone"
            />
          </div>
          <!-- <div class="form-item">
            <label for="subject" class="form-label">{{ $t("Password") }}</label>
            <input
              type="text"
              name="subject"
              id="subject"
              class="form-item-input"
              value=""
            />
          </div> -->
          <div class="form-item">
            <label for="subject" class="form-label">{{
              $t("myPlaceLabel")
            }}</label>
            <select
              v-model="city_id"
              class="form-item-input"
              id="inputGroupSelect01"
            >
              <option selected hidden disabled>{{ city_name }}</option>
              <option v-for="city in cities" :key="city" :value="city.id">
                {{ city.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-item">
          <label for="subject" class="form-label">نبذه عني</label>
          <textarea
            v-model="desc_ar"
            name="desc_ar"
            class="form-item-input"
            id=""
            cols="30"
            rows="2"
          ></textarea>
        </div>

        <!-- End Grid Two -->

        <div class="form-group">
          <button class="global-button" :disabled="disabled">
            حفظ التعديلات
          </button>
        </div>
      </form>

      <div class="user-head mt-4">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="35" height="35" rx="17.5" fill="#FCAC62" />
          <path
            d="M20.8333 20H14.1666C12.3256 20 10.8333 21.4924 10.8333 23.3333V25H24.1666V23.3333C24.1666 21.4924 22.6742 20 20.8333 20Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.4999 16.6667C19.3409 16.6667 20.8333 15.1743 20.8333 13.3333C20.8333 11.4924 19.3409 10 17.4999 10C15.659 10 14.1666 11.4924 14.1666 13.3333C14.1666 15.1743 15.659 16.6667 17.4999 16.6667Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h4 class="title">تعديل كلمة المرور</h4>
      </div>
      <form action="" class="form-items">
        <div class="grid-two">
          <div class="form-item">
            <label for="subject" class="form-label">{{ $t("Password") }}</label>
            <input
              type="password"
              name="subject"
              id="subject"
              class="form-item-input"
              value=""
              v-model="old_password"
            />
          </div>

          <div class="form-item">
            <label for="subject" class="form-label">كلمة المرور الجديدة</label>
            <input
              type="password"
              name="subject"
              id="subject"
              class="form-item-input"
              value=""
              v-model="password"
            />
          </div>
          <div class="form-item">
            <label for="subject" class="form-label">تاكيد كلمة المرور</label>
            <input
              type="password"
              name="subject"
              id="subject"
              class="form-item-input"
              value=""
              v-model="password_confirmation"
            />
          </div>
        </div>
        <div v-if="showValid" class="mb-3">
          <p
            v-if="passwordMatch"
            class="passwordConfirmed d-flex align-items-center text-success"
          >
            <i class="fa-regular fa-circle-check"></i>
            <span>متطابق</span>
          </p>
          <p v-else class="passwordWrong d-flex align-items-center text-danger">
            <i class="fa-regular fa-circle-xmark"></i>
            <span>غير متطابق</span>
          </p>
        </div>

        <div class="form-group">
          <button
            class="global-button"
            :disabled="disabled2"
            @click.prevent="updatePassword"
          >
            حفظ التعديلات
          </button>
        </div>
      </form>
    </div>
  </section>
  <Toast />
</template>
<script>
import axios from "axios";
import Toast from "primevue/toast";

export default {
  data() {
    return {
      user: {},
      city_name: "",
      cities: [],
      phone: "",
      desc_ar: "",
      first_name: "",
      full_name: "",
      email: "",
      disabled: false,
      disabled2: true,
      old_password: "",
      password: "",
      password_confirmation: "",
      city_id: "",
      user_image: "",
      showValid: false,
    };
  },
  watch: {
    password_confirmation() {
      this.showValid = true;
      if (this.passwordMatch) {
        this.disabled2 = false;
      } else {
        this.disabled2 = true;
      }
    },
  },
  computed: {
    passwordMatch() {
      return this.password === this.password_confirmation;
    },
  },

  methods: {
    async getUserData() {
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/show-user", {
          lang: localStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
        })
        .then((res) => {
          this.user = res.data.data;
          this.city_name = res.data.data.city;
          this.city_id = res.data.data.city_id;
          this.phone = res.data.data.phone;
          this.first_name = res.data.data.first_name;
          this.desc_ar = res.data.data.desc_ar;
          this.full_name = res.data.data.full_name;
          this.email = res.data.data.email;
          this.user_image = res.data.data.avatar;
        });
    },
    async getCities() {
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/sections", {
          lang: localStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
        })
        .then((res) => {
          this.cities = res.data.data;
        });
    },

    async updateProfile() {
      this.disabled = true;
      const fd = new FormData(this.$refs.profile);
      fd.append("city_id", this.city_id);
      fd.append("email", this.email);
      fd.append("full_name", this.full_name);
      fd.append("first_name", this.first_name);
      fd.append("phone", this.phone);
      fd.append("lang", localStorage.getItem("locale"));
      fd.append("user_id", JSON.parse(sessionStorage.getItem("user")).data.id);
      await axios
        .post("https://dashboard.mueadaat.info/test-mode/api/update-user", fd)
        .then((res) => {
          if (res.data.key == 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.$emit("updateProfile");
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
          this.disabled = false;
        });
    },
    async updatePassword() {
      this.disabled2 = true;
      const fd = new FormData(this.$refs.profile);
      fd.append("old_password", this.old_password);
      fd.append("password", this.password);
      fd.append("lang", localStorage.getItem("locale"));
      fd.append("user_id", JSON.parse(sessionStorage.getItem("user")).data.id);
      await axios
        .post(
          "https://dashboard.mueadaat.info/test-mode/api/update-password",
          fd
        )
        .then((res) => {
          if (res.data.key == 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.$emit("updateProfile");
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
          this.disabled2 = false;
        });
    },

    updateImage(event) {
      const file = event.target.files[0];
      this.user_image = URL.createObjectURL(file);
    },
  },
  components: {
    Toast,
  },
  mounted() {
    this.getUserData();
    this.getCities();
  },
};
</script>
<style>
.user-img {
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .photo_image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    opacity: 0;
  }
}
</style>
