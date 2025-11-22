````markdown
# Trabalho Final: Estruturas de Dados Não Lineares (Árvores e Grafos)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

> **Instituição:** UNIFEOB  
> **Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
> **Disciplina:** Estrutura de Dados  
> **Professor:** Marcelo Ciacco de Almeida  
> **Aluno:** Márcio Augusto Garcia Soares - 24000138

---

## 🎯 Objetivo do Projeto
Este repositório contém a implementação prática dos conceitos de estruturas de dados não lineares, desenvolvidos em **TypeScript**. O trabalho divide-se em duas partes fundamentais:
1.  **Árvores Binárias de Busca (BST):** Implementação de uma estrutura hierárquica.
2.  **Grafos (Estudo de Caso):** Simulação de um gerenciador de dependências (como o NPM) utilizando Grafos Dirigidos e Ordenação Topológica.

---

## 🌳 Parte 1: Árvores (Binary Search Tree)
Implementação de uma classe genérica de Árvore Binária, onde cada nó possui no máximo dois filhos. A estrutura organiza os dados de forma que os valores menores fiquem à esquerda e os maiores à direita, otimizando a busca.

### Representação Visual (Gerada via Mermaid)
```mermaid
graph TD;
    10((10)) --> 5((5));
    10 --> 15((15));
    5 --> 2((2));
    5 --> null1[null];
    15 --> null2[null];
    15 --> null3[null];
    
    style 10 fill:#f9f,stroke:#333,stroke-width:2px
    style 5 fill:#bbf,stroke:#333,stroke-width:2px
    style 15 fill:#bbf,stroke:#333,stroke-width:2px
````

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

## 🚀 Como Rodar o Projeto

Este projeto utiliza **TypeScript** e **ts-node**. Siga os passos abaixo para testar em sua máquina.

### Pré-requisitos

  * Node.js instalado.

### 1\. Clonar e Instalar

Abra o terminal na pasta do projeto e instale as dependências necessárias:

```bash
npm install
```

### 2\. Executar o Exemplo de Árvore

Para ver a Árvore Binária sendo montada e exibida no console:

```bash
npx ts-node src/exemplo1_arvore/index.ts
# (Ajuste o caminho conforme sua estrutura de pastas)
```

### 3\. Executar o Exemplo de Grafos (Estudo de Caso)

Para ver o algoritmo calculando a ordem de instalação dos pacotes para o professor Marcelo:

```bash
npx ts-node src/exemplo2_grafos/index.ts
# (Ajuste o caminho conforme sua estrutura de pastas)
```

-----

## 🛠️ Tecnologias Utilizadas

  * **Linguagem:** TypeScript
  * **Runtime:** Node.js
  * **Execução:** ts-node
  * **Visualização:** Mermaid.js (no README)
-----

*Trabalho entregue em Novembro de 2025.*

```
```
