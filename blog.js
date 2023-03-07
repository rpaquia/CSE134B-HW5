
let items = JSON.parse(localStorage.getItem("blog-list")) || [];

// Code for opening dialog box
const screenAddBtn = document.getElementById('addBtn');
const addDialogPopup = document.getElementById('addDiagBox');
const output = document.getElementById('out');

const saveButton = document.getElementById('saveBut');


screenAddBtn.addEventListener('click', () => {
    addDialogPopup.showModal(); 
});
//addDialogPopup.addEventListener('close', () => {
  //  listItems();
//});

saveButton.addEventListener('click', addItem);

// Function that adds items to blog 
function addItem() { // Works
    // gets value that is put inside <input> with querySelector
    let inputTitleBox = document.getElementById('nameInput');
    let inputSumBox = document.getElementById('sumInput');

    // Need the title,summary
    let titleItem = inputTitleBox.value;
    let summaryItem = inputSumBox.value;

    // If either input is empty return and alert user
    if(titleItem === "") {
        return alert("Please enter Title");
    }
    if(summaryItem === "") {
        return alert("Please enter Summary");
    }

    // If inputs are valid, add them to array
    items.push({
        value: titleItem,
        summary: summaryItem,
        time: new Date().toLocaleDateString("en-US"),
    });

    // convert to a string with JSON.stringify and save to localStorage
    localStorage.setItem("blog-list", JSON.stringify(items));

    // Call function to list all blog items
    listItems();

    //clear all input boxes
    inputTitleBox.value = "";
    inputSumBox.value = "";
}

// function for removing items, then saving updated array
// to local storage
function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem("blog-list", JSON.stringify(items));
    listItems();
  }
  /*
  function markAsDone(index) {
    items[index].done = !items[index].done;
    localStorage.setItem("blog-list", JSON.stringify(items));
    listItems();
  }
  */

// function that creates the blog items and populates html page
function listItems() {
    let list = "";
    for (let i = 0; i < items.length; i++) {
      // list += "<li class=" + (items[i].done ? "done" : "") + ">";
      // list += items[i].value + " ";
      // list +=
      //   "<small title='click me to mark as done' class='label' onclick='markAsDone(" +
      //   i +
      //   ")'>" +
      //   items[i].time +
      //   "</small> ";
      // list +=
      //   "<span class='label alert' onclick='deleteItem(" +
      //   i +
      //   ")'>delete</span></li>";
      list += `<li>${items[i].value}
      ${items[i].summary}
      ${items[i].time}
      <button onclick = "deleteItem(${i})">Delete</button>
      </li>`
    }
    document.querySelector("#blog-items").innerHTML = list;
  }
  
  // function to run when page loads
  (function () {
    listItems();
  })();
  

