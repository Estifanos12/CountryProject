import { React, useState,useEffect } from 'react';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import Countries from './components/Countries/Countries';
import PageRoute from './components/routes/PageRoute';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import './App.css'

const App = () => {


  const mode = useSelector((state)=> state.toggle.mode)

  useEffect(()=>{
    console.log(mode)
  },[mode])

  return (

    <div style={{backgroundColor: mode === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)", color: mode === "light" ? "hsl(200, 15%, 8%)" : " hsl(0, 0%, 100%)"}} >
      <Header />
      <div  className="search-filter relative flex-col mt-10 md:mt-0 gap-5 md:gap-0 md:flex-row flex justify-between ml-10 mr-10 ">
        <SearchBar />
        <Filter />
      </div>
      <div className="">
        <PageRoute />
      </div>
    </div>
  );
};

export default App;
