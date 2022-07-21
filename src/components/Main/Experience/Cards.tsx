import Card from "./Card";
import { InitialState } from "../../../store/MainReducer";

import classes from "./Cards.module.css"

import { useSelector } from "react-redux";

const Cards = () => {

    const workExp = useSelector((state: InitialState) => state.workExperience)
    return (
        <div className={classes.container}>
            {workExp.map((work, index) => (
                <Card key={index}
                    post={work.post}
                    company={work.company}
                    startWork={work.startWork}
                    endWork={work.endWork}
                    description={work.description}
                    languages={work.languages}
                    technologies={work.technologies}
                />
            ))}
        </div>
    )
}

export default Cards;