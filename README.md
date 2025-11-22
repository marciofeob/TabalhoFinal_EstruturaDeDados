# Trabalho Final: Estruturas de Dados Não Lineares (Árvores e Grafos)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

> **Instituição:** UNIFEOB  
> **Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
> **Disciplina:** Estrutura de Dados  
> **Professor:** Marcelo Ciacco de Almeida  
> **Aluno:** Márcio Augusto Garcia Soares - 24000138  

---

## Objetivo do Projeto
Este repositório contém a implementação prática dos conceitos de estruturas de dados não lineares, desenvolvidos em **TypeScript**. O trabalho divide-se em duas partes fundamentais:
1.  **Árvores Binárias de Busca (BST):** Implementação de uma estrutura hierárquica.
2.  **Grafos (Estudo de Caso):** Simulação de um gerenciador de dependências (como o NPM) utilizando Grafos Dirigidos e Ordenação Topológica.

---

## Parte 1: Árvores (Binary Search Tree)
Implementação de uma classe genérica de Árvore Binária, onde cada nó possui no máximo dois filhos. A estrutura organiza os dados de forma que os valores menores fiquem à esquerda e os maiores à direita, otimizando a busca.

### Representação Visual (Gerada via Mermaid)

```mermaid
graph TD;
    10((10)) --> 5((5));
    10 --> 15((15));
    5 --> 2((2));
    5 --> N1[Nulo];
    15 --> N2[Nulo];
    15 --> N3[Nulo];
    
    style 10 fill:#f9f,stroke:#333,stroke-width:2px
    style 5 fill:#bbf,stroke:#333,stroke-width:2px
    style 15 fill:#bbf,stroke:#333,stroke-width:2px

-----

## 🕸️ Parte 2: Grafos - Estudo de Caso (Dependências)

Nesta etapa, modelamos o problema de **instalação de pacotes de software**.
Utilizamos um **Grafo Dirigido (Directed Graph)** onde:

  * **Vértices:** São os pacotes/projetos.
  * **Arestas:** Representam a dependência ("Projeto A precisa de B").

O algoritmo implementado resolve a ordem correta de instalação (Bottom-Up) para garantir que nenhum pacote quebre por falta de pré-requisitos.

### Diagrama do Cenário Implementado

```mermaid
graph TD;
    Projeto_Final_Marcelo --> React;
    Projeto_Final_Marcelo --> TypeScript;
    React --> Webpack;
    TypeScript --> Node_JS_Core;
    Webpack --> Node_JS_Core;

    style Projeto_Final_Marcelo fill:#f96,stroke:#333,stroke-width:4px
    style Node_JS_Core fill:#6f6,stroke:#333,stroke-width:2px
```

-----

## Como Rodar o Projeto

Este projeto utiliza **TypeScript** e **ts-node**.

### Pré-requisitos

  * Node.js instalado.

### 1\. Instalar Dependências

Abra o terminal na pasta raiz do projeto e instale as dependências:

```bash
npm install
```

### 2\. Executar o Exemplo de Árvore

Entre na pasta do exemplo 1 e execute:

```bash
cd exemplo1
npx ts-node src/index.ts
```

### 3\. Executar o Exemplo de Grafos (Estudo de Caso)

Entre na pasta do exemplo 2 e execute o simulador:

```bash
cd ..
cd exemplo2
npx ts-node src/index.ts
```

-----

## 🛠️ Tecnologias Utilizadas

  * **Linguagem:** TypeScript
  * **Runtime:** Node.js
  * **Execução:** ts-node
  * **Visualização:** Mermaid.js (Diagramas no README)

-----

*Trabalho entregue em 25 de Novembro de 2025.*

```
```
