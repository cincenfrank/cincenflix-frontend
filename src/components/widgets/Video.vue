<template>
  <video
    class="video-player"
    :src="'/uploadedMovies/' + movie.cincenflix_id"
    id="video-container"
    controls
    autoplay
  ></video>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
.video-player {
  display: block;
  height: 100%;
  width: 100%;
}
</style>