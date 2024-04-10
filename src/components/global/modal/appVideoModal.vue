<template>
    <div class="modal fade" id="appVideo" aria-hidden="true" aria-labelledby="appVideo" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
  
        <div class="modal-body">
          <iframe :src="about_video" height="400"></iframe>
        </div>
  
      </div>
    </div>
  </div>
</template>
<script >
import axios from 'axios';
export default {
  data() {
    return {
      about_video: '',
      about_video_photo : ''
        
      }
  },
  mounted() {
    var lang = this.$i18n.locale;
    axios
      .get("https://dashboard.mueadaat.info/admin/api/home?lang=" + lang)
      .then((response) => {
        // handle success
        this.about_video = response.data.about_video;
        this.about_video_photo = response.data.about_video_photo;
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching data:", error);
      });
  },
}
</script>
<style scoped>
video{
  width: 100%;
}
</style>