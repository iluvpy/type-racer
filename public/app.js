

const textArea = document.getElementsByClassName("input")[0];
const textDisplay = document.getElementsByClassName("text-display")[0];
const textParagraph = textDisplay.getElementsByTagName("p")[0];
const initialText = textParagraph.textContent;
const textCursor = document.getElementsByClassName("text-cursor")[0];

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

var inputtedChars = ""; // NOT used right now
textArea.oninput = (event) => {
    if (event.data != null) {
        
        let currentChar = textParagraph.textContent[0];
        let colorClass = "green";
        if (event.data != currentChar) { // typo/misspell 
            colorClass = "red";
        }


        let charSpan = document.createElement("span");
        charSpan.textContent = currentChar;
        charSpan.classList.add(colorClass);
        charSpan.classList.add("default-font");

        textParagraph.textContent = textParagraph.textContent.slice(1); // remove first char 
        textDisplay.insertBefore(charSpan, textParagraph);

        textArea.value = setCharAt(textArea.value, textArea.value.length - 1, currentChar);
    }
    else if (event.inputType == "deleteContentBackward") { // delete last last
        let spans = textDisplay.getElementsByTagName("span"); 
        if (spans.length > 0) {
            let lastSpan = spans[spans.length - 1];
            let char = lastSpan.textContent;
            textParagraph.textContent = char + textParagraph.textContent; 
            lastSpan.remove();
        }

    }

    // move text cursor the end of the text input
    setTimeout(() => { textArea.selectionStart = textArea.selectionEnd = 10000; }, 0);
    event.preventDefault();

}
