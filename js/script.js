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

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    indexSlide += n;
    showSlide(indexSlide);
    console.log('indexSlide' + indexSlide);
    console.log('nilai n =' + n);
}


function showSlide(n) {
    let listImage = document.getElementsByClassName('left-content-img');
    if (n > listImage.length) indexSlide = 1;
    if (n < 1) indexSlide = listImage.length;

    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = 'none';
    }

    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 5000)
