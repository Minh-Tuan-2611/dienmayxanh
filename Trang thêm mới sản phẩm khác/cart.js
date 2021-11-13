var keyLocalStorage = 'cartListItem';

function cartItem(id, number) {
    this.id = id;
    this.number = number;
}

function getCartListItem() {
    var cartListItem = new Array();
    var jsonCartListItem = localStorage.getItem(keyLocalStorage);
    if (jsonCartListItem == null) {
        cartListItem = new Array();
    } else {
        cartListItem = JSON.parse(jsonCartListItem);
    }
    return cartListItem;
}

function saveCartListItemToStorage(cartListItem) {
    var jsonCartListItem = JSON.stringify(cartListItem);
    localStorage.setItem(keyLocalStorage, jsonCartListItem);
}

function removeCart(id) {
    var cartListItem = getCartListItem();
    for (var i = 0; i < cartListItem.length; i++) {
        var currentItem = cartListItem[i];
        if (currentItem.id == id) {
            cartListItem[i].number--;
            saveCartListItemToStorage(cartListItem);
            render();
        }
        if (cartListItem[i].number == 0) {
            cartListItem.splice(i, 1);
            saveCartListItemToStorage(cartListItem);
            render();
        }
    }
}

function removeAllCart() {
    var cartListItem = getCartListItem();

    cartListItem.splice(0, cartListItem.length);
    document.querySelector('.cart').innerHTML = '';
    saveCartListItemToStorage(cartListItem);
}