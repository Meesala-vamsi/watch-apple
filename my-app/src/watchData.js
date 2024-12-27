export const WATCHES = [
  {
    label: "Apple Watch Series 10",
    value: "S10",
    defaultValues: {
      size: "46",
      case: "AL3",
      band: "SL4",
      amount: "429",
    },
    availableOptions: {
      size: ["42", "46"],
      case: ["AL1", "AL2", "AL3", "TI1", "TI2", "TI3"],
      band: [
        "SS1",
        "SS2",
        "SS3",
        "SS4",
        "SS5",
        "SS6",
        "SPL1",
        "SPL2",
        "SPL3",
        "SPL4",
        "SPL5",
        "SPL6",
        "SPL7",
        "SB1",
        "SB2",
        "SB3",
        "SB4",
        "SB5",
        "SB6",
        "SB7",
        "SB8",
        "SB9",
        "FW1",
        "FW2",
        "FW3",
        "BSL1",
        "BSL2",
        "BSL3",
        "BSL4",
        "BSL5",
        "BSL6",
        "BSL7",
        "SL1",
        "SL2",
        "SL3",
        "SL4",
        "SL5",
        "NSL1",
        "NSL2",
        "NSL3",
        "NSL4",
        "NSL5",
        "NSB1",
        "NSB2",
        "NSB3",
        "NSB4",
        "NSB5",
        "NSB6",
        "NSB7",
      ],
    },
  },
  {
    label: "Apple Watch Hermès Series 10",
    value: "H10",
    defaultValues: {
      size: "46",
      case: "TI4",
      band: "SGH1",
      amount: "1949",
    },
    availableOptions: {
      size: ["42", "46"],
      case: ["TI4"],
      band: ["HTH1", "HTW1", "HTW2", "HK1", "HK2", "HK3", "HGH1"],
    },
  },
  {
    label: "Apple Watch SE",
    value: "SE",
    defaultValues: {
      size: "46",
      case: "AL1",
      band: "SL1",
      amount: "279",
    },
    availableOptions: {
      size: ["42", "46"],
      case: ["AL2", "AL3", "AL1"],
      band: [
        "SS1",
        "SS2",
        "SS3",
        "SS4",
        "SS5",
        "SS6",
        "SPL1",
        "SPL2",
        "SPL3",
        "SPL4",
        "SPL5",
        "SPL6",
        "SPL7",
        "SB1",
        "SB2",
        "SB3",
        "SB4",
        "SB5",
        "SB6",
        "SB7",
        "SB8",
        "SB9",
        "FW1",
        "FW2",
        "FW3",
        "BSL1",
        "BSL2",
        "BSL3",
        "BSL4",
        "BSL5",
        "BSL6",
        "BSL7",
        "SL1",
        "SL2",
        "SL3",
        "SL4",
        "SL5",
        "NSL1",
        "NSL2",
        "NSL3",
        "NSL4",
        "NSL5",
        "NSB1",
        "NSB2",
        "NSB3",
        "NSB4",
        "NSB5",
        "NSB6",
        "NSB7",
      ],
    },
  },
];

export const SIZES = [
  { label: "40mm", value: "40", options: [{ value: "40" }] },
  { label: "42mm", value: "42", options: [{ value: "42" }] },
  { label: "44mm", value: "44", options: [{ value: "44" }] },
  { label: "46mm", value: "46", options: [{ value: "46" }] },
];

export const CASES = [
  {
    label: "Aluminum",
    value: "AL",
    options: [
      { value: "AL1", labelPrefix: "Silver" },
      { value: "AL2", labelPrefix: "Rose Gold" },
      { value: "AL3", labelPrefix: "Jet Black" },
      { value: "AL4", labelPrefix: "Midnight" },
      { value: "AL5", labelPrefix: "Starlight" },
    ],
  },
  {
    label: "Titanium",
    value: "TI",
    options: [
      { value: "TI1", labelPrefix: "Natural" },
      { value: "TI2", labelPrefix: "Gold" },
      { value: "TI3", labelPrefix: "Slate" },
      { value: "TI4", labelPrefix: "Silver" },
    ],
  },
];

