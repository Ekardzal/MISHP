		function download(){
		var text = document.getElementById("notes1").value;
		text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
		var blob = new Blob([text], { type: "text/plain"});
		var anchor = document.createElement("a");
		anchor.download = "MyNotes.txt";
		anchor.href = window.URL.createObjectURL(blob);
		anchor.target ="_blank";
		anchor.style.display = "none"; // just to be safe!
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
		}
