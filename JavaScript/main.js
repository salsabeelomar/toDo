const light=document.getElementsByClassName("light")[0];
const lightMode=document.body;
const day=document.getElementsByClassName("day")[0];
const list=document.getElementsByClassName("list")[0];
const task=document.getElementsByClassName("task")[0];
const addingPlace=document.getElementsByClassName("addingPlace")[0];
const submit=document.getElementsByClassName("submit")[0];
const days={ weekday:"long", month:"short", day: "numeric"};
const date =new Date();

list.addEventListener("click",dele)


window.addEventListener('DOMContentLoaded',createToDo)
day.textContent= date.toLocaleDateString("English", days);

function DarkLight() {
    light.classList.toggle("dark");
    lightMode.classList.toggle("darkMode");
    day.classList.toggle("darkDay")
}


submit.addEventListener("click",createToDo)


 function createToDo(){
if(task.value){
    const item=document.createElement("li");
    list.appendChild(item);

    const check=document.createElement("input");
      check.type="checkbox";
      item.appendChild(check);

    const todo=document.createElement("lable");
    todo.textContent=task.value;
    item.appendChild(todo);
    add(task.value)

    const trash =document.createElement("i");
    trash.classList.add("far", "fa-trash-alt","trashButton");
    item.appendChild(trash); 

    const edit=document.createElement("i"); 
    edit.classList.add("fal","fa-edit");
    item.appendChild(edit); 

  
    
    task.value="";
    
    
   }
 
}

function add(task){
    let items;
    if(localStorage.getItem("toDos")===null){
        items=[]
    }else{
        items=JSON.parse(localStorage.getItem("toDos"))
    }
    items.push(task)
    localStorage.setItem ("toDos",JSON.stringify(items))
  

};
 window.onload=function(){
    const getToDo=localStorage.getItem("toDo")
    }


function dele(ele){
    let itemafterdelet;
    const value=ele.target;
    if(value.classList[2]==="trashButton"){
    const delItem=value.parentElement;
    delItem.remove(); 
    if (localStorage.getItem("toDos") === null) {
       itemafterdelet= [];
      } else{
        itemafterdelet=JSON.parse(localStorage.getItem("toDos"))
      }
    const delet=itemafterdelet.splice(itemafterdelet.indexOf(value));
    localStorage.setItem("toDos",JSON.stringify(itemafterdelet))
   
    };

}