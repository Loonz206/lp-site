import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout/Layout";

const Home = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  const pluralPostsLogic = () => {
    return totalCount > 1 ? `${totalCount} Posts` : `${totalCount} Post`;
  };
  return (
    <Layout>
      <h4>{pluralPostsLogic()}</h4>
      <hr />
      {edges.map(({ node }) => (
        <article key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <small>{node.frontmatter.date}</small>
            <p>{node.excerpt}</p>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
      totalCount
    }
  }
`;

Home.propTypes = {
  data: PropTypes.shape().isRequired
};
