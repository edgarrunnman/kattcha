"use strict";
const items = Array.from(document.querySelectorAll('section > div'));

items.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.toggle("vald");
        TryEnableSubmit();
    })
});

function filter(array, test, invert = false) {
    let passed = [];
    for (let element of array)
        if (!invert) {
            if (test(element))
                passed.push(element);
        } else {
            if (!test(element))
                passed.push(element);
        }
    return passed;
}

function TryEnableSubmit() {
    var targetItems = Array.from(document.querySelectorAll(".katt"));
    var chosenTargetItems = filter(targetItems, item => item.classList.contains("vald"));
    var failItems = filter(items, item => item.classList.contains("katt"), true)
    var chosenFailItems = filter(failItems, item => item.classList.contains("vald"));

    if (chosenTargetItems.length == targetItems.length && chosenFailItems == 0)
        document.querySelector('button').disabled = false;
    else
        document.querySelector('button').disabled = true;
}