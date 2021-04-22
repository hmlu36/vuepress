<template>
  <div>
    <b-carousel
      v-model="slide"
      fade
      :interval="1000"
      controls
      background="#ababab"
      img-width="100%"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
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
      
      //let activeCarousel = document.querySelector('.carousel-item .active');
      //let image = activeCarousel.querySelector('img');
      //console.log(image.length);
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  mounted() {
    this.loadData();

    // 移除theme-default-content, 畫面寬的限制
  },
};
</script>

<style scoped>
.content {
  font-size: 24px;
}
</style>
