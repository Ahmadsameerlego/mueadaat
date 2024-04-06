<template>
  <HeaderCom />
  <div>

    <router-view />

  </div>
  
  <ThemeOptions />
  <FooterCom />
  
</template>


<script setup>
import './css/main.css';
import './css/header.css';
import './css/form.css';
import './css/icons.css'
import HeaderCom from  "@/components/global/HeaderCom.vue";
import FooterCom from  "@/components/global/FooterCom.vue";
import ThemeOptions from "@/components/global/ThemeOptions.vue";  

</script>

<style>



*{
  padding: 0;
  margin: 0;
  font-family: 'Tajawal-Regular';
}
.rtl{
    direction: rtl !important;
}
.ltr{
    direction: ltr !important;
}
h1, h2, h3 h4, p{
  padding: 0 !important;
  margin: 0 !important;
}
h1, h2, h3, h4{
  font-family: 'Tajawal-bold';
}
h1{
  font-size: 28px;
}
h2{
  font-size: 25px;
}
h3{
  font-size: 1.3rem;
}
ul, li{
    list-style: none;
    

}
li{
    padding: 0 !important;
    margin: 0 !important;
}
a{
    text-decoration: none !important;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bg-red-300{
    background-color: rgb(255 0 0 / 20%);
}
.bg-blue-300{
    background-color: rgb(0 0 255 / 20%);
}
.bg-blue-100{
    background-color: rgb(0 0 255 / 10%);
}
.bg-green-300{
    background-color: rgb(0 128 0 / 20%);
}
.bg-orange-300{
    background-color: rgb(255 165 0 / 20%);
}
.p-16{
    padding: 15px;
}
.rounded-md{
    border-radius: 10px;
}
.text-body{
  color: #74757E !important;
  font-size: 15px;
  line-height: 23px;
}
.p-sec{
  padding: 30px 0;
}

button, input [type="submit"]{
  border: 0 !important;
  outline: none;
}
.rtl p{
    text-align: right;
}
.ltr p{
    text-align: left;
}

.header-avatar{
    width: 30px;
}
.post{
    background-color: #fff;
    box-shadow: 1px 1px 5px 2px rgb(0 0 0 / 17%);
    transition:  all 0.3s;
    border-radius: 40px 20px;
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
        
}
    .rtl .post .post-info{
        direction: rtl !important;
    }

    .ltr .post .post-info{
        direction: ltr !important;
    }
    .post .display-info{
        display: flex;
    }
    .rtl .post .post-info .post-place{
        margin-left: 10px;
    }
    .ltr .post .post-info .post-place{
        margin-right: 10px;
    }
    .post .post-info .post-place,
    .post .post-info .post-date {
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #74757E !important;
    }

    .rtl .post .post-info .post-place svg,
    .rtl .post .post-info .post-date svg {
        margin-left: 2px;
    }
    .ltr .post .post-info .post-place svg,
    .ltr .post .post-info .post-date svg {
        margin-right: 2px;
    }
    .post .default-flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .post-img img{
        width: 100%;
        height: 300px;
        border-radius: 40px 20px;
    }
    .post:hover{
        box-shadow: 1px 1px 10px 10px rgb(0 0 0 / 5%);
    }
    .post-data, .post-info{
        padding: 16px;
        
    }
    .post-title{
        color: #000;
        font-size: 20px;
        
        
    }
    .post-title a{
        color: #FCAC62;
        text-decoration: none;
        font-family: 'Tajawal-medium';
        transition: all 0.3s;
    }
    .post-title a:hover{
        color: #000;
    }
    .post-description{
        font-size: 14px;
        color: #ccc;
    }
    .add-favorite{
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: +3;
        transition: all 0.3s;
    }
    .add-favorite button{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #212121;
        border: 0;
        cursor: pointer;
        color: #fff;
        transition: all 0.3s;
        font-size: 20px;
    }
    .add-favorite button:focus{
        outline: none;
    }
    .add-favorite button.added, .add-favorite button:hover{
        background-color: #FCAC62;
    }
    .detection{
        background-color: #FCAC62;
        padding: 5px 15px;
        color: #fff;
        border-radius: 20px;
        font-size: 13px;
    }


.global-button{
        background-color: #FCAC62;
        padding: 8px 20px;
        border-radius: 30px;
        display: inline-block;
        color: #fff;
        font-size: 15px;
        text-decoration: none;
        transition: all 0.3s;
        font-family: 'Tajawal-medium';
        border: 0;
        box-shadow: 0 0 20px rgb(252 172 98 / 53%);
        
    }
    .global-button:disabled{
        opacity: 0.5;
    }
    .global-button:hover{
        background-color: black;
    }

    .rtl .section-heading{
        padding-right: 16px !important;
    }
    .ltr .section-heading{
        padding-left: 16px !important;
    }

.section-heading{
        position: relative;
        margin-bottom: 32px;
    }
    
    .section-heading::before{
        content: '';
        width: 10px;
        height: 45px;
        background-color: #FCAC62;
        position: absolute;
        top: 0;
        border-radius: 10px;
        
    }
    .rtl .section-heading::before{
        right: 0;
    }
    .ltr .section-heading::before{
        left: 0;
    }
    .section-heading .section-title{
        font-size: 18px;
        color: #74757E;
        font-family: 'Tajawal-medium';
    }
    .section-heading .section-description{
        color: #212121;   
        font-size: 2.1rem;
    }
    .section-heading .site-name{
        color: #FCAC62;
    }
    
    a.route-link-exact-active{
        background-color: #FCAC62;
    }

.modal{
    background-color: #FCAC62;
    background-image: url('./assets//pattern-orange.png');
    background-repeat: repeat;
}


</style>
