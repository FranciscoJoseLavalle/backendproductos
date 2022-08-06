class Products {
    constructor() {
        this.products = [];
    }

    Save(title, price, thumbnail) {
        this.products.push({
            id: this.products.length + 1,
            title: title,
            price: price,
            thumbnail: thumbnail
        })
    }

    GetProducts() {
        return this.products;
    }

    ShowProduct(id) {
        return this.products.find(product => product.id == id);
    }

    Update(id, title, price, thumbnail) {
        const product = this.products.find(product => product.id == id);

        if (product) {
            product.title = title;
            product.price = price;
            product.thumbnail = thumbnail;
        }
    }

    Delete(id) {
        let product = this.products.find(product => product.id == id);

        if (product) {
            this.products = this.products.filter(producto => producto.id != id);
        }
    }
}

export default Products;