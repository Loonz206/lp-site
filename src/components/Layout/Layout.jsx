import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import Logo from "../../assets/logo.svg";

const Layout = props => {
  const [state, setState] = useState("hello");
  const handleClick = () => {
    return state === "hello" ? setState("boob") : setState("hello");
  };
  const { children } = props;
  // TODO: Move these links to be dynamic instead and fed into LKP
  const links = [
    {
      name: "about",
      path: "/about",
      id: 0
    },
    {
      name: "services",
      path: "/services",
      id: 1
    },
    {
      name: "contact",
      path: "/contact",
      id: 2
    }
  ];
  useEffect(() => {
    const body = document.querySelector("body");
    if (body && !body.classList.contains("js")) {
      body.classList.add("js");
    }
  }, []);
  return (
    <div className={state === "hello" ? "wrap" : "wrap active"} id="wrap">
      <Header handleClick={handleClick} state={state} links={links} />
      <div className="card-container">
        <Link to="/">
          <Logo className="img-responsive" />
          UX/UI Designer & Front-End Developer
        </Link>
        <br />
        <a href="https://twitter.com/loonz206">@loonz206</a>
      </div>
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  children: []
};

Layout.propTypes = {
  children: PropTypes.node
};
