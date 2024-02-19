const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function  addItem() {
    if (inputBox.value ===""){
        alert("You must add some text");
    }else{ 
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        //console.log(li);
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00D7";
        li.appendChild(span);
    }
    console.log("s")
    inputBox.value="";
    saveItems();
}
listContainer.addEventListener("click", function (e) {
    
    if(e.target.tagName== "LI"){
        console.log(e.target.classList);
        e.target.classList.toggle("checked");
        saveItems()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveItems()
    }
},false);                                                                                           

 function  saveItems(){
    localStorage.setItem("data",listContainer.innerHTML);

 }
 function  showTask(){
    listContainer.innerHTML=localStorage.getItem( "data" );
 }
 showTask();