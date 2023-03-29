// arrays de las personas
const reviews = [
    {id: 1,
        name: "Alejandro Perez",
        job: "web developer",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "aqui va texto",
    },

    {
        id: 2,
        name: "Susana Lopez",
        job: "IA development",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        text: "aqui va una informacion",
    },

    {
        id: 3,
        name: "aleatorio",
        job: "aleatorio",
        img: "no hay",
        text: "aqui va una informacion",
    }

    
];

//? Select items
// I receive the data from the html 
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//? set stating item 
let currentItem = 0;


//? load intial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

//? show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src= item.img;
    author.textContent = item.name
    job.textContent = item.job;
    info.textContent = item.text;
}

//? show next person
nextBtn.addEventListener('click', function() {
    currentItem ++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson();
});

//? show prev Person
prevBtn.addEventListener('click', function() {
    currentItem --
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})