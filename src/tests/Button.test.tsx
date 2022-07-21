import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Button from "../components/Footer/Button"

describe('Footer Button component', () => {
    it('Button not disabled', () => {
        render(<Button />)

        expect(screen.getByRole('button')).not.toBeDisabled()

        
    });

    it('Button textcontent', () => {
        render(<Button />)

        expect(screen.getByRole('button')).toHaveTextContent('Book a Call')
    })
})