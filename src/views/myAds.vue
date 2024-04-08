<template>
    <BreadCrumb
    :title="$t('myAdsTitle')"
    :pageTitle="$t('myAdsTitle')"
    :homePage="$t('Home')"
    />
    <div class="page-container workers-area">
        <div class="container">
        <div class="row">
        <BlockItem
          v-for="equipment in data"
          :key="equipment.id"
                    :id="equipment.id"

          :img="equipment.first_image"
          :title="equipment.title"
          :description="equipment.desc"
          :city="equipment.city_title"
          :date="equipment.date"
          :detection="equipment.short_desc"
          :isAdded="equipment.is_favourite"
          :show="equipment.show"
          :isOwnAdds="true"
        />
        </div>
    </div>
    </div>
</template>
<script setup>
// import {ref} from 'vue';
import BreadCrumb from '@/components/global/BreadCrumb.vue';
import BlockItem from '@/components/BlockItem.vue';
// import workers from '../json/workers.json';
        // const ourworks = ref (workers);
</script>
<script>
import axios from 'axios';
export default {
  data() {
        return {
        data : []
    };
    },
    methods: {
        async getEquips() {
             await axios.post('https://dashboard.mueadaat.info/test-mode/api/all-provider-services', {
                lang: localStorage.getItem('locale'),
                 user_id: JSON.parse(sessionStorage.getItem("user")).data.id,
            })
            .then((res) => {
                this.data = res.data.data;
                // console.log('tag', res.data.data)
            } )
        }
    },
    mounted() {
        this.getEquips();
    }
};
</script>



<style scoped>
    .page-container{
        padding: 60px 0;
    }
    .watch-date{
        margin-bottom: 32px; 
    }
    .watch-date .date{
        color: #FCAC62;
    }
</style>