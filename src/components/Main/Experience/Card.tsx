import { WorkExpObj } from "../../../store/MainReducer";

import classes from "./Card.module.css"

const Card: React.FC<WorkExpObj> = (props) => {

    const duration = (+new Date(props.endWork) - +new Date(props.startWork)) / (60 * 60 * 24 * 1000)

    const fullYearBetween = Math.trunc(duration / 365)

    const fullMonthBetween = +(Number(duration / 365 - fullYearBetween).toFixed(1)) * 10;

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrap}>
                <div className={classes.elipse}></div>
                <div>
                    <div className={classes.textContainer}>
                        <span className={classes.post}>{props.post}</span>
                        <span className={classes.company}>{props.company}</span>
                    </div>
                    <div className={classes.datesContainer}>
                        <div >
                            <img src="/images/timezone.svg"></img>
                            <span>{fullYearBetween} years {fullMonthBetween} month</span>
                            <span className={classes.char}>|</span>
                        </div>
                        <div>
                            <span>{props.startWork} - {props.endWork}</span>
                        </div>
                    </div>
                    <span className={classes.description}>{props.description}</span>
                    <div className={classes.languagesContainer}>
                        <span className={classes.titleText}>Languages</span>
                        <div className={classes.languages}>
                            {props.languages.map((language, index: number) => (
                                <div className={classes.language} key={index}>
                                    <img src={`/images/${language}.svg`} alt="language"></img>
                                    <span>{language}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.technologiesContainer}>
                        <span className={classes.titleText}>Technologies</span>
                        <div className={classes.technologies}>
                            {props.technologies.map((technologie, index: number) => (
                                <div className={classes.technologie} key={index}>
                                    <img src={`/images/${technologie}.svg`} alt="technologie"></img>
                                    <span>{technologie}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;