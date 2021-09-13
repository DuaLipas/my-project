const {useState} = require("react");
const supabase = require("../utilities/supabase");

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    // console.log(event.target.value);
    setEmail(event.target.value);
  }

  function handlePasswordChange(a) {
    setPassword(a.target.value);
  }

  function handleSignIn(event) {
    event.preventDefault();
    supabase.auth
      .signIn({
        email: email,
        password: password,
      })
      .then(function (data) {
        // console.log(data);
      });
  }

  function handleSignUp(event) {
    event.preventDefault();
    supabase.auth
      .signUp({email: email, password: password})
      .then(function (data) {
        // console.log(data);
      });
  }

  function handleForgotPassword() {}

  return (
    <div>
      <h1>You are not logged in. Please Log In</h1>
      <form>
        <input
          id="myInput"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />{" "}
        <label />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />{" "}
        <a id="sign" href="">
          Forgot Password
        </a>
        <br></br>
        <br></br>
        {/* <input type="submit" value="Log In" onClick={handleSignIn} />{" "}
        <input type="submit" value="Sign Up" onClick={handleSignUp} /> */}
        <button type="submit" onClick={handleSignIn}>
          <i class="fa fa-sign-in"> Sign In </i>
        </button>{" "}
        <button type="submit" onClick={handleSignUp}>
          <i class="fa fa-upload"> Sign Up </i>
        </button>
      </form>
    </div>
  );
}

module.exports = SignUp;
