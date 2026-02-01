function HtmlElement() {
  this.click = function () {
    this.focus();
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter(i => i !== item);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.render = function () {
  let options = this.items
    .map(item => `<option>${item}</option>`)
    .join("");

  return `<select>${options}</select>`;
};

function HtmlImageElement(src) {
  this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlImageElement.prototype.render = function () {
  return `<img src="${this.src}" />`;
};

const img1 = new HtmlImageElement("https://example.com/cat.png");
console.log(img1.render());
// <img src="https://example.com/cat.png" />

const img2 = new HtmlImageElement();
console.log(img2.render());
// <img src="undefined" />
