class Person {
    constructor (id, fullName) {
        this.id = id;
        this.fullName = fullName;
    }

    getId () {
        return this.id;
    }

    getFullName () {
        return this.fullName;
    }
}
/*
var person1 = new Person(1, 'John Doe');
console.log(person1.getId(), person1.getFullName());
console.log(person1.id, person1.fullName);
console.log(typeof person1);
console.log(typeof Person);
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
*/

class Word {
    
    constructor (term, definition) {
        this._term = term;
        this._definition = definition;
    }

    get term () {
        return this._term;
    }

    set term (newTerm) {
        newTerm = newTerm.trim();
        if (newTerm === '') {
            throw 'The term can not be empty';
        }
        this._term = newTerm;
    }

    get definition () {
        return this._definition;
    }

    set definition (newDefinition) {
        newDefinition = newDefinition.trim();
        if (newDefinition === '') {
            throw 'The definition can not be empty';
        }
        this._definition = newDefinition;
    }

    get word () {
        return  this._term + ':' + this._definition;
    }
}

let word1 = new Word('book', 'kitap');
console.log(word1._term, word1._definition, word1.word);
word1._definition = 'rezerve etmek';
console.log(word1._term, word1._definition, word1.word);
