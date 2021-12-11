<template>
  <div class="shell row row-cols-5 gy-4">
    <div class="col flex-grow-1" v-if="isLoading">
      <LoadingPage></LoadingPage>
    </div>
    <div
      class="col"
      v-else-if="moviesList.length > 0"
      v-for="(movie, i) in moviesList"
      :key="i + 'movie'"
    >
      <MediaCard
        :posterUrl="posterUrl(movie.poster_path)"
        :title="movie.original_title"
        :overview="movie.overview"
        @onMediaCardSelected="onMediaCardSelected(movie)"
      ></MediaCard>
    </div>
    <div class="col flex-grow-1" v-else>
      No movie found. Upload a new move in the upload page
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MediaCard from "../widgets/MediaCard.vue";
import LoadingPage from "./LoadingPage.vue";
export default {
  components: { MediaCard, LoadingPage },
  data() {
    return {
      moviesList: [],
      isLoading: true,
    };
  },
  methods: {
    getMovies() {
      axios.get("/api/getMoviesList.php").then((resp) => {
        setTimeout(() => {
          this.moviesList = resp.data.movies;
          this.isLoading = false;
        }, 2000);
      });
    },
    posterUrl(posterPath) {
      if (posterPath) {
        return "https://image.tmdb.org/t/p/w342" + posterPath;
      } else {
        return require("@/assets/no_image.jpeg");
      }
    },
    onMediaCardSelected(movie) {
      this.$emit("onMediaCardSelected", movie);
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style>
</style>