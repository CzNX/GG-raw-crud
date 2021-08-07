import { Avatar } from "@material-ui/core";
import { Comment, Share, ThumbUpTwoTone } from "@material-ui/icons";
import InputOption from "./InputOption";
import "./Post.css";
import { useSelector } from "react-redux";

import { selectUser } from "./features/userSlice";

const Post = ({ name, desc, msg, photoUrl }) => {
  const user = useSelector(selectUser);

  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={user.photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{msg}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpTwoTone} title="like" color="gray" />
        <InputOption Icon={Comment} title="comment" color="gray" />
        <InputOption Icon={Share} title="share" color="gray" />
      </div>
    </div>
  );
};

export default Post;
