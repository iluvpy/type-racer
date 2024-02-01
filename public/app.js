

const textArea = document.getElementsByClassName("input")[0];
const textDisplay = document.getElementsByClassName("text-display")[0];
const textParagraph = textDisplay.getElementsByTagName("p")[0];
const initialText = textParagraph.textContent;

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

var inputtedChars = ""; // NOT used right now
textArea.oninput = (event) => {
    console.log(event); 
    if (event.data != null) {
        
        let currentChar = textParagraph.textContent[0];
        let colorClass = "green";
        if (event.data != currentChar) {
            colorClass = "red";
        }

        let charSpan = document.createElement("span");
        charSpan.textContent = currentChar;
        charSpan.classList.add(colorClass);
        charSpan.classList.add("universal-font");

        textParagraph.textContent = textParagraph.textContent.slice(1); // remove first char 
        textDisplay.insertBefore(charSpan, textParagraph);

        // update input value to avoid two characters on top of eachother
        textArea.value = setCharAt(textArea.value, textArea.value.length - 1, currentChar);
    }
    else if (event.inputType == "deleteContentBackward") {
        console.log("deleting!!!!");
        let spans = textDisplay.getElementsByTagName("span");
        console.log(spans);
        if (spans.length) {
            let lastSpan = spans[spans.length - 1];
            let char = lastSpan.textContent;
            textParagraph.textContent = char + textParagraph.textContent; 
            lastSpan.remove();
        }

    }

    // move text cursor the end of the text in input
    setTimeout(() => { textArea.selectionStart = textArea.selectionEnd = 10000; }, 0);
    event.preventDefault();
}
