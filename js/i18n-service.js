'use strict';

var gTrans = {
    title: {
        en: 'Welcome to my bookshop',
        he: 'ברוכים הבאים לחנות הספרים שלי',
    },
    'new-book': {
        en: 'Create new book',
        he: 'צור ספר חדש',
    },
    'new-book-name': {
        en: 'New book name',
        he: 'שם הספר החדש',
    },
    'new-book-price': {
        en: 'New book price',
        he: 'מחיר הספר החדש',
    },
    'sort-id': {
        en: 'Id',
        he: 'מזהה',
    },
    'sort-title': {
        en: 'Title',
        he: 'כותרת',
    },
    'sort-price': {
        en: 'Price',
        he: 'מחיר',
    },
    'rate-table': {
        en: 'Rate',
        he: 'דירוג',
    },
    actions: {
        en: 'Actions',
        he: 'פעולות',
    },
    'update-book-price': {
        en: 'Update book price',
        he: 'עדכן מחיר חדש',
    },
    'next-Page': {
        en: 'Next Page',
        he: 'עבור לדף הבא',
    },
    'prev-Page': {
        en: 'Prev Page',
        he: 'עבור לדף הקודם',
    },
    read: {
        en: 'Read',
        he: 'קרא',
    },
    update: {
        en: 'Update',
        he: 'עדכן',
    },
    delete: {
        en: 'Delete',
        he: 'מחק',
    },
    rate: {
        en: 'Rate 0-10',
        he: 'דרג 1-10',
    },
    'rate-btn': {
        en: 'Update Rate',
        he: 'עדכן דירוג',
    },
    'close-btn': {
        en: 'Close',
        he: 'סגור',
    },
    'price-modal': {
        en: 'Price: ',
        he: ' מחיר: ',
    },
    'rate-modal': {
        en: 'Rate: ',
        he: ' דירוג: ',
    },
 };

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';
    var txt = keyTrans[gCurrLang];
    if (!txt) txt = keyTrans.en;
    return txt;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    els.forEach((el) => {
        var elTrans = el.dataset.trans;
        if (el.nodeName === 'INPUT') {
            el.placeholder = getTrans(elTrans);
        } else {
            el.innerText = getTrans(elTrans);
        }
    });
}

function setLang(lang) {
    gCurrLang = lang;
}
