const darkButton =document.getElementById('dark');
const lightButton =document.getElementById('light');
const body =document.querySelector('body');
const radioButtons=document.querySelectorAll(".toggle__wrapper input");

const setDarkMode = () =>{
    body.classList.add('dark');
    body.classList.remove('light');
    darkButton.checked = true;
    localStorage.setItem("colorMode","dark");
}
const setLightMode = () =>{
    body.classList.add('light');
    body.classList.remove('dark');
    lightButton.checked = true;
    localStorage.setItem("colorMode","light");
}

const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
  };


  const colorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? 'dark'
                : 'light' // If preference is set or does not match anything (light is default)
  };
  
  const loadAndUpdateColor = () => {
    // local storage has precendence over the prefers-color-scheme
    const color = colorModeFromLocalStorage() || colorModeFromPreferences();
    color === 'dark' ?  setDarkMode() : setLightMode();
  };

const toggleButton =(button) =>{
    button.addEventListener('click', () => {
        darkButton.checked ? setDarkMode() : setLightMode();
      });
}

radioButtons.forEach(toggleButton);

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ?  setDarkMode() : setLightMode();
      });
      
// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();