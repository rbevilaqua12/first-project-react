import React, { useState, useRef } from 'react';
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from './styles';
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg';
import Trash from './assets/trash.svg';
import axios from 'axios';
function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const {data: newUser } = await axios.post("http://localhost:3001/users",
     { name: inputName.current.value, 
      age: inputAge.current.value, });
      console.log(newUser)

    setUsers([ ...users, newUser]);  
  };

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  };
  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome'></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade'></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow} /></Button>

        <ul>
          {users.map(user => (
            <User key={user.id}><p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt='lata-de-lixo' src={Trash} /></button>
            </User>
          ))

          };

        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;