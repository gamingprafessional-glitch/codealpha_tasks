const result = document.getElementById("Output");
window.addEventListener('keydown', (event) => {
    
    if (event.key === '1') {
        result.value += '1'
    }
    if (event.key === '2') {
        result.value += '2'
    }
    if (event.key === '3') {
        result.value += '3'
    }
    if (event.key === '4') {
        result.value += '4'
    }
    if (event.key === '5') {
        result.value += '5'
    }
    if (event.key === '6') {
        result.value += '6'
    }
    if (event.key === '7') {
        result.value += '7'
    }
    if (event.key === '8') {
        result.value += '8'
    }
    if (event.key === '9') {
        result.value += '9'
    }
    if (event.key === '0') {
        result.value += '0'
    }
    if (event.key === '+') {
        result.value += '+'
    }
    if (event.key === '-') {
        result.value += '-'
    }
    if (event.key === '*') {
        result.value += '*'
    }
    if (event.key === '/') {
        result.value += '/'
    }
    if (event.key === '=') {
        result.value += '='
    }
    if (event.key === 'Backspace') {
        clearDisplay()
    }
    if (event.key === 'Enter') {
        calculateResult()
    }
});
function display(input) {
    result.value += input;
}

function clearDisplay() {
    result.value = "";
}

function calculateResult(input) {
    result.value = eval(result.value);
}
