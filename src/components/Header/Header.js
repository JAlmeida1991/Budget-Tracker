import React from "react";
import moment from "moment";

const Header = props => (
  <header>
    <h1>The Budget for {moment().format("MMMM, DD YYYY")}</h1>
  </header>
);

export default Header;

/* className="jumbotron" */
