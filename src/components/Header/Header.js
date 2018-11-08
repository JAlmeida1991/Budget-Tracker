import React from "react";
import format from "date-fns/format";

const Header = props => (
  <header className="text-center">
    <h1>Budget Tracker for {format(new Date(), "MMMM, DD YYYY")}</h1>
  </header>
);

export default Header;

/* className="jumbotron" */
