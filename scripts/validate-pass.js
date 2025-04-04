function encryptData(data) {
    return btoa(data); // For demonstration only, not real encryption.
}

function setUser() {
    let username = localStorage.getItem('userInputValue');
    let greetingElement = document.getElementById('greeting');
    
    if (greetingElement && username) {
        greetingElement.textContent = "Hello, " + username + "!";
    }
}

function getCase() {
    let urlInputValue = getQueryParam("case");

    let caseTitle = document.getElementById("case-title");
    let caseScenario = document.getElementById("case-scenario");
    let prevlink = document.getElementById("prevlink");
    let nextlink = document.getElementById("nextlink");
    let hint = document.getElementById("hint");

    if (urlInputValue === '1') {
        

        if (caseTitle && caseScenario) {
            caseTitle.textContent = "Case #1. Mrs. Amanda's Case";
            caseScenario.textContent = 
                "Mrs. Amanda's son Jeric is living in another state and she would love to connect with him online. " + 
                "One day, Mrs. Amanda visited the Internet Café. She is curious how social media works. " + 
                "She browsed Facebook for her intent to create a new account. Upon seeing the landing page " + 
                "for creating a new account, she was asked to enter her full name, email address, birthday, username, and a password. " + 
                "At last! She successfully created her account. Mrs. Amanda is new to social media and does not have any idea " + 
                "of what a strong password is. Try to crack Mrs. Amanda's PASSWORD.";
            prevlink.hidden = true;
            nextlink.href = "instruction.html?case=" + 2;
        }
    }else if (urlInputValue === '2'){

        if(caseTitle && caseScenario){
            caseTitle.textContent = "Case #2. Alex's Case";
            caseScenario.textContent = 
                "Alex is so fond of posting his interest on social media. He is just 17 years old. He loves to eat a lot, " +
                "listen to music, watch movies, And one of his favorite colors is blue. He also believes that his lucky number Is 9. " +
                "Alex more likely to use something that he can easily remember as his password. He thought that the strongest password " +
                "is six characters. Is it? Try to crack Alex’s password.";
            prevlink.hidden = false;
            prevlink.href = "instruction.html?case=" + 1;
            nextlink.href = "instruction.html?case=" + 3;
        }


    }else if (urlInputValue === '3'){

        if(caseTitle && caseScenario){
            caseTitle.textContent = "Case #3. Ryan and Althea's Case";
            caseScenario.textContent = "Ryan was born on April 13, 2000. He loves to go to school since he was so inspired by " +
                "the presence of his girlfriend Althea. They’ve been together since December 25, 2021. Unfortunately, Ryan broke " +
                "up with her. Althea suspected that Ryan has someone else. She tried to access Ryan’s account and surprisingly, " +
                "Althea has access to his account even though they didn’t share their passwords." +
                "He must have been so in love with Althea. Can you crack Ryan’s password?";
            prevlink.hidden = false;
            prevlink.href = "instruction.html?case=" + 2;
            nextlink.textContent = "Finish";
            nextlink.href = "results.html";
        }
    }
}

function checkPassword(){
    let urlInputValue = getQueryParam("case");
    let passwordInput = document.getElementById("txtpassword");
    let hint = document.getElementById("hint");
    
    if(urlInputValue === '1'){
        let key01 = localStorage.getItem("key01");
        let attempts01 = parseInt(localStorage.getItem('attempts01'));

        if (passwordInput) {
            let userpass = encryptData(passwordInput.value);

            if (key01 === userpass) {
                alert("You have successfully CRACKED the password!");

                window.location.href = "instruction.html?case=" + 2; 

            } else {
                alert("Incorrect password! Please Try Again.");
            }

            attempts01= attempts01 + 1;
            attempts01 = localStorage.setItem('attempts01', attempts01);

        }
    }else if( urlInputValue === '2'){
        let key02 = localStorage.getItem("key02");
        let attempts02 = parseInt(localStorage.getItem('attempts02'));

        if (passwordInput) {
            let userpass = encryptData(passwordInput.value);

            if (key02 === userpass) {
                alert("You have successfully CRACKED the password!");

                window.location.href = "instruction.html?case=" + 3; 

            } else {
                alert("Incorrect password! Please Try Again.");
                hint.textContent = "Contains 6 characters"
            }

            attempts02= attempts02 + 1;
            attempts02 = localStorage.setItem('attempts02', attempts02);

        }
    }else if(urlInputValue === '3'){
        let key03 = localStorage.getItem("key03");
        let attempts03 = parseInt(localStorage.getItem('attempts03'));

        if (passwordInput) {
            let userpass = encryptData(passwordInput.value);

            if (key03 === userpass) {
                alert("You have successfully CRACKED the password!");

                window.location.href = "results.html"; 

            } else {
                alert("Incorrect password! Please Try Again.");
                hint.textContent = "Contains 8 characters (a-z, A-Z, 0-9)"
            }

            attempts03= attempts03 + 1;
            attempts03 = localStorage.setItem('attempts03', attempts03);
        }
    }

}

document.addEventListener("DOMContentLoaded", function() {
    setUser();
    getCase();

    let crackButton = document.getElementById("crackbtn");
    if (crackButton) {
        crackButton.addEventListener("click", function() {
            checkPassword();
        });
    }
});

// Utility function to get query parameters
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("txtpassword").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    event.preventDefault(); // Disable the "Enter" key
}
});

