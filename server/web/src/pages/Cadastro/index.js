import React, {useState} from 'react';
import { MyButton } from './../../components/Button';
import {AppBar, Toolbar, Input } from '@material-ui/core';

import { Container, Box, Buttons, Text, Title } from "./styles";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import api from './../../services/api';

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
  const history = useHistory()

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(e){
    e.preventDefault()
    
    const data = {
      nome_usuario:nome,
      email_usuario:email,
      senha_usuario:senha,
    }

    if(nome!==''&&email!==''&&senha!==''){
      const response = await api.post('/api/usuarios', data);

      if(response.status===200){
        history.push('/')
      }
      else{
        alert("Erro ao cadastrar o usuário")
      }
    }else{
        alert('Por favor, preencha todos os campos ')
    }
  }

  return(
    <>
    <AppBar position="static">
      <Toolbar className={classes.root} variant="dense">
        <Title>Descobertas&Comentários</Title>
      </Toolbar>
    </AppBar>
    <Container>
      <form onSubmit={handleSubmit}>
        <Box>
          <Title>Cadastro</Title>
          <Text>Nome</Text>
          <Input 
            required
            id="nome" 
            name="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <Text>E-mail</Text>
          <Input 
            required
            id="email" 
            type="e-mail"
            autoComplete="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Text>Senha</Text>
          <Input 
            id="senha" 
            type="password"
            required
            autoComplete="senha"
            name="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        
        <Buttons>
          <MyButton type="submit" color="blue">Cadastrar</MyButton>
        </Buttons>
        </Box>
      </form>
    </Container>
    </>
  )
}