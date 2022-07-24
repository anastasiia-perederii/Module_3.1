
function Product(name, price) {
    this.name = name
    this.price = price
}



Product.prototype.user = 'Ann'

Product.prototype.description = function () {
        return `${this.name} costs ${this.price} dollars`;
}

const book = new Product('Book', 25)
console.log(book.description())
console.log(book.user)

console.log( Object.isFrozen(book) );
Object.freeze(book);
console.log( Object.isFrozen(book) );


const pen = new Product('Pen', 4)
console.log(pen.description())
console.log(pen.user)




class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    description() {
        return `${this.name} costs ${this.price} dollars`;
    }
}

Product2.prototype.user = 'Ann'


const books = new Product2('Book', 25)
console.log(books.description())
console.log(books.user)

console.log( Object.isFrozen(book) );
Object.freeze(book);
console.log( Object.isFrozen(book) );

const pens = new Product2('Pen', 4)
console.log(pens.description())
console.log(pens.user)






