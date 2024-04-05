<template>
    <BreadCrumb
    :title="$t ('Equipments')"
    :pageTitle="$t('Equipments')"
    :homePage="$t('Home')"
    />
    <section class="p-sec">
        <div class="container">
            <div class="row">
                <BlockItem
                v-for="equipment in allEquipments"
                :key="equipment.id"
                :img="equipment.img"
                :title="equipment.title"
                :description="equipment.description"
                :city="equipment.city"
                :date="equipment.date"
                :detection="equipment.detection"
                :isAdded="equipment.isAdded" />
            </div>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue';
import BreadCrumb from '@/components/global/BreadCrumb.vue';
import BlockItem from '@/components/BlockItem.vue';
import equipments from '../json/equipments.json';
const allEquipments  = ref(equipments);
</script>