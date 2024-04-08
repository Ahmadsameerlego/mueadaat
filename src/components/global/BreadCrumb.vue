<template>
    <div class="bread-crumb ">
        <h2 class="bread-crumb-title">{{ title }}</h2>
        <nav class="breadcrum-nav">
            <ul class="bread-crumb-list">
                <li class="bread-crumb-item text"><router-link class="home-link" to="/">
                    {{ homePage }}
                </router-link></li>
                <li class="bread-crumb-item " :class="{search: $route.fullPath.includes('search')||$route.fullPath.includes('notification')}">{{ pageTitle }}</li>
                
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
        padding: 32px 0 !important;
    }
    .bread-crumb-title{
        color: #fff;
        text-align: center;
        position: relative;
    }
    
    .bread-crumb-list{
        color: #74757E;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 0;

    }
    .bread-crumb-list .bread-crumb-item{
        padding: 5px 15px !important;
        text-align: center;
        position: relative;
    }
    .bread-crumb-list .bread-crumb-item.text:after{
        position: absolute;
    top: 15%;
    
    content: '>';
    color: #74757E;
    
    }
    .rtl .bread-crumb-list .bread-crumb-item.text:after{
        left: -5px;
    }
    .ltr .bread-crumb-list .bread-crumb-item.text:after{
        right : -5px;
    }
    .bread-crumb-list .bread-crumb-item.text.search:after{display: none !important;}
.home-link{
    color: #FCAC62;
    transition: all 0.3s ease;
}
.home-link:hover{
    color: #fff;
}
</style>
