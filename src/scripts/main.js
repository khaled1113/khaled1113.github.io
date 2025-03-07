// This file contains the JavaScript code for the website. 
// It handles interactivity, such as event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = 'Button clicked! Welcome to my simple website!';
    });
});