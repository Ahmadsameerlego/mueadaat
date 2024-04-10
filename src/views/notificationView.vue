<template>
  <BreadCrumb
    :title="$t('Notifications')"
    :pageTitle="$t('Notifications')"
    :homePage="$t('Home')"
  />
  <div class="container mt-5 mb-5" style="min-height: 302px">
    <!-- breadcrumb  -->

    <div class="row">
      <h5 class="fw-bold red mb-3">{{ $t("Notifications") }}</h5>

      <section v-if="notifications.length > 0">
        <!-- single not  -->
        <div class="col-12" v-for="not in notifications" :key="not.id">
          <!-- <div class="mt-3 mb-3" v-if="not.type=='admin_notify'"> -->
          <div class="notificationBox position-relative">
            <div class="d-flex align-items-center gap-10">
              <span class="notificationLogo">
                <i class="fa-solid fa-bell"></i>
              </span>
              <!-- body  -->
              <div class="mx-4">
                <!-- <h6 class="fw-6"> {{ not.title }} </h6> -->
                <div class="grow-1">
                  {{ not.message }}
                </div>
              </div>
            </div>
            <div class="text-start">
              <span class="date">
                <i class="fa-solid fa-clock m-end-5"></i>
              </span>
              <span class="date mx-3">
                {{ not.duration }}
              </span>
            </div>

            <!-- delete not  -->
            <button
              class="btn btn-danger text-white delete_not"
              @click="deleteNotification(not.id)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>

            <router-link
              :to="'/workers/' + not.order_id"
              class="abs-link"
              v-if="not.order_id != 0"
            ></router-link>
          </div>
          <!-- </div> -->
        </div>
      </section>

      <section v-else class="text-center text-danger">
        {{ $t("noNotifications") }}
      </section>
      <!-- 
            <div class="d-flex justify-content-end">
                <paginate
                    v-model="currentPage"
                    :page-count="totalPages"
                    :click-handler="page => pageClickHandler(page)"
                    :prev-text="'<<'"
                    :next-text="'>>'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"    
                    :no-li-surround="true"   
                    v-if="notifications.length>0"        
                >
                </paginate>
            </div> -->
    </div>
  </div>
  <Toast />
</template>
<script>
import axios from "axios";
import BreadCrumb from "@/components/global/BreadCrumb.vue";

// import Paginate from 'vuejs-paginate-next';
import Toast from "primevue/toast";

export default {
  data() {
    return {
      notifications: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
      disabled: false,
    };
  },
  components: {
    // Paginate,
    Toast,
    BreadCrumb,
  },
  methods: {
    // get notifications
    async getNotification() {
      await axios
        .post("https://dashboard.mueadaat.info/admin/api/show-notification", {
          lang: sessionStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
        })
        .then((res) => {
          // if( res.data.key === 'success' ){
          this.notifications = res.data.data;
          console.log(res.data.data);
          // this.currentPage = res.data.data.pagination.current_page ;
          // this.totalPages = res.data.data.pagination.total_pages ;
          // this.per_page = res.data.data.pagination.per_page ;
          // }
        });
    },
    // delete notification
    async deleteNotification(id) {
      // fd.append('notification_id', id)
      await axios
        .post("https://dashboard.mueadaat.info/admin/api/delete-notification", {
          lang: sessionStorage.getItem("locale"),
          notification_id: id,
        })
        .then((res) => {
          if (res.data.key === 1) {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            setTimeout(() => {
              this.getNotification();
            }, 1000);
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
          }
        })
        .catch((err) => {
          this.$toast.add({ severity: "error", summary: err, life: 3000 });
          this.disabled = false;
        });
    },
    // pageClickHandler(page) {
    //     this.currentPage = page
    //     this.getNotification()
    // },
  },
  // created() {
  //     this.totalPages = Math.ceil(this.notifications.length / this.perPage)
  // },
  mounted() {
    this.getNotification();
  },
};
</script>

<style>
.abs-link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}
.delete_not {
  position: absolute;
  top: 10px;
}
.ltr .delete_not {
  right: 20px;
}
.rtl .delete_not {
  left: 20px;
}
.page-link {
  font-size: 11px !important;
  width: 30px !important;
  height: 30px !important;
  display: flex !important;
  justify-content: center !important;
  border-radius: 50% !important;
  margin: 0 5px;
  color: #333 !important;
  &.active {
    background: #2a3255 !important;
    border: 1px solid #2a3255 !important;
    color: #fff !important;
  }
}
.align-items-center {
  margin-bottom: 10px !important;
}
</style>
<style scoped>
.notificationBox {
  gap: 10px;
  padding: 10px;
  background-color: #fbfbfb;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  margin-bottom: 10px;
}
.notificationLogo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fbab62;
  display: flex;
  font-family: emoji;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fbab62;
}
.date {
  color: #c9c9c9;
}
</style>
