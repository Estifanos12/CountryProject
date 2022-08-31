import { useState } from 'react'
import {React, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import CountriesCard from '../components/Countries/CountriesCard'


export const SearchedCountries = () => {

  const name = useParams()
  const [searchedCountries,setSearchedCountries] = useState([])

  const fetchSearchedCountries = async ()=>{    
      const data =  await fetch("https://restcountries.com/v3.1/name/" + name.name.toLowerCase())
      const response = await data.json()
      setSearchedCountries(response)
  }

  useEffect(()=>{
    fetchSearchedCountries()
    console.log(searchedCountries)
  },[name.name])
  
  const renderCountries = ()=>{

    if(searchedCountries.length > 0){
        return(
          <div className=' gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                {
                searchedCountries.map((country,key)=>{

                  const slug = country['name']['common']

                    return(
                        <Link to={"/country/" + slug }>
                        <CountriesCard image={country['flags']['png']} name={country['name']['official']} region={country['region']} capital={country['capital']} population={country['population']} />
                        </Link>
                    )
                })
                }
        </div>
        )
    }

    else{
          return(
            <div className='text-center text-2xl'>
              <h1>No Countries Found</h1>
            </div>
          )
    }
  }

  return (
    
    <div className='searched-countries p-[3%] mt-10'>
      {
        renderCountries()
      }
    </div>
  )
}
