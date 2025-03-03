import React, { useState, useEffect } from 'react';
import Card from './Card'
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { PiPoliceCarFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { FaRegFaceLaughWink } from "react-icons/fa6";

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);

    const API_KEYS = "3e87063c14d84db589ceb6c0ab3af526";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEYS}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    useEffect(() => {
        getData(); // Fetch data on component mount
    }, []); // Empty dependency array means this runs once on mount

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInput = (event)=>{
        setSearch(event.target.value)
    }


  return (
    <div>
        <nav>
            <div>
                <h1>News Here</h1>
            </div>
            <ul>
                <a>All News</a>
            </ul>
            <div className="searchBar">
                <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Updated News</p>
        </div>
        <div className="categoryBtn">
            <button onClick={userInput} value="sports"><MdOutlineSportsKabaddi style={{height: "15px"}} />Sports</button>
            <button onClick={userInput} value="politics"><PiPoliceCarFill style={{height: "15px"}} />Politics</button>
            <button onClick={userInput} value="entertainment"><FaRegFaceLaughWink style={{height: "15px"}} />Entertainment</button>
            <button onClick={userInput} value="health"><MdOutlineHealthAndSafety style={{height: "15px"}} />Health</button>
            <button onClick={userInput} value="fitness"><IoMdFitness style={{height: "15px"}} />Fitness</button>
        </div>
        <div>
           {newsData? <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default Newsapp

