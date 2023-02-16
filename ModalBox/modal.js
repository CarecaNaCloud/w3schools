

let modal = document.getElementById("myModal");

let modalBtn = document.getElementById("modalBtn");

let closeBtn = document.getElementsByClassName("modal-closeBtn")[0];

modalBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
