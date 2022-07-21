import Button from "./Button"
import { InitialState } from "../../store/MainReducer"

import classes from "./Footer.module.css"

import { useSelector } from "react-redux"

const Footer = () => {

    const name = useSelector((state: InitialState) => state.name)
    const surname = useSelector((state: InitialState) => state.surname)

    return (
        <footer className={classes.container}>
            <div className={classes.wrapper}>
                <span>{`Would you like to shedule an interview with ${name} ${surname}?`}</span>
                <Button />
            </div>
        </footer>
    )
}

export default Footer