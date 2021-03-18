<template>
  <div class="music-player">
    <audio ref="audio" :src="src" preload loop id="audio" muted></audio>
    <div @click="toggleSound()" class="toggle-sound"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
      src: "/public/sample.mp3"
    }),
    methods: {
    toggleSound() {
        let audio = this.$refs.audio;
        if (
          audio.paused &&
          document.querySelector(".toggle-sound").classList.contains("paused")
        ) {
          console.log("play it")
          audio.play();
          document.querySelector(".toggle-sound").classList.remove("paused");
        } else {
          console.log("pause it")
          audio.pause();
          document.querySelector(".toggle-sound").classList.add("paused");
        }
      },
    }
};
</script>

<style scoped>
</style>
