<template>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
  
        <div class="modal-body">
          <LoginForm />
        </div>
  
      </div>
    </div>
  </div>
</template>
<script setup>
import LoginForm from '../Form/LoginForm.vue';
</script>