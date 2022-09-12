function addItem() {
    var addItemAction = document.getElementById("add-item-action-toast");
    addItemAction.hidden = false; 
    setTimeout( 
        () => {
            addItemAction.hidden = true;
        }, 2000
    )

    var subscribeNowButton = document.getElementById("subscribe-now-button");
    subscribeNowButton.classList.remove("borderBlink");

    var cartIcon = document.getElementById("cart_drawer_target_id");
    cartIcon.classList.add("borderBlink");

    document.getElementById("shopee-cart-number-badge").hidden= false;
}

