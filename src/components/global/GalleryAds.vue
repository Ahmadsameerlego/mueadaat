<template>
    <Carousel id="gallery" :items-to-show="1"
     :wrap-around="false" v-model="currentSlide">
      <Slide v-for="galleryImg in images" :key="galleryImg.id">
        <div class="carousel__item main-img">
        <img :src="galleryImg.image" />    
        </div>
      </Slide>
    </Carousel>
  
    <Carousel
      id="thumbnails"
      :items-to-show="5"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="galleryImg in images" :key="galleryImg.id">
        <div class="carousel__item group-img-slider" @click="slideTo(galleryImg.id)">
            <img :src="galleryImg.image" />  
        </div>
      </Slide>
      <Navigation />
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'GalleryAds',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    props: {
        images : Array
    },
    data: () => ({
      currentSlide: 0,
      galleryImgs:[
        {
          id: 1,
          imgSrc: "https://picsum.photos/id/100/400/300"
        },
        {
          id: 2,
          imgSrc: "https://picsum.photos/id/50/400/300"
        },
        {
          id: 3,
          imgSrc: "https://picsum.photos/id/15/400/300"
        },
        {
          id: 4,
          imgSrc: "https://picsum.photos/id/70/400/300"
        },
        {
          id: 5,
          imgSrc: "https://picsum.photos/id/1/400/300"
        },
      ]
    }),
    methods: {
      slideTo(val) {
        this.currentSlide = val
      },
    },
  })
  </script>
  <style scoped>
  .main-img{
    width: 100%;
    height: 350px;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
  }
  .main-img img{
    width: 100%;
    height: 100%;
  }
  .carousel__item.group-img-slider{
    align-items: center !important;
  }
  .group-img-slider img{
    width: 96%;
    height: 80px;
    margin: 0 2%;
    border-radius: 10px;
    cursor: pointer;
  }
</style>