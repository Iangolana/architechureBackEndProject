import React from 'react'

const TableEmploye = ({listeEmployes}) => {
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Matricule</th>
                    <th scope="col">Noms</th>
                    <th scope="col">Fonction</th>
                    <th scope="col">Profil</th>
                </tr>
            </thead>

            <tbody>
                {
                    listeEmployes.map((listeEmployes, index)=>{
                        return(
                            <tr key={index}>
                                <td>{listeEmployes.code}</td>
                                <td>{listeEmployes.nom}</td>
                                <td>{listeEmployes.fonction}</td>
                                <td><button className="btn btn-info">Consulter</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableEmploye
