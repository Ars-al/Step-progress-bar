const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progresEl = document.querySelector(".front-bar")
const stepsEl = document.querySelectorAll(".step")

let currentchecked = 1;

nextEl.addEventListener("click", () => {
    currentchecked++;
    if (currentchecked > stepsEl.length) {
        currentchecked = stepsEl.length;
    }
    updateProgressBar();
});

prevEl.addEventListener("click", () => {
    currentchecked--;
    if (currentchecked < 1) {
        currentchecked = 1;
    }
    updateProgressBar();
});

function updateProgressBar() {
    stepsEl.forEach((stepEl, index) => {
        if (index < currentchecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-check"></i> <small> ${index===0 ? "start" : index===stepsEl.length - 1 ? "final" : "step " + index} </small>`;
        }
        else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fas fa-times"></i>`;
        }
    });

    const checkedNumber = document.querySelectorAll(".checked");

    progresEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

    if (currentchecked === 1) {
        prevEl.disabled = true;
    }else if (currentchecked === stepsEl.length) {
        nextEl.disabled = true;
    }else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}