import {React,useEffect,useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({mode}) => {

  const [search,setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit=  (e)=> {
    e.preventDefault()
    navigate('/search/' + search)
  }

  return (
    <form  className='search text-black flex w-[100%] gap-2 items-center border-2 rounded-md md:w-[30%] h-[30%] bg-white' onSubmit={handleSubmit}>
        <AiOutlineSearch size={25} color='grey' className='ml-5' />
        <input type="text" placeholder='Search for country' className='p-2 outline-none w-[100%]' onChange={(e)=> setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchBar