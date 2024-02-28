import React from 'react'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles';
import People from './assets/people.svg'
function App() {

  return (
    <Container>
      <Image alt="logo-img" src="{People}"/>
      <ContainerItens>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>

        <Input placeholder='Nome'></Input>
        
        <Input placeholder='Idade'></Input>

        <Button>Cadastrar</Button>
      
      </ContainerItens>
    </Container>
  );
}

export default App  