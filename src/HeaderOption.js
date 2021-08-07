import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ Icon, avatar, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}

      {avatar && (
        <Avatar className="headerOption_icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}

      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
};

export default HeaderOption;
