const cart = {
    cartListBlock: null,
    cartButton: null,
    carts: [
        {
            product_name: 'apple',
            price: 50,
            count: 10,
        },
        {
            product_name: 'banana',
            price: 100,
            count: 3,
        },
        {
            product_name: 'pineapple',
            price: 500,
            count: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearBasket.bind(this));
        this.render();
    },

    getCartHTML(cart) {
        return `<div class="good">
        <div><b>Наименование</b>: ${cart.product_name}</div>
        <div><b>Цена за шт.</b>: ${cart.price}</div>
        <div><b>Количество</b>: ${cart.count}</div>
        <div><b>Стоимость</b>: ${cart.count * cart.price}</div>
    </div>`;

    },

    render() {
        if (this.carts.length) {
            this.carts.forEach(cart => {
                this.cartListBlock.innerHTML += this.getCartHTML(cart);
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.carts.length} позиций(я) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.innerHTML = '<span class="empty">Корзина пуста</span>';

        }
    },
    getCartPrice() {
        let total = 0;
        for (let i = 0; i < this.carts.length; i++) {
            total += this.carts[i].count * this.carts[i].price;
        }
        return total;
    },
    clearBasket() {
        this.carts = [];
        this.render();
    },
};

cart.init();
