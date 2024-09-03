const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const value = document.getElementById("value");
let count = 0;

decrease.addEventListener("click", () => {
    count--;
    value.innerHTML = count;
});

increase.addEventListener("click", () => {
    count++;
    value.innerHTML = count;
});

reset.addEventListener("click", () => {
    count = 0;
    value.innerHTML = count;
});