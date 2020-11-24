import React, {useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Input, TextField} from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { Heading } from './../../components/Heading';

import { Container, Box, Buttons, Text, Title } from "./styles";

import api from './../../services/api';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none"
  },
  input: {
    fontSize: "12px"
  }
}));

export const EditDescoberta = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const [descoberta, setDescoberta] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');

  const {idDescoberta} = useParams();

  useEffect(() => {
    async function getDescoberta(){
      var response = await api.get('/api/descobertas.details/'+idDescoberta);
      
      setDescoberta(response.data.nome_descoberta);
      setData(response.data.data_descoberta);
      setHorario(response.data.horario_descoberta);
      setDescricao(response.data.descricao_descoberta);
    }

    getDescoberta();
  }, [])

  async function handleSubmit (e) {
    e.preventDefault();

    const novaDescoberta = {
      nome_descoberta: descoberta, 
      data_descoberta: data, 
      horario_descoberta: horario, 
      descricao_descoberta: descricao,
      _id: idDescoberta
    }
 
    if(descoberta!==''&&data!==''&&horario!==''&&descricao!==''){
      const response = await api.put('/api/descobertas', novaDescoberta);

      if(response.status===200){
        history.push('/home')
      }
      else{
        alert("Erro ao atualizar a descoberta")
      }
    }else{
        alert('Por favor, preencha todos os campos ')
    }
  }

  return(
    <>
      <Heading/>
      <Container>
        <form onSubmit={handleSubmit}>
          <Box>
          <Title>Editar Descoberta</Title>
          <Text>O que encontrou?</Text>
          <Input 
            id="descoberta" 
            value={descoberta} 
            onChange={e => setDescoberta(e.target.value)}
            className={classes.input}
          />

          <TextField
            id="date"
            label="Data"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={data} 
            onChange={e => setData(e.target.value)}
          />

          <TextField
            id="time"
            label="Horário"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={horario} 
            onChange={e => setHorario(e.target.value)}
          />

          <Text>Descrição</Text>
          <Input 
            id="descricao" 
            value={descricao} 
            onChange={e => setDescricao(e.target.value)}
            className={classes.input}
          />
          
          <Buttons>
            <MyButton type="submit" color="blue">Salvar</MyButton>
            <Link className={classes.link} to="/home"><MyButton color="red">Cancelar</MyButton></Link>
          </Buttons>

          </Box>
        </form>
      </Container>
    </>
  )
}