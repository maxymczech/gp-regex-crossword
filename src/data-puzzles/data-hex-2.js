const strUnique = " !$0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
module.exports = {
  strUnique,
  arrUnique: strUnique.split(''),
  chromosomeLength: 7,
  regularExpressions: [
    //Horizontal
    { //0
      regex: /^[FIND]?\$?[LAKME]$/,
      targetLength: 2,
      word: [0, 1],
    },
    { //1
      regex: /^[^PESCE]?[POS3]*.$/,
      targetLength: 3,
      word: [2, 3, 4],
    },
    { //2
      regex: /^[^OPRES!]+[^STICKO]*$/,
      targetLength: 2,
      word: [5, 6],
    },

    //Bottom
    { //3
      regex: /^[^XRAY]?[CROWN]*$/,
      targetLength: 2,
      word: [5, 2],
    },
    { //4
      regex: /^[D-F\?][^CAMPED]+$/,
      targetLength: 3,
      word: [6, 3, 0],
    },
    { //5
      regex: /^[KIP?\!]*(BU|L|B){1,2}$/,
      targetLength: 2,
      word: [4, 1],
    },

    //Top
    { //6
      regex: /^[78NGUA\!E]{2}$/,
      targetLength: 2,
      word: [4, 6],
    },
    { //7
      regex: /^(F|^L|Y)?[POWER!]*$/,
      targetLength: 3,
      word: [1, 3, 5],
    },
    { //8
      regex: /^[^ZENI$](TA|NG|LE|R)$/,
      targetLength: 2,
      word: [0, 2],
    },
  ]
};
