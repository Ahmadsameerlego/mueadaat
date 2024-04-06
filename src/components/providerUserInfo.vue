<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="user-info-flex">
            <div class="user-img">
              <img :src="provider_data.avatar" />
            </div>
            <div class="user-heading">
              <h3 class="user-name"> {{ provider_data.first_name }} </h3>
              <p class="user-company text-body">
                {{ provider_data.full_name }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <ul class="details-user justify-content-end">
            <!-- Start Item -->
            <li class="item">
              <div class="item-link">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 12.1667C11.8808 12.1667 13 11.0474 13 9.66667C13 8.28595 11.8808 7.16667 10.5 7.16667C9.11933 7.16667 8.00004 8.28595 8.00004 9.66667C8.00004 11.0474 9.11933 12.1667 10.5 12.1667Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 18C14.1819 16.3333 17.1667 13.3486 17.1667 9.66667C17.1667 5.98477 14.1819 3 10.5 3C6.81814 3 3.83337 5.98477 3.83337 9.66667C3.83337 13.3486 6.81814 16.3333 10.5 18Z"
                    stroke="#FCAC62"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>{{ provider_data.city}}</span>
              </div>
            </li>
            <!-- End Item -->

            <!-- Start Item -->
            <li class="item">
              <div class="item-link">
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

                <span> {{ provider_data.rate_avg }} </span>
              </div>
            </li>
            <!-- End Item -->

            <!-- Start Item -->
            <li class="item">
              <div class="item-link">
                <button class="global-button">
                  <a :href="'https://api.whatsapp.com/send?phone='+provider_data.full_phone" target="_blank" style="color:#fff">
                    <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16667 7.91667H13M7.16667 11.25H11.3333M13.25 15.9167L18 17.5L16.4167 12.75C16.4167 12.75 17.1667 11.6667 17.1667 9.58333C17.1667 5.67132 13.9954 2.5 10.0833 2.5C6.17132 2.5 3 5.67132 3 9.58333C3 13.4954 6.17132 16.6667 10.0833 16.6667C12.2373 16.6667 13.25 15.9167 13.25 15.9167Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  مراسلة
                  </a>
                  
                </button>
              </div>
            </li>
            <!-- End Item -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
    props: {
            provider_data : Object
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
.global-button svg {
  display: inline-block !important;
}
</style>
