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
    li.textContent = taskText;               // Set the text content

    // Add click event to remove task when clicked
    li.onclick = function() {
        li.remove();
    };

    taskList.appendChild(li); // Add to the list
    input.value = '';  // Clear input field
    }

