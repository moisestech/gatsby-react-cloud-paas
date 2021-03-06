/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * Might need to install
 * https://www.gatsbyjs.com/plugins/gatsby-plugin-create-client-paths
 *
 * Further Reading
 * https://www.gatsbyjs.com/tutorial/authentication-tutorial/#creating-client-only-routes
 *
 */

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};
