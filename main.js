function getvalue() {
  let inputtask = document.getElementById("task"); //getting the  element
  let inputtaskvalue = inputtask.value; //turning it into value
  console.log(inputtaskvalue);

  if (inputtaskvalue != "") {
    let list_obeject = add_Items(inputtask);
    complete_task(list_obeject);
    remove_task(list_obeject, true);
  }
}

function add_Items(task_value) {
  let list_container = document.getElementById("incomplete");
  let create_input_element = document.createElement("input");
  create_input_element.type = "checkbox";
  let create_list_element = document.createElement("li");
  let create_button_elemnt = document.createElement("button");
  let create_p_elemnt = document.createElement("p");

  create_p_elemnt.textContent = task_value.value;
  create_button_elemnt.textContent = "X";

  create_list_element.append(create_input_element);
  create_list_element.append(create_p_elemnt);
  create_list_element.append(create_button_elemnt);
  list_container.appendChild(create_list_element);

  task_value.value = "";
  return {
    p: create_p_elemnt,
    b: create_button_elemnt,
    l: create_list_element,
    c: list_container,
    i: create_input_element,
  };
}
function complete_task(list_object) {
  list_object.i.addEventListener("change", function () {
    let completed_task = document.getElementById("done");
    let completed_list = list_object.l;
    if (this.checked) {
      completed_task.appendChild(completed_list);
    } else {
      list_object.c.appendChild(completed_list);
    }
  });
}
function remove_task(list_object, completed_task) {
  list_object.b.onclick = function () {
    if (completed_task) {
      list_object.l.remove();
    } else {
      list_object.c.removeChild(list_object.l);
    }
  };
}
