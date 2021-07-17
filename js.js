"use strict";

/**
 *  Объект каталога товаров
 */
const catalog = {
    catalogBlock: null,
    basket: null,
    list: [
        {
            id_product: 111,
            product_name: 'apple',
            price: 50,
        },
        {
            id_product: 222,
            product_name: 'banana',
            price: 100,
        },
        {
            id_product: 333,
            product_name: 'pineapple',
            price: 500,
        }
    ],

    /**
     * Инициальзация каталога.
     * @param catalogBlockClass - класс блока каталога
     * @param basket  - корзина
     */
    init(catalogBlockClass, basket) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.basket = basket;
        this.render();
        this.addEventHandlers();
    },

    /**
     * Рендер каталога
     */
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    /**
     * Добавляем обработку событий
     */
    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    /**
     * Метод добавления в корзину
     */
    addToBasket(event) {
        const find_parent = event.target.closest('.product__add-to-cart');
        const id_product = +find_parent.dataset.id_product;
        console.log(find_parent);
        console.log(id_product)
        const productToAdd = this.list.find((product) => product.id_product === id_product);
        this.basket.addToBasket(productToAdd);
    },

    /**
     * Метод получения количества товаров в каталоге
     * @returns {number}
     */
    getCatalogListLength() {
        return this.list.length;
    },

    /**
     * Рендер списка товаров
     */
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    /**
     * Рендер отдельного товара из списка
     * @param item - товар
     * @returns {string} - сгенерированая строка разметки
     */
    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
    },

    /**
     * Рендер пустого каталога
     */
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст.';
    },
};

/**
 *  Объект корзины
 */
const basket = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    /**
     * Метод инициальзации корзины
     * @param cartBlockClass - класс блока корзины
     * @param clrCartButton - класс кнопки очистки корзины
     */
    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    /**
     * Метод установки обработчиков событий
     */
    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    /**
     * Метод очистки корзины
     */
    dropCart() {
        this.goods = [];
        this.render();
    },

    /**
     * Рендер корзины
     */
    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    /**
     * Добавить товар
     */
    addToBasket(product) {
        console.log(product);
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    /**
     * Получение количества товаров в корзин     */
    getCartGoodsLength() {
        return this.goods.length;
    },

    /**
     * Рендер пустой корзины
     */
    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    /**
     * Рендер списка товаров в корзине
     */
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    /**
     * Рендер отдельного товара в корзине */
    renderCartItem(item) {
        return `<div data-id="${item.id_product}">
                <h3>${item.product_name}</h3>
                <p>${item.price * item.quantity} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

/**
 * Подключение каталога и корзины
 */
catalog.init('catalog', basket);
basket.init('cart', 'clr-cart');
