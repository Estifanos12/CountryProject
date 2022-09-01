import { React, useState,useEffect } from 'react';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import Countries from './components/Countries/Countries';
import PageRoute from './components/routes/PageRoute';
import { FaRegMoon } from 'react-icons/fa';
import {BsFillSunFill} from 'react-icons/bs'
import './App.css'

const App = () => {

  const [darkMode,setDarkMode] = useState(false)

  const handleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }
  

  return (
    <div style={{backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black"}}>
      <nav style={{backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black"}} className="p-[2%] pl-[3%] ">
        <div className="title text-sm xl:text-[25px] text-800">
          <h1>Where in the world ?</h1>
        </div>

        <div className="toggle text-sm xl:text-[15px] ">
          <div onClick={handleDarkMode}  className={ darkMode  ? "not-visible" : "flex cursor-pointer items-center justify-center gap-2"} >
            <FaRegMoon />
            <p>Dark Mode</p>
          </div>

          <div onClick={handleDarkMode} className={ !darkMode  ? "not-visible" : "flex cursor-pointer items-center justify-end gap-2 "}>
            <BsFillSunFill />
            <p>Light Mode</p>
          </div>

        </div>
      </nav>

      <div  className="search-filter relative flex-col mt-10 md:mt-0 gap-5 md:gap-0 md:flex-row flex justify-between ml-10 mr-10 ">
        <SearchBar mode={darkMode} />
        <Filter mode={darkMode} />
      </div>
      <div className="">
        <PageRoute mode={darkMode} />
      </div>
    </div>
  );
};

export default App;
