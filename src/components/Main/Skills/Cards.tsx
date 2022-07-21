import { useSelector } from "react-redux";
import { InitialState } from "../../../store/MainReducer";

import SimpleAccordion from "./Accordion";

const Cards = () => {

    const skills = useSelector((state: InitialState) => state.skills)

    return (
        <div>
            {skills.map((item, index: number) => (
                <SimpleAccordion skill={item.skill}
                    rating={item.rating}
                    quiz={item.quiz}
                    codingChallenge={item.codingChallenge}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Cards;