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

const select = new HtmlSelectElement([1, 2, 3]);
console.log(select.render());