const pid = document.getElementById('pid');  
function changeText(color, fontSize) {
    pid.style.color = color;
    pid.style.fontSize = fontSize + 'pt';
}

document.querySelector("button").addEventListener('click', function (event) {
    changeText('blue', 18);
    event.preventDefault();
})