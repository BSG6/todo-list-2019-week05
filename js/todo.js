
//user can enter text and click a button
//add an event Listener calls addToList()
    document.querySelector('#putOnMyList').addEventListener('click', addToMyList);
// call to cross off each individual item
//document.querySelector('#list').addEventListener('click', crossOff);

// this stops the new tasks from vanishing
    document.getElementById('taskList').addEventListener('submit',function(event) {
    event.preventDefault();
})

//generate new li for each new task
// use append to add li 
// a displayed list of all item inputs 

    

// function addToList
    function addToMyList() {
        // get text from input
        let newTask = document.getElementById('input').value;
        console.log(newTask)
        let orderedList = document.querySelector('#list');
        let itemsListli = document.createElement('li');
        itemsListli.textContent = newTask;       
        // this an li element to the Ol it will generate a new one each time a task is created
        orderedList.appendChild(itemsListli);
        //clears input after task has been added
        document.getElementById('input').value = "";
    }

// let li = document.createElement("li");
// OL.append(list,li);
 //document.querySelector('.listItem').innerText = inputToDo


// clear input
// delete entire list 
    document.querySelector('.deleteList').addEventListener('click', eraseList)
        function eraseList() {
            let orderedList = document.querySelector('#list');

            orderedList.innerHTML = "";
            alert("You deleted all tasks! 🗑️")
        }
    // cross off item as a checklist
// function crossOff(){
//     let listSS = event.target
//     listSS.classList.toggle('crossOff')
// }





// what can they do
    // put to do items in an input 
    // click sumbit button
    //html UL
        //delete or trash button
        //task completed
    


    document.querySelector('#putOnMyList').addEventListener('click', addOnToDoList)
        let taskOne = document.querySelector('#input').value

        function addOnToDoList() {

            console.log(taskOne)
        }