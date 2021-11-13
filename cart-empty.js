var calalog = document.querySelector('.header-sub-category');
calalog.onclick = function() {
    document.querySelector('.slider-catalog').classList.add('active');
}

document.querySelector('.main').onclick = function() {
    document.querySelector('.slider-catalog').classList.remove('active');
}

document.querySelector('.header-sub-category').addEventListener('click', function(event) {
    event.stopPropagation();
})

document.querySelector('.slider-catalog').addEventListener('click', function(event) {
    event.stopPropagation();
})

// mở modal

var button_exist = document.querySelector('.header-search-exist');
button_exist.onclick = function() {
    document.querySelector('.modal').classList.add('active');
}

var button_close_modal = document.querySelector('.form-select-heading-close');
button_close_modal.onclick = function() {
    document.querySelector('.modal').classList.remove('active');
}

document.querySelector('.modal').onclick = function() {
    document.querySelector('.modal').classList.remove('active');
}

document.querySelector('.form-select').addEventListener('click', function(event) {
    event.stopPropagation();
})