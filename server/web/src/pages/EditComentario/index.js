import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';

import { Heading } from './../../components/Heading';

import { Container, Box, Buttons, Text, Title } from "./styles";

import api from './../../services/api';

export const EditComentario = (props) => {

  const {comentarios, editarComentario} = useContext(GlobalContextComentarios);
  const [comentarioSelecionado, setComentarioSelecionado] = useState({
    id: '',
    assunto: '',
    descricao:''
  });

  const history = useHistory();  

  useEffect(() => {
    const comentarioId = props.match.params.id;
    const comentarioSelecionado = comentarios.find(comentario => comentario.id === comentarioId);
    setComentarioSelecionado(comentarioSelecionado)
  }, [props, comentarios]);

  async function handleSubmit(e) {
    e.preventDefault();
    editarComentario(comentarioSelecionado)
    history.push('/home');

    // if(comentarioSelecionado.assunto!==''&&comentarioSelecionado.descricao!==''){
    //   const response = await api.post('/api/comentarios');

    //   if(response.status===200){
    //     editarComentario(comentarioSelecionado)
    //     history.push('/home')
    //   }
    //   else{
    //     alert("Erro ao cadastrar um novo comentario")
    //   }
    // }else{
    //     alert('Por favor, preencha todos os campos ')
    // }
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
              name="assunto"
              value={comentarioSelecionado.assunto}
              onChange={e => setComentarioSelecionado({...comentarioSelecionado, [e.target.name]: e.target.value})}
            />

            <Text htmlFor="descricao">Descrição</Text>
            <Input 
              id="descricao"
              name="descricao"
              value={comentarioSelecionado.descricao}
              onChange={e => setComentarioSelecionado({...comentarioSelecionado, [e.target.name]: e.target.value})}
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