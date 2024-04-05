<template>
    <BreadCrumb
    :title="$t ('About')"
    :pageTitle="$t('About')"
    :homePage="$t('Home')"
    />
    <AboutIntro :showButton="false"/>
    <TestimonialsCom />
</template>
<script setup>
import BreadCrumb from '@/components/global/BreadCrumb.vue';
import AboutIntro  from '@/components/global/AboutIntro.vue';
import TestimonialsCom from '@/components/TestimonialsCom.vue';
</script>