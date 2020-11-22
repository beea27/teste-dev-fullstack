import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContextDescoberta } from './../../context/GlobalStateDescobertas';
import {v4 as uuid} from 'uuid';
import px2vw from "../../utils/px2vw";

import { Input, TextField} from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { Heading } from './../../components/Heading';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Box, Buttons, Text, Title } from "./styles";

import api from './../../services/api';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(80),
    marginTop: theme.spacing(15),
    padding: theme.spacing(15),
    minWidth: 120,
    display:"inline-block",
    justifyContent: "center",
    border: "solid 1px grey",
    borderRadius: "5px",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: `${px2vw(20)}`,
    color: "#666",
    fontSize: "1.5rem"
  },
}));

export const AddDescoberta = () => {

  const classes = useStyles();
  
  const [descoberta, setDescoberta] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');


  const {adicionarDescoberta} = useContext(GlobalContextDescoberta);
  const history = useHistory();

  async function handleSubmit (e) {
    e.preventDefault();
    const novaDescoberta = {
      id: uuid(),
      descoberta,
      data,
      horario,
      descricao
    }
    adicionarDescoberta(novaDescoberta);
    history.push('/home');
    console.log(novaDescoberta)

    // if(descoberta!==''&&data!==''&&horario!==''&&descricao!==''){
    //   const response = await api.post('/api/descobertas', novaDescoberta);

    //   if(response.status===200){
    //     adicionarDescoberta(novaDescoberta);
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
          <Title>Nova Descoberta</Title>
          <Text htmlFor="descoberta">O que encontrou?</Text>
          <Input 
            id="descoberta" 
            value={descoberta} 
            onChange={e => setDescoberta(e.target.value)}
          />
           <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Data"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={data} 
            onChange={e => setData(e.target.value)}
          />
        </form>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="Horário"
            type="time"
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={horario} 
            onChange={e => setHorario(e.target.value)}
          />
        </form>
          <Text htmlFor="descricao">Descrição</Text>
          <Input 
            id="descricao" 
            value={descricao} 
            onChange={e => setDescricao(e.target.value)}
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