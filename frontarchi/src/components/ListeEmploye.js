import React, { Component } from 'react';
import TableEmploye from './assetsComponent/TableEmploye';

class ListeEmploye extends Component {
    state = {
        listeEmployes : [
            {code: 'E001', nom: 'Rakoto', fonction: 'Responsable chantier', profile: true},
            {code: 'E002', nom: 'Rabe', fonction: 'Maçon', profile: true},
            {code: 'E003', nom: 'Rasoa', fonction: 'Concièrge', profile: true},
            {code: 'E004', nom: 'Randria', fonction: 'Gardien', profile: true},
        ]
    }

    render() {
        return (
            <div className="container">
                <h2>Liste des employés</h2>

                <TableEmploye listeEmployes={this.state.listeEmployes} />
            </div>
        )
    }
}

export default ListeEmploye
