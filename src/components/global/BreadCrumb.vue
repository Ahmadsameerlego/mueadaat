<template>
    <div class="bread-crumb ">
        <h2 class="bread-crumb-title">{{ title }}</h2>
        <nav class="breadcrum-nav">
            <ul class="bread-crumb-list">
                <li class="bread-crumb-item">{{ pageTitle }}</li>
                <li class="bread-crumb-item">{{ homePage }}</li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default{
        name: 'BreadCrumb',
        props: ["title", "pageTitle", "homePage"]     
    }
</script>
<style scoped>
    .bread-crumb{
        background-color: #000;
        text-align: center !important;
        padding: 32px 0;
    }
    .bread-crumb-title{
        color: #fff;
        text-align: center;
    }
    .bread-crumb-list{
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 0;

    }
    .bread-crumb-list .bread-crumb-item{
        padding: 5px 8px ;
        text-align: center;
        
        
    }
</style>
