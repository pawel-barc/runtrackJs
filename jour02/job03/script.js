let x = 0;

document.getElementById("button").addEventListener("click", addOne);

function addOne() {
    x++;
    document.getElementById('compteur').textContent = x;
}