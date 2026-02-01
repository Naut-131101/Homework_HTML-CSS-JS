const td = document.getElementById('c2');

function stopEvent(event) {
    td.textContent = 'hello';
    event.stopPropagation(); // ngan su kien anh huong len table
    console.log("event propagation halted - ngăn sự kiện ảnh hưởng lên <table> thành công!");
};

document.getElementById('tbl1').addEventListener('click', function (event) {
    stopEvent(event);
}, false);

document.getElementById('t-daddy').addEventListener('click', function () {
    console.log("t-daddy clicked");
}, false);