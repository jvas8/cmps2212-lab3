const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    /*
    BUG EXPLANATION:
    Arrow functions do not have their own 'this'. Instead, they inherit 'this'
    from the surrounding lexical scope. In this case, 'this' does NOT refer
    to the .box element, so calling this.classList.add('active') throws an error.
    */

    // FIX: Using event.currentTarget
    event.currentTarget.classList.add('active');

    /*
    event.currentTarget refers to the element that the event listener
    is attached to. This is exactly what 'this' would refer to if we had
    used a regular function instead of an arrow function.
    */
});
