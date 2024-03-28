
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",() => {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    btn.style.backgroundColor = "lightcyan";
    let  delbtn = document.createElement("button");
    delbtn.innerText = "✓";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    input.value = "";
    
})

input.addEventListener("keypress",(e) => {
     if(e.key == "Enter")
     {
        let item = document.createElement("li");
        item.innerText = input.value;
        ul.appendChild(item);
        let  delbtn = document.createElement("button");
        delbtn.innerText = "✓";
        delbtn.classList.add("delete");
        item.appendChild(delbtn);
        input.value = "";
     }
})

ul.addEventListener("click",function(e) {
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    console.log(listItem ,"deleted");
    }
})

/* let delbtns = document.querySelectorAll(".delete");
console.log(delbtns);
for(d of delbtns){
    d.addEventListener("click",function() {
        console.log(d);                                            //on console.log(d) why they only target last one
        let par = this.parentElement;
        par.remove();
    })
}
 */