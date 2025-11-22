type PackageName = string;

export class DependencyGraph {
  private adjList: Map<PackageName, PackageName[]>;

  constructor() {
    this.adjList = new Map();
  }

  public addPackage(pkg: PackageName): void {
    if (!this.adjList.has(pkg)) {
      this.adjList.set(pkg, []);
    }
  }

  public addDependency(from: PackageName, to: PackageName): void {
    if (!this.adjList.has(from)) this.addPackage(from);
    if (!this.adjList.has(to)) this.addPackage(to);

    this.adjList.get(from)?.push(to);
  }

  public resolveBuildOrder(): PackageName[] {
    const visited = new Set<PackageName>();
    const stack: PackageName[] = []; 

    const dfs = (node: PackageName) => {
      visited.add(node);

      const dependencies = this.adjList.get(node) || [];
      for (const dep of dependencies) {
        if (!visited.has(dep)) {
          dfs(dep);
        }
      }
      stack.push(node);
    };

    for (const pkg of this.adjList.keys()) {
      if (!visited.has(pkg)) {
        dfs(pkg);
      }
    }

    return stack;
  }
}