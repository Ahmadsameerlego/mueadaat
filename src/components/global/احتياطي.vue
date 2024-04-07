<template>
    <nav class="navbar navbar-expand-lg custom-nav"
    :dir="$i18n.locale == 'ar'?'rtl':'ltr'">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../../assets/logo.png">
        </router-link>
    
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav  ms-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <router-link class="nav-link" :class="$route.name == 'Home'? 'active':''" aria-current="page" :to="{ name: 'Home' }">
               {{$t('Home')}}
              </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :class="$route.name == 'About'? 'active':''" aria-current="page" :to="{ name: 'About' }">
                    {{$t('About')}}</router-link>
                </li>
                
    
    
                <li class="nav-item">
                  <router-link class="nav-link" 
                  :class="$route.name == 'Equipment'? 'active':''"  to="/workers" >
                    <span class="text-link">{{$t ('Equipment')}}</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link"
                  :class="$route.name == 'Workers'? 'active':''" to="/workers">
                    <span class="text-link">{{$t ('Workers')}}</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/create-adv">
                    <span class="text-link">{{$t ('Create')}}</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact">
                    <span class="text-link">{{$t ('Contact')}}</span>
                  </router-link>
                </li>
              </ul>
    
              <!-- Button trigger modal -->
              <button type="button" class="global-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {{$t('SignIn')}}
              </button>
            <LangCom />
        </div>
      </div>
    </nav>
    
    
    
    
    
    <transition name="fade" appear>
      <div class="my-modal-overlay" v-if="showModal" @click="showModal = false"></div>
      </transition>
      <transition name="slide" appear>
        <div class="my-modal" v-if="showModal">
          
          <SignUpForm />
          <LoginForm v-if="SignUpForm"/>
        </div>
    </transition>
    
    
    
    
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          
          <div class="modal-body">
            <SignUpForm v-if="SignUpForm"/>
            <LoginForm v-if="LoginForm" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
        
    </template>
    <script>
      import LangCom from './LangCom.vue';
      import LoginForm from './Login/LoginForm.vue';
      import SignUpForm from './Login/SignUpForm.vue';
        export default{
            name: 'HeaderCom',
            components:{
              LangCom,
              LoginForm,
              SignUpForm
            },
            data(){
              return{
                showModal: false,
              }
            }
            
        }
    </script>
    <style scoped>
    .mb-lg-0{
      margin: 0 auto;
    }
      
      .language-button{
        height: 40px;
        line-height: 37px;
        background-color: transparent;
        border: 2px solid #000;
        display: inline-block;
        padding: 0 20px;
        border-radius: 30px;
        text-decoration: none;
        color: #000;
      }
      .my-modal-overlay{
        background-color: #FCAC62;
        background-image: url(../../assets/pattern-orange.png);
        background-repeat: repeat;
      }
      .custom-rows{
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      button{
        border: 0;
      }
      .custom-nav{
        border-top: 8px solid #FCAC62;
      }
      
      .nav-link{
        font-size: 17px;
        font-family: 'Tajawal-medium';
        color: #74757E;
        padding-right: 20px !important;
        padding-left: 20px !important;
        position: relative;
        transition: all 0.3s;
      } 
      .nav-link .text-link{
        position: relative;
        z-index: +2;
      }
      
    
      .nav-link:hover{
        color: #FCAC62;
      }
    
      .nav-link:hover:before{
          right: 0 !important;
          width: 100%;
          opacity: 100%;
        }
    
      .nav-link:before{
          position: absolute;
          top: 0;
          right: -100%;
          z-index: -1 !important;
          content: '';
          background-color: #FCAC62;
        }
        
    
        .navbar-nav .nav-link.active{
        border-radius: 25px;
        background-color: #FCAC62;
        right: 0 !important;
        color: #fff;
      }
    
      .nav-link:before{
          position: absolute !important;
          top: 0 !important;
          right: -100% !important;
          z-index: -1 !important;
          content: '' !important; 
          background-color: #f5f5f5 !important;
          border-radius: 25px;
          transition: all 0.5s;
          width: 0;
          height: 100%;
          opacity: 0;
        }
    
      .navbar-nav .nav-link.active:hover:before{
        z-index: 0;
        background-color: rgb(0 0 0 / 6%) !important;
      }
      
    
      .my-modal-overlay{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 98;
        background-color: #FCAC62;
        background-image: url(../../assets/pattern-orange.png);
        background-repeat: repeat;
        transition: all 0.3s;
      }
      .my-modal{
        position: fixed;
        top: 5%;
        bottom: 5%;
        left: 10%;
        right: 10%;
        z-index: 99;
        background-color: #fff;
        width: 80%;
        max-width: 80%;
        border-radius: 15px;
        transition: all 0.3s;
        scale: 1;
        transition: all 0.3s;
        border-radius: 32px;
        min-height: 50px !important;
        height: 0;
        
      }
      .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s;
      transition: all 0.3s;
    }
    
    .fade-enter,
    .fade-leave-to {
     opacity: 0;
    }
    
    .slide-enter-active,
    .slide-leave-active {
     transition: all 0.3s;
      scale: 1;
    }
    
    .slide-enter,
    .slide-leave-to {
     scale: 0;
     transition: all 0.3s;
    }
      
    .modal-dialog{
      max-width: 80%;
    }
    .modal-body{
      padding: 0 !important;
    }
    </style>