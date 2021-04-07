import Node from './Node';

class BinaryTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insertNode(node: Node, newNode: Node): void {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (!node.right) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  insert(data: number): void {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  depthSearch(node: Node | null, data: number): number | null {
    if (!node) return null;

    if (node.data === data) return data;

    let result = this.depthSearch(node.left, data);

    if (result) return result;

    result = this.depthSearch(node.right, data);

    return result;
  }

  levelSearch(node: Node | null, data: number, level: number): number {
    if (!node) return 0;

    // console.log('Node', node.data);
    // console.log('Search Data', data);
    // console.log('Level', level);

    if (node.data === data) return level;

    let downLevel = this.levelSearch(node.left, data, level + 1);

    if (downLevel !== 0) {
      return downLevel;
    }

    downLevel = this.levelSearch(node.right, data, level + 1);
    return downLevel;
  }

  limitedDepthSearch(
    node: Node | null,
    data: number,
    level: number,
    limit: number,
  ): number | null {
    if (!node) return null;

    // console.log('Node', node.data);
    // console.log('Search Data', data);
    // console.log('Level', level);
    // console.log('Limit', limit);
    // console.log('-----------------');

    if (level > limit) return null;

    if (node.data === data) {
      return data;
    }

    let result = this.limitedDepthSearch(node.left, data, level + 1, limit);

    if (result) return result;

    result = this.limitedDepthSearch(node.right, data, level + 1, limit);

    return result;
  }
}

export default BinaryTree;
