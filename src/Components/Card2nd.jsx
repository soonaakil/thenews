import React from 'react';

const Card2nd = ({ data }) => {
    console.log(data);

    const readMore = (url) => {
        window.open(url);
    };

    return (
        <div className='cardContainer'>
            {data.map((curItem, index) => {
                return (
                    <div className='card' key={index}>
                        {curItem.urlToImage && <img src={curItem.urlToImage} alt={curItem.title} />}
                        <div className='content'>
                            <a className='title' onClick={() => readMore(curItem.url)}>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={() => readMore(curItem.url)}>Read More</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card2nd;
