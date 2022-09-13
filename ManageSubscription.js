function skipDelivery() {
    var addItemAction = document.getElementById("add-item-action-toast");
    addItemAction.hidden = false; 
    setTimeout( 
        () => {
            location.href = 'SubscriptionsChanged.html'
        }, 4000
    )
}