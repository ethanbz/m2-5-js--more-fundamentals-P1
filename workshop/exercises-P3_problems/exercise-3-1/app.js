// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

document.querySelector('#btn-list').addEventListener('click', (e) => {
    switch (e.target) {
        case document.querySelector('#btn-1'):
            document.querySelector('#btn-1').style.opacity = 0;
            break;
        case document.querySelector('#btn-2'):
            document.querySelector('#btn-2').style.background = 'crimson';
            break;
        case document.querySelector('#btn-3'):
            document.querySelector('#btn-3').style.background = 'lightblue';
            break;
        case document.querySelector('#btn-4'):
            document.querySelector('#btn-4').classList.toggle('jitters')
            break;
    }
})