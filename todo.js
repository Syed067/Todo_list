    function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskList = document.getElementById("taskList");
      
      var task = document.createElement("li");
      task.appendChild(document.createTextNode(taskInput.value));
      
      var deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Delete"));
      deleteButton.setAttribute("onclick", "deleteTask(this)");
      
      task.appendChild(deleteButton);
      taskList.appendChild(task);
      
      taskInput.value = "";
    }
    
    function deleteTask(task) {
      var taskItem = task.parentNode;
      var taskList = document.getElementById("taskList");
      
      taskList.removeChild(taskItem);
    }