const strUnique = ' ".0123456789?ABCDEFGHIJKLMNOPQRSTUVWXYZ';
module.exports = {
  strUnique,
  arrUnique: strUnique.split(''),
  chromosomeLength: 19,
  regularExpressions: [
    //Horizontal
    { //0
      regex: /^\.?.[^QUOT3\s]{2}\.?$/,
      targetLength: 3,
      word: [0, 1, 2],
    },
    { //1
      regex: /^\.?["EXPLAINED"]+\.?$/,
      targetLength: 4,
      word: [3, 4, 5, 6],
    },
    { //2
      regex: /^\.?(BA|\.B|Y")+(\1)(\s)\.?$/,
      targetLength: 5,
      word: [7, 8, 9, 10, 11],
    },
    { //3
      regex: /^\.?(D\W|EF|IN|I.|TI.N)*\.?$/,
      targetLength: 4,
      word: [12, 13, 14, 15],
    },
    { //4
      regex: /^\.?[ORIG\.N\s]+\.?$/,
      targetLength: 3,
      word: [16, 17, 18],
    },

    //Bottom
    { //5
      regex: /^\.?(PAS|RI|TE)+\.?$/,
      targetLength: 3,
      word: [16, 12, 7],
    },
    { //6
      regex: /^\.?(LIN|GO|\s)+[URBAN]+\.?$/,
      targetLength: 4,
      word: [17, 13, 8, 3],
    },
    { //7
      regex: /^\.?(BOM|"S|ND\.)+\.?$/,
      targetLength: 5,
      word: [18, 14, 9, 4, 0],
    },
    { //8
      regex: /^\.?["BABIES"]{4}\.?$/,
      targetLength: 4,
      word: [15, 10, 5, 1],
    },
    { //9
      regex: /^\.?[^NOBEAT\?]*\.?$/,
      targetLength: 3,
      word: [11, 6, 2],
    },

    //Top
    { //10
      regex: /^\.?(\s|W|EE|T)+\W+(\w)+\.?$/,
      targetLength: 3,
      word: [11, 15, 18],
    },
    { //11
      regex: /^\.?(I|D|IO|M)+\w?(\1)+\.?$/,
      targetLength: 4,
      word: [6, 10, 14, 17],
    },
    { //12
      regex: /^\.?(SE|\.\s|MET|APHO|R)+\.?$/,
      targetLength: 5,
      word: [2, 5, 9, 13, 16],
    },
    { //13
      regex: /^\.?(BI|T|E"|\s)+\.?$/,
      targetLength: 4,
      word: [1, 4, 8, 12],
    },
    { //14
      regex: /^\.?[S-TALK]{2,3}\.?$/,
      targetLength: 3,
      word: [0, 3, 7],
    },
  ]
};
