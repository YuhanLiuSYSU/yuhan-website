let tblCont = document.getElementsByClassName('main-nav')[0]
let disText = document.getElementsByClassName('main-content')[0]


// Create anchor element.
// var a = document.createElement('a');                   
// // Create the text node for anchor element.
// var link = document.createTextNode("Pure function");
// // Append the text node to anchor element.
// a.appendChild(link); 
// // Set the title.
// a.title = "this is link"; 
// // Set the href property.
// a.href = "https://www.geeksforgeeks.org"; 

// tblCont.appendChild(a)


//-------------------------------
let divPure = document.createElement('div')

let h1Pure = document.createElement('h1')
h1Pure.innerText = "Pure function"

let pPure = document.createElement('p')
pPure.innerText = `Pure function is a handy tool in scientific computation. Below, we introduce the pure function and show its application in various languages -- in my research project!`

divPure.appendChild(h1Pure)
divPure.appendChild(pPure)

let tagPure = document.getElementById("pure");
tagPure.myParam = 1
tagPure.addEventListener("click", handleClick)

//---------------------------------


let divSciComp = document.createElement('div')

let p2 = document.createElement('h1')
p2.innerText = "Scientific computation"

let compText = document.createElement('p')
compText.innerText = `As we add more and more functionalities to our codes, one thing that draws us attention is how to store the data. Python provides powerful data storage module like pickle, but as you have more variables to store, the code can be messy.

Here, we show that using class and object can make the data storage clear and worry-free
`

divSciComp.appendChild(p2)
divSciComp.appendChild(compText)

let h3One = document.getElementById('scicomp')
h3One.myParam = 2
h3One.addEventListener("click", handleClick)

// var extern = document.getElementsByTagName("link")[0].import;
// var absatz = extern.getElementsByTagName("p")[0];

function handleClick(evt){
    disText.innerText = '';
    i = evt.currentTarget.myParam
    switch (i){
        case 1: 
            disText.appendChild(divPure)
            break
        case 2: 
            // let newChild = extern.getElementById("sci-comp-main")
            // disText.replaceChild(newChild, document.getElementById("init-cont"));
            disText.appendChild(divSciComp)
            break
    }
}
