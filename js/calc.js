
// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  switch(clickedButtonValue) {
    case '=':
        if (display.value !== '') {
            display.value = eval(display.value);
            }
        break;
    case 'C':
        display.value = '';
        break;
    default:
        display.value += clickedButtonValue;
  }
}

