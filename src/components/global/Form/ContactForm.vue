<template>
    
    <form class="form-items" >
                    
        
        <!-- Start Grid Two -->
        <div class="grid-two">
            <div class="form-item">
                <label for="username" class="form-label">الاسم</label>
                <input type="text" 
                name="username" id="username"
                class="form-item-input" v-model="formData.username">
            </div>
            <div class="form-item">
                <label for="email" class="form-label">ايميل</label>
                <input type="email" name="email"
                 id="email" class="form-item-input" v-model="formData.email">
            </div>
            <div class="form-item">
                <label for="mobileNumber" class="form-label">رقم الجوال</label>
                <input type="tel" name="mobileNumber" class="form-item-input" 
                id="mobileNumber" v-model="formData.mobileNumber">
            </div>
            <div class="form-item">
                <label for="subject" class="form-label">الموضوع</label>
                <input type="text" name="subject" id="subject" 
                class="form-item-input" v-model="formData.subject">
            </div>
        </div><!-- End Grid Two -->
        <div class="form-item">
            <label for="message" class="form-label">الرسالة</label>
            <textarea name="message" class="form-item-input"
             id="message" v-model="formData.message"></textarea>
        </div>
        
        <div class="form-group">
            <input type="submit" class="global-button" v-on:click="save" value="ارسال" />
        </div>
    </form>
</template>
<script setup>
import {reactive} from 'vue';
const formData = reactive({
    username: '',
    email: '',
    subject: '',
    mobileNumber: '',
    message: ''
})
const save = () => {
    if(formData.username == ''){
        alert("the username is required")
    }else if(formData.email == ''){
        alert("the email is required")
    }else if(formData.mobileNumber == ''){
        alert('mobile is required')
    }else if(formData.subject == ''){
        alert('subject requird')
    }else if(formData.message == ''){
        alert('your message is required')
    }else{
        alert('form has been submited')
        formData.username = '';
        formData.email = '';
        formData.mobileNumber = '';
        formData.subject = '';
        formData.message = '';
    }
}
</script>