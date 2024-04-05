<template>
    <!-- Start Column BlockItem-->
    <div class="col-md-4">
        <!-- Start Post -->
        <div class="post">
            <div class="post-img">
                <router-link to="/workers/${id}"><img :src="img" ></router-link>
                <div class="add-favorite">
                    <button
                        :class="{added:isAdded}"
                        @click="addWish($event, 'added')">
                        <fa icon="heart" />
                        
                    </button>
                </div>
            </div>
            <!-- Start Post Data -->
            <div class="post-data">
                <!-- Start Post Title -->
                <h3 class="post-title">
                    <router-link to="/workers/${id}">
                        {{props.title}}
                    </router-link>
                </h3><!-- End Post Title -->
                <!-- Start Post Description -->
                <p class="post-description text-body">
                    {{props.description}}
                </p><!-- End Post Description -->
            </div><!-- End Post Data -->
            <!-- Start Post Info -->
            <div class="post-info">
                <div class="row">
                    <div class="col-sm-8">
                        <!-- Start Post Place -->
                        <span class="post-place text-body">{{props.city}}</span>
                        <!-- Start Post Date -->
                        <span class="post-date text-body">{{props.date}}</span>
                    </div>
                    <div class="col-sm-4">
                        <!-- Start Post Detection -->
                        <span  class="detection">{{props.detection}}</span>
                    </div>
                </div>
            </div><!-- End Post Info -->
        </div><!-- End Post -->
    </div><!-- End Column BlockItem-->
    
    </template>
<script setup>
    import { defineProps } from 'vue';
   const props = defineProps({
    img:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    detection: {
        type: Boolean,
        required: true
    },
    isAdded: {
        type: Boolean,
        required: true
    }
   })
    function addWish (event, theclass){
        event.target.classList.toggle(theclass)
    }

</script>
