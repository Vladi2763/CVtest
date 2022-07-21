import ButtonShare from "./ButtonShare";
import ButtonBookCall from "./ButtonBookCall";
import { useSelector } from "react-redux";
import { InitialState } from "../../store/MainReducer";

import classes from './Overview.module.css'

const Overview = () => {

    const info = useSelector((state: InitialState) => state)

    const workTimeInWeek = info.workTime === "Full time" ? "40 hours per week" : " "
    
    return (
        <header className={classes.header}>
            <div className={classes.overview}>
                <img className={classes.photo} src="./images/photo.svg" alt="photo"></img>
                <div className={classes.info}>
                    <div className={classes.heading}>
                        <div className={classes.title}>
                            <span className={classes.name}>{info.name} {info.surname}</span>
                            <span className={classes.post}>{info.post}</span>
                        </div>
                        <div className={classes.buttons}>
                            <ButtonShare />
                            <ButtonBookCall />
                        </div>
                    </div>
                    <div>
                        <div className={classes.summaryLine}>
                            <img src="./images/experience.svg" alt="experience"></img>
                            <span>{info.experience} years - total work experience</span>
                        </div>
                        <div className={classes.summaryLine}>
                            <img src="./images/timezone.svg" alt="timezone"></img>
                            <span>Overlap with your time zone: {info.timeZone}</span>
                        </div>
                        <div className={classes.summaryLine}>
                            <img src="./images/availability.svg" alt="availability"></img>
                            <span>Availability: {info.availability}</span>
                        </div>
                        <div className={classes.summaryLine}>
                            <img src="./images/worktime.svg" alt="worktime"></img>
                            <span>{info.workTime} - {workTimeInWeek}</span>
                        </div>
                    </div>
                    <div>
                        <span className={classes.description}>{info.description}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Overview;