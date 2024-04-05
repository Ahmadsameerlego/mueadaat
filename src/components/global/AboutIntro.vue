<template>
    <section class="p-sec">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="about-data">
                    <div class="section-heading">
                        <span class="section-title">{{ $t('About') }}</span>
                        <h1 class="section-description">{{about_us.title }}</h1>
                        <h1 class="site-name">معداتي وعمالي</h1>
                    </div>
                    <div class="about-text">
                        <p class="text-body">{{ about_us.desc }}
                        
                        </p>
                    </div>
                    <a href="#" class="global-button" v-show="showButton">تعرف علينا</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="about-media">
                    <img src="../../assets/about-img.png">

                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script>
import axios from 'axios';
    export default{
        name: "AboutIntro",
        props:{
            showButton: Boolean,
        },
        data:() => ({
            about_us:{}
        }),
        mounted() {
            var lang = this.$i18n.locale;
            axios.get('https://mueadaat.info/test-mode/api/home?lang='+lang)
            .then(response => {
                // handle success
                this.about_us = response.data.data.about_us;
                console.log("success", response.data.data)
            })
            .catch(error => {
                // handle error
                console.error('Error fetching data:', error);
            });
        }


    }
    
</script>

<style scoped>
    
    .about-media img{
        width: 100%;
         height: 400px;
         border-radius: 150px;
    }
    .about-text{
        margin-bottom: 32px;
    }
    
</style>