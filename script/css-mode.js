// Check if the browser supports matchMedia
if (window.matchMedia) {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const selectCssFile = (darkModeEnabled) => {
      const linkElement = document.getElementById('custom-css');
      if (darkModeEnabled) {
        linkElement.href = 'css/dark-mode.css';
      } else {
        linkElement.href = 'css/light-mode.css';
      }
    };
  
    selectCssFile(darkModeMediaQuery.matches);

    const updateSvg = (darkModeEnabled) => {
        const copyButton = document.getElementById('copyButton');
        const resetButton = document.getE
        lementById('resetButton');

        if (darkModeEnabled) {
            copyButton.src = 'svg/white-copy.svg';
            resetButton.src = 'svg/white-reset.svg';
        } else {
            copyButton.src = 'svg/copy.svg';
            resetButton.src = 'svg/reset.svg';
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
          updateSvg(darkModeMediaQuery.matches);
    });
    
    darkModeMediaQuery.addListener(e => {
      selectCssFile(e.matches);
      updateSvg(e.matches);
    });
  } else {
    console.log("Browser does not support matchMedia");
  }
  