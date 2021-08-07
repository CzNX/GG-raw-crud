import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice";

const Login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [picurl, setpicurl] = useState("");

  const dispatch = useDispatch();
  const logintoapp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        dispatch(
          login({
            email: user.user.email,
            uid: user.user.uid,
            displayName: user.user.displayName,
            photoURL: user.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const reg = () => {
    if (!name) {
      alert("plz enter ful name");
    }
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: picurl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                picurl: picurl,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <h1>Linkedin page</h1>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="full name req if reg"
        />
        <input
          type="text"
          value={picurl}
          onChange={(e) => setpicurl(e.target.value)}
          placeholder="profile pic url"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          placeholder="password"
        />
        <button type="submit" onClick={logintoapp}>
          login
        </button>
      </form>
      <p>
        Not a member? <span onClick={reg}>Reg Now</span>
      </p>
    </div>
  );
};

export default Login;
