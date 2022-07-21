import Stack from "./Stack/Stack"
import Skills from "./Skills/Skills"
import Experience from "./Experience/Experience"
import Education from "./Education/Education"

import classes from "./Main.module.css"

const Main = () => {
    return (
        <main className={classes.main}>
            <Stack />
            <Skills />
            <Experience />
            <Education />
        </main>
    )
}

export default Main