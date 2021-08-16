document.getElementById('input-email').addEventListener('keyup', function(e) {
    if (e.target.value.includes('.com')) {
        document.getElementById('send-btn').style.cursor = 'pointer';
    } else {
        document.getElementById('send-btn').style.cursor = 'not-allowed';
    }
});