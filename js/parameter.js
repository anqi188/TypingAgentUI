

// $('[name="parameter"][value="default"]').prop('checked', true);
// $('.form-content').toggle((this.value == 'custom'))

$('[name="parameter"][value="custom"]').prop('checked', true);
$('.button').toggle((this.value == 'default'))

$('[name="parameter"]').click(function () {
    $('.button').toggle((this.value == 'default'))
    $('.form-content').toggle((this.value == 'custom'))
})

// Accordion Control
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Slider Control
var tre_s = document.getElementById("tre-s");
var tre_v = document.getElementById("tre-v");
tre_v.innerHTML = tre_s.value;
tre_s.oninput = function() {
    tre_v.innerHTML = this.value/100;
}

var exp_s = document.getElementById("exp-s");
var exp_v = document.getElementById("exp-v");
exp_v.innerHTML = exp_s.value;
exp_s.oninput = function() {
    exp_v.innerHTML = this.value/100;
}

var dys_s = document.getElementById("dys-s");
var dys_v = document.getElementById("dys-v");
dys_v.innerHTML = tre_s.value;
dys_s.oninput = function() {
    dys_v.innerHTML = this.value/100;
}
