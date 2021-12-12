<template>
  <div>
    <h1 class="mb-5">Upload new Video</h1>
    <StepsVisualizer
      :stepsNumber="3"
      :inProgressStep="uploadProcessStep"
      @onStepClicked="(stepClicked) => (uploadProcessStep = stepClicked)"
    ></StepsVisualizer>
    <div class="mb-5" v-if="uploadProcessStep === 1">
      <label for="formFile" class="form-label"
        >Choose the media file to import</label
      >
      <div class="d-flex align-items-center">
        <input
          class="form-control me-2"
          type="file"
          id="formFile"
          @change="onFileUpload"
        />

        <button
          class="btn btn-outline-danger"
          :class="file ? '' : 'disabled'"
          @click="onNextStepPressed"
        >
          Next
        </button>
      </div>
      <div class="d-flex justify-content-end"></div>
    </div>
    <div v-if="uploadProcessStep === 2">
      <label for="movieSearch" class="form-label"
        >Search for the movie data</label
      >
      <SearchMovieBar @onSearchMovie="onSearchMovie"></SearchMovieBar>
      <div class="shell row row-cols-5 gy-4">
        <div
          class="col"
          v-for="(movie, i) in movieSearchList"
          :key="i + 'media-card'"
        >
          <MediaCard
            :posterUrl="posterUrl(movie.poster_path)"
            :title="movie.original_title"
            :overview="movie.overview"
            @onMediaCardSelected="onMediaCardSelected(movie)"
          ></MediaCard>
        </div>
      </div>
    </div>
    <div v-if="uploadProcessStep === 3">
      <ProgressBar :progressBarPercentage="progressBarPercentage"></ProgressBar>
      <button
        class="btn btn-outline-danger ms-3"
        :class="selectedMovie.title ? '' : 'disabled'"
        @click="submitFile"
      >
        Upload to Server
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MediaCard from "../widgets/MediaCard.vue";
import ProgressBar from "../widgets/ProgressBar.vue";
import StepsVisualizer from "../widgets/StepsVisualizer.vue";
import SearchMovieBar from "../widgets/SearchMovieBar.vue";
export default {
  components: { MediaCard, ProgressBar, StepsVisualizer, SearchMovieBar },
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIEDB_API_KEY,
      file: "",
      movieName: "",
      year: "",
      cast: [],
      genres: [],
      movieSearchList: [],
      // searchText: "",
      progressBarPercentage: 0,
      selectedMovie: {},
      uploadProcessStep: 1,
    };
  },
  methods: {
    onFileUpload(event) {
      //   console.log(event);
      this.file = event.target.files[0];
    },
    onNextStepPressed() {
      this.uploadProcessStep++;
    },
    submitFile() {
      let formData = new FormData();
      // TODO validation logic for file
      formData.append("file", this.file);
      formData.append("movie_data", JSON.stringify(this.selectedMovie));
      axios
        .post("/api/uploadMovie.php", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: this.onUploadProgress,
        })
        .then((resp) => {
          console.log("FILE SUCCESSFULLY UPLOADED");
          console.log(resp);
          //   this.files = '';
        })
        .catch((e) => {
          console.log("FILE UPLOAD ERROR", e);
        });
    },
    posterUrl(posterPath) {
      if (posterPath) {
        return "https://image.tmdb.org/t/p/w342" + posterPath;
      } else {
        return require("@/assets/no_image.jpeg");
      }
    },
    onUploadProgress(progressEvent) {
      if (progressEvent.lengthComputable) {
        // console.log(progressEvent.loaded + " " + progressEvent.total);
        console.log(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
        this.progressBarPercentage = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        // this.updateProgressBarValue(progressEvent);
      }
    },
    onSearchMovie(searchedText) {
      if (searchedText.trim() !== "") {
        // this.pendingCalls++;
        axios
          .get("https://api.themoviedb.org/3/search/movie", {
            params: { api_key: this.apiKey, query: searchedText },
          })
          .then((resp) => {
            console.log(resp.data);
            this.movieSearchList = resp.data.results;

            // this.pendingCalls--;
          });
      }
    },
    onMediaCardSelected(movie) {
      this.selectedMovie = movie;
      this.selectedMovie["custom_type"] = "movie";
      this.uploadProcessStep++;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>