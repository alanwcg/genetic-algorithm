import { Router } from 'express';
import BinaryTree from '../classes/BinaryTree';
import Graph from '../classes/Graph';

const routes = Router();

routes.get('/tree', (request, response) => {
  const tree = new BinaryTree();

  tree.insert(15);
  tree.insert(25);
  tree.insert(10);
  tree.insert(7);
  tree.insert(22);
  tree.insert(17);
  tree.insert(13);
  tree.insert(5);
  tree.insert(9);
  tree.insert(27);

  const depthResult = tree.depthSearch(tree.root, 17);
  if (depthResult) {
    console.log('Nó encontrado:', depthResult);
  } else {
    console.log('Nó não encontrado!');
  }

  const levelResult = tree.levelSearch(tree.root, 5, 1);
  if (levelResult !== 0) {
    console.log('Level:', levelResult);
  } else {
    console.log('Nó não encontrado!');
  }

  const limitResult = tree.limitedDepthSearch(tree.root, 5, 1, 4);
  if (limitResult) {
    console.log('Nó encontrado:', limitResult);
  } else {
    console.log('Nó não encontrado!');
  }
});

routes.get('/graph', (request, response) => {
  const graph = new Graph();

  graph.addVertex('Oradea');
  graph.addVertex('Zerind');
  graph.addVertex('Arad');
  graph.addVertex('Timisoara');
  graph.addVertex('Lugoj');
  graph.addVertex('Mehadia');
  graph.addVertex('Dobreta');
  graph.addVertex('Craiova');
  graph.addVertex('Pitesti');
  graph.addVertex('Rimnicu');
  graph.addVertex('Sibiu');
  graph.addVertex('Fagaras');
  graph.addVertex('Bucharest');
  graph.addVertex('Giurgiu');
  graph.addVertex('Urziceni');
  graph.addVertex('Hirsova');
  graph.addVertex('Eforie');
  graph.addVertex('Vaslui');
  graph.addVertex('Iasi');
  graph.addVertex('Neamt');

  graph.addEdge('Oradea', 'Zerind', 71);
  graph.addEdge('Oradea', 'Sibiu', 151);
  graph.addEdge('Zerind', 'Oradea', 71);
  graph.addEdge('Zerind', 'Arad', 75);
  graph.addEdge('Arad', 'Zerind', 75);
  graph.addEdge('Arad', 'Timisoara', 118);
  graph.addEdge('Arad', 'Sibiu', 140);
  graph.addEdge('Timisoara', 'Arad', 118);
  graph.addEdge('Timisoara', 'Lugoj', 111);
  graph.addEdge('Lugoj', 'Timisoara', 111);
  graph.addEdge('Lugoj', 'Mehadia', 70);
  graph.addEdge('Mehadia', 'Lugoj', 70);
  graph.addEdge('Mehadia', 'Dobreta', 75);
  graph.addEdge('Dobreta', 'Mehadia', 75);
  graph.addEdge('Dobreta', 'Craiova', 120);
  graph.addEdge('Craiova', 'Dobreta', 120);
  graph.addEdge('Craiova', 'Rimnicu', 146);
  graph.addEdge('Craiova', 'Pitesti', 138);
  graph.addEdge('Pitesti', 'Craiova', 97);
  graph.addEdge('Pitesti', 'Rimnicu', 97);
  graph.addEdge('Pitesti', 'Bucharest', 101);
  graph.addEdge('Rimnicu', 'Craiova', 146);
  graph.addEdge('Rimnicu', 'Sibiu', 80);
  graph.addEdge('Rimnicu', 'Pitesti', 97);
  graph.addEdge('Sibiu', 'Rimnicu', 80);
  graph.addEdge('Sibiu', 'Arad', 140);
  graph.addEdge('Sibiu', 'Oradea', 151);
  graph.addEdge('Sibiu', 'Fagaras', 99);
  graph.addEdge('Fagaras', 'Sibiu', 99);
  graph.addEdge('Fagaras', 'Bucharest', 211);
  graph.addEdge('Bucharest', 'Fagaras', 211);
  graph.addEdge('Bucharest', 'Pitest', 101);
  graph.addEdge('Bucharest', 'Giurgiu', 90);
  graph.addEdge('Bucharest', 'Urziceni', 85);
  graph.addEdge('Giurgiu', 'Bucharest', 90);
  graph.addEdge('Urziceni', 'Bucharest', 85);
  graph.addEdge('Urziceni', 'Hirsova', 98);
  graph.addEdge('Urziceni', 'Vaslui', 142);
  graph.addEdge('Hirsova', 'Urziceni', 98);
  graph.addEdge('Hirsova', 'Eforie', 86);
  graph.addEdge('Eforie', 'Hirsova', 86);
  graph.addEdge('Vaslui', 'Urziceni', 142);
  graph.addEdge('Vaslui', 'Iasi', 92);
  graph.addEdge('Iasi', 'Vaslui', 92);
  graph.addEdge('Iasi', 'Neamt', 87);
  graph.addEdge('Neamt', 'Iasi', 87);

  // graph.removeVertex('Arad');

  return response.json(graph.edges);
});

export default routes;
