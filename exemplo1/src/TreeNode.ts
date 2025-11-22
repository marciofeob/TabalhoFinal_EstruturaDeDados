export interface INodeValue<T> {
  value: T;
}

export class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}