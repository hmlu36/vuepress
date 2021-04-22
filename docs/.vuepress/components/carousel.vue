<template>
  <b-container fluid>
    <p class="text-center content">
      {{ !!images[slide] ? images[slide].content : "" }}
    </p>
    <b-carousel
      v-model="slide"
      fade
      :interval="1500"
      controls
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with custom text -->
      <template v-for="image in images">
        <b-carousel-slide :img-src="image.path" />
      </template>
    </b-carousel>
  </b-container>
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
      const photos = require.context("../public/photo/", true, /\.jpg$/);

      photos.keys().forEach((key) => {
        let tempContent = key.replace(".jpg", "").replace(".\/", "");
        this.images.push({
          path: photos(key),
          content: tempContent,
          //content: tempContent.substr(tempContent.indexOf(".") + 1),
        });
        console.log(key);
      });
      //console.log(JSON.stringify(this.images));
    },
  },
  mounted() {
    this.loadData();
    
    // 移除theme-default-content, 畫面寬的限制
    let defaultContent = document.getElementsByClassName("theme-default-content")[0];
    defaultContent.className = "";
  },
};
</script>

<style scoped>
.content {
  font-size: 24px;
}
</style>
