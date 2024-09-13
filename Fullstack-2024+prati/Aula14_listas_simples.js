// Estruturas de dados

// Listas simplesmente encadeadas
class Node {
    constructor(data) {
        this.data = data;  // O dado armazenado no "bloco"
        this.next = null;  // A referência para o próximo "bloco" (inicialmente não aponta para nenhum)
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // O começo da lista (inicialmente está vazio)
        this.size = 0;     // Conta quantos blocos (nós) há na lista
    }

    add(data) {
        let newNode = new Node(data);  // Cria um novo nó com o dado fornecido
        if (this.head === null) {
            // Se a lista está vazia, o novo nó se torna o início da lista
            this.head = newNode;
        } else {
            // Se a lista já tem nós, precisamos encontrar o final da lista
            let current = this.head;  // Começa com o primeiro nó
            // Enquanto o nó atual não for o último (não tiver próximo nó), continue
            while (current.next !== null) {
                current = current.next;  // Move para o próximo nó
            }
            // Quando encontrar o último nó, faz o último nó apontar para o novo nó
            current.next = newNode;
        }
        // Aumenta o tamanho da lista
        this.size++;
    }

    insertAt(data, index) {
        // Verifica se o índice está fora dos limites da lista
        if (index < 0 || index > this.size) {
            return console.error('Index fora dos limites!');
        }

        let newNode = new Node(data);  // Cria um novo nó com o dado fornecido
        let current = this.head;  // Começa com o primeiro nó
        let previous;

        if (index === 0) {
            // Se o índice for 0, insere o novo nó no início da lista
            newNode.next = this.head;  // O novo nó aponta para o antigo primeiro nó
            this.head = newNode;  // O novo nó se torna o primeiro nó da lista
        } else {
            // Caso contrário, itera até o índice desejado
            for (let i = 0; i < index; i++) {
                previous = current;  // Armazena o nó anterior
                current = current.next;  // Move para o próximo nó
            }
            // Insere o novo nó na posição desejada
            newNode.next = current;  // O novo nó aponta para o nó atual
            previous.next = newNode;  // O nó anterior aponta para o novo nó
        }
        // Aumenta o tamanho da lista
        this.size++;
    }

    removeFrom(index){
        // Verifica se o índice está fora dos limites da lista
        if (index < 0 || index > this.size) {
            return console.error('Index fora dos limites!');
        }

        let current = this.head;
        let previous

        if(index === 0){
            this.head = current.next
        }else{
            for(let i = 0 ; i < index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.size--
    }

    indexOf(data){
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    printList() {
        let current = this.head;  // Começa com o primeiro nó
        // Itera pela lista até o final, imprimindo cada dado
        while (current !== null) {
            console.log(current.data);  // Imprime o dado do nó atual
            current = current.next;  // Move para o próximo nó
        }
    }
}

let list = new LinkedList();

list.add("Formação +praTi");
list.add(true);
list.add("Elemento 3");
list.insertAt("Elemento 1" , 1);
list.add("Eu não apareço no console porque fui removido na linha abaixo")
list.removeFrom(4);
list.printList();

console.log(list.indexOf("Elemento 3"))