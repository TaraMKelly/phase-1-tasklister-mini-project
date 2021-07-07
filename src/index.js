
  document.querySelector("#create-task-form").addEventListener("submit", e => {
    e.preventDefault()
    const ul = document.querySelector("ul#tasks")
    let li = document.createElement("li")
    ul.append(li)
    newItem = e.target["new-task-description"].value
    console.log(newItem)
    li = newItem
    return ul.append(newItem)
  })


