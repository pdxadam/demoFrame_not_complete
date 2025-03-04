var list1 = ["Inigo", "Buttercup", "Wesley"];
var list2 = ["Han Solo", "Luke", "Leia", "Vader"];
var ul1, ul2;

window.onload = function(){
    ul1 = document.querySelector("#list1");
    ul2 = document.querySelector("#list2");
    fillLists();
}
function fillLists(){
    ul1.innerHTML = "";
    ul2.innerHTML = "";
    for (const character of list1){
        const li = createLI(character)
        ul1.appendChild(li);
    }   
    for (const character of list2){
        const li = createLI(character)
        ul2.appendChild(li);
    } 
}
function createLI(name){
    const li = document.createElement("li");
    li.innerText = name;

    return li;
}
