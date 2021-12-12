<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="~/../assets/logo.png" alt="logo CinCenFlix" width="100" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="(page, i) in pagesList"
            :key="i + '-page'"
            @click="onNavClick(page)"
          >
            <a
              class="nav-link"
              :class="activePage == page ? 'active' : ''"
              aria-current="page"
              href="#"
              >{{ page }}</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    pagesList: Array,
    activePage: String,
  },
  methods: {
    onNavClick(pageName) {
      this.$emit("onNavClick", pageName);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  cursor: pointer;
  .nav-link {
    text-transform: capitalize;
  }
}
</style>