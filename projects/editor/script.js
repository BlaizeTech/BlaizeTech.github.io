		function run() {
			var htmlCode = document.getElementById("html-editor").value;
			var outputWindow = window.open();
			outputWindow.document.write(htmlCode);
			outputWindow.document.close();
		}

		function clearEditor() {
			document.getElementById("html-editor").value = "";
		}

		function handleFileSelect() {
			var htmlCode = document.getElementById("html-editor").value;
			var blob = new Blob([htmlCode], {type: "text/html"});
			var downloadLink = document.createElement("a");
			var fileName = prompt("Enter a file name:", "index.html");
			if (fileName !== null) {
				downloadLink.href = URL.createObjectURL(blob);
				downloadLink.download = fileName;
				downloadLink.click();
			}
		}
