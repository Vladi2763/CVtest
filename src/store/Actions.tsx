import requestData from "../otherFunc/request"

import { InitialState } from "./MainReducer"

const addInfo = (data: InitialState) => {
    return {
        type: "ADDINFO",
        data: data
    }
}

export const getData: () => any = () => {
    return ((dispatch: ({ }: any) => void) => {
        requestData()
            .then(data => {
                dispatch(addInfo(data))
            })
    })
}