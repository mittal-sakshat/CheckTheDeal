import React from "react";
import "./aboutSection.css";
import logo from "../../../images/logo.png";
import {Typography} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <img src = {logo} alt = "logo" className="logo" />
            <h3>Quality Products at affordable prices</h3>
            {/* <Typography style={{color:"#0073D8" ,fontSize:20,  paddingTop: "5px"}}> Quality Products at affordable prices</Typography> */}
            <p>We are an ecomerce store who deliver different items at your doorstep</p>
            <p>Contact: queries@checkthedeal.com</p>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Social Media</Typography>
            <a
              href="#"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="#" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
