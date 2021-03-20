import React from 'react'

export const TextInput = ({name, value, onChange, children}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{children} : </label>
            <input type="text" name={name} id={name} value={value} onChange={onChange} className="form-control" />
        </div>
    )
}

export const DateInput = ({name, value, onChange, children}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{children} : </label>
            <input type="date" name={name} id={name}  value={value} onChange={onChange} className="form-control" />
        </div>
    )
}

export const RadioButton = ({name, value, onChange, children, id}) => {
    return (
        <div className="form-check">
            <input type="radio" name={name} id={id} value={value} onChange={onChange} />
            <label htmlFor={id}>&nbsp;{children} : </label><br/>
        </div>
    )
}

export const NumberInput = ({name, value, onChange, children, unity}) => {
    
    const unityValue = unity && <span class="input-group-text">{unity}</span>
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{children} : </label>
            <div className="input-group">
                <input type="number" className="form-control" name={name} id={name} value={value} onChange={onChange}  />
                {unityValue}
            </div>
        </div>
    )
}

export const SelectInput = ({name, value, onChange, children, tabValue}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{children} : </label>
            <select className="form-select" name={name} id={name} value={value} onChange={onChange}>
                {
                    tabValue.map((tabVal, index)=>{
                        return <option value={tabVal} key={index} >{tabVal}</option>
                    })
                }
            </select>
        </div>
    )
}