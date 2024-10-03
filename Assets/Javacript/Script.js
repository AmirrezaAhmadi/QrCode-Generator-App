document.getElementById('generate-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    document.getElementById('qrcode').innerHTML = "";

    var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 128,
        height: 128
    });

    document.getElementById('input-container').style.display = 'none';
    
    document.getElementById('try-again-btn').style.display = 'block';

    document.getElementById('qrcode').style.display = 'flex';
});

document.getElementById('try-again-btn').addEventListener('click', function() {
    document.getElementById('qrcode').innerHTML = "";

    document.getElementById('input-container').style.display = 'block';
    
    document.getElementById('try-again-btn').style.display = 'none';

    document.getElementById('qrcode').style.display = 'none';

    document.getElementById('text-input').value = "";
});
