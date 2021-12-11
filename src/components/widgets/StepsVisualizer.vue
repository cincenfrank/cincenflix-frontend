<template>
  <div class="d-flex justify-content-between align-items-center">
    <div
      v-for="step in stepsNumber"
      :key="'step-circle-' + step"
      class="d-flex align-items-center mb-5"
      :class="step !== stepsNumber ? 'w-100' : ''"
      @click="onStepClicked(step)"
    >
      <div>
        <div
          class="step-circle rounded rounded-circle border border-5 px-4 py-3"
          :class="
            step < inProgressStep
              ? 'bg-success border-success'
              : 'bg-dark border-danger'
          "
        >
          {{ step }}
        </div>
      </div>
      <div
        v-if="step !== stepsNumber"
        class="step-line border-bottom border-5 flex-grow-1"
        :class="step < inProgressStep ? 'border-success' : 'border-danger'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepsNumber: Number,
    inProgressStep: Number,
  },
  data() {
    return {};
  },
  methods: {
    onStepClicked(clickedStep) {
      this.$emit("onStepClicked", clickedStep);
    },
  },
};
</script>

<style lang="scss" scoped>
.step-circle {
  cursor: pointer;
  transition: all 0.5s 0.1s;
  &.bg-success {
    transition: all 0.5s;
  }
}
.step-line {
  transition: all 0.5s;
  &.border-success {
    transition: all 0.5s 0.1s;
  }
}
</style>