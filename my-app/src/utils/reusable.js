import { BANDS, CASES, SIZES, WATCHES } from "../watchData";

const OPTIONS = {
  case: CASES,
  band: BANDS,
  size: SIZES,
};

export const findAvailableOptions = ({ watchName, optionName }) => {
  const watchData = WATCHES.find((watch) => watch.value === watchName);
  const availableOptions = watchData?.availableOptions?.[optionName];
  return (
    availableOptions
      ?.map((value) => {
        const foundType = OPTIONS[optionName].find((item) =>
          value.startsWith(item.value)
        );
        if (foundType) {
          const foundOption = foundType.options.find(
            (option) => option.value === value
          );
          if (!foundOption) return undefined;
          return {
            label: foundOption?.labelPrefix ?? "",
            value: value,
            type: foundType.label,
            typeValue: foundType.value,
          };
        }
      })
      .filter((caseItem) => caseItem !== undefined) ?? []
  );
};

export const getName = (data) => {
  if (!data) return "";
  return `${data.labelPrefix ?? ""} ${
    data.subLabel ? data.subLabel : data.label
  }`;
};

export const getImageUrl = (name, isCaseType) => {
  const names = Array.isArray(name) ? name.join("+") : name;
  return `${names.toLowerCase()
    .split(" ")
    .map((w) => w.toLowerCase())
    .join("_")}.${isCaseType ? "png" : "jpeg"}`;
};

export const getClosestItem = ({ scroller }) => {
  const items = scroller.querySelectorAll(".scroll-item");
  const scrollerRect = scroller.getBoundingClientRect();
  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach((item) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;
    const distance = Math.abs(itemCenter - scrollerCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });
  return closestItem;
};
