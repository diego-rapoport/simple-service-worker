import './style.css'
import {setupButton} from './js/setup.js'

/**
 * @var {string} URL - backend url
 */
let URL
document.querySelector('#app').innerHTML = `
  <div>
    <h3>Test a fetch</h3>
    <button id="button-fetch">HERE</button>
    <p id="message"></p>
  </div>
`

if ('serviceWorker' in navigator) {
  const scope = location.pathname.replace(/\/[^\/]+$/, '/');
  navigator.serviceWorker.register('sw.js', { scope, type: 'module' })
    .then(function(reg) {
      reg.addEventListener('updatefound', function() {
        const installingWorker = reg.installing;
        console.log('A new service worker is being installed:',
          installingWorker);
      });
      // registration worked
      URL = reg.scope
      console.log('REG = ', reg)
      setupButton(URL)
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}
