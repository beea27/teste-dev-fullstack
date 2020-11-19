import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { MyButton } from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export const Heading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <React.Fragment>
            <Link to="/adicionar-descoberta"><MyButton color="blue">Adicionar Descoberta</MyButton></Link>
          </React.Fragment>
          <React.Fragment>
            <Link to="/adicionar-comentario"><MyButton color="blue">Adicionar Comentarios</MyButton></Link>
          </React.Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}