<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="footer-text">
                        {{$t('copyRight')}}
                    </p>
                </div>
                <div class="col-md-6">
                    <p class="footer-text design">
                        {{$t('implement')}}
                        <router-link to="https://alsehamy.com">{{ $t('anmat') }}</router-link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default{
        name: 'FooterCom',
    }
</script>
<style scoped>
.footer{
    background-color: #000;
    padding: 16px 0;
}
.footer .footer-text{
    color: #fff;
}
.footer .footer-text a{
    color: #FCAC62;
    transition: all 0.3s ease;
}
.footer .footer-text a:hover{
    color: #fff;
}
.rtl .footer .footer-text.design{
    float: left;
}
.ltr .footer .footer-text.design{
    float: right;
}

@media(max-width: 768px){
    .rtl .footer .footer-text.design{
    float: center !important;
}
.ltr .footer .footer-text.design{
    float: center !important;
}
}
</style>