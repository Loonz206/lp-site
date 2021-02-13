import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";

export default () => {
  return (
    <Layout>
      <h1>404 Page</h1>
      <div className="container">
        <img
          className="video"
          src="https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
          alt="Nothing to see here | 404 Page"
        />
      </div>
      <p>Oops! The page you are looking for has been removed or relocated.</p>
      <Link to="/">Go back</Link>
    </Layout>
  );
};
