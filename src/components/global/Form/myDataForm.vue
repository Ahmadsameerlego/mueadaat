<template>
    
    <section class="p-sec">
        <div class="container">
            <div class="user-head">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="35" height="35" rx="17.5" fill="#FCAC62"/>
<path d="M20.8333 20H14.1666C12.3256 20 10.8333 21.4924 10.8333 23.3333V25H24.1666V23.3333C24.1666 21.4924 22.6742 20 20.8333 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4999 16.6667C19.3409 16.6667 20.8333 15.1743 20.8333 13.3333C20.8333 11.4924 19.3409 10 17.4999 10C15.659 10 14.1666 11.4924 14.1666 13.3333C14.1666 15.1743 15.659 16.6667 17.4999 16.6667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <h4 class="title">بياناتي الشخصية</h4>
            </div>
            <form class="form-items" >
                <!-- Start Grid Two -->
                <div class="grid-two">
                    <div class="form-item">
                        <label for="username" class="form-label">{{ $t('Name') }}</label>
                        <input type="text" 
                        name="username" id="username"
                        class="form-item-input" value="عبدالرحمن العتيبي">
                    </div>
                    <div class="form-item">
                        <label for="subject" class="form-label">{{$t('companyNameLabel')}}</label>
                        <input type="text" name="subject" id="subject" 
                        class="form-item-input" value="مؤسسة الجوهرة لتأجير المعدات">
                    </div>
        
                    <div class="form-item">
                        <label for="email" class="form-label">{{$t('Email')}}</label>
                        <input type="email" name="email"
                         id="email" class="form-item-input" value="islamelorabi2023@gmail.com">
                    </div>
                    <div class="form-item">
                        <label for="mobileNumber" class="form-label">{{ $t('Phone') }}</label>
                        <input type="tel" name="mobileNumber" class="form-item-input" 
                        id="mobileNumber" value="12255125">
                    </div>
                    <div class="form-item">
                        <label for="subject" class="form-label">{{ $t("Password") }}</label>
                        <input type="text" name="subject" id="subject" 
                        class="form-item-input" value="******">
                    </div>
                    <div class="form-item">
                        <label for="subject" class="form-label">{{$t('myPlaceLabel')}}</label>
                        <select class="form-item-input" id="inputGroupSelect01">
                            <option selected>عير محدد...</option>
                            <option value="1">الرياض</option>
                            <option value="2">المدينة المنورة</option>
                            <option value="3">جدة</option>
                        </select>
        
                    </div>
                </div><!-- End Grid Two -->
        
                
                <div class="form-group">
                    <button></button>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>


</script>