"use strict";
const items = document.querySelectorAll('section > div');
let catsCounter = 0;
let nonCatsCounter = 0;

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        this.classList.toggle("vald");
        var isCat = this.classList.contains("katt");
        var isPicked = this.classList.contains("vald");

        if (isCat & isPicked) {
            catsCounter++;
        } else if (isCat & !isPicked) {
            catsCounter--;
        } else if (!isCat & isPicked) {
            nonCatsCounter++;
        } else if (!isCat & !isPicked) {
            nonCatsCounter--;
        }

        if (catsCounter == 3 & nonCatsCounter == 0) {
            document.querySelector('button').disabled = false;
        } else {
            document.querySelector('button').disabled = true;
        }
    });
}