
<template>

    <section class="p-sec">
        <div class="container">
          <div class="section-heading">
            <span class="section-title">{{ $t('TestimonialsTitle') }}</span>
            <h1 class="section-description">{{$t ('TestimonialsDesc')}}</h1>
          </div>
            <div class="row">
              <TestimonialsContent />
            </div>
        </div>
    </section>
  </template>
  
  <script setup>
    import TestimonialsContent from './global/TestimonialsContent.vue'; 
  </script>
      
  <style scoped>
  .section-heading{
    margin-bottom: 10px !important;
  }
  @media(max-width: 468px){
    .ltr .section-heading{
      padding-right: 50px !important
    }
    .ltr .section-heading .section-description{
      font-size: 30px;
    }
  }
  </style>
