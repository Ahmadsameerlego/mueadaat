<template>
  <section class="getApp">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="section-heading">
            <span class="section-title">{{ $t("TestimonialsTitle") }}</span>
            <h1 class="section-description">{{ $t("TestimonialsDesc") }}</h1>
          </div>
          <p class="text-body">
            {{ get_app.desc }}
          </p>
          <ul class="download-app-list">
            <li class="item">
              <a href="#" class="google-play">
                <div class="flex-link">
                  <div class="icon">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_136_2312)">
                        <path
                          d="M17.1119 14.6302L22.0099 9.73222L6.49792 1.17022C5.89104 0.832976 5.20789 0.656832 4.51361 0.658582C3.81933 0.660333 3.13708 0.83992 2.53192 1.18022L17.1119 14.6302ZM1.07392 2.55622C0.717916 3.13822 0.513916 3.80422 0.513916 4.51022V28.8022C0.513916 29.4862 0.699916 30.1382 1.03592 30.7082L15.6979 16.0462L1.07392 2.55622ZM28.5039 13.3162L23.8319 10.7382L18.5819 15.9862L25.0159 21.9202L28.5059 19.9942C29.7619 19.2982 30.5139 18.0502 30.5139 16.6542C30.5127 15.9679 30.325 15.2949 29.971 14.707C29.617 14.119 29.1099 13.6383 28.5039 13.3162ZM17.1679 17.4022L2.46592 32.1042C3.08656 32.4642 3.79045 32.6559 4.50792 32.6602C5.18792 32.6602 5.87192 32.4882 6.49792 32.1422L23.1719 22.9402L17.1679 17.4022Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_136_2312">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0.5 0.65625)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="app-type">
                    <span class="get-it">احصل عليه من</span>
                    <h4 class="app-name">جوجل بلاي</h4>
                  </div>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="#" class="app-store">
                <div class="flex-link">
                  <div class="icon">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_136_2303)">
                        <path
                          d="M16.5 32.6562C7.67733 32.6562 0.5 25.4789 0.5 16.6562C0.5 7.83358 7.67733 0.65625 16.5 0.65625C25.3227 0.65625 32.5 7.83358 32.5 16.6562C32.5 25.4789 25.3227 32.6562 16.5 32.6562ZM16.5 2.65625C8.78 2.65625 2.5 8.93625 2.5 16.6562C2.5 24.3763 8.78 30.6562 16.5 30.6562C24.22 30.6562 30.5 24.3763 30.5 16.6562C30.5 8.93625 24.22 2.65625 16.5 2.65625Z"
                          fill="white"
                        />
                        <path
                          d="M24.1668 24.6669C23.8321 24.6669 23.5041 24.4989 23.3148 24.1923L17.2214 14.3243C16.9308 13.8536 17.0774 13.2389 17.5468 12.9483C18.0148 12.6589 18.6321 12.8029 18.9228 13.2736L25.0161 23.1416C25.3068 23.6123 25.1601 24.2269 24.6908 24.5176C24.5281 24.6189 24.3468 24.6669 24.1668 24.6669ZM16.5001 12.2749C16.1641 12.2749 15.8361 12.1056 15.6481 11.7989L12.9974 7.50293C12.7054 7.03359 12.8494 6.41626 13.3188 6.12559C13.7868 5.83359 14.4028 5.97893 14.6961 6.44826L17.3521 10.7523C17.6414 11.2229 17.4948 11.8376 17.0241 12.1269C16.8614 12.2283 16.6801 12.2749 16.5001 12.2749ZM8.83345 24.6669C8.65345 24.6669 8.47211 24.6189 8.30678 24.5176C7.83745 24.2269 7.69211 23.6109 7.98278 23.1403L8.80945 21.8056C9.10011 21.3363 9.71745 21.1909 10.1868 21.4816C10.6561 21.7723 10.8014 22.3883 10.5108 22.8589L9.68411 24.1936C9.49478 24.4989 9.16678 24.6669 8.83345 24.6669Z"
                          fill="white"
                        />
                        <path
                          d="M11.312 20.6602C11.132 20.6602 10.9506 20.6122 10.7853 20.5109C10.316 20.2202 10.1706 19.6042 10.4613 19.1336L18.3013 6.44956C18.5933 5.97889 19.2106 5.83489 19.6773 6.12422C20.148 6.41489 20.2933 7.03089 20.0026 7.50022L12.1613 20.1869C11.9733 20.4922 11.6466 20.6602 11.312 20.6602Z"
                          fill="white"
                        />
                        <path
                          d="M18.5666 20.6603H6.83325C6.28125 20.6603 5.83325 20.2123 5.83325 19.6603C5.83325 19.1083 6.28125 18.6603 6.83325 18.6603H18.5666C19.1186 18.6603 19.5666 19.1083 19.5666 19.6603C19.5666 20.2123 19.1186 20.6603 18.5666 20.6603ZM26.1666 20.6603H21.6866C21.1346 20.6603 20.6866 20.2123 20.6866 19.6603C20.6866 19.1083 21.1346 18.6603 21.6866 18.6603H26.1666C26.7186 18.6603 27.1666 19.1083 27.1666 19.6603C27.1666 20.2123 26.7186 20.6603 26.1666 20.6603Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_136_2303">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0.5 0.65625)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="app-type">
                    <span class="get-it">احصل عليه من</span>
                    <h4 class="">أب ستور</h4>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="../assets/getapp.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "getApp",
  data: () => ({
    get_app: {},
  }),
  mounted() {
    axios
      .get("https://dashboard.mueadaat.info/test-mode/api/home")
      .then((response) => {
        // handle success
        this.get_app = response.data.data.get_app;
        console.log("success", response.data.data);
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },
};
</script>
<style scoped>
.download-app-list {
  display: flex;
  list-style: none;
}
.rtl .download-app-list .item:first-child {
  margin-left: 16px;
}
.ltr .download-app-list .item:first-child {
  margin-right: 16px;
}
.download-app-list .item a {
  background-color: #000;
  padding: 5px 20px;
  display: block;
  color: #fff;
  text-decoration: none;
  border-radius: 16px;
}
.download-app-list .item a.google-play {
  background-color: #fcac62 !important;
}
.download-app-list .item a.app-store {
}
.download-app-list .item a .flex-link {
  display: flex !important;
}
.get-it {
  font-size: 13px;
}
.app-name {
  font-size: 16px;
}
</style>
