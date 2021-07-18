const button = document.querySelector('h1');

button.addEventListener('click', () => {
  alert("You clicked me!!");
});

button.addEventListener("mouseover", function() {
    button.innerText = "Stop touching me!";
});

// to make the element return to it's original text: 
button.addEventListener("mouseout", function () {
    button.innerText = "Click me if you dare.";
})