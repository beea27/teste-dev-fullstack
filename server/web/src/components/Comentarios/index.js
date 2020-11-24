import React, {useState, useEffect} from 'react';
import { Card } from '@material-ui/core';
import { MyButton } from './../Button';
import { Link, useHistory } from 'react-router-dom';

import { Container, Box, Title, Text, Buttons } from "./styles";
import api from '../../services/api';

export const Comentarios = () => {
  const history = useHistory();
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    async function loadComentarios(){
      const response = await api.get("/api/comentarios");
      setComentarios(response.data);
    }
    loadComentarios();
  },[]);

  async function handleDelete(id){
    if(window.confirm("Tem certeza?")){
      const result = await api.delete('/api/comentarios/'+id);
      if(result.status === 200){
        history.push('/home');
      }
      else{
        alert('Ocorreu um erro. Tente novamente');
      }
    }
  }

  return (
    <>
      <div style={{margin: "10px"}}>
        <Title>Comentários</Title>
        
        <Container>
          {comentarios.length > 0 ? (
            <>
              {comentarios.map(comentario => (
                <Card style={{margin: "20px"}} key={comentario._id}>
                  <Box>
                    <Title>{comentario.assunto_comentario}</Title>
                    <Text>{comentario.descricao_comentario}</Text>

                    <Buttons>
                      <Link to={`/editar-comentario/${comentario._id}`}>
                        <MyButton type="submit" color="blue">Editar</MyButton>
                      </Link>            
                      <MyButton onClick={() => handleDelete(comentario._id)} color="red">Excluir</MyButton>
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