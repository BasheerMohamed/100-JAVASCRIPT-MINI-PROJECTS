const generateBtn = document.getElementById('generate');
const textinput = document.getElementById('text');
const qr = document.getElementById('qr');

generateBtn.addEventListener('click', () => {
    if(textinput.value == '') {
        alert("please type text or paste url")
    }
    else {
        qr.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textinput.value}`;
        qr.style.display = 'block';
    }
});