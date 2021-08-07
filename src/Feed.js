import {
  EventAvailableRounded,
  ImageRounded,
  SubscriptionsRounded,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";

import { selectUser } from "./features/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      msg: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="photo" Icon={ImageRounded} color="#7085f9" />
          <InputOption
            title="subscribe"
            Icon={SubscriptionsRounded}
            color="#7085f9"
          />
          <InputOption
            title="event"
            Icon={EventAvailableRounded}
            color="#7085f9"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, desc, msg, photoUrl } }) => (
        <Post key={id} name={name} desc={desc} msg={msg} photoUrl={photoUrl} />
      ))}
    </div>
  );
};

export default Feed;
