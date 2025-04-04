function encryptData(data) {
    return btoa(data); // Base64 encoding (for demonstration purposes, use a stronger encryption method in production)
}

function decryptData(encryptedData) {
    return atob(encryptedData);
}

function loginUser(){
    let inputValue = document.getElementById('txtusername').value;
    let attempts01 = localStorage.setItem('attempts01', 0);
    let attempts02 = localStorage.setItem('attempts02', 0);
    let attempts03 = localStorage.setItem('attempts03', 0);
    let key01 = encryptData("PASSWORD");
    let key02 = encryptData("blue09");
    let key03 = encryptData("Althea25");
    localStorage.setItem("userInputValue", inputValue);
    localStorage.setItem("key01", key01);
    localStorage.setItem("key02", key02);
    localStorage.setItem("key03", key03);

    window.location.href = "instruction.html?case=" + 1; //Replace with your desired URL
}

document.getElementById("setupbtn").addEventListener("click", function() {

    loginUser();

});

document.getElementById("txtusername").addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        loginUser();
    }
    
});
