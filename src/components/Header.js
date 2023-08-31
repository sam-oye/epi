import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/" className="btn btn-success px-3">
            HOME PAGE
          </Link>
          EPIDEMIOLOGY: PREDICTING DISEASES
        </h1>
      </header>
    </div>
  );
}

export default Header;
