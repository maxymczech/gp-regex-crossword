const strUnique = " 3ACDEHILMNOPQRSTUVY";
module.exports = {
  strUnique,
  arrUnique: strUnique.split(''),
  chromosomeLength: 4,
  regularExpressions: [
    //Horizontal
    { //0
      regex: /^[HAIR]*(D|O)*$/,
      targetLength: 1,
      word: [0],
    },
    { //1
      regex: /^(\W|\w)?[CLVST3R]*$/,
      targetLength: 2,
      word: [1, 2],
    },
    { //2
      regex: /^[HAV3N]?[REA]*$/,
      targetLength: 1,
      word: [3],
    },

    //Bottom
    { //3
      regex: /^[EVA]?[MASONIC\s]?$/,
      targetLength: 2,
      word: [3, 1],
    },
    { //4
      regex: /^[STARV3]*(O|H)?$/,
      targetLength: 2,
      word: [2, 0],
    },

    //Top
    { //5
      regex: /^(VE|IL?|\sS)*[DIES]?$/,
      targetLength: 2,
      word: [2, 3],
    },
    { //6
      regex: /^[HELP]*(Y|QU|I)?$/,
      targetLength: 2,
      word: [0, 1],
    },
  ]
};
