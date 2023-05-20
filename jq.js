console.log('Good morning Dr. Big D!')

// // [
//     { slot: 1,  type: {name:  "grass", url: "https://pokeapi.co/api/v2/type/12/"}},
//     { slot: 2,  type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}},
// //  ];
// // Transform above array to below array???
// //  6
// // ["grass", "poison"];

// const pokemon = [    // need to make a new const that refers to the information in this array
//     { slot: 1,  type: {name:  "grass", url: "https://pokeapi.co/api/v2/type/12/"}},
//        { slot: 2,  type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}},
//        { slot: 3,  type: {name: "fire", url: "https://pokeapi.co/api/v2/type/4/"}},
//        { slot: 2,  type: {name: "Get It", url: "https://pokeapi.co/api/v2/type/4/"}},
//      ];

//      const newPoke = pokemon.map((item) => item.type.name); //using map can pull the type of data wanted, this works out because 
//      //the requested data are the same element in each slot.

//      console.log(newPoke);


// let x = [
//     { slot: 1, type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
//     { slot: 2, type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } },
// ];

// let y = x.map(v => v.type.name)
// console.log(y);

const $searchForm = $('form');

$searchForm.on('submit', event => {
    event.preventDefault(); // searches form and prevents janky imoticon/site 

const formData = new FormData(event.target);  // creates new variable from the info from the gameboy

const pokemon = formData.get('pokemon') // takes the data from the search bar fill in to get the url

const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` // makes url usable 

console.log(url)

    $.ajax(url)
        .then(response => console.log(response)) // jquery way to print the url

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data)) // JS way to print the data from the url

const $screen = $('.ds-screen')
const $results = $('.result')

// empty out the input field
$(`[name='pokemon']`)[0].value = '';

// empty out old search and loading new one
$screen.empty();
$results.html(`<div>Loading...</div>`)

fetch(url)
        .then(response => {
            return response.json();

        })
        .then(data => {
            $screen.html(`<img src=${data.sprites.front_default} alt=${data.name}>`); // prints to screen of gameboy
           
        $results.html(`
            
            <div>
                <b>Name:&nbsp </b> <span>${data.name}</span>
            </div>

            <div>
                <b>Id:&nbsp </b> <span>${data.id}</span>
            </div>
            
            <div>
                <b>Weight:&nbsp  </b> <span>${data.weight}</span>
            </div>
            
            <div>
                <b>Type: &nbsp</b> <span>${data.type}</span>
            </div>
       ` )

        })
                .catch(() => {
                    $results.html(`<div> <span>You done played yourself...</span></div>`)
                })
    });


