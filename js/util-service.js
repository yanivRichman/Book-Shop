'use strict';

function makeId(length = 4) {
    var id = 0;
    for (var i = 0; i < length; i++) {
        id = i;
        return id;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
