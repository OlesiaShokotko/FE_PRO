class Delivery {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.validPhone = phone.startsWith("+");
    }
}

let name = "Pizza";
let phone = "81234567890";

let deliveryName = new Delivery(name, phone);
console.log(deliveryName.validPhone);

class Permissions {
    constructor() {
        this.create = false;
        this.read = true;
        this.update = false;
        this.remove = false;
    }
}


class Users extends Permissions {
    constructor(name) {
        super();
        this.name = name;
    }
}

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set setState(newState) {
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this.state = newState;
        }
    }

    get getState(){
        return this.state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
}
 