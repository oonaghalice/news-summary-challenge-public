// The test I wrote for the example data

import { render, screen } from '@testing-library/react';
import mockNewsData from '../Components/mockNewsData.json';
import App from '../App.js'

describe('Sample Data tests', () => {

    const testNews = mockNewsData.response.results[0].fields;

    it('Headlines are displayed correcly and included on the page', () => {
        // Arrange
        const text = testNews.headline;
        // Act 
        render(<App text={text} />);
        const result = screen.getByText(text);
        // Assert
        expect(result).toBeInTheDocument();
    })

})