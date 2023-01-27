import { render } from '@testing-library/react';
import Header from '../Components/Header.jsx'

//Testing the Header
describe('Header tests', () => {

    it(`Does the header match the snapshot`, () => {
        expect(render(<Header />)).toMatchSnapshot();
    });

});