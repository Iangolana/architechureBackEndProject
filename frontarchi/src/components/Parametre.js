import React, { Component } from 'react';
import { TextInput, NumberInput } from './assetsComponent/inputType';

class Parametre extends Component {
    
    state = {
        newGrade : '',
        fiscalDeduction : '',
        legalHour: ''
    }

    handleAddNewGrade = event => {
        const name = event.target.name;
        console.log(name);
        const type = event.target.type;
        const value = type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {newGrade, fiscalDeduction, legalHour} = this.state;
        return (
            <div className="container">
                <h1>Paramètre</h1>
                    <form action="" method="post">
                        <h3>Parametrage de classification professionnelle</h3>                   
                        <div className="row">
                            <div className="col">
                                <TextInput name="newGrade" children="Ajouter catégorie professionnelle" value={newGrade} onChange={this.handleAddNewGrade} />
                                <NumberInput name="legalHour" value={legalHour} children="Heure de travail légal" unity="heures" onChange={this.handleAddNewGrade} />
                                <NumberInput name="fiscalDeduction" value={fiscalDeduction}  unity="%" children="Ajouter la déduction fiscale correspondante" onChange={this.handleAddNewGrade} />
                                <button className="btn btn-light"><i className="material-icons">add</i>Ajouter</button>
                                {/* {JSON.stringify(this.state)} */}
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}

export default Parametre
