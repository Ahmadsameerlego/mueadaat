<template>
    <BreadCrumb
    :title="$t('watchDateTitle')"
    :pageTitle="$t('watchDateTitle')"
    :homePage="$t('Home')"
    />
    <div class="page-container workers-area">
        <div class="container">
        <div class="row">

            <div class="watch-date">
                <h4 class="date">اليوم</h4>
            </div>
            <BlockItem
                v-for="worker in ourworks"
                :key="worker.id"
                :id="worker.id"
                :img="worker.img"
                :title="worker.title"
                :description="worker.description"
                :city="worker.city"
                :date="worker.date"
                :detection="worker.detection"
                :isAdded="worker.isAdded"/>



            <div class="watch-date">
                <h4 class="date">23/1/2023</h4>
            </div>
            
            <BlockItem
                v-for="worker in ourworks"
                :key="worker.id"
                :id="worker.id"
                :img="worker.img"
                :title="worker.title"
                :description="worker.description"
                :city="worker.city"
                :date="worker.date"
                :detection="worker.detection"
                :isAdded="worker.isAdded"/>

        </div>
    </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import BreadCrumb from '@/components/global/BreadCrumb.vue';
import BlockItem from '@/components/BlockItem.vue';
import workers from '../json/workers.json';
        const ourworks = ref (workers);
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