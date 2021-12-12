<template>
  <div class="d-flex w-50 text m-auto mb-5 w-100">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      id="movieSearch"
      v-model="searchText"
      @keypress.enter="onSearchMovie"
    />
    <button
      class="btn btn-outline-danger"
      :class="searchText.trim() === '' ? 'disabled' : ''"
      @click="onSearchMovie"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { searchText: "" };
  },
  methods: {
    onSearchMovie() {
      this.$emit("onSearchMovie", this.searchText);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>