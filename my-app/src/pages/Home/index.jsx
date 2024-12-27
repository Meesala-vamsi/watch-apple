import React from "react";
import LogoImage from "../../assets/apple-watch-design-studio-logo.jpeg";
import MainSections from "../../components/mainSections";
import Collections from "../../components/collections";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <div className="page">
        <div className="title">
          <a
            href="/"
            data-slot-name="designStudioAssets"
            data-feature-name="Astro Link"
            data-display-name="AOS: home"
            className="home_logo"
          >
            <img
              src={LogoImage}
              alt="Apple Watch"
              height={26}
              width={118}
            />
          </a>
        </div>
        <MainSections />
        <Footer />
        <Collections/>
        <div className="save-btn-container" aria-hidden="true">
          <button className="button savebtn" type="button">
            Save
            <span className="visuallyhidden">Apple Watch Style</span>
          </button>
        </div>
      </div>
    </div>
  );
}
