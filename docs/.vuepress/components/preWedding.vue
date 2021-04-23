<template>
  <div>
    <b-carousel
      v-model="slide"
      fade
      :interval="5000"
      controls
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-next="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <template v-for="image in images">
        <b-carousel-slide :img-src="image.path" />
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 0,
    sliding: null,
    images: [],
  }),
  methods: {
    loadData() {
      const photos = require.context("../public/preWedding/", true, /\.jpg$/);

      photos.keys().forEach((key) => {
        let tempContent = key.replace(".jpg", "").replace(".\/", "");
        this.images.push({
          path: photos(key),
          content: tempContent,
          //content: tempContent.substr(tempContent.indexOf(".") + 1),
        });
        //console.log(key);
      });
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.resizeImage();
    },
    resizeImage() {
      //console.log(this.slide);
      //console.log(JSON.stringify(this.images));
      let activeImage = this.images[this.slide];
      //console.log(JSON.stringify(activeImage));
      const img = new Image();
      img.src = activeImage.path;
      img.onload = ({ target }) => {
        console.log(target.width + " " + target.height);
        let defaultContent = document.getElementsByClassName("theme-default-content")[0];
        if (target.width > target.height) {
          defaultContent.style.maxWidth = "1080px";
        } else {
          defaultContent.style.maxWidth = "720px";
        }
        //console.log(defaultContent.style.maxWidth);
      };
    },
  },
  mounted() {
    this.loadData();

    // 調整theme-default-content, 畫面寬的限制
    this.resizeImage();
  },
};
</script>

<style scoped>
.content {
  font-size: 24px;
}
</style>
