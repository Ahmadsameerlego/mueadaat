<template>
    <div class="modal fade" id="searchModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
  
        <div class="modal-body">
          <form>
            <input type="search" placeholder="ابحث هناي">
          </form>
          

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