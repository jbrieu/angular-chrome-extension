
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
        id: 1,
        name: 'Famille Dassault',
        url: "https://data.bnf.fr/ark:/12148/cb11898698p",
        companiesIds: ["1"]
        },
    "2": {
      id: 1,
      name: 'Famille Arnault',
      companiesIds: ["2"]
      }
  },
"newspapersByDomain" : {
  'www.lefigaro.fr': {  id:1,
    name: 'Le Figaro',
    ownersIds: [ "1"]
  },
  'www.nouvelobs.com': {  id: 2,
    name: 'L\'OBS',
    ownersIds: ["2"]
  },
//   'www.lesechos.fr': {  id: 3,
//                         name: 'Les Echos',
//                         owners: [ { id: 1,
//                                     name: 'Bernard Arnault',
//                                     companies:  [ { id: 1,
//                                                     name: 'LVMH'
//                                                   }
//                                                 ]
//                                   }
//                                 ]
//     },
//     'www.leparisien.fr': {  id: 1,
//                             name: 'Le Parisien',
//                             owners: [ { id: 1,
//                                         name: 'Bernard Arnault',
//                                         companies:  [ { id: 1,
//                                                         name: 'LVMH'
//                                                       }
//                                                     ]
//                                       },
//                                       { id: 2,
//                                         name: 'Jacqueline Arnault',
//                                         companies: [ {  id: 2,
//                                                         name: 'Pommade'
//                                                       }
//                                                     ]
//                                       }
//                                     ]
//       },
//       'www.lemonde.fr': {   id: 2,
//                             name: 'Le Monde',
//                             owners: [ { id: 3,
//                                         name: 'Xavier Niel',
//                                         companies:  [ { id: 3,
//                                                         name: 'Free'
//                                                       }
//                                                     ]
//                                       }
//                                     ]
//                         }
}
};
