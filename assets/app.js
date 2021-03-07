/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import generateHeader from './js/generate-header';

// start the Stimulus application
import './bootstrap';

// just for test (use different files
const h1 = document.createElement('h1');
h1.innerHTML = generateHeader('Name');
document.getElementById('pagesIndex').appendChild(h1)
