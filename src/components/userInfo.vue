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
              <h3 class="user-name"> {{ user.first_name }} </h3>
              <p class="user-company text-body">
                    {{user.full_name}}              
                </p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <ul class="details-user justify-content-end">
            <!-- Start Item -->
            <li class="item">
              <a href="#" class="item-link">
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

                <span>تقييم إعلاناتي</span>
              </a>
            </li>
            <!-- End Item -->
            <!-- Start Item -->
            <li class="item">
              <a href="#" class="item-link">
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

                <span>تاريخ المشاهدة</span>
              </a>
            </li>
            <!-- End Item -->
            <!-- Start Item -->
            <li class="item">
              <a href="#" class="item-link">
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

                <span>مفضلتي</span>
              </a>
            </li>
            <!-- End Item -->

            <!-- Start Item -->
            <li class="item">
              <a href="#" class="item-link">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16667 3H10.8333C11.2936 3 11.6667 3.3731 11.6667 3.83333V4.30732C11.6667 4.66382 11.9059 4.97354 12.2352 5.11024C12.5646 5.24699 12.9481 5.19487 13.2002 4.94269L13.5355 4.60742C13.8609 4.28199 14.3886 4.28199 14.714 4.60742L15.8925 5.78594C16.218 6.11137 16.218 6.63901 15.8925 6.96445L15.5573 7.29967C15.3051 7.55186 15.253 7.93539 15.3897 8.26479C15.5265 8.59406 15.8362 8.83333 16.1927 8.83333L16.6667 8.83333C17.1269 8.83333 17.5 9.20643 17.5 9.66667V11.3333C17.5 11.7936 17.1269 12.1667 16.6667 12.1667H16.1927C15.8362 12.1667 15.5265 12.4059 15.3898 12.7352C15.253 13.0646 15.3051 13.4481 15.5573 13.7003L15.8925 14.0355C16.218 14.361 16.218 14.8886 15.8925 15.214L14.714 16.3925C14.3886 16.718 13.861 16.718 13.5355 16.3925L13.2003 16.0573C12.9481 15.8051 12.5646 15.753 12.2352 15.8898C11.9059 16.0265 11.6667 16.3362 11.6667 16.6927V17.1667C11.6667 17.6269 11.2936 18 10.8333 18H9.16667C8.70643 18 8.33333 17.6269 8.33333 17.1667V16.6927C8.33333 16.3362 8.09406 16.0265 7.76479 15.8897C7.43539 15.753 7.05186 15.8051 6.79966 16.0573L6.46443 16.3925C6.139 16.718 5.61136 16.718 5.28592 16.3925L4.10741 15.214C3.78197 14.8886 3.78197 14.361 4.10741 14.0355L4.44269 13.7002C4.69487 13.4481 4.74699 13.0646 4.61024 12.7352C4.47354 12.4059 4.16382 12.1667 3.80732 12.1667H3.33333C2.8731 12.1667 2.5 11.7936 2.5 11.3333V9.66667C2.5 9.20643 2.8731 8.83333 3.33333 8.83333L3.80731 8.83333C4.16382 8.83333 4.47354 8.59406 4.61024 8.2648C4.747 7.93542 4.69488 7.5519 4.44269 7.29972L4.10742 6.96445C3.78199 6.63901 3.78199 6.11137 4.10742 5.78594L5.28594 4.60743C5.61137 4.28199 6.13901 4.28199 6.46445 4.60743L6.79971 4.94269C7.0519 5.19488 7.43542 5.247 7.7648 5.11024C8.09406 4.97354 8.33333 4.66381 8.33333 4.3073V3.83333C8.33333 3.3731 8.70643 3 9.16667 3Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11.6667 10.5C11.6667 11.4205 10.9205 12.1667 10 12.1667C9.07953 12.1667 8.33333 11.4205 8.33333 10.5C8.33333 9.57953 9.07953 8.83333 10 8.83333C10.9205 8.83333 11.6667 9.57953 11.6667 10.5Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                  />
                </svg>

                <span>الخصوصية و الإعدادات</span>
              </a>
            </li>
            <!-- End Item -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
                user : {}
        }
    },
    methods: {
        async getUserData() {
            await axios.post('https://dashboard.mueadaat.info/test-mode/api/show-user', {
                lang: localStorage.getItem('locale'),
                user_id : JSON.parse(sessionStorage.getItem( "user" )).data.id
            })
            .then((res) => {
                this.user = res.data.data;

            } )
        }
    },
    mounted() {
        this.getUserData()
    }
}
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
  margin-right: 16px;
}
.rtl .details-user .item {
  margin-left: 16px;
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
