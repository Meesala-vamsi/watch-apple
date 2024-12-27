import { create } from "zustand";
import { WATCHES } from "../watchData";

export const watchStore = create((set) => ({
  data: {
    watchName: "S10",
    ...WATCHES[0].defaultValues,
  },
  changeAttribute: (attribute, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [attribute]: value,
      },
    })),
  changeWatch: (watchValue) => {
    const watch = WATCHES.find((watch) => watch.value === watchValue);

    if (watch) {
      activeSectionStore.getState().setActiveSection("intro");
      activeFooterButtonStore.getState().setActiveButton(null);
      set(() => ({
        data: {
          watchName: watchValue,
          ...watch.defaultValues,
        },
      }));
    }
  },
}));

export const activeFooterButtonStore = create((set) => ({
  activeButton: null,
  setActiveButton: (button) =>
    set(() => ({
      activeButton: button,
    })),
}));

export const activeSectionStore = create((set, get) => ({
  activeSection: "intro",
  setActiveSection: (section) => {
    const activeSection = get().activeSection;
    if (activeSection === section) return;

    const currentActiveSection = document.querySelector(`.${activeSection}mat`);
    if (currentActiveSection) {
      currentActiveSection.classList.replace("enterDone", "exiting");
      setTimeout(() => {
        currentActiveSection.classList.replace("exiting", "exitDone");
      }, 1500);
    }

    const newActiveSection = document.querySelector(`.${section}mat`);
    if (newActiveSection) {
      newActiveSection.classList.replace("exitDone", "entering");
      setTimeout(() => {
        newActiveSection.classList.replace("entering", "enterDone");
      }, 1500);
    }

    set(() => ({
      activeSection: section,
    }));
  },
}));
