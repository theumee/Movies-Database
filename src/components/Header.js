import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img
            className="logo"
            src={require("./../assets/logo.png").default}
            alt="logo"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
