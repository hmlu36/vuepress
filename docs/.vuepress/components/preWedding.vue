<template>
  <div>
    <b-carousel
      v-model="slide"
      fade
      :interval="10000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
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
  mounted() {
    const photos = require.context("../public/preWedding/", true, /\.jpg$/);

    photos.keys().forEach((key) => {
      let tempContent = key.replace(".jpg", "").replace(".\/", "");
      this.images.push({
        path: photos(key),
        content: tempContent,
        //content: tempContent.substr(tempContent.indexOf(".") + 1),
      });
    });
    //console.log(JSON.stringify(this.images));
    
    let defaultContent = document.getElementsByClassName("theme-default-content")[0];
    defaultContent.className="";
  },
};
</script>

<style scoped>
.content {
  font-size: 24px;
}
</style>
