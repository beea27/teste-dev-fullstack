import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';
import {v4 as uuid} from 'uuid';
import { Heading } from './../../components/Heading';
import api from './../../services/api';


import { Container, Box, Buttons, Text, Title } from "./styles";

export const AddComentario = () => {   
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const { adicionarComentario } = useContext(GlobalContextComentarios);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    const novoComentario = JSON.stringify({
      id: uuid(),
      assunto,
      descricao
    })
    // history.push('/home')
    // adicionarComentario(novoComentario);

    if(assunto!==''&&descricao!==''){
      const response = await api.post('/api/comentarios', novoComentario);

      if(response.status===200){
        adicionarComentario(novoComentario);
        history.push('/home')
      }
      else{
        alert("Erro ao cadastrar um novo comentario")
      }
    }else{
        alert('Por favor, preencha todos os campos ')
    }
  }

  return(
    <>
    <Heading/>
    <Container>
      <form onSubmit={handleSubmit}>
        <Box>
          <Title>Novo Comentário</Title>
          <Text htmlFor="assunto">Assunto</Text>
          <Input 
            id="assunto" 
            value={assunto}
            onChange={e => setAssunto(e.target.value)}
          />

          <Text htmlFor="descricao">Descrição</Text>
          <Input 
            id="descricao" 
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        
        <Buttons>
          <MyButton type="submit" color="blue">Salvar</MyButton>
          <Link to="/home"><MyButton color="red">Cancelar</MyButton></Link>
        </Buttons>
        </Box>
      </form>
    </Container>
    </>
  )
}