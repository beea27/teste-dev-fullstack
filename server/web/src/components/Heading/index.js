import React, {useState, useRef, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core';
import {Text, Title} from './styles';
import menu from './../../assets/img/menu.svg'
import api from '../../services/api';
import { getToken, logout } from '../../services/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    marginRight: theme.spacing(11),
    textDecoration: "none"
  },
  link: {
    textDecoration: "none"
  }
}));

export const Heading = () => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  async function Sair(){
    if(window.confirm("Deseja realmente sair do sistema?")){
      const response = await api.get('/api/usuarios/destroytoken', {headers: {token: getToken()}})
      if(response.status===200){
        logout();
        history.push('/');
      }
      else{
        alert("Não foi possível fazer o logout")
      }
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static">
      <Toolbar className={classes.root} variant="dense">
      <Title>Descobertas&Comentários</Title>
      <div>
        <Button
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img src={menu} alt=""/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link className={classes.link} to="/home"><MenuItem><Text>Home</Text></MenuItem></Link>
                    <Link className={classes.link} to="/adicionar-descoberta"><MenuItem><Text>Nova Descoberta</Text></MenuItem></Link>
                    <Link className={classes.link} to="/adicionar-comentario"><MenuItem><Text>Novo Comentário</Text></MenuItem></Link>
                    <MenuItem onClick={Sair}><Text>Sair</Text></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      </Toolbar>
    </AppBar>
  );
}