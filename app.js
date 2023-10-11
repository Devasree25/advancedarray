var inputData = document.getElementById('input');

var addButton = document.getElementById('button');

var todoList = document.getElementById('todolist');

var data = [];

addButton.addEventListener("click",addData);

function addData(){
    data.push(inputData.value)
    console.log(data)
    data.value=""
    showData()

};


function showData(){
    
    todoList.innerHTML=""
    data.forEach(function(item,index){
        todoList.innerHTML+=`<li>${item}<a onclick="editItem(${index})">Edit</a><a onclick="deleteItem(${index})">X |</a></li>`
    })
};

function deleteItem(i){
    data.splice(i,1)
    showData()
};

function editItem(index){
    var newValue = prompt("enter the value")
    data.splice(index,1,newValue)
    showData()

};
    
