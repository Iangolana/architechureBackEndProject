import React from 'react'

export const TextInput = ({name, value, onChange, children}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="text" name={name} id={name} value={value} onChange={onChange} className="form-control" />
        </div>
    )
}

export const DateInput = ({name, value, onChange, children}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="date" name={name} id={name}  value={value} onChange={onChange} className="form-control" />
        </div>
    )
}

export const RadioButton = ({name, value, onChange, children, id}) => {
    return (
        <div className="form-check">
            <input type="radio" name={name} id={id} value={value} onChange={onChange} />
            <label htmlFor={id}>&nbsp;{children}</label><br/>
        </div>
    )
}

export const NumberInput = ({name, value, onChange, children}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="number" name={name} id={name} value={value} onChange={onChange} className="form-control" />
        </div>
    )
}