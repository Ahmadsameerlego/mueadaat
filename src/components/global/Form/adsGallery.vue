<template>
    <!-- Start Card -->
    <div class="card">
        <!-- Start Top -->
        <div class="top">
            <p class="text-body">يمكن اضاافة 5 صور فقط</p>
        </div><!-- End Top -->
        <!-- Start Drag Area -->
        <div class="drag-area" @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">
                <div v-if="!isDragging">
                    <div class="select" role="button" @click="selectFiles">
                    <svg width="64" height="58" viewBox="0 0 64 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.875 31.9189H41.125" stroke="#FCAC62" stroke-width="2" stroke-linecap="round"/>
                    <path d="M32 22.7939V41.0439" stroke="#FCAC62" stroke-width="2" stroke-linecap="round"/>
                    <path d="M38.7592 56.2523H25.2408C15.7474 56.2523 11.0009 56.2523 7.59118 54.0155C6.11536 53.047 4.8479 51.8027 3.86149 50.3536C1.58328 47.006 1.58328 42.3455 1.58328 33.0249C1.58328 23.7047 1.58328 19.0443 3.86149 15.6966C4.8479 14.2473 6.11536 13.003 7.59118 12.0346C9.7824 10.5973 12.5251 10.0836 16.7247 9.89994C18.7289 9.89994 20.4541 8.40897 20.8471 6.47958C21.4368 3.58553 24.025 1.50232 27.0308 1.50232H36.9691C39.9751 1.50232 42.5632 3.58553 43.1527 6.47958C43.5458 8.40897 45.2712 9.89994 47.2752 9.89994C51.4747 10.0836 54.2177 10.5973 56.4086 12.0346C57.8847 13.003 59.1521 14.2473 60.1384 15.6966C62.4166 19.0443 62.4166 23.7047 62.4166 33.0249C62.4166 42.3455 62.4166 47.006 60.1384 50.3536C59.1521 51.8027 57.8847 53.047 56.4086 54.0155C52.9989 56.2523 48.2523 56.2523 38.7592 56.2523Z" stroke="#FCAC62" stroke-width="2"/>
                    <path d="M10.7083 22.7939H13.75" stroke="#FCAC62" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    
                </div>
                
            </div>
            <span v-else class="select">ارفع هنا</span>
            <input name="file " type="file" class="file" ref="fileInput" 
            multiple @change="onFileSelect">
        </div><!-- End Drag Area -->
        <!-- Start All Images -->
        <div class="all-images">
            <!-- Start Image -->
            <div class="image" v-for="(image, index) in images" :key="index">
                <span class="delete" @click="deleteImage(index)">&times;</span>
                <img :src="image.url" />
            </div><!-- End Image -->
        </div><!-- End All Images -->
    </div><!-- End Card-->
</template>
<script>
export default(await import('vue')).defineComponent({
    data(){
        return{
            images: [],
            isDragging: false
        }
    },
    methods:{
        selectFiles(){
            this.$refs.fileInput.click();
        },
        onFileSelect(event){
            const files = event.target.files;
            if(files.length === 0) return;
            for(let i = 0; i < files.length; i++ ){
                if(files[i].type.split("/")[0] != "image") continue;
                if(!this.images.some((e)=> e.name === files[i].name)){
                    this.images.push({name: files[i].name, url:URL.createObjectURL(files[i])})
                }
            }
            console.log(this.images)
        },
        deleteImage(index){
            this.images.splice(index, 1);
        },
        onDragOver(event){
            event.preventDefault();
            this.isDragging = true;
            event.dataTransfer.dropEffect="copy";
        },
        onDragLeave(event){
            event.preventDefault();
            this.isDragging = false;
        },
        onDrop(event){
            event.preventDefault();
            this.isDragging = false;
            const files = event.dataTransfer.files;
            for(let i = 0; i < files.length; i++ ){
                if(files[i].type.split("/")[0] != "image") continue;
                if(!this.images.some((e)=> e.name === files[i].name)){
                    this.images.push({name: files[i].name, url:URL.createObjectURL(files[i])})
                }
            }
        }
    }
})
</script>
<style scoped>
.card{
    padding: 32px;
    overflow: hidden;
    margin-bottom: 32px;
}
.card .all-images{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
}
.card .image{
    width: 100%;
    height: 100px;
    position: relative;
    margin-bottom: 8px;
}
.top p{
    text-align: center;
}
.drag-area{
    text-align: center;
    padding: 16px;
    border: 1px dashed orange;
    margin: 32px 0;
    user-select: center;
    --webkit-user-select: none;
}
.drag-area svg{
    display: block;
    margin: 0 auto;
}
.card .select{
    cursor: pointer;
    transition: 0.4s;
}
.card .select:hover{
    opacity: 0.6;
}
.image img{
    width: 100%;
    height: 120px;
    border-radius: 10px
}
.image span{
    position: absolute;
    top: -2px;
    right: 9px;
    font-size: 20px;
    cursor: pointer;
}
.card input,
.card .drag-area .on-drop,
.card .drag-area.dragover .visible{
    display: none
}
.delete{
    z-index: 999;
    color: red;
}
</style>