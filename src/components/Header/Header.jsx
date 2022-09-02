import React, { useEffect } from 'react'
import {FaRegMoon} from "react-icons/fa"
import {BsFillSunFill} from "react-icons/bs"
import {useSelector,useDispatch} from "react-redux"
import {toggleMode} from "../../utils/redux-toolkit/features/modeSlice"
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const mode = useSelector((state)=> state.toggle.mode)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(mode)
  },[])
  return (
    <nav style={{backgroundColor: mode === "light" ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)", color: mode === "light" ? "hsl(200, 15%, 8%)" : " hsl(0, 0%, 100%)"}} className="p-[2%] pl-[3%]">
    <div className="title text-sm xl:text-[25px] text-800">
      <Link to={"/CountryProject"}><h1>Where in the world ?</h1></Link>
    </div>

    <div className="toggle text-sm xl:text-[15px] ">
      <div style={{display: mode === "light" ? "flex" : "none"}} className= "flex cursor-pointer items-center justify-center gap-2" onClick={()=> dispatch(toggleMode())}>
        <FaRegMoon />
        <p>Dark Mode</p>
      </div>

      <div style={{display: mode === "dark" ? "flex" : "none"}} className="flex cursor-pointer items-center justify-end gap-2 " onClick={()=> dispatch(toggleMode())}>
        <BsFillSunFill />
        <p>Light Mode</p>
      </div>

    </div>
  </nav>
  )
}

export default Header