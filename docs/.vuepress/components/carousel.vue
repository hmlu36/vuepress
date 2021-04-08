<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(slide, i) in images" :key="i">
        {{ slide.content }}
        <img :src="slide.path" class="swiper-lazy" />
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    slides: [
      {
        title: 'Slide #1',
        content: 'Slide content.',
      },
    ],
    images: [],
    swiperOption: {
      spaceBetween: 30,
      autoHeight: true, //enable auto height
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
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

<style scoped>
.swiper {
  height: auto;
}
</style>
