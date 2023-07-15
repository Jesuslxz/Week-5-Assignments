//Menu app for a grocerie list

class Book {
    constructor(name, genre, author){
        this.name = name;
        this.genre = genre;
        this.author = author;
    }
    describe(){
        return(`${this.name} by ${this.name} is about a ${genre}.`);
    }
}
class shelf{
    constructor(name){
        this.name = name;  
        this.books = [];
    }
    addBook(newBook){
        if (newbook instanceof Book ){
            this.books.push(newBook);
        }
        else{
            throw new Error(`you can only add books to this section`)
        }
    }
}
class libraryMenu {
    constructor(){
        this.shelves = [];
        this.selectedShelf = null;
    }

    start(){
        let selection = this.menuOptions();
        while(selection != 0){
            switch(selection) {
                case '1':
                    this.createShelf();
                    break;
                case '2':
                    this.viewShelf();
                    break;
                case '3':
                    this.deleteShelf();
                    break;
                case '4': 
                    this.showAllShelves();
                    break;
                default:
                    selection = 0;
            }
            selection = this.menuOptions();
        }
        alert('Have a nice day!');

    }

    menuOptions(){
        return prompt(`
        0) Exit
        1) Create a new shelf
        2) View all contents of shelf
        3) Delete entire shelf
        4) Display all shelfs
        `);
    }
    bookOptions(shelfInfo){
        return prompt(`
        0) Exit
        1) Create new book
        2) Delete Book
        -------------
        ${shelfInfo}
        `);
    }

    createShelf(){
        let shelfName = prompt('Enter what you would like to name the shelf: ');
        this.shelves.push(new shelf(shelfName));
    }

    deleteShelf(){
        let deletedShelf = prompt('Enter the index of the shelf you would like to get rid of');
        this.shelves.splice(deletedShelf, 1);
    }
    viewShelf(){
        let shelfSelection = prompt('Enter the index of the shelf you would like to view: ')
        if (shelfSelection > -1 && shelfSelection < this.shelves.length) {
            this.selectedShelf = this.shelves[shelfSelection];
            let description = 'Shelf: ' + this.selectedShelf.name + '\n';
            for (let i = 0; i< this.selectedShelf.books.length;i++){
                description += i + ') ' + this.selectedShelf.books[i].name + '---' + this.selectedShelf.books[i].genre 
                + '-- by ' + this.selectedShelf.books[i].author;
            }
            let selection = this.bookOptions(description)
            switch(selection){
                case '1' :
                    this.createBook();
                break;
                case '2':
                    this.deleteBook();
                break;
            }
            
        }
    }
    showAllShelves(){
        let shelfString = '';
        for(let i = 0;i <  this.shelves.length;i++){
            shelfString += i + ') ' + this.shelves[i].name + '\n';
        }
    alert(shelfString);
    }

    createBook(){
        let name = prompt('Enter the Name of the book: ');
        let author = prompt('Enter the author of the book: ');
        let genre = prompt('Enter the Genre of the book: ');
        this.selectedShelf.books.push( new Book(name, genre, author));
    }
    deleteBook(){
        let index= prompt('Enter the index of the book you would like to delete: ');
        this.selectedShelf.books.splice(index, 1);
    }

}
let Menu = new libraryMenu();
alert('hello world')
Menu.start();