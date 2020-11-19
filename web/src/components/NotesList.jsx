import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { MyButton } from './Button';
import { Link } from 'react-router-dom';

import { GlobalContextComentarios } from './../context/GlobalStateComentarios';
import { GlobalContextDescoberta } from './../context/GlobalStateDescobertas';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:'700px',
	  height:'auto',
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between"
  },
  card: {
    margin:"20px"
  }
}));

export const NotesList = () => {
  const classes = useStyles();

  const { descobertas, removerDescoberta } = useContext(GlobalContextDescoberta);
  const { comentarios, removerComentario } = useContext(GlobalContextComentarios);

  return (
    <>
      <h1>Descobertas</h1>
      <List style={{ padding: 20 }} className={classes.root}>
        {descobertas.length > 0 ? (
          <>
            {descobertas.map(descoberta => (
              <Grid container spacing={1}>
              <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {descoberta.descoberta}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                      {descoberta.data}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {descoberta.horario}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {descoberta.descricao}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <React.Fragment>
                      <Link to={`/editar-descoberta/${descoberta.id}`}>
                        <MyButton type="submit" color="blue">Edit</MyButton>
                      </Link>            
                      <MyButton onClick={() => removerDescoberta(descoberta.id)} color="red">Delete</MyButton>
                    </React.Fragment>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
          </>
        ) : (
          <h4>Sem descobertas</h4>
        )}
      </List>
      <h1>Comentários</h1>

      <List className={classes.root}>
        {comentarios.length > 0 ? (
          <>
            {comentarios.map(comentario => (
              <Grid container spacing={1}>
                <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {comentario.assunto}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {comentario.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <React.Fragment>
                    <Link to={`/editar-comentario/${comentario.id}`}>
                      <MyButton type="submit" color="blue">Edit</MyButton>
                    </Link>            
                    <MyButton onClick={() => removerComentario(comentario.id)} color="red">Delete</MyButton>
                  </React.Fragment>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </>
        ) : (
          <h4>Sem comentários</h4>
        )}
      </List>
    </>
  );
}