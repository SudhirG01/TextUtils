import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const newWord = word.charAt(0).toUpperCase() + word.slice(1);
        return newWord;
    }

    const alert_style = {
        height : "40px",
        display : "flex",
        alignItems : "center",
        fontSize : "small"
    }

    return (
        <div style={{height : "40px", marginTop : "5px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-2`} role="alert" style={alert_style}>
            <strong>{capitalize(props.alert.type)}!&nbsp;</strong> {props.alert.msg}
        </div>}
        </div>
    )
}
