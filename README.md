## About
Evolutionary solver for regexcrossword: https://regexcrossword.com/

## Installation

```
git clone ...
cd gp-regex-crossword
npm install
```

## Usage

The algorithm is started by the following command:

```
node src/main.js
```

The puzzle to be solved is described in `src/data.js` file. I have created
descriptions for all 5 Hexagonal puzzles, they are in `src/data-puzzles` directory.
You can also check images in `misc` directory for reference.

## Options

Configurable via `src/config.js`:

```
module.exports = {
  //Number of chromosomes with highest fitness that will be copied
  //to the next generation without any change
  copyTopN: 50,

  //Probability of applying crossover genetic operator
  crossoverRate: 0.5,

  //Probability of spawning a new chromosome into the population
  freshBlood: 0.1,

  //Maximum number of generations for the algorithm to run
  maxGenerations: 50000,

  //Probability of applying mutation genetic operator
  mutatinRate: 0.3,

  //Population size
  populationSize: 500,
};
```
