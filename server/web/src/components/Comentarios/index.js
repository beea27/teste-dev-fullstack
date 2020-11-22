import React, {useContext} from 'react';
import { Card } from '@material-ui/core';
import { MyButton } from './../Button';
import { Link } from 'react-router-dom';

import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';

import { Container, Box, Title, Text, Buttons } from "./styles";

export const Comentarios = () => {
  const { comentarios, removerComentario } = useContext(GlobalContextComentarios);
  
  return (
    <>
      <div style={{margin: "10px"}}>
        <Title>Comentários</Title>
        
        <Container>
          {comentarios.length > 0 ? (
            <>
              {comentarios.map(comentario => (
                <Card style={{margin: "20px"}} key={comentario.id}>
                  <Box>
                    <Title>{comentario.assunto}</Title>
                    <Text>{comentario.descricao}</Text>

                    <Buttons>
                      <Link to={`/editar-comentario/${comentario.id}`}>
                        <MyButton type="submit" color="blue">Editar</MyButton>
                      </Link>            
                      <MyButton onClick={() => removerComentario(comentario.id)} color="red">Excluir</MyButton>
                    </Buttons>
                  </Box>
                </Card>
              )
            )}
            </>
          ) : (
            <Text>Lista de comentários vazia :(</Text>
          )}
        </Container>
      </div>
    </>
  );
}