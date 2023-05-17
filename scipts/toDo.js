let arr = [];

if (localStorage.getItem("lists") != null && localStorage.getItem("lists") != "") {

  arr = JSON.parse(localStorage.getItem("lists"));
  myPopulate();

}








function myFunction() {
  let firstWork = document.getElementById("input");
  if (firstWork.value == null || firstWork.value == "") {
    document.getElementById("warn").innerHTML = "please enter work";
  }
  else {

    console.log(firstWork.value);
    arr.push(firstWork.value);
    // document.getElementById("input").innerHTML = "";
    localStorage.setItem("lists", JSON.stringify(arr));
    // for (let i = 0; i < localStorage.length; i++) {
    //   const para = document.createElement("li");
    //   para.innerHTML = JSON.parse(localStorage.key(i));
    //   document.getElementById("Items").appendChild(para);
    // }
    arr = JSON.parse(localStorage.getItem("lists"));
    document.getElementById("Items").innerHTML = "";
    firstWork.value = "";
    myPopulate();



  }
}

// let firatval = firstWork.value;
// localStorage.setItem("firstwork", firatval);
// laaet value = localStorage.getItem("firstwork");
// let work1 = document.getElementById("addItems");
// work1.innerHTML = value;



function myPopulate() {

  for (let j = 0; j < arr.length; j++) {

    const task = document.createElement("li");

    // para.textContent = arr[i];
    task.classList.add("list");
    task.id = `task_${j}`;
    document.getElementById("Items").appendChild(task);
    const taskDes = document.createElement('p')
    taskDes.id = `taskDes_${j}`
    taskDes.innerHTML = arr[j]
    taskDes.classList.add("task-des")
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.id = `delete_${j}`
    deleteButton.classList.add("task-delete")
    task.appendChild(taskDes)
    task.appendChild(deleteButton)
    deleteButton.addEventListener('click', (e, j) => deleteFunc(e, j));
  }
}
function deleteFunc(e, j) {
  let taskid = e.target.id;
  console.log(taskid);
  let buttonid = `task_${taskid.split("_")[1]}`;
  let buttonItem = document.getElementById(buttonid);
  if (buttonItem) {
    buttonItem.remove();
  }
  arr.splice(j, 1);
  localStorage.setItem("lists", JSON.stringify(arr));

}
  // const ul = document.querySelectorAll('ul li');




