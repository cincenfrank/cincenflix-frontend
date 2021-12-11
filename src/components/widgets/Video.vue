<template>
  <!-- <div
    class="video-overlay position-absolute start-0 top-0 end-0 h-100 bg-dark"
  > -->
  <!-- <h1 class="position-absolute">ciao</h1> -->
  <video
    class="video-player"
    :src="'/uploadedMovies/' + movie.cincenflix_id"
    id="video-container"
    controls
    autoplay
  ></video>
  <!-- </div> -->
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