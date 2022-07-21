import classes from "./Education.module.css"

import Cards from "./Cards";

const Education = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.education}>
                    <img src="/images/education.svg"></img>
                    <span>Education</span>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Education;