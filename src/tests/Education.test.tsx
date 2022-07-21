import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { InitialState } from "../store/MainReducer"
import MainReducer from "../store/MainReducer"

import Education from "../components/Main/Education/Education"

const renderWithRedux = (
    component:any,
    { store=createStore(MainReducer)} = {}
) => {
return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
}
}

describe('Redux testing', () => {
    it('checks initial state', ()=> {
        const {getByRole} = renderWithRedux(<Education/>)

        expect(screen.getByRole('img')).toBeInTheDocument()
    })
})