<template>
<section class="p-sec">
        <div class="container">
        <div class="row">
            <BlockItem
                v-for="worker in prop.data"
                :key="worker.id"
                :id="worker.id"
                :img="worker.first_image"
                :title="worker.title"
                :description="worker.desc"
                :city="worker.city_title"
                :date="worker.date"
                :detection="worker.short_desc"
                :isAdded="worker.is_favourite"/>
        </div>
    </div>
</section>
<!-- <paginationPage /> -->
</template>
<script setup>
import { defineProps} from 'vue';
import BlockItem from './BlockItem.vue';
// import paginationPage from './paginationPage.vue'
// import workers from '../json/workers.json';
// const ourworks = ref(workers);
const prop = defineProps(['data'])
</script>