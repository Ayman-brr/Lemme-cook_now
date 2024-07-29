function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let current = document.getElementById('display').innerText;
    document.getElementById('display').innerText = current.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
