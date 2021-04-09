<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide v-for="(image, index) in images" :key="index" :img-src="image.path">
        <h1>{{ image.content }}</h1>
      </b-carousel-slide>
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
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  mounted() {
    const result = require.context('../public/photo/', true, /\.jpg$/);

    //console.log(JSON.stringify(result.keys()));

    result.keys().forEach((key) => {
      this.images.push({ path: result(key), content: key.replace('.jpg', '').replace('.\/', '') });
      // console.log(key);
    });
    //console.log(JSON.stringify(this.images));
  },
};
</script>

<style scoped></style>
