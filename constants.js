export const halls = [
  "Samuelakandehall",
  "Topazhall",
  "Welchhall",
  "Winslowhall",
  "Nealiwilsonhall",
  "Gideonhall",
  "Bethelhall",
  "Emeraldhall",
  "Gamalielhall",
  "Crystalhall",
  "Justicedeborahhall",
  "Feliciaadebisihall",
  "Nyberghall",
  "Ogdenhall",
  "Queenestherhall",
  "Platinumhall",
  "Diamondhall",
  "Whitehall",
  "Havillahhall",
  "Ameyohall",
];

export const Halls = {
  SamuelAkandeHall: "Samuelakandehall",
  TopazHall: "Topazhall",
  WelchHall: "Welchhall",
  WinslowHall: "Winslowhall",
  NealiWilsonHall: "Nealiwilsonhall",
  GideonHall: "Gideonhall",
  BethelHall: "Bethelhall",
  EmeraldHall: "Emeraldhall",
  GamalielHall: "Gamalielhall",
  CrystalHall: "Crystalhall",
  JusticeDeborahHall: "Justicedeborahhall",
  FeliciaAdebisiHall: "Feliciaadebisihall",
  NybergHall: "Nyberghall",
  OgdenHall: "Ogdenhall",
  QueenEstherHall: "Queenestherhall",
  PlatinumHall: "Platinumhall",
  DiamondHall: "Diamondhall",
  WhiteHall: "Whitehall",
  HavillahHall: "Havillahhall",
  AmeyoHall: "Ameyohall",
};

export const halladminDomain = {
  samuel_akande_hall: "@samuelakandehall.babcock.edu.ng",
  topaz_hall: "@topazhall.babcock.edu.ng",
  winslow_hall: "@winslow.babcock.edu.ng",
  welch_hall: "@welchhall.babcock.edu.ng",
  neal_wilson_hall: "@nealwilsonhall.babcock.edu.ng",
  gideon_trooper_hall: "@gideontrooperhall.babcock.edu.ng",
  nelson_mandela: "@nelson_mandela.babcock.edu.ng",
  bethel_hall: "@bethelhall.babcock.edu.ng",
  emerald_hall: "@emeraldhall.babcock.edu.ng",
  gamaliel_hall: "@gamalielhall.babcock.edu.ng",
  crystal_hall: "@crystalhall.babcock.edu.ng",
  justice_deborah_hall: "@justicedeborahhall.babcock.edu.ng",
  felicia_adebisi_hall: "@feliciaadebisihall.babcock.edu.ng",
  nyberg_hall: "@nyberghall.babcock.edu.ng",
  ogden_hall: "@ogdenhall.babcock.edu.ng",
  queen_esther_hall: "@queenestherhall.babcock.edu.ng",
  platinum_hall: "@platinumhall.babcock.edu.ng",
  diamond_hall: "@diamondhall.babcock.edu.ng",
  white_hall: "@whitehall.babcock.edu.ng",
  ameyo_hall: "@ameyohall.babcock.edu.ng",
  havillah_hall: "@havillahhall.babcock.edu.ng",
};

const hallToDomainMapping = Object.keys(halladminDomain).reduce(
  (acc, domainKey) => {
    const hallName = domainKey.replace(/_/g, "").replace(/hall$/, "Hall"); // Normalize to match Halls enum format
    acc[Halls[hallName]] = halladminDomain[domainKey];
    return acc;
  },
  {}
);

const domainToHallMapping = Object.keys(halladminDomain).reduce(
  (acc, domainKey) => {
    const hallName = domainKey.replace(/_/g, "").replace(/hall$/, "Hall"); // Normalize to match Halls enum format
    acc[halladminDomain[domainKey]] = Halls[hallName];
    return acc;
  },
  {}
);

// Function to get hall name by domain
function getHallByDomain(domain) {
  return domainToHallMapping[domain] || null; // Return null if domain is not found
}

// Function to get domain by hall name
function getDomainByHall(hall) {
  return hallToDomainMapping[hall] || null; // Return null if hall is not found
}
