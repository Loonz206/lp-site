import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = props => {
  // eslint-disable-next-line react/prop-types
  const { links, handleClick, state } = props;

  const renderLinks = links.map(({ path, name, id }) => (
    <li key={id}>
      <Link to={path} className="nav-link" activeClassName="active">
        {name}
      </Link>
    </li>
  ));

  return (
    <header>
      <a href="#content" className="sr-only">
        Skip to Content
      </a>
      <a
        href="#menu"
        className={state === "hello" ? "menu-link" : "menu-link active"}
        onClick={() => handleClick()}
      >
        Menu &#x2630;
      </a>
      <nav id="menu" role="navigation">
        <ul>{renderLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape()).isRequired
};
