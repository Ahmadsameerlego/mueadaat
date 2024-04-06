<template>
    <BreadCrumb
    :title="$t('Contact')"
    :pageTitle="$t('Contact')"
    :homePage="$t('Home')"
    />

    <providerUserInfo :provider_data="provider_data" />
    <userDescription :desc="desc_ar" />
    <providerAds :data="data" />
    
</template>
<script >

    import BreadCrumb from '@/components/global/BreadCrumb.vue';
    import providerUserInfo from '@/components/providerUserInfo.vue';
    import providerAds from '../components/providerAds.vue'; 
    import userDescription from '../components/userDescription.vue';
import axios from 'axios';

export default {
    data() {
        return {
            provider_data: {},
            data: []
        }
    },

    methods: {
        async getProviderData() {
            await axios.post('https://dashboard.mueadaat.info/test-mode/api/all-provider-services', {
                lang: localStorage.getItem("locale"),
                user_id: this.$route.params.id,
            })
            .then((res) => {
                this.provider_data = res.data.provider_data;    
                this.desc_ar = res.data.provider_data.desc_ar;    
                this.data = res.data.data;    
                console.log(res.data.provider_data.desc_ar)
            } )
        }
    },
    mounted() {
        this.getProviderData();  
    },
    components: {
        BreadCrumb,
        providerUserInfo,
        providerAds,
        userDescription
    }
}
</script>

