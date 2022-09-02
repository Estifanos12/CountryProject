import {React, useState,useRef} from 'react'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Filter = () => {

    const [display,setDisplay] = useState(true)

    const filterRef = useRef()
    const mode = useSelector((state)=> state.toggle.mode)
 
    window.onclick = function(event){
       if(event.target !== document.getElementById("filter")){
            if(display === false){
                setDisplay(true)
            }
    }}

    const handleDisplay = ()=>{
        setDisplay(!display)
    }
    return(
    <div className='filter w-fit'>
        <div style={{backgroundColor: mode === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)", color: mode === "light" ? "hsl(200, 15%, 8%)" : " hsl(0, 0%, 100%)"}}  ref={filterRef} id='filter'  className="filter-title bg-white z-10 flex items-center gap-5 w-fit p-4 rounded-md cursor-pointer" onClick={handleDisplay}>
            <p>Filter by region</p>
            <IoIosArrowDown style={{display: display ? "block" : "none"}}  />
            <IoIosArrowUp style={{display: display ? "none" : "block"}}/>
        </div>
        <div style={{display: display ? "none" : "block",backgroundColor: mode === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)", color: mode === "light" ? "hsl(200, 15%, 8%)" : " hsl(0, 0%, 100%)"}}  className="filter-content bg-white rounded-md absolute mt-2 flex flex-col item-center justify-center p-3 pl-5 w-[180px]">
            <Link to={"/category/africa"}><p className='mb-2'>Africa</p></Link>
            <Link to={"/category/asia"}><p className='mb-2'>Asia</p></Link>
            <Link to={"/category/europe"}><p className='mb-2'>Europe</p></Link>
            <Link to={"/category/america"}><p className='mb-2'>America</p></Link>
            <Link to={"/category/oceania"}><p className='mb-2'>Oceania</p></Link>
        </div>
    </div>

  
  )
}

export default Filter