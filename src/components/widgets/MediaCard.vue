<template>
  <div class="media-card" @click="onMediaCardClick">
    <img class="poster-img" :src="posterUrl" :alt="title + ' poster'" />
    <div class="card-overlay">
      <p>
        <strong>Title: </strong>
        <span>{{ title }}</span>
      </p>
      <strong>Overview </strong>
      <p class="overview">
        <span> {{ overview ? overview : "overview not available" }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    posterUrl: String,
    overview: String,
  },
  data() {
    return {};
  },
  methods: {
    onMediaCardClick() {
      this.$emit("onMediaCardSelected");
    },
  },
};
</script>

<style lang="scss" scoped>
.media-card {
  padding: 0;
  position: relative;
  display: inline-block;

  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;

  .poster-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: filter 0.3s;
  }
  &:hover {
    .poster-img {
      filter: blur(5px);
    }
    .card-overlay {
      opacity: 1;
      top: 0;
    }
  }
  .card-overlay {
    padding: 10px;
    height: 100%;
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: rgba(2, 2, 2, 0.6);
    color: white;
    opacity: 0;
    transition: all 0.3s;
    overflow: auto;
    .stars-rank {
      display: inline-block;
    }
  }
}
</style>