export const BANDS = [
  {
    label: "Stainless Steel",
    value: "SS",
    options: [
      {
        value: "SS1",
        labelPrefix: "Natural",
        subLabel: "Milanese Loop",
      },
      {
        value: "SS2",
        labelPrefix: "Gold",
        subLabel: "Milanese Loop",
      },
      {
        value: "SS3",
        labelPrefix: "Slate",
        subLabel: "Milanese Loop",
      },
      {
        value: "SS4",
        labelPrefix: "Natural",
        subLabel: "Link Bracelet",
      },
      {
        value: "SS5",
        labelPrefix: "Gold",
        subLabel: "Link Bracelet",
      },
      {
        value: "SS6",
        labelPrefix: "Slate",
        subLabel: "Link Bracelet",
      },
    ],
  },
  {
    label: "Sport Loop",
    value: "SPL",
    options: [
      { value: "SPL1", labelPrefix: "Ultramarine" },
      { value: "SPL2", labelPrefix: "Lake Green" },
      { value: "SPL3", labelPrefix: "Blue Cloud" },
      { value: "SPL4", labelPrefix: "Ink" },
      { value: "SPL5", labelPrefix: "Plum" },
      { value: "SPL6", labelPrefix: "Pride Edition" },
      { value: "SPL7", labelPrefix: "Black Unity" },
    ],
  },
  {
    label: "Sport Band",
    value: "SB",
    options: [
      { value: "SB1", labelPrefix: "Lake Green" },
      { value: "SB2", labelPrefix: "Stone Gray" },
      { value: "SB3", labelPrefix: "Starlight" },
      { value: "SB4", labelPrefix: "Plum" },
      { value: "SB5", labelPrefix: "Black" },
      { value: "SB6", labelPrefix: "Denim" },
      { value: "SB7", labelPrefix: "Light Blush" },
      { value: "SB8", labelPrefix: "Prime Edition" },
      { value: "SB9", labelPrefix: "Black Unity" },
    ],
  },
  {
    label: "FineWoven",
    value: "FW",
    options: [
      { value: "FW1", labelPrefix: "Black", subLabel: "Magnetic Link" },
      {
        value: "FW2",
        labelPrefix: "Dark Toupe",
        subLabel: "Magnetic Link",
      },
      {
        value: "FW3",
        labelPrefix: "Blackberry",
        subLabel: "Magnetic Link",
      },
    ],
  },
  {
    label: "Braided Solo Loop",
    value: "BSL",
    options: [
      { value: "BSL1", labelPrefix: "Lake green" },
      { value: "BSL2", labelPrefix: "Midnight" },
      { value: "BSL3", labelPrefix: "Denim" },
      { value: "BSL4", labelPrefix: "Chartreuse" },
      { value: "BSL5", labelPrefix: "Magenta" },
      { value: "BSL6", labelPrefix: "Prime Edition" },
      { value: "BSL7", labelPrefix: "Black Unity" },
    ],
  },
  {
    label: "Solo Loop",
    value: "SL",
    options: [
      { value: "SL1", labelPrefix: "Star Fruit" },
      { value: "SL2", labelPrefix: "Ultramarine" },
      { value: "SL3", labelPrefix: "Lake Green" },
      { value: "SL4", labelPrefix: "Black" },
      { value: "SL5", labelPrefix: "Light Blush" },
    ],
  },
  {
    label: "Nike Sport Loop",
    value: "NSL",
    options: [
      { value: "NSL1", labelPrefix: "Black/Blue" },
      { value: "NSL2", labelPrefix: "Starlight/Pink" },
      { value: "NSL3", labelPrefix: "Grey/Blue" },
      { value: "NSL4", labelPrefix: "Green/Grey" },
      { value: "NSL5", labelPrefix: "Blue/Red" },
    ],
  },
  {
    label: "Nike Sport Band",
    value: "NSB",
    options: [
      { value: "NSB1", labelPrefix: "Volt Splash" },
      { value: "NSB2", labelPrefix: "Magic Ember" },
      { value: "NSB3", labelPrefix: "Midnight Sky" },
      { value: "NSB4", labelPrefix: "Pure Platinum" },
      { value: "NSB5", labelPrefix: "Desert Stone" },
      { value: "NSB6", labelPrefix: "Kargo Khaki" },
      { value: "NSB7", labelPrefix: "Blue Flame" },
    ],
  },
  {
    label: "Hermès Toile H",
    value: "HTH",
    options: [
      {
        value: "HTH1",
        subLabel: "Gold/Écru Toile H Single Tour",
      },
    ],
  },
  {
    label: "Hermès Twill",
    value: "HTW",
    options: [
      {
        value: "HTW1",
        subLabel: "Noir/Gold Twill Jump Attelage Single Tour",
      },
      {
        value: "HTW2",
        subLabel: "Rouge Grenat/Vermillon Twill Jump Attelage Single Tour",
      },
    ],
  },
  {
    label: "Hermès Kilim",
    value: "HK",
    options: [
      {
        value: "HK1",
        subLabel: "Béton Kilim Single Tour",
      },
      {
        value: "HK2",
        subLabel: "Noir Kilim Single Tour",
      },
      {
        value: "HK3",
        subLabel: "Orange Kilim Single Tour",
      },
    ],
  },
  {
    label: "Hermès Grand H",
    value: "HGH",
    options: [
      {
        value: "HGH1",
        subLabel: "Satiné Grand H",
      },
    ],
  },
];

export const BANDS_ARRAY = BANDS.reduce((acc, band) => {
    acc.push(...band.options.map(option => ({ ...option, label: band.label })))
    return acc
},[])

export const CASES_ARRAY = CASES.reduce((acc, band) => {
    acc.push(...band.options.map(option => ({ ...option, label: band.label })))
    return acc
},[])

export const SIZES_ARRAY = SIZES.reduce((acc, band) => {
    acc.push(...band.options.map(option => ({ ...option, label: band.label })))
    return acc
},[])