const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let title = prompt("Add Todo Title")
  let link = document.createElement("a")
  let item = document.createElement("li")
  link.append(item)
  item.innerHTML = title
  link.onclick = (event) => {
    console.log(event.target.innerHTML)
    for (let i = 0; i < list.childNodes.length; i++)
    {
        if (list.childNodes[i].childNodes[0].innerHTML === event.target.innerHTML)
        {
          list.removeChild(list.childNodes[i])
        }
    }
  }
  list.append(link)
  console.log(list)
}
