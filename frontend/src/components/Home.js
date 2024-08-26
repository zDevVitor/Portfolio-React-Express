import React, { useEffect } from 'react';
import '../styles/styles.css';

export default function Home() 
{

    useEffect(() => {        
        // Atualiza a fonte do logo
        const logoUrl = 'https://i.imgur.com/bQfMAkP.png';
        const logoElement = document.getElementById('logo');

        if (logoElement) {
            logoElement.src = logoUrl;
        } else {
            console.error('Elemento com id "logo" não encontrado.');
        }

        // Função para manipulação de texto
        const textElement = document.getElementById('text');
        const texts = ["Software Engineering Student", "I like learning all programming languages"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const TextManipulation = () => {
            const currentText = texts[textIndex];
            const speed = isDeleting ? 50 : 100; // Velocidade

            if (isDeleting) {
                // Apaga texto
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length; // Passa para o próximo texto
                }
            } else {
                // Escrevendo texto
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentText.length) {
                    isDeleting = true;
                }
            }

            // Chama a função a cada N milissegundos de forma assincrona
            setTimeout(TextManipulation, speed);
        };

        TextManipulation(); // Inicia a manipulação de texto

    }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez, após o componente ser montado.

    return (
        <div className="container">
            <div className="static-content">
                <img id="logo" src="logo.png" alt="Logo" />
                <div id="text-container">
                    <span id="text"></span>
                    <span id="cursor">|</span>
                </div>

                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                        <i className="material-icons">facebook</i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                        <i className="material-icons">favorite</i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                        <i className="material-icons">favorite</i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                        <i className="material-icons">favorite</i>
                    </a>
                </div>
            </div>
        </div>
    );
}
