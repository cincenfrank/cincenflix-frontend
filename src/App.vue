<template>
  <div class="bg-dark d-flex flex-column overflow-hidden" id="app">
    <NavBar
      :pagesList="pagesList"
      :activePage="activePage"
      @onNavClick="onNavClick"
    ></NavBar>
    <div class="page-container overflow-auto flex-grow-1">
      <div class="container pt-5 position-relative mt-5 overflow-hidden">
        <LoadingPage v-if="loadingPage"></LoadingPage>
        <Video
          :movie="selectedMovie"
          v-else-if="activePage === 'movie'"
        ></Video>
        <HomePage
          v-else-if="activePage === 'home'"
          @onMediaCardSelected="onMediaCardSelected"
        ></HomePage>
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <UploadPage v-else-if="activePage === 'upload'"></UploadPage>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "./components/pages/HomePage.vue";
// import HomePage from "./components/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import UploadPage from "./components/pages/UploadPage.vue";
import Video from "./components/widgets/Video.vue";
import LoadingPage from "./components/pages/LoadingPage.vue";

export default {
  name: "App",
  components: {
    UploadPage,
    NavBar,
    HomePage,
    Video,
    LoadingPage,
  },
  data() {
    return {
      pagesList: ["home", "upload"],
      activePage: "home",
      selectedMovie: {},
      loadingPage: false,
    };
  },
  methods: {
    onNavClick(clickedPage) {
      this.activePage = clickedPage;
      this.selectedMovie = {};
    },
    onMediaCardSelected(movie) {
      this.selectedMovie = movie;
      this.activePage = "movie";
    },
  },
};
</script>

<style lang="scss">
// html {
//   background-color: black;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  // background-color: black;
  color: white;
  height: 100vh;
  overflow: auto;
}
</style>
