// Variables for inputs
const artNameInp = document.getElementById('articleName');
const textAreaInp = document.getElementById('article_body');

// Variables for buttons
const getData = document.getElementById(getting);
const postData = document.getElementById(posting);
const putData = document.getElementById(putting);
const deleteData = document.getElementById(deleting);

// GET method
function getFunc() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://httpbin.org/get", true);
    xhr.onload = function() {handleResponse(xhr);};
    xhr.send(null); 
}