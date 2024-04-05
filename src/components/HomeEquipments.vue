<template>

<section class="p-sec">
      
      <div class="container">
  
        <div class="section-heading">
            <span class="section-title">{{ $t('EquimentSliderAdTitle') }}</span>
            <h1 class="section-description">{{$t ('EquimentSliderAdDesc')}}</h1>
        </div>
        <EquipmentSlider />
      </div>
    </section>
</template>
<script>
import EquipmentSlider from './EquipmentSlider.vue';

export default{
    name: 'HomeEquipments',
    components:{
        EquipmentSlider
    }

}
</script>