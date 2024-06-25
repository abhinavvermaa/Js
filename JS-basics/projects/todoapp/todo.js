let todoList = [{item:'buy milk', dueDate: '4/10/2023'}
    ,{item:  'go to college' , dueDate: '4/10/2023'}
];

displayItems();
function addtodo(){
    let inputelement = document.querySelector('#todo-input');
    let dateelement = document.querySelector('#todo-date');
    let todoItem = inputelement.value;
    let todoDate = dateelement.value;
    todoList.push({item: todoItem , dueDate: todoDate});
    inputelement.value = '';
    dateelement.value = '';
    displayItems();
}

function displayItems(){
    let containerelement = document.querySelector('.todo-container');

    let newHtml = '';

    for(let i=0;i<todoList.length;i++){
        
        let {item,dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class = 'btn-delete' onclick = "todoList.splice(${i},1);displayItems()">delete</button>
        `;

    }
    containerelement.innerHTML = newHtml;

}