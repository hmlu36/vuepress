<template>
  <div>
    <audio-player>
      <source src="../public/sample.mp3" />
    </audio-player>
    <video-player>
      <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" />
    </video-player>
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
