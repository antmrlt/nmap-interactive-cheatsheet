
/* Copy clipboard */

function Copy() {
    var copyText = document.getElementById("myInput");
    var message = document.getElementById("copy");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);

    message.style.display = "block";

    setTimeout(function() {
        message.style.display = "none";
    }, 3000);
}

/* Reset */

function Reset() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    var scanOptionsInput = document.getElementById("myInput");
    scanOptionsInput.value = "nmap 192.168.1.1";
}