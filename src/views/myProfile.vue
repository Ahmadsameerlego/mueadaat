<template>
    <BreadCrumb
    :title="$t('myAccount')"
    :pageTitle="$t('myAccount')"
    :homePage="$t('Home')"
    />

    <userInfo />
    <userDescription :desc="desc" />
    <myDataForm  @updateProfile="updateProfile"/>
    
</template>
<script setup>

    import BreadCrumb from '@/components/global/BreadCrumb.vue';
    import userInfo from '@/components/userInfo.vue';
    import myDataForm from '../components/global/Form/myDataForm.vue'; 
    import userDescription from '../components/userDescription.vue';
</script>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: {},
                desc : ''
        }
    },
    methods: {
        async getUserData() {
            await axios.post('https://dashboard.mueadaat.info/test-mode/api/show-user', {
                lang: localStorage.getItem('locale'),
                user_id : JSON.parse(sessionStorage.getItem( "user" )).data.id
            })
            .then((res) => {
                this.desc = res.data.data.desc_ar;
                // console.log('tag', res.data.data)
            } )
        },
        updateProfile() {
            this.getUserData()
            console.log('ffffffffffffff')
        }
    },
    mounted() {
        this.getUserData()
    }
}
</script>


