import React from "react";
import LandingPage from "./landingPage";
import DisplayWatchesArea from "./displayWatchesArea";


const MainSections = () => {
  return (
    <div className="mainSection">
      <div className="intromat mat enterDone">
        <LandingPage>
          <DisplayWatchesArea type="intro" />
        </LandingPage>
      </div>
      <div className="sizemat mat exitDone">
        <DisplayWatchesArea type="size" />
      </div>
      <div className="casemat mat exitDone">
        <DisplayWatchesArea type="case" />
      </div>
      <div className="bandmat mat exitDone">
        <DisplayWatchesArea type="band" />
      </div>
    </div>
  );
};

export default MainSections;
