<template>
  <div class="progress-bar-container rounded-pill mb-5">
    <div
      class="progress-bar-bar py-3 bg-success"
      :style="'width: ' + progressBarPercentage + '%'"
    ></div>
    <h6
      class="
        progress-bar-indicator
        position-absolute
        text-white
        start-50
        top-50
        translate-middle
      "
    >
      {{ progressBarPercentage }} %
    </h6>
  </div>
</template>

<script>
export default {
  props: {
    progressBarPercentage: Number,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.progress-bar-container {
  display: flex;
  overflow: hidden;
  background-color: black;
  position: relative;
  border-radius: 50%;
  .progress-bar-bar {
    transition: all 0.5s;
    // background-color: ;
  }
}
</style>