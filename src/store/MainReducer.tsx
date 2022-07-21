export type InitialState = {
    name: string,
    surname: string,
    post: string,
    experience: number | string,
    timeZone: string,
    availability: string,
    workTime: string,
    description: string,
    languages: Array<string>,
    technologies: Array<string>,
    experienceIn: Array<string>,
    workExperience: WorkExperience,
    education: Education,
    skills: Skills
}

export type WorkExpObj = {
    post: string,
    company: string,
    startWork: string,
    endWork: string,
    description: string,
    languages: Array<string>,
    technologies: Array<string>,
}

export type Quiz = Array<{
    dom: number,
    html: number,
    css: number,
    javascript: number,
    'react components': number
}>

export type CodingChallenge = Array<{
    "Sorting algoritm": number,
    "Strings and arrays": number,
    "Complexity": number
}>

type SkillsObj = {
    skill: string,
    rating: number,
    quiz: Quiz,
    codingChallenge: CodingChallenge
}

type EducationObj = {
    university: string,
    speciality: string,
    startStudy: string,
    endStudy: string
}

type WorkExperience = Array<WorkExpObj>

type Skills = Array<SkillsObj>

type Education = Array<EducationObj>

type Action = {
    data: InitialState,
    type: string
}

const initialState: InitialState = {
    name: "",
    surname: "",
    post: "",
    experience: "",
    timeZone: "",
    availability: "",
    workTime: "",
    description: "",
    languages: [],
    technologies: [],
    experienceIn: [],
    workExperience: [],
    education: [],
    skills: []
}

const MainReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'ADDINFO': {

            return {
                ...state,
                name: action.data.name,
                surname: action.data.surname,
                post: action.data.post,
                experience: action.data.experience,
                timeZone: action.data.timeZone,
                availability: action.data.availability,
                workTime: action.data.workTime,
                description: action.data.description,
                languages: [...action.data.languages],
                technologies: [...action.data.technologies],
                experienceIn: [...action.data.experienceIn],
                workExperience: [...action.data.workExperience],
                education: [...action.data.education],
                skills: [...action.data.skills]
            }
        }
        default:
            return state;
    }
}

export default MainReducer;