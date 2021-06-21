const myProduct = {
    arr: [
        {
            name: 'apple',
            count: 3,
            price: 50
        },

        {
            name: 'banana',
            count: 10,
            price: 70
        },

        {
            name: 'pineapple',
            count: 1,
            price: 200
        },

        {
            name: 'strawberry',
            count: 50,
            price: 30
        },
    ],

    countBasketPrice() {
        let total = 0;
        for (let i = 0; i < this.arr.length; i++) {
            total += this.arr[i].count * this.arr[i].price;
        }
        return total;

    }


};


alert(myProduct.countBasketPrice());