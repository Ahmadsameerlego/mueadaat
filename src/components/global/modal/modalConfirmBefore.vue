<template>
  <div
    class="modal fade"
    id="confirmBefore"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body confirm-before">
          <h4 class="confirm-title main-color"> {{  $t('treatTitlte')  }} </h4>

          <div class="aya">
            <p class="aya-bism"> {{  $t('treatBSm')  }} </p>
            <p class="aya-content">
              {{ $t('treatQua')  }}
            </p>
            <p class="finsh-aya"> {{ $t('treatEnd') }} </p>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" v-model="isTreat" />
          <label
            >
            {{  $t('treatText')  }}
            </label
          >
        </div>
        <!-- Start Confirm Details -->
        <div class="confirm-details">
          <p>
             {{ $t('treatDays') }}
          </p>
          <p class="note">
            {{  $t('treatDesc')  }}
          </p>

          <router-link v-if="isTreat==true" to="/steps" class="global-button" @click="removePopUp">{{
            $t("continue")
          }}</router-link>
        </div>
        <!-- End Confirm Details -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTreat : null
    }
  },
  methods: {
    removePopUp() {
      setTimeout(() => {
        document.querySelector(".modal-backdrop").style.display = "none";
        window.location.reload();
      }, 1000);
    },
  },
};
</script>
<style scoped>
.modal-content {
  width: 60%;
  margin: 0 auto;
  padding: 16px;
}
@media (max-width: 768px) {
  .modal-content {
    width: 100%;
  }
}
.confirm-details {
  padding: 0 32px !important;
}
@media(max-width: 468px){
  .confirm-details {
    padding: 0 !important;
  }
}
.form-check {
  margin-bottom: 16px;
}
.confirm-title {
  margin-bottom: 16px;
}

.note {
  color: green;
  margin-top: 8px !important;
}
input[type="checkbox"] {
  margin-top: -20px;
}
.rtl input[type="checkbox"] {
  margin-left: 6px;
}
.ltr input[type="checkbox"] {
  margin-right: 6px;
}
.global-button {
  margin-top: 32px;
}
.aya {
  margin-bottom: 32px;
}
.aya .aya-bism {
  margin-bottom: 8px !important;
}
.aya .finsh-aya {
  text-align: left;
}
@media(max-width: 468px){
  .modal-content{
    font-size: 15px;
  }
}
</style>
