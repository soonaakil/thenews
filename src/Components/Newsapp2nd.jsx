import React, { useState, useEffect } from 'react';
import Card2nd from './Card2nd';
import { FaFutbol, FaPolitics, FaFilm, FaHeartbeat, FaDumbbell } from 'react-icons/fa';

const Newsapp2nd = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEYS = "3e87063c14d84db589ceb6c0ab3af526";

    const getData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEYS}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData.articles);
            setNewsData(jsonData.articles);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    useEffect(() => {
        getData(); // Fetch data on component mount
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a>All News</a>
                    <a>Trending</a>
                </ul>
                <div className="searchBar">
                    <input type="text" placeholder='Search News' onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Updated with TrendyNews</p>
            </div>
            <div className="categoryBtn">
                <button><FaFutbol /> Sports</button>
                <button><FaPolitics /> Politics</button>
                <button><FaFilm /> Entertainment</button>
                <button><FaHeartbeat /> Health</button>
                <button><FaDumbbell /> Fitness</button>
            </div>
            <div>
                {newsData ? <Card2nd data={newsData} /> : null}
            </div>
        </div>
    );
};

export default Newsapp2nd;
