

const input = document.getElementsByClassName("input")[0];
const textDisplay = document.getElementsByClassName("text-display")[0];
const textParagraph = textDisplay.getElementsByTagName("p")[0];
const initialText = textParagraph.textContent;

var inputtedChars = ""; // NOT used right now
input.oninput = (event) => {
    console.log(event); 
    if (event.data != null) {
        inputtedChars += event.data;

        let character = textParagraph.textContent[0];
        let colorClass = "green";
        if (event.data != character) {
            colorClass = "red";
        }

        let charSpan = document.createElement("span");
        charSpan.textContent = character;
        charSpan.classList.add(colorClass);
        charSpan.classList.add("universal-font");

        textParagraph.textContent = textParagraph.textContent.slice(1); // remove first char 
        textDisplay.insertBefore(charSpan, textParagraph);
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
}
