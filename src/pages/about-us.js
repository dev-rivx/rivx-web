import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import BlogPage from '@scenes/BlogPage';
import PropTypes from "prop-types";
import AboutUsPage from '../scenes/AboutUsPage';

const Blog = ({ pageContext }) => {
  const title = 'About Us | RIVX - Web3 Digital Agency | RIVX Lab';
//   const description = `If you would like to find some useful articles about digital products - welcome to our blog page. Here we tell you about design and development, we share our case studies with you, and we talk about logos and branding.`;
  const { page } = pageContext;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title}></Head>
        {/* <BlogPage page={page}/> */}
        <AboutUsPage />
      </Layout>
    </Providers>
  );
};
Blog.propTypes = {
  pageContext: PropTypes.object,
};
export default Blog;
