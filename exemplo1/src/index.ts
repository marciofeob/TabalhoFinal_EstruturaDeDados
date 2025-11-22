import { BinarySearchTree } from "./BinarySearchTree";

const minhaArvore = new BinarySearchTree<number>();

console.log("--- Inserindo valores na Árvore ---");

minhaArvore.insert(10);
minhaArvore.insert(5);
minhaArvore.insert(15);
minhaArvore.insert(2);

console.log("Valores inseridos!");

console.log(JSON.stringify(minhaArvore.root, null, 2));

if (minhaArvore.root && minhaArvore.root.value === 10) {
    console.log("Teste OK: A raiz é 10.");
}