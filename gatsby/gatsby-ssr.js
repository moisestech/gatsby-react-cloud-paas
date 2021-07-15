import React from "react";
import Layout from "./src/components/Layout";

// AUTH
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
