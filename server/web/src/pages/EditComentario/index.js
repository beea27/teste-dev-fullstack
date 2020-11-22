import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';

import { Heading } from './../../components/Heading';

import { Container, Box, Buttons, Text, Title } from "./styles";

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

  const onSubmit = () => {
    editarComentario(comentarioSelecionado)
    history.push('/');
  }

  const onChange = (e) => {
    setComentarioSelecionado({...comentarioSelecionado, [e.target.name]: e.target.value})
  }

  return(
    <>
      <Heading/>
      <Container>
        <form onSubmit={onSubmit}>
          <Box>
            <Title>Editar Comentário</Title>
            <Text htmlFor="assunto">Assunto</Text>
            <Input 
              id="assunto" 
              name="assunto"
              value={comentarioSelecionado.assunto}
              onChange={onChange}
            />

            <Text htmlFor="descricao">Descrição</Text>
            <Input 
              id="descricao"
              name="descricao"
              value={comentarioSelecionado.descricao}
              onChange={onChange}
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