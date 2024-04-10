<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="user-info-flex">
            <div class="user-img">
              <img :src="user.avatar" />
            </div>
            <div class="user-heading">
              <h3 class="user-name">{{ user.first_name }}</h3>
              <p class="user-company text-body">
                {{ user.full_name }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <ul class="details-user justify-content-end">
            <!-- Start Item -->
            <li class="item">
              <router-link to="/ads" class="item-link">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83325 7.16667H14.1666M5.83325 10.5H14.1666M5.83325 13.8333H10.8333M3.33325 3.83333H16.6666V17.1667H3.33325V3.83333Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{{ $t("myAdsTitle") }}</span>
              </router-link>
            </li>
            <!-- End Item -->

            <!-- Start Item -->
            <li class="item">
              <router-link to="/rate-ads" class="item-link">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.6667L5 17.1667L6.25 12.1667L2.5 8L7.91667 7.58333L10 3L12.0833 7.58333L17.5 8L13.75 12.1667L15 17.1667L10 14.6667Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{{ $t("rateMyAdsTitle") }}</span>
              </router-link>
            </li>
            <!-- End Item -->
            <!-- Start Item -->
            <li class="item">
              <router-link to="/watch" class="item-link">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8333 13.1667V14.5729L14.5833 15.4167M7.99992 9.66667H3.83325M17.1666 8V6.33333C17.1666 5.41286 16.4204 4.66667 15.4999 4.66667H5.49992C4.57944 4.66667 3.83325 5.41286 3.83325 6.33333V16.3333C3.83325 17.2538 4.57944 18 5.49992 18H7.99992M12.9999 3V6.33333M7.99992 3V6.33333M17.5833 14.6667C17.5833 16.7377 15.9043 18.4167 13.8333 18.4167C11.7622 18.4167 10.0833 16.7377 10.0833 14.6667C10.0833 12.5956 11.7622 10.9167 13.8333 10.9167C15.9043 10.9167 17.5833 12.5956 17.5833 14.6667Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{{ $t("watchDateTitle") }}</span>
              </router-link>
            </li>
            <!-- End Item -->
            <!-- Start Item -->
            <li class="item">
              <router-link to="/favs" class="item-link">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6095 10.5395L10 17.1667L16.3905 10.5395C17.1009 9.80277 17.5 8.80357 17.5 7.7617C17.5 5.59212 15.804 3.83333 13.7119 3.83333C12.7073 3.83333 11.7438 4.24721 11.0334 4.98392L10 6.05555L8.96664 4.98393C8.25624 4.24721 7.29273 3.83333 6.28807 3.83333C4.19598 3.83333 2.5 5.59212 2.5 7.7617C2.5 8.80357 2.8991 9.80277 3.6095 10.5395Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{{ $t("myFavoriteTitle") }}</span>
              </router-link>
            </li>
            <!-- End Item -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async getUserData() {
      await axios
        .post("https://dashboard.mueadaat.info/admin/api/show-user", {
          lang: sessionStorage.getItem("locale"),
          user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
        })
        .then((res) => {
          this.user = res.data.data;
        });
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style scoped>
.user-info {
  background-color: rgb(237 237 237 / 39%);
  padding: 25px 0;
}
.user-info-flex {
  display: flex;
  align-items: center;
}
.ltr .user-img {
  margin-right: 16px;
}
.rtl .user-img {
  margin-left: 16px;
}
.user-img img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #fcac62;
}
.user-heading .user-name {
  font-size: 18px;
  margin-bottom: 4px;
}
.user-heading .user-company {
}
.details-user {
  display: flex;
}
.ltr .details-user .item {
  margin-right: 16px !important;
}
.rtl .details-user .item {
  margin-left: 16px !important;
}
.ltr .details-user .item:last-child,
.rtl .details-user .item:last-child {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.details-user .item-link {
  display: block;
  text-align: center;
  transition: all 0.3s ease-in;
  color: #212121;
}
.details-user .item-link:hover {
  opacity: 0.7;
}
.details-user .item-link svg,
.details-user .item-link span {
  display: block;
  text-align: center;
}
.details-user .item-link svg {
  margin: 0 auto;
}
</style>
