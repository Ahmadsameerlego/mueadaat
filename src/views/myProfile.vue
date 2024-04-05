<template>
    <BreadCrumb
    :title="$t('Contact')"
    :pageTitle="$t('Contact')"
    :homePage="$t('Home')"
    />

    <userInfo />
    <userDescription />
    <myDataForm />
    
</template>
<script setup>

    import BreadCrumb from '@/components/global/BreadCrumb.vue';
    import userInfo from '@/components/userInfo.vue';
    import myDataForm from '../components/global/Form/myDataForm.vue'; 
    import userDescription from '../components/userDescription.vue';
</script>

