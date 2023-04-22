function saveCode() {
    var code = document.getElementById("editor").value;
    document.cookie = "code=" + encodeURIComponent(code);
    alert("Code Saved");
}

function runCode() {
    var code = document.getElementById("editor").value;
    var win = window.open('about:blank');
    win.document.write(code);
}


function resetCode() {
    document.getElementById("editor").value = "";
}

function exportCode() {
    var code = document.getElementById("editor").value;
    var filename = prompt("Enter a filename:", "code.html");
    if (filename) {
        var blob = new Blob([code], {
            type: "text/html"
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
}

function getSavedCode() {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)code\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return decodeURIComponent(cookieValue) || "";
}

document.addEventListener("DOMContentLoaded", function() {
    var savedCode = getSavedCode();
    document.getElementById("editor").value = savedCode;
    alert("Code Loaded");
});
