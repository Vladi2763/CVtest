import { useSelector } from "react-redux"
import { InitialState } from "../../../store/MainReducer"
import Language from "./Language"

import classes from "./Languages.module.css"

const Languages = () => {

    const languages = useSelector((state: InitialState) => state.languages)

    return (
        <div className={classes.container}>
            <span className={classes.span}>Languages</span>
            <div className={classes.languagesContainer}>
                {languages.map((language, index: number) => (
                    <Language name={language} key={index} />
                ))}
            </div>
        </div>
    )

}
export default Languages