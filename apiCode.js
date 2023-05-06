
setTimeout(() => {
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.name);
    // console.log(data.sprites.front_default);
    document.getElementById('name').innerText = data.name;
    document.getElementById('picture').src = data.sprites.front_default;
})}, 3000);

console.log('Me imprimo primero');

