import { Newspaper } from './newspaper';

export const NEWSPAPERSINDEX = {
  'www.lesechos.fr': {  id: 3,
                        name: 'Les Echos',
                        owners: [ { id: 1,
                                    name: 'Bernard Arnault',
                                    companies:  [ { id: 1,
                                                    name: 'LVMH'
                                                  }
                                                ]
                                  }
                                ]
    },
    'www.leparisien.fr': {  id: 1,
                            name: 'Le Parisien',
                            owners: [ { id: 1,
                                        name: 'Bernard Arnault',
                                        companies:  [ { id: 1,
                                                        name: 'LVMH'
                                                      }
                                                    ]
                                      },
                                      { id: 2,
                                        name: 'Jacqueline Arnault',
                                        companies: [ {  id: 2,
                                                        name: 'Pommade'
                                                      }
                                                    ]
                                      }
                                    ]
      },
      'www.lemonde.fr': {   id: 2,
                            name: 'Le Monde',
                            owners: [ { id: 3,
                                        name: 'Xavier Niel',
                                        companies:  [ { id: 3,
                                                        name: 'Free'
                                                      }
                                                    ]
                                      }
                                    ]
                        }
  };
