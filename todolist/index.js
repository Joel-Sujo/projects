let todoindex = 1;

function addt(){
    let element = document.getElementById("todoinput")
    const todo = element.value;
    element.value = "";
    console.log(todo);
    const tododiv = document.createElement("div");
    tododiv.setAttribute("id","todo" + todoindex);
    const todospan = document.createElement("span");
    todospan.innerHTML = todo;
    tododiv.appendChild(todospan);
    const todobutton = document.createElement("button");
    todobutton.innerHTML = "Delete to do";
    todobutton.setAttribute("onclick","deletetodo("+todoindex+")");
    tododiv.appendChild(todobutton);
    const parentdiv = document.getElementById("todos");

    parentdiv.appendChild(tododiv);
    todoindex = todoindex + 1;
}

function deletetodo(index){
    const divElement = document.getElementById("todo" + index);
    document.getElementById("todos").removeChild(divElement);
}
    
