<template>

  <div class="form-items">
    <div class="row no-padding">

      <div class="col-md-8 no-padding">
        <div class="form-image">
          <img src="../../../assets/create-img-1.png">
        </div>
      </div>
      <!-- Start Column -->
      <div class="col-md-4 no-padding">
        <!-- Start Form Content -->
        <div class="form-content">

          <!-- Start Heading -->
          <div class="form-heading">
            <h3>{{$t('welcomeBack')}}</h3>
            <p class="text-body">
              {{ $t('loginEmailTitle')}}
            </p>
          </div><!-- End Heading -->
         

          <div class="new-account">
            <p class="text-body">{{ $t('NohaveAccount') }}</p>
          </div>

        </div><!-- End form Content -->


      </div><!-- End Column-->

    </div>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'CongratsPopup',
  
}
</script>
