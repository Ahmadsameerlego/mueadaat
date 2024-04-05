<template>
    <section class="p-sec">
        <div class="container">
          
            <div class="row">
                <div class="col-md-6">
                    <div class="ads-heading">
                        <h2 class="title">اسم عدة البناء</h2>
                    </div>
                    
                    <div class="price">
                        تكلفة الساعة : 
                        <span>150 ر.س</span>
                    </div>
                    <p class="description text-body">

                        هنالك العديد من الأنواع المتوفرة
                         لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر 
                        إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
                    </p>
                    <div class="ads-info">
                        <!-- Start First Data Ads -->
                        <div class="first-data-ads">
                            <div class="info-item"> <span class="text">الرياض</span></div>
                            <div class="info-item"><span class="text">منذ شهر</span></div>
                        </div><!-- End First Data Ads -->
                        <!-- Start Second Data Ads -->
                        <div class="second-data-ads">
                            كشف مجاني
                        </div><!-- End Second Data Ads -->
                    </div>
                    <!-- Start Author -->
                    <div class="author">
                        <!-- Start Author Info-->
                        <div class="author-info">
                            <!-- Start Author Img-->
                            <div class="author-img">
                                <img src="https://picsum.photos/id/55/300/300" >
                            </div><!-- End Author Img-->
                            <!-- Start Author Information -->
                            <div class="author-information">
                                <a href="#" class="author-name">محمد الهاشم</a>
                                <div class="author-rating">
                                    <span class="author-rating-text">4.5</span>
                                    <fa icon="star" />
                                    <span class="author-rating-text">120 تقييم</span>
                                </div>
                            </div><!-- End Author Information -->
                        </div><!-- End Author Info-->
                        <div class="author-contact">
                            asdasd
                        </div>

                    </div><!-- End Author -->

                    <div class="ads-options">
                        <div class="buttons">
                            <button>
                                <fa icon="star" />
                                <span class="text">مشاركة</span>
                            </button>
                            <button>
                                <fa icon="heart" />
                                <span class="text">أضف للمفضلة</span>
                            </button>
                        </div>
                        <div class="add-your-rate">
                            <span class="desc-rate">أضف تقييمك</span>
                            <div class="stars">
                                <fa icon="star" />
                                <fa icon="star" />
                                <fa icon="star" />
                                <fa icon="star" />
                                <fa icon="star" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <GalleryAds />
                </div>

            </div>

        </div>
    </section>
    <section class="p-sec">
        <div class="container">
            <div class="section-heading">
            <span class="section-title">{{ $t('RelatedTitle') }}</span>
            <h1 class="section-description">{{$t ('RelatedDesc')}}</h1>
        </div>

        </div>
    </section>
</template>
<script>
import GalleryAds from '../components/global/GalleryAds.vue';

export default {
name: "singleAdv",
  components: {
    GalleryAds
  }
};
</script>

<style scoped>
.ads-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
}
.ads-info .first-data-ads{
    display: flex;
    align-items: center;
}
.ads-info .description{
    margin-bottom: 32px;
}
 .price{
    margin-bottom: 16px;
}
.ads-heading{
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
    
}
.title{
    font-family: 'Tajawal-medium';
    display: inline-block;
}
.author{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border: 2px solid #EDEDED;
    border-radius: 16px;
    margin-bottom: 32px;
}
.author .author-info{
    display: flex;
}
.author .author-img{
margin-left: 16px;
}
.author .author-img img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
}
.author .author-info .author-name{
    color: #FCAC62;
    text-decoration: none;
    transition: all 0.3s;
}
.author .author-info .author-name:hover{
    color: #74757E;
}
.author .author-info .author-rating .author-rating-text{
    font-size: 14px;
}
.add-your-rate{
    display: flex;
    align-items: baseline;
}
.desc-rate{
    font-size: 14px;
    margin-left: 8px;
}
.stars{
    font-size: 13px;
}
.ads-options{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.buttons button{
    background-color: #ccc;
    padding: 5px 16px;
    border-radius: 25px;
    border: 0;
    font-size: 14px;
    display: inline-block;
    align-items: center;
}

.buttons button:first-child{
    margin-left: 8px;
}
</style>




