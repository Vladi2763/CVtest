import Languages from "./Languages"
import Technologies from "./Technologies"
import { InitialState } from "../../../store/MainReducer"

import classes from "./Stack.module.css"

import { useSelector } from "react-redux"

const Stack = () => {

    const expereinceIn = useSelector((state: InitialState) => state.experienceIn)
    return (
        <div className={classes.stackContainer}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <img className={classes.stackImg} src={`./images/iconStack.svg`} alt="iconStack"></img>
                    <span className={classes.titleText}>Technologies Stack</span>
                </div>
            </div>
            <div className={classes.wrapperMain}>
                <div className={classes.currentStack}>
                    <span className={classes.titleText}>Current Stack</span>
                    <img src={`./images/iconQuestion.svg`} alt="iconQuestion"></img>
                </div>
                <Languages />
                <Technologies />
                <div className={classes.wrapperExp}>
                    <div>
                        <div className={classes.expereinceIn}>
                            <span className={classes.titleText}>Has experience in</span>
                            <img src={`./images/iconQuestion.svg`} alt="iconQuestion"></img>
                        </div>
                    </div>
                    {expereinceIn.map((item, index: number) => (
                        <span className={classes.expIn} key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stack