document.addEventListener('DOMContentLoaded', () => 
{
    const logoUrl = 'https://i.imgur.com/bQfMAkP.png';
    const logoElement = document.getElementById('logo');

    if (logoElement) {
        logoElement.src = logoUrl;
    } else {
        console.error('Elemento com id "logo" não encontrado.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const fullText = 'Este é o texto estilizado.';
    let index = 0;
    
    function type() {
      if (index < fullText.length) {
        textElement.textContent += fullText[index];
        index++;
        setTimeout(type, 100); 
      }
    }
  
    type();
  });