<template>
    <HomeSlider />
    <AboutIntro :showButton="true"/>
    <HomeEquipments />
    <HomeWorkers />
    <TestimonialsCom />
    <getApp />
</template>

<script setup>
    import AboutIntro from '../components/global/AboutIntro.vue';
    import HomeSlider from '../components/HomeSlider.vue';
    import HomeEquipments from '../components/HomeEquipments.vue';
    import HomeWorkers from '../components/HomeWorkers.vue';
    import TestimonialsCom from '../components/TestimonialsCom.vue';
    import getApp from '../components/getApp.vue';
</script>