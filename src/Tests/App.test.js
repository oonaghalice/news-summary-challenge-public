import { render } from '@testing-library/react';
import App from '../App.js'

//Testing the app file
describe("App Testing Suite", () => {

    it(`The App renders correctly`, () => {

        const result = render(<App />);

        expect(result).toBeTruthy();
    });

});