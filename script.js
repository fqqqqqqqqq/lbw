   document.getElementById('addTaskButton').addEventListener('click', function() {
       const taskInput = document.getElementById('taskInput');
       const taskValue = taskInput.value;

       if (taskValue) {
           const li = document.createElement('li');
           li.textContent = taskValue;
           document.getElementById('taskList').appendChild(li);
           taskInput.value = '';
       }
   });
