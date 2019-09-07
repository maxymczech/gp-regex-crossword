const strUnique = " '.0123?ABCDEFGHIJKLMNOPRSTUVWYZ";
module.exports = {
  strUnique,
  arrUnique: strUnique.split(''),
  chromosomeLength: 52,
  regularExpressions: [
    //Horizontal
    { //0
      regex: /['2B']?(O|R)?['\2BINGE']+/,
      targetLength: 4,
      word: [0, 1, 2, 3],
    },
    { //1
      regex: /(\W)?(\1)?[HONEYPOTS]+/,
      targetLength: 5,
      word: [4, 5, 6, 7, 8],
    },
    { //2
      regex: /[WAFT\s]{3,5}[WINNIE]+/,
      targetLength: 6,
      word: [9, 10, 11, 12, 13, 14],
    },
    { //3
      regex: /[THI\s]+(S|I|NG|ER\s){3,5}/,
      targetLength: 7,
      word: [15, 16, 17, 18, 19, 20, 21],
    },
    { //4
      regex: /[BOOK\s]+(O|F)?(Z|E|N)+/,
      targetLength: 8,
      word: [22, 23, 24, 25, 26, 27, 28, 29],
    },
    { //5
      regex: /(O|H)(.)[BROTH3R]+(\2)(HO|BS)+/,
      targetLength: 7,
      word: [30, 31, 32, 33, 34, 35, 36],
    },
    { //6
      regex: /(.)[STORY]+(I|SE|E)(\1)+/,
      targetLength: 6,
      word: [37, 38, 39, 40, 41, 42],
    },
    { //7
      regex: /[ANOTHER]*[KINGDOM\s]{1,5}/,
      targetLength: 5,
      word: [43, 44, 45, 46, 47],
    },
    { //8
      regex: /(\W)?(O|R)?[BLACK\.RAVEN]+/,
      targetLength: 4,
      word: [48, 49, 50, 51],
    },

    //Bottom
    { //9
      regex: /(KV|A|VK)(\W)(B|EE|PO|O|H)+/,
      targetLength: 5,
      word: [48, 43, 37, 30, 22],
    },
    { //10
      regex: /(\w){3}(\W)(WE|A|R|E)*[THE]{2}/,
      targetLength: 6,
      word: [49, 44, 38, 31, 23, 15],
    },
    { //11
      regex: /(R|U|N){2}(T|O)[THEORY\.]+/,
      targetLength: 7,
      word: [50, 45, 39, 32, 24, 16, 9],
    },
    { //12
      regex: /\.?[REG]{4}(V|\s)[FIT]{2}/,
      targetLength: 8,
      word: [51, 46, 40, 33, 25, 17, 10, 4],
    },
    { //13
      regex: /(\W){1,3}[A'FRIENDHIP]+/,
      targetLength: 8,
      word: [47, 41, 34, 26, 18, 11, 5, 0],
    },
    { //14
      regex: /(\W){1,3}[CON\sP1RASHE]+/,
      targetLength: 7,
      word: [42, 35, 27, 19, 12, 6, 1],
    },
    { //15
      regex: /(\w){1,3}(\W)+[HISTORY?]+/,
      targetLength: 6,
      word: [36, 28, 20, 13, 7, 2],
    },
    { //16
      regex: /(TH|E){1,3}(W|IN|G|ED)+(\W|EB)+/,
      targetLength: 5,
      word: [29, 21, 14, 8, 3],
    },

    //Top
    { //17
      regex: /[JOKE]{1,3}[\W1TH]{1,5}/,
      targetLength: 5,
      word: [29, 36, 42, 47, 51],
    },
    { //18
      regex: /(OR|G)+(T|H|E)*(\W)[BRIDGER]+/,
      targetLength: 6,
      word: [21, 28, 35, 41, 46, 50],
    },
    { //19
      regex: /[^EIN](.)(.)(\W)(\2)(\1)(\5)/,
      targetLength: 7,
      word: [14, 20, 27, 34, 40, 45, 49],
    },
    { //20
      regex: /(E\W|ER)+[PERSP3CTIVE\s]+/,
      targetLength: 8,
      word: [8, 13, 19, 26, 33, 39, 44, 48],
    },
    { //21
      regex: /[B0S\s]{3}(I|N)(SK|R|I|B|E)+/,
      targetLength: 8,
      word: [3, 7, 12, 18, 25, 32, 38, 43],
    },
    { //22
      regex: /(I|O|NS){2}[AND](.)[SEA](\2)+/,
      targetLength: 7,
      word: [2, 6, 11, 17, 24, 31, 37],
    },
    { //23
      regex: /(A|N)?(\w)?(F|I|B)?(\2)(EO|NS)?/,
      targetLength: 6,
      word: [1, 5, 10, 16, 23, 30],
    },
    { //24
      regex: /\W[BIT]{1}[BITT3R]+(TH|AN)*/,
      targetLength: 5,
      word: [0, 4, 9, 15, 22],
    },
  ]
};
