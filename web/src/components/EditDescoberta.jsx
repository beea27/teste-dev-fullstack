import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContextDescoberta } from '../context/GlobalStateDescobertas';
import { FormControl, InputLabel, Input, TextField } from '@material-ui/core';
import { MyButton } from './Button';
import { makeStyles } from '@material-ui/core/styles';

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

export const EditDescoberta = (props) => {
  const classes = useStyles();
  
  const {descobertas, editarDescoberta} = useContext(GlobalContextDescoberta);
  const [descobertaSelecionada, setDescobertaSelecionada] = useState({
    id: '',
    descoberta: '',
    data: '',
    horario: '',
    descricao:''
  });

  const history = useHistory();
  const currentDescobertaId = props.match.params.id;
  console.log(descobertaSelecionada)

  useEffect(() => {
    const descobertaId = currentDescobertaId;
    console.log(typeof descobertaId)
    const descobertaSelecionada = descobertas.find(descoberta => descoberta.id === descobertaId);
    setDescobertaSelecionada(descobertaSelecionada)
    console.log(descobertaSelecionada)
  }, [currentDescobertaId, descobertas])

  const onSubmit = () => {
    editarDescoberta(descobertaSelecionada)
    history.push('/');
  }

  const onChange = (e) => {
    setDescobertaSelecionada({...descobertaSelecionada, [e.target.name]: e.target.value})
  }

  return(
    <>
      <form onSubmit={onSubmit}>
        <FormControl>
          <InputLabel htmlFor="descoberta">O que encontrou?</InputLabel>
          <Input 
            id="descoberta" 
            name="descoberta"
            value={descobertaSelecionada.descoberta} 
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Data"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name="data"
              value={descobertaSelecionada.data} 
              onChange={onChange}
            />
          </form>
        </FormControl>
        <FormControl>
          <form className={classes.container} noValidate>
            <TextField
              id="time"
              label="Horário"
              type="time"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              name="horario"
              value={descobertaSelecionada.horario} 
              onChange={onChange}
            />
          </form>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="descricao">Descrição</InputLabel>
          <Input 
            id="descricao" 
            name="descricao"
            value={descobertaSelecionada.descricao} 
            onChange={onChange}
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