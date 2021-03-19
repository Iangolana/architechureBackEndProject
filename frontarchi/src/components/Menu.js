import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">Système de paie avancé</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/"><i className="material-icons">format_list_numbered</i>&nbsp;Liste des employés</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/inscription"><i className="material-icons">&nbsp;add_box</i> Inscription</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/parametre"><i className="material-icons">&nbsp;settings</i>Paramètre</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/recherche"><i className="material-icons">&nbsp;search</i> Recherche</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu
