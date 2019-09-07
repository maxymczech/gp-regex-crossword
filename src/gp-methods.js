const data = require('./data');
const generate = require('nanoid/generate');

const randomGene = () => generate(data.strUnique, 1);

module.exports = {
  crossover: (chromosomeA, chromosomeB) => {
    const crossoverPoint = Math.round(Math.random() * (chromosomeA.length - 2)) + 1;
    return [
      chromosomeA.slice(0, crossoverPoint) + chromosomeB.slice(crossoverPoint),
      chromosomeB.slice(0, crossoverPoint) + chromosomeA.slice(crossoverPoint)
    ];
  },
  fitness: chromosome => {
    let fitness = 0;
    data.regularExpressions.forEach(item => {
      const word = item.word.map(i => chromosome[i]).join('');
      if(!item.regex.test(word)){
        fitness--;
      }
    });
    return fitness;
  },
  mutation: chromosome => {
    const mutationPoint = Math.round(Math.random() * (chromosome.length - 1));
    return chromosome.slice(0, mutationPoint) +  randomGene() + chromosome.slice(mutationPoint + 1);
  },
  permuteAndTest: (re, symbols, length) => {
    let result = [];
    const permute = (length, str = '') => {
      if(!length){
        if(re.test(str)){
          result.push(str);
        }
      }
      else{
        symbols.forEach(symbol => {
          permute(length - 1, str + symbol);
        });
      }
    }
    permute(length);
    return result;
  },
  randomChromosome: () => generate(data.strUnique, data.chromosomeLength),
  randomGene,
  pickChromosome: (population, probability) => {
    const p = Math.random();
    const totalProbability = probability.reduce((acc, item) => acc + item, 0);
    let result = null, probabilityAcc = 0;
    population.forEach((chromosome, i) => {
      probabilityAcc += probability[i] / totalProbability;
      if(!result && probabilityAcc > p){
        result = chromosome;
      }
    });
    return result;
  },
}
