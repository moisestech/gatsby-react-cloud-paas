import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Nevalyashka Cloud`,
    description: 'Platform as a Service',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components'],
};
