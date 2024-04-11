/* Menu déroulant */

function toggleCheckboxes(headerId) {
    const checkboxes = document.getElementById(headerId).parentElement.querySelectorAll('.checkboxes');
    
    for (const checkbox of checkboxes) {
        checkbox.style.display = (checkbox.style.display === 'none' || checkbox.style.display === '') ? 'flex' : 'none';
    }
}

// for (let i = 1; i <= idcompteur - 1; i++) {
//     const header = document.getElementById(i);

//     header.addEventListener('click', () => {
//         toggleCheckboxes(i);
//         console.log('click' + i + idcompteur);
//     });
// }

addEventListener('click', () => {
        toggleCheckboxes(1);
});
  
/* Append parameter */

function updateScanOptions(checkbox) {
    var scanOptionsInput = document.getElementById("myInput");

    if (checkbox.checked) {
        scanOptionsInput.value += " -" + checkbox.id;
        var checkboxesToDelete = document.getElementsByClassName('adelete');
        if (checkboxesToDelete.length > 0) {
            for (var i = 0; i < checkboxesToDelete.length; i++) {
                if (checkboxesToDelete[i].checked){
                    checkboxesToDelete[i].checked = false;
                    scanOptionsInput.value = "nmap 192.168.1.1 -" + checkbox.id;
                }
            }
        }
    } else {
        scanOptionsInput.value = scanOptionsInput.value.replace(" -" + checkbox.id, "");
    }
}


function outcommand(checkbox) {
    var scanOptionsInput = document.getElementById("myInput");

    if (checkbox.checked) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });

        scanOptionsInput.value = checkbox.id;
    } else {
        scanOptionsInput.value = scanOptionsInput.value.replace(checkbox.id, "nmap 192.168.1.1");
    }
}

function nseuseful(checkbox) {
    var scanOptionsInput = document.getElementById("myInput");

    if (checkbox.checked) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });

        scanOptionsInput.value = "nmap 192.168.1.1 -" + checkbox.id;
    } else {
        scanOptionsInput.value = scanOptionsInput.value.replace("nmap 192.168.1.1 -" + checkbox.id, "nmap 192.168.1.1");
    }
}


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

  
  
