var myTaskList = document.getElementsByTagName("li");

for (var i = 0; i < myTaskList.length; i++){
    var span = document.createElement('span');
    var xBtn = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(xBtn);
    myTaskList[i].appendChild(span);
};

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var element = this.parentElement;
        element.style.display = "none";
    };
};

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle("done");
    };
}, false);



function addNew(){
    var newLi = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var newTask = document.createTextNode(inputValue);
    newLi.appendChild(newTask);
    
    if (inputValue === ''){
        alert("Write something");
    } else {
        document.getElementById("taskList").appendChild(newLi);
    };
    document.getElementById("myInput").value = '';
    
    var span = document.createElement("span");
    var xBtn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(xBtn);
    newLi.appendChild(span);
    
    for (var i = 0; i<close.length; i++){
        close[i].onclick = function(){
            var element = this.parentElement;
            element.style.display = "none";
        };
    };
};