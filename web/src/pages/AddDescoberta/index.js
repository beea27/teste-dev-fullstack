import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContextDescoberta } from './../../context/GlobalStateDescobertas';
import {v4 as uuid} from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Input, TextField} from '@material-ui/core';
import { MyButton } from './../../components/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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

  const onSubmit = () => {
    const novaDescoberta = {
      id: uuid(),
      descoberta,
      data,
      horario,
      descricao
    }
    adicionarDescoberta(novaDescoberta);
    history.push('/');
  }

  const onChangeDescoberta = (e) => {
    setDescoberta(e.target.value);
  }

  const onChangeData = (e) => {
    setData(e.target.value);
  }

  const onChangeHorario = (e) => {
    setHorario(e.target.value);
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }
  

  return(
    <>
      <form onSubmit={onSubmit}>
        <InputLabel htmlFor="descoberta">O que encontrou?</InputLabel>
        <Input 
          id="descoberta" 
          value={descoberta} 
          onChange={onChangeDescoberta}
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
            onChange={onChangeData}
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
            onChange={onChangeHorario}
          />
        </form>
        <InputLabel htmlFor="descricao">Descrição</InputLabel>
        <Input 
          id="descricao" 
          value={descricao} 
          onChange={onChangeDescricao}
        />
      
      <MyButton type="submit" color="blue">Salvar</MyButton>
      <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
      </form>
    </>
  )
}