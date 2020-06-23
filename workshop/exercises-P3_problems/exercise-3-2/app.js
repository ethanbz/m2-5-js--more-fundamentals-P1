// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let buttonList = document.querySelector('#btn-list');

for(i=1; i<=4; i++) {
    let btn = document.getElementById(`btn-${i}`);
    btn.style.background = 'gold';
    btn.style.opacity = 100;

}

function toggleColor(btn, color) {
    if (btn.style.background === 'gold') {
        btn.style.background = color;
    } else {
        btn.style.background = 'gold';
    }

}

buttonList.addEventListener('click', (e) => {
    switch (e.target) {
        case document.querySelector('#btn-1'):
            document.querySelector('#btn-1').style.opacity = document.querySelector('#btn-1').style.opacity === '100' ? 0 : 100;
            break;
        case document.querySelector('#btn-2'):
            toggleColor(document.querySelector('#btn-2'), 'crimson');
            break;
        case document.querySelector('#btn-3'):
            toggleColor(document.querySelector('#btn-3'), 'lightblue');
            break;
        case document.querySelector('#btn-4'):
            document.querySelector('#btn-4').classList.toggle('jitters');
            break;
    }
})
