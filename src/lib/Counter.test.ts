import {cleanup, fireEvent, render, screen} from '@testing-library/svelte'
import Counter from "./Counter.svelte"

describe('Counter.svelte', () => {

    afterEach(() => cleanup())

    it('mounts', () => {
        const {container} = render(Counter)
        expect(container).toBeTruthy()
        expect(container.innerHTML).toContain("<div><button>0</button></div>")
        // expect(container.innerHTML).toMatchSnapshot()
    })

    it('updates on button click', async () => {
        render(Counter)
        const btn = screen.getByRole("button")
        await fireEvent.click(btn)
        expect(btn.innerHTML).toBe("1")
        await fireEvent.click(btn)
        expect(btn.innerHTML).toBe("2")
    })

})