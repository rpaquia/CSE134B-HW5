
const artNameInp = document.getElementById('articleName');
const 

// GET method
function getFunc() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://httpbin.org/post", true);
    xhr.onload = function() {handleResponse(xhr);};
    xhr.send(null); 
}