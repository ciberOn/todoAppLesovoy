const input = document.querySelector("#todo-input")

const dataItems = [
    {Title:"Go to gym", paragraph: "20 push ups, 10 pull ups, 12 minutes cardio"},
    {Title:"Do homework", paragraph: "do math, cry, do music practice, cry"},
    {Title:"Get smth", paragraph: "get 5 kb from your teacher"},
    {Title:"Cry if you are tired", paragraph: "Wellcome to the club body"},
    {Title:"You must do all your work", paragraph: "Go to the school"},
    {Title:"Go to gym", paragraph: "2 push ups, 1 pull ups, 2 minutes cardio"},
]

document.querySelector("#btn_sumbit").addEventListener('click', () =>{
    const inputData = input.value
    input.value = ""
    console.log(inputData)
    const todo_el = document.createElement('div')
    todo_el.classList.add('todo-items')

    const todo_content_el = document.createElement('div')
    todo_el.appendChild(todo_content_el)

    const todo_input_el = document.createElement('input')
    todo_input_el.classList.add('text')
    todo_input_el.type = 'text'
    todo_input_el.value = inputData?inputData: dataItems[Math.floor(Math.random()*dataItems.length)].Title
    todo_input_el.setAttribute('readonly', 'readonly')

    todo_content_el.appendChild(todo_input_el)

    const todo_action_el = document.createElement('div')
    todo_action_el.classList.add('action-items')


    const todo_done_el = document.createElement('i')
    todo_done_el.classList.add('fa-solid')
    todo_done_el.classList.add('fa-check')

    const todo_edit_el = document.createElement('i')
    todo_edit_el.classList.add('fa-solid')
    todo_edit_el.classList.add('fa-pen-to-square')
    todo_edit_el.classList.add('edit')

    const todo_delete_el = document.createElement('i')
    todo_delete_el.classList.add('fa-solid')
    todo_delete_el.classList.add('fa-trash')

    todo_action_el.appendChild(todo_done_el)
    todo_action_el.appendChild(todo_edit_el)
    todo_action_el.appendChild(todo_delete_el)

    todo_el.appendChild(todo_action_el)
    console.log(todo_el)
    document.querySelector("#todo_lists").appendChild(todo_el)
})