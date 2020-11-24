import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import { EditDescoberta } from './pages/EditDescoberta';
import { EditComentario } from './pages/EditComentario';
import { AddComentario } from './pages/AddComentario';
import { AddDescoberta } from './pages/AddDescoberta';

import { GlobalProviderComentarios } from './context/GlobalStateComentarios';
import { GlobalProviderDescobertas } from './context/GlobalStateDescobertas';

import Global from "./styles/global";
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';

import PrivateRoute from './services/wauth';

function Routes() {
  return (
    <div className="App">
      <Global/>
      <GlobalProviderDescobertas>
        <GlobalProviderComentarios>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/cadastro" component={Cadastro}/>
              <PrivateRoute path="/home" component={Home}/>
              <PrivateRoute path="/adicionar-comentario" component={AddComentario}/>
              <PrivateRoute path="/adicionar-descoberta" component={AddDescoberta}/>
              <PrivateRoute path="/editar-descoberta/:idDescoberta" component={EditDescoberta}/>
              <PrivateRoute path="/editar-comentario/:idComentario" component={EditComentario}/>
            </Switch>
          </BrowserRouter>
          </GlobalProviderComentarios>
      </GlobalProviderDescobertas>
    </div>
  );
}

export default Routes;
