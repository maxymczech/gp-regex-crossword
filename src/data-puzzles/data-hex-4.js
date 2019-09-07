const strUnique = ' "13=?ABCDEFGHIJKLMNOPQRSTUVWXYZ';
module.exports = {
  strUnique,
  arrUnique: strUnique.split(''),
  chromosomeLength: 37,
  regularExpressions: [
    //Horizontal
    { //0
      regex: /^[SKY][DANCER\s]+$/,
      targetLength: 4,
      word: [0, 1, 2, 3],
    },
    { //1
      regex: /^[ACT|V1TI3S]+\w$/,
      targetLength: 5,
      word: [4, 5, 6, 7, 8],
    },
    { //2
      regex: /^[^SVAI\s=]+["OLD"]{2}$/,
      targetLength: 6,
      word: [9, 10, 11, 12, 13, 14],
    },
    { //3
      regex: /^((B\WS)|ZZ|(\s))*\W(\s)+$/,
      targetLength: 7,
      word: [15, 16, 17, 18, 19, 20, 21],
    },
    { //4
      regex: /^(SO|L|I|DAR|E|T|Y)+$/,
      targetLength: 6,
      word: [22, 23, 24, 25, 26, 27],
    },
    { //5
      regex: /^[^EARS](H|I|T)(\1)[TEAM]+$/,
      targetLength: 5,
      word: [28, 29, 30, 31, 32],
    },
    { //6
      regex: /^[^IT="SLY?3]+$/,
      targetLength: 4,
      word: [33, 34, 35, 36],
    },

    // Bottom
    { //7
      regex: /^[FEV3R]+[BGE3SY]+$/,
      targetLength: 4,
      word: [33, 28, 22, 15],
    },
    { //8
      regex: /^(O\W|MAX)?[STAR]+(\W)+$/,
      targetLength: 5,
      word: [34, 29, 23, 16, 9],
    },
    { //9
      regex: /^(\W)(FL|O|A|T|S|\W)+$/,
      targetLength: 6,
      word: [35, 30, 24, 17, 10, 4],
    },
    { //10
      regex: /^[=SAYAL1VE]+$/,
      targetLength: 7,
      word: [36, 31, 25, 18, 11, 5, 0],
    },
    { //11
      regex: /^(NO|N)*[MOTIV3=\s]+$/,
      targetLength: 6,
      word: [32, 26, 19, 12, 6, 1],
    },
    { //12
      regex: /^[A\s|AN|"ET3RTY"]+$/,
      targetLength: 5,
      word: [27, 20, 13, 7, 2],
    },
    { //13
      regex: /^[MELLO\W]{2}[YELLO\W]{2}$/,
      targetLength: 4,
      word: [21, 14, 8, 3],
    },

    //Top
    { //14
      regex: /^\W[IAMFLYING]*$/,
      targetLength: 4,
      word: [21, 27, 32, 36],
    },
    { //14
      regex: /^[BLU3][\sKIES]*$/,
      targetLength: 5,
      word: [14, 20, 26, 31, 35],
    },
    { //14
      regex: /^[CLU3][TRIE\W]+$/,
      targetLength: 6,
      word: [8, 13, 19, 25, 30, 34],
    },
    { //14
      regex: /^(\W)(F|I|T)+(\=O|F|I|(\2))*$/,
      targetLength: 7,
      word: [3, 7, 12, 18, 24, 29, 33],
    },
    { //14
      regex: /^((E)|(V)|(ER)|(S))+[EVER]$/,
      targetLength: 6,
      word: [2, 6, 11, 17, 23, 28],
    },
    { //14
      regex: /^(\W)(SO|AR|E)(\1)(R|Y)+$/,
      targetLength: 5,
      word: [1, 5, 10, 16, 22],
    },
    { //14
      regex: /^(SA|Y|AS)["BUMBLE"]+$/,
      targetLength: 4,
      word: [0, 4, 9, 15],
    },
  ]
};
