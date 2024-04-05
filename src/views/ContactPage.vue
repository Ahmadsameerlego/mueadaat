<template>
    <BreadCrumb
    :title="$t('Contact')"
    :pageTitle="$t('Contact')"
    :homePage="$t('Home')"
    />
    <section class="p-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    data
                </div>
                <div class="col-md-6">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

    import BreadCrumb from '@/components/global/BreadCrumb.vue';
    import ContactForm from '../components/global/Form/ContactForm.vue'; 
    
</script>