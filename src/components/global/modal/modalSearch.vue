<template>
    <div class="modal fade" id="searchModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
  
        <div class="modal-body">
          <p>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
          </p>
          
          

        </div>
  <div class="form-check">
  <input type="checkbox">
  <label>موافق</label>
  <router-link to="/steps" class="global-button" @click="removePopUp">تواصل</router-link>
</div>
  
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