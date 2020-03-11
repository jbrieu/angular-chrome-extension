
export const STATIC_DATA = {
  "companiesById": {
    "1": {
      name: "Dassault Aviation"
    },
    "2": {
      name: "LVMH"
    }
  },
  "ownersById": {
    "1": {
      name: 'Famille Dassault',
      url: "https://data.bnf.fr/ark:/12148/cb11898698p",
      companiesIds: ["1"]
    },
    "2": {
      name: 'Famille Arnault',
      companiesIds: ["2"]
    }
  },
  "newspapersByDomain": {
    'www.lefigaro.fr': {
      name: 'Le Figaro',
      ownersIds: ["1", "2"]
    },
    'www.nouvelobs.com': {
      name: 'L\'OBS',
      ownersIds: ["2"]
    },
  }
};
