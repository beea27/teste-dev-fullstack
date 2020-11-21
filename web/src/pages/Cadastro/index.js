import React from 'react';
import { MyButton } from './../../components/Button';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Input } from '@material-ui/core';

import { Container, Box, Buttons, Text, Title } from "./styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    marginRight: theme.spacing(11),
    textDecoration: "none"
  },
}));
export const Cadastro = () => {
  const classes = useStyles();

  return(
    <>
    <AppBar position="static">
      <Toolbar className={classes.root} variant="dense">
        <Title>Descobertas&Comentários</Title>
      </Toolbar>
    </AppBar>
    <Container>
      <form>
        <Box>
          <Title>Cadastro</Title>
          <Text htmlFor="assunto">E-mail</Text>
          <Input 
            id="assunto" 
            type="e-mail"
            // value={assunto}
            // onChange={onChangeAssunto}
          />

          <Text htmlFor="descricao">Senha</Text>
          <Input 
            id="descricao" 
            type="password"
            // value={descricao}
            // onChange={onChangeDescricao}
          />
        
        <Buttons>
          <Link to="/"><MyButton color="blue">Cadastrar</MyButton></Link>
        </Buttons>
        </Box>
      </form>
    </Container>
    </>
  )
}