"use strict";
const items = Array.from(document.querySelectorAll('section > div'));

items.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.toggle("vald");
        tryEnableSubmit();
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

function tryEnableSubmit() {
    let targetItems = Array.from(document.querySelectorAll(".katt"));
    let chosenTargetItems = filter(targetItems, item => item.classList.contains("vald"));
    let failItems = filter(items, item => item.classList.contains("katt"), true)
    let chosenFailItems = filter(failItems, item => item.classList.contains("vald"));

    if (chosenTargetItems.length == targetItems.length && chosenFailItems == 0)
        document.querySelector('button').disabled = false;
    else
        document.querySelector('button').disabled = true;
}


// function filter(array, invert, ...tests) {
//     let passed = [];
//     let testsResult;
//     debugger;
//     for (let element of array) {
//         testsResult = 0;
//         tests.forEach(function(t) { testsResult += t(element) })
//         if (!invert) {
//             if (testsResult == tests.length)
//                 passed.push(element);
//         } else {
//             if (testsResult != tests.length)
//                 passed.push(element);
//         }
//     }

//     return passed;
// }

// function tryEnableSubmit() {
//     let targetItems = filter(items, false, item => item.classList.contains("katt"));
//     let chosenTargetItems = filter(items, false, item => item.classList.contains("katt"),
//         item => item.classList.contains("vald"));
//     let failItems = filter(items, true, item => item.classList.contains("katt"))
//     let chosenFailItems = filter(items, true, item => item.classList.contains("katt"),
//         item => item.classList.contains("vald"));

//     if (chosenTargetItems.length == targetItems.length &&
//         chosenFailItems.length == failItems.length)
//         document.querySelector('button').disabled = false;
//     else
//         document.querySelector('button').disabled = true;
// }