import React from "react";
import format from "date-fns/format";

const Header = props => (
  <header className="text-center m-1 header">
    <h1>Budget Tracker for {format(new Date(), "MMMM Do, YYYY")}</h1>
  </header>
);

export default Header;
