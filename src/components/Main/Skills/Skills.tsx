import classes from "./Skills.module.css"
import Cards from "./Cards";

const Skills = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.skills}>
                    <img src="/images/skills.svg"></img>
                    <span>Vetted Skills</span>
                </div>
            </div>
            <div className={classes.cardsContainer}>
                <span className={classes.text}>This Developer passed 3+ hours of rigorous for the following skills</span>
                <div className={classes.title}>
                    <img src="/images/iconQuestion.svg"></img>
                    <span>What is a Vetted skill? Learn more about our skill assessment methodology </span>
                </div>
                <Cards/>
            </div>
        </div>
    )
}

export default Skills;