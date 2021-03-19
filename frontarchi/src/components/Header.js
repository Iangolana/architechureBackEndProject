import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Inscription from './Inscription';
import ListeEmploye from './ListeEmploye';
import Recherche from './Recherche';
import Parametre from './Parametre';
import ErrorPage from './ErrorPage'

export class Header extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu />

                    <Switch>
                        <Route exact path="/" component={ListeEmploye} />
                        <Route path="/inscription" component={Inscription} />
                        <Route path="/recherche" component={Recherche} />
                        <Route path="/parametre" component={Parametre} />
                        <Route component={ ErrorPage } />
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}

export default Header
