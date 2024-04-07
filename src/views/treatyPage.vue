<template>
    <BreadCrumb
    :title="$t('treatyTitle')"
    :pageTitle="$t('treatyTitle')"
    :homePage="$t('Home')"
    />

    <section class="p-sec">

        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="trim-title">{{$t('lawsTitle')}}</h2>
                <p class="trim-text text-body">
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
                </p>
            </div>
            <div class="col-md-6">
                <img class="trim-img" src="https://picsum.photos/id/55/300/300">
            </div>
        </div>
    </div>

    </section>
</template>
<script setup>

import BreadCrumb from '@/components/global/BreadCrumb.vue';
</script>
<style scoped>
    .trim-title{
        font-size: 25px;
        margin-bottom: 16px !important;
    }
    .trim-img{
        width: 100%;
        height: 300px;
        border-radius: 20px;
    }
</style>