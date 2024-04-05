
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
      
