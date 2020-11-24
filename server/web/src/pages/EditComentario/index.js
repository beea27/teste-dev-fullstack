import React, {useState, useEffect} from 'react';
import { Link, useHistory, useParams} from 'react-router-dom';
import { Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { Heading } from './../../components/Heading';
import api from './../../services/api';


import { Container, Box, Buttons, Text, Title } from "./styles";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none"
  },
  input: {
    fontSize: "12px"
  }
}));

export const EditComentario = () => { 
  const history = useHistory();
  const classes = useStyles();
  
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const {idComentario} = useParams();

  useEffect(() => {
    async function getComentario(){
      var response = await api.get('/api/comentarios.details/'+idComentario);
      
      setAssunto(response.data.assunto_comentario);
      setDescricao(response.data.descricao_comentario);
    }

    getComentario();
  }, [])

  async function handleSubmit(e){
    e.preventDefault()
    
    const novoComentario = {
      assunto_comentario : assunto,
      descricao_comentario: descricao,
      _id: idComentario
    }


    const response = await api.put('/api/comentarios', novoComentario);
    console.log(response);

    if(assunto!=='' && descricao!==''){
      console.log(response);

      if(response.status===200){
        history.push('/home')
      }
      else{
        alert("Erro ao atualizar o comentario")
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
          <Title>Editar Comentário</Title>
          <Text htmlFor="assunto">Assunto</Text>
          <Input 
            id="assunto" 
            value={assunto}
            onChange={e => setAssunto(e.target.value)}
            className={classes.input}
          />

          <Text htmlFor="descricao">Descrição</Text>
          <Input 
            id="descricao" 
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            className={classes.input}
          />
        
        <Buttons>
          <MyButton type="submit" color="blue">Salvar</MyButton>
          <Link className={classes.link} to="/home"><MyButton color="red">Cancelar</MyButton></Link>
        </Buttons>
        </Box>
      </form>
    </Container>
    </>
  )
}