<template>
  <div>
    <audio-player>
      <source src="../public/進場.mp3" />
    </audio-player>
  </div>
</template>

<script>
import { audioPlayer, videoPlayer } from 'vue-md-player';
import 'vue-md-player/dist/vue-md-player.css';
export default {
  components: {
    audioPlayer,
    videoPlayer,
  },
};
</script>
