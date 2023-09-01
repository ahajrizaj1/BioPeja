import React from "react";
import "./style/banner.scss";
import { Button } from "@mui/material";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text__container">
        <h1>Prolong Your Life With BioPeja</h1>
        <h2>We Care for you</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          consectetur ut cumque, consequuntur doloremque repudiandae, earum id
          beatae quae tempora temporibus obcaecati eaque nam commodi!
        </p>
        <Button className="banner__btn" variant="contained" color="warning">Learn More...</Button>
      </div>
    </div>
  );
};

export default Banner;
