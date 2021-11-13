// chạy slide
var panes = document.querySelectorAll('.slider-img');
var tabs = document.querySelectorAll('.slider-menu-item');
var slider_menu_1 = document.querySelector('.slider-menu-1');
var slider_menu_2 = document.querySelector('.slider-menu-2');

button_left = document.querySelector('.slider-slide-run-left');
button_right = document.querySelector('.slider-slide-run-right');

var i = 0;

button_right.onclick = function() {
    if (i < 4) {
        slider_menu_2.classList.add('none');
        slider_menu_1.classList.remove('none');
    } else if (i >= 4 && i < panes.length - 1) {
        slider_menu_1.classList.add('none');
        slider_menu_2.classList.remove('none');
    } else if (i === panes.length - 1) {
        slider_menu_2.classList.add('none');
        slider_menu_1.classList.remove('none');
    }
    if (i < panes.length - 1) {
        panes[i].classList.remove('active');
        panes[i + 1].classList.add('active');
        tabs[i].classList.remove('active');
        tabs[i + 1].classList.add('active');
        i++;
    } else if (i === panes.length - 1) {
        panes[i].classList.remove('active');
        panes[0].classList.add('active');
        tabs[i].classList.remove('active');
        tabs[0].classList.add('active');
        i = 0;
    }
}

button_left.onclick = function() {
    if (i > 0 && i <= 5) {
        slider_menu_2.classList.add('none');
        slider_menu_1.classList.remove('none');
    } else if (i > 5 && i <= panes.length - 1) {
        slider_menu_1.classList.add('none');
        slider_menu_2.classList.remove('none');
    } else if (i === 0) {
        slider_menu_1.classList.add('none');
        slider_menu_2.classList.remove('none');
    }
    if (i > 0) {
        panes[i].classList.remove('active');
        panes[i - 1].classList.add('active');
        tabs[i].classList.remove('active');
        tabs[i - 1].classList.add('active');
        i--;
    } else if (i === 0) {
        panes[i].classList.remove('active');
        panes[panes.length - 1].classList.add('active');
        tabs[i].classList.remove('active');
        tabs[panes.length - 1].classList.add('active');
        i = panes.length - 1;
    }
}

function auto() {
    if (i < 4) {
        slider_menu_2.classList.add('none');
        slider_menu_1.classList.remove('none');
    } else if (i >= 4 && i < panes.length - 1) {
        slider_menu_1.classList.add('none');
        slider_menu_2.classList.remove('none');
    } else if (i === panes.length - 1) {
        slider_menu_2.classList.add('none');
        slider_menu_1.classList.remove('none');
    }
    if (i < panes.length - 1) {
        panes[i].classList.remove('active');
        panes[i + 1].classList.add('active');
        tabs[i].classList.remove('active');
        tabs[i + 1].classList.add('active');
        i++;
    } else if (i === panes.length - 1) {
        panes[i].classList.remove('active');
        panes[0].classList.add('active');
        tabs[i].classList.remove('active');
        tabs[0].classList.add('active');
        i = 0;
    }
}

setInterval(auto, 4000);


tabs.forEach(function(tab, index) {
    var pane = panes[index];
    tab.onclick = function() {
        i = index;
        document.querySelector('.slider-menu-item.active').classList.remove('active');
        document.querySelector('.slider-img.active').classList.remove('active');
        tab.classList.add('active');
        pane.classList.add('active');

    }
})

// hiển thị btn chạy sale
if (x.length > 5) {
    document.querySelector('.sale-btn').innerHTML = `<i class="fas fa-chevron-left sale-item-btn-left"></i>
                                                    <i class="fas fa-chevron-right sale-item-btn-right"></i>`
    var sale_item_btn_left = document.querySelector('.sale-item-btn-left');
    var sale_item_btn_right = document.querySelector('.sale-item-btn-right');

    var i_sale = 0;
    sale_item_btn_right.onclick = function() {
        if (i_sale + 5 < x.length) {
            x[i_sale].classList.remove('active');
            x[i_sale + 5].classList.add('active');
            i_sale++;
        } else if (i_sale + 5 == x.length) {
            for (var i = 5; i < x.length; i++) {
                x[i].classList.remove('active');
            }
            for (var i = 0; i < 5; i++) {
                x[i].classList.add('active');
            }
            i_sale = 0;
        }
    }

    sale_item_btn_left.onclick = function() {
        if (i_sale > 0) {
            x[i_sale + 4].classList.remove('active');
            x[i_sale - 1].classList.add('active');
            i_sale--;
        } else if (i_sale == 0) {
            for (var i = x.length - 5; i < x.length; i++) {
                x[i].classList.add('active');
            }
            for (var i = 0; i < x.length - 5; i++) {
                x[i].classList.remove('active');
            }
            i_sale = x.length - 5;
        }
    }
} else if (x.length <= 5) {
    document.querySelector('.sale-btn').innerHTML = '';
}

