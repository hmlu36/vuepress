<template>
  <div>
    <p class="text-center content">
      {{ !!images[slide] ? images[slide].content : "" }}
    </p>
    <b-carousel
      v-model="slide"
      fade
      :interval="4000"
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
    const result = require.context("../public/photo/", true, /\.jpg$/);

    //console.log(JSON.stringify(result.keys()));

    result.keys().forEach((key) => {
      let tempContent = key.replace(".jpg", "").replace(".\/", "");
      this.images.push({
        path: result(key),
        content: tempContent.substr(tempContent.indexOf(".") + 1),
      });
      // console.log(key);
    });
    //console.log(JSON.stringify(this.images));
  },
};
</script>

<style scoped>
.content {
  font-size: 24px;
}
</style>
