document.addEventListener('DOMContentLoaded', function() {
    const fancyShmancy = document.getElementById('fancyShmancy');
    const boringBetty = document.getElementById('boringBetty');
    const textArea = document.getElementById('textArea');

    fancyShmancy.addEventListener('click', fancyText);
    boringBetty.addEventListener('click', resetText);
});

function showAlert1() {
    alert('Text Fancified');
}

function showAlert2() {
    alert('Text Normalized');
}

function largerText() {
    textArea.style.fontSize = "2rem";
}

function fancyText() {
    if (fancyShmancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function resetText() {
    if (boringBetty.checked) {
        textArea.style.fontWeight = "normal"
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    textArea.value = textArea.value.toUpperCase();
    let text = textArea.value;
    let sentences = text.split(".");
    newText = sentences.join("-Moo.");

    textArea.value = newText
}