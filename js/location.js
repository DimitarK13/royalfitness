document.querySelector("#location").style.display = "none";

document.querySelector("#locationDisplay").addEventListener("click", () => {
    let location = document.querySelector("#location");

    if (location.style.display == "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
})