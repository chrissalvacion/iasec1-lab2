function setUser() {
    let username = localStorage.getItem('userInputValue');
    let greetingElement = document.getElementById('greeting');
    
    if (greetingElement && username) {
        greetingElement.textContent = "Hello, " + username + "!";
    }
}

function getResults(){

    let attempt01 = document.getElementById('attempt01');
    let attempt02 = document.getElementById('attempt02');
    let attempt03 = document.getElementById('attempt03');

    let attempts01 = localStorage.getItem("attempts01");
    let attempts02 = localStorage.getItem("attempts02");
    let attempts03 = localStorage.getItem("attempts03");

    attempt01.textContent = attempts01;
    attempt02.textContent = attempts02;
    attempt03.textContent = attempts03;

}

setUser();
getResults();