import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core';
import {Text} from './styles';
import menu from './../../assets/img/menu.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  paper: {
    marginRight: theme.spacing(11),
    textDecoration: "none"
  },
}));

export const Heading = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static">
      <Toolbar className={classes.root} variant="dense">
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img src={menu} alt=""/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link to="/"><MenuItem><Text>Home</Text></MenuItem></Link>
                    <Link to="/adicionar-descoberta"><MenuItem><Text>Nova Descoberta</Text></MenuItem></Link>
                    <Link to="/adicionar-comentario"><MenuItem><Text>Novo Comentário</Text></MenuItem></Link>
                    <Link><MenuItem onClick={handleClose}><Text>Sair</Text></MenuItem></Link>
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