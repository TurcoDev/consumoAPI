// Consumo de API
function api() {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.name);
    // console.log(data.sprites.front_default);
    document.getElementById('name').innerText = data.name;
    document.getElementById('picture').src = data.sprites.front_default;
})
}

setTimeout(api(), 3000);


console.log('Me imprimo primero');

// scroll event
window.onscroll = function() {
  myFunction()
};

function myFunction() {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
    document.getElementById("picture").className = "image";
  } else {
    document.getElementById("myP").className = "";
    document.getElementById("picture").className = "";
  }
}


