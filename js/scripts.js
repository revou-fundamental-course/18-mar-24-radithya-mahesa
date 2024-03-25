window.onload = function replaceName(){
    let name = prompt("May I know Your name?", "User")
    document.getElementById("name").innerHTML = name
}

replaceName();