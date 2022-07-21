import React from "react"

import classes from './Language.module.css'

const Language: React.FC<{name: string}> = (props) => {
    return (
        <div className={classes.language}>
            <img className={classes.img} src={`./images/${props.name}.svg`}></img>
            <span className={classes.text}>{props.name}</span>
        </div>
    )
}
export default Language