import React, {useContext} from 'react';
import { Card } from '@material-ui/core';
import { MyButton } from './../Button';
import { Link } from 'react-router-dom';

import { GlobalContextDescoberta } from './../../context/GlobalStateDescobertas';

import { Container, Box, Title, Text, Buttons} from "./styles";

export const Descobertas = () => {
  const { descobertas, removerDescoberta } = useContext(GlobalContextDescoberta);
  
  return (
    <>
      <div style={{margin: "10px"}}>
        <Title>Descobertas</Title>
        <Container>
          {descobertas.length > 0 ? (
            <>
              {descobertas.map(descoberta => (
                <Card style={{margin: "20px"}} key={descoberta.id}>
                  <Box>
                    <Title>{descoberta.descoberta}</Title>
                    <Text>{descoberta.data}</Text>
                    <Text>{descoberta.horario}</Text>
                    <Text>{descoberta.descricao}</Text>

                    <Buttons>
                      <Link to={`/editar-descoberta/${descoberta.id}`}>
                        <MyButton type="submit" color="blue">Editar</MyButton>
                      </Link>            
                      <MyButton onClick={() => removerDescoberta(descoberta.id)} color="red">Excluir</MyButton>
                    </Buttons>
                  </Box>
                </Card>
              )
            )}
            </>
          ) : (
            <Text>Lista de descobertas vazia :(</Text>
          )}
        </Container>
      </div>
    </>
  );
}