<template>
    <ul class="navbar-nav  ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item" v-for="link in links" :key="link.id">
            <router-link class="nav-link " aria-current="page" to="/">
                {{ link.text }}
            </router-link>
        </li>
        
    </ul>
</template>
<script>
export default{
    name: 'NavBar',
    data(){
        return{
            sliderPostion:0,
            selectedElementWidth: 0,
            selectedIndex: 0,

            links: [
                {
                    id: 1,
                    text: 'الرئيسية'
                },
                {
                    id: 2,
                    text: 'من نحن'
                },
                {
                    id: 3,
                    text: 'معدات'
                },
                {
                    id: 4,
                    text: 'عمالة'
                },
                {
                    id: 5,
                    text: 'انشاء اعلان'
                },
                {
                    id: 6,
                    text: 'اتصل بنا'
                }
            ],
        }
    }
}
</script>
<style>
:root{
    --active-background-color: #FCAC62;
    --link-text-color: #000;
    --active-color: #FFF;
}
</style>