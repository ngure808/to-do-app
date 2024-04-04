document.addEventListener("DOMContentLoaded", () => {
    const baseURL = "http://localhost:3000/todos"
    
    let toDoList = document.getElementById("unorder")
    let toDoForm = document.querySelector("form")


    toDoForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newToDo = toDoForm.querySelector("#newtodo").value
        addToDo(newToDo)
    })

    fetch(baseURL)
     .then(response => response.json())
     .then(todos =>
        // todos.forEach(todo => addToDo(todo.title))

        todos.map(todo => addToDo(todo.title))
        
    //      {
    //     for (let i = 0; i <= todos.length; i++){
    //         addToDo(todos[i].title)
    //     }
    //  }
     )
    
 

    function  addToDo(value) {
        let li = document.createElement("li")
        li.innerHTML = value
        toDoList.appendChild(li)
    }
})
