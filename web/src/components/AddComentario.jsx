import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { MyButton } from './Button';
import { GlobalContextComentarios } from '../context/GlobalStateComentarios';

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

export const AddComentario = () => {
  const classes = useStyles();
  
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const { adicionarComentario } = useContext(GlobalContextComentarios);
  const history = useHistory();

  const onSubmit = () => {
    const newComentario = {
      id: 4,
      assunto,
      descricao
    }
    adicionarComentario(newComentario);
    history.push('/');
  }

  const onChangeAssunto = (e) => {
    setAssunto(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  // const handleChange = (event) => {
  //   setComentario(event.target.value);
  // };

  return(
    <>
       {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Nota</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={comentario}
          onChange={handleChange}
        >
          <MenuItem value={10}>Descoberta</MenuItem>
          <MenuItem value={20}>Comentários</MenuItem>
        </Select>
      </FormControl> */}
    <form onSubmit={onSubmit}>
      <FormControl>
        <InputLabel htmlFor="assunto">Assunto</InputLabel>
        <Input 
          id="assunto" 
          value={assunto}
          onChange={onChangeAssunto}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="descricao">Descrição</InputLabel>
        <Input 
          id="descricao" 
          value={descricao}
          onChange={onChangeDescricao}
        />
      </FormControl>
      
      <React.Fragment>
        <MyButton type="submit" color="blue">Salvar</MyButton>
        <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
      </React.Fragment>
    </form>
    </>
  )
}