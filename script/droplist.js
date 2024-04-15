/* Menu déroulant */

function toggleCheckboxes(headerId) {
    const checkboxes = document.getElementById(headerId).parentElement.querySelectorAll('.checkboxes');
    
    for (const checkbox of checkboxes) {
        checkbox.style.display = (checkbox.style.display === 'none' || checkbox.style.display === '') ? 'flex' : 'none';
    }
}
