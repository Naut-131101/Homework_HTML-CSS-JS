function HtmlElement() {
  // instance method
  this.click = function () {
    this.focus();
  };
}

// prototype method
HtmlElement.prototype.focus = function () {
  console.log("focused");
};

const input = new HtmlElement();
input.click(); // focused