function addTask(){
    var target = document.querySelector("input.textbox");
    var parent = document.querySelector(".item")
    var newDiv = document.createElement("div");
    newDiv.classList.add("newItem");
    newDiv.innerHTML = `<input onclick="strikeThrough(this)" type='checkbox'><span>${target.value}</span>`;
    if(target.value !=""){
    parent.insertBefore(newDiv, target);
    target.value = "";
    }
}
function strikeThrough(context){
    context.parentElement.lastChild.classList.toggle('done');
}


