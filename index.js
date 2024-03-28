console.log("index.js addedds")

const deleteBtn = document.getElementsByClassName("deleteBtn")[0];
const modalContainer = document.getElementById("modalContainer");
const cancelBtn = document.getElementById("cancelBtn");

const body = document.body;
body.addEventListener("click", (e) => {
    // console.log(e.target)

    if (e.target.id !== "modalContainer" && modalContainer.style.display === 'block' && e.target.id !== "delBtn") {
        console.log('if runs')
        modalContainer.style.display = 'none'
        document.body.style.background = ""
    }
})

deleteBtn.addEventListener("click", () => {
    console.log("btn clicked")

    modalContainer.style.display = "block";
    document.body.style.background = "rgb(0 0 0 / 55%)"
    modalContainer.style.background = "white";
})

cancelBtn.addEventListener("click", () => {
    console.log("btn clicked")

    modalContainer.style.display = "none";
    document.body.style.background = "";
})