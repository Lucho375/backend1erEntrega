class ProductManager {
    products = [];
    idAuto = 0;

    addProduct(prod) {
        this.idAuto = this.idAuto + 1;

        if (Object.values(prod).some((item) => !item)) {
            throw new Error("Todos los campos del producto son obligatorios");
        }

        return this.products.push({ ...prod, id: this.idAuto });
    }

    getProducts() {
        return console.log(this.products);
    }

    getProductById(id) {
        const finded = this.products.find(prod => prod.id === id);

        if (!finded) throw Error("Not found");
        return console.log(finded);
    }

}

const newProduct = new ProductManager();

const productExample = {
    title: "Motorola edge 30 ultra",
    description: "Celular",
    price: 800,
    thumbnail: "https://img.com",
    stock: 3
};

newProduct.addProduct(productExample);
newProduct.getProducts(); // [products]
// newProduct.getProductById(2);