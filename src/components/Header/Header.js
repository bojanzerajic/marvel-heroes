import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header__wrapper col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="row">
        <Link style="width:725px" to='/'><img
          className="col-lg-3 col-md-4 col-sm-6 col-12 offset-lg-6"
          src="https://1000logos.net/wp-content/uploads/2017/08/Marvel-emblem.jpg"
          alt="logo"
        />
        </Link>
        <h1 className="Header__title col-lg-2 col-md-4 col-sm-6 col-12">
          Marvel Heroes
        </h1>
      </div>
    </div>
  );
};