// chạy sản phẩm sale





// tab sản phẩm project

var tabs_pjs = document.querySelectorAll('.project-tab-btn');
var project_items = document.querySelectorAll('.project-items');

tabs_pjs.forEach(function(tab, index) {
    var project_item = project_items[index];
    tab.onclick = function() {
        document.querySelector('.project-tab-btn.active').classList.remove('active');
        document.querySelector('.project-items.active').classList.remove('active');
        tab.classList.add('active');
        project_item.classList.add('active');
    }
})

// chạy sản phẩm project
var project_btn_left = document.querySelector('.project-btn-left');
var project_btn_right = document.querySelector('.project-btn-right');
var project_item = document.querySelectorAll('.project-item');
var project_item_2 = document.querySelectorAll('.project-item-2');

var i_pj = 0;
var check = 0;
project_btn_right.onclick = function() {
    if (i_pj < project_item.length / 2) {
        project_item[i_pj].classList.remove('active');
        project_item[i_pj + 5].classList.add('active');
        project_item_2[i_pj].classList.remove('active');
        project_item_2[i_pj + 5].classList.add('active');
        i_pj++;
    } else if (i_pj == project_item.length / 2) {
        project_item[i_pj + 4].classList.remove('active');
        project_item[0].classList.add('active');
        project_item[i_pj + 3].classList.remove('active');
        project_item[1].classList.add('active');
        project_item[i_pj + 2].classList.remove('active');
        project_item[2].classList.add('active');
        project_item[i_pj + 1].classList.remove('active');
        project_item[3].classList.add('active');
        project_item[i_pj].classList.remove('active');
        project_item[4].classList.add('active');

        project_item_2[i_pj + 4].classList.remove('active');
        project_item_2[0].classList.add('active');
        project_item_2[i_pj + 3].classList.remove('active');
        project_item_2[1].classList.add('active');
        project_item_2[i_pj + 2].classList.remove('active');
        project_item_2[2].classList.add('active');
        project_item_2[i_pj + 1].classList.remove('active');
        project_item_2[3].classList.add('active');
        project_item_2[i_pj].classList.remove('active');
        project_item_2[4].classList.add('active');
        i_pj = 0;
    }
}

project_btn_left.onclick = function() {
    if (i_pj > 0) {
        project_item[i_pj - 1].classList.add('active');
        project_item[i_pj + 4].classList.remove('active');
        project_item_2[i_pj - 1].classList.add('active');
        project_item_2[i_pj + 4].classList.remove('active');
        i_pj--;
    } else if (i_pj == 0) {
        project_item[i_pj].classList.remove('active');
        project_item[i_pj + 1].classList.remove('active');
        project_item[i_pj + 2].classList.remove('active');
        project_item[i_pj + 3].classList.remove('active');
        project_item[i_pj + 4].classList.remove('active');

        project_item_2[i_pj].classList.remove('active');
        project_item_2[i_pj + 1].classList.remove('active');
        project_item_2[i_pj + 2].classList.remove('active');
        project_item_2[i_pj + 3].classList.remove('active');
        project_item_2[i_pj + 4].classList.remove('active');

        i_pj = project_item.length - 1;
        project_item[i_pj].classList.add('active');
        project_item[i_pj - 1].classList.add('active');
        project_item[i_pj - 2].classList.add('active');
        project_item[i_pj - 3].classList.add('active');
        project_item[i_pj - 4].classList.add('active');

        project_item_2[i_pj].classList.add('active');
        project_item_2[i_pj - 1].classList.add('active');
        project_item_2[i_pj - 2].classList.add('active');
        project_item_2[i_pj - 3].classList.add('active');
        project_item_2[i_pj - 4].classList.add('active');
        i_pj = i_pj - 4;
    }
}

// đóng mở modal
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