import React from 'react'

function Alert(props) {
    // For capitalizing the first word of the type of Alert
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style = {{height : '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
            </div>}
            {/* if props.alert is true then the next statement will be evaluated else it won't be evaluated */}
        </div>
    )
}

export default Alert