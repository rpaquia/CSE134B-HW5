class ButtonCount extends HTMLElement {
    constructor() {
        // Must call super() first in constructor
        super();
        // Attach Shadow DOM to web component to protect its scope
        const shadow = this.attachShadow({mode:'open'});
        
        shadow.innerHTML = `
            <button type='button' id='counter' onclick='Increment()'
            <script>
                function Increment() {
                    let count = 0;
                    let btn = document.getElementById('counter');
                    
                    btn.onclick = function () {
                        count++;
                        button.innerHTML = 'Times Clicker' + count;
                    }
                }
            </script>
        
        `
        
    }
}
// Define ButtonCLicker class in custom elements registry so I may use it
customElements.define('button-count', ButtonCount);