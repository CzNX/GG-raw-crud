import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar_recentItem">
      <div className="sidebar_hash">#</div>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You?</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>View on post</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("software engineer")}
        {recentItems("deginer")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
