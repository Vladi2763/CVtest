import classes from "./Cards.module.css"

import { InitialState } from "../../../store/MainReducer"

import Card from "./Card"
import { useSelector } from "react-redux"

const Cards = () => {

    const education = useSelector((state: InitialState) => state.education)
    return (
        <div className={classes.container}>
            {education.map((item, index: number) => (
                <Card
                    university={item.university}
                    speciality={item.speciality}
                    startStudy={item.startStudy}
                    endStudy={item.endStudy}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Cards