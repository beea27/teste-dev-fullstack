import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';
import {v4 as uuid} from 'uuid';
import { Heading } from './../../components/Heading';


import { Container, Box, Buttons, Text, Title } from "./styles";

export const AddComentario = () => {   
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const { adicionarComentario } = useContext(GlobalContextComentarios);
  const history = useHistory();

  const onSubmit = () => {
    const newComentario = {
      id: uuid(),
      assunto,
      descricao
    }
    adicionarComentario(newComentario);
    history.push('/home');
  }

  const onChangeAssunto = (e) => {
    setAssunto(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  return(
    <>
    <Heading/>
    <Container>
      <form onSubmit={onSubmit}>
        <Box>
          <Title>Novo Comentário</Title>
          <Text htmlFor="assunto">Assunto</Text>
          <Input 
            id="assunto" 
            value={assunto}
            onChange={onChangeAssunto}
          />

          <Text htmlFor="descricao">Descrição</Text>
          <Input 
            id="descricao" 
            value={descricao}
            onChange={onChangeDescricao}
          />
        
        <Buttons>
          <MyButton type="submit" color="blue">Salvar</MyButton>
          <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
        </Buttons>
        </Box>
      </form>
    </Container>
    </>
  )
}