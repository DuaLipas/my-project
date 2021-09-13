const {BrowserRouter, Switch, Route} = require("react-router-dom");
const About = require("./about");
const CryptoCurrency = require("./cryptocurrency");
const Nav = require("./nav");

function Recipe() {
  // console.log("This logs");
  let pgTitle = "Project Apps";
  return (
    <BrowserRouter>
      <Nav title={pgTitle} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cryptocurrency">
          <CryptoCurrency />
        </Route>
        {/* <Route path="/randombored">
          <RandomBored />
        </Route> */}
        <div>
          <p></p>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

module.exports = Recipe;
