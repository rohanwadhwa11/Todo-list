
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",addElement);

input.addEventListener("keypress",(e) => {
     if(e.key == "Enter")
     addElement();
})

ul.addEventListener("click",function(e) {
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.style.textDecoration = "line-through";
       setTimeout(() => {
        listItem.remove();
       }, 400);
    console.log(listItem ,"deleted");
    }
})

function addElement(){
    if(input.value != ""){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    btn.style.backgroundColor = "lightcyan";
    let  delbtn = document.createElement("button");
    delbtn.innerText = "✓";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    input.value = "";
    }
    else{
        alert("enter a task to add it");
        input.style.backgroundColor = "yellow";
        setTimeout(() => {
            input.style.backgroundColor = "lavender";
        }, 500);
    }
}