interface Edge {
  [key: string]: {
    [key: string]: number;
  };
}

class Graph {
  edges: Edge;

  constructor() {
    this.edges = {} as Edge;
  }

  addVertex(vertex: string): void {
    this.edges[vertex] = {};
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    let edgeWeight: number = weight;

    if (!edgeWeight) {
      edgeWeight = 0;
    }

    this.edges[vertex1][vertex2] = edgeWeight;
  }

  removeEdge(vertex1: string, vertex2: string): void {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2]) {
      delete this.edges[vertex1][vertex2];
    }

    if (this.edges[vertex2] && this.edges[vertex2][vertex1]) {
      delete this.edges[vertex2][vertex1];
    }
  }

  removeVertex(vertex: string): void {
    Object.keys(this.edges[vertex]).forEach(adjacentVertex => {
      this.removeEdge(adjacentVertex, vertex);
    });

    delete this.edges[vertex];
  }
}

export default Graph;
