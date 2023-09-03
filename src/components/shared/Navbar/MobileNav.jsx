import { Hive, Login, JoinFull } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./style/mobileNav.scss";

import { Button } from "@mui/material";

const MobileNav = () => {
  return (
    <nav className="mobile">
      <div className="mobile__logo">
        <Link to="/" className="logo">
          BioPeja
        </Link>
        <Hive className="hive__icon" />
      </div>
      <div className="mobile__links">
        <div className="mobile__link">
          <Link to="/">Home</Link>
        </div>
        <div className="mobile__link">
          <Link to="/about">About</Link>
        </div>
        <div className="mobile__link">
          <Link to="/products">Products</Link>
        </div>
        <div className="mobile__link">
          <Link to="/services">Services</Link>
        </div>
        <div className="mobile__link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="mobile__auth">
        <Link to="/login">
          <Button className="auth__btn" variant="outlined" color="warning">
            Log In <Login />
          </Button>
        </Link>
        <Button className="auth__btn" variant="outlined" color="warning">
          Sign Up <JoinFull className="join__btn" />
        </Button>
      </div>
    </nav>
  );
};

export default MobileNav;
