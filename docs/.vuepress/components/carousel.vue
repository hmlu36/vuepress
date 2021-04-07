<template>
  <div class="container">
    <vueper-slides :fixed-height="true">
      <vueper-slide v-for="(slide, i) in images" :key="i" :image="slide.title" :content="slide.content" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: 'Slide #1',
        content: 'Slide content.',
      },
    ],
    images: [],
  }),
  mounted() {
    const result = require.context('../public/photo/', true, /\.jpg$/);

    //console.log(JSON.stringify(result.keys()));

    result.keys().forEach((key) => {
      this.images.push({ title: result(key), content: key });
      // console.log(key);
    });
    //console.log(JSON.stringify(this.images));
  },
};
</script>
