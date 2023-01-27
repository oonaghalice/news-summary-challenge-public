import mockNewsData from './mockNewsData.json';

const AllSampleData = () => {

    const mockNews = mockNewsData.response.results;

    return (
        <div className='sample'>
            {mockNews.map((story, index) => (
                <div key={index}>
                    <h2>{story.fields.headline}</h2>
                    <img src={story.fields.thumbnail} alt={story.fields.byline} />
                </div>
            ))}
        </div>
    );
}

export default AllSampleData;