import classes from "./Technologie.module.css"

const Technologie: React.FC<{ name: string }> = (props) => {
    return (
        <div className={classes.technologie}>
            <img src={`./images/${props.name}.svg`}></img>
            <span className={classes.text}>{props.name}</span>
        </div>
    )
}

export default Technologie