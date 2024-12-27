import React from "react";
import { useStore } from "zustand";
import { watchStore } from "../store/store";
import { BANDS_ARRAY, CASES_ARRAY, SIZES_ARRAY, WATCHES } from "../watchData";
import { getName } from "../utils/reusable";

const ProductDetails = () => {
  const { data: selectedWatchData } = useStore(watchStore);

  const onClickSideView = (e) => {
    if (e.currentTarget.textContent === "Side view") {
      e.currentTarget.textContent = "Front view";
      document
        .querySelector(".showFrontView")
        ?.classList.replace("showFrontView", "showSideView");
    } else {
      e.currentTarget.textContent = "Side view";
      document
        .querySelector(".showSideView")
        ?.classList.replace("showSideView", "showFrontView");
    }
  };

  const selectedBand = BANDS_ARRAY.find(
    ({ value }) => value === selectedWatchData.band
  );
  const selectedCase = CASES_ARRAY.find(
    ({ value }) => value === selectedWatchData.case
  );
  const selectedSize = SIZES_ARRAY.find(
    ({ value }) => value === selectedWatchData.size
  );

  return (
    <div className="wrapper">
      <div className="productinfo">
        <button
          className="sideViewBtn showFrontView typography-caption button"
          aria-hidden="true"
          aria-label="Switch to side view"
          type="button"
          onClick={onClickSideView}
        >
          Side view
        </button>
        <div aria-live="polite" role="text">
          <div className="watchName typography-caption">
            {
              WATCHES.find(
                (watch) => watch.value === selectedWatchData.watchName
              )?.label
            }
          </div>
          <div className="watchTitle">
            {getName(selectedSize)} {getName(selectedCase)} with{" "}
            {getName(selectedBand)}
          </div>
          <div className="watchPrice">
            <div className="pricepoint-fullPrice-comparative">
              From <span className="nowrap">${selectedWatchData.amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
