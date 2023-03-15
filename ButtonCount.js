// Set up counter
function Increment() {
    let count = 0;
    let btn = document.getElementById('counter');
            
    btn.onclick = function () {
        
        count = count + 1;
        btn.innerHTML = 'Times Clicked: ' + count;
        }
    }
class ButtonCount extends HTMLElement {
    constructor() {
        // Must call super() first in constructor
        super();
        // Attach Shadow DOM to web component to protect its scope
        const shadow = this.attachShadow({mode:'open'});
        
        // Create button
        const button = document.createElement('button');
        
        // Set button's attributes
        button.innerHTML = 'Times Clicked: 0'
        button.setAttribute('type', 'button'); // type='button'
        button.setAttribute('id', 'counter'); // id='counter
        button.setAttribute('onclick', 'Increment()') // onclick='Increment()'
        
        //document.querySelector('body').appendChild(button);
        shadow.appendChild(button);
    }
}
// Define ButtonCLicker class in custom elements registry so I may use it
customElements.define('button-count', ButtonCount);