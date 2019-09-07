## About
Evolutionary solver for regexcrossword: https://regexcrossword.com/

## Installation

```
git clone ...
cd gp-regex-crossword
npm install
```

## Usage

```
node src/main.js
```

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
