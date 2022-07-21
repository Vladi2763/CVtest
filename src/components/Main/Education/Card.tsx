import classes from "./Card.module.css"

const Card: React.FC<{ university: string, speciality: string, startStudy: string, endStudy: string }> = (props) => {

    const duration = (+new Date(props.endStudy) - +new Date(props.startStudy)) / (60 * 60 * 24 * 1000)

    const fullYearBetween = Math.trunc(duration / 365)

    const fullMonthBetween = +(Number(duration / 365 - fullYearBetween).toFixed(1)) * 10;

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrap}>
                <div className={classes.elipse}></div>
                <div >
                    <div className={classes.textContainer}>
                        <span className={classes.speciality}>{props.speciality}</span>
                        <span className={classes.university}>{props.university}</span>
                    </div>
                    <div className={classes.datesContainer}>
                        <div>
                            <img src="/images/timezone.svg"></img>
                            <span>{fullYearBetween} years {fullMonthBetween} month</span>
                            <span className={classes.char}>|</span>
                        </div>
                        <div>
                            <span>{props.startStudy} - {props.endStudy}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card