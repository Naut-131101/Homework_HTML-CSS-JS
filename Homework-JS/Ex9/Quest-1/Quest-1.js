const images = [
  document.getElementById('img1'),
  document.getElementById('img2'),
  document.getElementById('img3')
];

const resultDiv = document.getElementById('result');
const ul = document.createElement('ul');

images.forEach((img, index) => {
  const li = document.createElement('li');
  li.textContent = `
Image ${index + 1}:
height = ${img.height},
width = ${img.width},
style.height = ${img.style.height},
style.width = ${img.style.width}
  `;
  ul.appendChild(li); // li chen` vo ul
});

resultDiv.appendChild(ul); // ul chenf vo resultDiv