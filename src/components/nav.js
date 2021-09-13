const {Link} = require("react-router-dom");

function Nav(props) {
  let {title} = props;
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/about">About </Link>
        <Link to="/cryptocurrency">Crypto Currency</Link>
        {/* <Link to="/random">Random Bored</Link> */}
      </nav>
    </header>
  );
}

module.exports = Nav;
