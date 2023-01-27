import { render } from '@testing-library/react';
import Footer from '../Components/Footer';

//Testing the Footer
describe('Footer tests', () => {

    it(`Does the footer match the snapshot`, () => {
        expect(render(<Footer />)).toMatchSnapshot();
    });

});