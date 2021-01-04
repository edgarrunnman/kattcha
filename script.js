"use strict";
const items = document.querySelectorAll('section > div');
let catsCounter = 0;
let nonCatsCounter = 0;

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        this.classList.toggle("vald")
    });

    items[i].addEventListener("click", function() {
        if (this.classList.contains("katt") & this.classList.contains("vald")) {
            catsCounter++;
        } else if (this.classList.contains("katt") & !this.classList.contains("vald")) {
            catsCounter--;
        } else if (!this.classList.contains("katt") & this.classList.contains("vald")) {
            nonCatsCounter++;
        } else if (!this.classList.contains("katt") & !this.classList.contains("vald")) {
            nonCatsCounter--;
        }
    });

    items[i].addEventListener("click", function() {
        if (catsCounter == 3 & nonCatsCounter == 0) {
            document.querySelector('button').disabled = false;
        } else {
            document.querySelector('button').disabled = true;
        }
    });
}