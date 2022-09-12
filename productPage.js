function addItem() {
    document.getElementById("add-item-action-toast").hidden = false; 
    setTimeout( 
        () => {
            document.getElementById("add-item-action-toast").hidden = true;
        }, 2000
    )
}

