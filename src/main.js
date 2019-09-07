const config = require('./config');
const data = require('./data');
const gp = require('./gp-methods');

let best = null;

let population = (new Array(config.populationSize)).fill(0).map(() => gp.randomChromosome());

for(let generation = 1; ; generation++){
  let populationNext = [];
  let probability = [];
  let bestModified = false;
  let totalFitness = 0;
  population.sort((c1,c2) => gp.fitness(c2) - gp.fitness(c1));
  population.forEach(chromosome => {
    const fitness = gp.fitness(chromosome);
    totalFitness += fitness;
    probability.push(1 - fitness / (-data.regularExpressions.length));
    if(!best || fitness > best.fitness){
      best = { fitness, chromosome };
      bestModified = true;
    }
  });
  const meanFitness = totalFitness / population.length;

  //Copy best N chromosomes
  for(let i = 0; i < config.copyTopN; i++){
    populationNext.push(population[i]);
  }

  while(populationNext.length < config.populationSize){
    const chromosome = gp.pickChromosome(population, probability);
    const p = Math.random();

    //Fresh blood
    if(p <= config.freshBlood){
      populationNext.push(gp.randomChromosome());
    }

    //Mutation
    else if(p <= config.freshBlood + config.mutatinRate){
      populationNext.push(gp.mutation(chromosome));
    }

    //Crossover
    else if(p <= config.freshBlood + config.mutatinRate + config.crossoverRate){
      populationNext.push(...gp.crossover(chromosome, gp.pickChromosome(population, probability)));
    }

    //Reproduction
    else{
      populationNext.push(chromosome);
    }
  }

  population = populationNext;

  if(bestModified || generation % 100 == 0){
    console.log({
      generation,
      ...best,
      meanFitness: meanFitness.toFixed(2)
    });
  }
  if(best.fitness == 0){
    break;
  }
}

console.log(best);
console.log(config);
