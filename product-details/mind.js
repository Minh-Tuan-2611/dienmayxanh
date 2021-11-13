let Review = document.querySelector('.review');

document.querySelector('#Review-article').onclick = () =>{
    Review.classList.toggle('active');
    black.classList.remove('active');
    highlights.classList.remove('active');
    parameter.classList.remove('active');
}

let parameter = document.querySelector('.parameter');

document.querySelector('#parameter').onclick = () =>{
    parameter.classList.toggle('active');
    Review.classList.remove('active');
    black.classList.remove('active');
    highlights.classList.remove('active');
}

let black = document.querySelector('.black');

document.querySelector('#black').onclick = () => {
    black.classList.toggle('active');
    highlights.classList.remove('active');
    parameter.classList.remove('active');
    Review.classList.remove('active');
}

let highlights = document.querySelector('.highlights');

document.querySelector('#highlights').onclick = () => {
    highlights.classList.toggle('active');
    black.classList.remove('active');
    parameter.classList.remove('active');
    Review.classList.remove('active');
}
