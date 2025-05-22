const greetingTexts = ["Hello, World!", "<h1>Hello, World!</h1>"]; 
const developerTexts = ["I want to be a Full-Stack dev", "I want to be a Web developer"]; 
let greetingIndex = 0; 
let developerIndex = 0; 
let charIndexGreeting = 0; 
let charIndexDeveloper = 0; 
let typingSpeed = 100; 
let erasingSpeed = 50; 
let delayBetweenTexts = 1500;

function typeGreetingText() {
    let greetingElement = document.getElementById("greeting");
    let currentGreetingText = greetingTexts[greetingIndex];

    if (charIndexGreeting < currentGreetingText.length) {
        greetingElement.textContent = currentGreetingText.substring(0, charIndexGreeting + 1);
        charIndexGreeting++;
        setTimeout(typeGreetingText, typingSpeed);
    } else {
        setTimeout(eraseGreetingText, delayBetweenTexts);
    }
}

function eraseGreetingText() {
    let greetingElement = document.getElementById("greeting");
    let currentGreetingText = greetingTexts[greetingIndex];

    if (charIndexGreeting > 0) {
        greetingElement.innerText = currentGreetingText.substring(0, charIndexGreeting - 1);
        charIndexGreeting--;
        setTimeout(eraseGreetingText, erasingSpeed);
    } else {
        greetingIndex = (greetingIndex + 1) % greetingTexts.length;
        setTimeout(typeGreetingText, typingSpeed);
    }
}

function typeDeveloperText() {
    let developerElement = document.getElementById("developer");
    let currentDeveloperText = developerTexts[developerIndex];

    if (charIndexDeveloper < currentDeveloperText.length) {
        developerElement.innerText = currentDeveloperText.substring(0, charIndexDeveloper + 1);
        charIndexDeveloper++;
        setTimeout(typeDeveloperText, typingSpeed);
    } else {
        setTimeout(eraseDeveloperText, delayBetweenTexts);
    }
}

function eraseDeveloperText() {
    let developerElement = document.getElementById("developer");
    let currentDeveloperText = developerTexts[developerIndex];

    if (charIndexDeveloper > 0) {
        developerElement.innerText = currentDeveloperText.substring(0, charIndexDeveloper - 1);
        charIndexDeveloper--;
        setTimeout(eraseDeveloperText, erasingSpeed);
    } else {
        developerIndex = (developerIndex + 1) % developerTexts.length;
        setTimeout(typeDeveloperText, typingSpeed);
    }
}


setTimeout(typeGreetingText, 10);
setTimeout(typeDeveloperText, 10);



