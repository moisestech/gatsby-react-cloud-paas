import React from "react";

// AUTH DEPENDENCIES
import "firebase/auth";
import "firebase/firestore";

import Layout from "./src/components/Layout";

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
