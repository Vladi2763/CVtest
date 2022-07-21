import Quiz from "./Quiz"
import CodingChallenge from "./CodingChall"

import { Quiz as QuizType, CodingChallenge as CodingType } from '../../../store/MainReducer';

const Card: React.FC<{ quiz: QuizType, codingChallenge: CodingType }> = (props) => {
    return (
        <div>
            <Quiz quiz={props.quiz}/>
            <CodingChallenge codingChallenge={props.codingChallenge}/>
        </div>
    )
}

export default Card