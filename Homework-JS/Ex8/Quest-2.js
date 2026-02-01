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

const select = new HtmlSelectElement([1]);

select.addItem(2);
select.removeItem(1);