<template>
<section class="p-sec">
        <div class="container">
        <div class="row">
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
</section>
<paginationPage />
</template>
<script setup>
import {ref} from 'vue';
import BlockItem from './BlockItem.vue';
import paginationPage from './paginationPage.vue'
import workers from '../json/workers.json';
const ourworks = ref (workers);
</script>