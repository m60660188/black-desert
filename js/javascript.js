window.onload = function() {
  fetch("common/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementsByClassName(".navbar").innerHTML = data
    })
}