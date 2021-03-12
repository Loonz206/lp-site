/* eslint-disable react/no-danger */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import Layout from "../components/Layout/Layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.html) }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape().isRequired
};
