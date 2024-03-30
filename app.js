// GEt Elements 
let levelSpan = document.querySelector(".message .level");
let secondsSpan = document.querySelector(".message .seconds");
let startButton = document.querySelector(".start");
let theWord = document.querySelector(".word");
let input = document.querySelector(".input");
let upcomingWord = document.querySelector(".upcoming-word");
let timeLeftSpan = document.querySelector(".controal .time span");
let scoreGet = document.querySelector(".controal .score .get");
let scoreTotal = document.querySelector(".controal .score .total");
let finish = document.querySelector(".finish");



// Create Array Of Random Word 
const words = [
    "figure"
    , "album"
    , "exposure"
    , "surprise"
    , "gain"
    , "ladder"
    , "movement"
    , "primary"
    , "inspector"
    , "disappoint"
    , "absorption"
    , "install"
    , "main"
    , "tile"
    , "locate"
    , "quest"
    , "method"
    , "pattern"
    , "stage"
    , "solve"
    , "dealer"
    , "story"
    , "ride"
    , "firefighter"
    , "even"
    , "range"
    , "tournament"
    , "affair"
    , "fate"
    , "shortage"
    , "inquiry"
    , "clinic"
    , "recognize"
    , "evoke"
    , "perforate"
    , "ban"
    , "union"
    , "exception"
    , "conscious"
    , "achievement"
    , "mosaic"
    , "dead"
    , "case"
    , "ignorance"
    , "spoil"
    , "mixture"
    , "cottage"
    , "accent"
    , "quantity"
    , "white"
];

// Setting Levels
const levels = {
    "easy": 6,
    "normal": 4,
    "hard": 2,
};

// Default Level
let defaultLevel = "normal";
let levelDefaultTime = levels[defaultLevel];

// select Default Is Normal
levelSpan.value = defaultLevel;
// Add The Time of Default Level 
secondsSpan.innerHTML = levelDefaultTime;

// Add The Time Left of Default Level 
timeLeftSpan.innerHTML = levelDefaultTime;

// Add The Total Of Words Array 
scoreTotal.innerHTML = words.length;

// Disable On Past Event 
input.onpaste = function () {
    return false;
};


// Start Button OnClick
startButton.onclick = function () {
    // remove the Start Button 
    startButton.remove();

    // Add Foucs Event on Input 
    input.focus();


    // Generate Word Function 
    genWords();

};

// Select Box of Level Choose
levelSpan.onclick = function () {
    if (levelSpan.value === "easy") {
        // Add The Time of Level Easy
        secondsSpan.innerHTML = levels.easy;

        // Add the Time Left Of Level Easy
        timeLeftSpan.innerHTML = levels.easy;
    } else if (levelSpan.value === "normal") {
        // Add The Time of Level Normal
        secondsSpan.innerHTML = levels.normal;

        // Add the Time Left Of Level Normal
        timeLeftSpan.innerHTML = levels.normal;
    } else if (levelSpan.value === "hard") {
        // Add The Time of Level Hard
        secondsSpan.innerHTML = levels.hard;

        // Add the Time Left Of Level Hard
        timeLeftSpan.innerHTML = levels.hard;
    }
};


// Word Function 
function genWords() {

    // get Random Word From Array 
    let random = words[Math.floor(Math.random() * words.length)];

    // Get Word Index And remove From Array 
    words.splice(words.indexOf(random), 1);

    // Add the Random Word to THe Word Element 
    theWord.innerHTML = random;

    // Empty Upcoming Words
    upcomingWord.innerHTML = "";


    // Generate Words in Upcoming Word Element
    for (let i = 0; i < words.length; i++) {
        // create Main Div
        let mainDiv = document.createElement("div");

        // Create Main Div Text Node 
        let mainDivText = document.createTextNode(words[i]);

        // Add Text in Main Div 
        mainDiv.appendChild(mainDivText);

        // Add Main Div in Upcoming WORD ELEMENT 
        upcomingWord.appendChild(mainDiv);
    };

    // Call Start Play Funcion 
    startPlay();
};


// Start Play Funcion 
function startPlay() {
    // Reset Time Left Span 
    timeLeftSpan.innerHTML = levels[levelSpan.value];

    // create SetInterval CowntDown
    let timeDown = setInterval(() => {
        timeLeftSpan.innerHTML--;

        if (timeLeftSpan.innerHTML === "0") {
            clearInterval(timeDown);

            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                // Cleare Input Value
                input.value = "";

                // Increase The Write Answer 
                scoreGet.innerHTML++;

                // Call Generate Words Function 
                if (words.length > 0) {
                    genWords();
                } else {

                    // Call The Good Function
                    createGood();

                };

            } else {

                // Call Create Else Function 
                creatBad();

            }
        }

    }, 1000);
};

// Create THE GOOD Function
function createGood() {
    // remove Upcoming Section 
    upcomingWord.remove();

    // Cleare Focus From Input 
    input.blur();

    // Add Class Active
    finish.classList.add("active");

    // create Game Over Span Element
    let span = document.createElement("span");
    span.className = "good";

    // create Game Over Span Text Node Element
    let spanText = document.createTextNode("Congratulations");

    // Add spanText in Span 
    span.appendChild(spanText);

    // Add Span in Finish ELement
    finish.appendChild(span);

    // Create Reload Button 
    let reloadButton = document.createElement("button");
    reloadButton.className = "reload";

    // Create Text Node tO Button 
    let reloadButtonText = document.createTextNode("New Game");

    // Add Text To Button
    reloadButton.appendChild(reloadButtonText);

    // Add Button To Finish Element 
    finish.appendChild(reloadButton);

    // Reload Button When Click 
    reloadButton.onclick = function () {
        // Windo Reload
        location.reload();
    };
};


//  Create THE BAD Function 
function creatBad() {
    // remove Upcoming Section 
    upcomingWord.remove();

    // Cleare Focus From Input 
    input.blur();

    // Add Class Active
    finish.classList.add("active");

    // create Game Over Span Element
    let span = document.createElement("span");
    span.className = "bad";

    // create Game Over Span Text Node Element
    let spanText = document.createTextNode("Game Over");

    // Add spanText in Span 
    span.appendChild(spanText);

    // Add Span in Finish ELement
    finish.appendChild(span);

    // Create Reload Button 
    let reloadButton = document.createElement("button");
    reloadButton.className = "reload";

    // Create Text Node tO Button 
    let reloadButtonText = document.createTextNode("New Game");

    // Add Text To Button
    reloadButton.appendChild(reloadButtonText);

    // Add Button To Finish Element 
    finish.appendChild(reloadButton);

    // Reload Button When Click 
    reloadButton.onclick = function () {
        // Windo Reload
        location.reload();
    };
};