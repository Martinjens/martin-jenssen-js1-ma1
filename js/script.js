
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1
const cat = {
    complain: function() {
       console.log("meow!");

    }
}
cat.complain();

// question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3
heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading")

//question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++){
    console.log(paragraphs[i])
    paragraphs[i].style.color = "red";
}



//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";


//question 7

function list(list) {
    for (let i = 0; i < list.length; i++){
    console.log(list[i].name)
    }
    
}

list(cats); 


//question 8
/*
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

const container = document.querySelector(".cat-container");

console.log(container);

let html = ""

function createCats(cats) {

for (let i = 0; i < cats.length; i++){

    html += `<div> + ${cats[i]}</div>`;

    console.log(html)

   
 
}
}
container.innerHTML = html;
createCats(cats)
*/