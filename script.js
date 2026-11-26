
const botonColor = document.getElementById('btn-color');


botonColor.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-mode');
   
    if (document.body.classList.contains('dark-mode')) {
        botonColor.textContent = '●'; 
        botonColor.style.borderRadius = '50%';
    } else {
        botonColor.textContent = '▲'; 
        botonColor.style.borderRadius = '0%';
    }
});