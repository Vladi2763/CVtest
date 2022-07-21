import BasicRating from "./Rating"

import classes from "./Quiz.module.css"

import { Quiz as QuizType } from '../../../store/MainReducer';

const Quiz: React.FC<{ quiz: QuizType }> = (props) => {
    return (
        <div className={classes.mainWrap}>
            <div className={classes.wrapper}>
                <div className={classes.buttonContainer}>
                    <span className={classes.text}>Quiz</span>
                    <button className={classes.button}>See Quiz results</button>
                </div>
                <div className={classes.mainContainer}>
                    <span className={classes.intro}>Includes 15 questions on the following topics</span>
                    {props.quiz.map((item, index: number) => (
                        <div className={classes.containerSkillName} key={index}>
                            <span className={classes.skillName}>{Object.keys(item)}</span>
                            <div>
                                <BasicRating rating={Object.values(item)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quiz