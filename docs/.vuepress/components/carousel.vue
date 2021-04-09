<template>
  <div>
    <swiper class="swiper" :options="swiperOption" ref="carousel">
      <swiper-slide v-for="(slide, i) in images" :key="i">
        <div class="swiper-lazy">{{ slide.content }}</div>
        <img :src="slide.path" />
      </swiper-slide>
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
      autoHeight: true, //enable auto height
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
  updated() {
    if (this.carousel) {
      this.$nextTick(() => {
        this.carousel.loopDestroy();
        this.carousel.loopCreate();
      });
    }
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

<style scoped>
.text {
  max-width: 430px;
  line-height: 1.32;
}
</style>
