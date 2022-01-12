'use strict';

const KEY = 'books';
const PAGE_SIZE = 2;
var gBookNames = [
    'Pooh secret garden',
    'Lord of the files',
    'Harry potter',
    'The godfather',
];
var gImgUrls = [
    'img/pooh.PNG',
    'img/lord_of_the_files.PNG',
    'img/harry_potter.PNG',
    'img/the_godfather.PNG',
];
var gBooks;
var gPageIdx = 0;
var gFilterBy = {
    bookName: '',
    price: 120,
};
var gSortBy;
var gIdx = 5;

_createBooks();

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0;
    }
}

function prevPage() {
    gPageIdx--;
    if (gPageIdx * PAGE_SIZE < 0) {
        gPageIdx = gBooks.length/PAGE_SIZE - 1;
    }
}

function getBooks() {
    var books = gBooks; 
    const fromIdx = gPageIdx * PAGE_SIZE;
    books = books.slice(fromIdx, fromIdx + PAGE_SIZE);
    return books;
}
function getbookNames() {
    return gBookNames;
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id;
    });
    gBooks.splice(bookIdx, 1);
    _saveBooksToStorage();
}

function addBook(bookName, price) {
    var imgUrl = 'img/addBook.PNG';
    var book = _createBook(gIdx, bookName, price, imgUrl);
    gIdx++;
    gBooks.push(book);
    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id;
    });
    return book;
}

function updateBook(bookId, newPrice) {
    var book = gBooks.find(function (book) {
        return book.id === bookId;
    });
    book.price = newPrice;
    _saveBooksToStorage();
}

function _createBook(id, bookName, price,rate, imgUrl) {
    return {
        id: id,
        bookName,
        price: price,
        imgUrl,
        rate: rate,
    };
}

function _createBooks() {
    var books = loadFromStorage(KEY);
    if (!books || !books.length) {
        books = [];
        for (let i = 0; i < 4; i++) {
            var id = i + 1;
            var bookName = gBookNames[i];
            var price = getRandomIntInclusive(1, 10000) / 100;
            var rate = getRandomIntInclusive(1, 10);
            var imgUrl = gImgUrls[i];
            books.push(_createBook(id, bookName, price, rate, imgUrl));
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks);
}

function updateRate(bookId, newRate) {
    console.log('bookId:' , bookId)
    var book = gBooks.find(function (book) {
        return book.id === bookId;
    });
    console.log('book:' , book)
    book.rate = newRate;
    _saveBooksToStorage();
}

function sortBooks() {
    switch (gSortBy) {
        case 'TITLE':
            gBooks.sort((a, b) => {
                if (a.bookName.toUpperCase() > b.bookName.toUpperCase())
                    return 1;
                else return -1;
            });
            break;
        case 'PRICE':
            gBooks.sort((a, b) => a.price - b.price);
            break;
        case 'ID':
            gBooks.sort((a, b) => a.id - b.id);
            break;
    }
}
