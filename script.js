"use strict";
const items = Array.from(document.querySelectorAll('section > div'));

items.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.toggle("vald");
        tryEnableSubmit();
    })
});

function tryEnableSubmit() {
    let test = equals(Array.from(document.querySelectorAll(".katt")).sort(),
        Array.from(document.querySelectorAll(".vald")).sort());
    if (test)
        document.querySelector('button').disabled = false;
    else
        document.querySelector('button').disabled = true;
}

const equals = (a, b) => a.every((x, y) => x === b[y]);