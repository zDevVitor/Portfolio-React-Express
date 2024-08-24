import React from 'react';
import { Container, Typography } from '@mui/material';
import './styles/styles.css'; 
import CustomCard from './components/Cards';

function App() 
{
  return (
    <Container>
      <Typography>
      </Typography>
    </Container>
  );
}

const textElement = document.getElementById('text');
const texts = ["Software Engineering Student", "I like learning all programming languages"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  const speed = isDeleting ? 50 : 100; // Velocidade

  if (isDeleting) {
    // Apagando texto
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
  setTimeout(type, speed);


  return (
    <Container>
      <div id="text-container">
        <span id="text">Este é o texto estilizado.</span>
        <span id="cursor">|</span>
      </div>
      <CustomCard
        title="Example Title"
        description="This is an example description of the card."
        code="const example = 'example';"
      />
    </Container>
  );
}


type();
export default App;