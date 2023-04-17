const hex = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let intervalReturned;
btn.addEventListener('click', colorChangeFun);
function colorChangeFun(e) {
    
    if (btn.value === "OFF") {
        btn.value = "ON";
        btn.textContent = "OFF";
        intervalReturned = setInterval(backgroundChange, 1000);
    } else {
        btn.value = "OFF";
        btn.textContent = "ON";
        clearInterval(intervalReturned);
        document.body.style.backgroundColor = "white";
        color.textContent = "WHITE";

    }
}

function backgroundChange() {
    var hexString = "#";
    for (var i = 0; i < 8; i++) {
        hexString += hex[getRandom()];
    }
    console.log(hexString);
    document.body.style.backgroundColor = hexString;
    color.textContent = hexString;
}
function getRandom() {
    return Math.floor(Math.random() * hex.length);
}
