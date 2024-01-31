

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
}
