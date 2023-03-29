exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: [require.resolve("buffer/"), "Buffer"],
            }),
        ],
      resolve: {
        fallback: {
          fs: false,
          os: false
        }
      }
    })
  }