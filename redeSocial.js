/**
 * ESTUDO DE CASO: REDE SOCIAL
 * Linguagem: TypeScript
 * Autor: Márcio Augusto Garcia Soares
 */
var SocialNetwork = /** @class */ (function () {
    function SocialNetwork() {
        this.adjList = new Map();
    }
    // Adiciona um vértice (Usuário) ao grafo
    SocialNetwork.prototype.addUser = function (user) {
        if (!this.adjList.has(user)) {
            this.adjList.set(user, []);
        }
    };
    // Adiciona uma aresta (Amizade) entre dois nós
    SocialNetwork.prototype.addFriendship = function (user1, user2) {
        var _a, _b;
        if (this.adjList.has(user1) && this.adjList.has(user2)) {
            (_a = this.adjList.get(user1)) === null || _a === void 0 ? void 0 : _a.push(user2);
            (_b = this.adjList.get(user2)) === null || _b === void 0 ? void 0 : _b.push(user1); // Relação bidirecional
        }
    };
    // Algoritmo de Recomendação
    // Lógica: Sugere amigos de amigos que o usuário ainda não segue
    SocialNetwork.prototype.recommendFriends = function (user) {
        var _this = this;
        var friends = this.adjList.get(user);
        if (!friends)
            return [];
        var recommendations = new Set();
        // Percorre a lista de adjacência dos amigos (Graus de separação)
        friends.forEach(function (friend) {
            var friendsOfFriend = _this.adjList.get(friend);
            friendsOfFriend === null || friendsOfFriend === void 0 ? void 0 : friendsOfFriend.forEach(function (candidate) {
                // Filtra para não sugerir o próprio usuário nem quem já é amigoo
                if (candidate !== user && !friends.includes(candidate)) {
                    recommendations.add(candidate);
                }
            });
        });
        return Array.from(recommendations);
    };
    return SocialNetwork;
}());
// --- Simulação de Uso ---
var rede = new SocialNetwork();
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
// O sistema deve sugerir Ana e Prof. Marceloo (conexões de 2º grau)
var sugestoes = rede.recommendFriends("Marcio");
console.log("Sugestões para Marcio:", sugestoes);
