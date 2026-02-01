function cStyles() {
  const d1 = document.getElementById("d1");
  const styles = window.getComputedStyle(d1);

  const height = styles.getPropertyValue("height");
  const maxWidth = styles.getPropertyValue("max-width");
  const bgColor = styles.getPropertyValue("background-color");

  document.getElementById("t1").value = height;
  document.getElementById("t2").value = maxWidth;
  document.getElementById("t3").value = bgColor;
}

document.getElementById("btn").addEventListener("click", function () {
    cStyles();
});
