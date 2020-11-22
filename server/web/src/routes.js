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
              <Route path="/home" component={Home}/>
              <Route path="/adicionar-comentario" component={AddComentario}/>
              <Route path="/adicionar-descoberta" component={AddDescoberta}/>
              <Route path="/editar-descoberta/:id" component={EditDescoberta}/>
              <Route path="/editar-comentario/:id" component={EditComentario}/>
            </Switch>
          </BrowserRouter>
          </GlobalProviderComentarios>
      </GlobalProviderDescobertas>
    </div>
  );
}

export default Routes;