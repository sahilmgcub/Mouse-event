var myElement = document.getElementById('myElement');

var BC = new Hammer(myElement);

BC.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" Done in Body.";
});

var headElement = document.getElementById('headElement');

var mc = new Hammer(headElement);

mc.on("panleft panright tap press", function(ev) {
    headElement.textContent = ev.type +" Done in Head.";
});