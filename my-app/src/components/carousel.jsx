import React from "react";
import { useStore } from "zustand";
import { watchStore } from "../store/store";
import { WATCHES } from "../watchData";

const Carousel = ({ type }) => {
  const { data, changeAttribute } = useStore(watchStore);
  const watchData = WATCHES.find((watch) => watch.value === data.watchName);
  const onClickPrev = () => {
    const currentIndex = watchData?.availableOptions?.[type]?.indexOf(
      data[type]
    );
    if (currentIndex === undefined || currentIndex <= 0) {
      return;
    } else {
      const newValue = watchData?.availableOptions?.[type]?.[currentIndex - 1];
      if (newValue) {
        changeAttribute(type, newValue);
      }
    }
  };

  const onClickNext = () => {
    console.log("next");
    const currentIndex = watchData?.availableOptions?.[type]?.indexOf(
      data[type]
    );
    if (
      currentIndex === undefined ||
      (currentIndex !== undefined &&
        watchData?.availableOptions?.[type] &&
        currentIndex >= watchData.availableOptions[type].length - 1)
    ) {
      return;
    } else {
      const newValue = watchData?.availableOptions?.[type]?.[currentIndex + 1];
      if (newValue) {
        changeAttribute(type, newValue);
      }
    }
  };

  return (
    <div className="swipeNav">
      <button
        className="swipeArrow prev"
        onClick={onClickPrev}
        disabled={
          !watchData?.availableOptions?.[type] ||
          watchData?.availableOptions?.[type]?.indexOf(data[type]) === 0
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
          <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
        </svg>
        <span className="a11y">previous</span>
      </button>
      <button
        className="swipeArrow next"
        onClick={onClickNext}
        disabled={
          !watchData?.availableOptions?.[type] ||
          watchData?.availableOptions?.[type]?.indexOf(data[type]) ===
            watchData?.availableOptions?.[type]?.length - 1
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
          <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
        </svg>
        <span className="a11y">next</span>
      </button>
    </div>
  );
};

export default Carousel;
