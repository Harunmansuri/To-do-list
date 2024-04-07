const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputbox.value = "";
    savedata();

};
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classlist.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();

        }
    }, false);

    function savedata(){
        localStorage.setItem("data" , listcontainer.innerHTML);
    }
    function showlist(){
        listcontainer.innerHTML=localStorage.getItem("data");
    }
showlist();