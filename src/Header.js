import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  NotificationsTwoTone,
  SupervisorAccountTwoTone,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
          alt="err"
        />
        <div className="header_search">
          <SearchIcon />

          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccountTwoTone} title="My Network" />
        <HeaderOption Icon={Chat} title="Chat" />
        <HeaderOption Icon={BusinessCenter} title="business" />
        <HeaderOption Icon={NotificationsTwoTone} title="Notification" />
        <HeaderOption title="me" onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
