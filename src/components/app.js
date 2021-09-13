const {useState, useEffect} = require("react");
const SignUp = require("./signup");
const Recipe = require("./recipe");
const supabase = require("../utilities/supabase");

function App() {
  const [session, setSession] = useState(null);
  const {theme, setTheme} = useState("Light");

  function handleLogOut() {
    supabase.auth.signOut().then(function () {
      console.log("You are signed out!");
    });
  }

  useEffect(function () {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange(function (event, supaSession) {
      setSession(supaSession);
    });
  }, []);

  let markup = <SignUp />;
  if (session) {
    let email = session.user.email;
    markup = (
      <div>
        <h2>You are logged in as {email}</h2>
        {/* <br></br> */}
        <button type="submit" onClick={handleLogOut}>
          <i class="fa fa-sign-out"> Sign Out </i>
        </button>
        {/* <button type="submit" value="Log Out" onClick={handleLogOut} /> */}
        <Recipe />
      </div>
    );
  }

  return (
    <div>
      <h1>Check current Bitcoin Price</h1>
      {/* <SignUp /> */}
      {markup}
    </div>
  );
}

let theme = "light";

let themeButton = document.querySelector(".theme");

function themeClick() {
  if (theme === "light") {
    theme = "dark";
    document.body.style.color = "lightpink";
    document.body.style.background = "#242830";
    // console.log("The theme button was clicked");
  } else {
    theme = "light";
    document.body.style.color = "#dc658b";
    document.body.style.background = "lavender";
  }
  console.log(theme);
}
themeButton.addEventListener("click", themeClick);

module.exports = App;
