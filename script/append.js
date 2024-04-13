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