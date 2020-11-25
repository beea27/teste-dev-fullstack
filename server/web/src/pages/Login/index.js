import React, {useState} from 'react';
import { MyButton } from './../../components/Button';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import { Input } from '@material-ui/core';
import { Container, Box, Buttons, Text, Title } from "./styles";
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/api';

import {setNomeUsuario, login, setIdUsuario} from './../../services/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    marginRight: theme.spacing(11),
    textDecoration: "none"
  },
  link: {
    textDecoration: "none"
  }
}));

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(e){
    e.preventDefault()
    await api.post('/api/usuarios/login', {email, senha})
    .then(response => {
      if(response.status===200){
        if(response.data.status===1){
          login(response.data.token);
          setIdUsuario(response.data.id_client);
          setNomeUsuario(response.data.user_name);
          
          history.push('/home');
        }else if(response.data.status ===2){
          alert('Atenção: ' +response.data.error);
        }
      }
      else{
        alert('Erro no servidor')
      }
    })
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
          <Title>Login</Title>
          <Text>E-mail</Text>
          <Input 
            id="email" 
            type="e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Text>Senha</Text>
          <Input 
            id="senha" 
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        
        <Buttons>
          <MyButton type="submit" color="blue">Logar</MyButton>
          <Link className={classes.link} to="/cadastro"><MyButton color="blue">Cadastrar</MyButton></Link>
        </Buttons>
        </Box>
      </form>
    </Container>
    </>
  )
}