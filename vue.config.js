module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://localhost:8888",
        changeOrigin: true, // so CORS doesn't bite us.
      },
      "^/uploadedMovies/": {
        target: "http://localhost:8888",
        changeOrigin: true, // so CORS doesn't bite us.
      },
    },
  },
};
