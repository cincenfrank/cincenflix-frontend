<template>
  <div>
    <img
      class="loading-logo"
      src="@/assets/logo.png"
      alt="loading logo image"
    />
    <h6 class="loading-text">LOADING IN PROGRESS</h6>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading-logo {
  margin: 50px 0;
  width: 500px;
  animation: loading-image-animation 2.5s infinite;
  //   display: block;
}
.loading-text {
  animation: loading-text-animation 2.5s infinite;
}
@keyframes loading-image-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes loading-text-animation {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.1;
  }
}
</style>