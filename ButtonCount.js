// Set up counter
let count = 0;
class ButtonCount extends HTMLElement {
    constructor() {
        // Must call super() first in constructor
        super();
        // Attach Shadow DOM to web component to protect its scope
        const shadow = this.attachShadow({mode:'open'});
        
        // Create button
        const button = document.createElement('button');
        button.textContent = "Times Clicked";

        button.addEventListener('click', () => {
            count = count + 1;
            button.textContent = "Times Clicked:" + "$(count)";
        });
        shadow.appendChild(button);
    }
}
// Define ButtonCLicker class in custom elements registry so I may use it
customElements.define('button-count', ButtonCount);