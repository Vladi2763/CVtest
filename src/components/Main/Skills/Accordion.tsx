import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from './Card';
import BasicRating from './Rating';

import { Quiz, CodingChallenge } from '../../../store/MainReducer';

import classes from "./Accordion.module.css"

const SimpleAccordion: React.FC<{ skill: string, rating: number, quiz: Quiz, codingChallenge: CodingChallenge }> = (props) => {
    return (
        <div className={classes.mainWrapper}>
            <img className={classes.img} src="./images/vettedskill.svg"></img>
            <Accordion
                sx={{
                    bgcolor: '#F7F7FA',
                    minHeight: '76px',
                    boxShadow: 'none',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.expand_icon}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                    sx={{
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    }}
                >
                    <div className={classes.wrapper}>
                        <div className={classes.container}>
                            <img src={`/images/${props.skill}.svg`}></img>
                            <span>{props.skill}</span>
                        </div>
                        <BasicRating rating={props.rating} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                        <Card
                            quiz={props.quiz}
                            codingChallenge={props.codingChallenge}
                        />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SimpleAccordion