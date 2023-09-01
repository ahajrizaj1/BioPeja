import React, { useState } from "react";
import "./style/navbar.scss";
import { Link } from "react-router-dom";
import { Hive, JoinFull, Login } from "@mui/icons-material";
import { Button } from "@mui/material";
import MobileNav from "./MobileNav";
import Backdrop from "../Backdrop";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  const resize = () => {
    if (window.innerWidth > 850) {
      setShowMobile(false);
    }
  };

  window.addEventListener("resize", resize);
  return (
    <nav className="navbar">
      {showMobile && <MobileNav />}
      {showMobile && <Backdrop close={() => setShowMobile(false)} />}
      <div className="nav__logo">
        <Link to="/" className="logo" style={{display:'flex', alignItems:'center'}}>
          BioPeja
        <Hive className="hive__icon" />
        </Link>
      </div>
      <div className="nav__links">
        <div className="nav__link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav__link">
          <Link to="/">About</Link>
        </div>
        <div className="nav__link">
          <Link to="/">Products</Link>
        </div>
        <div className="nav__link">
          <Link to="/">Services</Link>
        </div>
        <div className="nav__link">
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="nav__auth">
        <Link to="/login">
          <Button className="auth__btn" variant="outlined" color="warning">
            Log In <Login />
          </Button>
        </Link>
        <Link to="/register">
          <Button className="auth__btn" variant="outlined" color="warning">
            Sign Up <JoinFull />
          </Button>
        </Link>
      </div>
      <div className="burger" onClick={() => setShowMobile(!showMobile)}>
        <div style={{ backgroundColor: showMobile ? "white" : "" }}></div>
        <div style={{ backgroundColor: showMobile ? "white" : "" }}></div>
        <div style={{ backgroundColor: showMobile ? "white" : "" }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
