import { DependencyGraph } from "./DependencyGraph";

const npmSimulator = new DependencyGraph();

npmSimulator.addDependency("MeuApp_FrontEnd do Professor Marcelo", "React");
npmSimulator.addDependency("MeuApp_FrontEnd", "TypeScript");
npmSimulator.addDependency("React", "Webpack");
npmSimulator.addDependency("TypeScript", "Node_Core");
npmSimulator.addDependency("Webpack", "Node_Core");

console.log("--- Resolvendo Ordem de Instalação ---");
const order = npmSimulator.resolveBuildOrder();

order.forEach((pkg, index) => {
  console.log(`${index + 1}. Instalando: ${pkg}`);
});