import React from "react";
import { useStore } from "zustand";
import { activeFooterButtonStore } from "../store/store";

const LandingPage = ({ children }) => {
  const { setActiveButton } = useStore(activeFooterButtonStore);

  const onClickStart = () => {
    const page = document.querySelector(".page");
    if (page) page.classList.add("hideIntro");
    const footer = document.querySelector(".footerContainer");
    if (footer) footer.setAttribute("aria-hidden", "false");
    const saveButton = document.querySelector(".save-btn-container");
    if (saveButton) {
      saveButton.setAttribute("aria-hidden", "false");
      saveButton.classList.remove("disabled");
      saveButton.setAttribute("disabled", "false");
    }
    const collections = document.querySelector(".collectionsContainer");
    if (collections) collections.setAttribute("aria-hidden", "false");
    const greeting = document.querySelector(".intro-headline");
    if (greeting) greeting.setAttribute("aria-hidden", "true");
    const getStarted = document.querySelector(".btn-getstarted");
    if (getStarted) {
      getStarted.setAttribute("aria-hidden", "true");
      getStarted.classList.add("disabled");
      getStarted.setAttribute("disabled", "true");
    }
    const sideViewButton = document.querySelector(".sideViewBtn");
    if (sideViewButton) {
      sideViewButton.setAttribute("aria-hidden", "false");
      sideViewButton.classList.remove("disabled");
      sideViewButton.removeAttribute("disabled");
    }
    const footerOptions = document.querySelector(".button-footer");
    if (footerOptions) {
      setTimeout(() => {
        footerOptions.classList.add("show-peak");
        setActiveButton("size");
      }, 2000);
      setTimeout(() => {
        footerOptions.classList.remove("show-peak");
        setActiveButton(null);
      }, 3600);
    }
  };

  return (
    <div className="intro">
      <div className="greetingWrapper">
        <div className="greeting">
          <h1 tabIndex={-1} className="intro-headline" aria-hidden="false">
            <span role="text">
              <span className="collection-name">Apple Watch Studio</span>
              <span className="case-msg">Choose a case.</span>
              <span className="band-msg">Pick a band.</span>
              <span className="style-msg">Create your own style.</span>
            </span>
          </h1>
          <button
            tabIndex={0}
            type="button"
            className="getstarted-btn button"
            onClick={onClickStart}
            aria-hidden="false"
          >
            Get started
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LandingPage;
