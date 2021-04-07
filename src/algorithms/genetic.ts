interface Individual {
  data: string;
  fit: number;
}

const population1: Individual[] = [
  { data: '10111101', fit: 0 },
  { data: '11011000', fit: 0 },
  { data: '01100011', fit: 0 },
  { data: '11101100', fit: 0 },
  { data: '10101110', fit: 0 },
  { data: '01001010', fit: 0 },
  { data: '00100011', fit: 0 },
  { data: '00110101', fit: 0 },
];

function f(x: number): number {
  return parseFloat(Math.sin((Math.PI * x) / 256).toFixed(10));
}

function genetic(p: Individual[]): string {
  let population = p;

  let iterations = 0;
  let stop = false;
  while (!stop) {
    iterations += 1;

    console.log('Population', population);

    const populationFit = population.map((individual: Individual) => {
      const decimal = parseInt(individual.data, 2);

      const result = f(decimal);

      return {
        data: individual.data,
        fit: result,
      };
    });

    const response = populationFit.filter(i => i.fit > 0.95);

    if (response.length > 0) {
      console.log('Perfect Individual', response);
      console.log('Iterations', iterations);
      stop = true;
    }

    const sortedPopulation = populationFit.sort((a, b) => {
      if (a.fit > b.fit) {
        return -1;
      }

      if (a.fit < b.fit) {
        return 1;
      }

      return 0;
    });

    const { length } = sortedPopulation;

    const moreFit = sortedPopulation.slice(0, length / 2);

    const firstHalfArray: string[] = [];
    const secondHalfArray: string[] = [];

    moreFit.forEach(individual => {
      const binary = individual.data;

      const firstHalf = binary.slice(0, 4);
      const secondHalf = binary.slice(4, 8);

      firstHalfArray.push(firstHalf);
      secondHalfArray.push(secondHalf);
    });

    secondHalfArray.reverse();

    const newPopulation = firstHalfArray.map((half, index) => {
      return {
        data: `${half}${secondHalfArray[index]}`,
        fit: 0,
      };
    });

    population = [...moreFit, ...newPopulation];

    const mutatedPopulation = population.map(individual => {
      const dataArray = individual.data.split('');

      const mutatedDataArray = dataArray.map(data => {
        return `${Math.round(Math.random())}`;
      });

      const mutatedData = mutatedDataArray.join('');

      return {
        data: mutatedData,
        fit: 0,
      };
    });

    population = mutatedPopulation;
  }

  return 'Sucesso!';
}

genetic(population1);
