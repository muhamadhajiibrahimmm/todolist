function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dateInput = document.getElementById("dateInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter both task and date.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = taskInput.value + " - " + dateInput.value;

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    // Create complete button
    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        // Add your logic for completing a task here
        // You might want to style the completed tasks differently or move them to a separate list
        alert("Task completed: " + listItem.textContent);
    };

    // Create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onchange = function() {
        if (checkBox.checked) {
            // Style the list item when checked (optional)
            listItem.style.textDecoration = "line-through";
        } else {
            // Remove style when unchecked (optional)
            listItem.style.textDecoration = "none";
        }
    };

    // Append elements to the list item
    listItem.appendChild(checkBox);
    listItem.appendChild(document.createTextNode(" ")); // Add space between checkbox and text
    listItem.appendChild(deleteButton);
    listItem.appendChild(document.createTextNode(" ")); // Add space between buttons
    listItem.appendChild(completeButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear input fields
    taskInput.value = "";
    dateInput.value = "";
} 