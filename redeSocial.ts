/**
 * ESTUDO DE CASO: REDE SOCIAL
 * Linguagem: TypeScript
 * Autor: Márcio Augusto Garcia Soares
 */

class SocialNetwork {
    // Lista de Adjacência: Mapeia Usuário -> Lista de Amigos
    private adjList: Map<string, string[]>;

    constructor() {
        this.adjList = new Map();
    }

    // Adiciona um vértice (Usuário) ao grafo
    addUser(user: string): void {
        if (!this.adjList.has(user)) {
            this.adjList.set(user, []);
        }
    }

    // Adiciona uma aresta (Amizade) entre dois nós
    addFriendship(user1: string, user2: string): void {
        if (this.adjList.has(user1) && this.adjList.has(user2)) {
            this.adjList.get(user1)?.push(user2);
            this.adjList.get(user2)?.push(user1); // Relação bidirecional
        }
    }

    // Algoritmo de Recomendação
    // Lógica: Sugere amigos de amigos que o usuário ainda não segue
    recommendFriends(user: string): string[] {
        const friends = this.adjList.get(user);
        if (!friends) return [];

        const recommendations = new Set<string>();

        // Percorre a lista de adjacência dos amigos (Graus de separação)
        friends.forEach(friend => {
            const friendsOfFriend = this.adjList.get(friend);
            
            friendsOfFriend?.forEach(candidate => {
                // Filtra para não sugerir o próprio usuário nem quem já é amigo
                if (candidate !== user && !friends.includes(candidate)) {
                    recommendations.add(candidate);
                }
            });
        });

        return Array.from(recommendations);
    }
}

// --- Simulação de Uso ---
const rede = new SocialNetwork();

// Cadastrando usuários
rede.addUser("Marcio");
rede.addUser("Prof. Marcelo");
rede.addUser("João");
rede.addUser("Ana");

// Criando conexões (Grafo)
// Marcio é amigo de João
rede.addFriendship("Marcio", "João");
// João conhece Ana e o Prof. Marcelo
rede.addFriendship("João", "Ana");
rede.addFriendship("João", "Prof. Marcelo");

// Executando recomendação para Marcio
// O sistema deve sugerir Ana e Prof. Marcelo (conexões de 2º grau)
const sugestoes = rede.recommendFriends("Marcio");
console.log("Sugestões para Marcio:", sugestoes);