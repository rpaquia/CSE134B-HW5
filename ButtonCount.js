class ButtonCount extends HTMLElement {
    constructor() {
        // Must call super() first in constructor
        super();
        // Attach Shadow DOM to web component to protect its scope
        const shadow = this.attachShadow({mode:'open'});
        
        // Create button
        const button = document.createElement('button');
        // Set button's attributes
        button.innerHTML = 'Click to increment'
        button.setAttribute('type', 'button');
        document.querySelector('body').appendChild(button);


    }
}





// Define ButtonCLicker class in custom elements registry so I may use it
customElements.define('button-count', ButtonCount);