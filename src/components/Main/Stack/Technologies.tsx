import { useSelector } from "react-redux"
import { InitialState } from "../../../store/MainReducer"

import classes from "./Technologies.module.css"

import Technologie from "./Technologie"

const Technologies = () => {

    const technologies = useSelector((state: InitialState) => state.technologies)
    return (
        <div className={classes.technologiesContainer}>
            <span className={classes.span}>Technologies</span>
            <div className={classes.container}>
                {technologies.map((technologie, index: number) => (
                    <Technologie name={technologie} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Technologies