exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        os: false
      }
    }
  })
}

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/card/`,
    toPath: `/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}