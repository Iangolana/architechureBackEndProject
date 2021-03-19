import React, { Component } from 'react';
import { TextInput, DateInput, RadioButton, NumberInput} from './assetsComponent/inputType';


export class Inscription extends Component {
    state = {
        nomEmploye: '',
        prenomEmploye: '',
        dateAnnif: '',
        numCIN: '',
        posteFonction:'',
        tauxHoraire: '',
        categorie: '',
        genre:'',
        allocation:'',
    }
    
    handleChange = e => {
        const name = e.target.name;
        const type = e.target.type;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {nomEmploye, prenomEmploye, dateAnnif, numCIN, posteFonction, tauxHoraire, categorie} = this.state;
        return (
            <div className="container">
                <h1>Inscription</h1>
                <form action="">
                    <TextInput name="nomEmploye" value={nomEmploye} onChange={this.handleChange} children="Nom : " />
                    <TextInput name="prenomEmploye" value={prenomEmploye} onChange={this.handleChange} children="Prénom(s) : " />
                    <DateInput name="dateAnnif" value={dateAnnif} children="Date de naissance : " onChange={this.handleChange} />
                    <label>Genre : </label>
                    <RadioButton name="genre" id="homme" value="homme" onChange={this.handleChange} children="Homme" />
                    <RadioButton name="genre" id="femme" value="femme" onChange={this.handleChange} children="Femmme" />
                    <NumberInput name="numCIN" value={numCIN} onChange={this.handleChange} children="Numero CIN : " />
                    <p className="text text-danger">Categorie de l'employé non-implementé</p>
                    <TextInput name="posteFonction" value={posteFonction} children="Poste de reponsabilité : " onChange={this.handleChange} />
                    <NumberInput name="tauxHoraire" value={tauxHoraire} children="Taux horaire : " onChange={this.handleChange} />
                    {JSON.stringify(this.state)}
                </form>
            </div>
        )
    }
}

export default Inscription
 