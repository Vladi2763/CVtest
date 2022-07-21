import Cards from "./Cards";

import classes from "./Experience.module.css"

const Experience = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.exp}>
                    <img src="/images/experience.svg"></img>
                    <span>Work Experience</span>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Experience;