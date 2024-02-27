

const words = document.getElementsByClassName("word");

var cursorWordPos = 0; // index of cursor
var cursorLetterPos = 0;

function removeCharAtIndex(index, str) {
    return str.substring(0, index) + str.substring(index + 1, str.length);
}

function splitString(index, str) {
    return [str.substring(0, index), str.substring(index + 1, str.length)];
}

function removeCursor() {
    let spanWithCursor = words[cursorWordPos];
    spanWithCursor.innerHTML = spanWithCursor.textContent;
}

function updateCursor() {
    let spanWithCursor = words[cursorWordPos];
    let letterWithCursor = spanWithCursor.textContent[cursorLetterPos];
    let splitText = splitString(cursorLetterPos, spanWithCursor.textContent);
    spanWithCursor.textContent = removeCharAtIndex(cursorLetterPos, spanWithCursor.textContent);


    let spanWithLetter = document.createElement("span");
    spanWithLetter.textContent = letterWithCursor;
    spanWithLetter.classList.add("text-cursor");
    spanWithLetter.classList.add("untyped");
    spanWithLetter.classList.add("default-font");

    let textBeforeCursor = splitText[0];
    let textAfterCursor = splitText[1];
    console.log(textBeforeCursor);
    console.log(textAfterCursor);
    let node1 = document.createTextNode(textBeforeCursor);
    let node2 = document.createTextNode(textAfterCursor);

    spanWithCursor.innerHTML = "";
    spanWithCursor.appendChild(node1);
    spanWithCursor.appendChild(spanWithLetter);
    spanWithCursor.appendChild(node2);
}

updateCursor();

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

function moveCursorForward() {
    removeCursor();
    let wordLength = words[cursorWordPos].textContent.length;
    if (cursorLetterPos + 1 >= wordLength && cursorWordPos + 1 < words.length) {
        cursorLetterPos = 0;
        cursorWordPos++;
    }
    else if (cursorLetterPos + 1 < wordLength) {cursorLetterPos++;}
    updateCursor();
}

function moveCursorBackwards() {
    removeCursor();
    if (cursorLetterPos - 1 <= 0 && cursorWordPos != 0) {
        cursorWordPos--;
        let wordLength = words[cursorWordPos].textContent.length;
        cursorLetterPos = wordLength - 1;
    } else if (cursorLetterPos > 0) {
        cursorLetterPos--;
    }
    updateCursor();
}

window.onkeydown = (event) => {
    console.log(event);
    if (event.key != null) {
        const typeEvent = event.key.length == 1;
        if (typeEvent) {moveCursorForward();}
        else if (event.key == "ArrowLeft") {moveCursorBackwards();}
        else if (event.key == "ArrowRight") {moveCursorForward();}
    }

} 