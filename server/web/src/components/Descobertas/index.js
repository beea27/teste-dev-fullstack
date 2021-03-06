import React, {useState, useEffect} from 'react';
import { Card } from '@material-ui/core';
import { MyButton } from './../Button';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Box, Title, TextData, TextDescricao, Buttons} from "./styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  link: {
    textDecoration: "none"
  }
}));

export const Descobertas = () => {
  const classes = useStyles();
  const history = useHistory();
  const [descobertas, setDescobertas] = useState([]);

  useEffect(() => {
    async function loadComentarios(){
      const response = await api.get("/api/descobertas");
      setDescobertas(response.data);
    }
    loadComentarios();
  },[]);

  async function handleDelete(id){
    if(window.confirm("Dseja mesmo excluir?")){
      const result = await api.delete('/api/descobertas/'+id);
      if(result.status === 200){
        history.push('/home');
        setDescobertas(result.data)
      }
      else{
        alert('Ocorreu um erro. Tente novamente');
      }
    }
  }

  return (
    <>
      <div style={{margin: "10px"}}>
        <Title>Descobertas</Title>
        <Container>
          {descobertas.length > 0 ? (
            <>
              {descobertas.map(descoberta => (
                <Card style={{margin: "20px"}} key={descoberta._id}>
                  <Box>
                    <Title>{descoberta.nome_descoberta}</Title>
                    <TextData>Data: {descoberta.data_descoberta}</TextData>
                    <TextData>Horário: {descoberta.horario_descoberta}</TextData>
                    <TextDescricao>{descoberta.descricao_descoberta}</TextDescricao>

                    <Buttons>
                      <Link className={classes.link} to={`/editar-descoberta/${descoberta._id}`}>
                        <MyButton type="submit" color="blue">Editar</MyButton>
                      </Link>            
                      <MyButton onClick={() => handleDelete(descoberta._id)} color="red">Excluir</MyButton>
                    </Buttons>
                  </Box>
                </Card>
              )
            )}
            </>
          ) : (
            <TextDescricao>Lista de descobertas vazia :(</TextDescricao>
          )}
        </Container>
      </div>
    </>
  );
}