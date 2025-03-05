var list1 = ["Inigo", "Buttercup", "Wesley"];
var list2 = ["Han Solo", "Luke", "Leia", "Vader"];
var ul1, ul2;
//Goal:  To drag a character from one list to the other on the screen AND change which array it is in here in memory
//tasks: 
// add draggable attribute to all the draggable elements
// create the ondrag function that assigns the proper data to the dataTransfer event
// add an ondrag listener to those elements
// add an ondragover function/listener to the drop zones that prevents default behavior
// add an ondrop function/listener to drop zones that correctly shifts the element between lists

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
