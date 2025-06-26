// Step 1: Get reference to input and task list
const input = document.getElementById('taskInput');  
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = input.value.trim(); // Get input text
        
    if (taskText === ''){
        alert('Please enter a task.');
        return;
        } 
    
    const li = document.createElement('li'); // Create a list item
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove(); // Remove the task when button is clicked
    };

    li.appendChild(span); // Add text to the list item
    li.appendChild(deleteBtn); // Add delete button to the list item

    taskList.appendChild(li); // Add to the list
    input.value = '';  // Clear input field
    }

