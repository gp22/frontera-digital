/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
const React = require("react")

// You can delete this file if you're not using it
const headComponents = [
  <script>
    var clicky_site_ids = clicky_site_ids || [];
    clicky_site_ids.push(101347445);
  </script>,
  <script async src="//static.getclicky.com/js"></script>,
  <noscript>
    <p>
      <img
        alt="Clicky"
        width="1"
        height="1"
        src="//in.getclicky.com/101347445ns.gif"
      />
    </p>
  </noscript>,
]

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents)
}
