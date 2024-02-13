
const CURSOR_AT_START = 0; // text cursor is at the first letter of a word
const CURSOR_IN_CENTER = 1; // text cursor is in the center of a word
const CURSOR_AT_END = 1; // text cursor is at the end of a word

const words = document.getElementsByClassName("word");
words[0].name = CURSOR_AT_START;

var cursorPos = 0; // index of cursor

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

function moveCursorForward() {
    cursorPos++;
}

function moveCursorBackwards() {
    if (cursorPos == 0) return;
    cursorPos--;
    
}

window.onkeydown = (event) => {
    console.log(event);
    Array.prototype.forEach.call(words, word => {
        console.log(word);
    });
    if (event.key != null) {
        const typeEvent = event.key.length == 1;
        if (typeEvent) {moveCursorForward();}
    }

} 