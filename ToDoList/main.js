var inputField = document.getElementById('task');
var button = document.getElementById('button1').addEventListener('click',function(){
    var value = inputField.value
    if(value){
    addItemToToDo(value);
    inputField.value='';
    }
})

function removeItem(){
    var item = this.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function completed(){
    var list = document.getElementById('completed'); 
    var task = document.createElement('li');
    task.classList = 'element';

    task.innerText = this.parentNode.innerText;
    console.log(task.innerText);
    
    var deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'button');
    deleteButton.addEventListener('click', removeItem);
    deleteButton.classList = 'deleteButton';

    task.appendChild(deleteButton);
    list.appendChild(task);

    var item = this.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function addItemToToDo(item){
    var list = document.getElementById('toDo');

    var task = document.createElement('li');
    task.innerText = item;
    task.classList = 'element';

    
    var deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'button');
    deleteButton.addEventListener('click',removeItem);
    deleteButton.classList = 'deleteButton';
    
    var completeButton = document.createElement('input');
    completeButton.setAttribute('type','button');
    completeButton.addEventListener('click',completed);
    completeButton.classList='completeButton';

    task.appendChild(completeButton);
    task.appendChild(deleteButton);
    list.appendChild(task);
}