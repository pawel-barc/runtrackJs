document.addEventListener("keydown", function(event) {
    if (event.key.match(/[a-z]/i) && document.activeElement !== document.getElementById("keylogger")) {
        let textareaContent = document.getElementById("keylogger").value;
        textareaContent += event.key;
        document.getElementById("keylogger").value = textareaContent;
    } else if (event.key.match(/[a-z]/i) && document.activeElement === document.getElementById("keylogger")) {
       let key = event.key;
       document.getElementById("keylogger").value += key;
    }
});