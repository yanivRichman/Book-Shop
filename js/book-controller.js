'use strict';

function onInit() {
    renderBooks();
    // createBooks();
}

function renderBooks() {
    var books = getBooks();
    var strHtmls = books.map(function (book) {
        return `
        <tr class="book-preview">
        <td> <p class="card-id">${book.id}</p> </td>
        <td> <p class="card-title">${book.bookName}</p> </td>
        <td> <h5 class="card-price">${book.price}</h5> </td>
        <td> <h5 class="card-price">${book.rate}</h5> </td>
        <td> <button class="favorite styled blue" type="button" onclick="onReadBook('${book.id}')">Read</button> </td>
        <td> <button class="favorite styled yellow" type="button" onclick="onUpdateBook('${book.id}')">Update</button> </td>
        <td> <button class="favorite styled red" type="button" onclick="onRemoveBook('${book.id}')">Delete</button>  </td>
        </tr> 
        `;
    });
    document.querySelector('tbody').innerHTML = strHtmls.join('');
}

function onRemoveBook(bookId) {
    removeBook(+bookId);
    renderBooks();
}

function onAddBook() {
    const ElBookName = document.querySelector('.new-book-name');
    const bookName = ElBookName.value;
    const ElPrice = document.querySelector('.new-book-price');
    const price = ElPrice.value;
    if (!bookName || !price) return;
    addBook(bookName, price);
    renderBooks();
    ElBookName.value = '';
    ElPrice.value = '';
}

function onUpdateBook(bookId) {
    const ElNewPrice = document.querySelector('.update-book-price');
    const newPrice = ElNewPrice.value;
    if (newPrice === '') return;
    updateBook(+bookId, newPrice);
    renderBooks();
    ElNewPrice.value = '';
}

function onReadBook(bookId) {
    var elModal = document.querySelector('.modal');
    var book = getBookById(+bookId);
    elModal.querySelector('h5').innerText = book.bookName;
    elModal.querySelector('img').src = book.imgUrl;
    elModal.querySelector('h6').innerText = 'Price: ' + book.price;
    elModal.querySelector('h7').innerText = 'Rate: ' + book.rate;
    elModal.querySelector('.rate').value = '';
    elModal.querySelector('.rate-btn').addEventListener('click', onUpdateRate);
    elModal.hidden = false;
    function onUpdateRate() {
        var newRate = elModal.querySelector('.rate').value;
        updateRate(+bookId, +newRate);
        elModal.querySelector('h7').innerText = 'Rate: ' + book.rate;
        elModal
            .querySelector('.rate-btn')
            .removeEventListener('click', onUpdateRate);
            renderBooks();

    }
}

function onCloseModal() {
    document.querySelector('.modal').hidden = true;
}

function onNextPage() {
    nextPage();
    renderBooks();
}


function onPrevPage() {
    prevPage();
    renderBooks();
}

function sortByTitle() {
    gSortBy = 'TITLE';
    sortBooks();
    renderBooks();
}

function sortByPrice() {
    gSortBy = 'PRICE';
    sortBooks();
    renderBooks();
}

function sortById() {
    gSortBy = 'ID';
    sortBooks();
    renderBooks();
}
