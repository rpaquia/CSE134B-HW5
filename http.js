// Variables for inputs
const artNameInp = document.getElementById('articleName');
const textAreaInp = document.getElementById('article_body');

// Variables for buttons
const 
const
const
const

// GET method
function getFunc() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://httpbin.org/get", true);
    xhr.onload = function() {handleResponse(xhr);};
    xhr.send(null); 
}