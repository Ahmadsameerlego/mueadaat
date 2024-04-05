<template>
    <BreadCrumb
    :title="$t('Contact')"
    :pageTitle="$t('Contact')"
    :homePage="$t('Home')"
    />

    <providerUserInfo />
    <userDescription />
    <providerAds />
    
</template>
<script setup>

    import BreadCrumb from '@/components/global/BreadCrumb.vue';
    import providerUserInfo from '@/components/providerUserInfo.vue';
    import providerAds from '../components/providerAds.vue'; 
    import userDescription from '../components/userDescription.vue';
    
</script>

