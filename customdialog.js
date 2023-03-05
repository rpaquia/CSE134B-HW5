//------------Custom Alert------------
const screenAlert = document.getElementById('alertButton');
const dialogBox = document.getElementById('alertDialog');

screenAlert.addEventListener('click', () => {
    dialogBox.showModal();
});

//------------Custom Confirm------------
const screenConfirm = document.getElementById('btn2');
const dialogConfBox = document.getElementById('confirmDialog');
const outputVal = document.getElementById('out');

screenConfirm.addEventListener('click', () => {
    dialogConfBox.showModal();
});
dialogConfBox.addEventListener('close', () => {
    outputVal.value = `ReturnValue: ${dialogConfBox.returnValue}.`;
});

//------------Custom Prompt------------
const screenPrompt = document.getElementById('promptBtn');
const dialogPrBox = document.getElementById('promptDialog');
const outputName = document.getElementById('outName'); //For holding the inputted name
const typedName = document.querySelector('#nameInput'); //Takes in the user's typed name
screenPrompt.addEventListener('click', () => {
    // Shows the dialog box
    dialogPrBox.showModal();
});

dialogPrBox.addEventListener('close', () => {
    outputName.value = typedName.value;
});

