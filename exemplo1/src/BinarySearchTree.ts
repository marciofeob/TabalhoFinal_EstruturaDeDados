import { TreeNode } from "./TreeNode";

export class BinarySearchTree<T> {
  public root: TreeNode<T> | null = null;

  public insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.insertRecursive(this.root, newNode);
  }

  private insertRecursive(currentNode: TreeNode<T>, newNode: TreeNode<T>): void {
    // Se o valor for menor, vai para a esquerda
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertRecursive(currentNode.left, newNode);
      }
    } 
    else if (newNode.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertRecursive(currentNode.right, newNode);
      }
    }
  }
  
}