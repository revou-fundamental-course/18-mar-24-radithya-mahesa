const replaceName = function() {
    let name = prompt("May I know Your name?", "User");
    document.getElementById("name").innerHTML = name;
};
window.onload = replaceName;

function validateForm() {
    var name = document.getElementsByClassName('name-input')[0].value;
    var email = document.getElementsByClassName('email-input')[0].value;
    var selectOption = document.getElementsByClassName('select-input')[0].value;
    
    if (name === '' || email === '' || selectOption === '') {
        alert("Tidak boleh ada kolom yang kosong!");
        document.getElementById('warning-message').style.display = 'block';
        return false;
    }
    
    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Pilihan:', selectOption);
    
    return false;
    
}

