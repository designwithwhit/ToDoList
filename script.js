var task1 = {
  assignto: "emily",
  difficulty: "hard",
  description: "Look at doggy videos"
};

var taskList = {
  tasks: [task1]
};

function drawList() {
  //this function build a task list and prints to HTML
  //select #list-container element from HTML
  var listCont = document.getElementById("list-container");
  //clear out existing content
  // listCont.innerHTML = "";
  //create <ul> node
  var list = document.createElement("ul");
  // var inputs = document.querySelectorAll('input');
  for (var i = 0; i < taskList.tasks.length; i++) {
    //variable to hold difficulty option
    var d = document.getElementById("difficulty");
    //create an <li> node
    var item = document.createElement("li");
    var item2 = document.createElement("li");
    var item3 = document.createElement("li");
    //add input to the li
    item.innerHTML = document.querySelector('input[name="assignto"]:checked').value;
    item2.innerHTML = d.options[d.selectedIndex].value;
    item3.innerHTML = "<b>Task:</b> " + taskList.tasks[i].description;
  }
     //append li to ul
    list.appendChild(item).setAttribute("class", "person");
    list.appendChild(item2).setAttribute("class", "task-diff");
    list.appendChild(item3).setAttribute("class", "task-descrip");
  //append the ul to #list-container
  listCont.appendChild(list);
}

function listBuilder() {
  event.preventDefault();
  var form = document.querySelector("form");
  //create a new object called newTask with form values
  var newTask = { description: form.description.value };
  //insert newTask (object) into taskList
  taskList.tasks.push(newTask);
  //trigger the list
  drawList();
}

window.onload = function() {
  drawList();
  //select form, attach listBuilder as onSubit handler
  var form = document.querySelector("form");
  form.onSubmit = listBuilder;
};

