import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContextDescoberta } from './../../context/GlobalStateDescobertas';
import { Input, TextField } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { Heading } from './../../components/Heading';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Buttons, Text, Title } from "./styles";
import px2vw from "../../utils/px2vw";
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

  useEffect(() => {
    const descobertaId = currentDescobertaId;
    const descobertaSelecionada = descobertas.find(descoberta => descoberta.id === descobertaId);
    setDescobertaSelecionada(descobertaSelecionada)
  }, [currentDescobertaId, descobertas]);

  async function handleSubmit(e) {
    e.preventDefault();
    editarDescoberta(descobertaSelecionada)
    history.push('/home');

    // if(descobertaSelecionada.descoberta!==''&&descobertaSelecionada.data!==''&&descobertaSelecionada.horario!==''&&descobertaSelecionada.descricao!==''){
    //   const response = await api.post('/api/descobertas');

    //   if(response.status===200){
    //     editarDescoberta(descobertaSelecionada)
    //     history.push('/home')
    //   }
    //   else{
    //     alert("Erro ao cadastrar uma nova descoberta")
    //   }
    // }else{
    //     alert('Por favor, preencha todos os campos ')
    // }
  }

  return(
    <>
     <Heading/>
      <Container>
        <form  onSubmit={handleSubmit}>
          <Box>
          <Title>Descoberta</Title>
          <Text htmlFor="descoberta">O que encontrou?</Text>
          <Input 
            id="descoberta" 
            name="descoberta"
            value={descobertaSelecionada.descoberta} 
            onChange={e => setDescobertaSelecionada({...descobertaSelecionada, [e.target.name]: e.target.value})}
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
            name="data"
            value={descobertaSelecionada.data} 
            onChange={e => setDescobertaSelecionada({...descobertaSelecionada, [e.target.name]: e.target.value})}
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
            name="horario"
            value={descobertaSelecionada.horario} 
            onChange={e => setDescobertaSelecionada({...descobertaSelecionada, [e.target.name]: e.target.value})}
          />
        </form>
          <Text htmlFor="descricao">Descrição</Text>
          <Input 
            id="descricao" 
            name="descricao"
            value={descobertaSelecionada.descricao} 
            onChange={e => setDescobertaSelecionada({...descobertaSelecionada, [e.target.name]: e.target.value})}
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