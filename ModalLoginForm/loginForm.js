const modal = document.getElementById("modalWrapper")
const closeBtn = document.getElementById("closeModal")

const showModal = function() {
    modal.style.display = "block";
}

const closeModal = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}