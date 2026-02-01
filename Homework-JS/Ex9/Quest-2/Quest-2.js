const box = document.getElementById('box');

function setBorderWidth(width) {
  box.style.borderWidth = width + 'px';
}

document.getElementById('btn20').addEventListener('click', function (event) {
  setBorderWidth(20);
  event.preventDefault(); // nay la yeu cau form tam thoi ngung hanhh vi mac dinh va de js xu li phan sau
});

document.getElementById('btn5').addEventListener('click', function (event) {
  setBorderWidth(5);
  event.preventDefault(); // nay la yeu cau form tam thoi ngung hanhh vi mac dinh va de js xu li phan sau
});
