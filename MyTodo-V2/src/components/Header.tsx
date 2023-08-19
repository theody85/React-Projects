import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import DateTime from "./DateTime";

const Header: FunctionComponent<{ message: string }> = ({ message }) => {
  return (
    <div>
      <Link id="header-link" to="/">
        <header className="header">
          <div className="headtag">{message}</div>
        </header>
      </Link>
      <DateTime />
    </div>
  );
};

export default Header;
