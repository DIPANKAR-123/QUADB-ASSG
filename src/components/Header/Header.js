import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header font-bold">
       MOVIE ZONE
    </span>
  );
};

export default Header;
