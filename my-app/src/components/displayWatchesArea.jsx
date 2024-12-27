import React, { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { activeSectionStore, watchStore } from "../store/store";
import {
  findAvailableOptions,
  getClosestItem,
  getImageUrl,
} from "../utils/reusable";
import { Img } from "react-image";
import Carousel from "../components/carousel";
import ProductDetails from "./productDetails";

const DisplayWatchesArea = ({ type = "intro" }) => {
  const { data, changeAttribute } = useStore(watchStore);
  const { activeSection } = useStore(activeSectionStore);
  const { watchName, size } = data;

  const scrollerRef = useRef(null);

  useEffect(() => {
    if (type === "intro" || activeSection === "intro") return;
    if (type !== activeSection) return;

    const handleScroll = (event) => {
      const ele = event.target;
      if (ele) {
        const closestItem = getClosestItem({ scroller: ele });

        if (closestItem) {
          changeAttribute(type, closestItem.querySelector("button")?.id || "");
        }
      }
    };

    const scroller = scrollerRef.current;
    scroller?.addEventListener("scroll", handleScroll);

    return () => {
      scroller?.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, changeAttribute, type]);

  const value = type !== "intro" && data[type];

  useEffect(() => {
    if (scrollerRef.current) {
      const selectedItem = scrollerRef.current.querySelector(".selected-item");
      const closestItem = getClosestItem({
        scroller: scrollerRef.current,
      });
      if (selectedItem && selectedItem !== closestItem) {
        selectedItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [value]);

  return (
    <div className={`mainArea horizontalPlatter showFrontView`}>
      {type !== "intro" && (
        <div className="scroller-crop">
          <div
            className="core-scroller"
            role="group"
            aria-label={`Choose your watch ${type}`}
          >
            <div className="platter" role="radiogroup" ref={scrollerRef}>
              {findAvailableOptions({
                watchName,
                optionName: type,
              }).map((option, index) => {
                return (
                  <div
                    className={`scroll-item ${
                      option.value === data[type] ? "selected-item" : ""
                    }`}
                    key={index}
                  >
                    <button
                      type="button"
                      className="scroll-item-button"
                      role="radio"
                      aria-checked={
                        option.value === data[type] ? "true" : "false"
                      }
                      title={option.label + " " + option.type}
                      id={option.value}
                      onClick={() => changeAttribute(type, option.value)}
                    >
                      {type === "case" && (
                        <img
                          src={`/assets/${getImageUrl(
                            [option.value, size],
                            true
                          )}`}
                          width={500}
                          height={500}
                          alt={option.label + " " + option.type + " case"}
                          className="scrollerImage image"
                          name="vamsi"
                        />
                      )}
                      {type === "band" && (
                        <img
                          src={`/assets/${getImageUrl(
                            [option.value, size],
                            false
                          )}`}
                          width={500}
                          height={500}
                          alt={option.label + " " + option.type + " band"}
                          className="scrollerImage image"
                          name="band"
                        />
                      )}
                      {type === "size" && (
                        <div className="combinedimage">
                          <img
                            src={`/assets/${getImageUrl(
                              [data.case, option.value],
                              true
                            )}`}
                            width={500}
                            height={500}
                            alt={"Apple Watch Case " + option.label}
                            className="watchCase image"
                          />
                          <img
                            src={`/dist/assets/${getImageUrl(
                              [data.band, option.value],
                              false
                            )}`}
                            width={500}
                            height={500}
                            alt={"Apple Watch Case" + option.label}
                            className="watchBand image"
                          />
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {type !== "intro" && <Carousel type={type} />}
      {type !== "size" && (
        <div
          className={`combinedimage ${
            type !== "intro" ? `stuckview stuckview${type}` : ""
          }`}
        >
          {type !== "case" && (
            <Img
              src={`/assets/${getImageUrl([data.case, size], true)}`}
              width={500}
              height={500}
              alt="Apple Watch Case"
              className="watchCase image"
              
            />
          )}
          {type !== "band" && (
            <img
              src={`/assets/${getImageUrl([data.band, size], false)}`}
              width={500}
              height={500}
              alt="Apple Watch Band"
              className="watchBand image"
              
            />
          )}
        </div>
      )}
      <img
        src={`/assets/${getImageUrl(
          ["sideview", data.case, data.band, size],
          false
        )}`}
        width={500}
        height={500}
        alt="Apple Watch Side View"
        className="sideViewImage"
        aria-hidden="true"
        
      />
      <ProductDetails />
    </div>
  );
};

export default DisplayWatchesArea;
