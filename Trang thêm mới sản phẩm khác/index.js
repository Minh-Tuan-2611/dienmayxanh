var list_products = [];

function taoId() {
    var id = Math.random().toString().substr(2, 10) + '_' + String(new Date().getTime());
    return id;
}

function productItem(img, name, priceOld, percentSale, area, id) {
    this.img = img;
    this.name = name;
    this.priceOld = priceOld;
    this.percentSale = percentSale;
    this.priceSale = function() {
        return this.priceOld * (1 - (this.percentSale) / 100);
    }
    this.area = area;
    if (id == null) {
        this.id = taoId();
    } else {
        this.id = id;
    }
}

var list = JSON.parse(localStorage.getItem('product_list'));
if (list == null) {
    list = [];
}

var jsonListProduct = localStorage.getItem('product_list');
var product_items = JSON.parse(jsonListProduct);
var array_sau = [];
for (var i = 0; i < product_items.length; i++) {
    var daydu = new productItem(product_items[i].img, product_items[i].name, product_items[i].priceOld, product_items[i].percentSale, product_items[i].area, product_items[i].id);
    array_sau.push(daydu);
    // console.log(array_sau);
}


function renderProduct() {
    var y = array_sau.map(function(array_sau_2, index) {
        return `
        <div class="product-item">
            <i onclick="deleteProductItem('${array_sau_2.id}')" class="fas fa-times product-item-delete"></i>
            <div class="product-item-img">
                <img src="${array_sau_2.img}" alt="">
            </div>
            <h4 class="product-item-title">${array_sau_2.name}</h4>
            <div class="product-item-price">
                <span class="product-item-price-origin">${array_sau_2.priceOld} đ</span>
                <span class="product-item-price-sale">${array_sau_2.priceSale()} đ</span>
            </div>
            <button onclick="addCart('${array_sau_2.id}')" class="btn btn-primary">Đưa vào giỏ hàng</button>
        </div>
        `;
    })
    var z = y.join(' ');
    document.querySelector('.product-items').innerHTML = z;
}

function create_product() {
    var img = document.querySelector('.product-img').value;
    var name = document.querySelector('.product-name').value;
    var priceOld = document.querySelector('.product-price-old').value;
    var percentSale = document.querySelector('.product-percent-sale').value;
    var area = document.querySelector('.product-area').value;

    var input = document.querySelectorAll('input');
    var error_msg = document.querySelectorAll('.msg-error');
    for (var i = 0; i < error_msg.length; i++) {
        error_msg[i].innerHTML = ''
    }

    document.querySelector('.product-img').classList.remove('input-error');
    document.querySelector('.product-name').classList.remove('input-error');
    document.querySelector('.product-price-old').classList.remove('input-error');
    document.querySelector('.product-percent-sale').classList.remove('input-error');
    document.querySelector('.product-area').classList.remove('input-error');
    for (var i = 0; i < input.length; i++) {
        if (input[i].value.trim() == '') {
            input[i].classList.add('input-error');
            error_msg[i].innerHTML = 'Vui lòng nhập đúng thông tin cho trường này';
        }
    }

    var input_number = document.querySelectorAll('input[type="number"]');
    for (var i = 0; i < input_number.length; i++) {
        if (parseInt(input_number[i].value) <= 0) {
            input_number[i].classList.add('input-error');
            input_number[i].parentElement.querySelector('.msg-error').innerHTML = 'Vui lòng nhập giá trị lớn hơn 0'
        }
    }

    if (parseInt(percentSale) > 100) {
        document.querySelector('.product-percent-sale').classList.add('input-error');
        document.querySelector('.product-percent-sale').parentElement.querySelector('.msg-error').innerHTML = 'Giá trị phải nhỏ hơn 100'
    }

    if (img.trim() != '' && name.trim() != '' && priceOld.trim() != '' && percentSale.trim() != '' && area.trim() != '') {
        if (priceOld > 0 && percentSale > 0 && percentSale < 100) {
            var newProduct = new productItem(img, name, priceOld, percentSale, area, null);
            list_products.push(newProduct);
            var img = document.querySelector('.product-img').value = '';
            var name = document.querySelector('.product-name').value = '';
            var priceOld = document.querySelector('.product-price-old').value = '';
            var percentSale = document.querySelector('.product-percent-sale').value = '';
            var area = document.querySelector('.product-area').value = '';
            var json = JSON.stringify(list_products);
            localStorage.setItem('product_list', json);
            alert('Thêm sản phẩm thành công');
        }
    }
}

function truyXuatTheoId(id) {
    var product = new Object();
    var jsonProductList = localStorage.getItem('product_list');
    var productList = JSON.parse(jsonProductList);
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].id == id) {
            product = productList[i];
        }
    }
    product = new productItem(product.img, product.name, product.priceOld, product.percentSale, product.area, product.id);
    return product;
}

function getProductListItem() {
    var productListItem = new Array();
    var jsonProductListItem = localStorage.getItem('product_list');
    if (jsonProductListItem == null) {
        productListItem = new Array();
    } else {
        productListItem = JSON.parse(jsonProductListItem);
    }
    return productListItem;
}

function saveProductListItemToStorage(productListItem) {
    var jsonProductListItem = JSON.stringify(productListItem);
    localStorage.setItem('product_list', jsonProductListItem);
}

function deleteProductItem(id) {
    productListItem = new Array();
    productListItem = array_sau;
    for (var i = 0; i < productListItem.length; i++) {
        // var currentProduct = productListItem[i];
        if (productListItem[i].id == id) {
            productListItem.splice(i, 1);
            renderProduct()
            saveProductListItemToStorage(productListItem);
        }
    }
}

// form validation
var input = document.querySelectorAll('input');
var error_msg = document.querySelectorAll('.msg-error');

for (var i = 0; i < input.length; i++) {
    confirm(input[i], error_msg[i]);
}

function confirm(input, error_msg) {
    input.onblur = function() {
        if (input.value.trim() == '') {
            input.classList.add('input-error');
            error_msg.innerHTML = 'Vui lòng nhập đúng thông tin cho trường này';
        }
    }
    input.onmouseout = function() {
        if (input.value.trim() != '') {
            input.classList.remove('input-error');
            error_msg.innerHTML = '';
        }
    }
}