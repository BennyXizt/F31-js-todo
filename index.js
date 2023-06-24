

document.addEventListener("DOMContentLoaded", () => {
  const todo = new Todo()

  document.querySelector("button[class='add']").addEventListener("click", () => {
    const inp = document.querySelector("input")
    const result = document.querySelector(".list")

    if(inp.value.trim() == "")
      return

    todo.addTodo(inp.value)

    let html = ""
    todo.todo.forEach(e => {
      let style = ""

      if(e.checked == true)
        style = "text-decoration: line-through"

      html += 
      `<div class="list__item" style='${style}'>
        <button class="list__item_remove-${e.id}">X</button>
        <div class="list__item_text">${e.text}</div>
      </div>`
    })
    result.innerHTML = html
  })
  $(document).on("click", "button[class^='list__item_remove']", function() {
    todo.removeTodo($(this).parent().find(".list__item_text").text())
    const result = document.querySelector(".list")

    let html = ""
    todo.todo.forEach(e => {
      let style = ""

      if(e.checked == true)
        style = "text-decoration: line-through"
        
      html += 
        `<div class="list__item" style='${style}'>
          <button class="list__item_remove-${e.id}">X</button>
          <div class="list__item_text">${e.text}</div>
        </div>`
    })
    result.innerHTML = html
  })
 
})

class Todo {
  todo = []
  addTodo(text) {
    const isExist = this.todo.map(e => e.text).indexOf(text)

    if(isExist != -1)
    {
      alert(`ToDo: '${text}' alrealy exists`)
      return
    }
      

    this.todo.push({
      id: this.todo.length == 0 ? 0 : this.todo[this.todo.length - 1].id + 1,
      text,
      checked: false
    })
  }
  removeTodo(value) {
    this.todo.map(e => {
      if(e.text == value)
         return e.checked = !e.checked
    })
  }
}