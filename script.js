let cartItems = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    cartItems.push({ nome, preco });
    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Limpa a lista
    cartList.innerHTML = '';

    // Adiciona os itens ao carrinho
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nome} - $${item.preco.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Atualiza o total
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function limparCarrinho() {
    cartItems = [];
    total = 0;
    atualizarCarrinho();
}

const menuCelular = getElementById ('menuCelular');
const links = getElementById ('');
