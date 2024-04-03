document.addEventListener("DOMContentLoaded", () => {
    let toDoList = document.getElementById("unorder")
    let toDoForm = document.querySelector("form")


    toDoForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newToDo = toDoForm.querySelector("#newtodo").value
        addToDo(newToDo)
    })

    fetch("https://jsonplaceholder.typicode.com/todos")
     .then(response => response.json())
     .then(data =>{
        for (let i = 0; i <= data.length; i++){
            addToDo(data[i].title)
        }
     } )
    
 

    function  addToDo(value) {
        let li = document.createElement("li")
        li.innerHTML = value
        toDoList.appendChild(li)
    }
 

// addToDo("Testing")
})
