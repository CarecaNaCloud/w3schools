

let modal = document.getElementById("myModal");

let modalBtn = document.getElementById("modalBtn");

let closeBtn = document.getElementsByClassName("modal-closeBtn")[0];


//Display Modal
modalBtn.onclick = function() {
    modal.style.display = "block";
}

//Close Modal on X button click
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//Close Modal on window click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
