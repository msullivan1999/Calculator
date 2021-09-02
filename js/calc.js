
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
  var flag = 0;

  switch(clickedButtonValue) {
    case '=':
        if (display.value !== '') {
            display.value = eval(display.value);
            }
        flag = 1;
        break;
    case 'C':
        display.value = '';
        flag = 0;
        break;
    default:
      if(flag !== 1) {
        display.value += clickedButtonValue;
      }
  }
}

// add more logic to improve functionality

