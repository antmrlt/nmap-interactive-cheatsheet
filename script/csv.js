// Define the parseCSV function
function parseCSV(str) {
  const arr = [];
  let quote = false;  // 'true' means we're inside a quoted field

  // Iterate over each character, keep track of current row and column (of the returned array)
  for (let row = 0, col = 0, c = 0; c < str.length; c++) {
      let cc = str[c], nc = str[c+1];        // Current character, next character
      arr[row] = arr[row] || [];             // Create a new row if necessary
      arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary

      // If the current character is a quotation mark, and we're inside a
      // quoted field, and the next character is also a quotation mark,
      // add a quotation mark to the current column and skip the next character
      if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

      // If it's just one quotation mark, begin/end quoted field
      if (cc == '"') { quote = !quote; continue; }

      // If it's a comma and we're not in a quoted field, move on to the next column
      if (cc == ',' && !quote) { ++col; continue; }

      // If it's a newline (CRLF) and we're not in a quoted field, skip the next character
      // and move on to the next row and move to column 0 of that new row
      if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

      // If it's a newline (LF or CR) and we're not in a quoted field,
      // move on to the next row and move to column 0 of that new row
      if (cc == '\n' && !quote) { ++row; col = 0; continue; }
      if (cc == '\r' && !quote) { ++row; col = 0; continue; }

      // Otherwise, append the current character to the current column
      arr[row][col] += cc;
  }
  return arr;
}

let memory = null;
let idcompteur = 1;

fetch('data.csv')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(csvData => {
    // Parse the CSV data
    const parsedCSV = parseCSV(csvData);

    // Clear previous content
    document.getElementsByClassName('checkboxes-container')[0].innerHTML = '';

    let scanTechniquesContainer; // Declare scanTechniquesContainer outside the loop

    for (let i = 1; i < parsedCSV.length; i++) {

      if (memory !== parsedCSV[i][0]){
        scanTechniquesContainer = document.createElement('div');
        scanTechniquesContainer.className = 'scanTechniques';

        const techniqueHeader = document.createElement('h1');
        techniqueHeader.textContent = parsedCSV[i][0];
        techniqueHeader.id = idcompteur;
        scanTechniquesContainer.appendChild(techniqueHeader);

        idcompteur += 1;
      }

      const checkboxDiv = document.createElement('div');
      if (parsedCSV[i][0] != memory) {
        checkboxDiv.className = 'checkboxes mtop10';
        checkboxDiv.style = 'display:none';
        memory = parsedCSV[i][0];
      } else {
        checkboxDiv.className = 'checkboxes';
        checkboxDiv.style = 'display:none';
      }

      const label = document.createElement('label');
      label.setAttribute('for', parsedCSV[i][2]);
      label.textContent = parsedCSV[i][1];

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = parsedCSV[i][2];
      checkbox.onchange = function() {
        updateScanOptions(this);
      };

      checkboxDiv.appendChild(label);
      checkboxDiv.appendChild(checkbox);
      scanTechniquesContainer.appendChild(checkboxDiv);

      // Append the last scanTechniquesContainer if it exists
      if (scanTechniquesContainer) {
        document.getElementsByClassName('checkboxes-container')[0].appendChild(scanTechniquesContainer);
      }
    }
    
  })
  .catch(error => {
    console.error('There was a problem fetching the CSV file:', error);
  });

