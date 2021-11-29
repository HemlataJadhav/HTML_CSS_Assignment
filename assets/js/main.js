const readmorebtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
readmorebtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readmorebtn.innerText === 'Read More') {
        readmorebtn.innerText = 'Read Less';

    }
    else {
        readmorebtn.innerText = 'Read More';

    }
})

const readmorebtn1 = document.querySelector('.read-more-btn1');
const text = document.querySelector('.text1');
readmorebtn1.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readmorebtn1.innerText === 'Read More') {
        readmorebtn1.innerText = 'Read Less';

    }
    else {
        readmorebtn1.innerText = 'Read More';

    }
})