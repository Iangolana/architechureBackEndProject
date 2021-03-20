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
        typeCategorie : ['', 'M1-A1', 'M2-1B', 'OS1-2A', 'OS2-2B', 'OS3-3A', 'OP1A-3B', 'OP1B-4A', 'OP2B-5A', 'OP3-5B', 'Hors échelle']
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
        const {nomEmploye, prenomEmploye, dateAnnif, numCIN, posteFonction, tauxHoraire, categorie, typeCategorie} = this.state;
        return (
            <div className="container">
                <h1>Inscription</h1>
                <form action="">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <TextInput name="nomEmploye" value={nomEmploye} onChange={this.handleChange} children="Nom : " />
                                <TextInput name="prenomEmploye" value={prenomEmploye} onChange={this.handleChange} children="Prénom(s) : " />
                                <DateInput name="dateAnnif" value={dateAnnif} children="Date de naissance : " onChange={this.handleChange} />
                                <label>Genre : </label>
                                <RadioButton name="genre" id="homme" value="homme" onChange={this.handleChange} children="Homme" />
                                <RadioButton name="genre" id="femme" value="femme" onChange={this.handleChange} children="Femme" />
                                <NumberInput name="numCIN" value={numCIN} onChange={this.handleChange} children="Numero CIN : " montant="Ariary" />
                                <p className="text text-danger">Categorie de l'employé non-implementé</p>
                                <div className="form-group">
                                <label htmlFor="">Categorie et classification professionnelle : </label>
                                <select className="form-select" aria-label="Default select example" name="categorie" id="categorie" value={categorie} onChange={this.handleChange}>
                                    {
                                        typeCategorie.map((categorie, index)=>{
                                            return <option value={categorie} key={index} >{categorie}</option>
                                        })
                                    }
                                </select>
                                </div>
                                <TextInput name="posteFonction" value={posteFonction} children="Poste de reponsabilité : " onChange={this.handleChange} />
                                <NumberInput name="tauxHoraire" value={tauxHoraire} children="Taux horaire : " onChange={this.handleChange} />
                                <button className="btn btn-light">Valider</button>
                                {JSON.stringify(this.state)}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Inscription
 