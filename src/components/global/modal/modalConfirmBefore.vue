<template>
    <div class="modal fade" id="confirmBefore" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
  
        <div class="modal-body confirm-before">
          <h4 class="confirm-title main-color">اتفاقية الرسوم</h4>

          <div class="aya">
            <p class="aya-bism">
            بسم الله الرحمن الرحيم
          </p>
          <p class="aya-content">قال الله تعالى : 
            وَأَوْفُوا بِعَهْدِ اللَّهِ اذَا عَاهَدْتُمْ وَلَا تَنْقَضو اَلْايمانُ بَعْدَ تَوْكيدِها وَقَدْ جَعَلْتُمْ اللَّهُ عَلَيْكُمْ كَفيلًا
          </p>
          <p class="finsh-aya">صدق الله العظيم</p>

          </div>
          

        </div>
  <div class="form-check">
  <input type="checkbox">
  <label>اتعهد واقسم بالله انا المعلن أن أدفع رسوم الموقع وهي 1% من قيمة البيع سواء تم البيع عن طريق الموقع أو بسببه</label>
</div>
<!-- Start Confirm Details -->
<div class="confirm-details">
  <p>
    * كما أتعهد بدفع الرسوم خلال 10 أيام من استلام كامل مبلغ المبايعة

  </p>
<p class="note">
  ملاحظة : رسوم الموقع هي على المعلن ولا تبرأ ذمة المعلن من الرسوم الا في حالة دفعها
</p>


<router-link to="/steps" class="global-button" @click="removePopUp">إستمرار</router-link>

</div><!-- End Confirm Details -->
  
      </div>
    </div>
  </div>
</template>
<script >
  export default{
  data() {
      
  },
    methods:{
      removePopUp() {
        setTimeout(() => {
          document.querySelector('.modal-backdrop').style.display = 'none';
          window.location.reload()
        }, 1000);
      }
    }
  }
</script>
<style scoped>
.modal-content{
  width: 60%;
  margin: 0 auto;
  padding: 32px;
}
@media(max-width: 768px){
  .modal-content{
    width: 100%;
  }
}
.form-check, .confirm-details{
  padding: 0 32px !important;
}
.form-check{
  margin-bottom: 16px;
}
.confirm-title{
  margin-bottom: 16px;
}

.note{
  color: green;
  margin-top: 8px !important;

}
input[type="checkbox"]{
  margin-top: -20px;
}
.rtl input[type="checkbox"]{
  margin-left: 6px;
}
.ltr input[type="checkbox"]{
  margin-right: 6px;
}
.global-button{
  margin-top: 32px;
}
.aya{
  margin-bottom: 32px;
}
.aya .aya-bism{
  margin-bottom: 8px !important;
}
.aya .finsh-aya{
  text-align: left;
}
</style>