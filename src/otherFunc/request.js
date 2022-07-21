const DATA = require('../resumes.json');

const requestData = () => {
    return new Promise((resolve, reject) => {
        return resolve(DATA)
    })
}

export default requestData