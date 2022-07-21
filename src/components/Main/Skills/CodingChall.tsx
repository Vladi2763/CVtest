import { CodingChallenge as CodingType } from '../../../store/MainReducer';

import BasicRating from './Rating';

import classes from "./CodingChall.module.css"

const CodingChallenge: React.FC<{ codingChallenge: CodingType }> = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.buttonContainer}>
                <span className={classes.text}>Coding Challenge</span>
                <button className={classes.button}>See Code</button>
            </div>
            <div className={classes.mainContainer}>
                <span className={classes.intro}>Includes 3 tasks on coding skills</span>
                {props.codingChallenge.map((item, index: number) => (
                    <div className={classes.containerCodingSkill} key={index}>
                        <span className={classes.codingSkill}>{Object.keys(item)}</span>
                        <div>
                            <BasicRating rating={Object.values(item)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CodingChallenge